alert("Welkom bij Dino's Pizza")
alert("De small pizza kost € 3.95 ")
alert("De medium pizza kost € 5.95")
alert("De large pizza kost € 9.95")
alert("Kan ik uw bestelling aan nemen?")

var amountSmall =prompt("Hoeveel kleine pizza's wil je ?")
if(isNaN(amountSmall)== true) {
  amountSmall= 0
  alert("ongeldige getal")
}
var amountMedium =prompt("Hoeveel middel pizza's wil je ?")
if(isNaN(amountMedium)== true) {
  amountSmall= 0
  alert("ongeldige getal")
}
var amountLarge =prompt("Hoeveel grote pizza's wil je ?")
if(isNaN(amountLarge)== true) {
  amountLargel= 0
  alert("ongeldige getal")
}

const priceSmall =  3.95;
const priceMedium = 5.95;
const priceLarge = 9.95;

var priceS= (amountSmall*priceSmall)
var priceM= (amountMedium*priceMedium)
var priceL= (amountSmall*priceSmall)

document.write ("€"+" ")
document.write (amountSmall*priceSmall+"<br>")
document.write ("€"+" ")
document.write (amountMedium*priceMedium+"<br>")
document.write ("€"+" ")
document.write (amountLarge*priceLarge+"<br>")

document.write ("Het totaal bedrag is"+"<br>")
document.write ("€"+" ")
document.write (priceS+priceM+priceL)
document.write ("<br>"+"Bedankt voor uw bestelling, fijne dag verder")
