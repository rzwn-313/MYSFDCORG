public with sharing class getWireClass {
    @AuraEnabled(cacheable=true)
    public static String getInputMessage() {
        return 'Hi Rizwan, This Message from Apex Class';
    }
}
