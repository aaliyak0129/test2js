function checknumber() {
    let number = parseInt(prompt("Enter a number:"));
    if (number > 0) {
        alert("Positive Number");
    } else if (number < 0) {
        alert("Negative Number");
    } else {
        alert("Zero");
    }
}