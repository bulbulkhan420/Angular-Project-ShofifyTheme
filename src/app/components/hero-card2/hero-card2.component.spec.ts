import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCard2Component } from './hero-card2.component';

describe('HeroCard2Component', () => {
  let component: HeroCard2Component;
  let fixture: ComponentFixture<HeroCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
