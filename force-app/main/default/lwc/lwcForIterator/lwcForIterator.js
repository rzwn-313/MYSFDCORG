import { LightningElement } from 'lwc';
export default class LwcForEach extends LightningElement {
    contacts = [
    { 
     Id : '1001',
     Name : 'Rizwan ahmed',
     Website : 'www.ceptes.com'
    },
    {
     Id : '1002',
     Name : 'Steve Jobs',
     Website : 'www.apple.com'
    },
    {
     Id : '1003',
     Name : 'Marc Benioff',
     Website : 'www.salesforce.com'
    },
    {
    Id : '1004',
    Name : 'Bill Gates',
    Website : 'www.microsoft.com'
    }
   ];
}
