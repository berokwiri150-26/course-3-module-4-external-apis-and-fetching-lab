// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area=";

// Your code here!


    // get the elements by IDs 

    // create an event listener to trigger the button 


document.addEventListener("DOMContentLoaded", () => {
    // 1. Matched IDs with your HTML
    const searchButton = document.getElementById('fetch-alerts'); // Matches HTML
    const stateInput = document.getElementById('state-input');   // Matches HTML
    const displayDiv = document.getElementById('alerts-display'); // Matches HTML
    const errorDiv = document.getElementById('error-message');    // Matches HTML

    searchButton.addEventListener('click', () => {
        const state = stateInput.value.trim();
        stateInput.value = '';

        if (state) {
            fetchWeatherAlerts(state);
        } else {
            showError("");
        }
    });

    async function fetchWeatherAlerts(state) {
        const url = "https://api.weather.gov/alerts/active?area=CA";
        
        // Reset UI: Clear text and hide error using classList
        errorDiv.textContent = '';
        errorDiv.classList.add('hidden'); 

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Status: ${response.status}`);
            
            const data = await response.json();
            console.log(data);
            displayAlerts(data);
        } catch (error) {
            showError(error.message);
        }
    }

    function displayAlerts(data) {
        displayDiv.innerHTML = ''; 
        const summary = document.createElement('h3');
        summary.textContent = `${data.title}: ${data.features.length}`;
        displayDiv.append(summary);

        const list = document.createElement('ul');
        data.features.forEach(alert => {
            const li = document.createElement('li');
            li.textContent = alert.properties.headline;
            list.append(li);
        });
        displayDiv.append(list);
    }

    function showError(message) {
        displayDiv.innerHTML = '';
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden'); // Makes it visible
    }
});
