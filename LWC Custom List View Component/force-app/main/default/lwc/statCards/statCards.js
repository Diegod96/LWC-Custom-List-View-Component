import { LightningElement, api, wire, track} from 'lwc';
import getClosedCases from '@salesforce/apex/CasesStatusController.getClosedCases';
import getNewCases from '@salesforce/apex/CasesStatusController.getNewCases';
import getEscalatedCases from '@salesforce/apex/CasesStatusController.getEscalatedCases';

console.log('Starting Stat Cards...');
export default class StatCards extends LightningElement {

    // Gets the number of closed cases
    @track data;
    @track closed;
    @wire(getClosedCases) closedCases({error, data}) {
        if(data) {
            this.closed = data.length;
            console.log("Number of Closed Cases: " + data.length)
        } 
        else if (error) {
            this.closed = undefined;
            console.log("Error : " + error)
        }
    }

    // Gets the number of new cases
    @track data;
    @track recent;
    @wire(getNewCases) newCases({error, data}) {
        if(data) {
            this.recent = data.length;
            console.log("Number of New Cases: " + data.length)
        } 
        else if (error) {
            this.recent = undefined;
            console.log("Error : " + error)
        }
    }

    // Get the number of escalated cases
    @track data;
    @track escalated;
    @wire(getEscalatedCases) escalatedCases({error, data}) {
        if(data) {
            this.escalated = data.length;
            console.log("Number of Escalated Cases: " + data.length)
        } 
        else if (error) {
            this.escalated = undefined;
            console.log("Error : " + error)
        }
    }
}