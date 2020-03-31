/**
 * This is the drum kit project
 * You are provided with an images folder which contains drum images. 
 * You are required to attache each drum image to each alphabet in the html file (Watch the video to know which button has which image).
 * 
 * You are also provided with a sounds folder.
 * 
 * You are to attach each sound to the images and button in the html.
 * 
 * When you click on each button it should play the curresponding drum sound. 
 * 
 * Also When the curresponding key is pressed on the key board, the drum sound should be made. 
 * 
 * Key to each drum
 * button w = tom-1.mp3
 * button a = tom-2.mp3
 * button s = tom-3.mp3
 * button d = tom-4.mp3
 * button j = kick-bass.mp3
 * button k = snare.mp3
 * button l = crash.mp3
 * 
 * NOTE
 * Codes must be properly commented. 
 * Use of ES6 Syntax is important. 
 */


 
// Hold buttons in variabel
let tableRow = document.querySelector('.set');
const buttons = tableRow.querySelectorAll('button')  


// call drumkit function before initialization
drumkit();

// initialize drumkit funtion and
// 
function drumkit(){
    
// loop through all the buttons and
// add background images of deffrent drums to each button  
    for(let i = 0; i<buttons.length;i++){
        buttons[0].style.backgroundImage = "url('images/tom1.png')";
        buttons[1].style.backgroundImage = "url('images/tom2.png')";
        buttons[2].style.backgroundImage = "url('images/tom3.png')";
        buttons[3].style.backgroundImage = "url('images/tom4.png')";
        buttons[4].style.backgroundImage = "url('images/kick.png')";
        buttons[5].style.backgroundImage = "url('images/snare.png')";
        buttons[6].style.backgroundImage = "url('images/crash.png')";

// listen for click events on each one
// output a sound if a button is clicked

        buttons[0].addEventListener('click',(event)=>{
            event.preventDefault()
            buttons[0].value= new Audio('sounds/tom-1.mp3').play()
         })
         buttons[1].addEventListener('click',()=>{
             new Audio('sounds/tom-2.mp3').play()
         })
         buttons[2].addEventListener('click',()=>{
             new Audio('sounds/tom-3.mp3').play()
         })
         buttons[3].addEventListener('click',()=>{
             new Audio('sounds/tom-4.mp3').play()
         })
         buttons[4].addEventListener('click',()=>{
             new Audio('sounds/kick-bass.mp3').play()
         })
         buttons[5].addEventListener('click',()=>{
             new Audio('sounds/snare.mp3').play()
         })
         buttons[6].addEventListener('click',()=>{
             new Audio('sounds/crash.mp3').play()
         })
    }
    // Listen for a keypress event on spesific keys on the key board
    // and out put the sound alocated to the key
        document.addEventListener('keypress',(e)=>{
    if(e.key == 'W' || e.key == 'w'){
        new Audio('sounds/tom-1.mp3').play()
    }else if(e.key == 'A' || e.key == 'a'){
        new Audio('sounds/tom-2.mp3').play();
    }else if(e.key == 'S' || e.key == 's'){
        new Audio('sounds/tom-3.mp3').play();
    }else if(e.key == 'D' || e.key == 'd'){
        new Audio('sounds/tom-4.mp3').play();
    }else if(e.key == 'J' || e.key == 'j'){
        new Audio('sounds/kick-bass.mp3').play();
}   else if(e.key == 'K' || e.key == 'k'){
        new Audio('sounds/snare.mp3').play();
    }else if(e.key == 'I' || e.key == 'i'){
        new Audio('sounds/crash.mp3').play();
    }
    })
    }



