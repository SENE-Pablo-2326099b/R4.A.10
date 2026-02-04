export default class AfficheurHistorique {
    constructor(id) {
        this.el = document.getElementById(id);
    }

    update(temp) {
        const li = document.createElement("li");
        li.textContent = temp + " °C";
        if(temp <= 0) li.className = "temperature_cold";
        else if(temp <= 20) li.className = "temperature_mild";
        else if(temp <= 30) li.className = "temperature_warm";
        else li.className = "temperature_hot";
        this.el.appendChild(li);
    }
}
