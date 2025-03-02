import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosectionyComponent } from './herosectiony.component';

describe('HerosectionyComponent', () => {
  let component: HerosectionyComponent;
  let fixture: ComponentFixture<HerosectionyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerosectionyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerosectionyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
