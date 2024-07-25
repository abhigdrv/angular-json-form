import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularJsonFormLibComponent } from '../../../angular-json-form-lib/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularJsonFormLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-json-form-preview';
  formConfig = {
    "globalLabelClass": "global-label-class",
    "globalLabelStyle": {
      "font-weight": "bold",
      "color": "#333"
    },
    "formConfig": {
      "class": "custom-form-class",
      "style": {
        "padding": "20px",
        "background-color": "#f9f9f9"
      },
      "buttonClass": "custom-button-class",
      "buttonStyle": {
        "background-color": "#007bff",
        "color": "#fff",
        "border": "none",
        "padding": "10px 20px",
        "border-radius": "5px"
      }
    },
    "fields": [
      {
        "name": "username",
        "type": "text",
        "label": "Username",
        "class": "custom-input-class",
        "style": {
          "border": "1px solid #ccc"
        },
        "labelClass": "custom-label-class",
        "labelStyle": {
          "color": "blue"
        },
        "errorClass": "custom-error-class",
        "errorStyle": {
          "color": "red",
          "font-size": "12px"
        },
        "validations": [
          {
            "name": "required"
          },
          {
            "name": "minlength",
            "value": 3
          },
          {
            "name": "pattern",
            "value": "^[a-zA-Z0-9]*$"
          }
        ]
      },
      {
        "name": "email",
        "type": "email",
        "label": "Email",
        "class": "custom-input-class",
        "style": {
          "border": "1px solid #ccc"
        },
        "labelClass": "custom-label-class",
        "labelStyle": {
          "color": "green"
        },
        "errorClass": "custom-error-class",
        "errorStyle": {
          "color": "red",
          "font-size": "12px"
        },
        "validations": [
          {
            "name": "required"
          },
          {
            "name": "email"
          }
        ]
      },
      {
        "name": "age",
        "type": "number",
        "label": "Age",
        "class": "custom-input-class",
        "style": {
          "border": "1px solid #ccc"
        },
        "validations": [
          {
            "name": "min",
            "value": 18
          },
          {
            "name": "max",
            "value": 99
          }
        ]
      },
      {
        "name": "password",
        "type": "password",
        "label": "Password",
        "class": "custom-input-class",
        "style": {
          "border": "1px solid #ccc"
        },
        "labelClass": "custom-label-class",
        "labelStyle": {
          "color": "red"
        },
        "errorClass": "custom-error-class",
        "errorStyle": {
          "color": "red",
          "font-size": "12px"
        },
        "validations": [
          {
            "name": "required"
          },
          {
            "name": "minlength",
            "value": 6
          }
        ]
      },
      {
        "name": "gender",
        "type": "select",
        "label": "Gender",
        "class": "custom-select-class",
        "style": {
          "border": "1px solid #ccc"
        },
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ]
      },
      {
        "name": "subscribe",
        "type": "checkbox",
        "label": "Subscribe to newsletter",
        "class": "custom-checkbox-class",
        "style": {
          "margin-right": "10px"
        }
      },
      {
        "name": "maritalStatus",
        "type": "radio",
        "label": "Marital Status",
        "class": "custom-radio-class",
        "style": {
          "margin-right": "10px"
        },
        "options": [
          {
            "label": "Single",
            "value": "single"
          },
          {
            "label": "Married",
            "value": "married"
          }
        ]
      },
      {
        "name": "profilePicture",
        "type": "file",
        "label": "Profile Picture",
        "class": "custom-file-class",
        "style": {
          "border": "1px solid #ccc"
        },
        "validations": [
          {
            "name": "fileSize",
            "value": 2000000  // 2MB
          }
        ]
      }
    ]
  }
;  
}
