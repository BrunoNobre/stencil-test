import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'sa-simulator-form',
  styleUrl: 'sa-simulator-form.css',
  shadow: true,
})
export class SaSimulatorForm {

  @State() radio = 'value-invested';
  @Prop() action: any

  handleRadio(event) {
    this.radio = event.target.value;
  }

  render() {
    return (
      <Host>
        <slot>
          <h4>O que você gostaria de perguntar?</h4>
          <div class="form-type">
            <div>
              <input type="radio" id="value-invested" name="formTypeRadio" onInput={(e)=>this.handleRadio(e)} value="value-invested" checked ></input>
              <label htmlFor="value-invested">Valor que é preciso investir</label>
            </div>
            <div>
              <input type="radio" id="value-receive" name="formTypeRadio" onInput={(e)=>this.handleRadio(e)} value="value-receive"></input>
              <label htmlFor="value-receive">Quanto você quer receber?</label>
            </div>
            <div>
              <input type="radio" id="investment-time" name="formTypeRadio" onInput={(e)=>this.handleRadio(e)} value="investment-time"></input>
              <label htmlFor="investment-time">Tempo do seu investimento</label>
            </div>
          </div>
          <div>
            {this.radio === 'value-invested' ? <p>Calcula o valor que você vai precisar investir para fazer um plano de previdência de acordo com seus objetivos.</p> : ''}
            {this.radio === 'value-receive' ? <p>Defini o quanto você quer receber de renda mensal quando terminar de investir no seu plano de previdência.</p> : ''} 
            {this.radio === 'investment-time' ? <p>Mostra por quanto tempo vai ser necessário você ficar investindo no seu plano de previdência.</p> : ''}
          </div>
          <div>
            <h4><div class="number">1</div>Sobre você</h4>
            <div class="display-row">
              <div class="styled-input">
                <label htmlfor="age">Idade atual</label>
                <input id="age" placeholder="anos"></input>
              </div>
              {this.radio !== "investment-time" ? 
                <div style={{"margin-left": "25px"}} class="styled-input">
                  <label htmlfor="retire-age">Idade que pretende se aposentar</label>
                  <input id="retire-age" placeholder="anos"></input>
                </div> : ''}
              </div>
          </div>
          <div>
            <h4 style={{"margin-top": "50px"}}><div class="number">2</div>Sobre seu patrimônio</h4>
            <p>Você já possui algum valor investido para a aposentadoria?</p>
            <div style={{"display": "flex", "margin-bottom": "8px"}}>
              <div class="display-row">
                <input type="radio" id="retirement-true" name="retirement" value="retirement-true" checked></input>
                <label htmlfor="retirement-true">Sim</label>
              </div>
              <div class="display-row" style={{"margin-left": "25px"}}>
                <input type="radio" id="retirement-false" name="retirement" value="retirement-false"></input>
                <label htmlfor="retirement-false">Não</label>
              </div>
            </div>
            <input id="amount" placeholder="R$ 0,00"></input>
            {this.radio !== "investment-time" ? 
            <div> 
            <p>Você pretende fazer aplicações mensais?</p>
            <div style={{"display": "flex", "margin-bottom": "8px"}}>
              <div class="display-row">
                <input type="radio" id="applications-true" name="applications" value="applications-true" checked></input>
                <label htmlfor="applications-true">Sim</label>
              </div>
              <div class="display-row" style={{"margin-left": "25px"}}>
                <input type="radio" id="applications-false" name="applications" value="applications-false"></input>
                <label htmlfor="applications-false">Não</label>
              </div>
            </div>
            <input id="applications" placeholder="R$ 0,00"></input></div> : ''}
          </div>
          <div>
            <div style={{"margin-top": "50px"}}>
              <h4><div class="number">3</div>Simular previdência</h4>
              <div class="display-row">
                <div>
                  <p>Valor da renda que deseja receber</p>
                  <input id="heritage" placeholder="R$ 0,00"></input>
                </div>
              {this.radio === 'value-receive' ? 
                <div style={{"margin-left": "25px"}}>
                  <p>Por quantos anos você pretende receber sua renda?</p>
                  <input id="heritage" placeholder="anos"></input>
                </div>: ''}
              </div>
              <div>
                <p>Quanto você deseja deixar de herança?</p>
                <input id="heritage"></input>
              </div>
              <div class="display-row">
                <div>
                  <p>Taxa de juros ao ano</p>
                  <input id="heritage" value="4,00%"></input>
                </div>
                <div class="card">Taxa de juros real, ou seja, já descontada a inflação</div>
              </div>
            </div>
          </div>
          <div>
            <button type="button" class="btn-sub" onClick={() => this.action({
              "codigo_parceiro": "3000036",
              "nome_participante_principal": "José Silva",
              "data_nascimento": "1964-02-12",
              "idade_concessao_beneficio": 77,
              "valor_renda": 5000.00,
              "tipo_calculo": "A",
              "perfil_investidor": "MOD",
              "valor_inicial": 12000.00,
              "valor_contribuicao": 900.00,
                "periodicidade_pagamento": "M",
              "quantidade_rendas_ano": 13
            })}>Calcular</button>
          </div>
        </slot>
      </Host>
    );
  }

}
