import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ['colorSquare', 'select'];
    /* VALUES API */
    static values = {
        colorId: Number
    }

    connect() {
        /* Hides the <select> tag */
        this.selectTarget.classList.add('d-none');
    }

    selectColor(event) {
        /* event has 2 important properties event.currentTarget and event.target */
        const clickedColor = event.currentTarget.dataset.colorId;
        this.colorIdValue = clickedColor == this.colorIdValue ? null : clickedColor;
    }

    /**
     * Called when colorIdValue changes. Also called on init template because we set the value in the template
     * _cart_add_controls.html => colorId: addToCartForm.vars.data.product.colors[1].id
     **/
    colorIdValueChanged() {
        /* Syncs colorIdValue with selectTarget */
        this.selectTarget.value = this.colorIdValue;
        /* Adds css to target elements */
        this.colorSquareTargets.forEach((element) => {
            if (element.dataset.colorId == this.colorIdValue) {
                element.classList.add('selected');
            } else {
                element.classList.remove('selected');
            }
        });
    }
};