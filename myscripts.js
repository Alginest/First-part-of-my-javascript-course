/************************* 
* Variables and data types
*/ 
/*var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3yeahrs=3; // U cant start a variable name with a number,or signs besides dollar and underscore 
var johnMark = 'John and Mark';*/

/*************************
*  Variable mutation and type corection
*/

/*var firstName = 'John';
var age = 28;
// type corection
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);*/

/*************************
* Basic operators
*/ 
 /* var year, yearJohn, yearMark;
 var now = 2018;
 ageJohn = 28;
 ageMark = 33;
 // Math Operators
 var yearJohn =  now - ageJohn;
 var yearMark =  now - ageMark;
 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

 // Logical Operators
 var johnOlder = ageJohn > ageMark;
 console.log(johnOlder);

 var johnOlder = ageJohn < ageMark;
 console.log(johnOlder);

 // typeof operator
 console.log(typeof johnOlder);
 console.log(typeof  ageJohn);
 console.log(typeof 'Mark is older then John');
 var x;
 console.log(typeof x); */

/*************************
*  Operator precedence
*/

/*var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
// multiple opearators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);
// grouping
var ageJohn = now -yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average); // avrege age is 32
// multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32-6 // 26
console.log(x, y);

// more opeartors
x *= 2; // x = x * 2
console.log(x);
x += 10; // x = x + 10
console.log(x);
x += 1; */
/*************************
*  Coding Challenge
*/
/*var massJohn = 92; // kg
var heightJohn = 1.95; // m
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn); 

var massMark = 78; // kg
var heightMark = 1.69; // m
var BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark); 

var higherBMI = BMIMark > BMIJohn;
console.log(' Is Mark\'s BMI higher than John\'s? ' + higherBMI);
// solving first coding challenge  \' is used to make ' in lines*/

/*************************
*  if / else statements
*/
 /*var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
     console.log(firstName + ' is married!');
 } else {
     console.log(firstName + ' will hopefully marry soon :)');
 }

 var isMarried = true;
  if (isMarried) {
     console.log(firstName + ' is married!');
 } else {
     console.log(firstName + ' will hopefully marry soon :)');
 }

var massJohn = 92; // kg
var heightJohn = 1.95; // m
var BMIJohn = massJohn / (heightJohn * heightJohn);


var massMark = 78; // kg
var heightMark = 1.69; // m
var BMIMark = massMark / (heightMark * heightMark);

if (BMIMark > BMIJohn) {
    console.log ('Mark\'s BMI is higher then John\'s')
} else {
    console.log ('John\'s BMI is higher then Marks\'s')
} */
/*************************
*  Boolean logic
*/ 
 /*var firstName = 'John';
 var age = 20;
 if (age < 13) {
     console.log(firstName + ' is a  boy.');
    } else if (age >= 13 && age < 20) { //between 13 and 20 === years >= 13 AND age < 20
     console.log(firstName + ' is a teen.');
    } else if (age >= 20 && age < 30) {
       console.log(firstName + ' is a young man.');
    } else { 
     console.log(firstName + ' is a man');
 } */
 /*************************
*  Thruthy and Flsy values and equality operators
*/ 

// falsy values: undifined, null, 0, '', NaN will be converted to false when valueted in a else condition
//  truthy values; not falsy values
/*var height = 23;
if (height || height === 0) {
    console.log('variable is defined');
} else {
     console.log('variable is not been defined');
}              // if the value is 0 falsy value we cann use the or command to define it
// Equality operators
if (height == '23') {
    console.log('The == operators does type coercion');
} */

/* John and Mike both play basketball in diffrent teams. In the latest 3 games, 
Johns team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1.Calculate the avrege score for each team.
2. Decide wich team wins in average (highest avrege score), and print the winner to the console.
 Also include the avrege score in the output.
3. Then change the scores to show diffrent winners.
Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log 
the avrege winner to the console.Hint: you will need the && operator to take the decision.If u 
cant solve this one, just watch the solution, its no problem ;)
5.Like before, change the scores to generate diffrent winners,keeping in mind there might be draws.

*/
/* // john
 var scoreJohn1 = 129;
 var scoreJohn2 = 120; // should just use scoreJohn = (129+120+103) / 3; to get avrege and log it
 var scoreJohn3 = 103;
 var avregeScoreJohn = ((scoreJohn1 + scoreJohn2 + scoreJohn3) / 3);
   console.log(avregeScoreJohn);
// mark
 var scoreMark1 = 116;
 var scoreMark2 = 94;  // should just use scoreMark = (129+120+103) / 3; to get avrege and log it
 var scoreMark3 = 153;
 var avregeScoreMark = ((scoreMark1 + scoreMark2 + scoreMark3) / 3);
   console.log(avregeScoreMark); // defining each score one by one my way
 var avregeScoreMary = (97 + 134 + 105) / 3;
   console.log(avregeScoreMary) // Shorter simpler version from the teacher
if (avregeScoreJohn > avregeScoreMark && avregeScoreJohn > avregeScoreMary) {
    console.log ('John\'s team avrege score is higher then marks and marys and the score is ' + avregeScoreJohn)
} else if (avregeScoreMark > avregeScoreJohn && avregeScoreMark > avregeScoreMary) {
    console.log('Mark\'s team avrege score is higher then john\'s and Mary\'s and the score is ' + avregeScoreMark) 
    }
 else if (avregeScoreMary > avregeScoreJohn && avregeScoreMary > avregeScoreMark) {
    console.log('Mary\'s team avrege score is higher then john\'s and marks the score is ' + avregeScoreMary) 
    }
 else  {
    console.log('There is a draw')
}*/
/*************************
*  Functions
*/ 
/* function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane)
// This function above calculated the age of people.
function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years. ')
    } else {
        console.log(firstName + ' is already retired')
    }
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/
/*************************
*  Functions statements and expressions
*/ 
// Function Declaration
/*function whatDoYouDo(job, firstname){

}*/

