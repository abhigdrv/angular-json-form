import type { Meta, StoryObj } from '@storybook/angular';
import { JsonFormComponent } from './json-form.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<JsonFormComponent> = {
  component: JsonFormComponent,
};

export default meta;
type Story = StoryObj<JsonFormComponent>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
