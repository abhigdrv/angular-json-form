Angular JSON Form Library
=========================

The Angular JSON Form Library (angular-json-form) provides a dynamic and flexible way to create forms based on JSON configuration. It supports various input types, validations, custom styling, and error handling.

Features
--------

*   **Dynamic Form Generation**: Create forms based on JSON configuration.
    
*   **Various Input Types**: Supports text, number, email, select, checkbox, radio, and file inputs.
    
*   **Custom Styling**: Apply custom classes and styles to individual fields and the entire form.
    
*   **Validation Support**: Includes built-in and custom validations.
    
*   **Error Handling**: Dynamically handle and display validation errors.
    
*   **Customizable Labels**: Set custom labels with styling options.
    

Installation
------------

To install the library, use npm:

```javascript
npm install angular18-json-form
```

Usage
-----

### Import the Library

Import the JsonFormModule into your Angular module:

```javascript
import { JsonFormModule } from 'angular-json-form';

@NgModule({
  imports: [
    // other imports
    JsonFormModule
  ],
  // other module settings
})
export class AppModule { }
```

### Basic Usage

Use the component in your template and pass the configuration via the config input property.

#### Example Configuration

```javascript
const formConfig = {
  globalLabelClass: 'global-label-class',
  globalLabelStyle: {
    'font-weight': 'bold',
    'color': '#333'
  },
  formConfig: {
    class: 'custom-form-class',
    style: {
      'padding': '20px',
      'background-color': '#f9f9f9'
    },
    buttonClass: 'custom-button-class',
    buttonStyle: {
      'background-color': '#007bff',
      'color': '#fff',
      'border': 'none',
      'padding': '10px 20px',
      'border-radius': '5px'
    }
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      label: 'Username',
      class: 'custom-input-class',
      style: {
        'border': '1px solid #ccc'
      },
      labelClass: 'custom-label-class',
      labelStyle: {
        'color': 'blue'
      },
      errorClass: 'custom-error-class',
      errorStyle: {
        'color': 'red',
        'font-size': '12px'
      },
      validations: [
        { name: 'required' },
        { name: 'minlength', value: 3 },
        { name: 'pattern', value: '^[a-zA-Z0-9]*$' }
      ]
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      validations: [
        { name: 'required' },
        { name: 'email' }
      ]
    },
    // Add more fields as needed
  ]
};

```

#### Using the Component

In your component template:

```html
<json-form [config]="formConfig"></json-form>
```

In your component class:

```javascript
export class AppComponent {
  formConfig = formConfig;
}

```

### Configuration Options

#### formConfig

*   **class**: Custom class for the form element.
    
*   **style**: Custom style for the form element.
    
*   **buttonClass**: Custom class for the submit button.
    
*   **buttonStyle**: Custom style for the submit button.
    

#### fields

Each field in the fields array can have:

*   **name**: Field name.
    
*   **type**: Input type (text, number, email, select, checkbox, radio, file).
    
*   **label**: Field label.
    
*   **class**: Custom class for the input element.
    
*   **style**: Custom style for the input element.
    
*   **labelClass**: Custom class for the label element.
    
*   **labelStyle**: Custom style for the label element.
    
*   **errorClass**: Custom class for error messages.
    
*   **errorStyle**: Custom style for error messages.
    
*   **validations**: Array of validation rules:
    
    *   **name**: Validation type (required, minlength, maxlength, pattern, email, max, min).
        
    *   **value**: Validation value (e.g., minimum length).
        

### Example

Here’s a full example of a form configuration and how to use it in your Angular application.

#### JSON Configuration

```javascript
const formConfig = {
  globalLabelClass: 'global-label-class',
  globalLabelStyle: {
    'font-weight': 'bold',
    'color': '#333'
  },
  formConfig: {
    class: 'custom-form-class',
    style: {
      'padding': '20px',
      'background-color': '#f9f9f9'
    },
    buttonClass: 'custom-button-class',
    buttonStyle: {
      'background-color': '#007bff',
      'color': '#fff',
      'border': 'none',
      'padding': '10px 20px',
      'border-radius': '5px'
    }
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      label: 'Username',
      class: 'custom-input-class',
      style: {
        'border': '1px solid #ccc'
      },
      labelClass: 'custom-label-class',
      labelStyle: {
        'color': 'blue'
      },
      errorClass: 'custom-error-class',
      errorStyle: {
        'color': 'red',
        'font-size': '12px'
      },
      validations: [
        { name: 'required' },
        { name: 'minlength', value: 3 },
        { name: 'pattern', value: '^[a-zA-Z0-9]*$' }
      ]
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      validations: [
        { name: 'required' },
        { name: 'email' }
      ]
    },
    {
      name: 'subscribe',
      type: 'checkbox',
      label: 'Subscribe to Newsletter',
      class: 'custom-checkbox-class',
      style: {
        'margin': '10px 0'
      }
    },
    {
      name: 'gender',
      type: 'radio',
      label: 'Gender',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
      ]
    },
    {
      name: 'profilePicture',
      type: 'file',
      label: 'Profile Picture'
    }
  ]
};

```

#### Component Usage

In your component template:

```html
<json-form [config]="formConfig"></json-form>
```

In your component class:

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formConfig = formConfig;
}
```

Contributing
------------

Feel free to contribute by submitting issues, feature requests, or pull requests. Please follow the [contribution guidelines](CONTRIBUTING.md).

License
-------

This library is licensed under the MIT License.

Contact
-------

For questions or feedback, please contact abhishek@pmaxtek.com.