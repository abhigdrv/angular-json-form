import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularJsonForm } from '../../../angular-json-form-lib/src/public-api';
import formConfig from './formConfig';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularJsonForm],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-json-form-preview';
  formConfig = formConfig;
  
  onSubmit(ev:any){
    console.log(ev, 'onSubmit');
  }
}
