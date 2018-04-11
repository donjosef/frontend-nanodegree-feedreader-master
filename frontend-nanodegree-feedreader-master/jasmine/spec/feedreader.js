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
    
      /* New test suite for the menu*/
    describe("The menu", function() {
        
          /*Make sure that the menu is hidden by default*/
        it("should be hidden by default", function() {
           var hasClassHidden = $("body").hasClass("menu-hidden"); 
            expect(hasClassHidden).toBe(true);
        });
        
            /*Check if the menu is toggled when click happens on the icon. At the first click the class menu-hidden is removed, showing the menu, while at the second click the class menu-hidden is added*/
        it("should toggle class menu-hidden when clicked", function() {
            var icon = document.querySelector(".menu-icon-link");
            var event = new Event("click");
            icon.dispatchEvent(event); //first click
             expect($("body").hasClass("menu-hidden")).toBe(false); //first expectation, class removed
            icon.dispatchEvent(event); //second click
            expect($("body").hasClass("menu-hidden")).toBe(true); //second expectation, class added
        });


    
}());
