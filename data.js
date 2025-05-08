let ciao = 'ciao'
console.log(ciao)

let rev = 10

function triplicatore(){
  for (i=0; i<3;i++){
    rev = rev*3
    console.log(rev)
  }
   
}

triplicatore();

function quadriplicatore(){
  for (i=0; i<4;i++){
    rev=rev*4
    console.log(rev)
  }
  console.log(rev)
}

quadriplicatore();

let names ='cristina'

function babygirl (nome){
  console.log(nome)
}

babygirl(names);

let soldi = 1000

function stipendio (){

  console.log(`Annuale: ${soldi*12}`)
  console.log(`Mensile: ${soldi*1}`)
}

stipendio();


function sottrazione(a,b){
  console.log(a-b)
}

sottrazione(10,6);

let m = prompt('inserisci visual')
let c = prompt('inserisci categoria')
let guadagno = 0
function youtube(){

  if (c == 'finanza'){
    guadagno = (m/1000)*8
    console.log(guadagno)
  }else if (c == 'food'){
    guadagno = (m/1000)*4
    console.log(guadagno)
  }else{
    guadagno=(m/1000)*3
    console.log(guadagno)
  }

}

youtube();


function yt(visual, categoria){

  if (categoria == 'finanza'){
    console.log((visual/1000)*8)
  }else if(categoria=='food'){
    console.log(visual/1000)
  }else{
    console.log(visual/1000)
  }
}

yt(100000, 'finanza');