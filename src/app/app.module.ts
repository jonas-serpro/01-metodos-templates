import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { FormLocalComponent } from './components/form-local/form-local.component';
import { TimerComponent } from './components/timer/timer.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [AppComponent, FormLocalComponent, CounterComponent, TimerComponent, SelectComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
