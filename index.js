//The entire game works by showing and hiding elements by ID
//define counters
var jackCounter = 0;
var ralphCounter = 0;
var simonCounter = 0;
var piggyCounter = 0;
//chapter one booleans for chapter two intro
var chapterTwoReturn = false;
var chapterTwoAwait = false;
//function to hide all elements on the screen
function hideAll(){
    document.getElementById('start-window').style.display = 'none';
    document.getElementById('choice-1').style.display = 'none';
    document.getElementById('choice-1-1').style.display = 'none';
    document.getElementById('choice-1-2').style.display = 'none';
    document.getElementById('choice-2').style.display = 'none';
    document.getElementById('choice-2-1').style.display = 'none';
    document.getElementById('choice-2-2').style.display = 'none';
    document.getElementById('choice-2-3').style.display = 'none';
    document.getElementById('choice-3').style.display = 'none';
    document.getElementById('choice-3-1').style.display = 'none';
    document.getElementById('choice-3-2').style.display = 'none';
    document.getElementById('choice-4').style.display = 'none';
    document.getElementById('choice-4-1').style.display = 'none';
    document.getElementById('choice-4-2').style.display = 'none';
}
//functions
function valueCheck(){
    //checks for the highest counter and returns a string indicating the histest value
    var largest = Math.max(jackCounter, ralphCounter, simonCounter, piggyCounter);
    if (largest == jackCounter){
        return 'Jack';
    } else if (largest == ralphCounter){
        return 'Ralph';
    } else if (largest == simonCounter){
        return 'Simon'
    } else if (largest == piggyCounter){
        return 'Piggy'
    }
}
//chapter functions (starting at chapter 2)
function chapterTwo(){
    //show choice two
    document.getElementById('choice-2').style.display = 'block';
    //hide conditional elements
    document.getElementById('chapter-2-return').style.display = 'none';
    document.getElementById('chapter-2-await').style.display = 'none';
    //show intro paragraph based on previous choice
    if (chapterTwoReturn){
        document.getElementById('chapter-2-return').style.display = 'block';
    } else if (chapterTwoAwait){
        document.getElementById('chapter-2-await').style.display = 'block';
    }
}
function chapterThree(){
    document.getElementById('choice-3').style.display = 'block';
}
function chapterFour(){
    document.getElementById('choice-4').style.display = 'block';
    document.getElementById('piggy-slap').style.display = 'none';
}
function chapterFice(){
    console.log('nothing here yet');
}
//main program
//start by hiding all elements
hideAll();
//show the start screen
document.getElementById('start-window').style.display = 'block';
//start onclick function
function start(){
    //hide the start screen
    document.getElementById('start-window').style.display = 'none';
    //show the first choice for the first chapter
    document.getElementById('choice-1').style.display = 'block';
}
//----Chapter 1----
//cleanup function
function chapterOneClean(){
    //hide elements
    hideAll();
    //run the next chapter
    chapterTwo();
}
//onclick function for 1-1
function oneOne(){
    //show options for 1-1
    document.getElementById('choice-1-1').style.display = "block";
    chapterTwoAwait = true;
}
//onclick function for 1-2
function oneTwo(){
    document.getElementById('choice-1-2').style.display = "block";
    chapterTwoReturn = true;
}
//onclick functions for chapter one sub-options
function pickUpShell(){
    ralphCounter = ralphCounter + 1;
    chapterOneClean();
}
function dontPickUpShell(){
    chapterOneClean();
}
function killThePig(){
    console.log('nothing here yet'); //TODO: implement ending screen here
    chapterOneClean();
}
function dontKillThePig(){
    jackCounter = jackCounter + 1;
    chapterOneClean();
}
function lookForOthers(){
    piggyCounter = piggyCounter + 1;
    chapterTwoAwait = true;
    chapterOneClean();
}
function walkAimlessly(){
    simonCounter = simonCounter +1;
    chapterTwoAwait = true;
    chapterOneClean();
}
//----end of chapter----
//----Chapter 2----
//Chapter 2 onclick functions
function chapterTwoContinue(){
    //show choice 2-1
    document.getElementById('choice-2-1').style.display = 'block';
}
function choiceTwoOne(join){
    //a parameter of true is passed onclick if the join choice is chosen
    //if join add points to jack, then show choice 2-2 regardless of choice
    if (join){jackCounter = jackCounter + 1;}
    document.getElementById('choice-2-2').style.display = 'block';
}
function choiceTwoTwo(fire){
    //if fire is true, add points for ralph, otherwise add points for piggy
    //then show the next choice
    if (fire){
        ralphCounter = ralphCounter + 1;
    } else {
        piggyCounter = piggyCounter + 1;
    }
    document.getElementById('choice-2-3').style.display = 'block';
}
function choiceTwoThree(speak){
    //if speak is true, add points for piggy, then clean up and run chapter three
    if (speak){piggyCounter = piggyCounter + 1;}
    hideAll();
    chapterThree();
}
//----end of chapter----
//----Chapter 3----
function chapterThreeOne(){
    document.getElementById('choice-3-1').style.display = 'block';
}
function chapterThreeTwo(){
    document.getElementById('choice-3-2').style.display = 'block';
}
function chapterThreeCounter(hunting, huts, explore){
    //add points if true is passed for any of the paranmeters
    //cleanup and run the next chapter
    if (hunting){
        jackCounter = jackCounter + 1;
    } else if (huts) {
        ralphCounter = ralphCounter + 1;
    } else if (explore){
        simonCounter = simonCounter + 1;
    }
    hideAll();
    chapterFour();
}
//----end of chapter----
//----Chapter 4----
function chapterFourCleanup(){
    //hide elements and run chapter five
    hideAll();
    chapterFive();
}
//chapter 4 onclick functions
function chapterFourOne(){
    document.getElementById('choice-4-1').style.display = 'block';
}
function chapterFourTwo(){
    document.getElementById('choice-4-2').style.display = 'block';
    //add points for ralph and piggy
    //run valueCheck
    //piggy alt scinerio
    //cleanup will be ran when the user clicks continue
    ralphCounter = ralphCounter + 1;
    piggyCounter = piggyCounter + 1;
    var largestValue = valueCheck();
    if (largestValue == 'piggy'){document.getElementById('piggy-slap').style.display = 'blcok';}
}
function chpaterFourHunt(){
    //add point to jack counter
    //run chapter clearnup
    jackCounter = jackCounter +1;
    chapterFourCleanup();
}
//----end of chapter----