/*
Calculadora Geométrica:
Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
1. área do triângulo: base * altura / 2
2. área do retângulo: base * altura
3. área do quadrado: lado²
4. área do trapézio: (base maior + base menor) * altura / 2
5. área do círculo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e
enquanto ela não for escolhida deverá voltar ao menu.
*/

function calcularAreaTriangulo() {
    const base = parseFloat(prompt("Informe a base do triângulo:"))
    const altura = parseFloat(prompt("Informe a altura do triângulo:"))
    return base * altura / 2
}

function calcularAreaRetangulo() {
    const base = parseFloat(prompt("Informe a base do retângulo:"))
    const altura = parseFloat(prompt("Informe a altura do retângulo:"))
    return base * altura
}

function calcularAreaQuadrado() {
    const lado = parseFloat(prompt("Informe a área do quadrado:"))
    return lado * lado
}

function calcularAreaTrapezio() {
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const altura = parseFloat(prompt("Informe a altura do trapézio:"))
    return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo:"))
    return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
                break
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }

    } while (opcao !== "6");
}

executar()