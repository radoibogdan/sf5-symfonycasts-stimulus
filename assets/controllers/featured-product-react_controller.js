import {Controller} from "@hotwired/stimulus";
// import ReactDOM from "react-dom";
import React from "react";
import FeaturedProduct from "../components/FeaturedProduct";

export default class extends Controller {
    static values = {
        product: Object
    }

    connect() {
        /**
         * Async/ Dynamic import
         * Allows webpack to isolate the ReactDOM code in its own file
         * The code won't be dowloaaded until the import line is executed
        */
        import('react-dom').then((ReactDOM) => {
            ReactDOM.default.render(
                <FeaturedProduct product={this.productValue} />,
                this.element
            )
        });
    }
}