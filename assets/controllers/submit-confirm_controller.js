import {Controller} from "@hotwired/stimulus";
import Swal from "sweetalert2";
import {useDispatch} from "stimulus-use";

export default class extends Controller {
    static values = {
        title: String,
        text: String,
        icon: String,
        confirmButtonText: String,
        useAsync: Boolean,
    }

    connect() {
        /* debug: true => shows extra debug info in the console */
        useDispatch(this, {debug: true})
    }

    onSubmit(event) {
        event.preventDefault();

        Swal.fire({
            title: this.titleValue || null,
            text: this.textValue || null,
            icon: this.iconValue || null,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: this.confirmButtonTextValue || 'Yes',
            showLoaderOnConfirm: true,
            // preConfirm is called after the user confirms the modal
            preConfirm: () => {
                return this.submitForm();
            }
        });
   }

    async submitForm() {
        /* Use classic submit (don't use async) */
        if (!this.useAsyncValue) {
            this.element.submit();

            return;
        }

        /* Submit form asynchronously using ajax */
        const response =  fetch(this.element.action, {
            method: this.element.method,
            // submit an entire form with all its fields as key/value pairs
            body: new URLSearchParams(new FormData(this.element))
        });

        /* Dispatches event submit-confirm:async:submitted */
        this.dispatch('async:submitted', {
            response /* in the listener, there will be a 'details' property with this data */
        })
    }
}