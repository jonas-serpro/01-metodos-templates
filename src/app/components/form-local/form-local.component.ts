import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

export interface ILocal {
  nome: string;
  endereco: string;
}

@Component({
  selector: 'app-form-local',
  templateUrl: './form-local.component.html',
  styleUrls: ['./form-local.component.scss'],
})
export class FormLocalComponent implements OnInit {
  @Output()
  changed: EventEmitter<ILocal> = new EventEmitter();
  destroy$ = new Subject<void>();

  form = this.fb.group({
    nome: '',
    endereco: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((_) => {
      this.changed.emit(this.form.value as unknown as ILocal);
    });

    // this.form.get('nome')?.setValue('Rua Carlos Pioli');
    // this.form.get('endereco')?.setValue('133');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
