document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".result-container button");

    button.addEventListener("click", function () {

        let session = document.querySelectorAll("select")[0].value;
        let studentClass = document.querySelectorAll("select")[1].value;
        let rollNo = document.querySelector("input").value.trim();

        if (studentClass === "Select Class") {
            alert("Please select your class.");
            return;
        }

        if (rollNo === "") {
            alert("Please enter your Roll Number.");
            return;
        }

        alert(
            "Session: " + session +
            "\nClass: " + studentClass +
            "\nRoll Number: " + rollNo +
            "\n\nResult system will be connected soon."
        );

    });

});
let showVideo = false;

const image = document.getElementById("bannerImage");
const video = document.getElementById("bannerVideo");

if (showVideo) {
    image.style.display = "none";
    video.style.display = "block";
} else {
    image.style.display = "block";
    video.style.display = "none";
}