window.onload = function () {
  const myInput = document.getElementById("colorInput");
  myInput.addEventListener("blur", function (event) {
    setTimeout(function () {
      myInput.focus();
    }, 0);
  });
  myInput.focus();
};


document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.querySelector(".fa-clipboard");
  const colorText = document.getElementById("colorText");

  copyButton.addEventListener("click", function () {
    const textToCopy = colorText.textContent;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Metin kopyalandı: " + textToCopy);
      })
      .catch((err) => {
        console.error("Metin kopyalanırken bir hata oluştu: ", err);
      });
  });
});

const clickButton = document.querySelector(".btn-click");
const overButton = document.querySelector(".btn-over");
const bgDiv = document.querySelector(".bgDiv");
const colorInput = document.getElementById("colorInput");

function getRandomColor() {
  const renkparametreleri = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += renkparametreleri[Math.floor(Math.random() * 16)];
  }
  return color;
}

function arkaplanChange() {
  const randomColor = getRandomColor();
  bgDiv.style.backgroundColor = randomColor;
  document.getElementById("colorText").textContent = randomColor;
  colorInput.value = randomColor;
}

clickButton.addEventListener("click", arkaplanChange);
overButton.addEventListener("mouseenter", arkaplanChange);

colorInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    arkaplanChange();
  }
});

arkaplanChange();
