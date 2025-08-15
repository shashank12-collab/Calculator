const display = document.getElementById("dis");

const buttons = document.querySelectorAll("input[type=button]");

function calculateExpression(expr) {
    try {
        return eval(expr);
    } catch (e) {
        return "Error";
    }
}

buttons.forEach(button => {
    const value = button.value;

    button.addEventListener("click", () => {
        if (value === "=") {
            display.value = calculateExpression(display.value);
        } else if (value === "C") {
            display.value = "";
        } else {
            display.value += value;
        }
    });
});
