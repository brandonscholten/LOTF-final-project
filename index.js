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
//booleans for the first loop in chapter ten
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
//this is [redacted] stupid please ignore the next hundred or so lines of this [redacted]
//if I get bored this summer I'll re-engineer something cleaner
function hideAll(){
    document.getElementById('start-window').style.display = 'none';
    document.getElementById('end-window').style.display = 'none';
    document.getElementById('killPigEnding').style.display = 'none';
    document.getElementById('tsunamiEnding').style.display = 'none';
    document.getElementById('chapterSixRevisionOne').style.display = 'none';
    document.getElementById('chapterSevenRevisionOne').style.display = 'none';
    document.getElementById('chapterSevenRevisionTwo').style.display = 'none';
    document.getElementById('chapterSevenRevisionThree').style.display = 'none';
    document.getElementById('chapterSevenRevisionFour').style.display = 'none';
    document.getElementById('chapterSevenRevisionFive').style.display = 'none';
    document.getElementById('chapterSevenRevisionSix').style.display = 'none';
    document.getElementById('chapterSevenRevisionSeven').style.display = 'none';
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
    document.getElementById('choice-8-10').style.display = 'none';
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
function disableButtons(choice){
    //example: document.getElementById('button1').disabled = true;
    switch (choice){
        case '1': 
            document.getElementById('button1').disabled = true;
            document.getElementById('button2').disabled = true;
            document.getElementById('button3').disabled = true;
            document.getElementById('button4').disabled = true;
            break;
        case '1-1':
            document.getElementById('button5').disabled = true;
            document.getElementById('button6').disabled = true;
            break;
        case '1-2':
            document.getElementById('button7').disabled = true;
            document.getElementById('button8').disabled = true;
            break;
        case 'killPigEnding':
            document.getElementById('button9').disabled = true;
            break;
        case '2':
            document.getElementById('button10').disabled = true;
            break;
        case '2-1':
            document.getElementById('button11').disabled = true;
            document.getElementById('button12').disabled = true;
            break;
        case '2-2':
            document.getElementById('button13').disabled = true;
            document.getElementById('button14').disabled = true;
            break;
        case '2-3':
            document.getElementById('button15').disabled = true;
            document.getElementById('button16').disabled = true;
            break;
        case '3':
            document.getElementById('button17').disabled = true;
            document.getElementById('button18').disabled = true;
            break;
        case '3-1':
            document.getElementById('button19').disabled = true;
            document.getElementById('button20').disabled = true;
            document.getElementById('button21').disabled = true;
            break;
        case '3-2':
            document.getElementById('button22').disabled = true;
            document.getElementById('button23').disabled = true;
            break;
        case '4':
            document.getElementById('button24').disabled = true;
            document.getElementById('button25').disabled = true;
            break;
        case '4-1':
            document.getElementById('button26').disabled = true;
            document.getElementById('button27').disabled = true;
            break;
        case '4-2':
            document.getElementById('button28').disabled = true;
            break;
        case '5':
            document.getElementById('button29').disabled = true;
            break;
        case '5-1':
            document.getElementById('button30').disabled = true;
            document.getElementById('button31').disabled = true;
            break;
        case '5-2':
            document.getElementById('button32').disabled = true;
            document.getElementById('button33').disabled = true;
            break;
        case '6':
            document.getElementById('button34').disabled = true;
            document.getElementById('button35').disabled = true;
            document.getElementById('button36').disabled = true;
            break;
        case 'tsunamiEnding':
            document.getElementById('button37').disabled = true;
            break;
        case 'chapterSixRevisionOne':
            document.getElementById('button38').disabled = true;
            break;
        case '6-1':
            document.getElementById('button39').disabled = true;
            document.getElementById('button40').disabled = true;
            break;
        case '6-2':
            document.getElementById('button41').disabled = true;
            document.getElementById('button42').disabled = true;
            break;
        case 'chapterSevenRevisionOne':
            document.getElementById('button43').disabled = true;
            document.getElementById('button44').disabled = true;
            break;
        case 'chapterSevenRevisionTwo':
            document.getElementById('button45').disabled = true;
            break;
        case 'chapterSevenRevisionThree':
            document.getElementById('button46').disabled = true;
            break;
        case 'chapterSevenRevisionFour':
            document.getElementById('button47').disabled = true;
            break;
        case 'chapterSevenRevisionFive':
            document.getElementById('button48').disabled = true;
            break;
        case '7':
            document.getElementById('button49').disabled = true;
            break;
        case '7-1':
            document.getElementById('button50').disabled = true;
            document.getElementById('button51').disabled = true;
            break;
        case '7-2':
            document.getElementById('button52').disabled = true;
            break;
        case '7-3':
            document.getElementById('button53').disabled = true;
            document.getElementById('button54').disabled = true;
            break;
        case 'chapterSevenRevisionSix':
            document.getElementById('button55').disabled = true;
            break;
        case 'chapterSevenRevisionSeven':
            document.getElementById('button56').disabled = true;
            break;
        case '7-4':
            document.getElementById('button57').disabled = true;
            document.getElementById('button58').disabled = true;
            break;
        case '7-5':
            document.getElementById('button59').disabled = true;
            document.getElementById('button60').disabled = true;
            break;
        case '7-6':
            document.getElementById('button61').disabled = true;
            break;
        case '8':
            document.getElementById('button62').disabled = true;
            break;
        case '8-1':
            document.getElementById('button63').disabled = true;
            break;
        case '8-2':
            document.getElementById('button64').disabled = true;
            break;
        case '8-3':
            document.getElementById('button65').disabled = true;
            break;
        case '8-4':
            document.getElementById('button66').disabled = true;
            break;
        case '8-5':
            document.getElementById('button67').disabled = true;
            break;
        case '8-6':
            document.getElementById('button68').disabled = true;
            break;
        case '8-7':
            document.getElementById('button69').disabled = true;
            break;
        case '8-8':
            document.getElementById('button70').disabled = true;
            break;
        case '8-9':
            document.getElementById('button71').disabled = true;
            break;
        case '8-10':
            document.getElementById('button72').disabled = true;
            break;
        case '9':
            document.getElementById('button73').disabled = true;
            break;
        case '9-1':
            document.getElementById('button74').disabled = true;
            break;
        case '9-2':
            document.getElementById('button75').disabled = true;
            break;
        case '9-3':
            document.getElementById('button76').disabled = true;
            break;
        case '9-4':
            document.getElementById('button77').disabled = true;
            break;
        case '9-5':
            document.getElementById('button78').disabled = true;
            break;
        case '9-6':
            document.getElementById('button79').disabled = true;
            break;
        case '9-7':
            document.getElementById('button80').disabled = true;
            break;
        case '9-8':
            document.getElementById('button81').disabled = true;
            break;
        case '9-9':
            document.getElementById('button82').disabled = true;
            break;
        case '9-10':
            document.getElementById('button83').disabled = true;
            break;
        case '10':
            document.getElementById('button84').disabled = true;
            document.getElementById('button85').disabled = true;
            break;
        case '10-1':
            document.getElementById('button86').disabled = true;
            document.getElementById('button87').disabled = true;
            document.getElementById('button88').disabled = true;
            break;
        case '10-2':
            document.getElementById('button89').disabled = true;
            document.getElementById('button90').disabled = true;
            break;
        case '10-3':
            document.getElementById('button91').disabled = true;
            document.getElementById('button92').disabled = true;
            break;
        case '10-4':
            document.getElementById('button93').disabled = true;
            break;
        case '10-5':
            document.getElementById('button94').disabled = true;
            break;
        case '10-6':
            document.getElementById('button95').disabled = true;
            document.getElementById('button96').disabled = true;
            break;
        case '10-7':
            document.getElementById('button97').disabled = true;
            break;
        case '10-8':
            document.getElementById('button98').disabled = true;
            break;
        case '10-9':
            document.getElementById('button99').disabled = true;
            break;
        case '10-10':
            document.getElementById('button100').disabled = true;
            break;
        case '10-11':
            document.getElementById('button101').disabled = true;
            break;
        case '10-12':
            document.getElementById('button102').disabled = true;
            break;
        case '10-13':
            document.getElementById('button103').disabled = true;
            break;
        case '10-14':
            document.getElementById('button104').disabled = true;
            document.getElementById('button105').disabled = true;
            break;
        case '10-15':
            document.getElementById('button110').disabled = true;
            break;
        case '10-16':
            document.getElementById('button111').disabled = true;
            break;
        case '10-17':
            document.getElementById('button112').disabled = true;
            break;
        case '10-18':
            document.getElementById('button113').disabled = true;
            break;
        case "11":
            document.getElementById('button114').disabled = true;
            break;
        case '11-1':
            document.getElementById('button115').disabled = true;
            document.getElementById('button116').disabled = true;
            break;
        case '11-2':
            document.getElementById('button117').disabled = true;
            break;
        case '11-3':
            document.getElementById('button118').disabled = true;
            break;
        case '11-4':
            document.getElementById('button119').disabled = true;
            break;
        case '11-5':
            document.getElementById('button120').disabled = true;
            break;
        case '11-6':
            document.getElementById('button121').disabled = true;
            break;
        case '11-7':
            document.getElementById('button122').disabled = true;
            document.getElementById('button123').disabled = true;
            document.getElementById('button124').disabled = true;
            break;
        case '11-8':
            document.getElementById('button125').disabled = true;
            break;
        case '11-9':
            document.getElementById('button126').disabled = true;
            break;
        case '11-10':
            document.getElementById('button127').disabled = true;
            break;
        case '11-11':
            document.getElementById('button128').disabled = true;
            break;
        case '11-12':
            document.getElementById('button129').disabled = true;
            break;
        case '11-13':
            document.getElementById('button130').disabled = true;
            break;
        case '11-14':
            document.getElementById('button131').disabled = true;
            document.getElementById('button132').disabled = true;
            break;
        case '11-15':
            document.getElementById('button133').disabled = true;
            break;
        case '11-16':
            document.getElementById('button134').disabled = true;
            break;
        case '11-17':
            document.getElementById('button135').disabled = true;
            break;
        case '11-18':
            document.getElementById('button136').disabled = true;
            break;
        case '11-19':
            document.getElementById('button137').disabled = true;
            break;
        case '11-20':
            document.getElementById('button138').disabled = true;
            break;
        case '11-21':
            document.getElementById('button139').disabled = true;
            break;
        case '12':
            document.getElementById('button140').disabled = true;
            document.getElementById('button141').disabled = true;
            break;
        case '12-1':
            document.getElementById('button142').disabled = true;
            break;
        case '12-2':
            document.getElementById('button143').disabled = true;
            break;
        case '12-3':
            document.getElementById('button144').disabled = true;
            break;
        case '12-4':
            document.getElementById('button145').disabled = true;
            break;
        case '12-5':
            document.getElementById('button146').disabled = true;
            document.getElementById('button147').disabled = true;
            break;
        case '12-6':
            document.getElementById('button148').disabled = true;
            break;
        case '12-7':
            document.getElementById('button149').disabled = true;
            break;
        case '12-8':
            document.getElementById('button150').disabled = true;
            document.getElementById('button151').disabled = true;
            break;
        case '12-9':
            document.getElementById('button152').disabled = true;
            document.getElementById('button153').disabled = true;
            break;
        case '12-10':
            document.getElementById('button154').disabled = true;
            break;
        case '12-11':
            document.getElementById('button155').disabled = true;
            document.getElementById('button156').disabled = true;
            break;
        case '12-12':
            document.getElementById('button157').disabled = true;
            break;
        case '12-13':
            document.getElementById('button158').disabled = true;
            break;
        case '12-14':
            document.getElementById('button159').disabled = true;
            break;
        case '12-15':
            document.getElementById('button160').disabled = true;
            break;
        case '12-16':
            document.getElementById('button161').disabled = true;
            document.getElementById('button162').disabled = true;
            break;
        case '12-17':
            document.getElementById('button163').disabled = true;
            break;
        case '12-18':
            document.getElementById('button164').disabled = true;
            break;
        case '12-19':
            document.getElementById('button165').disabled = true;
            break;
        case '12-20':
            document.getElementById('button166').disabled = true;
            break;
        case '12-21':
            document.getElementById('button167').disabled = true;
            document.getElementById('button168').disabled = true;
            break;
        case '12-22':
            document.getElementById('button169').disabled = true;
            break;
        case '12-23':
            document.getElementById('button170').disabled = true;
            break;
        case '12-24':
            document.getElementById('button171').disabled = true;
            break;
        case '12-25':
            document.getElementById('button172').disabled = true;
            break;
        case '12-26':
            document.getElementById('button173').disabled = true;
            break;
        case '12-27':
            document.getElementById('button174').disabled = true;
            break;
        case '12-28':
            document.getElementById('button175').disabled = true;
            break;
        case '12-29':
            document.getElementById('button176').disabled = true;
            break;
        case '12-30':
            document.getElementById('button177').disabled = true;
            break;
        case '12-31':
            document.getElementById('button178').disabled = true;
            break;
        case '12-32':
            document.getElementById('button179').disabled = true;
            break;
        case '12-33':
            document.getElementById('button180').disabled = true;
            break;
        case '12-34':
            document.getElementById('button181').disabled = true;
            break;
        case '12-35':
            document.getElementById('button182').disabled = true;
            document.getElementById('button183').disabled = true;
            break;
        case '12-36':
            document.getElementById('button184').disabled = true;
            document.getElementById('button185').disabled = true;
            break;
        case '12-37':
            document.getElementById('button186').disabled = true;
            break;
        case '12-38':
            document.getElementById('button187').disabled = true;
            break;
        case '12-39':
            document.getElementById('button188').disabled = true;
            break;
        case '12-40':
            document.getElementById('button189').disabled = true;
            break;
        case '12-41':
            document.getElementById('button190').disabled = true;
            document.getElementById('button191').disabled = true;
            break;
        case '12-42':
            document.getElementById('button192').disabled = true;
            break;
        case '12-43':
            document.getElementById('button193').disabled = true;
            break;
        case '12-44':
            document.getElementById('button194').disabled = true;
            break;
        case '12-45':
            document.getElementById('button195').disabled = true;
            document.getElementById('button196').disabled = true;
            break;
        case '12-46':
            document.getElementById('button197').disabled = true;
            break;
        case '12-47':
            document.getElementById('button198').disabled = true;
            break;
        case '12-48':
            document.getElementById('button199').disabled = true;
            break;
        case '12-49':
            document.getElementById('button200').disabled = true;
            break;
        case '12-50':
            document.getElementById('button201').disabled = true;
            break;
        case '12-51':
            document.getElementById('button202').disabled = true;
            document.getElementById('button203').disabled = true;
            break;
        case '12-52':
            document.getElementById('button204').disabled = true;
            break;
        case '12-53':
            document.getElementById('button205').disabled = true;
            break;
        case '12-54':
            document.getElementById('button206').disabled = true;
            break;
        case '12-55':
            document.getElementById('button207').disabled = true;
            break;
        case '12-56':
            document.getElementById('button208').disabled = true;
            break;
        case '12-57':
            document.getElementById('button209').disabled = true;
            break;
        case '12-58':
            document.getElementById('button210').disabled = true;
            break;
        case '12-59':
            document.getElementById('button211').disabled = true;
            break;
        case '12-60':
            document.getElementById('button212').disabled = true;
            break;
        case '12-61':
            document.getElementById('button213').disabled = true;
            break;
        case '12-62':
            document.getElementById('button214').disabled = true;
            break;
        case '12-63':
            document.getElementById('button215').disabled = true;
            break;
        case '12-64':
            document.getElementById('button216').disabled = true;
            break;
        case '12-65':
            document.getElementById('button217').disabled = true;
            break;
        case '12-66':
            document.getElementById('button218').disabled = true;
            break;
        case '12-67':
            document.getElementById('button219').disabled = true;
        case '12-68':
            document.getElementById('button220').disabled = false;
    }
}
function valueCheck(){
    //checks for the highest counter and returns a string indicating the highest value
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
function chapterNine(majority){
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
    //hide pics
    document.getElementById('RalphPic').style.display = 'none';
    document.getElementById('PiggyPic').style.display = 'none';
    document.getElementById('SimonPic').style.display = 'none';
    document.getElementById('JackPic').style.display = 'none';
    //insert the result into the end screen
    document.getElementById('insertFinalResultHere').innerHTML = valueCheck();
    //show the appropriate image
    if (valueCheck() == 'Ralph'){
        document.getElementById('RalphPic').style.display = 'block';
    } else if (valueCheck() == 'Piggy'){
        document.getElementById('PiggyPic').style.display = 'block';
    } else if (valueCheck() == 'Simon'){
        document.getElementById('SimonPic').style.display = 'block';
    } else if (valueCheck() == 'Jack'){
        document.getElementById('JackPic').style.display = 'block';
    }
    //display the end screen
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
    disableButtons('1');
}
//onclick function for 1-2
function oneTwo(){
    document.getElementById('choice-1-2').style.display = "block";
    chapterTwoReturn = true;
    disableButtons('1-1');
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
    disableButtons('2');
}
function choiceTwoOne(join){
    //a parameter of true is passed onclick if the join choice is chosen
    //if join add points to jack, then show choice 2-2 regardless of choice
    if (join){jackCounter = jackCounter + 1;}
    document.getElementById('choice-2-2').style.display = 'block';
    disableButtons('2-1');
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
    disableButtons('2-2');
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
    disableButtons('3');
}
function chapterThreeTwo(){
    document.getElementById('choice-3-2').style.display = 'block';
    disableButtons('3-1');
}
function chapterThreeCounter(hunting, huts, explore){
    //add points if true is passed for any of the parameters
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
    disableButtons('4');
}
function chapterFourTwo(){
    document.getElementById('choice-4-2').style.display = 'block';
    disableButtons('4-1');
    //add points for ralph and piggy
    //run valueCheck
    //piggy alt scenario
    //cleanup will be ran when the user clicks continue
    ralphCounter = ralphCounter + 1;
    piggyCounter = piggyCounter + 1;
    var largestValue = valueCheck();
    if (largestValue == 'piggy'){document.getElementById('piggy-slap').style.display = 'block';}
    chapterFourBeach = true;
}
function chapterFourHunt(){
    //add point to jack counter
    //run chapter cleanup
    jackCounter = jackCounter +1;
    chapterFourCleanup();
}
//----end of chapter----
//----Chapter 5----
//onclick functions
function chapterFiveOne(){
    document.getElementById('choice-5-1').style.display = 'block';
    disableButtons('5');
}
function chapterFiveTwo(fire){
    if (fire){
        ralphCounter = ralphCounter + 1;
    } else {
        jackCounter = jackCounter + 1;
    }
    document.getElementById('choice-5-2').style.display = 'block';
    disableButtons('5-1');
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
        disableButtons('6');
    } else if (stay){
        piggyCounter = piggyCounter + 1;
        document.getElementById('chapterSixRevisionOne').style.display = 'block';
        chapterSixStayBehind = true;
        disableButtons('6');
    } else {
        simonCounter = simonCounter + 1;
        document.getElementById('tsunamiEnding').style.display = 'block';
        disableButtons('6');
    }
}
function chapterSixTwo(go){
    if (go){
        ralphCounter = ralphCounter + 1;
        jackCounter = jackCounter + 1;
        document.getElementById('choice-6-2').style.display = 'block';
        disableButtons('6-1');
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
    disableButtons('7');
}
function chapterSevenNotify(){
    jackCounter = jackCounter + 1;
    document.getElementById('choice-7-2').style.display = 'block';
    disableButtons('7-1');
}
function chapterSevenThree(){
    document.getElementById('choice-7-3').style.display = 'block';
    disableButtons('7-1');
    disableButtons('7-2');
}
function chapterSevenFour(go){
    if (go){
        simonCounter = simonCounter + 1;
        document.getElementById('chapterSevenRevisionSix').style.display = 'block';
    } else {
        document.getElementById('choice-7-4').style.display = 'block';
    }
    disableButtons('7-3');
}
function chapterSevenFive(go, wait){
    if (go){
        jackCounter = jackCounter + 1;
    } else if (wait){
        ralphCounter = ralphCounter + 1;
    }
    document.getElementById('choice-7-5').style.display = 'block';
    disableButtons('7-4');
}
function chapterSevenSix(go, send){
    if (go){
        jackCounter = jackCounter + 1;
    } else if (send){
        ralphCounter = ralphCounter + 1;
    }
    document.getElementById('choice-7-6').style.display = 'block';
    disableButtons('7-5');
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
    disableButtons('chapterSevenRevisionOne');
}
function chapterSevenRevisionThree(){
    document.getElementById('chapterSevenRevisionThree').style.display = 'block';
    disableButtons('chapterSevenRevisionOne');
}
function chapterSevenRevisionFour(){
    document.getElementById('chapterSevenRevisionFour').style.display = 'block';
    disableButtons('chapterSevenRevisionTwo');
    disableButtons('chapterSevenRevisionThree');
}
function chapterSevenRevisionFive(){
    document.getElementById('chapterSevenRevisionFive').style.display = 'block';
    disableButtons('chapterSevenRevisionFour');
}
function chapterSevenRevisionSeven(){
    document.getElementById('chapterSevenRevisionSeven').style.display = 'block';
    disableButtons('chapterSevenRevisionSix');
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
    disableButtons('8');
}
function chapterEightTwo(){
    document.getElementById('choice-8-2').style.display = 'block';
    disableButtons('8-1');
}
function chapterEightThree(){
    document.getElementById('choice-8-3').style.display = 'block';
    disableButtons('8-2');
}
function chapterEightFour(){
    document.getElementById('choice-8-4').style.display = 'block';
    disableButtons('8-3');
}
function chapterEightSix(){
    document.getElementById('choice-8-6').style.display = 'block';
    disableButtons('8-5');
}
function chapterEightSeven(){
    if (valueCheck() == 'Ralph'){
        document.getElementById('choice-8-7').style.display = 'block';
    } else if (valueCheck() == 'Piggy'){
        document.getElementById('choice-8-8').style.display = 'block';
    } else {
        document.getElementById('choice-8-10').style.display = 'block';
    }
    disableButtons('8-6');
}
function chapterEightNine(){
    document.getElementById('choice-8-9').style.display = 'block';
    disableButtons('8-7');
    disableButtons('8-8');
}
function chapterEightEnd(){
    hideAll();
    chapterNine(valueCheck());
}
//----end of chapter----
//----Chapter 9----
//onclick functions
function chapterNineEnd(){ 
    hideAll();
    chapterTen(); 
}
function chapterNineOne(){
    document.getElementById('choice-9-1').style.display = 'block';
    disableButtons('9');
}
function chapterNineTwo(){
    document.getElementById('choice-9-2').style.display = 'block';
    disableButtons('9-1');
}
function chapterNineEight(){
    document.getElementById('choice-9-8').style.display = 'block';
    disableButtons('9-7');
}
function chapterNineNine(){
    document.getElementById('choice-9-9').style.display = 'block';
    disableButtons('9-8');
}
function chapterNineTen(){
    document.getElementById('choice-9-10').style.display = 'block';
    disableButtons('9-9');
}
function chapterNineFour(){
    document.getElementById('choice-9-4').style.display = 'block';
    disableButtons('9-3');
}
function chapterNineFive(){
    document.getElementById('choice-9-5').style.display = 'block';
    disableButtons('9-4');
}
function chapterNineSix(){
    document.getElementById('choice-9-6').style.display = 'block';
    disableButtons('9-5');
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
    //disableButtons('10');
}
function chapterTenTwo(punish, assign, hunt){
    //make sure punishment paragraph in 10-2 is hidden (to be shown onsubmit)
    //document.getElementById('punishment').style.display = 'none';
    //make sure 10-2, 10-3, and 10-4 are hidden
    document.getElementById('choice-10-2').style.display = 'none';
    document.getElementById('choice-10-3').style.display = 'none';
    document.getElementById('choice-10-4').style.display = 'none';
    //show choice-10-1 (no harm done on first run when its already visible)
    document.getElementById('choice-10-1').style.display = 'block';
    //run chapterTenFirstLoop function to eliminate used options or move to next question
    chapterTenFirstLoop(); 
    //if a parameter is set to true, flip its corresponding boolean to true, hide choice-10-1, and then show its corresponding scenario
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
    disableButtons('10-5');
}
function chapterTenSeven(deny){
    if (deny){
        document.getElementById('choice-10-7').style.display = 'block';
        chapterTenExplain = true;
    } else {
        document.getElementById('choice-10-8').style.display = 'block';
    }
    disableButtons('10-6');
}
function chapterTenNine(){
    document.getElementById('choice-10-9').style.display = 'block';
    disableButtons('10-8');
    disableButtons('10-7');
}
function chapterTenTen(){
    if (chapterTenExplain){
        document.getElementById('choice-10-10').style.display = 'block';
    } else {
        document.getElementById('choice-10-11').style.display = 'block';
    }
    disableButtons('10-9');
}
function chapterTenEleven(){
    document.getElementById('choice-10-11').style.display = 'block';
    disableButtons('10-10');
}
function chapterTenTwelve(){
    document.getElementById('choice-10-12').style.display = 'block';
    //chapterTenEnd(); this is ran onclick of continue for 10-12
    disableButtons('10-11');
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
    disableButtons('10-13');
}
function chapterTenFifteen(){
    document.getElementById('choice-10-15').style.display = 'block';
    disableButtons('10-14');
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
        computerSelection = 'scissors';
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
    disableButtons('10-14');
}
function chapterTenSeventeen(){
    document.getElementById('choice-10-17').style.display = 'block';
    disableButtons('10-15');
    disableButtons('10-16');
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
    disableButtons('10-17');
}
//onsubmit functions
function nameCave(){
    //get the value of caveName and insert it into all elements with the ID of insertCaveNameHere
    document.getElementById('insertCaveNameHere').innerHTML ='Assign guards to '+document.getElementById('caveName').value;
    document.getElementById('insertCaveNameHere2').innerHTML = 'You reach the old shelters. You and the two boys you brought along smash through the poorly built structures looking for the weirdo with glasses. Eventually you acquire what you came for and leave to return to '+document.getElementById('caveName').value+'.';
    document.getElementById('insertCaveNameHere3').innerHTML = "As you approach "+document.getElementById('caveName').value+" you notice the two outsiders have returned, probably for that weirdo's glasses. You won't comply with their demands. Quite honestly, you would rather kill them. One of them calls you a thief. You decide that right then that these two outsiders will not be leaving the island alive.";
    document.getElementById('insertCaveNameHere4').innerHTML = "You eventually find a pig to slaughter. It isn't enough to satisfy you anymore. You head back to "+document.getElementById('caveName').value+" with the pig. You are informed that the boy has escaped this thicket while you were gone. You are enraged but excited since this new target may finally satisfy your unending desire to kill.";
}
function beatChild(){
    //get the value of victimInput and insert it into all elements with the ID of insertVictimHere
    document.getElementById('punishment').innerHTML = 'You order the hunters to take '+document.getElementById('victimInput').value+' and tie them to a rock. You begin a furious series of blows until you are satisfied.' ;
    document.getElementById('insertVictimHere2').innerHTML = 'The boy who spoke out suffers the same fate as '+document.getElementById('victimInput').value+'. The others are too fearful to dare act out again. After all, the beast is dead and no one would dare object to this conclusion.';
}
function assignGuards(){
    //put the guard names and cave name in the appropriate element
    document.getElementById('insertHunters').innerHTML = 'You, '+document.getElementById('guard_1').value+' and '+document.getElementById('guard_2').value+' are out in the forest hunting. You see a pig and kill it. You and the other carry the dead meat back to '+document.getElementById('caveName').value+'.';
}
//----end of chapter----
//----Chapter 11----
function chapterElevenEnd(){
    hideAll();
    chapterTwelve();
}
//onclick functions
function chapterElevenOne(){
    document.getElementById('choice-11-1').style.display = 'block';
    disableButtons('11');
}
function chapterElevenTwo(){
    document.getElementById('choice-11-2').style.display = 'block';
    disableButtons('11-1');
}
function chapterElevenThree(){
    document.getElementById('choice-11-3').style.display = 'block';
    disableButtons('11-1');
}
function chapterElevenFour(){
    document.getElementById('choice-11-4').style.display = 'block';
    disableButtons('11-2');
    disableButtons('11-3');
}
function chapterElevenFive(){
    document.getElementById('choice-11-5').style.display = 'block';
    disableButtons('11-4');
}
function chapterElevenSix(){
    document.getElementById('choice-11-6').style.display = 'block';
    disableButtons('11-5');
}
function chapterElevenEight(){
    document.getElementById('choice-11-8').style.display = 'block';
    disableButtons('11-7');
}
function chapterElevenNine(){
    document.getElementById('choice-11-9').style.display = 'block';
    disableButtons('11-7');
}
function chapterElevenTen(){
    document.getElementById('choice-11-10').style.display = 'block';
    disableButtons('11-7');
    disableButtons('11-8');
    disableButtons('11-9');
}
function chapterElevenEleven(){
    document.getElementById('choice-11-11').style.display = 'block';
    disableButtons('11-10');
}
function chapterElevenTwelve(){
    if (valueCheck() == "Ralph"){
        document.getElementById('choice-11-12').style.display = 'block';
    } else {
        document.getElementById('choice-11-18').style.display = 'block';
    }
    disableButtons('11-11');
}
function chapterElevenThirteen(){
    document.getElementById('choice-11-13').style.display = 'block';
    disableButtons('11-12');
}
function chapterElevenFourteen(){
    hideAll();
    document.getElementById('choice-11-14').style.display = 'block';
    disableButtons('11-13');
}
function chapterElevenFifteen(){
    document.getElementById('choice-11-15').style.display = 'block';
    disableButtons('11-14');
}
function chapterElevenSixteen(){
    document.getElementById('choice-11-16').style.display = 'block';
    disableButtons('11-14');
}
function chapterElevenSeventeen(){
    document.getElementById('choice-11-17').style.display = 'block';
    disableButtons('11-15');
    disableButtons('11-16');
}
function chapterElevenNineteen(){
    document.getElementById('choice-11-19').style.display = 'block';
    disableButtons('11-18');
}
function chapterElevenTwenty(){
    document.getElementById('choice-11-20').style.display = 'block';
    disableButtons('11-19');
}
function chapterElevenTwentyOne(){
    document.getElementById('choice-11-21').style.display = 'block';
    disableButtons('11-20');
} 
//----end of chapter----
//----Chapter 12----
//onclick functions
function chapterTwelveOne(){
    document.getElementById('choice-12-1').style.display = 'block';
    disableButtons('12');
}
function chapterTwelveTwo(){
    document.getElementById('choice-12-2').style.display = 'block';
    disableButtons('12-1');
}
function chapterTwelveThree(){
    document.getElementById('choice-12-3').style.display = 'block';
    disableButtons('12');
    disableButtons('12-2');
}
function chapterTwelveFour(){
    document.getElementById('choice-12-4').style.display = 'block';
    disableButtons('12-3')
}
function chapterTwelveFive(){
    hideAll();
    document.getElementById('choice-12-5').style.display = 'block';
    disableButtons('12-4');
}
function chapterTwelveSix(){
    document.getElementById('choice-12-6').style.display = 'block';
    disableButtons('12-5');
}
function chapterTwelveSeven(){
    document.getElementById('choice-12-7').style.display = 'block';
    disableButtons('12-5');
    disableButtons('12-6');
}
function chapterTwelveEight(){
    hideAll();
    document.getElementById('choice-12-8').style.display = 'block';
    disableButtons('12-7');
}
function chapterTwelveNine(){
    document.getElementById('choice-12-9').style.display = 'block';
    disableButtons('12-8');
}
function chapterTwelveTen(){
    document.getElementById('choice-12-10').style.display = 'block';
    disableButtons('12-9');
}
function chapterTwelveEleven(){
    document.getElementById('choice-12-11').style.display = 'block';
    disableButtons('12-10');
}
function chapterTwelveTwelve(){
    document.getElementById('choice-12-12').style.display = 'block';
    disableButtons('12-11');
}
function chapterTwelveThirteen(){
    document.getElementById('choice-12-13').style.display = 'block';
    disableButtons('12-11');
}
function chapterTwelveFourteen(){
    document.getElementById('choice-12-14').style.display = 'block';
    disableButtons('12-12');
    disableButtons('12-13');
}
function chapterTwelveFifteen(){
    document.getElementById('choice-12-15').style.display = 'block';
    disableButtons('12-9');
}
function chapterTwelveSixteen(){
    document.getElementById('choice-12-16').style.display = 'block';
    disableButtons('12-15');
}
function chapterTwelveSeventeen(){
    document.getElementById('choice-12-17').style.display = 'block';
    disableButtons('12-16');
}
function chapterTwelveEighteen(){
    document.getElementById('choice-12-18').style.display = 'block';
    disableButtons('12-16');
}
function chapterTwelveNineteen(){
    hideAll();
    document.getElementById('choice-12-19').style.display = 'block';
    disableButtons('12-14');
    disableButtons('12-17');
    disableButtons('12-18');
}
function chapterTwelveTwenty(){
    document.getElementById('choice-12-20').style.display = 'block';
    disableButtons('12-19');
}
function chapterTwelveTwentyOne(){
    document.getElementById('choice-12-21').style.display = 'block';
    disableButtons('12-20');
}
function chapterTwelveTwentyTwo(){
    //weird thought, the div might show up behind the current div
    //so it will hide itself after it is shown
    document.getElementById('choice-12-22').style.display = 'block';
    document.getElementById('choice-12-23').style.display = 'none';
    disableButtons('12-21');
}
function chapterTwelveTwentyThree(){
    document.getElementById('choice-12-23').style.display = 'block';
    disableButtons('12-21');
}
function chapterTwelveTwentyFour(){
    document.getElementById('choice-12-24').style.display = 'block';
    disableButtons('12-8');
}
function chapterTwelveTwentyFive(){
    document.getElementById('choice-12-25').style.display = 'block';
    disableButtons('12-24');
}
function chapterTwelveTwentySix(){
    //generate a random number 1 or 2
    var random = Math.floor(Math.random() * (4 - 1)) + 1;
    if (random == 1){
        document.getElementById('choice-12-26').style.display = 'block';
    } else if (random > 1){
        document.getElementById('choice-12-31').style.display = 'block';
    }
    disableButtons('12-25');
}
function chapterTwelveTwentySeven(){
    document.getElementById('choice-12-27').style.display = 'block';
    disableButtons('12-26');
}
function chapterTwelveTwentyEight(){
    document.getElementById('choice-12-28').style.display = 'block';
    disableButtons('12-27');
}
function chapterTwelveTwentyNine(){
    document.getElementById('choice-12-29').style.display = 'block';
    disableButtons('12-28');
}
function chapterTwelveThirty(){
    document.getElementById('choice-12-30').style.display = 'block';
    disableButtons('12-29');
}
function chapterTwelveThirtyTwo(){
    document.getElementById('choice-12-32').style.display = 'block';
    disableButtons('12-31');
}
function chapterTwelveThirtyThree(){
    document.getElementById('choice-12-33').style.display = 'block';
    disableButtons('12-32');
}
function chapterTwelveThirtyFive(){
    document.getElementById('choice-12-35').style.display = 'block';
    disableButtons('12-34');
}
function chapterTwelveThirtySix(){
    document.getElementById('choice-12-36').style.display = 'block';
    disableButtons('12-35');
}
function chapterTwelveThirtySeven(){
    document.getElementById('choice-12-37').style.display = 'block';
    disableButtons('12-36');
}
function chapterTwelveThirtyEight(){
    document.getElementById('choice-12-38').style.display = 'block';
    disableButtons('12-37')
}
function chapterTwelveThirtyNine(){
    document.getElementById('choice-12-39').style.display = 'block';
    disableButtons('12-36');
}
function chapterTwelveForty(){
    document.getElementById('choice-12-40').style.display = 'block';
    disableButtons('12-35');
    disableButtons('12-39');
}
function chapterTwelveFortyOne(){
    document.getElementById('choice-12-41').style.display = 'block';
    disableButtons('12-40');
}
function chapterTwelveFortyTwo(){
    document.getElementById('choice-12-42').style.display = 'block';
    chapterTwelveSpear = true;
    disableButtons('12-41');
}
function chapterTwelveFortyThree(){
    document.getElementById('choice-12-43').style.display = 'block';
    disableButtons('12-41');
}
function chapterTwelveFortyFour(){
    document.getElementById('choice-12-44').style.display = 'block';
    disableButtons('12-42');
    disableButtons('12-43');
}
function chapterTwelveFortyFive(){
    hideAll();
    document.getElementById('choice-12-45').style.display = 'block';
    disableButtons('12-44');
}
function chapterTwelveFortySix(){
    document.getElementById('choice-12-46').style.display = 'block';
    disableButtons('12-45');
}
function chapterTwelveFortySeven(){
    document.getElementById('choice-12-47').style.display = 'block';
    disableButtons('12-45');
}
function chapterTwelveFortyEight(){
    document.getElementById('choice-12-48').style.display = 'block';
    disableButtons('12-47');
}
function chapterTwelveFortyNine(){
    document.getElementById('choice-12-49').style.display = 'block';
    disableButtons('12-46');
}
function chapterTwelveFifty(){
    hideAll();
    document.getElementById('choice-12-50').style.display = 'block';
    disableButtons('12-49');
}
function chapterTwelveFiftyOne(){
    document.getElementById('choice-12-51').style.display = 'block';
    disableButtons('12-50');
}
function chapterTwelveFiftyTwo(){
    document.getElementById('choice-12-52').style.display = 'block';
    disableButtons('12-51');
}
function chapterTwelveFiftyThree(){
    document.getElementById('choice-12-53').style.display = 'block';
    disableButtons('12-52');
}
function chapterTwelveFiftyFour(){
    document.getElementById('choice-12-54').style.display = 'block';
    disableButtons('12-53');
}
function chapterTwelveFiftyFive(){
    document.getElementById('choice-12-55').style.display = 'block';
    disableButtons('12-51');
}
function chapterTwelveFiftySix(){
    document.getElementById('choice-12-56').style.display = 'block';
    disableButtons('12-55');
}
function chapterTwelveFiftySeven(){
    hideAll();
    document.getElementById('choice-12-57').style.display = 'block';
    disableButtons('12-56');
}
function chapterTwelveFiftyEight(){
    document.getElementById('choice-12-58').style.display = 'block';
    disableButtons('12-57');
}
function chapterTwelveFiftyNine(){
    document.getElementById('choice-12-59').style.display = 'block';
    disableButtons('12-58');
}
function chapterTwelveSixty(){
    if (chapterTwelveSpear){
        document.getElementById('choice-12-60').style.display = 'block';
    } else {    
        document.getElementById('choice-12-61').style.display = 'block';
    }
    disableButtons('12-59');
}
function chapterTwelveSixtyTwo(){
    document.getElementById('choice-12-62').style.display = 'block';
    disableButtons('12-61');
}
function chapterTwelveSixtyThree(){
    hideAll();
    document.getElementById('choice-12-63').style.display = 'block';
    disableButtons('12-60');
}
function chapterTwelveSixtyFour(){
    document.getElementById('choice-12-64').style.display = 'block';
    disableButtons('12-63');
}
function chapterTwelveSixtyFive(){
    document.getElementById('choice-12-65').style.display = 'block';
    disableButtons('12-64');
}
function chapterTwelveSixtySix(){
    hideAll();
    document.getElementById('choice-12-66').style.display = 'block';
    disableButtons('12-65');
}
function chapterTwelveSixtySeven(){
    document.getElementById('choice-12-67').style.display = 'block';
    disableButtons('12-66');
}
function chapterTwelveSixtyEight(){
    document.getElementById('choice-12-68').style.display = 'block';
    disableButtons('12-67');
}
//----end of chapter----