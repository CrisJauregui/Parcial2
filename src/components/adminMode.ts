import { State } from "../flux/Store";
import { Actions } from "../flux/Actions";

class AdminMode extends HTMLElement {
    static observedAttributes = ["color", "size"];
  
    constructor() {
      // Always call super first in constructor
      super();
    }
  
    connectedCallback() {
      console.log("Custom element added to page.");
    }
  
    disconnectedCallback() {
      console.log("Custom element removed from page.");
    }
  
    connectedMoveCallback() {
      console.log("Custom element moved with moveBefore()");
    }
  
    adoptedCallback() {
      console.log("Custom element moved to new page.");
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute ${name} has changed.`);
    }
  }
  
  
export default AdminMode;