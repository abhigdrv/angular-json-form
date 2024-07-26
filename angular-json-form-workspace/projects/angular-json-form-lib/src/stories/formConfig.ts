const formConfig = {
    globalLabelClass: '',
    globalLabelStyle: {
      'font-weight': 'bold',
      color: '#333',
    },
    formConfig: {
      class: '',
      style: {
        padding: '50px',
        'background-color': '#ffffff',
        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'border-radius': '10px',
        'width':'300px'
      },
      buttonClass: '',
      buttonStyle: {
        'background-color': '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        'border-radius': '5px',
        'font-size': '16px',
        cursor: 'pointer',
        'margin-top': '20px',
      },
    },
    fields: [
      {
        name: 'username',
        type: 'text',
        label: 'Username',
        class: '',
        style: {
          width: '100%',
          padding: '10px',
          'margin-bottom': '10px',
          border: '1px solid #ccc',
          'border-radius': '5px',
          'font-size': '14px',
        },
        labelClass: '',
        labelStyle: {
          color: '#333',
          'font-size': '14px',
          'margin-bottom': '5px',
          display: 'block',
        },
        errorClass: '',
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
        class: '',
        style: {
          width: '100%',
          padding: '10px',
          'margin-bottom': '10px',
          border: '1px solid #ccc',
          'border-radius': '5px',
          'font-size': '14px',
        },
        labelClass: '',
        labelStyle: {
          color: '#333',
          'font-size': '14px',
          'margin-bottom': '5px',
          display: 'block',
        },
        errorClass: '',
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
        class: '',
        style: {
          width: '100%',
          padding: '10px',
          'margin-bottom': '10px',
          border: '1px solid #ccc',
          'border-radius': '5px',
          'font-size': '14px',
        },
        labelClass: '',
        labelStyle: {
          color: '#333',
          'font-size': '14px',
          'margin-bottom': '5px',
          display: 'block',
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
        class: '',
        style: {
          width: '100%',
          padding: '10px',
          'margin-bottom': '10px',
          border: '1px solid #ccc',
          'border-radius': '5px',
          'font-size': '14px',
        },
        labelClass: '',
        labelStyle: {
          color: '#333',
          'font-size': '14px',
          'margin-bottom': '5px',
          display: 'block',
        },
        errorClass: '',
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
        class: '',
        style: {
          width: '100%',
          padding: '10px',
          'margin-bottom': '10px',
          border: '1px solid #ccc',
          'border-radius': '5px',
          'font-size': '14px',
        },
        labelClass: '',
        labelStyle: {
          color: '#333',
          'font-size': '14px',
          'margin-bottom': '5px',
          display: 'block',
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
        class: '',
        style: {
          'margin-right': '10px',
        },
        labelClass: '',
        labelStyle: {
          color: '#333',
          'font-size': '14px',
          'margin-bottom': '5px',
          display: 'inline-block',
        },
      },
      {
        name: 'maritalStatus',
        type: 'radio',
        label: 'Marital Status',
        class: '',
        style: {
          'margin-right': '10px',
        },
        labelClass: '',
        labelStyle: {
          color: '#333',
          'font-size': '14px',
          'margin-bottom': '5px',
          display: 'block',
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
        class: '',
        style: {
          border: '1px solid #ccc',
          padding: '10px',
          'border-radius': '5px',
          'font-size': '14px',
          'margin-bottom': '10px',
        },
        labelClass: '',
        labelStyle: {
          color: '#333',
          'font-size': '14px',
          'margin-bottom': '5px',
          display: 'block',
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
  
  export default formConfig;
  