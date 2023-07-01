function convertToFar() {
    var celsiusInput = document.getElementById("celsiusInput");
    var fahrenheitInput = document.getElementById("fahrenheitInput");

    if (celsiusInput.value === "") {
        fahrenheitInput.value = "";
        return;
    }

    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
}

function convertToCel() {
    var celsiusInput = document.getElementById("celsiusInput");
    var fahrenheitInput = document.getElementById("fahrenheitInput");

    if (fahrenheitInput.value === "") {
        celsiusInput.value = "";
        return;
    }

    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    celsiusInput.value = celsius.toFixed(2);
}

function clearFields() {
    var celsiusInput = document.getElementById("celsiusInput");
    var fahrenheitInput = document.getElementById("fahrenheitInput");

    celsiusInput.value = "";
    fahrenheitInput.value = "";
}
