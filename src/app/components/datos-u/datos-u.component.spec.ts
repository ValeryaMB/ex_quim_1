import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUComponent } from './datos-u.component';

describe('DatosUComponent', () => {
  let component: DatosUComponent;
  let fixture: ComponentFixture<DatosUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
