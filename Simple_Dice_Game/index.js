var a=Math.ceil(Math.random()*6);
var imgnum="images/dice"+a+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgnum);

var b=Math.ceil(Math.random()*6);
var imgnum2="images/dice"+b+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgnum2);

if(a>b)
{
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(a<b)
{
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
else
{
  document.querySelector("h1").innerHTML="Draw";
}
