import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

}
