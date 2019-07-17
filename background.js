// todo: allow users to edit and load their own lists

const list = [ 
	"www.latimes.com",
	"www.washingtonpost.com",
	"www.nytimes.com",
	"www.sfchronicle.com",
	"www.chicagotribune.com"
];

chrome.tabs.onUpdated.addListener(function(id, changeInfo, tab){
	var url = new URL(tab.url);
	var domain = url.hostname;
	
	for(site of list){
		if(domain===site){
			chrome.tabs.executeScript({
				file: 'contentScript.js'
			});	
		}
	}
});