import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent {

}
