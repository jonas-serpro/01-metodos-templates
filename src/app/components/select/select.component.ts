import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  value!: string;
  options = [
    'Opção 01',
    'Opção 02',
    'Opção 03',
    'Opção 04',
    'Opção 05',
    'Opção 06',
    'Opção 07',
    'Opção 08',
    'Opção 09',
    'Opção 10',
  ];
  opened = false;

  constructor() {}

  ngOnInit(): void {}

  select(option: string) {
    this.value = option;
    this.toggle();
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  toggle() {
    this.opened = !this.opened;
  }
}
