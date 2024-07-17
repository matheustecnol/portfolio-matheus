//Seu JavaScript de validação aqui

const form = document.getElementById("form");
const campos = document.querySelectorAll("[required]");
const spans = document.querySelectorAll(".formcontato__span");
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;

/*form.addEventListener("submit", (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    assuntoValidate();
    mensagemValidate();
    console.log ("Teste!!!");

});*/

function habilitaBotao() {
    if (campos[0].value != "" && campos[1].value != "" && campos[2].value != "" && campos[3].value != "") {

        document.getElementById("enviar").style.display = 'block'
        
    }
    
    
}


function setErro(index) {
    campos[index].style.border = '2px solid #ff0000';
    spans[index].style.display = 'block';        
}

function removeErro(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';    
}

function nameValidate() {
    if (campos[0].value.length < 3) 
    {
        setErro(0);
    }
    else
    {
        removeErro(0);
        habilitaBotao();
    }
}

function emailValidate() {
    if (emailRegex.test(campos[1].value)) 
    {
        removeErro(1);  
        habilitaBotao();      
    }
    else
    {
        setErro(1);            
    }
}

function assuntoValidate() {
    if (campos[2].value.length < 3) 
    {
        setErro(2);
    }
    else
    {
        removeErro(2);
        habilitaBotao();
    }
}

function mensagemValidate() {
    if (campos[3].value.length < 3) 
    {
        setErro(3);
    }
    else
    {
        removeErro(3);

        habilitaBotao();
    }
}