import { LightningElement, track,api} from 'lwc';
import fetchJsonFromChannel from '@salesforce/apex/channelJsonparser.fetchJson';
import apexJsonData from '@salesforce/apex/getApexJson.fetchQueryData';

export default class GetChannel extends LightningElement {
    @track showdiv;
    @api jsondata;
       
    @api get titlename() {
        return this._titlename;
    }
    set titlename(value) {
        this._titlename = value;
    }

    @api get channelname() {
        return this._channelname;
    }
    set channelname(value) {
        this._channelname = value;
    }

    @api get autoload() {
        return this._autoload;
    }
    set autoload(value) {
        this._autoload = value;
    }
    @api get submitload() {
        return this._submitload;
    }
    set submitload(value) {
        this._submitload = value;
    }
    @api get recordid() {
        return this._recordid;
    }
    set recordid(value) {
        this._recordid = value;
    }
    @api get passrecordid() {
        return this._passrecordid;
    }
    set passrecordid(value) {
        this._passrecordid = value;
    }
    @api get refresh() {
        return this._refresh;
    }
    set refresh(value) {
        this._refresh = value;
    }
    @api get uitype() {
        return this._uitype;
    }
    set uitype(value) {
        this._uitype = value;
    }

    handleChangeChannel(event){
        this.channelname=event.target.value;
        this.showdiv = false;
    }

    connectedCallback(){
        if(this.autoload == true){

            apexJsonData({ channelname: this.channelname })
                 .then(queryresult => {  
                    this.jsondata = JSON.parse(JSON.stringify(queryresult)); 
                    if(this.jsondata){
                        this.showdiv = true;
                    }
                 });

        }       
    }

    handleSubmit(event) {
        apexJsonData({ channelname: this.channelname })
                 .then(queryresult => {  
                    this.jsondata = JSON.parse(JSON.stringify(queryresult)); 
                    if(this.jsondata){
                        this.showdiv = true;
                    }
                 });
    }

    // fetchJsonFromChannel(){
    //     fetchJson()
    //         .then(result => {
    //             if(result) { 
    //                 this.data = [];
    //                 this.jsonObj = JSON.parse(result); 
    //             }
    //         });
    //     }

}