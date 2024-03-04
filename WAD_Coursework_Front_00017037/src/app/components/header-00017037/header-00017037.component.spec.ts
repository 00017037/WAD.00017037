import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header00017037Component } from './header-00017037.component';

describe('HeaderComponent', () => {
  let component: Header00017037Component;
  let fixture: ComponentFixture<Header00017037Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header00017037Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Header00017037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
