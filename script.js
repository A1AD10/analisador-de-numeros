let add = document.getElementById('txtn')
let tab = document.getElementById('txttab')
var num = []
 
function numero(n) {  // 'n' é só um parametro, poderia ser qualquer letra
    if(Number(n) > 0 && Number(n) <= 100) {        
        return true
    } else {
        return false
    }
}

function lista(n, l) {  // 'n' e 'l' são só um parametro, poderia ser qualquer letra
    if(l.indexOf(Number(n)) != -1) { // confere se o número já existe no array
        return true
    } else {
        return false
    }
}


function executar() {
    if(numero(add.value) && !lista(add.value, num)) {
        // window.alert('ok')
        let i = Number(add.value)
        let tabela = document.createElement('option')
        tabela.text = `Valor ${i} adicionado`
        tab.appendChild(tabela)
        num.push(i)  // insere o valor digitado na array
        
    } else {
        window.alert('Valor inválido ou já existente na lista!')
        //return false
    }
    add.value = ''
    add.focus()
}

function limpar() { // limpa o resultao quando adiciona um novo valor
    res = document.querySelectorAll('.res')
    res[0].innerHTML = ''
    res[1].innerHTML = ''
    res[2].innerHTML = ''
    res[3].innerHTML = ''
    res[4].innerHTML = ''
}

function terminar() {
    let res = document.querySelectorAll('.res')
    res[0].innerHTML = `<p>Ao todo, temos ${num.length} numeros cadastrados.</p>`

    let maior = Math.max.apply(null, num) // encontra o maior valor do array
    res[1].innerHTML = `<p>O maior valor informado foi ${maior}.</p>`

    let menor = Math.min.apply(null, num) // encontra o menor valor do array
    res[2].innerHTML = `<p>O menor valor informado foi ${menor}.</p>`
    
    // somando todos os valores
    let conta = 0
    for(let c = 0; c < num.length; c++) {
        conta += num[c]
        res[3].innerHTML = `<p>Somando todos os valores temos ${conta}.</p>`        
    }
    conta /= num.length // soma os valores e tira a média
    res[4].innerHTML = `<p>A média dos valores digitado é ${conta}.</p>`
}

// cria uma função e adiciona funções que funcionam com click
window.onload = function() {
    let adiciona = document.getElementById('adic')
    let finaliza = document.getElementById('fin')
    adiciona.onclick = function() {
        executar()
        limpar()
    }
    finaliza.onclick = function() {
        terminar()
    }
}
