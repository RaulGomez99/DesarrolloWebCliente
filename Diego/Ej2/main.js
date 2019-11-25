window.onload = function() {
    document.getElementById("texto").style.height =(window.innerHeight-window.innerHeight*0.2)+"px";
    document.getElementById("negrita").addEventListener("click", negrita);
    document.getElementById("cursiva").addEventListener("click", cursiva);
    document.getElementById("tachada").addEventListener("click", tachada);
}

function negrita (){
    cambiarSpan("negrita");
}

function tachada (){
    cambiarSpan("tachada");
}

function cursiva (){
    cambiarSpan("cursiva");
}

function cambiarColor(e){
    console.log(e);
}

function cambiarSpan(e){
    var selection = window.getSelection();
    var selection_text = selection.toString();
    console.log(selection_text);
    
    var span = document.createElement('span');
    span.textContent = selection_text;
    span.classList.add(e);

    var range = selection.getRangeAt(0);
    console.log(range);
    range.deleteContents();
    range.insertNode(span);
}   