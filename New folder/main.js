const rayuanButton = document.getElementById('rayuanButton');
const rayuanText = document.getElementById('rayuanText');

const rayuanArray = [
        "gebukin adek kamu",
        "gebukin adek kamu",
        "gebukin adek kamu",
        "gebukin adek kamu",
        "gebukin adek kamu",
        "gebukin adek kamu",
];

rayuanButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * rayuanArray.length);
    rayuanText.textContent = rayuanArray[randomIndex];
    rayuanText.classList.remove('hidden');
});