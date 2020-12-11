// Apex controller that gets all of the cases along with attributes associated with that case
public with sharing class CasesController {
    @AuraEnabled(cacheable=true)
    public static List<Case> getCaseList() {
        return [SELECT CaseNumber, Priority, Type, Subject, ContactEmail, Status FROM Case ORDER By ContactEmail];
    }
}