var words=["red","green","black","blue","yellow","white","grey","orange","purple"];
var random=words[Math.floor(Math.random() * words.length)];
var chances=10;
var s=random.length;
for(i=0;i<s;i++)
document.getElementById("dash").innerHTML+="-";
document.onkeyup=function(event)
{
	var userGuess=event.key;

	if(userGuess.value.match(random))
	{
		//replace dash with letter
		if(all letters guessed){
			goto next game;
		}
	}
	else
	{
		chances--;
		document.getElementById("chances").innerHTML=chances;
		document.getElementById("wletter").innerHTML=userGuess;

		if(chances<1)
		{
			document.getElementById("wl").innerHTML="You lost";
		}
	}
}