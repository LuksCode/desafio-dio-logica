function calcularRank(vitoria, derrotas) {
    let contadorVitoria = vitoria - derrotas

    let nivel 

        if(vitoria < 10){
        nivel = "Ferro"
        } else if(vitoria >= 11 && vitoria <= 20 ){
            nivel = "Bronze"
        } else if(vitoria >= 21 && vitoria <= 50){
            nivel = "Ouro"
        } else if(vitoria >= 51 &&  vitoria <= 80){
            nivel = "Platina"
        } else if(vitoria >= 81 && vitoria <= 90){
            nivel = "Diamante"
        } else if(vitoria >= 91 && vitoria <= 100){
            nivel = "Lendario"
        } else if(vitoria >= 101){
            nivel = "Imortal"
        } else {
            nivel = "Negativo"
        }

        console.log(`O herói tem o saldo de vitórias de: ${contadorVitoria}, o nível dele é: ${nivel}`)  
    
}

calcularRank(99, 0);