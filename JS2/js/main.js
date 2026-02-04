import TemperatureReel from "./TemperatureReel.js";
import AfficheurPrincipal from "./AfficheurPrincipal.js";
import AfficheurAlerte from "./AfficheurAlerte.js";
import AfficheurHistorique from "./AfficheurHistorique.js";

//POur les onglets
const btns = ["direct", "hist"];
btns.forEach(id =>
    document.getElementById("btn-" + id).onclick = () => {
        btns.forEach(i => {
            document.getElementById("panel-" + i).style.display = "none";
            document.getElementById("btn-" + i).setAttribute("aria-selected", "false");
        });
        document.getElementById("panel-" + id).style.display = "block";
        document.getElementById("btn-" + id).setAttribute("aria-selected", "true");
    }
);

const moteur = new TemperatureReel();
moteur.subscribe(new AfficheurPrincipal("temp"));
moteur.subscribe(new AfficheurAlerte("textZone"));
moteur.subscribe(new AfficheurHistorique("history"));

setInterval(() => moteur.generer(), 2000);
