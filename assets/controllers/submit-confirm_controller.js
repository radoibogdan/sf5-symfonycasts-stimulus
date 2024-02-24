import {Controller} from "@hotwired/stimulus";
import Swal from "sweetalert2";

export default class extends Controller {
    onSubmit(event) {
        event.preventDefault();

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                this.element.submit()
            }
        });
   }
}