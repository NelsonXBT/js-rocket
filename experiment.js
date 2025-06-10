
<script type="text/javascript">
    console.log('Hello there friends!')
</script>


// Variable Experiment

var favColor = 'green';
var myFavColors = [
    'blue', 'red', 'green'
];
var numOfFavColors = 3;
var hasGotFavColors = true;

nelsonObject = {
    firstName: 'Nelson',
    lastname: 'XBT',
    favColors: ['blue', 'red', 'green'],
    yearsAlive: 103,
    ismale: true
};


// Function Experiments 

var fullName = function (firstName, secondName) {
    return firstName + '' + secondName;
}

var area = function (width, height) {
    return width * height; 
}


var whatIsMyfavColor = function () {
    return 'blue'
}


var doSomething = function () {
    console.log ("do something!!!")
}





// if Statement

var name1 = 'Nelson';
var name2 = 'Dalu';

if (name1 == 'Nelson') {
    alert ('true 1 !!!');
} else if (name2 == 'Nelson') {
    alert ('true 2 !!!');
}
else {
    alert ('false!!!');
}