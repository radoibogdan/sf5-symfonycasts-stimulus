import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    /* Listening to the event dispatched here which contains the chart
     * vendor/symfony/ux-chartjs/Resources/assets/src/controller.js
    **/
    onChartConnect(event) {
        this.chart = event.detail.chart;
        setTimeout(() => {
            this.setNewData();
        }, 2000)
    }

    setNewData() {
        this.chart.data.datasets[0].data[2] = 30;
        this.chart.update();
    }
}