import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from './countryDetails.component';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryDetailsComponent]
    });
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
