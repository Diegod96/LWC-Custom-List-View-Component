import { LightningElement, wire } from 'lwc';
import getCaseList from '@salesforce/apex/RefreshCasesController.getCaseList';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex'

const columns = [
    {label: 'Id', fieldName: 'Id', editable: false},
    {label: 'CaseNumber', fieldName: 'CaseNumber', editable: false},
    {label: 'Priority', fieldName: 'Priority', editable: true},
    {label: 'Status', fieldName: 'Status', editable: true},
    {label: 'Type', fieldName: 'Type', editable: true},
    {label: 'Subject', fieldName: 'Subject', editable: true},
    {label: 'ContactEmail', fieldName: 'ContactEmail', type: 'email', editable: true},
]

export default class RefreshLWC extends LightningElement {

    columns = columns;
    draftValues = [];
    contactResult = null;
    @wire(getCaseList)
    contact;

    // // Debugging method to make sure we are getting the correct data
    // get isContentAvailable() {
    //     console.log(JSON.stringify(this.contact));
    //     return this.contact && this.contact.data && this.contact.data.length > 0 ? 'Yes':'No'
    // }

    handleSave(event) {
        console.log(event.detail.draftValues);
        const recordInputs = event.detail.draftValues.slice().map(draft => {
            const fields = Object.assign({}, draft)
            return {fields}
        })
        console.log("recordInputs", recordInputs)

        const promises = recordInputs.map(recordInput => updateRecord(recordInput))
        Promise.all(promises).then(result => {
            this.showToastMsg('Success', 'Cases Updated')
            this.draftValues = [];
            return refreshApex(this.contact)
        }).catch(error => {
            this.showToastMsg('Error Updating Case', error.body.message, error)

        })
    }

    showToastMsg(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: variant || 'success'
            })
        )
    }

}