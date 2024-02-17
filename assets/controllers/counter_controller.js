import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    /*TARGET DEFINED HERE*/
    static targets = ['count'];
    /* by default gives you access to a property called countTarget
    which in html is <span data-counter-target="count">0</span> */

    connect() {
        this.count = 0;
        const counterNumberElement = this.element.getElementsByClassName('counter-count')[0];

        this.element.addEventListener('click', () => {
            this.count++;
            this.countTarget.innerHTML = this.count;
        })

    }
}