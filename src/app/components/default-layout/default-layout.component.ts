import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent {
  constructor(private router: Router){}

  redirectToPage(){
    this.router.navigate(['/new-player'])
  }
}
