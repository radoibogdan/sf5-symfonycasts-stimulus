import {Controller} from "@hotwired/stimulus";
import { useClickOutside, useDebounce } from 'stimulus-use'

export default class extends Controller {
    /*Values api*/
    static values = {
        url: String // => urlValue
    }
    static targets = ['result'];

    /** Stimulus use - Methods that should not be called unless a slight pause (200ms default) */
    static debounces = ['search'];

    connect() {
        useClickOutside(this);
        useDebounce(this);
    }

    onSearchInput(event) {
        this.search(event.currentTarget.value);
    }

    async search(query) {
        /* URLSearchParams helps create query strings */
        const params = new URLSearchParams({
            q: query,
            preview: 1
        })
        const response = await fetch(`${this.urlValue}?${params.toString()}`)
        this.resultTarget.innerHTML = await response.text();
    }

    clickOutside() {
        this.resultTarget.innerHTML = '';
    }
}