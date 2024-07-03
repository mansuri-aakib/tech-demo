import { IScreenExtension } from "@techextensor/tab-rewrite-infrastructure";

export class SignInScreen implements IScreenExtension {
    screenId = '1';

    constructor() { }

    onCustomEvent(screenparms: any) { };

    processSubmissionBeforeAssign(screenparms: any) {
        console.log('processSubmissionBeforeAssign', screenparms);
        screenparms.event.data = {
            email: "example@mail.com",
            password: "12345678"
        }
    };

    beforeFormLoad(screenparms: any) { };

    onRender(screenparms: any) {
        console.log('onRender', screenparms);
    }

    onFormLoad(screenparms: any) {
        console.log('onFormLoad', screenparms);

    }

    onChange(screenparms: any) {
        console.log('onChange', screenparms);
    }

    onReady(screenparms: any) {
        console.log('onReady', screenparms);
    }

    onSubmit(screenparms: any) {
        console.log('onSubmit', screenparms);
    }

    onBeforeSubmit(screenparms: any) {
        console.log('onBeforeSubmit', screenparms);
    }

    onSubmissionLoad(screenparms: any) {
        console.log('onSubmissionLoad', screenparms);
    }
}