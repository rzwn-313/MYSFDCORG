
public with sharing class CovidTrackerController {
    //getCovidSummary
    @AuraEnabled(continuation=true cacheable=true)
    public static Continuation getCovidSummary(){ 
        String endpoint = 'https://api.covid19api.com/summary'; // End Point URL

        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('GET');

        Continuation con = new Continuation(120);
        con.ContinuationMethod = 'callback';
        con.addHttpRequest(req);
        return con;
    }

    @AuraEnabled(cacheable=true)
    public static Object callback(List<String> labels, Object state) {
        HttpResponse res = Continuation.getResponse(labels[0]); 
        return res.getBody();
    } 
    
}