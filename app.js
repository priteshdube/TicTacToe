const gb= document.querySelector('.gameboard')
const info= document.getElementById('info')

const startcells=[
    "", "", "", "", "", "", "", "", ""
]

let go= "circle"
info.textContent="circle goes first"

function createBoard(){
    startcells.forEach((cell, index)=>{
     const cellElement=   document.createElement('div');
     cellElement.classList.add('square')
     cellElement.id= index;
     cellElement.addEventListener('click', addGo) 
        gb.append(cellElement)

    })

   
}

createBoard();

function addGo(e){
    // console.log(e.target)

    const godisplay= document.createElement('div')
    godisplay.classList.add(go)
    e.target.append(godisplay)
    go = go==='circle' ? "cross" : "circle"
    info.textContent="it is now " + go +"'s go"
    e.target.removeEventListener('click', addGo)
    checkScore();
}

function checkScore(){
     const allsquare= document.querySelectorAll('.square')
    const wincombo=[
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]


    wincombo.forEach(array => {
         let circlewins=array.every(cell =>
             allsquare[cell].firstChild?.classList.contains('circle'))

         if(circlewins){
            info.textContent="circle wins";
            allsquare.forEach(square => square.replaceWith(square.cloneNode(true)))
            return 
         }
    })


    wincombo.forEach(array => {
        let crosswins=array.every(cell => 
            allsquare[cell].firstChild?.classList.contains('cross'))

        if(crosswins){
           info.textContent="cross wins";
           allsquare.forEach(square => square.replaceWith(square.cloneNode(true)))
           return 
        }
   })
}
