var guesses=[]

var guduri=document.getElementById('developer')
var allthebest=document.getElementById('goodluck')
var submit=document.getElementById("sbt-btn")
var guess=document.getElementById("guess")
var message=document.getElementById("message")

allthebest.style.color='#fa07e6'

function getRandom() {
  letters='0123456789ABCDEF'
  color='#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)]

    }
  return color
}

function changeColor() {
  color=getRandom()
  guduri.style.color=color

}
setInterval('changeColor()',500)

number=Math.floor(Math.random()*100)

submit.addEventListener("click",function () {
  if (number==guess.value) {
    message.textContent="Congratulations...You Guessed the Right Number " + number +"."
  }
  else if (guess.value=='') {
    alert("Please Enter a Number Between 1 to 100.")
  }
  else {
    guesses.push(guess.value)

    for (var i = 1; i <= guesses.length; i++) {
      g=document.getElementById("guess"+i)
      g.textContent=guesses[i-1]+"  "
      if (i>10) {
        message.textContent='Sorry ...You Lost The Game..Try Again...!'
      }
    }
    if (guess.value>number) {
      message.textContent='Your Guess is Too High.'
    }else {
      message.textContent='Your Guess is Too Low.'
    }
    guess.value='';
    guess.focus();
    // guess.e.target.autofocus=true;
  }
})

var newgame=document.getElementById("newgame")
newgame.addEventListener('click',function () {
for (var i = 1; i <= guesses.length; i++) {
 document.getElementById("guess"+i).textContent=''
}
  guesses=[]
  guess.value=''

  message.textContent=''
})
