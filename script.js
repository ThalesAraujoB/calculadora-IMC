function calc(){
    var altura = document.getElementById('altura')
    var peso = document.getElementById('peso')
    var resultado = document.getElementById('res')
    var tabela = document.getElementById('tab')
    var altura = Number(altura.value)
    var peso = Number(peso.value)
    var imc = peso/altura ** 2
    resultado.innerHTML = `Sua altura é: <strong>${altura} cm</strong> <br>`
    resultado.innerHTML += `Seu peso é: <strong>${peso} kg</strong> <br><br>`
    res.innerHTML += `Seu IMC é de: <strong>${imc.toFixed(2)}</strong>`

    if(imc < 18.5){
        tabela.innerHTML = `<h2><br><strong><style> #tab { color: orange;} </style>ABAIXO DO PESO NORMAL!</strong></h2>`
    }
    else if(imc >= 18.5 || imc <= 24.9){
        tabela.innerHTML = `<h2><br><strong><style> #tab { color: green;} </style>PESO NORMAL!</strong></h2>`
    }
    else if(imc >= 25.0 || imc <= 29.9){
        tabela.innerHTML = `<h2><br><strong><style> #tab { color: blue;} </style>EXCESSO DE PESO !</strong></h2>`
    }
    else if(imc >= 30.0 || imc <= 34.9){
        tabela.innerHTML = `<h2><br><strong><style> #tab { color: red;} </style>OBESIDADE GRAU 1 !</strong></h2>`
    }
    else if(imc >= 35.0 || imc <= 39.9){
        tabela.innerHTML = `<h2><br><strong><style> #tab { color: red;} </style>OBESIDADE GRAU 2 !</strong></h2>`
    }
    else{
        tabela.innerHTML = `<h2><br><strong><style> #tab { color: red;} </style>OBESIDADE GRAU 3 !</strong></h2>`
    }
}