// Function Expression
/* var whatDoYouDo =  function(job, firstName) {
     switch(job) {
         case 'teacher':
              return firstName + ' teaches kids how to code';
         case 'driver':
              return firstName + ' drived a cab in Lisbon.';
         case 'designer':
              return firstName + ' designs beuatiful websites';
         default:
              return firstName + ' does somthing else';
     }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark')); */

/*************************
*  Arrays
*/ 
// initialize new array
/* var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben'
names[names.length] = 'Mary';
console.log(names);

// Diffrent data types
var john = ['John', 'Smith', 1990, 'teacher', false]

john.push('blue') // adding to the end of the array
john.unshift('Mr.3') // adding to the beginig of the array
console.log(john);

john.pop()
john.pop() // removing a element from the end of the array
john.shift(); // removes a element from the beggining of the array
console.log(john);

console.log(john.indexOf(1990)); // shows the position inside the array from 0 to 1235 ect.Mostly used to check if the element is inside the array or not if not it displays -1

var isDesigner = john.indexOf ('designer') === -1 ? 'John is Not a designer' : 'John is a designer';
console.log(isDesigner); */


/*************************
*  Coding challenge 3
*/
 /*John and his family went on a holiday and went to 3 diffrent restaurants. The 
 bills were 124, 48 and 268.

 To tip the waiter a fair amout, John created a simple tip calculator (as a function).He likes to tip 20% of the billl when the bill is less than 50,15% when the bills is between 50 and 200, and 10% if the bill is more then 200.

In the end John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final padi amouts (bill + tip).


 function tipCalculator(bill) {
     var precentage;
     if (bill < 50) {
         precentage = .2;
     } else if (bill >= 50 && bill < 200) {
         precentage = .15;
     } else  {
         precentage = .1;
     } return precentage * bill;
 }  

 var bills = [124, 48, 268];
 var tips = [tipCalculator(bills[0]),
             tipCalculator(bills[1]),
             tipCalculator(bills[2])];


var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues); */
/*************************
*  Objects nad properties
*/
// Object literal
/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
    console.log(john.firstName);
    console.log(john['lastName']);
    var x = 'birthYear';
    console.log(john[x]);

    // modifing
    john.job = 'designer';
    john['isMarried'] = true;
    console.log(john);
    // new object syntax
    var jane = new Object();
    jane.name = 'Jane';
    jane.birthYear = 1992;
    jane['lastName'] = 'Smith';
    console.log(jane);
*/
    /*************************
*  Objects nad methods
*/

/* var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
}; */
 /*john.age = john.calcAge();
console.log(john); */ // u cann use this way to calculate and add the age to john variable or  
/* john.calcAge();
console.log(john); */


/*************************
*  Coding challenge 4
*/ /* Lets remember the first coding challenge where mark and john compared theire bmis.lets now implament the same functionality with objects and methods.
1. For each of them create an object with properties for the full name mass and height!
2.then add a method to each object to caalculate the bmi save the bmi to the object and also return it from the method.
3.in the end log the console who has the highest bmi and together with the full name and the respective bmi,dont forget the might have the same bmi. */

 /*var john = {
     firstName: 'John',
     lastName: 'Smith',
     mass: 92,
     height: 1.7,
     calcBMI: function() {
         this.BMI = this.mass / (this.height * this.height);
         return this.BMI;
     }
 }
 john.calcBMI();

  var mark = {
     firstName: 'Mark',
     lastName: 'Zucker',
     mass: 55,
     height: 1.8,
     calcBMI: function() {
         this.BMI = this.mass / (this.height * this.height);
          return this.BMI;
     }
 }
   mark.calcBMI();
   console.log(john, mark)

   // we could also write If (john.calcBMI() > mark.calcBMI())

 if (john.BMI > mark.BMI) {
      console.log(john.firstName + john.lastName + ' has the highest bmi with the amout: ' + john.BMI) }
     else if (mark.BMI > john.BMI) {
        console.log(mark.firstName + mark.lastName + ' has the highest bmi with the amout: ' + mark.BMI)
     } else {
         console.log('there is a draw')
     }
 */

/*************************
*  Loops
*/

/* for (var i = 0; i < 10; i++) {       // if we put 1 as equal to 1,and then specify that its <= 20 it will go from 1 to 20 and stop and 21
    // we cann do the same with diffrent operators for exp i +=2 wich is the same as i=i+2 and it loops until 20.
    console.log(i) 
}  */

