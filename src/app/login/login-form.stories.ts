import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginSliderComponent } from './login-slider/login-slider.component';
import { LoginHeaderComponent } from '../login-header/login-header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SocialLoginComponent } from './social-login/social-login.component';

export const formData = {
  email: 'storybook@someemail.com',
  password: 'somepassword'
};

export const actions = {
  onLogin: action('onLogin')
};

storiesOf('Login Form', module )
  .addDecorator(
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        LoginComponent,
        LoginSliderComponent,
        LoginHeaderComponent,
        LoginFormComponent,
        SocialLoginComponent,
      ]
    }),
  )
  .add('default', () => {
    return {
      template: `
        <app-login></app-login>
      `,
      props: {
        formData,
        onLogin: actions.onLogin,
      }
    };
  });
