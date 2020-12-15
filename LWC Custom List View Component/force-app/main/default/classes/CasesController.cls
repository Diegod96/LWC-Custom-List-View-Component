// Apex controller for Cases
public with sharing class CasesController {

    // Return Cases
    @AuraEnabled(cacheable=true)
    public static List<Case> getCaseList() {
        return [
            SELECT Id, CaseNumber, Priority, Type, Subject, ContactEmail, Status 
            FROM Case 
            ORDER By ContactEmail
            ];
    }

    @AuraEnabled(cacheable=true)
    public static Case getSingleCase() {
        return [
            SELECT Id, CaseNumber, Priority, Type, Subject, ContactEmail, Status
            FROM Case
            WITH SECURITY_ENFORCED
            LIMIT 1
        ];
    }

    // // Fetch a case
    // @AuraEnabled
    // public static List<Case> fetchCase(String caseId) {
    //     return [
    //         SELECT Id, CaseNumber, Priority, Type, Subject, ContactEmail, Status 
    //         FROM Case 
    //         WITH SECURITY_ENFORCED
    //         LIMIT 1
    //         // WHERE Id=:caseId
    //         ];
    // }


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