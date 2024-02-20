import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Severity } from '../interfaces/issue.interface';
@Directive({
  selector: '[appSeverity]',
  standalone:true
})
export class SeverityDirective {
  @Input('appSeverity') severity:Severity = Severity.minor;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.applySeverityStyle();
  }

  private applySeverityStyle() {
    let severityClass: string;

    switch (this.severity) {
      case Severity.minor:
        severityClass = 'minor';
        break;
      case Severity.major:
        severityClass = 'major';
        break;
      case Severity.critical:
        severityClass = 'critical';
        break;
      default:
        severityClass = '';
        break;
    }

    this.renderer.addClass(this.el.nativeElement, severityClass);
  }
}
