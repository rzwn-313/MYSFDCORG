import { LightningElement, api, track } from 'lwc';

export default class AnyJson2Html extends LightningElement {

    @api title = "Dynamic Table";
    @api json;
    @api disableHeader = false;
    @api theme = 'slds';
    @api getValueFromParent;
    loaded = false;
    firstTableFound = false;


    renderedCallback() {
        this.json = this.getValueFromParent;
        let input;
        switch (this.whichObject(this.json)) {
            case "Object":
                input = { ...this.json }
                break;
            case "string":
                input = JSON.parse(this.json);
                break;
            case "Array":
                input = [...this.json]
                break;
        }
        this.initialize(input, this.theme, !this.disableHeader);
    }

    initialize(json, theme, enableHeader) {
        try {
            let html = '';
            if (this.whichObject(json) == 'Object') {
                html += this.CreateDetailView(json, theme, enableHeader);
            } else if (this.whichObject(json) == 'Array') {
                html += this.CreateTableView(json, theme, enableHeader);
            }
            this.template.querySelector('div').innerHTML = html;
        } catch (err) {
            console.log(err);
        }
    }

    CreateTableView(objArray, theme, enableHeader) {

        if (enableHeader === undefined) {
            enableHeader = true; //default enable headers
        }

        var array = objArray;
        var found = false;
        var str = '';

        if (array.length == 0) {
            str += 'EMPTY';
        } else {

            if (this.firstTableFound) {
                str += '<div class="scrollable-table"><table class="' + theme + '">';
            } else {
                str += '<table class="' + theme + '">';
                found = true;
                this.firstTableFound = true;
            }

            // table head
            if (enableHeader && this.whichObject(array[0]) == 'Object') {
                str += '<thead><tr>';
                for (var index in array[0]) {
                    str += '<th scope="col">' + index + '</th>';
                }
                str += '</tr></thead>';
            }

            // table body
            str += '<tbody>';
            for (var i = 0; i < array.length; i++) {
                str += (i % 2 == 0) ? '<tr class="alt">' : '<tr>';

                if (this.whichObject(array[i]) == 'Object') {
                    for (var index in array[i]) {
                        if (this.whichObject(array[i][index]) == 'Object') {
                            str += '<td class="table-inside">' + this.CreateDetailView(array[i][index], theme, enableHeader) + '</td>';
                        } else if (this.whichObject(array[i][index]) == 'Array') {
                            str += '<td class="table-inside">' + this.CreateTableView(array[i][index], theme, enableHeader) + '</td>';
                        } else {
                            str += '<td>' + array[i][index] + '</td>';
                        }
                    }
                } else if (this.whichObject(array[i]) == 'Array') {
                    str += '<td class="table-inside">' + this.CreateTableView(array[i]) + '</td>';
                } else {
                    str += '<td>' + array[i] + '</td>';
                }
                str += '</tr>';
            }
            str += '</tbody>'
            str += '</table>';
            if (!found) {
                str += '</div>';
            }

        }
        return str;
    }

    // This function creates a details view table with column 1 as the header and column 2 as the details
    // objArray = Anytype of object array, like JSON results
    // enableHeader (optional) = Controls if you want to hide/show, default is show
    CreateDetailView(objArray, theme, enableHeader) {
        if (enableHeader === undefined) {
            enableHeader = true; //default enable headers
        }

        var found = false;
        var str = '';

        if (this.firstTableFound) {
            str += '<div class="scrollable-table"><table class="' + theme + '">';
        } else {
            str += '<table class="' + theme + '">';
            found = true;
            this.firstTableFound = true;
        }
        str += '<tbody>';

        var row = 0;
        for (var index in objArray) {
            row++;
            str += (row % 2 == 0) ? '<tr class="alt">' : '<tr>';

            if (enableHeader) {
                str += '<th>' + index + '</th>';
            }

            if (this.whichObject(objArray[index]) == 'Object') {
                str += '<td class="table-inside">' + this.CreateDetailView(objArray[index], theme, enableHeader) + '</td>';
            } else if (this.whichObject(objArray[index]) == 'Array') {
                str += '<td class="table-inside">' + this.CreateTableView(objArray[index], theme, enableHeader) + '</td>';
            } else {
                str += '<td>' + objArray[index] + '</td>';
            }
            str += '</tr>';
        }
        str += '</tbody>';
        str += '</table>';
        if (!found) {
            str += '</div>';
        }

        return str;
    }


    whichObject(object) {
        let arrayConstructor = [].constructor;
        let objectConstructor = {}.constructor;

        if (object === null) {
            return "null";
        }
        else if (object === undefined) {
            return "undefined";
        }
        else if (object.constructor === arrayConstructor) {
            return "Array";
        }
        else if (object.constructor === objectConstructor) {
            return "Object";
        } else {
            return typeof object;
        }
    }
}