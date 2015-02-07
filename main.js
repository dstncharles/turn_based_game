//make character that can take a chariteristic

var Hero = function(quote){
  var options = options || {};
  _.defaults(options, {
    health: 100,
});
_.extend(this, options);
};

var jonnyCash = new Hero ({
  quote:"You win— 100,000 school children just received a free instrument of their choice"});

 var kurtCobain = new Hero ({
   quote:"You win— 100 different groups of friends just started garage bands"
});

var andre3000 = new Hero ({
    quote:"You win— somthing, somthing, somthing YEAH!!"});

var britneySpears = new Hero ({
  quote:"You lost— from now on all singers will be picked by their looks and their voices will be digitally rendered."});

var Pink = new Hero ({
  quote:'You lost— All song lyrics will now be composed only of cliche’s strung together'});

var AdamLevine = new Hero ({
  quote:'You lost— Legions of jackbooted boy band members are storming all independent record labels and taking them somewhere never to be seen, or heard from again. '});


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
