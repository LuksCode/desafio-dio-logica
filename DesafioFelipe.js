
const herois = [

 {heroi: "Luks", xp: 100},
 {heroi: "Matheus", xp: 1500},
 {heroi: "Naka", xp: 3500 },
 {heroi: "Kaiq", xp: 6666},
 {heroi: "Fernando", xp: 7634},
 {heroi: "Felipe", xp: 8999},
 {heroi: "Rômulo", xp: 9333},
 {heroi: "Enzo", xp: 10200}
 
]

function nivelxp(xp){
if(xp<1000){
    console.log("Ferro")
    return "Ferro";
} else if(xp<2000){
    console.log("Bronze")
    return "Bronze";
} else if(xp<5000){
    console.log("Prata")
    return "Prata";
} else if(xp<7000){
    console.log("Ouro")
    return "Ouro";
} else if(xp<8000){
  console.log("Platina")
  return "Platina";
} else if(xp<9000){
    console.log("Ascendente")
    return "Ascendente";
} else if(xp<10000){
    console.log("Imortal")
    return "Imortal";
} else if(xp>10001){
    console.log("Radiante BRABO!")
    return "Radiante BRABO!";
}

}

for (let i = 0; i < herois.length; i++) {
    const heroi = herois[i]
    const nivel = nivelxp(heroi.xp)
    console.log("O herói com o nome " + heroi.heroi + " está no nível " + nivel)

}