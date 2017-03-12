// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var matches = [
  {
    matchName: "Stephanie",
    matchEmail: "steph@example.com",
    matchUserName: "ssteph474089",
    phoneNumber: "847-876-5485"
  }, {
    matchName: "Meghan",
    matchEmail: "meg@example.com",
    matchUserName: "mmegs3422",
    phoneNumber: "847-898-1078"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = matches;
