import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ['content'];
    static values = {
        url: String
    }

    async refreshContent(event) {
        const target = this.hasContentTarget ? this.contentTarget : this.element;
        /* Makes table disappear with a little animation */
        target.style.opacity = 0.5;
        /* Replaces whole tables with new updated table list */
        const response = await fetch(this.urlValue);
        target.innerHTML = await response.text();
        /* Reapplies original opacity */
        target.style.opacity = 1;
    }
}