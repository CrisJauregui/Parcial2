import Root from "./Root/Root";
import cardComponent from "./components/Card";
import modoAdmi from "./components/AdminMode";
import Inicio from "./components/inicio";
import Jardin from "./components/jardin";
import Card from "./components/Card";
import AdminMode from "./components/AdminMode";

customElements.define('root-element', Root);
customElements.define('modificar-Jardin', Jardin)
customElements.define('inicio-App', Inicio)
customElements.define('card-Component', Card)
customElements.define('modo-Admi', AdminMode)
