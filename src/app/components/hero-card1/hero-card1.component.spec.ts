import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCard1Component } from './hero-card1.component';

describe('HeroCard1Component', () => {
  let component: HeroCard1Component;
  let fixture: ComponentFixture<HeroCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
