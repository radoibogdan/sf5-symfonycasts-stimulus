import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    static values = {
        shoppingCartUrl: String
    }

    async removeItem(event) {
        /* Fading out effect when cart item is removed from cart */
        event.currentTarget.classList.add('removing');

        const response = await fetch(this.shoppingCartUrlValue);
        this.element.innerHTML = await response.text();
    }
}