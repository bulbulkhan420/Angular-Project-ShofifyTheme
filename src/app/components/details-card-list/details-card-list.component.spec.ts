import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCardListComponent } from './details-card-list.component';

describe('DetailsCardListComponent', () => {
  let component: DetailsCardListComponent;
  let fixture: ComponentFixture<DetailsCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
