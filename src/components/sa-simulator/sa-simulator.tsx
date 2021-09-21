import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'sa-simulator',
  styleUrl: 'sa-simulator.css',
  shadow: true,
})
export class SaSimulator {

  @State() respData = false;

  action = async (body: any) => {
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
    this.respData = true;
    
  }

  render() {
    return (
      <Host>
        <slot>
          <html>
            <sa-simulator-form action={this.action}></sa-simulator-form>
            {!!this.respData ? <sa-simulator-chart data={this.respData}></sa-simulator-chart> : ''}
          </html>
        </slot>
      </Host>
    );
  }

}
