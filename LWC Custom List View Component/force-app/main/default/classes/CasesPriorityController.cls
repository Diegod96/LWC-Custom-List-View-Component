// Apex controller to return a list of high, medium, and low cases 
public with sharing class CasesPriorityController {

    // Return High Priority cases
    @AuraEnabled(cacheable=true)
    public static List <Case> getHighPriorityCases() {
        return [
            SELECT CaseNumber,Status 
            FROM Case 
            WHERE Priority='High'
        ];
    }

    // Return Medium Priority cases
    @AuraEnabled(cacheable=true)
    public static List <Case> getMediumPriorityCases () {
        return [
            SELECT CaseNumber,Status 
            FROM Case 
            WHERE Priority='Medium'
        ];
    }

    // Return Low Priority cases
    @AuraEnabled(cacheable=true)
    public static List <Case> getLowPriorityCases () {
        return [
            SELECT CaseNumber,Status 
            FROM Case 
            WHERE Priority='Low'
        ];
    }
}