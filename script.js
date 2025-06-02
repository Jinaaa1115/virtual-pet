
let imageHolder=document.getElementById("image-holder")
let hunger=0
let happiness=0
let energy=0
let totalPlayed=JSON.parse(localStorage.getItem("totalPlayed"))||0
let score=JSON.parse(localStorage.getItem("score"))||0
let div=document.createElement("div")
let interval
let hungrybar=document.getElementById("hunger-bar")
let happinessbar=document.getElementById("happiness-bar")
let energybar=document.getElementById("energy-bar")
let petemotions=document.getElementById("pet-emotions")
document.addEventListener("DOMContentLoaded",()=>{
    div.innerHTML = `<p>You have helped your buddy win ${score} out of ${totalPlayed} times!</p>`
  document.getElementById("main-container").append(div)
}
)
document.getElementById("start").addEventListener("click",()=>{
  imageHolder.src="Images/hello.png"
  hunger=70
  happiness=80
  energy=80
  updateWidth()
  document.getElementById("main-container").style.display="none"
  document.getElementById("pet-container").style.display="flex"
  document.getElementById("mainbar").style.display="none"
 interval= setInterval(()=>{
    hunger+=2
    happiness-=3
    energy-=3
   updateWidth()
  },1000)
})
document.getElementById("feed").addEventListener("click",feed)
function feed(){
  let random=Math.random()
  if(random>0.5){
    imageHolder.src="Images/thumbs-down.png"
    petemotions.innerText="Ummm! You have no food for now!!"
    setTimeout(()=>{
      
      petemotions.innerText=""
      updateImage()
    },2000)
    return
  }
  hunger-=30
  happiness+=10
  energy+=20
   updateWidth()
   
}
document.getElementById("play").addEventListener("click",play)
function play(){
   let random = Math.random()
 if (random > 0.5) {
   imageHolder.src="Images/thumbs-down.png"
   petemotions.innerText = "Ummm! You cant't play for now!!"
   setTimeout(() => {
     updateImage()
     petemotions.innerText = ""
   }, 5000)
   return
 }
  hunger+=20
  happiness+=20
  energy-=30
  updateWidth()
}
document.getElementById("sleep").addEventListener("click",sleep)
function sleep(){
   let random = Math.random()
 if (random > 0.5) {
   imageHolder.src="Images/thumbs-down.png"
   petemotions.innerText = "Ummm! You cant't sleep for now!!"
   setTimeout(() => {
     updateImage()
     petemotions.innerText = ""
   }, 5000)
   return
 }
  hunger+=10
  happiness+=0
  energy-=10
  updateWidth()
}
function updateImage(){
  if(hunger>=80){
    imageHolder.src="Images/angry.png"
  }
}
function updateWidth(){
  hungrybar.style.width = `${hunger}%`
happinessbar.style.width = `${happiness}%`
energybar.style.width = `${energy}%`
if(hunger<=20&&happiness>=100&&energy>=100){
  clearInterval(interval)
  document.getElementById("main-container").style.display = "flex"
document.getElementById("pet-container").style.display = "none"
score++
totalPlayed++
localStorage.setItem("score",JSON.stringify(score))
localStorage.setItem("totalPlayed",JSON.stringify(totalPlayed))
 alert("You win!!")
  div.innerHTML = `<p>You have helped your buddy win ${score} out of ${totalPlayed} times!</p>`
 document.getElementById("main-container").append(div)

}
else if(hunger>=90||happiness<=10||energy<=10){
  clearInterval(interval)
  totalPlayed++
  localStorage.setItem("score",JSON.stringify(score))
  localStorage.setItem("totalPlayed",JSON.stringify(totalPlayed))
  alert("You Lose")
   document.getElementById("main-container").style.display = "flex"
 document.getElementById("pet-container").style.display = "none"
 div.innerHTML=`<p>You have helped your buddy win ${score} out of ${totalPlayed} times!</p>`
 document.getElementById("main-container").append(div)
 
}
}