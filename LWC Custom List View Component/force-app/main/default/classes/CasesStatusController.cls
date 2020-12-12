// Apex controller to return a list of clsoed, escalated, and new cases 
public with sharing class CasesStatusController {

    // Return closed cases
    @AuraEnabled(cacheable=true)
    public static List <Case> getClosedCases() {
        return [
            SELECT CaseNumber,Status 
            FROM Case 
            WHERE Status='Closed'
        ];
    }

    // Return escalated cases
    @AuraEnabled(cacheable=true)
    public static List <Case> getEscalatedCases() {
        return [
            SELECT CaseNumber,Status 
            FROM Case 
            WHERE Status='Escalated'
        ];
    }

    // Return new cases
    @AuraEnabled(cacheable=true)
    public static List <Case> getNewCases() {
        return [
            SELECT CaseNumber,Status 
            FROM Case 
            WHERE Status='New'
        ];
    }
}

