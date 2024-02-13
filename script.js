"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yesss!!! I LOVE YOU";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Sure ka na?",
    "Please",
    "Wag please :(",
    "Ate ko masaket na :(",
    "Iyak na ako!",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

document.addEventListener('DOMContentLoaded', function() {
  const audioYes = new Audio('Mine.mp3');
  const audiokiss = new Audio('kiss.mp3');
  const audioNo = new Audio('no_sound.mp3');

  // Set the loop property to true for continuous playback
  audioYes.loop = true;
  audiokiss.loop = true;

  function playMusic() {
    audioYes.play();
  }

  function playkiss() {
    audiokiss.play();
  }

  function playNoSound() {
    audioNo.play();
  }

  const yesButton = document.querySelector('.btn--yes');
  const noButton = document.querySelector('.btn--no');

  window.addEventListener('click', function() {
    playMusic();
    window.removeEventListener('click', playMusic);
  });

  yesButton.addEventListener('click', playkiss);
  noButton.addEventListener('click', function() {
    playNoSound();
  });
});