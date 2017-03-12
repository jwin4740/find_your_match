// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// =============================================================================
var path = require('path');

var matchesData = require("../data/matches.js");
var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================


  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

module.exports = function (app) {



  app.get("/api/friends", function(request, response) {
    response.json(friendsData);
    console.log(friendsData);
  });

   app.get("/api/matches", function(request, response) {
    response.json(matchesData);
    console.log(matchesData);
  });
 



}