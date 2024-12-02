import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
    selector: 'app-register',
    imports: [    FloatLabelModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        PasswordModule,],
    standalone:true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {

}
