public with sharing class RefreshCasesController {

    @AuraEnabled(cacheable=true)
    public static List <Case> getCaseList() {
        return [
            SELECT Id, CaseNumber, Priority, Type, Subject, ContactEmail, Status
            FROM Case
            ];
    }

}

