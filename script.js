// alert button

const buttons = document.querySelectorAll(".status");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const message = btn.getAttribute("data-msg");
        alert(message);
    });
});