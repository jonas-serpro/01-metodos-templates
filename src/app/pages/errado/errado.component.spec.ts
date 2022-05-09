import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErradoComponent } from './errado.component';

describe('ErradoComponent', () => {
  let component: ErradoComponent;
  let fixture: ComponentFixture<ErradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
