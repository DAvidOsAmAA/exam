import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
    selector: 'app-login',
    imports: [ButtonModule],
    standalone:true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

}
