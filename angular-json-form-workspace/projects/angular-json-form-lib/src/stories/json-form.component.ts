import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'json-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <div>
      <textarea
        (input)="onJsonChange($event)"
        style="height: calc(100vh - 20px); overflow-y:scroll; width: 400px; float:left"
        >{{ json | json }}</textarea
      >
    </div>

    <div style="width: calc(100%-420px); float:right">
      <form
        [formGroup]="form"
        (ngSubmit)="onSubmit()"
        [ngClass]="json?.formConfig?.class"
        [ngStyle]="json?.formConfig?.style"
      >
        <!-- Label and Field Rendering -->
        <div *ngFor="let field of fields">
          <!-- Label -->
          <label
            [for]="field.name"
            [ngClass]="field.labelClass || globalLabelClass"
            [ngStyle]="field.labelStyle || globalLabelStyle"
          >
            {{ field.label }}
          </label>

          <!-- Text Input -->
          <input
            *ngIf="field.type === 'text'"
            [formControlName]="field.name"
            [type]="field.type"
            [id]="field.name"
            [ngClass]="field.class"
            [ngStyle]="field.style"
          />

          <!-- Number Input -->
          <input
            *ngIf="field.type === 'number'"
            [formControlName]="field.name"
            [type]="field.type"
            [id]="field.name"
            [ngClass]="field.class"
            [ngStyle]="field.style"
          />

          <!-- Email Input -->
          <input
            *ngIf="field.type === 'email'"
            [formControlName]="field.name"
            [type]="field.type"
            [id]="field.name"
            [ngClass]="field.class"
            [ngStyle]="field.style"
          />

          <!-- Password Input -->
          <input
            *ngIf="field.type === 'password'"
            [formControlName]="field.name"
            [type]="field.type"
            [id]="field.name"
            [ngClass]="field.class"
            [ngStyle]="field.style"
          />

          <!-- Checkbox Input -->
          <input
            *ngIf="field.type === 'checkbox'"
            [formControlName]="field.name"
            [type]="field.type"
            [id]="field.name"
            [ngClass]="field.class"
            [ngStyle]="field.style"
            (change)="onCheckboxChange($event, field.name)"
          />

          <!-- Radio Input -->
          <div *ngIf="field.type === 'radio'">
            <div *ngFor="let option of field.options">
              <label>
                <input
                  [type]="field.type"
                  [value]="option.value"
                  [name]="field.name"
                  [ngClass]="field.class"
                  [ngStyle]="field.style"
                  (change)="onRadioChange(field.name, option.value)"
                  [checked]="form.get(field.name)?.value === option.value"
                />
                {{ option.label }}
              </label>
            </div>
          </div>

          <!-- Select Input -->
          <select
            *ngIf="field.type === 'select'"
            [formControlName]="field.name"
            [id]="field.name"
            [ngClass]="field.class"
            [ngStyle]="field.style"
          >
            <option value="">Select</option>
            <option *ngFor="let option of field.options" [value]="option.value">
              {{ option.label }}
            </option>
          </select>

          <!-- File Input -->
          <input
            *ngIf="field.type === 'file'"
            [type]="field.type"
            [id]="field.name"
            [ngClass]="field.class"
            [ngStyle]="field.style"
            (change)="onFileChange($event, field.name)"
          />

          <!-- Dynamic Error Handling -->
          <div
            *ngIf="
              form.get(field.name)?.invalid && form.get(field.name)?.touched
            "
            [ngClass]="field.errorClass"
            [ngStyle]="field.errorStyle"
          >
            <div *ngFor="let error of getErrorMessages(field)">
              {{ error }}
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          [disabled]="form.invalid"
          [ngClass]="json?.formConfig?.buttonClass"
          [ngStyle]="json?.formConfig?.buttonStyle"
        >
          Submit
        </button>
      </form>
    </div>
  `,
  styles: ``,
})
export class JsonFormComponent implements OnInit {
  json: any = {
    globalLabelClass: 'global-label-class',
    globalLabelStyle: {
      'font-weight': 'bold',
      color: '#333',
    },
    formConfig: {
      class: 'custom-form-class',
      style: {
        padding: '20px',
        'background-color': '#f9f9f9',
      },
      buttonClass: 'custom-button-class',
      buttonStyle: {
        'background-color': '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        'border-radius': '5px',
      },
    },
    fields: [
      {
        name: 'username',
        type: 'text',
        label: 'Username',
        class: 'custom-input-class',
        style: {
          border: '1px solid #ccc',
        },
        labelClass: 'custom-label-class',
        labelStyle: {
          color: 'blue',
        },
        errorClass: 'custom-error-class',
        errorStyle: {
          color: 'red',
          'font-size': '12px',
        },
        validations: [
          {
            name: 'required',
          },
          {
            name: 'minlength',
            value: 3,
          },
          {
            name: 'pattern',
            value: '^[a-zA-Z0-9]*$',
          },
        ],
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        class: 'custom-input-class',
        style: {
          border: '1px solid #ccc',
        },
        labelClass: 'custom-label-class',
        labelStyle: {
          color: 'green',
        },
        errorClass: 'custom-error-class',
        errorStyle: {
          color: 'red',
          'font-size': '12px',
        },
        validations: [
          {
            name: 'required',
          },
          {
            name: 'email',
          },
        ],
      },
      {
        name: 'age',
        type: 'number',
        label: 'Age',
        class: 'custom-input-class',
        style: {
          border: '1px solid #ccc',
        },
        validations: [
          {
            name: 'min',
            value: 18,
          },
          {
            name: 'max',
            value: 99,
          },
        ],
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
        class: 'custom-input-class',
        style: {
          border: '1px solid #ccc',
        },
        labelClass: 'custom-label-class',
        labelStyle: {
          color: 'red',
        },
        errorClass: 'custom-error-class',
        errorStyle: {
          color: 'red',
          'font-size': '12px',
        },
        validations: [
          {
            name: 'required',
          },
          {
            name: 'minlength',
            value: 6,
          },
        ],
      },
      {
        name: 'gender',
        type: 'select',
        label: 'Gender',
        class: 'custom-select-class',
        style: {
          border: '1px solid #ccc',
        },
        options: [
          {
            label: 'Male',
            value: 'male',
          },
          {
            label: 'Female',
            value: 'female',
          },
        ],
      },
      {
        name: 'subscribe',
        type: 'checkbox',
        label: 'Subscribe to newsletter',
        class: 'custom-checkbox-class',
        style: {
          'margin-right': '10px',
        },
      },
      {
        name: 'maritalStatus',
        type: 'radio',
        label: 'Marital Status',
        class: 'custom-radio-class',
        style: {
          'margin-right': '10px',
        },
        options: [
          {
            label: 'Single',
            value: 'single',
          },
          {
            label: 'Married',
            value: 'married',
          },
        ],
      },
      {
        name: 'profilePicture',
        type: 'file',
        label: 'Profile Picture',
        class: 'custom-file-class',
        style: {
          border: '1px solid #ccc',
        },
        validations: [
          {
            name: 'fileSize',
            value: 2000000, // 2MB
          },
        ],
      },
    ],
  };
  form!: FormGroup;
  fields: any[] = [];

  globalLabelClass: string = '';
  globalLabelStyle: any = {};

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.updateForm(this.json);
  }

  updateForm(newJson: any) {
    this.json = newJson;
    this.fields = this.json.fields;
    this.form = this.createFormGroup();
    this.globalLabelClass = this.json.globalLabelClass || '';
    this.globalLabelStyle = this.json.globalLabelStyle || {};
    this.cd.detectChanges();
  }

  createFormGroup(): FormGroup {
    const group: any = {};
    this.fields.forEach((field) => {
      const control = this.fb.control(
        field.value || '',
        this.bindValidations(field.validations || []),
      );
      group[field.name] = control;
    });
    return this.fb.group(group);
  }

  bindValidations(validations: any): any[] {
    if (validations.length > 0) {
      const validList: any[] = [];
      validations.forEach((valid: any) => {
        switch (valid.name) {
          case 'required':
            validList.push(Validators.required);
            break;
          case 'minlength':
            validList.push(Validators.minLength(valid.value));
            break;
          case 'maxlength':
            validList.push(Validators.maxLength(valid.value));
            break;
          case 'email':
            validList.push(Validators.email);
            break;
          case 'pattern':
            validList.push(Validators.pattern(valid.value));
            break;
          case 'max':
            validList.push(Validators.max(valid.value));
            break;
          case 'min':
            validList.push(Validators.min(valid.value));
            break;
          case 'date':
            validList.push(this.dateValidator(valid.value));
            break;
          case 'url':
            validList.push(Validators.pattern(/(https?:\/\/[^\s]+)/));
            break;
          case 'fileSize':
            validList.push(this.fileSizeValidator(valid.value));
            break;
          // Add more validations as needed
          default:
            break;
        }
      });
      return validList;
    }
    return [];
  }

  dateValidator(dateFormat: string) {
    return (control: any) => {
      const dateRegex = new RegExp(dateFormat);
      return dateRegex.test(control.value) ? null : { date: true };
    };
  }

  fileSizeValidator(maxSize: number) {
    return (control: any) => {
      if (control?.value && control.value.size > maxSize) {
        return { fileSize: true };
      }
      return null;
    };
  }

  onCheckboxChange(event: any, fieldName: string): void {
    this.form.get(fieldName)?.setValue(event.target.checked);
  }

  onRadioChange(fieldName: string, value: any): void {
    this.form.get(fieldName)?.setValue(value);
  }

  onFileChange(event: any, fieldName: string): void {
    const file = event.target.files[0];
    this.form.get(fieldName)?.setValue(file);
  }

  getErrorMessages(field: any): string[] {
    const errors: string[] = [];
    const controlErrors = this.form.get(field.name)?.errors;

    if (controlErrors) {
      for (const key in controlErrors) {
        if (controlErrors.hasOwnProperty(key)) {
          switch (key) {
            case 'required':
              errors.push(`${field.label} is required`);
              break;
            case 'minlength':
              errors.push(
                `${field.label} must be at least ${controlErrors[key].requiredLength} characters long`,
              );
              break;
            case 'maxlength':
              errors.push(
                `${field.label} cannot be more than ${controlErrors[key].requiredLength} characters long`,
              );
              break;
            case 'email':
              errors.push(`Invalid email format`);
              break;
            case 'pattern':
              errors.push(`Invalid format for ${field.label}`);
              break;
            case 'max':
              errors.push(
                `${field.label} cannot be more than ${controlErrors[key].max}`,
              );
              break;
            case 'min':
              errors.push(
                `${field.label} must be at least ${controlErrors[key].min}`,
              );
              break;
            case 'date':
              errors.push(`Invalid date format for ${field.label}`);
              break;
            case 'url':
              errors.push(`Invalid URL format for ${field.label}`);
              break;
            case 'fileSize':
              errors.push(
                `File size exceeds the maximum allowed size for ${field.label}`,
              );
              break;
            // Add more error messages as needed
            default:
              break;
          }
        }
      }
    }
    return errors;
  }

  onJsonChange(event: any) {
    try {
      const newJson = JSON.parse(event.target.value);
      this.updateForm(newJson);
    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
