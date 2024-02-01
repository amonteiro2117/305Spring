document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");

    const createDiv = (text) => {
        const div = document.createElement("div");
        div.textContent = text;
        return div;
    };

    const addDiv = (text) => {
        const div = createDiv(text);
        container.appendChild(div);
    };

    const removeDivs = () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    };

    const handleClick = () => {
        removeDivs();
        addDiv("Button Clicked!");
    };

    const button = document.getElementById("myButton");
    button.addEventListener("click", handleClick);

    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => {
        removeDivs();
    });
});