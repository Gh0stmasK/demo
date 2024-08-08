document.getElementById("numberInput").addEventListener("input", function() {
    let input = parseInt(this.value);
    let message = document.getElementById("message");

    if (isNaN(input)) {
        message.textContent = ""; // Clear the message if input is empty
    } else if (input < 0) {
        message.textContent = "Enter a positive value";
    } else if (input % 2 === 0) {
        let nextEvens = [input + 2, input + 4, input + 6];
        message.textContent = "Next 3 even numbers: " + nextEvens.join(", ");
    } else {
        let nextOdds = [input + 2, input + 4, input + 6];
        message.textContent = "Next 3 odd numbers: " + nextOdds.join(", ");
    }
});