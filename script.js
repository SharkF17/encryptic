let taGiven;
let pResult;

function windowLoaded() {
  let btnEncrypt = document.getElementById("btnEncrypt");
  let btnDecrypt = document.getElementById("btnDecrypt");
  let btnCopy = document.getElementById("btnCopy");
  taGiven = document.getElementById("taGiven");
  pResult = document.getElementById("pResult");

  taGiven.addEventListener("keyup", function () {
    this.value = this.value.toLowerCase();
    this.value = this.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  });

  btnEncrypt.addEventListener("click", encrypt);
  btnDecrypt.addEventListener("click", decrypt);
  btnCopy.addEventListener("click", copy);
}

function encrypt() {
  textGiven = taGiven.value;
  let textConverted = "";
  for (let i = 0; i < textGiven.length; i++) {
    if (textGiven[i] == "a") {
      textConverted = textConverted + "ai";
    } else if (textGiven[i] == "e") {
      textConverted = textConverted + "enter";
    } else if (textGiven[i] == "i") {
      textConverted = textConverted + "imes";
    } else if (textGiven[i] == "o") {
      textConverted = textConverted + "ober";
    } else if (textGiven[i] == "u") {
      textConverted = textConverted + "ufat";
    } else {
      textConverted = textConverted + textGiven[i];
    }
  }
  sendMsg(textConverted);
}

function decrypt(taGiven) {
  let textConverted = "";
  textGiven = document.getElementById("taGiven").value;
  for (let i = 0; i < textGiven.length; i++) {
    if (textGiven[i] == "a" && textGiven[i + 1] == "i") {
      textConverted = textConverted + "a";
      i += 1;
    } else if (
      textGiven[i] == "e" &&
      textGiven[i + 1] == "n" &&
      textGiven[i + 2] == "t" &&
      textGiven[i + 3] == "e" &&
      textGiven[i + 4] == "r"
    ) {
      textConverted = textConverted + "e";
      i += 4;
    } else if (
      textGiven[i] == "i" &&
      textGiven[i + 1] == "m" &&
      textGiven[i + 2] == "e" &&
      textGiven[i + 3] == "s"
    ) {
      textConverted = textConverted + "i";
      i += 3;
    } else if (
      textGiven[i] == "o" &&
      textGiven[i + 1] == "b" &&
      textGiven[i + 2] == "e" &&
      textGiven[i + 3] == "r"
    ) {
      textConverted = textConverted + "o";
      i += 3;
    } else if (
      textGiven[i] == "u" &&
      textGiven[i + 1] == "f" &&
      textGiven[i + 2] == "a" &&
      textGiven[i + 3] == "t"
    ) {
      textConverted = textConverted + "u";
      i += 3;
    } else {
      textConverted = textConverted + textGiven[i];
    }
  }
  sendMsg(textConverted);
}

function sendMsg(text) {
  pResult.innerHTML = text;
}

function copy() {
  console.log(pResult.textContent);
  navigator.clipboard.writeText(pResult.textContent);
  alert("Copiado");
}

window.addEventListener("load", windowLoaded);
