var numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(event){
        
        // var buttonInnerHtml = this.innerHTML;
        var ttt = event.target.innerHTML;
        // console.log(ttt);
        // console.log(buttonInnerHtml);
        // makeSound(buttonInnerHtml);
        makeSound(ttt);
        buttonAnimation(ttt); 
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    // console.log(event.key);
    buttonAnimation(event.key);
})

function makeSound(buttonInnerHtml) {
    switch (buttonInnerHtml) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHtml);
            break;
    }

}

function buttonAnimation(keyPressed){
    var buttonPressed = document.querySelector("." + keyPressed);
    buttonPressed.classList.add("pressed");
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    }, 100);
}