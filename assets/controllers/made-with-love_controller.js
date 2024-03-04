import {Controller} from "@hotwired/stimulus";
import MadeWithLove from "../components/MadeWithLove";
import ReactDOM from "react-dom";
import React from "react";

export default class extends Controller {
  connect() {
      ReactDOM.render(
          <MadeWithLove />,
          this.element
      )
  }
}