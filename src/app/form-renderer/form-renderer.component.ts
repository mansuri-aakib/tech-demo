import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioComponent, FormioForm, FormioModule, FormioSubmission } from '@formio/angular';
import { IScreenExtensionRegistry } from '@techextensor/tab-rewrite-infrastructure';
import signInScreen from '../screen-json/sign-in-screen';
import signUpScreen from '../screen-json/sign-up-screen';

@Component({
  selector: 'app-form-renderer',
  standalone: true,
  imports: [FormioModule],
  templateUrl: './form-renderer.component.html',
  styleUrl: './form-renderer.component.scss'
})
export class FormRendererComponent {
  public route: ActivatedRoute = inject(ActivatedRoute);
  public form?: any;
  public submission?: any;
  public currentScreenExtensionInstance:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const screenId = param.get('screenId');
      if (screenId) {
        this.loadForm(screenId);

        // get current screen's custom logic
        this.currentScreenExtensionInstance = this.getScreenExtension(screenId);
      }
    });
  }

  onRender() {
    // execute onRender hook of current screen's custom logic
    this.executeScreenExtensionEvent(this.currentScreenExtensionInstance,'onRender', this.form);
  }

  onFormLoad(form: FormioForm) {
    // execute onFormLoad hook of current screen's custom logic
    this.executeScreenExtensionEvent(this.currentScreenExtensionInstance,'onFormLoad', form);
  }

  onChange (changes: any) {
    // execute onChange hook of current screen's custom logic
    this.executeScreenExtensionEvent(this.currentScreenExtensionInstance,'onChange', changes);
  }

  onReady(component: FormioComponent) { 
    // execute onReady hook of current screen's custom logic
    this.executeScreenExtensionEvent(this.currentScreenExtensionInstance,'onReady', component);  
    this.loadSubmission();
  }

  onSubmit(submission: FormioSubmission) {
    // execute onSubmit hook of current screen's custom logic
    this.executeScreenExtensionEvent(this.currentScreenExtensionInstance,'onSubmit', submission);
  }

  onBeforeSubmit(submission: any) {
    // execute onBeforeSubmit hook of current screen's custom logic
    this.executeScreenExtensionEvent(this.currentScreenExtensionInstance,'onBeforeSubmit', submission);
  }

  onSubmissionLoad(submission: FormioSubmission) {
    // execute onSubmissionLoad hook of current screen's custom logic
    this.executeScreenExtensionEvent(this.currentScreenExtensionInstance,'onSubmissionLoad', submission);
  }

  loadForm(screenId: any) {
    switch (screenId) {
      case '1':
        this.form = signInScreen;
        break;

      case '2':
        this.form = signUpScreen;
        break;

      default:
        break;
    }
  }

  loadSubmission() {
    let submission = { data: {} };
    this.executeScreenExtensionEvent(this.currentScreenExtensionInstance,'processSubmissionBeforeAssign', submission);  
    this.submission = submission;
  }

  executeScreenExtensionEvent(screen:any , funName: string, event: any) {
    if (screen) {
      const screenparms = {
        event:event,
        // otherParms: any
      };
      screen[funName](screenparms);
    }
  }

  private getScreenExtension(screenId: string) {
    var screens = IScreenExtensionRegistry.GetImplementations();
    for (var x = 0; x < screens.length; x++) {
      const screen = new screens[x](); 
      if (screen.screenId === screenId) {        
        return screen;
      }
    }
    return null;
  }
}
