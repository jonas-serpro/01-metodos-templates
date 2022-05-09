import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { FormLocalComponent } from './components/form-local/form-local.component';
import { SelectComponent } from './components/select/select.component';
import { TimerComponent } from './components/timer/timer.component';
import { ComparativoComponent } from './pages/comparativo/comparativo.component';
import { CorretoComponent } from './pages/correto/correto.component';
import { ErradoComponent } from './pages/errado/errado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLocalComponent,
    CounterComponent,
    TimerComponent,
    SelectComponent,
    ErradoComponent,
    CorretoComponent,
    ComparativoComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'demonstracao',
      },
      {
        path: 'demonstracao',
        component: ErradoComponent,
      },
      {
        path: 'solucao',
        component: CorretoComponent,
      },
      {
        path: 'comparativo',
        component: ComparativoComponent,
      },
      {
        path: '**',
        redirectTo: 'demonstracao',
      },
    ]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
