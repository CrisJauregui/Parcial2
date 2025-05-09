import Root from "./Root/Root";
import modificarJardin from "./components/jardin";
import inicioApp from "./components/inicio"; 
import cardComponent from "./components/card";
import modoAdmi from "./components/adminMode";

customElements.define('root-element', Root);
customElements.define('modificar-Jardin', modificarJardin)
customElements.define('inicio-App', inicioApp)
customElements.define('card-Component', cardComponent)
customElements.define('modo-Admi', modoAdmi)
