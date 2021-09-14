import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sa-simulator',
  styleUrl: 'sa-simulator.css',
  shadow: true,
})
export class SaSimulator {

  render() {
    return (
      <Host>
        <slot>
          <html>
            <sa-simulator-form></sa-simulator-form>
            <sa-simulator-chart></sa-simulator-chart>
          </html>
        </slot>
      </Host>
    );
  }

}
