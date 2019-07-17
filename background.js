// todo: allow users to edit and load their own lists

const list = ["americanbanker.com", "baltimoresun.com", "barrons.com", "bloomberg.com", "businessinsider.com", "caixinglobal.com", "chicagobusiness.com", "chicagotribune.com", "corriere.it", "dailypress.com", "dn.se", "demorgen.be", "denverpost.com", "dynamed.com", "economist.com", "britannica.com", "ed.nl", "examiner.com.au", "fnlondon.com", "ft.com", "foreignpolicy.com", "glassdoor.com", "haaretz.co.il", "haaretz.com", "harpers.org", "courant.com", "hbr.org", "inc.com", "irishtimes.com", "repubblica.it", "lesechos.fr", "liberation.fr", "latimes.com", "medium.com", "sloanreview.mit.edu", "technologyreview.com", "thenewsrep.com", "nymag.com", "asia.nikkei.com", "nrc.nl", "orlandosentinel.com", "qz.com", "quora.com", "sfchronicle.com", "scientificamerican.com", "statista.com", "sun-sentinel.com", "telegraaf.nl", "theadvocate.com.au", "theage.com.au", "theaustralian.com.au", "afr.com", "bostonglobe.com", "bizjournals.com", "theglobeandmail.com", "japantimes.co.jp", "themarker.com", "mercurynews.com", "mcall.com", "thenation.com", "news-gazette.com", "newstatesman.com", "nytimes.com", "newyorker.com", "seattletimes.com", "spectator.us", "spectator.co.uk", "smh.com.au", "telegraph.co.uk", "thestar.com", "washingtonpost.com", "wsj.com", "journalnow.com", "vanityfair.com", "wired.com", "zeit.de"];

chrome.tabs.onUpdated.addListener(function(id, changeInfo, tab){
	var url = new URL(tab.url);
	var domain = url.hostname;
	
	for(site of list){
		console.log(domain);
		if(domain==='www.'+site || domain===site){
			chrome.tabs.executeScript({
				file: 'contentScript.js'
			});

			chrome.cookies.getAll({ domain: site }, function(cookies) {
				console.log(cookies);
				for (var i=0;i<cookies.length;i++) {
					chrome.cookies.remove({
						"url": "http" + (cookies[i].secure ? "s" : "") + "://" + cookies[i].domain + cookies[i].path,
						"name": cookies[i].name
					});
				}
			});
		}
	}
});