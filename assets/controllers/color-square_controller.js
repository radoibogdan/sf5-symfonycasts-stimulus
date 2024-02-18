import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ['colorSquare', 'select'];

    selectColor(event) {
        this.colorSquareTargets.forEach((element) => {
            element.classList.remove('selected')
        })

        /* event has 2 important properties event.currentTarget and even.target */
        event.currentTarget.classList.add('selected');

        /*
         * Updates the <select> tag value with the color id from the selected button using targets
         * data-color-id in html becomes dataset.colorId in js
        */
        this.selectTarget.value = event.currentTarget.dataset.colorId
    }
};