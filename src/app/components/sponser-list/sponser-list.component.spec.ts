import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponserListComponent } from './sponser-list.component';

describe('SponserListComponent', () => {
  let component: SponserListComponent;
  let fixture: ComponentFixture<SponserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponserListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
