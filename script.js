// alert button

const buttons = document.querySelectorAll(".status");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const message = btn.getAttribute("data-msg");
        alert(message);
    });
});

//submit button

function showAlert() {
    // get values from input
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let message = document.getElementById("message").value.trim();

    //check if any field is empty
    if (!name || !email || !mobile || !message) {
        alert("Please type something!")
        return;
    }

    //only if all is filled
    alert("Thank you so much and our team will review and respond accordingly.")
}
