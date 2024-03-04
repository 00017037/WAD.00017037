import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetails00017037Component } from './issue-details-00017037.component';

describe('IssueDetailsComponent', () => {
  let component: IssueDetails00017037Component;
  let fixture: ComponentFixture<IssueDetails00017037Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueDetails00017037Component],
    }).compileComponents();

    fixture = TestBed.createComponent(IssueDetails00017037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
