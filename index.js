/*document.addEventListener('DOMContentLoaded', function () {
	//load the sites

	load();
});*/

/*$(document).ready(function(){
 	load();
 });*/

chrome.browserAction.onClicked.addListener(function(tab) { 
	//alert("load");
	load();
});

//enter your sites here
var setOne = [
"mail.google.com/mail/u/0/#inbox",
"outlook.live.com/owa/",
"www.linkedin.com/"
]


var setTwo = [
"www.reuters.com",
"news.google.com",
"news.ycombinator.com"
]

var setThree = [
"www.facebook.com",
"www.twitter.com",
"www.quora.com"
]


var setFour = [
"www.lifehacker.com",
"www.youtube.com/user/TEDtalksDirector",
"www.pinterest.com"
]


//Provide your local directiory path here
//(open the file in chrome, copy the url)
var setFive = [
 "file:///home/rishiraj/Mulitple-URL-opener/images/stevejobs.jpg",
"file:///home/rishiraj/Mulitple-URL-opener/images/billgates.png",
"file:///home/rishiraj/Mulitple-URL-opener/images/markz.jpg"
]

//format for new set
/*
var newSetName = [
"",
"",
""
]
*/
//now add a snippet in the load() function

function load() {
	var newWindow;

	var uri = new URI("");
	var currentUrl = '';
	
	//Set One
	//for first link of first set;
	uri = URI(setOne[0]);
	uri.normalize();
	if(uri.scheme()==''){currentUrl = 'http://'+uri.href();}
	else{currentUrl=uri.href();}

	//for rest of the links of set
	chrome.windows.create({url : currentUrl},function(win){	
								newWindow = win;
								loadSet(newWindow, setOne);
							} );


	//Set Two
	//for first link of next set;	
	uri = URI(setTwo[0]);
	uri.normalize();
	if(uri.scheme()==''){currentUrl = 'http://'+uri.href();}
	else{currentUrl=uri.href();}

	//for rest of the links of set
	chrome.windows.create({url : currentUrl},function(win){	
								newWindow = win;				
								loadSet(newWindow, setTwo);
							} );


	//Set Three
	//for first link of next set;	
	uri = URI(setThree[0]);
	uri.normalize();
	if(uri.scheme()==''){currentUrl = 'http://'+uri.href();}
	else{currentUrl=uri.href();}

	//for rest of the links of set
	chrome.windows.create({url : currentUrl},function(win){	
								newWindow = win;				
								loadSet(newWindow, setThree);
							} );


	//Set Four
	//for first link of next set;	
	uri = URI(setFour[0]); 
	uri.normalize();
	if(uri.scheme()==''){currentUrl = 'http://'+uri.href();}
	else{currentUrl=uri.href();}

	//for rest of the links of set
	chrome.windows.create({url : currentUrl},function(win){	
								newWindow = win;				
								loadSet(newWindow, setFour);
							} );



	//Set Five
	//for first link of next set;	
	uri = URI(setFive[0]);
	uri.normalize();
	if(uri.scheme()==''){currentUrl = 'http://'+uri.href();}
	else{currentUrl=uri.href();}

	//for rest of the links of set
	chrome.windows.create({url : currentUrl},function(win){	
								newWindow = win;				
								loadSet(newWindow, setFive);
							} );
	
	//Format for new set

/*	//for first link of next set;	
	uri = URI(newSetName[0]); //NOTICE CHANGES HERE
	uri.normalize();
	if(uri.scheme()==''){currentUrl = 'http://'+uri.href();}
	else{currentUrl=uri.href();}

	//for rest of the links of set
	chrome.windows.create({url : currentUrl},function(win){	
								newWindow = win;				
								loadSet(newWindow, newSetName);
							} );*/ //NOTICE CHANGES HERE
}


function loadSet(currentWindow, urlSet) {

	var uri = new URI("");
	var currentUrl = '';
	
	for(var i = 1; i < urlSet.length; i++){
		
		uri = URI(urlSet[i]);
		uri.normalize();
		if(uri.scheme()==''){currentUrl = 'http://'+uri.href();}
		else{currentUrl=uri.href();}
			
		chrome.tabs.create({url: currentUrl, selected: false, "windowId":currentWindow.id}); 		
	}	
}
