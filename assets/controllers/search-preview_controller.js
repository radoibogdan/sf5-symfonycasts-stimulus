import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    /*Values api*/
    static values = {
        url: String // => urlValue
    }
    static targets = ['result'];

    async onSearchInput(event) {
        /* URLSearchParams helps create query strings */
        const params = new URLSearchParams({
            q: event.currentTarget.value,
            preview: 1
        })
        const response = await fetch(`${this.urlValue}?${params.toString()}`)
        this.resultTarget.innerHTML = await response.text();
    }
}