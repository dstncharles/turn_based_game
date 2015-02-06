//make chariter that can take a chariteristic

var Hero = function(quote){

  this.quote = quote;
  this.health = 100;
  this.prototype.attack= function(number){
    return Math.random() * 50;
  };
};

var jonnyCash = new Hero ("You win— 100,000 school children just received a free instrument of their choice");

 var kirtCobain = new Hero ("You win— 100 different groups of friends just started garage bands"
);

var andre3000 = new Hero ("You win— somthing, somthing, somthing YEAH!!");



//
// // var Dog = function (options) {
// //   var options = options || {};
// //   _.defaults(options, {
// //       hungry: true,
// //       color: 'black',
// //       owner: undefined
// //     });
// //   _.extend(this, options);
// // };
// //
// // Dog.prototype += {
// //   status: 'normal',
// //   color: 'black',
// //   hungry: true
// // };
// //
// // var Human = function(options) {
// //   var options = options || {};
// //   _.defaults(options, {
// //       cool: false,
// //       pet: function(target) { target.status='happy'; }
// //     });
// //   _.extend(this, options);
// // };
// //
// // Human.prototype.feed = function(target) {
// //   target.hungry = false;
// // };
