function ISODateString(d) { // Turns "2022-05-18T22:34:22.948Z" to 2022-05-18
    function pad(n) {return n<10 ? '0'+n : n}
    return d.getUTCFullYear()+'-'
         + pad(d.getUTCMonth()+1)+'-'
         + pad(d.getUTCDate())
}

// Popup object initialization
let myNotification = notifast({ 
	position: 'bottom-right' 
})

var costAutoClick = Math.round((1.07**(autoclickers))*10);
var costTaxpayer = Math.round((1.15**(taxpayers))*60);
var costRedneck = Math.round((1.14**(rednecks))*1100);
var costTrucker = Math.round((1.13**(truckers))*43000);
var costGunstore = Math.round((1.12**(gunstores))*258000);
var costFirstnation = Math.round((1.10**(firstnations))*14929920);
var costBank = Math.round((1.08**(banks-1))*179159040);
var costOil = Math.round((1.07**(oils-1))*2149908480);
var costMultiplier = Math.round((5.8**(multiplier-1))*1000);

// Autoload is save is present
if(parseInt(localStorage.getItem("punches"))) 
{
	load()
}
else {
	// Initialization variables
	var punches = 0;
	var autoclickers = 0;
	var taxpayers = 0;
	var multiplier = 1;
	var rednecks = 0;
	var truckers = 0;
	var gunstores = 0;
	var firstnations = 0;
	var banks = 0;
	var oils = 0;
	var totalPunches = 0;
	var manualPunches = 0;
	var currentScreen = "main";
	var runStarted = new Date();
	runStarted = ISODateString(runStarted)

}


// Sounds
var trudeau_punch = new Audio("assets/sounds/punch.mp3"); // buffers automatically when created


function update() // Updates onscreen text with real time variables
{
	document.title = prettyNum(Math.round(punches)) + " Punches - Punch The Trudeau"
	
	// Update upgrade prices
    costAutoClick = Math.round((1.07**(autoclickers))*10)
    costTaxpayer = Math.round((1.15**(taxpayers))*60)
	costRedneck = Math.round((1.14**(rednecks))*1100);
	costTrucker = Math.round((1.13**(truckers))*43000);
	costGunstore = Math.round((1.12**(gunstores))*258000);
	costFirstnation = Math.round((1.10**(firstnations))*14929920);
	costBank = Math.round((1.08**(banks-1))*179159040);
	costOil = Math.round((1.07**(oils-1))*2149908480);
	costMultiplier = Math.round((5.8**(multiplier))*1000)
	
	if(currentScreen == "upgrades") // Only update these if on the upgrade screen
	{
	document.getElementById('text').value = prettyNum(Math.round(punches)) + " Punches";
	document.getElementById("ownedAutoClick").innerHTML = "Owned: " + prettyNum(autoclickers);
	document.getElementById("costAutoClick").innerHTML = "Cost: " + prettyNum(costAutoClick);
	document.getElementById("ownedTaxpayer").innerHTML = "Owned: " + prettyNum(taxpayers);
	document.getElementById("costTaxpayer").innerHTML = "Cost: " + prettyNum(costTaxpayer);
	document.getElementById("ownedMultiplier").innerHTML = "Current: x" + multiplier;
	document.getElementById("costMultiplier").innerHTML = "Cost: " + prettyNum(costMultiplier);
	document.getElementById("ownedRedneck").innerHTML = "Owned: " + prettyNum(rednecks);
	document.getElementById("costRedneck").innerHTML = "Cost: " + prettyNum(costRedneck);
	document.getElementById("ownedTrucker").innerHTML = "Owned: " + prettyNum(truckers);
	document.getElementById("costTrucker").innerHTML = "Cost: " + prettyNum(costTrucker);
	document.getElementById("ownedGunstore").innerHTML = "Owned: " + prettyNum(gunstores);
	document.getElementById("costGunstore").innerHTML = "Cost: " + prettyNum(costGunstore);
	document.getElementById("ownedFirstnation").innerHTML = "Owned: " + prettyNum(firstnations);
	document.getElementById("costFirstnation").innerHTML = "Cost: " + prettyNum(costFirstnation);
	document.getElementById("ownedBank").innerHTML = "Owned: " + prettyNum(banks);
	document.getElementById("costBank").innerHTML = "Cost: " + prettyNum(costBank);
	document.getElementById("ownedOil").innerHTML = "Owned: " + prettyNum(oils);
	document.getElementById("costOil").innerHTML = "Cost: " + prettyNum(costOil);
	document.getElementById("pps").innerHTML =  prettyNum((((autoclickers)+(taxpayers*15)+(rednecks*47)+(truckers*1750)+(gunstores*10639)+(firstnations*40003)+(banks*404800)+(oils*18048160)))*multiplier) + " Punches/Per second";
	}
	if(currentScreen == "main") // Only update these if on the main screen
	{
		document.getElementById('text').value = prettyNum(Math.round(punches));
		document.getElementById("pps").innerHTML =  prettyNum((((autoclickers)+(taxpayers*15)+(rednecks*47)+(truckers*1750)+(gunstores*10639)+(firstnations*40003)+(banks*404800)+(oils*18048160)))*multiplier) + " Punches/Per second";

	}
	if(currentScreen == "stats") // Only update these if on the stats screen
	{
		document.getElementById("currentPunches").innerHTML = prettyNum(Math.round(punches))
		document.getElementById("totalPunches").innerHTML = prettyNum(Math.round(totalPunches))
		document.getElementById("totalUpgrades").innerHTML = (autoclickers + taxpayers + rednecks + truckers + gunstores + firstnations + banks + oils)
		document.getElementById("manualPunches").innerHTML = prettyNum(manualPunches)
		document.getElementById("pps").innerHTML =  prettyNum((((autoclickers)+(taxpayers*15)+(rednecks*47)+(truckers*1750)+(gunstores*10639)+(firstnations*40003)+(banks*404800)+(oils*18048160)))*multiplier);
		document.getElementById("runStarted").innerHTML = runStarted;
	}
}
	
