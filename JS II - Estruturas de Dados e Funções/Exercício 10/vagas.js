/*
Sistema de Vagas de Emprego:
Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:
1. Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
2. Listar vagas disponíveis
3. Criar um nova vaga
4. Visualizar uma vaga
5. Inscrever um candidato em uma vaga
6. Excluir uma vaga
7. Sair
A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
*/

let vagas = []

function listarVagas() {
    if (vagas.length > 0) {
        vagas.forEach(function (vaga, i) {
            alert("Indice da vaga: " + (i + 1) +
                "\nNome da vaga: " + vaga.nome +
                "\nQuantidade de candidatos: " + vaga.candidatos.length)
        });
    } else { alert("Nenhuma vaga cadastrada!") }
}


function criarVaga() {
    let vaga = {}

    vaga.nome = prompt("Informe o nome da vaga:")
    vaga.descricao = prompt("Informe a descrição da vaga:")
    vaga.dataLimite = prompt("Informe a data limite (dd/mm/aaaa) da vaga:")
    vaga.candidatos = []

    let confirmacao = confirm("Deseja confirmar os dados abaixo?" +
                            "\nNome da vaga: " + vaga.nome +
                            "\nDescrição da vaga: " + vaga.descricao +
                            "\nData limite para a vaga: " + vaga.dataLimite)

    if (confirmacao === true) {
        vagas.push(vaga)
        alert("Vaga registrada")
    } else { alert("Voltando ao menu") }
}


function visualizarVaga() {
    let indice = (parseInt(prompt("Informe o índice da vaga:")) - 1)

    if (vagas[indice]) {
        let dadosVaga = "Índice da vaga: " + (indice + 1) +
                        "\nNome da vaga: " + vagas[indice].nome +
                        "\nDescrição da vaga: " + vagas[indice].descricao +
                        "\nData limite: " + vagas[indice].dataLimite +
                        "\nQuantidade de candidatos: " + vagas[indice].candidatos.length +
                        "\nLista de candidatos: "

        vagas[indice].candidatos.forEach(function (nomeCandidato, index) {
            dadosVaga += nomeCandidato
            if (index < (vagas[indice].candidatos.length - 1)) {
                dadosVaga += ", "
            }
        })

        alert(dadosVaga)
    } else { alert("Vaga não encontrada!") }
}


function inscreverCandidato() {
    let indice = (parseInt(prompt("Informe o índice da vaga:")) - 1)

    if (vagas[indice]) {
        let nomeCandidato = prompt("Informe o nome do candidato:")

        let confirmacao = confirm("Deseja confirmar os dados abaixo?" +
                                "\nNome do candidato: " + nomeCandidato +
                                "\nNome da vaga: " + vagas[indice].nome)

        if (confirmacao === true) {
            vagas[indice].candidatos.push(nomeCandidato)
            alert("Candidato registrado")
        } else { alert("Voltando ao menu") }
    } else { alert("Vaga não encontrada!") }
}


function excluirVaga() {
    let indice = (parseInt(prompt("Informe o índice da vaga que deseja excluir:")) - 1)

    if (vagas[indice]) {    
        if (vagas[indice]) {
            let confirmacao = confirm("Deseja mesmo excluir a vaga abaixo?" +
                                    "\nNome da vaga: " + vagas[indice].nome +
                                    "\nDescrição da vaga: " + vagas[indice].descricao +
                                    "\nData limite para a vaga: " + vagas[indice].dataLimite)

            if (confirmacao === true) {
                vagas.splice(indice, 1)
                alert("Vaga excluída!")
            } else { alert("Voltando ao menu") }
        }
    } else { alert("Vaga não encontrada!") }
}


do {
    opcao = prompt(
        "Sistema de Vagas\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar uma nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever candidato\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair\n"
    )

    switch (opcao) {
        case "1":
            listarVagas()
            break
        case "2":
            criarVaga()
            break
        case "3":
            visualizarVaga()
            break
        case "4":
            inscreverCandidato()
            break
        case "5":
            excluirVaga()
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
            break
    }

} while (opcao != "6");