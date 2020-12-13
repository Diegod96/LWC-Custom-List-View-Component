// Apex controller to return a list of closed, escalated, and new cases 
public with sharing class CasesStatusController {

    // Return Closed Cases
    @AuraEnabled(cacheable=true)
    public static List <Case> getClosedCases() {
        return [
            SELECT CaseNumber,Status 
            FROM Case 
            WHERE Status='Closed'
        ];
    }

    // Return Escalated Cases
    @AuraEnabled(cacheable=true)
    public static List <Case> getEscalatedCases() {
        return [
            SELECT CaseNumber,Status 
            FROM Case 
            WHERE Status='Escalated'
        ];
    }

    // Return New Cases
    @AuraEnabled(cacheable=true)
    public static List <Case> getNewCases() {
        return [
            SELECT CaseNumber,Status 
            FROM Case 
            WHERE Status='New'
        ];
    }
}

