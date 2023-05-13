
const modal = document.getElementById('modal');
const openButton = document.getElementById('modalOpen');
const closeButton = document.getElementById('modalClose');

openButton.onclick = function () {
    modal.style = "";
};

closeButton.onclick = () => {
    modal.style = "display: none;";
};