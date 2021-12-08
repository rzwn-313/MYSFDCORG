import { LightningElement } from 'lwc';
import firsttemplate from './parentCompRender.html';
import secondtemplate from './Child.html';
export default class ParentCompRender extends LightningElement {
templatenumber = 'temp1';
constructor(){
super();
console.log('Inside constructor');
}
connectedCallback(){
console.log('Inside connected callback');
}
disconnectedCallback(){
console.log('Inside disconnected callback');
}
onchange(){
console.log('Inside change template1');
if(this.templatenumber==='temp1'){
this.templatenumber='temp2';
}else{
this.templatenumber='temp1';
}
}
onchangenew(){
    console.log('Inside change template2');
    if(this.templatenumber==='temp2'){
    this.templatenumber='temp1';
    }else{
    this.templatenumber='temp2';
    }
    }
render(){
console.log('Inside render');
if(this.templatenumber==='temp1')
return firsttemplate;
else return secondtemplate;
}
}