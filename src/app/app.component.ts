import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignInScreen } from './custom-logic/sign-in-screen';
import { IScreenExtensionRegistry } from '@techextensor/tab-rewrite-infrastructure';
import { SignUpScreen } from './custom-logic/sign-up-screen';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tech-demo';

  constructor(){
    // register custom logic
    IScreenExtensionRegistry.register(SignInScreen);
    IScreenExtensionRegistry.register(SignUpScreen);
  }
}
