import { LightningElement ,api, wire, track} from 'lwc';
import getCaseList from '@salesforce/apex/CasesController.getCaseList';
export default class casesDatatable extends LightningElement {
    @track columns = [{
            label: 'Case Number',
            fieldName: 'CaseNumber',
            type: 'text',
            sortable: true
        },
        {
            label: 'Priority Level',
            fieldName: 'Priority',
            type: 'text',
            sortable: true
        },
        {
            label: 'Case Type',
            fieldName: 'Type',
            type: 'text',
            sortable: true
        },
        {
            label: 'Contact Email',
            fieldName: 'ContactEmail',
            type: 'text',
            sortable: true
        },
        {
            label: 'Status Level',
            fieldName: 'Status',
            type: 'text',
            sortable: true
        }
    ];
 
    @track error;
    @track caseList ;
    @wire(getCaseList)
    wiredCases({
        error,
        data
    }) {
        if (data) {
            this.caseList = data;
        } else if (error) {
            this.error = error;
        }
    }
}