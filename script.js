document.getElementById("num").addEventListener("input", function () {
  const num = document.getElementById("num");
  const numSlider = document.getElementById("numSlider");
  if (num.value < 1) {
    num.value = 1;
    numSlider.value = 1;
  } else if (num.value > 30) {
    num.value = 30;
  }
});

function copiar(){
	const senhaGeradaTexto = document.getElementById("senhaGerada").innerText;
	const textArea = document.createElement("textArea");
    	textArea.value = senhaGeradaTexto;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand('copy');
	document.body.removeChild(textArea);
}

function atualizarSlider() {
  const num = document.getElementById("num");
  const numSlider = document.getElementById("numSlider");

  num.value = numSlider.value;
}

function atualizarInput() {
  const num = document.getElementById("num");
  const numSlider = document.getElementById("numSlider");

  numSlider.value = num.value;
}


function mostrarSenha() {
  const num = document.getElementById("num").value;
  const minusculas = document.getElementById("minusculas").checked;
  const maiusculas = document.getElementById("maiusculas").checked;
  const numerais = document.getElementById("numerais").checked;
  const especiais = document.getElementById("especiais").checked;
  const senhaGerada = document.getElementById("senhaGerada");
  senhaGerada.innerHTML = geraSenhas(
    num,
    minusculas,
    maiusculas,
    numerais,
    especiais
  );
}

function geraSenhas(num, minusculas, maiusculas, numerais, especiais) {
  const arrayMinusculas = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const arrayMaiusculas = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const arrayNumeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const arrayEspeciais = [
    "!",
    "?",
    "@",
    "#",
    "$",
    "%",
    "&amp", //&
    "*",
    "(",
    ")",
    "-",
    "+",
    "_",
    "=",
    "[",
    "]",
    "{",
    "}",
    ",",
    ".",
    "&lt", //<
    "&gt", //>
  ];
  const arrCaracteres = [];
  const arrFinal = [];

  function verificaCondicao(caracter, arrayBase, arrayCaracter) {
    if (caracter == 1) {
      arrayBase.push(...arrayCaracter);
    }
  }

  verificaCondicao(minusculas, arrCaracteres, arrayMinusculas);
  verificaCondicao(maiusculas, arrCaracteres, arrayMaiusculas);
  verificaCondicao(numerais, arrCaracteres, arrayNumeros);
  verificaCondicao(especiais, arrCaracteres, arrayEspeciais);

  for (let i = arrCaracteres.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrCaracteres[i], arrCaracteres[j]] = [arrCaracteres[j], arrCaracteres[i]];
  }

  for (let i = 0; i < num; i++) {
    arrFinal.push(
      arrCaracteres[Math.floor(Math.random() * arrCaracteres.length)]
    );
  }

  let resultado = arrFinal.join("");
  return resultado;
}
