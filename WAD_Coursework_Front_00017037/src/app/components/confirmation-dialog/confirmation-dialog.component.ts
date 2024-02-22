import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IDeleteDialogData } from '../../interfaces/dialog-data.interface';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDeleteDialogData,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) {}

  close(isConfirmed: boolean) {
    this.dialogRef.close(isConfirmed);
  }
}
