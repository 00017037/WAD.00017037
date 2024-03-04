import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer00017037Component } from './footer-00017037.component';

describe('FooterComponent', () => {
  let component: Footer00017037Component;
  let fixture: ComponentFixture<Footer00017037Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer00017037Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer00017037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
