const dobInput = document.querySelector("#dob-input");
const numberInput = document.querySelector("#number-input");
const checkBtn = document.querySelector("#check-btn");
const outputText = document.querySelector("#output-text");

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputText.innerText="Your birthday is lucky 🚀";
    }else {
        outputText.innerText="Your birthday is not lucky 🤒";
    }
  }

  function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    
    let sum = 0;

    for(let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }

    return sum;
}

function checkIfBirthdayIsLucky() {
    const dob = dobInput.value;
    const sum = calculateSum(dob);

    if(dob&&numberInput.value) {
        if(numberInput.value < 0) {
            outputText.innerText = "Please be positive & enter a positive number 😀"
        } else {
            compareValues(sum, numberInput.value);
        }
    }
    else {
        outputText.innerText = "Please enter both the fields 😡";
    }
}

checkBtn.addEventListener("click", checkIfBirthdayIsLucky)