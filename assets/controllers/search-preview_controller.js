import {Controller} from "@hotwired/stimulus";
import { useClickOutside, useDebounce } from 'stimulus-use'

/**
 * Search bar
 * templates/product/index.html.twig
 * When looking up a word => a list of options is displayed under the search input
 */

export default class extends Controller {
    /*Values api*/
    static values = {
        url: String // => urlValue
    }
    static targets = ['result'];

    /** Stimulus use - Methods that should not be called unless a slight pause (200ms default) */
    static debounces = ['search'];

    connect() {
        useClickOutside(this); /* When clicking outside the element of the controller => clickOutside() is called */
        useDebounce(this);
    }

    onSearchInput(event) {
        this.search(event.currentTarget.value);
    }

    /* Because of the debounces array, this method is called only after a 200ms pause when the user types in the search input */
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