import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[app-button]',
  standalone: true,
  imports: [CommonModule],
  template:
    `<button [style.backgroundColor]="backgroundColor">
      <ng-content></ng-content>
    </button>
    `,

  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() backgroundColor?: string = 'red'

}
