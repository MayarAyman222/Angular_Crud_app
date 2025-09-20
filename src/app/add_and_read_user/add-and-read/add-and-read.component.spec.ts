import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndReadComponent } from './add-and-read.component';

describe('AddAndReadComponent', () => {
  let component: AddAndReadComponent;
  let fixture: ComponentFixture<AddAndReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAndReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
