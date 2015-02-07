//make character that can take a chariteristic

var Hero = function(quote, health, image){

  this.quote = quote;
  this.health = 100;
  this.image = image;
  };

  Hero.prototype.attack= function(number){
    return Math.random() * 50;
};

var jonnyCash = new Hero ("You win— 100,000 school children just received a free instrument of their choice");

 var kurtCobain = new Hero ("You win— 100 different groups of friends just started garage bands"
);

var andre3000 = new Hero ("You win— somthing, somthing, somthing YEAH!!");

var britneySpears = new Hero ('You lost— from now on all singers will be picked by their looks and their voices will be digitally rendered. ');

var Pink = new Hero ('You lost— All song lyrics will now be composed only of cliche’s strung together');

var AdamLevine = new Hero ('You lost— Legions of jackbooted boy band members are storming all independent record labels and taking them somewhere never to be seen, or heard from again. ');


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
