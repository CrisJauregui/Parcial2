import Root from "./Root/Root";
import modificarJardin from "./components/Jardin";
import inicioApp from "./components/Inicio"; 
import cardComponent from "./components/Card";
import modoAdmi from "./components/AdminMode";

customElements.define('root-element', Root);
customElements.define('modificar-Jardin', modificarJardin)
customElements.define('inicio-App', inicioApp)
customElements.define('card-Component', cardComponent)
customElements.define('modo-Admi', modoAdmi)
