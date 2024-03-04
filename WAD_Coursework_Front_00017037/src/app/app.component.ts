import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header00017037Component } from './components/header-00017037/header-00017037.component';
import { Footer00017037Component } from './components/footer-00017037/footer-00017037.component';
import { IssueDetails00017037Component } from './components/issue-details-00017037/issue-details-00017037.component';
import { IssuesComponent } from './components/issues-00017037/issues-00017037.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header00017037Component,
    Footer00017037Component,
    IssueDetails00017037Component,
    IssuesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'WAD_Coursework_Front_00017037';
}