function timer() // Adding punches for upgrades
{
	punches += (autoclickers * multiplier) / 20;
	punches += (taxpayers*15 * multiplier) / 20;
	punches += (rednecks*47 * multiplier) / 20;
	punches += (truckers*1750 * multiplier) / 20;
	punches += (gunstores*10639 * multiplier) / 20;
	punches += (firstnations*40003 * multiplier) / 20;
	punches += (banks*404800 * multiplier) / 20;
	punches += (oils*18048160 * multiplier) / 20;
	
	// This is just for statistics
	totalPunches += (autoclickers * multiplier) / 20;
	totalPunches += (taxpayers*15 * multiplier) / 20;
	totalPunches += (rednecks*47 * multiplier) / 20;
	totalPunches += (truckers*1750 * multiplier) / 20;
	totalPunches += (gunstores*10639 * multiplier) / 20;
	totalPunches += (firstnations*40003 * multiplier) / 20;
	totalPunches += (banks*404800 * multiplier) / 20;
	totalPunches += (oils*18048160 * multiplier) / 20;
	update()
}
setInterval(timer, 50)

function add() // Called every time user clicks on trudeau
{
	clearInterval(t)
	punches++;
	totalPunches++ // This is just for statistics
	manualPunches++ // Also for statistics
	update();
	document.getElementById("trudeau").src ="images/trudeau3.png"
	trudeau_punch.play();
	var t = setTimeout(trudeau2, 200)
}

function save() // Save the game
{
	localStorage.setItem("punches",punches)
	localStorage.setItem("autoclickers",autoclickers)
	localStorage.setItem("taxpayers",taxpayers)
	localStorage.setItem("multiplier",multiplier)
	localStorage.setItem("rednecks",rednecks)
	localStorage.setItem("truckers",truckers)
	localStorage.setItem("gunstores",gunstores)
	localStorage.setItem("firstnations",firstnations)
	localStorage.setItem("banks",banks)
	localStorage.setItem("oils",oils)
	localStorage.setItem("totalPunches",totalPunches)
	localStorage.setItem("manualPunches",manualPunches)
	localStorage.setItem("runStarted",runStarted)
	
	// Display "game saved!" popup
	myNotification.emitNotification({
	title: '',
	description: 'Game saved!',
	icon: '<svg class="w-6 h-6" width="32px" height="32px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
	backgroundColor: '#FFF',
	fontColor: '#CE3131',
	canBeClosed: true,
	})
}

function load() // Load saved game
{
	punches = localStorage.getItem("punches")
	punches = parseInt(punches)
	autoclickers = localStorage.getItem("autoclickers")
	autoclickers = parseInt(autoclickers)
	taxpayers = localStorage.getItem("taxpayers")
	taxpayers = parseInt(taxpayers)
	multiplier = localStorage.getItem("multiplier")
	multiplier = parseInt(multiplier)
	rednecks = localStorage.getItem("rednecks")
	rednecks = parseInt(rednecks)
	truckers = localStorage.getItem("truckers")
	truckers = parseInt(truckers)
	gunstores = localStorage.getItem("gunstores")
	gunstores = parseInt(gunstores)
	firstnations = localStorage.getItem("firstnations")
	firstnations = parseInt(firstnations)
	banks = localStorage.getItem("banks")
	banks = parseInt(banks)
	oils = localStorage.getItem("oils")
	oils = parseInt(oils)
	totalPunches = localStorage.getItem("totalPunches")
	totalPunches = parseInt(totalPunches)
	manualPunches = localStorage.getItem("manualPunches")
	manualPunches = parseInt(manualPunches)
	runStarted = localStorage.getItem("runStarted")
	update()
	
	myNotification.deleteAllNotifications()
	
	// Show "game loaded!" popup
	myNotification.emitNotification({
	title: '',
	description: 'Game successfully loaded!',
	icon: '<svg class="w-6 h-6" height="32px" width="32px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>',
	backgroundColor: '#FFF',
	fontColor: '#CE3131',
	canBeClosed: true,
	})
	
}

