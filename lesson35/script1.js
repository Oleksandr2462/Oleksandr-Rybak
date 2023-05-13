'use strict';

const playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },

    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },

    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG"
    },

    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }

];


function createSongElement(data) {
    const { author, song } = data;

    const box = document.createElement('div');
    box.className = 'song';

    const logo = document.createElement('div');
    logo.className = 'song__logo';

    const title = document.createElement('h3');
    title.className = 'song__title';
    title.innerText = song;

    const subtitle = document.createElement('h4');
    subtitle.className = 'song__subtitle';
    subtitle.innerText = author;

    box.append(logo, title, subtitle);

    return box;
}


for (let i = 0; i < playList.length; i++) {
    const data = playList[i];
}

const root = document.getElementById('songs');

playList.forEach((data) => {
    root.append(
        createSongElement(data)
    );
});