/* All the tests are placed in the $() function, that runs when the dom has completely loaded because a lot of these tests rely upon the dom*/
$(function() {
   
    describe('RSS Feeds', function() {
          /*Tests if the allFeeds variable has been defined and that is not empty*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
          /*Tests if the feed has a URL and that is not empty*/
        it("should have a defined URL", function() {
            for(var feed of allFeeds) {
                let urlOfFeed = feed.url;
                expect(urlOfFeed).toBeDefined();
                expect(urlOfFeed.length).not.toBe(0);
            }
            
        }); 
        
          /*Check if feed has a name and it is not empty*/
         it("should have a defined name", function() {
            for(var feed of allFeeds) {
                let nameOfFeed = feed.name;
                expect(nameOfFeed).toBeDefined();
                expect(nameOfFeed.length).not.toBe(0);
            }
         });


        
    });


    
}());
