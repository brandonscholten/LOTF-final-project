//The entire game works by showing and hiding elements by ID
//define counters
var jackCounter = 0;
var ralphCounter = 0;
var simonCounter = 0;
var piggyCounter = 0;
//chapter one booleans for chapter two intro
var chapterTwoReturn = false;
var chapterTwoAwait = false;
//booleans to determine who calls the meeting in chapter five
//these are set in chapters three and four
var chapterThreeWork = false;
var chapterFourBeach = false;
//variables for chapter six
var chapterSixStayBehind = false;
//booleans for the first loop in chpater ten
//variables are set in chapter ten
var chapterTenPunish = false;
var chapterTenAssign = false;
var chapterTenHunt = false;
var chapterTenExplain = false;
//variables specifically for the rock paper scissors game 
var rock = false;
var paper = false;
var scissors = false;
//variables for chapter 12
var chapterTwelveSpear = false;
//function to hide all elements on the screen
//this is fuckiing stupid please ignore the next hundred or so lines of this shit
//if I get bored this summer I'll re-engineer something cleaner
function hideAll(){
    document.getElementById('start-window').style.display = 'none';
    document.getElementById('end-window').style.display = 'none';
    document.getElementById('killPigEnding').style.display = 'none';
    document.getElementById('tsunamiEnding').style.display = 'none';
    document.getElementById('chapterSevenRevisionOne').style.display = 'none';
    document.getElementById('chapterSevenRevisionTwo').style.display = 'none';
    document.getElementById('chapterSevenRevisionThree').style.display = 'none';
    document.getElementById('chapterSevenRevisionFour').style.display = 'none';
    document.getElementById('chapterSevenRevisionFive').style.display = 'none';
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
    document.getElementById('choice-5').style.display = 'none';
    document.getElementById('choice-5-1').style.display = 'none';
    document.getElementById('choice-5-2').style.display = 'none';
    document.getElementById('choice-6').style.display = 'none';
    document.getElementById('choice-6-1').style.display = 'none';
    document.getElementById('choice-6-2').style.display = 'none';
    document.getElementById('choice-7').style.display = 'none';
    document.getElementById('choice-7-1').style.display = 'none';
    document.getElementById('choice-7-2').style.display = 'none';
    document.getElementById('choice-7-3').style.display = 'none';
    document.getElementById('choice-7-4').style.display = 'none';
    document.getElementById('choice-7-5').style.display = 'none';
    document.getElementById('choice-7-6').style.display = 'none';
    document.getElementById('choice-8').style.display = 'none';
    document.getElementById('choice-8-1').style.display = 'none';
    document.getElementById('choice-8-2').style.display = 'none';
    document.getElementById('choice-8-3').style.display = 'none';
    document.getElementById('choice-8-4').style.display = 'none';
    document.getElementById('choice-8-5').style.display = 'none';
    document.getElementById('choice-8-6').style.display = 'none';
    document.getElementById('choice-8-7').style.display = 'none';
    document.getElementById('choice-8-8').style.display = 'none';
    document.getElementById('choice-8-9').style.display = 'none';
    document.getElementById('choice-9').style.display = 'none';
    document.getElementById('choice-9-1').style.display = 'none';
    document.getElementById('choice-9-2').style.display = 'none';
    document.getElementById('choice-9-3').style.display = 'none';
    document.getElementById('choice-9-4').style.display = 'none';
    document.getElementById('choice-9-5').style.display = 'none';
    document.getElementById('choice-9-6').style.display = 'none';
    document.getElementById('choice-9-7').style.display = 'none';
    document.getElementById('choice-9-8').style.display = 'none';
    document.getElementById('choice-9-9').style.display = 'none';
    document.getElementById('choice-9-10').style.display = 'none';
    document.getElementById('choice-10').style.display = 'none';
    document.getElementById('choice-10-1').style.display = 'none';
    document.getElementById('choice-10-2').style.display = 'none';
    document.getElementById('choice-10-3').style.display = 'none';
    document.getElementById('choice-10-4').style.display = 'none';
    document.getElementById('choice-10-5').style.display = 'none';
    document.getElementById('choice-10-6').style.display = 'none';
    document.getElementById('choice-10-7').style.display = 'none';
    document.getElementById('choice-10-8').style.display = 'none';
    document.getElementById('choice-10-9').style.display = 'none';
    document.getElementById('choice-10-10').style.display = 'none';
    document.getElementById('choice-10-11').style.display = 'none';
    document.getElementById('choice-10-12').style.display = 'none';
    document.getElementById('choice-10-13').style.display = 'none';
    document.getElementById('choice-10-14').style.display = 'none';
    document.getElementById('choice-10-15').style.display = 'none';
    document.getElementById('choice-10-16').style.display = 'none';
    document.getElementById('choice-10-17').style.display = 'none';
    document.getElementById('choice-10-18').style.display = 'none';
    document.getElementById('choice-11').style.display = 'none';
    document.getElementById('choice-11-1').style.display = 'none';
    document.getElementById('choice-11-2').style.display = 'none';
    document.getElementById('choice-11-3').style.display = 'none';
    document.getElementById('choice-11-4').style.display = 'none';
    document.getElementById('choice-11-5').style.display = 'none';
    document.getElementById('choice-11-6').style.display = 'none';
    document.getElementById('choice-11-7').style.display = 'none';
    document.getElementById('choice-11-8').style.display = 'none';
    document.getElementById('choice-11-9').style.display = 'none';
    document.getElementById('choice-11-10').style.display = 'none';
    document.getElementById('choice-11-11').style.display = 'none';
    document.getElementById('choice-11-12').style.display = 'none';
    document.getElementById('choice-11-13').style.display = 'none';
    document.getElementById('choice-11-14').style.display = 'none';
    document.getElementById('choice-11-15').style.display = 'none';
    document.getElementById('choice-11-16').style.display = 'none';
    document.getElementById('choice-11-17').style.display = 'none';
    document.getElementById('choice-11-18').style.display = 'none';
    document.getElementById('choice-11-19').style.display = 'none';
    document.getElementById('choice-11-20').style.display = 'none';
    document.getElementById('choice-11-21').style.display = 'none';
    document.getElementById('choice-12').style.display = 'none';
    document.getElementById('choice-12-1').style.display = 'none';
    document.getElementById('choice-12-2').style.display = 'none';
    document.getElementById('choice-12-3').style.display = 'none';
    document.getElementById('choice-12-4').style.display = 'none';
    document.getElementById('choice-12-5').style.display = 'none';
    document.getElementById('choice-12-6').style.display = 'none';
    document.getElementById('choice-12-7').style.display = 'none';
    document.getElementById('choice-12-8').style.display = 'none';
    document.getElementById('choice-12-9').style.display = 'none';
    document.getElementById('choice-12-10').style.display = 'none';
    document.getElementById('choice-12-11').style.display = 'none';
    document.getElementById('choice-12-12').style.display = 'none';
    document.getElementById('choice-12-13').style.display = 'none';
    document.getElementById('choice-12-14').style.display = 'none';
    document.getElementById('choice-12-15').style.display = 'none';
    document.getElementById('choice-12-16').style.display = 'none';
    document.getElementById('choice-12-17').style.display = 'none';
    document.getElementById('choice-12-18').style.display = 'none';
    document.getElementById('choice-12-19').style.display = 'none';
    document.getElementById('choice-12-20').style.display = 'none';
    document.getElementById('choice-12-21').style.display = 'none';
    document.getElementById('choice-12-22').style.display = 'none';
    document.getElementById('choice-12-23').style.display = 'none';
    document.getElementById('choice-12-24').style.display = 'none';
    document.getElementById('choice-12-25').style.display = 'none';
    document.getElementById('choice-12-26').style.display = 'none';
    document.getElementById('choice-12-27').style.display = 'none';
    document.getElementById('choice-12-28').style.display = 'none';
    document.getElementById('choice-12-29').style.display = 'none';
    document.getElementById('choice-12-30').style.display = 'none';
    document.getElementById('choice-12-31').style.display = 'none';
    document.getElementById('choice-12-32').style.display = 'none';
    document.getElementById('choice-12-33').style.display = 'none';
    document.getElementById('choice-12-34').style.display = 'none';
    document.getElementById('choice-12-35').style.display = 'none';
    document.getElementById('choice-12-36').style.display = 'none';
    document.getElementById('choice-12-37').style.display = 'none';
    document.getElementById('choice-12-38').style.display = 'none';
    document.getElementById('choice-12-39').style.display = 'none';
    document.getElementById('choice-12-40').style.display = 'none';
    document.getElementById('choice-12-41').style.display = 'none';
    document.getElementById('choice-12-42').style.display = 'none';
    document.getElementById('choice-12-43').style.display = 'none';
    document.getElementById('choice-12-44').style.display = 'none';
    document.getElementById('choice-12-45').style.display = 'none';
    document.getElementById('choice-12-46').style.display = 'none';
    document.getElementById('choice-12-47').style.display = 'none';
    document.getElementById('choice-12-48').style.display = 'none';
    document.getElementById('choice-12-49').style.display = 'none';
    document.getElementById('choice-12-50').style.display = 'none';
    document.getElementById('choice-12-51').style.display = 'none';
    document.getElementById('choice-12-52').style.display = 'none';
    document.getElementById('choice-12-52').style.display = 'none';
    document.getElementById('choice-12-53').style.display = 'none';
    document.getElementById('choice-12-54').style.display = 'none';
    document.getElementById('choice-12-55').style.display = 'none';
    document.getElementById('choice-12-56').style.display = 'none';
    document.getElementById('choice-12-57').style.display = 'none';
    document.getElementById('choice-12-58').style.display = 'none';
    document.getElementById('choice-12-59').style.display = 'none';
    document.getElementById('choice-12-60').style.display = 'none';
    document.getElementById('choice-12-61').style.display = 'none';
    document.getElementById('choice-12-62').style.display = 'none';
    document.getElementById('choice-12-63').style.display = 'none';
    document.getElementById('choice-12-64').style.display = 'none';
    document.getElementById('choice-12-65').style.display = 'none';
    document.getElementById('choice-12-66').style.display = 'none';
    document.getElementById('choice-12-67').style.display = 'none';
    document.getElementById('choice-12-68').style.display = 'none';
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
        return 'Simon';
    } else if (largest == piggyCounter){
        return 'Piggy';
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
function chapterFive(){
    //show choice column
    document.getElementById('choice-5').style.display = 'block';
    //hide intro paragraphs
    document.getElementById('call').style.display = 'none';
    document.getElementById('noCall').style.display = 'none';
    //show correct paragraph
    if (chapterThreeWork && chapterFourBeach){
        document.getElementById('call').style.display = 'block';
    } else {
        document.getElementById('noCall').style.display = 'block';
    }
}
function chapterSix(){
    document.getElementById('choice-6').style.display = 'block';
}
function chapterSeven(){
    if (chapterSixStayBehind){
        document.getElementById('chapterSevenRevisionOne').style.display = 'block';
    } else {
        document.getElementById('choice-7').style.display = 'block';
    }
}
function chapterEight(){
    document.getElementById('choice-8').style.display = 'block';
}
function chpaterNine(majority){
    if (majority == 'Jack'){
        document.getElementById('choice-9').style.display = 'block';
    } else if (majority == 'Simon'){
        document.getElementById('choice-9-7').style.display = 'block';
    } else {
        document.getElementById('choice-9-3').style.display = 'block';
    }
}
function chapterTen(){
    //hide all extra paragraphs
    document.getElementById('punishment').style.display = 'none';
    document.getElementById('chapterTenPiggyDenial').style.display = 'none';
    document.getElementById('chapterTenRalphRemorse').style.display = 'none';
    document.getElementById('chapterTenPiggyJumped').style.display = 'none';
    document.getElementById('chapterTenRalphJumped').style.display = 'none';
    //show elements based on highest point value
    if (valueCheck() == 'Jack'){
        document.getElementById('choice-10').style.display = 'block';
    } else {
        document.getElementById('choice-10-13').style.display = 'block';
    }
}
function chapterEleven(){
    //show elements based on highest point value
    if (valueCheck() == 'Jack'){
        document.getElementById('choice-11').style.display = 'block';
    } else {
        document.getElementById('choice-11-7').style.display = 'block';
    }
}
function chapterTwelve(){
    //show elements based on highest point value
    if (valueCheck() == 'Jack'){
        document.getElementById('choice-12').style.display = 'block';
    } else if (valueCheck() == 'Ralph'){
        document.getElementById('choice-12-34').style.display = 'block';
    }
}
function gameEnd(){
    //hide all elements
    hideAll();
    //insert the result into the end screen
    document.getElementById('insertFinalResultHere').innerHTML = valueCheck();
    //display the end scren
    document.getElementById('end-window').style.display = 'block';
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
    document.getElementById('killPigEnding').style.display = 'block';
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
        chapterThreeWork = true;
    } else if (huts) {
        ralphCounter = ralphCounter + 1;
        chapterThreeWork = true;
    } else if (explore){
        simonCounter = simonCounter + 1;
        chapterThreeWork = true;
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
    if (largestValue == 'piggy'){document.getElementById('piggy-slap').style.display = 'block';}
    chapterFourBeach = true;
}
function chapterFourHunt(){
    //add point to jack counter
    //run chapter clearnup
    jackCounter = jackCounter +1;
    chapterFourCleanup();
}
//----end of chapter----
//----Chapter 5----
//onclick functions
function chapterFiveOne(){
    document.getElementById('choice-5-1').style.display = 'block';
}
function chapterFiveTwo(fire){
    if (fire){
        ralphCounter = ralphCounter + 1;
    } else {
        jackCounter = jackCounter + 1;
    }
    document.getElementById('choice-5-2').style.display = 'block';
}
function chapterFiveEnd(follow){
    if (follow){
        jackCounter = jackCounter + 1;
    } else {
        ralphCounter = ralphCounter + 1;
        simonCounter = simonCounter + 1;
        piggyCounter = piggyCounter + 1;
    }
    hideAll();
    chapterSix();
}
//----end of chapter----
//----Chapter 6----
function chapterSixCleanUp(){
    hideAll();
    chapterSeven();
}
//onclick functions
function chapterSixOne(join, stay){
    if (join){
        ralphCounter = ralphCounter + 1;
        jackCounter = jackCounter + 1;
        simonCounter = simonCounter + 1;
        document.getElementById('choice-6-1').style.display = 'block';
    } else if (stay){
        piggyCounter = piggyCounter + 1;
        document.getElementById('chapterSixRevisionOne').style.display = 'block';
        chapterSixStayBehind = true;
    } else {
        simonCounter = simonCounter + 1;
        document.getElementById('tsunamiEnding').style.display = 'block';
    }
}
function chapterSixTwo(go){
    if (go){
        ralphCounter = ralphCounter + 1;
        jackCounter = jackCounter + 1;
        document.getElementById('choice-6-2').style.display = 'block';
    } else {
        simonCounter = simonCounter + 1;
        chapterSixCleanUp();
    }
}
function chapterSixFort(){
    jackCounter = jackCounter + 1;
    chapterSixCleanUp();
}
function chapterSixRegroup(){
    ralphCounter = ralphCounter + 1;
    chapterSixCleanUp();
}
//----end of chapter----
//----Chapter 7----
//onclick functions
function chapterSevenOne(){
    document.getElementById('choice-7-1').style.display = 'block';
}
function chapterSevenNotify(){
    jackCounter = jackCounter + 1;
    document.getElementById('choice-7-2').style.display = 'block';
}
function chapterSevenThree(){
    document.getElementById('choice-7-3').style.display = 'block';
}
function chapterSevenFour(go){
    if (go){
        simonCounter = simonCounter + 1;
        document.getElementById('chapterSevenRevisionSix').style.display = 'block';
    } else {
        document.getElementById('choice-7-4').style.display = 'block';
    }
}
function chapterSevenFive(go, wait){
    if (go){
        jackCounter = jackCounter + 1;
    } else if (wait){
        ralphCounter = ralphCounter + 1;
    }
    document.getElementById('choice-7-5').style.display = 'block';
}
function chapterSevenSix(go, send){
    if (go){
        jackCounter = jackCounter + 1;
    } else if (send){
        ralphCounter = ralphCounter + 1;
    }
    document.getElementById('choice-7-6').style.display = 'block';
}
function chapterSevenEnd(){
    hideAll();
    chapterEight();
}
//revision onclick functions
function chapterSevenRevisionOne(){
    document.getElementById('chapterSevenRevisionOne').style.display = 'block';
}
function chapterSevenRevisionTwo(){
    document.getElementById('chapterSevenRevisionTwo').style.display = 'block';
}
function chapterSevenRevisionThree(){
    document.getElementById('chapterSevenRevisionThree').style.display = 'block';
}
function chapterSevenRevisionFour(){
    document.getElementById('chapterSevenRevisionFour').style.display = 'block';
}
function chapterSevenRevisionFive(){
    document.getElementById('chapterSevenRevisionFive').style.display = 'block';
}
function chapterSevenRevisionSeven(){
    document.getElementById('chapterSevenRevisionSeven').style.display = 'block';
}
//----end of chapter----
//----Chapter 8----
//get character
//onclick functions
function chapterEightOne(){
    if (valueCheck() == 'Jack'){
        document.getElementById('choice-8-1').style.display = 'block';
    } else {
        document.getElementById('choice-8-5').style.display = 'block';
    }
}
function chapterEightTwo(){
    document.getElementById('choice-8-2').style.display = 'block';
}
function chapterEightThree(){
    document.getElementById('choice-8-3').style.display = 'block';
}
function chapterEightFour(){
    document.getElementById('choice-8-4').style.display = 'block';
}
function chapterEightSix(){
    document.getElementById('choice-8-6').style.display = 'block';
}
function chapterEightSeven(){
    if (valueCheck() == 'Ralph'){
        document.getElementById('choice-8-7').style.display = 'block';
    } else if (valueCheck() == 'Piggy'){
        document.getElementById('choice-8-8').style.display = 'block';
    } else {
        console.log('nothing written for Simon yet');
    }
}
function chapterEightNine(){
    if (valueCheck() == 'Simon'){
        document.getElementById('choice-8-10').style.display = 'block';
    } else {
        document.getElementById('choice-8-9').style.display = 'block';
    }
}
function chapterEightEnd(){
    hideAll();
    chpaterNine(valueCheck());
}
//----end of chapter----
//----Chapter 9----
//onclick functions
function chapterNineEnd(){ //TOBO: build simon ending
    hideAll();
    chapterTen(); 
}
function chapterNineOne(){
    document.getElementById('choice-9-1').style.display = 'block';
}
function chapterNineTwo(){
    document.getElementById('choice-9-2').style.display = 'block';
}
function chapterNineEight(){
    document.getElementById('choice-9-8').style.display = 'block';
}
function chapterNineNine(){
    document.getElementById('choice-9-9').style.display = 'block';
}
function chapterNineTen(){
    document.getElementById('choice-9-10').style.display = 'block';
}
function chapterNineFour(){
    document.getElementById('choice-9-4').style.display = 'block';
}
function chapterNineFive(){
    document.getElementById('choice-9-5').style.display = 'block';
}
function chapterNineSix(){
    document.getElementById('choice-9-6').style.display = 'block';
}
//----end of chapter----
//----Chapter 10----
function chapterTenFirstLoop(){
    //hide all options
    document.getElementById('firstLoopPunish').style.display = 'none';
    document.getElementById('firstLoopAssign').style.display = 'none';
    document.getElementById('firstLoopHunt').style.display = 'none';
    //only show options that are false
    //if all elements are true show 10-5, otherwise do nothing
    if (chapterTenPunish == false){
        document.getElementById('firstLoopPunish').style.display = 'block';
    } else if (chapterTenAssign == false){
        document.getElementById('firstLoopAssign').style.display = 'block';
    } else if (chapterTenHunt == false){
        document.getElementById('firstLoopHunt').style.display = 'block';
    } else if ((chapterTenPunish)&&(chapterTenAssign)&&(chapterTenHunt)){
        document.getElementById('choice-10-5').style.display = 'block';
    }
}
function chapterTenEnd(){
    hideAll();
    chapterEleven();
}
//onclick functions
function chapterTenOne(){
    document.getElementById('choice-10-1').style.display = 'block';
}
function chapterTenTwo(punish, assign, hunt){
    //make sure punishment paragraph in 10-2 is hidden (to be shown onsubmit)
    document.getElementById('punishment').style.display = 'none';
    //make sure 10-2, 10-3, and 10-4 are hidden
    document.getElementById('choice-10-2').style.display = 'none';
    document.getElementById('choice-10-3').style.display = 'none';
    document.getElementById('choice-10-4').style.display = 'none';
    //show choice-10-1 (no harm done on first run when its already visible)
    document.getElementById('choice-10-1').style.display = 'block';
    //run chpaterTenFirstLoop function to elminate used options or move to next question
    chapterTenFirstLoop(); 
    //if a parameter is set to true, flip its corresponding boolean to true, hide choice-10-1, and then show its corresponding scinerio
    if (punish){
        chapterTenPunish = true;
        document.getElementById('choice-10-1').style.display = 'none';
        document.getElementById('choice-10-2').style.display = 'block';
    } else if (assign){
        chapterTenAssign = true;
        document.getElementById('choice-10-1').style.display = 'none';
        document.getElementById('choice-10-3').style.display = 'block';
    } else if (hunt){
        chapterTenHunt = true;
        document.getElementById('choice-10-1').style.display = 'none';
        document.getElementById('choice-10-4').style.display = 'block';
    }
    //this function should be run again after each subsequent option is displayed (so the continue buttons you're welcome future brandon)
}
function chapterTenSix(){
    document.getElementById('choice-10-6').style.display = 'block';
}
function chapterTenSeven(deny){
    if (deny){
        document.getElementById('choice-10-7').style.display = 'block';
        chapterTenExplain = true;
    } else {
        document.getElementById('choice-10-8').style.display = 'block';
    }
}
function chapterTenNine(){
    document.getElementById('choice-10-9').style.display = 'block';
}
function chapterTenTen(){
    if (chapterTenExplain){
        document.getElementById('choice-10-10').style.display = 'block';
    } else {
        document.getElementById('choice-10-11').style.display = 'block';
    }
}
function chapterTenEleven(){
    document.getElementById('choice-10-11').style.display = 'block';
}
function chapterTenTwelve(){
    document.getElementById('choice-10-12').style.display = 'block';
    //chapterTenEnd(); this is ran onclick of continue for 10-12
}
function chapterTenThirteen(){
    //hide paragraphs
    document.getElementById('chapterTenPiggyDenial').style.display = 'none';
    document.getElementById('chapterTenRalphRemorse').style.display = 'none';
    //the usual shit
    document.getElementById('choice-10-13').style.display = 'block';
    if (valueCheck() == 'Piggy'){
        document.getElementById('chapterTenPiggyDenial').style.display = 'block';
    } else if (valueCheck == 'Ralph'){  
        document.getElementById('chapterTenRalphRemorse').style.display = 'block';
    }
}
function chapterTenFourteen(){
    document.getElementById('choice-10-14').style.display = 'block';
}
function chapterTenFifteen(){
    document.getElementById('choice-10-15').style.display = 'block';
}
function rockPaperScissorsMain(rock, paper, scissors){
    //main calculation and result for rock paper scissors game
    var computerSelection = '';
    var humanSelection = '';
    //generate computer selection
    var random = Math.floor(Math.random() * (3 - 1)) + 1;
    if (random == 1){
        computerSelection = 'rock';
    } else if (random == 2){
        computerSelection = 'paper';
    } else if (random == 3){
        computerSelection = 'schissors';
    }
    //translate human selection to string
    if (rock){
        humanSelection = 'rock';
    } else if (paper){
        humanSelection = 'paper';
    } else if (scissors){
        humanSelection = 'scissors';
    }
    //compare selections and inject output
    if (humanSelection == computerSelection){
        document.getElementById('rockPaperScissorsResults').innerHTML = 'you both picked '+computerSelection;
    } else {
        if ((computerSelection == 'rock')&&(humanSelection == 'paper')){
            document.getElementById('rockPaperScissorsResults').innerHTML = 'Your opponent picks rock. You win!';
        } else if ((computerSelection == 'rock')&&(humanSelection == 'scissors')){
            document.getElementById('rockPaperScissorsResults').innerHTML = 'Your opponent picks rock. You lose >:(';
        } else if ((computerSelection == 'paper')&&(humanSelection == 'rock')){
            document.getElementById('rockPaperScissorsResults').innerHTML = 'Your opponent picks paper. You lose >:(';
        } else if ((computerSelection == 'paper')&&(humanSelection == 'scissors')){
            document.getElementById('rockPaperScissorsResults').innerHTML = 'Your opponent picks paper. You win!';
        } else if ((computerSelection == 'scissors')&&(humanSelection == 'rock')){
            document.getElementById('rockPaperScissorsResults').innerHTML = 'Your opponent picks scissors. You win!';
        } else if ((computerSelection == 'scissors')&&(humanSelection == 'paper')){
            document.getElementById('rockPaperScissorsResults').innerHTML = 'Your opponent picks scissors. You lose >:(';
        }
    }
}
function rockPaperScissorsCleanup(){
    //clear the result
    document.getElementById('rockPaperScissorsResults').innerHTML = '';
}
function chapterTenSixteen(){
    document.getElementById('choice-10-16').style.display = 'block';
}
function chapterTenSeventeen(){
    document.getElementById('choice-10-17').style.display = 'block';
}
function chapterTenEighteen(){
    document.getElementById('choice-10-18').style.display = 'block';
    //hide paragraphs
    document.getElementById('chapterTenPiggyJumped').style.display = 'none';
    document.getElementById('chapterTenRalphJumped').style.display = 'none';
    //show appropriate paragraph
    if (valueCheck() == 'Piggy'){
        document.getElementById('chapterTenPiggyJumped').style.display = 'block';
    } else {
        document.getElementById('chapterTenRalphJumped').style.display = 'block';
    }
    chapterTenEnd();
}
//onsubmit functions
function nameCave(){
    //get the value of caveName and insert it into all elements with the ID of insertCaveNameHere
    document.getElementById('insertCaveNameHere').innerHTML = document.getElementById('caveName').value;
}
function beatChild(){
    //get the value of victimInput and insert it into all elements with the ID of insertVictimHere
    document.getElementById('insertVictimHere').innerHTML = document.getElementById('victimInput').value;
    //show punishment paragraph
    document.getElementById('punishment').style.display = 'block';
}
function assignGuards(){
    console.log('This literally does nothing lmao');
}
//----end of chapter----
//----Chapter 11----
function chapterElevenEnd(){
    hideAll();
    chapterTwelve();
}
//onclick functinns
function chapterElevenOne(){
    document.getElementById('choice-11-1').style.display = 'block';
}
function chapterElevenTwo(){
    document.getElementById('choice-11-2').style.display = 'block';
}
function chapterElevenThree(){
    document.getElementById('choice-11-3').style.display = 'block';
}
function chapterElevenFour(){
    document.getElementById('choice-11-4').style.display = 'block';
}
function chapterElevenFive(){
    document.getElementById('choice-11-5').style.display = 'block';
}
function chapterElevenSix(){
    document.getElementById('choice-11-6').style.display = 'block';
}
function chapterElevenSeven(){
    document.getElementById('choice-11-7').style.display = 'block';
    //TODO add rock paper scissors game
}
function chapterElevenEight(){
    document.getElementById('choice-11-8').style.display = 'block';
}
function chapterElevenNine(){
    document.getElementById('choice-11-9').style.display = 'block';
}
function chapterElevenTen(){
    document.getElementById('choice-11-10').style.display = 'block';
}
function chapterElevenEleven(){
    document.getElementById('choice-11-11').style.display = 'block';
}
function chapterElevenTwelve(){
    if (valueCheck() == "Ralph"){
        document.getElementById('choice-11-12').style.display = 'block';
    } else if (valueCheck() == 'Piggy'){
        document.getElementById('choice-11-18').style.display = 'block';
    }
}
function chapterElevenThirteen(){
    document.getElementById('choice-11-13').style.display = 'block';
}
function chapterElevenFourteen(){
    document.getElementById('choice-11-14').style.display = 'block';
}
function chapterElevenFifteen(){
    document.getElementById('choice-11-15').style.display = 'block';
}
function chapterElevenSixteen(){
    document.getElementById('choice-11-16').style.display = 'block';
}
function chapterElevenSeventeen(){
    document.getElementById('choice-11-17').style.display = 'block';
}
function chapterElevenNineteen(){
    document.getElementById('choice-11-19').style.display = 'block';
}
function chapterElevenTwenty(){
    document.getElementById('choice-11-20').style.display = 'block';
}
function chapterElevenTwentyOne(){
    document.getElementById('choice-11-21').style.display = 'block';
} //TODO add piggy ending
//----end of chapter----
//----Chapter 12----
//onclick functions
function chapterTwelveOne(){
    document.getElementById('choice-12-1').style.display = 'block';
}
function chapterTwelveTwo(){
    document.getElementById('choice-12-2').style.display = 'block';
}
function chapterTwelveThree(){
    document.getElementById('choice-12-3').style.display = 'block';
}
function chapterTwelveFour(){
    document.getElementById('choice-12-4').style.display = 'block';
}
function chapterTwelveFive(){
    document.getElementById('choice-12-5').style.display = 'block';
}
function chapterTwelveSix(){
    document.getElementById('choice-12-6').style.display = 'block';
}
function chapterTwelveSeven(){
    document.getElementById('choice-12-7').style.display = 'block';
}
function chapterTwelveEight(){
    document.getElementById('choice-12-8').style.display = 'block';
}
function chapterTwelveNine(){
    document.getElementById('choice-12-9').style.display = 'block';
}
function chapterTwelveTen(){
    document.getElementById('choice-12-10').style.display = 'block';
}
function chapterTwelveEleven(){
    document.getElementById('choice-12-11').style.display = 'block';
}
function chapterTwelveTwelve(){
    document.getElementById('choice-12-12').style.display = 'block';
}
function chapterTwelveThirteen(){
    document.getElementById('choice-12-13').style.display = 'block';
}
function chapterTwelveFourteen(){
    document.getElementById('choice-12-14').style.display = 'block';
}
function chapterTwelveFifteen(){
    document.getElementById('choice-12-15').style.display = 'block';
}
function chapterTwelveSixteen(){
    document.getElementById('choice-12-16').style.display = 'block';
}
function chapterTwelveSeventeen(){
    document.getElementById('choice-12-17').style.display = 'block';
}
function chapterTwelveEighteen(){
    document.getElementById('choice-12-18').style.display = 'block';
}
function chapterTwelveNineteen(){
    document.getElementById('choice-12-19').style.display = 'block';
}
function chapterTwelveTwenty(){
    document.getElementById('choice-12-20').style.display = 'block';
}
function chapterTwelveTwentyOne(){
    document.getElementById('choice-12-21').style.display = 'block';
}
function chapterTwelveTwentyTwo(){
    //weird thought, the div might show up behind the current div
    //so it will hide itself after it is shown
    document.getElementById('choice-12-22').style.display = 'block';
    document.getElementById('choice-12-23').style.display = 'none';
}
function chapterTwelveTwentyThree(){
    document.getElementById('choice-12-23').style.display = 'block';
}
function chapterTwelveTwentyFour(){
    document.getElementById('choice-12-24').style.display = 'block';
}
function chapterTwelveTwentyFive(){
    document.getElementById('choice-12-25').style.display = 'block';
}
function chapterTwelveTwentySix(){
    //generate a random number 1 or 2
    var random = Math.floor(Math.random() * (2 - 1)) + 1;
    if (random == 1){
        document.getElementById('choice-12-26').style.display = 'block';
    } else if (random == 2){
        document.getElementById('choice-12-31').style.display = 'block';
    }
}
function chapterTwelveTwentySeven(){
    document.getElementById('choice-12-27').style.display = 'block';
}
function chapterTwelveTwentyEight(){
    document.getElementById('choice-12-28').style.display = 'block';
}
function chapterTwelveTwentyNine(){
    document.getElementById('choice-12-29').style.display = 'block';
}
function chapterTwelveThirty(){
    document.getElementById('choice-12-30').style.display = 'block';
}
function chapterTwelveThirtyTwo(){
    document.getElementById('choice-12-32').style.display = 'block';
}
function chapterTwelveThirtyThree(){
    document.getElementById('choice-12-33').style.display = 'block';
}
function chapterTwelveThirtyFive(){
    document.getElementById('choice-12-35').style.display = 'block';
}
function chapterTwelveThirtySix(){
    document.getElementById('choice-12-36').style.display = 'block';
}
function chapterTwelveThirtySeven(){
    document.getElementById('choice-12-37').style.display = 'block';
}
function chapterTwelveThirtyEight(){
    document.getElementById('choice-12-38').style.display = 'block';
}
function chapterTwelveThirtyNine(){
    document.getElementById('choice-12-39').style.display = 'block';
}
function chapterTwelveForty(){
    document.getElementById('choice-12-40').style.display = 'block';
}
function chapterTwelveFortyOne(){
    document.getElementById('choice-12-41').style.display = 'block';
}
function chapterTwelveFortyTwo(){
    document.getElementById('choice-12-42').style.display = 'block';
    chapterTwelveSpear = true;
}
function chapterTwelveFortyThree(){
    document.getElementById('choice-12-43').style.display = 'block';
}
function chapterTwelveFortyFour(){
    document.getElementById('choice-12-44').style.display = 'block';
}
function chapterTwelveFortyFive(){
    document.getElementById('choice-12-45').style.display = 'block';
}
function chapterTwelveFortySix(){
    document.getElementById('choice-12-46').style.display = 'block';
}
function chapterTwelveFortySeven(){
    document.getElementById('choice-12-47').style.display = 'block';
}
function chapterTwelveFortyEight(){
    document.getElementById('choice-12-48').style.display = 'block';
}
function chapterTwelveFortyNine(){
    document.getElementById('choice-12-49').style.display = 'block';
}
function chapterTwelveFifty(){
    document.getElementById('choice-12-50').style.display = 'block';
}
function chapterTwelveFiftyOne(){
    document.getElementById('choice-12-51').style.display = 'block';
}
function chapterTwelveFiftyTwo(){
    document.getElementById('choice-12-52').style.display = 'block';
}
function chapterTwelveFiftyThree(){
    document.getElementById('choice-12-53').style.display = 'block';
}
function chapterTwelveFiftyFour(){
    document.getElementById('choice-12-54').style.display = 'block';
}
function chapterTwelveFiftyFive(){
    document.getElementById('choice-12-55').style.display = 'block';
}
function chapterTwelveFiftySix(){
    document.getElementById('choice-12-56').style.display = 'block';
}
function chapterTwelveFiftySeven(){
    document.getElementById('choice-12-57').style.display = 'block';
}
function chapterTwelveFiftyEight(){
    document.getElementById('choice-12-58').style.display = 'block';
}
function chapterTwelveFiftyNine(){
    document.getElementById('choice-12-59').style.display = 'block';
}
function chapterTwelveSixty(){
    if (chapterTwelveSpear){
        document.getElementById('choice-12-60').style.display = 'block';
    } else {    
        document.getElementById('choice-12-61').style.display = 'block';
    }
}
function chapterTwelveSixtyTwo(){
    document.getElementById('choice-12-62').style.display = 'block';
}
function chapterTwelveSixtyThree(){
    document.getElementById('choice-12-63').style.display = 'block';
}
function chapterTwelveSixtyFour(){
    document.getElementById('choice-12-64').style.display = 'block';
}
function chapterTwelveSixtyFive(){
    document.getElementById('choice-12-65').style.display = 'block';
}
function chapterTwelveSixtySix(){
    document.getElementById('choice-12-66').style.display = 'block';
}
function chapterTwelveSixtySeven(){
    document.getElementById('choice-12-67').style.display = 'block';
}
function chapterTwelveSixtyEight(){
    document.getElementById('choice-12-68').style.display = 'block';
}
//----end of chapter----