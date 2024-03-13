window.addEventListener("DOMContentLoaded", () => {
  //get your guess number from the input value

  const value = document.getElementById("met");

  //get your button Element
  const check = document.getElementById("btn");

  const feedBack = document.getElementById("feedback");

  const chances = document.querySelector("span");

  //check if guess is the same

  let chancesNum = 5;
  chances.innerHTML = chancesNum;
  //generate a guess
  const num = 39;
  check.style.opacity = "0.5";
  check.disabled = true;

  value.addEventListener("keyup", () => {
    let length = value.value.length;

    if (length > 0 && length < 4 && value.value <= 100) {
      check.style.opacity = "1";
      check.disabled = false;
    }
    else {
      check.disabled = true;
      check.style.opacity = "0.5";
    }
  });

  check.addEventListener("click", () => {
    if (value.value < num) {
      feedBack.innerHTML = "Your Number is Low";
    } 
    else if (value.value > num) {
      feedBack.innerHTML = "Your Number is too High";
    }
    else {
      feedBack.innerHTML = "You are correct";
    }

    chancesNum--;
    chances.innerHTML = chancesNum;
    if (chancesNum <= 0) {
      check.disabled = true;
      check.style.opacity = "0.5";
      value.disabled = true;
      alert("You Have Exhausted Your Chances!!!");
    }
  });
});
