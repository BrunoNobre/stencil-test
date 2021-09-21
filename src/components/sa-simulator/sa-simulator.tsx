import { Component, Host, h, Method, State } from '@stencil/core';

@Component({
  tag: 'sa-simulator',
  styleUrl: 'sa-simulator.css',
  shadow: true,
})
export class SaSimulator {

  @State() respData = {}

  async action (body) {
    try {
      const response = await fetch("", {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      this.respData = await response.json()
    } catch (error) {
      console.log(error);
    }
    
  }

  render() {
    return (
      <Host>
        <slot>
          <html>
            <sa-simulator-form action={this.action}></sa-simulator-form>
            <sa-simulator-chart data={this.respData}></sa-simulator-chart>
          </html>
        </slot>
      </Host>
    );
  }

}
