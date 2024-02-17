import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    /* Class properties */
    count = 0;

    /* TARGET DEFINED HERE */
    static targets = ['count'];
    /* gives access to a property countTarget => HTML => data-counter-target */

    /* ACTIONS => HTML => data-action="counter#increment" */
    increment() {
        this.count++;
        this.countTarget.innerHTML = this.count;
    }
}