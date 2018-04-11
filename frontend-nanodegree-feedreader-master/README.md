# Project Overview

In this project the focus was to write a series of test-suites against a feed reader application built by another developer, that loads all the feeds necessary through a google feed reader API. The framework used is Jasmine, a powerful, light and easy to write framework.

## Main functionality of the app

* All the main functionality of the app is built inside the js/app.js file. 
* The Google Feed Reader API grap all the feeds necessary as JSON object.
* When the API has finished to load all the feeds, it calls the init function
* At this point the loadFeed is called loading all the feeds and setting up all the DOM operations to display this feeds on the page
* When users click on the links inside the hidden menu, all the various feed are loaded and displayed on the page.

## Tests implemented

I have worked primarily on the feedreader.js. The tests implemented are: 
1. Make sure that the allFeeds variable has been defined and that it is not empty. 
2. Make sure all the feeds have an URL and that it is not empty.
3. Make sure all the feeds have a name and that it is not empty.
4. Make sure that the menu is hidden by default.
5. Make sure that clicking on the menu icon, the menu change its visibility between visible and hidden.
6. Testing asyncronous code. Make sure that there is at least one entry inside the container .feed, when loadFeed is executed.
7. Testing asyncrononus code. Make sure that loading different feeds, change the content displayed on the page.


## Run the application

Go to [ https://donjosef.github.io/frontend-nanodegree-feedreader-master/ ] to see all the feeds loaded and displayed. If you scroll all the way down you'll see a section relative to Jasmine Framework and the  results of the various tests passed.