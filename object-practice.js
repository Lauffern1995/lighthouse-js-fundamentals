var savingsAccount = { 
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      } // sets object method for deposit and calls on the balance property 
  }, // make sure to use "," to separate the methods in your object
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  }, // sets withdraw methof by setting a verifyBalance variable and makes sure you don't go into negative balance
   printAccountSummary: function() {
      return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
  } // sends a welcome message by calling on both savingsAccount.interestRatePercent & savingsAccount.balance properties....function () is empty because it takes no params 

};

console.log(savingsAccount.printAccountSummary()); 
//---------------------------------------------------------------

/* var facebookProfile = {
  name : "Noah",
  numOfFriends : 10,
  messages : ["Hello", "How are you?", "Goodbye!"],
  postMessage : function (message) {
      facebookProfile.messages.push(message);
  },
  deleteMessage : function(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend : function() {
    facebookProfile.numOfFriends += 1;
  },
  removeFriend : function () {
    facebookProfile.numOfFriends -= 1;
  }
}; */
//--------------------------------------------------------------

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code sshould have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

// This is an array of objects. 

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
donuts.forEach(function(donut) { 
  console.log(donut.type+ " donuts cost $" + donut.cost + " each");  
}); 

 console.log(donuts)
// donut represents a single element of donuts array
// donut is an object, therefore you can access its properties using a dot notation

/* must print 
Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
*/