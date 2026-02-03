// About the Maker Modal
const modal = document.getElementById("makerModal");
const btn = document.getElementById("openMaker");
const close = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "block";
close.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// Flying Girl Messages
const messages = ["Hello there...", "How are you?", "Hope you’re doing well!"];
const messageDiv = document.getElementById("girlMessage");
let index = 0;

function showMessage() {
    if (index < messages.length) {
        messageDiv.textContent = messages[index];
        messageDiv.style.opacity = 1;
        setTimeout(() => {
            messageDiv.style.opacity = 0;
            index++;
            setTimeout(showMessage, 500); // small delay before next
        }, 3000);
    }
}

window.onload = () => showMessage();
