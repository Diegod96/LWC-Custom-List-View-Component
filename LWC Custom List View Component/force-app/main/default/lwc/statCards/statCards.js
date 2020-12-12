import { LightningElement, api, wire, track} from 'lwc';

// Importing controllers to get cases based on status level
import getClosedCases from '@salesforce/apex/CasesStatusController.getClosedCases';
import getNewCases from '@salesforce/apex/CasesStatusController.getNewCases';
import getEscalatedCases from '@salesforce/apex/CasesStatusController.getEscalatedCases';

// Importing controllers to get cases based on priority level
import getHighPriorityCases from '@salesforce/apex/CasesPriorityController.getHighPriorityCases';
import getMediumPriorityCases from '@salesforce/apex/CasesPriorityController.getMediumPriorityCases';
import getLowPriorityCases from '@salesforce/apex/CasesPriorityController.getLowPriorityCases';

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

    // Get the number of high priority cases
    @track data;
    @track high;
    @wire(getHighPriorityCases) highPriorityCases({error, data}) {
        if(data) {
            this.high = data.length;
            console.log("Number of High Priority Cases: " + data.length)
        } 
        else if (error) {
            this.high = undefined;
            console.log("Error : " + error)
        }
    }

    // Get the number of medium priority cases
    @track data;
    @track medium;
    @wire(getMediumPriorityCases) mediumPriorityCases({error, data}) {
        if(data) {
            this.medium = data.length;
            console.log("Number of Medium Priority Cases: " + data.length)
        } 
        else if (error) {
            this.medium = undefined;
            console.log("Error : " + error)
        }
    }

    // Get the number of low priority cases
    @track data;
    @track low;
    @wire(getLowPriorityCases) lowPriorityCases({error, data}) {
        if(data) {
            this.low = data.length;
            console.log("Number of Low Priority Cases: " + data.length)
        } 
        else if (error) {
            this.low = undefined;
            console.log("Error : " + error)
        }
    }

    
}