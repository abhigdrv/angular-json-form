import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'angular-json-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onFormSubmit()" [ngClass]="json?.formConfig?.class" [ngStyle]="json?.formConfig?.style">
      
      <!-- Label and Field Rendering -->
      <div *ngFor="let field of fields">
        
        <!-- Label -->
        <label [for]="field.name" 
               [ngClass]="field.labelClass || globalLabelClass"
               [ngStyle]="field.labelStyle || globalLabelStyle">
          {{field.label}}
        </label>
        
        <!-- Text/Email/Password/Number/Date Input -->
        <input *ngIf="field.type === 'text' || field.type === 'email' || field.type === 'password' || field.type === 'number' || field.type === 'date' || field.type === 'tel' || field.type === 'url' || field.type == 'search' || field.type === 'datetime-local' || field.type === 'month' || field.type === 'week' || field.type === 'time' || field.type === 'hidden' || field.type === 'color'"
               [formControlName]="field.name"
               [type]="field.type"
               [id]="field.name"
               [ngClass]="field.class"
               [ngStyle]="field.style"/>
        
        <!-- Text/Email/Password/Number/Date Input -->
        <textarea *ngIf="field.type === 'textarea'"
               [formControlName]="field.name"
               [id]="field.name"
               [ngClass]="field.class"
               [ngStyle]="field.style"></textarea>
        
        <!-- Checkbox Input -->
        <input *ngIf="field.type === 'checkbox'"
               [formControlName]="field.name"
               [type]="field.type"
               [id]="field.name"
               [ngClass]="field.class"
               [ngStyle]="field.style"
               (change)="onCheckboxChange($event, field.name)"/>
        
        <!-- Radio Input -->
        <div *ngIf="field.type === 'radio'">
          <div *ngFor="let option of field.options">
            <label>
              <input [type]="field.type"
                     [value]="option.value"
                     [name]="field.name"
                     [ngClass]="field.class"
                     [ngStyle]="field.style"
                     (change)="onRadioChange(field.name, option.value)"
                     [checked]="form.get(field.name)?.value === option.value"/>
              {{option.label}}
            </label>
          </div>
        </div>
        
        <!-- Select Input -->
        <select *ngIf="field.type === 'select'"
                [formControlName]="field.name"
                [id]="field.name"
                [ngClass]="field.class"
                [ngStyle]="field.style">
          <option value="">Select</option>
          <option *ngFor="let option of field.options" [value]="option.value">{{option.label}}</option>
        </select>
        
        <!-- File Input -->
        <input *ngIf="field.type === 'file'"
               [type]="field.type"
               [id]="field.name"
               [ngClass]="field.class"
               [ngStyle]="field.style"
               (change)="onFileChange($event, field.name)"/>
        
        <!-- Dynamic Error Handling -->
        <div *ngIf="form.get(field.name)?.invalid && form.get(field.name)?.touched" 
             [ngClass]="field.errorClass"
             [ngStyle]="field.errorStyle">
          <div *ngFor="let error of getErrorMessages(field)">
            {{error}}
          </div>
        </div>
      </div>
      
      <!-- Submit Button -->
      <button type="submit" [disabled]="form.invalid"
              [ngClass]="json?.formConfig?.buttonClass" 
              [ngStyle]="json?.formConfig?.buttonStyle">
        Submit
      </button>
    </form>
  `,
  styles: ``
})
export class AngularJsonForm implements OnInit {
  @Input() json: any;
  @Output() onSubmit:EventEmitter<any> = new EventEmitter<any>();
  form!: FormGroup;
  fields: any[] = [];
  
  globalLabelClass: string = '';
  globalLabelStyle: any = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fields = this.json.fields;
    this.form = this.createFormGroup();

    // Set global label class and style
    this.globalLabelClass = this.json.globalLabelClass || '';
    this.globalLabelStyle = this.json.globalLabelStyle || {};
  }

  createFormGroup(): FormGroup {
    const group: any = {};
    this.fields.forEach(field => {
      const control = this.fb.control(
        field.value || '',
        this.bindValidations(field.validations || [])
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
              errors.push(`${field.label} must be at least ${controlErrors[key].requiredLength} characters long`);
              break;
            case 'maxlength':
              errors.push(`${field.label} cannot be more than ${controlErrors[key].requiredLength} characters long`);
              break;
            case 'email':
              errors.push(`Invalid email format`);
              break;
            case 'pattern':
              errors.push(`Invalid format for ${field.label}`);
              break;
            case 'max':
              errors.push(`${field.label} cannot be more than ${controlErrors[key].max}`);
              break;
            case 'min':
              errors.push(`${field.label} must be at least ${controlErrors[key].min}`);
              break;
            case 'date':
              errors.push(`Invalid date format for ${field.label}`);
              break;
            case 'url':
              errors.push(`Invalid URL format for ${field.label}`);
              break;
            case 'fileSize':
              errors.push(`File size exceeds the maximum allowed size for ${field.label}`);
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
  

  onFormSubmit(): void {
    this.onSubmit.emit(this.form.value)
  }
}
