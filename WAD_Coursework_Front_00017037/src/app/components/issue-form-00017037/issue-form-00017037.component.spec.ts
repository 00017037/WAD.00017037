import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueForm00017037Component } from './issue-form-00017037.component';

describe('IssueFormComponent', () => {
  let component: IssueForm00017037Component;
  let fixture: ComponentFixture<IssueForm00017037Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueForm00017037Component],
    }).compileComponents();

    fixture = TestBed.createComponent(IssueForm00017037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
