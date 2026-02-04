export default class AfficheurPrincipal {
    constructor(id) {
        this.el = document.getElementById(id);
    }

    update(temp) {
        this.el.textContent = temp + " °C";
        this.el.className =
            temp <= 0 ? "temperature_cold" :
            temp <= 20 ? "temperature_mild" :
            temp <= 30 ? "temperature_warm" :
            "temperature_hot";
    }
}
