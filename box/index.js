//const inputVal = document.querySelector("input").value
//const inputButton = document.getElementsByClassName("btn")[0]

//function displayval(){
 // alert(inputval.value)

//}

//const a = 10
//const b = 30
//const c = a + b 
//console.log(c)


//function add(a,b){
  //return a + b
//}



//get your guess number from the input value

const inputVal = document.querySelector("input")

//get your button Element

const inputButton = document.getElementsByClassName("btn")[0]



//generate a guess

const myGuess = 39
//check if guess is the same 

function checkGuess(userGuess, myGuess){


  if(userGuess){

    if (Number(userGuess) === myGuess)
    alert("correct guess, kudos")
  

  else if (userGuess !== myGuess)
    alert("incorrect, Guess again")
  
}
alert("Input is empty")
}

inputButton.addEventListener("click",function(e){
  e.preventDefault()
  console.log(inputButton)
  checkGuess(inputVal.value, myGuess)
})