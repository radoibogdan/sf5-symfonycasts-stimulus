import {Controller} from "@hotwired/stimulus";
import {Modal} from "bootstrap";
import {useDispatch} from "stimulus-use";
import $ from 'jquery';

export default class extends Controller {
    static targets = ['modal', 'modalBody'];
    static values = {
        'formUrl': String
    }
    modal = null

    /* debug:true to see event dispatched in the log */
    connect() {
        useDispatch(this, {'debug': true});
    }

    /* Async using jQuery ajax */
    async openModal() {
        // Clears the content before we start the ajax call
        this.modalBodyTarget.innerHTML = 'Loading...'
        this.modal = new Modal(this.modalTarget);
        this.modal.show();
        this.modalBodyTarget.innerHTML = await $.ajax(this.formUrlValue);
    }

    /* Async using Fetch - Not used */
    async openModalUsingFetch() {
        this.modalBodyTarget.innerHTML = 'Loading...'
        const modal = new Modal(this.modalTarget);
        modal.show();
        const response = await fetch(this.formUrlValue,{
            'method' : 'POST',
            'body': new URLSearchParams({isAjaxCall: true})
        });
        this.modalBodyTarget.innerHTML = await response.text();
    }

    async submitForm(event) {
        event.preventDefault();
        // $(this.modalBodyTarget) will look only inside modalBodyTarget and not the whole document
        const $form = $(this.modalBodyTarget).find('form');
        try {
            await $.ajax({
                url: this.formUrlValue,
                method: $form.prop('method'),
                data: $form.serialize(),
            })
            this.modal.hide();
            this.dispatch('success'); // full event name = modal-form:success
        } catch (e) {
            this.modalBodyTarget.innerHTML = e.responseText;
        }

        // Vanilla JS alternatiove
        // const form = document.getElementsByTagName('form')[0];
    }

    /**
     * Called from product_admin/index.html.twig (show.bs.modal->modal-form#modalHidden)
     * https://getbootstrap.com/docs/4.0/components/modal/#events
     */
    modalHidden() {
        console.log("Modal has been hidden")
    }
}