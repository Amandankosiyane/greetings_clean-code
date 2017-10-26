var display = document.getElementById('toDisplay');
var results = document.querySelector('#result');
var firstName = document.getElementById("user_input");
// var checkedLanguage = languagesGreeted();

var namesGreeted = {};
// display the counter on page load
results.innerHTML = localStorage.clickcount;

function showInp() {
        if (firstName && namesGreeted[firstName.value] === undefined && languagesGreeted() !== '!checked') {
                console.log(firstName);
                if (firstName.value.trim() < 3 || languagesGreeted() === '!checked') {
                        alert('please write a name first and select a language');
                        return
                }
                namesGreeted[firstName.value] = 1;
                display.innerHTML = greetedNames(firstName.value, languagesGreeted());
                clickCounter();
        } else if (firstName && namesGreeted[firstName.value] !== undefined) {
                display.innerHTML = greetedNames(firstName.value, languagesGreeted());

        }
        document.getElementById("user_input").value = "";
}
var clearBtn = document.getElementById("resetButton");
clearBtn.addEventListener("click", clearReset);
