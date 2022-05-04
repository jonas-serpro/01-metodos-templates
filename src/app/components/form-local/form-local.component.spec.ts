import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormLocalComponent } from './form-local.component';

describe('FormEnderecoComponent', () => {
  let component: FormLocalComponent;
  let fixture: ComponentFixture<FormLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormLocalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