// i = 0, i < 10 true, log i to the consol, i++
// i=1 and 1 < 10 true,log to the console i++
// ...
// i=9 and 9 < 10 true,log to the console i++
// i=9 and 10 < 10 false,loop exits dosent display anymore !
/* this is called the for loop*/
/*var john = ['John', 'Smith', 1990, 'teacher', false];

console.log(john[0]);
console.log(john[1]);
console.log(john[2]);   // we could do it this way but we cann make ti simpler in exp down
console.log(john[3]);
console.log(john[4]);

for (var i = 0; i < john.length; i++) {
    console.log(john[i]) // First we specify where the loop starts with i = 0,then we specify is smaller then the lenght of the array so it is dynamic then we add the counting +1
} 
// while loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;                      // first u need to define where the var is starting by i = 0; then we use while and show and i is smaller then the lenght of the array console it and add the counter.We mostly use the for loop.
}*/
// continue and break statments
// we use break statments to break out of the loop, and we use the continue to quit the current iteration of the loop and go to another

 /* var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];
for (var i = 0;  i < john.length; i++) {
    if (typeof john[i] !== 'string') continue; 
    console.log(john[i]); 
} */
 /* // it will continue will removing eve diff from string
 for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break; 
    console.log(john[i]); 
} // as soon the next one is a number or undifined or statment it will stop.
*/
// small challenge  looping backwards 
/*var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = john.length - 1;  i >= 0; i--) {
    console.log(john[i]); // first we counted the arrays till 6 so we made i = length - 1; after that we made the end point of the loop i>= 0; so it ends on john and we specified it should go i-- till it hits -1 and stops at John.
} */

/*********************************
 * CODING CHALLENGE 5 
 */

 /* Rember the top calculator challenge? Lets create a more advanced version using everything we learned!

 This time, John and his family went to 5 diffrent restaurants.The bills were 124 48 268 180
 and 42.
 John likes to top 20% of the bill when the bill is less than 50. 15% when the bills is betwen 50 and 200, and 10% if the bills more then 200.

 Implement a tip calculator using objects and loops:

 1. Create an object with an array for the bill values.
 2. add a method to calculate the tip.
 3. the method should include a lopp to iterate over all the paid bills and do the tip calculations.
 4, as a output create 1) a new array contaning all tips,and 2) and array contaning finail paid ammouts (bill + tip). HINT: starts with two empty arrays [] as properties then fill them up in the loop. */ 
  var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function (){
        this.tips = [];
        this.finalValues = [];

        for (i = 0; i < this.bills.length; i++)
        {
           // Determine the precentage based on the tipping rules
           var precentege;
           var bill = this.bills[i];

            if (bill < 50) {
                precentege = .2;
            } else if (bill >= 50 && bill < 200) {
                precentege = .15;
            } else {
                precentege = .1;
            }
          // add the results to the correspoding arreys
           this.tips[i] = bill * precentege;
           this.finalValues[i] = bill + bill * precentege;
        }  
      }
    }

 john.calcTip();
 console.log(john);


/*
 EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 diffrent restaurants. The bills were 77, 110, 375 and 45.marks likes to tip 20% of the bill when the bills is less than 100, 10% when the bills between 100 and 300, nad 25 if the bills is more then 300(diffrent then john)

 5. Implement the same functionality as before, this time using Marks tiping rules
 6. create a function (not a method) to calculate the avrege of the given array of tips. HINT:
 Loop over the array, and in reach iteration store the current sum into a variable (starting from 0).After you have the sum of the array, divide it by the number of elements in it (thats how to calculate the avrege)
 7. Calculate the avrege tip for reach famioly .
 8. Log the console wich family paid the highest tips on avrege. */


var mark = {
    fullName: 'Mark Zucker',
    bills: [77, 375, 110, 45],
    calcTip: function (){
        this.tips = [];
        this.finalValues = [];

        for (i = 0; i < this.bills.length; i++)
        {
           // Determine the precentage based on the tipping rules
           var precentege;
           var bill = this.bills[i];

            if (bill < 100) {
                precentege = .2;
            } else if (bill >= 100 && bill < 300) {
                precentege = .10;
            } else {
                precentege = .25;
            }
          // add the results to the correspoding arreys
           this.tips[i] = bill * precentege;
           this.finalValues[i] = bill + bill * precentege;
        }  
      }
    }
 function calcAverage(tips) {
     var sum = 0;
     for (var i = 0;i < tips.length; i++ ) {
         sum = sum + tips[i];
     } return sum / tips.length;
 }
 // [2, 6, 4] -> 0 / 2 / 8 / 12
 john.calcTip();
 mark.calcTip();

 // calculate avrege tips
  john.average = calcAverage(john.tips)
  mark.average = calcAverage(mark.tips)
  console.log(john, mark);

    if (john.average > mark.average) {
        console.log(john.fullName + ' pays more tips then mark with the average of: ' + john.average); }
        else if (mark.average > john.average){
           console.log( mark.fullName + ' pays more tips then mark with the avre of: ' + mark.average);
        } 