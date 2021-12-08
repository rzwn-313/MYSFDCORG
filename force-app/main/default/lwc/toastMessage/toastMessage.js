import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LWCToastMessages extends LightningElement {
    showError() {
        const evt = new ShowToastEvent({
            title: 'Error',
            message: 'This is an error message',
            variant: 'error',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showSuccess(){
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'This is a success message',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showWarning(){
        const evt = new ShowToastEvent({
            title: 'Warning',
            message: 'This is a warning message',
            variant: 'warning',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showInfo() {
        const evt = new ShowToastEvent({
            title: 'Info',
            message: 'This is an information message',
            variant: 'info',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
}