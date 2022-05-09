import { Component } from '@angular/core';
import { ILocal } from 'src/app/components/form-local/form-local.component';

@Component({
  selector: 'app-errado',
  templateUrl: './errado.component.html',
  styleUrls: ['./errado.component.scss'],
})
export class ErradoComponent {
  title = 'Métodos no template';

  nome = '';
  endereco = '';

  execucoes = { vezes_executado: 0 };

  concatenandoPorMetodo() {
    // <demonstração execuções>
    this.execucoes.vezes_executado++;
    this.atualizarPlacar();
    // </demonstração execuções>

    // concatenando
    return [this.nome, this.endereco].filter((u) => !!u).join(' - ');
  }

  onFormChanged(evt: ILocal) {
    this.nome = evt.nome;
    this.endereco = evt.endereco;
  }

  atualizarPlacar() {
    console.clear();
    console.table(this.execucoes, ['vezes_executado']);
  }
}
