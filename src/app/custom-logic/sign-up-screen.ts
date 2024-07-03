import { IScreenExtension } from "@techextensor/tab-rewrite-infrastructure";

export class SignUpScreen implements IScreenExtension {
    screenId = '2';

    constructor() { }

    onCustomEvent(event: any) { };

    processSubmissionBeforeAssign(event: any) { };

    beforeFormLoad(event: any) { };

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