function trudeau2() // Change trudeau picture on mouse hover
{
	document.getElementById("trudeau").src = "images/trudeau2.png"
}

function trudeau() // Revert trudeau image on mouse leave
{
	document.getElementById("trudeau").src ="images/trudeau.png"
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

function switchScreen(scr)
{
	document.getElementById("main").innerHTML = scr;
	if (scr == scr_main) {currentScreen = "main"}
	if (scr == scr_upgrades) {currentScreen = "upgrades"}
	if (scr == scr_stats) {currentScreen = "stats"}
	if (scr == scr_trainers) {currentScreen = "trainers"}
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
			
function buyTaxpayer()
{
	if(punches >= costTaxpayer)
	{
		punches = punches - costTaxpayer
		taxpayers = taxpayers + 1;
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

function buyRedneck()
{
	if(punches >= costRedneck)
	{
		punches -= costRedneck;
		rednecks = rednecks + 1;
		update()
		var snd = new Audio("assets/sounds/upgrade.mp3"); // buffers automatically when created
		snd.play();
	}
}

function buyTrucker()
{
	if(punches >= costTrucker)
	{
		punches -= costTrucker;
		truckers = truckers + 1;
		update()
		var snd = new Audio("assets/sounds/upgrade.mp3"); // buffers automatically when created
		snd.play();
	}
}

function buyGunstore()
{
	if(punches >= costGunstore)
	{
		punches -= costGunstore;
		gunstores = gunstores + 1;
		update()
		var snd = new Audio("assets/sounds/upgrade.mp3"); // buffers automatically when created
		snd.play();
	}
}

function buyFirstnation()
{
	if(punches >= costFirstnation)
	{
		punches -= costFirstnation;
		firstnations = firstnations + 1;
		update()
		var snd = new Audio("assets/sounds/upgrade.mp3"); // buffers automatically when created
		snd.play();
	}
}

function buyBank()
{
	if(punches >= costBank)
	{
		punches -= costBank;
		banks = banks + 1;
		update()
		var snd = new Audio("assets/sounds/upgrade.mp3"); // buffers automatically when created
		snd.play();
	}
}

function buyOil()
{
	if(punches >= costOil)
	{
		punches -= costOil;
		oils = oils + 1;
		update()
		var snd = new Audio("assets/sounds/upgrade.mp3"); // buffers automatically when created
		snd.play();
	}
}

var autosaveTimer = setInterval(save,120000) // Auto save
var notifclearTimer = setInterval(myNotification.deleteAllNotifications,25000) // Auto delete notifications

// ====== SCREENS ====== //
var scr_main = `			<header>
							<p id="pps">0 Punches/Per second</p>
							<a onclick="add()"><img id="trudeau" width="50%" height="50%" onmousedown="trudeau3()" onmouseleave="trudeau()" onmouseover="trudeau2()" src="images/trudeau.png"></a>
							<br>
							You've punched trudeau:
							<input type="text" id="text" disabled style="text-align:center">
							times!
							<hr>
							<p>
								<a onclick="switchScreen(scr_stats)">Stats</a>
								|<a onclick="switchScreen(scr_upgrades)"> Upgrades</a> 
								|<a onclick="switchScreen(scr_trainers)"> Trainers</a>
							</p>
							<br>
						</header>
						`
var scr_upgrades = `
					<header>
						<p id="pps">0 Punches/Per second</p>
						<input type="text" id="text" disabled style="text-align:center">
						<hr>
							<div id="upgradelist">
								<table class="tg">
								<thead>
								  <tr>
								    <td class="tg-0lax"><button onClick="buyAutoClick()"><a><img src="images/autoclick.png" width="32px" height="32px"></a></button></td>
									<th class="tg-usm8">Autoclicker<br><span id="costAutoClick">Cost: 12</span> - <span id="ownedAutoClick">Owned: 0</span><br></th>
								  </tr>
								</thead>
								<tbody>
								  <tr>
								    <td class="tg-0lax"><button onClick="buyTaxpayer()"><a><img src="images/taxpayer.png" width="32px" height="32px"></a></button></td>
									<th class="tg-usm8">Angry Taxpayer<br><span id="costTaxpayer">Cost: 15</span> - <span id="ownedTaxpayer">Owned: 0</span><br></th>
								  </tr>
								  <tr>
								    <td class="tg-0lax"><button onClick="buyRedneck()"><a><img src="images/redneck.png" width="32px" height="32px"></a></button></td>
									<th class="tg-usm8">Redneck<br><span id="costRedneck">Cost: 1,100</span> - <span id="ownedRedneck">Owned: 0</span><br></th>
								  </tr>
								  <tr>
								    <td class="tg-0lax"><button onClick="buyTrucker()"><a><img src="images/trucker.png" width="32px" height="32px"></a></button></td>
									<th class="tg-usm8">Ottawa Trucker<br><span id="costTrucker">Cost: 43,000</span> - <span id="ownedTrucker">Owned: 0</span><br></th>
								  </tr>
								  <tr>
								    <td class="tg-0lax"><button onClick="buyGunstore()"><a><img src="images/gunstore.png" width="32px" height="32px"></a></button></td>
									<th class="tg-usm8">Gun Store<br><span id="costGunstore">Cost: 258,000</span> - <span id="ownedGunstore">Owned: 0</span><br></th>
								  </tr>
								  <tr>
								    <td class="tg-0lax"><button onClick="buyFirstnation()"><a><img src="images/firstnation.png" width="32px" height="32px"></a></button></td>
									<th class="tg-usm8">Thirsty First Nation<br><span id="costFirstnation">Cost: 14,929,920</span> - <span id="ownedFirstnation">Owned: 0</span><br></th>
								  </tr>
								  <tr>
								    <td class="tg-0lax"><button onClick="buyBank()"><a><img src="images/bank.png" width="32px" height="32px"></a></button></td>
									<th class="tg-usm8">Bank<br><span id="costBank">Cost: 179,159,040</span> - <span id="ownedBank">Owned: 0</span><br></th>
								  </tr>
								  <tr>
								    <td class="tg-0lax"><button onClick="buyOil()"><a><img src="images/oil.png" width="32px" height="32px"></a></button></td>
									<th class="tg-usm8">Oil Company<br><span id="costOil">Cost: 2,149,908,480</span> - <span id="ownedOil">Owned: 0</span><br></th>
								  </tr>
								  <tr>
								    <td class="tg-0lax"><button onClick="buyMultiplier()"><a><img src="images/multiplier.png" width="32px" height="32px"></a></button></td>
									<th class="tg-usm8">Multiplier upgrade<br><span id="costMultiplier">Cost: 200</span> - <span id="ownedMultiplier">Current: x1</span><br></th>
								  </tr>
								</tbody>
								</table>
							</div>
							<hr>
							<a onclick="switchScreen(scr_main)">>Back<</a>
						</header>
`

var scr_trainers = `<p>Coming soon!</p>
					<a onclick="switchScreen(scr_main)">>Back<</a>`
					

var scr_stats = `<h1 style="text-align:left;">Statistics</h1>
				<hr>
				<h2 style="text-align:left;">General</h2>
				<table class="tf">
				<th>
				  <tr>
					<th class="tf-73oq">Current punches : </th>
					<th class="tf-73oq"><span id="currentPunches">0</span></th>
				  </tr>
				  <tr>
					<td class="tf-73oq">All-time punches : </td>
					<td class="tf-73oq"><span id="totalPunches">0</span></td>
				  </tr>
				  <tr>
					<td class="tf-73oq">Run started : </td>
					<td class="tf-73oq"><span id="runStarted">0</span></td>
				  </tr>
				  <tr>
					<td class="tf-0lax">Upgrades owned : </td>
					<td class="tf-0lax"><span id="totalUpgrades">0</span></td>
				  </tr>
				  <tr>
					<td class="tf-0lax">Manual punches : </td>
					<td class="tf-0lax"><span id="manualPunches">0</span></td>
				  </tr>
				  <tr>
					<td class="tf-0lax">Punches/per second : </td>
					<td class="tf-0lax"><span id="pps">0</span></td>
				  </tr>
				  </th>
				  </table>
				  <button onclick="save()"><a>Save game</a></button>
				  <button onclick="load()"><a>Load game</a></button>
				<hr>
				<h2 style="text-align:left;">Achievements</h2>
				<p>Coming soon!</p>
				<a onclick="switchScreen(scr_main)">>Back<</a>`