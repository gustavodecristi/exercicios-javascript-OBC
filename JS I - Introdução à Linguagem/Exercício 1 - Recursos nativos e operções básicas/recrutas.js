/*
Cadastro de Recrutas:
Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:
o primeiro nome
o sobrenome
o campo de estudo
o ano de nascimento
Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).
*/

const primeiroNome = prompt("Informe o primeiro nome do recruta:")
const sobrenome = prompt("Informe o sobrenome do recruta:")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?")
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?")

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2022 - anoDeNascimento)
)