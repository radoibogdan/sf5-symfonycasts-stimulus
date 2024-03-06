import {Controller} from "@hotwired/stimulus";
import MadeWithLove from "../components/MadeWithLove";
// import ReactDOM from "react-dom";
import React from "react";

export default class extends Controller {
  connect() {
      /**
       * Async/ Dynamic import
       * Allows webpack to isolate the ReactDOM code in its own file
       * The code won't be dowloaaded until the import line is executed
       */
      import('react-dom').then((ReactDOM) => {
          ReactDOM.default.render(
              <MadeWithLove />,
              this.element
          )
      })
  }
}