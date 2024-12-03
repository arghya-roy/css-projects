displayValue  = document.querySelector("#inputBox")

function appendValue (input) {
displayValue.value=displayValue.value + input
}

function empty () {
    displayValue.value=''
}

function calculate() {
    displayValue.value=eval(displayValue.value)
}

