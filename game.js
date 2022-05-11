// Initialization variables
var punches = 0;
var autoclickers = 0;
var protests = 0;
var multiplier = 1

var costAutoClick = (autoclickers+1)*12;
var costProtest = (protests+1)*15;
var costMultiplier = (multiplier+1)*100;

// Sounds
var trudeau_punch = new Audio("assets/sounds/punch.mp3"); // buffers automatically when created


function update() // Updates onscreen text with real time variables
{
	var costAutoClick = (autoclickers+1)*12;
	var costProtest = (protests+1)*15;
	var costMultiplier = (multiplier+1)*100;
	document.getElementById('text').value = prettyNum(punches);
	document.title = prettyNum(punches) + " Punches - Punch The Trudeau"
	document.getElementById("ownedAutoClick").innerHTML = "Owned: " + prettyNum(autoclickers);
	document.getElementById("costAutoClick").innerHTML = "Cost: " + prettyNum(costAutoClick);
	document.getElementById("ownedProtest").innerHTML = "Owned: " + prettyNum(protests);
	document.getElementById("costProtest").innerHTML = "Cost: " + prettyNum(costProtest);
	document.getElementById("ownedMultiplier").innerHTML = "Current: x" + multiplier
	//document.getElementById("ownedMultiplier2").innerHTML = "x" + parseInt(multiplier+1)
	document.getElementById("costMultiplier").innerHTML = "Cost: " + prettyNum(costMultiplier)
	document.getElementById("pps").innerHTML =  prettyNum((((autoclickers)+(protests*2))*multiplier)) + " Punches/Per second" 
}
	
function timer() // Adding punches for upgrades
{
	punches = punches + autoclickers * multiplier;
	punches = punches + protests*2 * multiplier;
	update()
}
setInterval(timer, 1000)

function add() // Called every time user clicks on trudeau
{
	clearInterval(t)
	punches++;
	update();
	document.getElementById("trudeau").src ="images/trudeau3.png"
	trudeau_punch.play();
	var t = setTimeout(trudeau2, 200)
}

function save() // Save the game
{
	localStorage.setItem("punches",punches)
	localStorage.setItem("autoclickers",autoclickers)
	localStorage.setItem("protests",protests)
	localStorage.setItem("multiplier",multiplier)
}

function load() // Load saved game
{
	punches = localStorage.getItem("punches")
	punches = parseInt(punches)
	autoclickers = localStorage.getItem("autoclickers")
	autoclickers = parseInt(autoclickers)
	protests = localStorage.getItem("protests")
	protests = parseInt(protests)
	multiplier = localStorage.getItem("multiplier")
	multiplier = parseInt(multiplier)
	update()
}

function trudeau2() // Change trudeau picture on mouse hover
{
	document.getElementById("trudeau").src = "images/trudeau2.png"
}

function trudeau() // Revert trudeau image on mouse leave
{
	document.getElementById("trudeau").src ="images/trudeau.png"
}

function trudeau3() // Change trudeaus face when punched
{

}

function prettyNum(n) // Converts a number to a pretty format
{
	if(n < 1000000)
	{
		return n.toLocaleString()
	}
	if(n >= 1000000 && n < 1000000000)
	{
		return (n / 1000000).toFixed(3) + " Million"
	}
	if(n >= 1000000000 && n < 1000000000000)
	{
		return (n / 1000000000).toFixed(3) + " Billion"
	}
	if(n >= 1000000000000 && n < 1000000000000000)
	{
		return (n / 1000000000000).toFixed(3) + " Trillion"
	}
	if(n >= 1000000000000000)
	{
		return "Infinity"
	}
}


// ======== UPGRADE BUY FUNCTIONS =========== //

function buyAutoClick()
{
	if(punches >= costAutoClick)
	{
		punches = punches - costAutoClick
		autoclickers = autoclickers + 1;
		update()
		var snd = new Audio("assets/sounds/upgrade.mp3"); // buffers automatically when created
		snd.play();
	}
	
}
			
function buyProtest()
{
	if(punches >= (protests+1)*15)
	{
		punches = punches - costProtest
		protests = protests + 1;
		update()
		var snd = new Audio("assets/sounds/upgrade.mp3"); // buffers automatically when created
		snd.play();
	}
}
			
function buyMultiplier()
{
	if(punches >= costMultiplier)
	{
		punches -= costMultiplier;
		multiplier = multiplier + 1;
		update()
		var snd = new Audio("assets/sounds/upgrade.mp3"); // buffers automatically when created
		snd.play();
	}
}