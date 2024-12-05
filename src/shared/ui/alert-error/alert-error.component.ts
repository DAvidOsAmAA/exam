import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'alertError',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-error.component.html',
  styleUrl: './alert-error.component.css',
})
export class AlertErrorComponent {
  @Input() formName!: FormGroup;
  @Input() controleName!:string;
}
