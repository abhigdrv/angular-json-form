import type { Meta, StoryObj } from '@storybook/angular';
import { JsonFormComponent } from './json-form.component';
import formConfig from './formConfig';

//👇 This default export determines where your story goes in the story list
const meta: Meta<JsonFormComponent> = {
  component: JsonFormComponent,
};

export default meta;
type Story = StoryObj<JsonFormComponent>;

export const JSONForm: Story = {
  args: {
    json:formConfig
  },
};
