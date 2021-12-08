import { LightningElement } from 'lwc';

//import ACCOUNT_ID from '@salesforce/account/Id';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_SITE from '@salesforce/schema/Account.Site';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';

export default class RecordForm extends LightningElement {

    selectedFields = [ACCOUNT_NAME, ACCOUNT_SITE, ACCOUNT_PHONE];
}