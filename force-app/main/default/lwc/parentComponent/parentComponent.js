import { LightningElement, api } from "lwc";
export default class parentComponent extends LightningElement {
  @api recordId;
  @api objectApiName;
}