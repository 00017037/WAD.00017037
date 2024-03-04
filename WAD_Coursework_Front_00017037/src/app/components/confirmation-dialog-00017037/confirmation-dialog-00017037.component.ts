import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IDeleteDialogData } from '../../interfaces/dialog-data-00017037.interface';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirmation-dialog-00017037.component.html',
  styleUrl: './confirmation-dialog-00017037.component.scss',
})
export class ConfirmationDialog00017037Component {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDeleteDialogData,
    private dialogRef: MatDialogRef<ConfirmationDialog00017037Component>
  ) {}

  close(isConfirmed: boolean) {
    this.dialogRef.close(isConfirmed);
  }
}
