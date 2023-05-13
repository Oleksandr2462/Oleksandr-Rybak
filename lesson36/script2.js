
const table = document.querySelector(".table");
const tableBody = document.querySelector("#tableBody");
const containId = document.querySelector(".table-row-id");
const containName = document.querySelector(".table-row-name");
const containAge = document.querySelector(".table-row-age");


containId.addEventListener("click", sortById);
containName.addEventListener("click", sortByName);
containAge.addEventListener("click", sortByAge);


function sortById() {
    const rows = Array.from(tableBody.children);
    rows.sort((a, b) => +a.children[0].textContent - +b.children[0].textContent);
    rows.forEach(r => tableBody.append(r));
}


function sortByName() {
    const rows = Array.from(tableBody.children);
    rows.sort((a, b) => {
        const name1 = a.children[1].textContent;
        const name2 = b.children[1].textContent;
        return name1.localeCompare(name2)
    });

    rows.forEach(r => tableBody.append(r));
}

function sortByAge() {
    const rows = Array.from(tableBody.children);
    rows.sort((a, b) => +a.children[2].textContent + b.children[2].textContent);
    rows.forEach(r => tableBody.append(r));
}