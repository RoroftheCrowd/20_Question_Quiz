var questions = [
['The Soviet Union was responsible for the creation of which satellite ?', 'sputnik'],
['The Greeks waged a ten year war over which city ', 'troy'],
['Which of the following was NOT part of the British Empire;India,Turkey,USA','turkey'],
['What Creature carried the bubonic plague ?', 'flea'],
['What was the codename of the atomic bomb that struck Hiroshima ?', 'little boy'],
['In 1949, Mao Zedong Proclaimed the establishment of which communist party ?', 'peoples republic of china'],
['During the Reformation, Martin Luther founded which denomination of Christianity ?', 'protestantism'],
['How many wives did Henry the Eighth have ?', 'six'],
['The Aztec empire was wiped out by which army ?', 'conquistadors'],
['Who was the British Prime Minister when India was granted independence ?', 'attlee'],
['Worlds largest metaphor hits iceberg refers to the sinking of which ship?', 'titanic'],
['Dookie was the name of an American music hit album released by the band Green Day in the nineties. What type of music does this music group play?', 'punk rock'],
['One of the earliest Irish leaders was Daniel OConnell. He provided virtually full civil and political rights to Irish Catholics through the 1829 Catholic Emancipation Act. What name was given to the speeches OConnell gave to huge crowds in order to gain the support needed to pass this Act?'
, 'monster meetings'],
['At the conclusion of WWII, the western border of Poland was shifted approximately one hundred and fifty miles to the west. What was this new border called?', 'the oder neisse line'],
['This great Scottish hero was portrayed by Mel Gibson in the film "Braveheart"?', 'william wallace'],
['This highwayman was convicted of armed robbery. Which of these is considered the first official victim of the guillotine during the French Revolution?', 'nicolas jacques pelletier'],
['What battle was known as the "Waterloo of the Confederacy"?', 'five forks'],
['Its the 1980s and the birth of the video game. This all time best selling coin-op was inspired by a pizza with a piece missing?', 'pac man'],
['The Oscar ceremony is first broadcast on TV; the first James Bond novel, Casino Royale, is published; Hillary and Norgay become the first to climb Everest; Ben Hogan wins three Majors but does not play in the PGA; Pierce Brosnan, Tony Blair and Kim Basinger were all born...?', '1953'],
['Christopher Colombuses real destination was ?', 'India'],
];
<!--JavaScript Quiz questions ends here-->
<!--Score determining how many questions the user got right-->
var score = 0;
<!--function asking the user a question via alert box-->
function askQuestion(question) {

var answer = prompt(question[0],'');
<!--alert box giving the user a response to thier question wheather is be correct or incorrect-->
if (isNaN(answer)) answer = answer.toLowerCase();
 if (answer == question[1]) {
 alert('Thats the right answer move on to the next stage :)');
 score++;
 } else {
 alert('Incorrect :( The answer your looking for is ' + question[1]);
 }
}
<!--varible function determining the length of the answer-->
for (var i=0; i<questions.length; i++) {
askQuestion(questions[i]);
}
<!--alert boxes dissapears while the user is given their score via heading on the html page-->
var message = 'In the end, you got ' + score;
message += ' outta ' + questions.length;
message += ' of the total questions right.';
document.write('<p>' + message + '</p>');