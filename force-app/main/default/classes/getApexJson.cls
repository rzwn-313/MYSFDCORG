public class getApexJson {
    @AuraEnabled
   public Static String fetchQueryData(String channelname) {
       
   lwapic.ICChannelRequest instance = new lwapic.ICChannelRequest();
   instance.channelName = channelname;
   List<lwapic.ICChannelRequest> resList= new List<lwapic.ICChannelRequest>();
   resList.add(instance);
   List<lwapic.ICResponseWrapper> respWrapList =  lwapic.ICControllerSync.execute(resList);
   System.debug('responseBody'+respWrapList.get(0).responseBody);
   
    return respWrapList.get(0).responseBody;
   }
}