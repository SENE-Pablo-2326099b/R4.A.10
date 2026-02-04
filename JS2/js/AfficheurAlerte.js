export default class AfficheurAlerte {
    constructor(id) {
        this.el = document.getElementById(id);
    }

    update(temp) {
        if (temp <= 0) this.el.textContent = "Brrrrr, il fait froid !";
        else if (temp > 30) this.el.textContent = "Caliente 🔥";
        else this.el.textContent = "";
    }
}
