import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: '<label>{{ title }}</label>'
})
export class MyComponent {
    title = 'hello world';
}
