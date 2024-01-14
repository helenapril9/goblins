class Game{    
    createBoard(x){
        let mainBlock = document.querySelector('.main-block');
        let block;
        for (let i=0; i <= (x-1); i++){
            for (let i=0; i <= (x-1); i++){
                block = document.createElement('div');
                mainBlock.appendChild(block);
                block.className = "block hole"; 
            }
        }      
    }   
    recognizeClick() {
        const holes = document.getElementsByClassName("block hole");
        for(const hole of holes) {
            hole.addEventListener("click", e => {
                if (hole.classList.contains("goblin")){
                    this.hitCounter += 1;} else this.missCounter += 1;
                    alert (this.hitCounter);
                    alert (this.missCounter);
    
                           }
            )
            }
      }      
}

function chooseHole(max) {
    return Math.floor(Math.random() * max);   
}

let game1 = new Game;
game1.createBoard(4); 
const holes = document.getElementsByClassName('block hole');
const img = '<img src="./img/goblin.png">';
let currentHole = 0;
let newHole = 0;

function runGame(){
    setInterval(() => {        
        newHole = chooseHole(holes.length - 1);
        if (newHole === currentHole && newHole !== (holes.length-1)) {
            newHole += 1;            
          }
          if (newHole === currentHole && newHole === (holes.length-1)) {
            newHole -= 1;
          }  
            holes[newHole].innerHTML = img;   
            holes[newHole].classList.add('goblin');
            holes[currentHole].innerHTML = ' ';
            holes[currentHole].classList.remove('goblin');        
            currentHole = newHole;    
            const holesArr = document.getElementsByClassName("block hole");
            let hitCounter = 0;
            let misCounter = 0;        
            for(const hole of holesArr) {
                hole.addEventListener("click", e => {                
                    if (hole.classList.contains("goblin")){
                    hitCounter += 1;} 
                    if (hitCounter===5){
                        document.write("Вы выиграли, счет =", hitCounter);
                    }
                    else misCounter += 1;                    
                    if (misCounter===5){
                        document.write("Вы проиграли, так как пропустили  ",misCounter,"  ударов");
                    }                                        
                }
                )
            }           
        },
    1000);    
} 

runGame()
