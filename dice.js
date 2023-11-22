

//Short & Clean Code

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" ,randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 WINS !";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 WINS !";
}
else
{
  document.querySelector("h1").innerHTML = "Draw !";
}




//Messy & Slow Code

// var ran1 = Math.floor((Math.random() * 6)+1);
// var ran2 = Math.floor((Math.random() * 6)+1);


// var dice1 = "images/dice1.png";
// var dice2 = "images/dice2.png";
// var dice3 = "images/dice3.png";
// var dice4 = "images/dice4.png";
// var dice5 = "images/dice5.png";
// var dice6 = "images/dice6.png";


// var img1 = document.getElementsByClassName("img1")[0];
// var img2 = document.getElementsByClassName("img2")[0];

// if(ran1 === 1)
// {
//   img1.src = dice1;
// }
// else if(ran1 === 2)
// {
//   img1.src = dice2;
// }
// else if(ran1 === 3)
// {
//   img1.src = dice3;
// }
// else if(ran1 === 4)
// {
//   img1.src = dice4;
// }
// else if(ran1 === 5)
// {
//   img1.src = dice5;
// }
// else if(ran1 === 6)
// {
//   img1.src = dice6;
// }



// if(ran2 === 1)
// {
//   img2.src = dice1;

// }
// else if(ran2 === 2)
// {
//   img2.src = dice2;
// }
// else if(ran2 === 3)
// {
//   img2.src = dice3;
// }
// else if(ran2 === 4)
// {
//   img2.src = dice4;
// }
// else if(ran2 === 5)
// {
//   img2.src = dice5;
// }
// else if(ran2 === 6)
// {
//   img2.src = dice6;
// }


// if(ran1 > ran2)
// {
//   document.querySelector("h1").innerHTML = "Player 1 WINS !";
// }
// else if(ran1 < ran2)
// {
//   document.querySelector("h1").innerHTML = "Player 2 WINS !";
// }
// else
// {
//   document.querySelector("h1").innerHTML = "Draw !";
// }