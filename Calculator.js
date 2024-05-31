# here Calculator javascript
let button = document.querySelector("button")
button.addEventListener("click",()=>{
    let height=document.querySelector(".height").value
    let bmi=document.querySelector(".bmi")
    let weight=document.querySelector(".weight").value
    let BMI=(weight/(height*height))
    BMI=BMI.toFixed(2)
    bmi.innerHTML=`Your BMI is ${BMI}`
    
})
