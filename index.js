let tasbih = document.querySelector("#tasbih")
let IncrementButton = document.querySelector("#IncrementBtn")
let DescrementButton = document.querySelector("#DescrementBtn")
let ResetButton = document.querySelector("#resetBtn")
let startValue = 0



IncrementButton.addEventListener("click",function(){
    startValue++
    tasbih.innerHTML = startValue
    tasbih.style.color = "black"
    IncrementButton.style.color = ""
    if (startValue ==4){
        document.body.style.backgroundColor = "red"
    }
    else if (startValue ==5){
        document.body.style.backgroundColor = "blue"
    }
    else if (startValue ==6){
        document.body.style.backgroundColor = "green"
    }
    else if (startValue ==7){
        document.body.style.backgroundColor = "orange"
    }
    else if (startValue ==8){
        document.body.style.backgroundColor = "yellow"
    }
    else {
        document.body.style.backgroundColor = "white"
    }

})
DescrementButton.addEventListener("click",function(){
    startValue--
    tasbih.innerHTML = startValue
    tasbih.style.color = "purple"
    IncrementButton.style.color = " "
    if (startValue ==4){
        document.body.style.backgroundColor = "red"
    }
    else if (startValue ==5){
        document.body.style.backgroundColor = "blue"
    }
    else if (startValue ==6){
        document.body.style.backgroundColor = "green"
    }
    else if (startValue ==7){
        document.body.style.backgroundColor = "orange"
    }
    else if (startValue ==8){
        document.body.style.backgroundColor = "yellow"
    }
    else {
        document.body.style.backgroundColor = "white"
    }
})
ResetButton.addEventListener("click",function(){
    startValue = 0
    tasbih.innerHTML = startValue

})

