import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ['colorSquare'];

    selectColor(event) {
        this.colorSquareTargets.forEach((element) => {
            element.classList.remove('selected')
        })

        /* event has 2 important properties event.currentTarget and even.target */
        event.currentTarget.classList.add('selected');
    }
};