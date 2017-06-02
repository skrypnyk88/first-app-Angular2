import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from App</h1>
    <fa-databinding></fa-databinding>
  `,
  styles: [`
    h1 {
      color: green;
    }
  `]
})
export class AppComponent {
  title = 'app';
}
