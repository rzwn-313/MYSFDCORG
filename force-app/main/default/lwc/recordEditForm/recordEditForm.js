import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_SITE from '@salesforce/schema/Account.Site';

export default class RecordEditForm extends LightningElement {
    accountName = ACCOUNT_NAME;
    accountPhone = ACCOUNT_PHONE;
    accountSite =  ACCOUNT_SITE;
      
    handleSuccess(){
        if(this.recordId !== null){
            this.dispatchEvent(new ShowToastEvent({
                    title: "SUCCESS!",
                    message: "New record has been created.",
                    variant: "success",
                }),
             );
                
        }
    }
}