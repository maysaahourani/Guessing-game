'use strict' ;
let username=prompt('what is yourname?');
alert('WELCOME '+username+ '  to my gessing game throught these few questions try to answer with yes or no only');

let movie=prompt.toLowerCase()(username +'do you think that i like movies ?');
console.log(movie);
//movie.toLowerCase();
if (movie===('yes'||'y'))
{
  alert ('YES  ' + username+ ', I like movie specially drama movies') ;
}

if (movie===('no'||'n'))
{
  alert ( 'thats wrong '+username +' , i love them :( ');
}



let stud=prompt.toLowerCase()('AM i a computer engineer ?');
console.log(stud);
//stud.toLowerCase();
if(stud===('yes'||'y'))
{
  alert ('Great '+ username+' yes i am a computer engineer');
}
if(stud===('no'||'n'))
{
  alert('unfortunatlly wrong answer,I am  the queen of computer engineering :P ');
}


let drink =prompt.toLowerCase()('NOW '+username+' do you think that i like coffee ?');
console.log(drink);
//stud.toLowerCase();
if(drink===('yes'||'y'))
{
  alert ('Great '+ username+' whos dont *.*');
}
if(drink===('no'||'n'))
{
  alert('unfortunatlly wrong answer '+username+ 'you should repeat your calculations :P  ');
}



let live =prompt.toLowerCase()(username+' AM I from JORDAN ?');
console.log(drink);
//stud.toLowerCase();
if(live===('yes'||'y'))
{
  alert ('YES thats sure '+ username+' JORDAN FIRST');
}
if(live===('no'||'n'))
{
  alert('O.o '+username);
}


let age =prompt.toLowerCase()(username+' AM I older than 60 years old?');
console.log(age);
//stud.toLowerCase();
if(age===('yes'||'y'))
{
  alert ('WHAT THE HELL'+ username+' go and drink your coffee');
}
if(age===('no'||'n'))
{
  alert('thats ture '+ username+ 'i hope i can reach this age in good health  ');
}

