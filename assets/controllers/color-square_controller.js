import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    selectedColorId = null
    static targets = ['colorSquare', 'select'];
    /* VALUES API */
    static values = {
        colorId: Number
    }

    connect() {
        /* Hides the <select> tag */
        this.selectTarget.classList.add('d-none');
        console.log(this.colorIdValue);
    }

    selectColor(event) {
        /* event has 2 important properties event.currentTarget and even.target */
        this.setSelectedColor(event.currentTarget.dataset.colorId);
    }

    setSelectedColor(clickedColorId) {
        /* Clicked a color that is already selected*/
        if (clickedColorId === this.selectedColorId) {
            this.findSelectedColorSquare().classList.remove('selected');
            this.selectedColorId = null;
            this.selectTarget.value = '';

            return;
        }

        /* Set selectedColor state */
        this.selectedColorId = clickedColorId;

        /* Remove all css */
        this.colorSquareTargets.forEach((element) => {
            element.classList.remove('selected')
        })

        /* Add css */
        this.findSelectedColorSquare().classList.add('selected');

        /*
         * Updates the <select> tag value with the color id from the selected button using targets
         * data-color-id in html becomes dataset.colorId in js
        */
        this.selectTarget.value = this.selectedColorId;
    }

    /**
     * @returns {Element|null}
     */
    findSelectedColorSquare() {
        return this.colorSquareTargets.find((element) => element.dataset.colorId === this.selectedColorId);
    }
};