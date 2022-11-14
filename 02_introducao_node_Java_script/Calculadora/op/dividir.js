function dividir (a,b) {
    let divisao = a / b
    if (a===0 || b===0){
        return 'Não é possível dividir por 0'
    }
    return divisao
}

module.exports = dividir