import { Component, Element, Host, h, Prop } from '@stencil/core';
import {GoogleCharts} from 'google-charts';

@Component({
  tag: 'sa-simulator-chart',
  styleUrl: 'sa-simulator-chart.css',
  shadow: true
})
export class SaSimulatorChart {
 @Element() private element: HTMLElement;

 @Prop() data: any;

  componentDidLoad() {
    this.createPieChart(this.element);
  }

  createPieChart(element) {
    GoogleCharts.load(drawChart);

      function drawChart() {

        var data = GoogleCharts.api.visualization.arrayToDataTable([
          ['Events', 'Run an event count'],
          ['Politics',     11],
          ['Sports',      2],
          ['Travels',  2]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new GoogleCharts.api.visualization.PieChart(element);

        chart.draw(data, options);
      }
  }

  render() {
    return (
      <Host>
        <slot>
          <div class="sa-simulator-chart"></div>
        </slot>
      </Host>
    );
  }

}
