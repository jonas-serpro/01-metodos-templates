import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretoComponent } from './correto.component';

describe('CorretoComponent', () => {
  let component: CorretoComponent;
  let fixture: ComponentFixture<CorretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorretoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
