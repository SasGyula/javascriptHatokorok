import { ottelOszthato } from "./fuggvenyek.js"

//console.log(ottelOszthato(5))


//tesztelés
//0 -> 0
//console.log('szam=0->true')
//console.log(`szam=0-> ${ottelOszthato(0)}`)
// 55.68 ->
//console.log('szam=55.68->false')
//console.log(`szam=55.68-> ${ottelOszthato(55.68)}`)
// -25 - true
//console.log('szam=-25->true')
//console.log(`szam=-25-> ${ottelOszthato(-25)}`)
// rókarudi -> le se fut | hibás
//console.log('szam=-rókarudi->hiba')
//console.log(`szam=-rókarudi-> ${ottelOszthato("rókarudi")}`)
// 3 -> false
//console.log('szam=-3->false')
//console.log(`szam=-3-> ${ottelOszthato(3)}`)
// 5 -> true
//console.log('szam=-5->true')
//console.log(`szam=-5-> ${ottelOszthato(5)}`)
// 1
//console.log('szam=-1->false')
//console.log(`szam=-1-> ${ottelOszthato(1)}`)
// 2
//console.log('szam=-2->false')
//console.log(`szam=-2-> ${ottelOszthato(2)}`)
// 3
//console.log('szam=-3->false')
//console.log(`szam=-3-> ${ottelOszthato(3)}`)
// 4
//console.log('szam=-4->false')
//console.log(`szam=-4-> ${ottelOszthato(4)}`)

// 555555555555555555555555555555555555555555 -> true
//console.log('szam=-555555555555555555555555555555555555555555->true')
//console.log(`szam=-555555555555555555555555555555555555555555-> ${ottelOszthato(555555555555555555555555555555555555555555)}`)

//console.log('szam=-25->false')
//console.log(`szam=-25-> ${ottelOszthato("25")}`)
let valt1//dekralárom

function fv1(){
    {
        let valt1 = 25;
        console.log(`blokkon belül valt1: ${valt1}`)
    }
    console.log(`blokkon kivul de fv belül valt1: ${valt1}`)
    valt1 = 10; //lokalis valtozo
    console.log(`függvenyen belül valt1: ${valt1}`)
}



console.log(`foprogramban valt1: ${valt1}`)
valt1 = 5 /*globalis valtozo; inicializalom*/
fv1()

//a változók láthatósága: a var változó két féle láthatósággal rendelkezik: modul vagy fájl szintű vagy függvény szintű avagy lokális változó
// let valtozo eseteben a hatókör lehet globális/modulszintű vagy blokkszintű

function fv2(){
    for(var index = 0; index < 3; index++){
        console.log(index)
    }
    console.log(index)
}
fv2()

function fv3() {
    var index =0;
    while(index<3){
        console.log(index)
        index++
    }
    console.log(index)
}
fv3()

const ertek= 1000; // constans értéke nem változtatható meg, blokkszintü, lathatosaga olyan mint a let dekralaraskor rogtön erteket kell adni neki
