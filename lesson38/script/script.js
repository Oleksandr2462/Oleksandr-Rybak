"use strict"

let title = document.querySelector(".input");
let type = document.querySelector(".type-select");
let searchBtn = document.querySelector(".search-btn");
let divWrapper = document.createElement("div");
divWrapper.classList.add("wrapper");
document.body.appendChild(divWrapper);


let titleValue;
let typeValue = "movie";

title.addEventListener("change", updateTitle);
type.addEventListener("change", updateType);
searchBtn.addEventListener("click", searchFilms);

function updateTitle(ev) {
    titleValue = ev.target.value;
}

function updateType(ev) {
    typeValue = ev.target.value;
}

function searchFilms() {
    console.log(titleValue, typeValue);
    fetch(`http://www.omdbapi.com/?s=${titleValue}&type=${typeValue}&i=tt3896198&apikey=79e25e5e&page=1`)
        .then((res) => res.json())
        .then((films) => {
            let listFilms = films.Search;
            listFilms.forEach(film => {
                creatFilm(film);
            });
            
    })
}

function creatFilm(film) {
    let title = document.createElement("h2");
    let year = document.createElement("h3");
    let type = document.createElement("h3");
    let poster = document.createElement('img');
    poster.src = film.Poster;
    title.innerText = film.Title;
    year.innerText = film.Year;
    type.innerText = film.Type;
    document.querySelector(".wrapper").appendChild(title);
    document.querySelector(".wrapper").appendChild(type);
    document.querySelector(".wrapper").appendChild(year);
    document.querySelector(".wrapper").appendChild(poster);
    console.log(film);
}

