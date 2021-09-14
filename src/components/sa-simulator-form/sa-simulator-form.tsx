import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sa-simulator-form',
  styleUrl: 'sa-simulator-form.css',
  shadow: true,
})
export class SaSimulatorForm {

  render() {
    return (
      <Host>
        <slot>
            <h3>Simulador previdência</h3>
            <div>
              <form action="/action_page.php">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                  <option value="usa">USA</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                </select>
              
                <button>Submit</button>
              </form>
            </div>
        </slot>
      </Host>
    );
  }

}
