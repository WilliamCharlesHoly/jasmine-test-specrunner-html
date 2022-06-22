function Calculator() {
   this.total = 0;
 }
 
 Calculator.prototype.add = function (number) {
   return (this.total += number);
 };
 Calculator.prototype.subtract = function (number) {
   return (this.total -= number);
 };
 Calculator.prototype.multiply = function (number) {
   return (this.total *= number);
 };
 Calculator.prototype.divide = function (number) {
   if (number === 0) {
     throw new Error('number cannot be zero');
   }
   return (this.total /= number);
 };

 function Player() {
}
Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};
