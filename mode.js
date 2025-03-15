document.addEventListener("DOMContentLoaded", function () {
    const city = document.getElementById("city");
    const temperature = document.getElementById("temperature");

    // Приклад динамічного оновлення (у майбутньому можна замінити API)
    city.textContent = "Львів";
    temperature.textContent = "+18°C";
});