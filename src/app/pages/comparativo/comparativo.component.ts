import { Component } from '@angular/core';
import { ILocal } from '../../components/form-local/form-local.component';

@Component({
  selector: 'app-comparativo',
  templateUrl: './comparativo.component.html',
  styleUrls: ['./comparativo.component.scss'],
})
export class ComparativoComponent {
  title = 'Comparativo métodos x variáveis';

  nome = '';
  endereco = '';

  concatenandoPorVariavel = '';
  execucoes = { metodo: 0, variavel: 0 };

  concatenandoPorMetodo() {
    this.execucoes.metodo++;
    this.atualizarPlacar();
    return [this.nome, this.endereco].filter((u) => !!u).join(' - ');
  }

  calcularVariavel() {
    this.execucoes.variavel++;
    this.atualizarPlacar();
    return [this.nome, this.endereco].filter((u) => !!u).join(' - ');
  }

  onFormChanged(evt: ILocal) {
    this.nome = evt.nome;
    this.endereco = evt.endereco;
    this.concatenandoPorVariavel = this.calcularVariavel();
  }

  atualizarPlacar() {
    console.clear();
    console.table(this.execucoes, ['Método', 'Variável']);
  }

  _code_concatenandoPorMetodo = `<span class="result"> 
  "{{ concatenandoPorMetodo() }}"
</span>`;

  _code_concatenandoPorVariavel = `<span class="result">
  "{{ concatenandoPorVariavel }}"
</span>`;
}
