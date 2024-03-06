import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    /**
     * https://127.0.0.1:8000/admin
     * Event is emitted when the chart is loaded here with use of the AdminController. Templates/admin/dashboard.html.twig
     * Listening to the event dispatched here which contains the chart
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