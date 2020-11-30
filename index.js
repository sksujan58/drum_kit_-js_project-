
var btn_len = document.querySelectorAll(".drum").length



for (i = 0; i < btn_len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        drum_id = this.innerHTML

        makesound(drum_id)
        addanimation(drum_id)

    })
}





document.addEventListener("keydown",function (event){
    drum_id=event.key
    makesound(drum_id)
    addanimation(drum_id)
})










function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")

            audio.play()
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3")

            audio.play()
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3")

            audio.play()

            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3")

            audio.play()
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3")


            audio.play()
            break;


        case "k":
            var audio = new Audio("sounds/kick-bass.mp3")

            audio.play()

            break;
        case "l":
            
            var audio = new Audio("sounds/crash.mp3")

            audio.play()

            break;

        default:
            console.log(key)
            break;
    }
}




function addanimation(key){

    var activebutton=document.querySelector("."+key)
    activebutton.classList.add("pressed")
    setTimeout(function (){
        activebutton.classList.remove("pressed")
    })


}





























