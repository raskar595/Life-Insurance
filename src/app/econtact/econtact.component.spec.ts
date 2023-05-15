import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcontactComponent } from './econtact.component';

describe('EcontactComponent', () => {
  let component: EcontactComponent;
  let fixture: ComponentFixture<EcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
