import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-new-player',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, FormComponent],
  templateUrl: './new-player.component.html',
  styleUrl: './new-player.component.css'
})
export class NewPlayerComponent {
  
}
