export function ottelOszthato(szam){
    let igazE = false;
    if(Number.isInteger(szam)){
        if(szam<= Number.MAX_SAFE_INTEGER){
            if(szam % 5 === 0){
                igazE = true;
            }
            return igazE;
        }else{
            console.log("Túl nagy a szám, vagy szöveget tartalmaz!")
        } 
    }else{
        console.log("Nem szám!")
    }
}

