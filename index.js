document.addEventListener("DOMContentLoaded", function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomImageSource = "images/" + randomDiceImage;

    var image1 = document.querySelector(".img1");
    if (image1) {
        image1.setAttribute("src", randomImageSource);
    }

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    var image2 = document.querySelector(".img2");
    if (image2) {
        image2.setAttribute("src", randomImageSource2);
    }

    var heading = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        heading.innerHTML = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        heading.innerHTML = "Player 2 Wins!";
    } else {
        heading.innerHTML = "Draw!";
    }
});
