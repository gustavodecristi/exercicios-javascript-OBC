const aritmeticaSimples = (...numeros) => {return numeros.reduce((acc, curr) => acc + curr, 0) / numeros.length}
console.log(aritmeticaSimples(1,2,3,4,5))

const aritmeticaPonderada = (...numeros) => {
    let multiplicaValores = 0
    for(let i = 0; i< numeros.length; i++) {
        multiplicaValores += (numeros[i][0] * numeros[i][1])
    }

    return multiplicaValores
}

console.log(aritmeticaPonderada([7,1], [7,2]))