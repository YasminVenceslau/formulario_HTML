

function numerico(){
    var numeroA = Number(document.querySelector('#numero-a').value)
    var numeroB = Number(document.querySelector("#numero-b").value)
    
    var resultado = document.querySelector('#res') 

    if (isNaN(numeroA) || isNaN(numeroB)){ //verifica se os números da entrada são validos
        resultado.style.display='block'
        resultado.innerHTML = 'Por favor, insira um número válido'
        return
    }

    if (numeroB > numeroA){
        resultado.innerHTML = `O Número ${numeroB} é <strong>maior</strong> que o número ${numeroA}.`
    }else if(numeroA > numeroB){
        resultado.innerHTML = `O Número ${numeroA} é <strong>maior</strong> que o número ${numeroB}.`
    }else{
        resultado.innerHTML = `O Número ${numeroA} e ${numeroB} são <strong>iguais</strong>.`
    }

    resultado.style.display='block'
}