import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialog00017037Component } from './confirmation-dialog-00017037.component';

describe('ConfirmationDialogComponent', () => {
  let component: ConfirmationDialog00017037Component;
  let fixture: ComponentFixture<ConfirmationDialog00017037Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationDialog00017037Component],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationDialog00017037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
