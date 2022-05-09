import { Component } from '@angular/core';
import { ILocal } from '../../components/form-local/form-local.component';

@Component({
  selector: 'app-correto',
  templateUrl: './correto.component.html',
  styleUrls: ['./correto.component.scss'],
})
export class CorretoComponent {
  title = 'Somente variáveis no template - Boa prática';

  nome = '';
  endereco = '';

  concatenandoPorVariavel = '';
  execucoes = { vezes_executado: 0 };

  onFormChanged(evt: ILocal) {
    // <demonstração execuções>
    this.execucoes.vezes_executado++;
    this.atualizarPlacar();
    // </demonstração execuções>

    this.nome = evt.nome;
    this.endereco = evt.endereco;
    this.concatenandoPorVariavel = [this.nome, this.endereco]
      .filter((u) => !!u)
      .join(' - ');
  }

  private atualizarPlacar() {
    console.clear();
    console.table(this.execucoes, ['Método', 'Variável']);
  }
}
