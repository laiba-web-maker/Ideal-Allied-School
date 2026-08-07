import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { app } from "./firebase-config.js";

const auth = getAuth(app);

const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginBtn.addEventListener("click", () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)

    .then(() => {

        message.style.color = "green";
        message.innerHTML = "Login Successful";

        window.location.href = "admin-dashboard.html";

    })

    .catch((error) => {

        message.style.color = "red";
        message.innerHTML = error.message;

    });

})
