const apiKey = "058315e77c6cf34f305463ae392fcad3";

function valorClima() {
    const city = document.getElementById("cidade").value.trim();

    if (city === "") {
        alert("Por favor, insira o nome de uma cidade.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Cidade não encontrada.");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("nomeCidade").innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById("temperature").innerText = data.main.temp;
            document.getElementById("clima").innerText = data.weather[0].description;
            document.getElementById("humidade").innerText = data.main.humidity;
            document.getElementById("vento").innerText = (data.wind.speed * 3.6).toFixed(2); // Convertendo m/s para km/h
            document.getElementById("info-clima").classList.remove("d-none");
        })
        .catch(error => {
            alert(error.message);
        });
}