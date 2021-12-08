import { LightningElement } from 'lwc';
export default class ConstructorExmple extends LightningElement {
    constructor() {
        super();
        this.classList.add('new-class');
        console.log('In Constructor');
    }
}