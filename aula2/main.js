let parNum = 0;
function addParagraph(){
  let myDiv = document.getElementById('pars');
  let par = document.createElement("p");
  parNum++;
  par.innerHTML = "Parágrafo " + parNum;
  par.className = "par"
  myDiv.appendChild(par);
}

function removeParagraph(){
  let myDiv = document.getElementById('pars');
  let len = myDiv.childNodes.length;
  if (len > 0) {
    myDiv.removeChild(myDiv.childNodes[len-1]);
    parNum--;
  }
}

function changeParagraphs(){
  let pars = document.getElementsByClassName("par");
  for (i = 0; i < pars.length; i++) {
    pars[i].innerHTML += " modificado"
  }
}

function addButtons(){
  let myDiv = document.getElementById('pars');
  let button1 = document.createElement('button');
  let button2 = document.createElement('button');
  let button3 = document.createElement('button');
  let button4 = document.createElement('button');
  button1.setAttribute("onClick", "addParagraph()");
  button2.setAttribute("onClick", "removeParagraph()");
  button3.setAttribute("onClick", "changeParagraphs()");
  button4.setAttribute("onClick", "addButtons()");
  button1.innerHTML = "Adicione um parágrafo";
  button2.innerHTML = "Remova um parágrafo";
  button3.innerHTML = "Modifique os parágrafos";
  button4.innerHTML = "Mais botões!";
  myDiv.insertBefore(button4, myDiv.firstChild);
  myDiv.insertBefore(button3, myDiv.firstChild);
  myDiv.insertBefore(button2, myDiv.firstChild);
  myDiv.insertBefore(button1, myDiv.firstChild);
}
