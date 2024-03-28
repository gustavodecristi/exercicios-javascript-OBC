/*
Conversor de Medidas:
Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para
qual unidade de medida esse valor deve ser convertido. As opções são:
milímetro (mm)
centímetro (cm)
decímetro (dm)
decâmetro (dam)
hectômetro (hm)
quilômetro (km)
O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)
*/

const medida = parseFloat(prompt("Insira uma medida em metros:"))

const unidade = prompt(
    "Para qual unidade de medida deseja converter?" +
    "\n1 - milímetros (mm)" +
    "\n2 - centímetros (cm)" +
    "\n3 - decímetros (dm)" +
    "\n4 - decâmetros (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - quilômetro (km)"
)


switch (unidade) {
    case "1":
        alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
        break
    case "2":
        alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
        break
    case "3":
        alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
        break
    case "4":
        alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
        break
    case "5":
        alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
        break
    case "6":
        alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
        break
    default:
        alert("Opção inválida!")
        break
}