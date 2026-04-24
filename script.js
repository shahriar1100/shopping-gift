const happyUi = document.getElementById("happyUi")
const sadUi = document.getElementById("sadUi")
const mainBox = document.getElementById("mainBox")


const shoppingAmount = document.getElementById("shoppingAmount")
const age = document.getElementById("age")

const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", function (){
    const amountValue = shoppingAmount.value
    const ageValue = age.value
    if(amountValue > 5000 && ageValue > 20){
        happyUi.style.display = "block";
        mainBox.style.display = "none";
    }else{
        sadUi.style.display = "block";
        mainBox.style.display = "none";
    }
})