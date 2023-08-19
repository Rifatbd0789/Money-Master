// get the input value
function getInputValue(input) {
    const Input = document.getElementById(input);
    const InputString = Input.value;
    Input.value = '';
    const Value = parseFloat(InputString);
    return Value;
}
// set the calculated value
function setInputValue(getValue, setValue) {
    const previous = document.getElementById(getValue);
    const prevExpString = previous.innerText
    const prevExp = parseFloat(prevExpString);
    previous.innerText = prevExp + setValue;    
}