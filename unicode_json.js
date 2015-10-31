/*

Emoji data from unicode.org to JSON file. 
(C) 2015 Rodrigo Polo - http://rodrigopolo.com

http://www.unicode.org/reports/tr51/#Rights_to_Emoji_Images
http://www.unicode.org/Public/emoji/1.0/emoji-data.txt

Intended for:
http://www.unicode.org/versions/Unicode8.0.0/

    Download on GNU Linux:
    > wget http://www.unicode.org/Public/emoji/1.0/emoji-data.txt
    
    Download on OS X:
    > curl -O http://www.unicode.org/Public/emoji/1.0/emoji-data.txt

	Install dependencies:
	> npm install js-beautify
    
    Run:
    > node unicode_json.js > outout.json

*/

var fs = require("fs");
var beautify = require('js-beautify').js_beautify;

fs.readFile("emoji-data.txt", "utf-8", function (err, data) {
	if (err){
		console.log('Cannot read emoji-data.txt file');
	}else{
		var pr = /^((?:[0-9A-Fa-f]{4,5} )+)\;\t(\w+) \;\t(\w+) \;\t(\w+) \;\t([^#]*)\#([^(]*)\(([^)]*)\) (.*)/;
		var emoji_data = data.toString();
		var lines = emoji_data.split('\n');
		var uni_json=[];
		var emnum=0;
		for (var i = 0; i < lines.length; i++) {
			// ignore commented lines
			if (!/^\s*\#/.test(lines[i])) {			
				var lpar=null;
				if(lpar=pr.exec(lines[i])){
					emnum++;
					uni_json.push({
						unicode:	lpar[1].trim().replace(/ /,"-"),
						style:		lpar[2],
						level:		parseInt(lpar[3].replace(/L/,"")),
						modifier:	lpar[4],
						sources:	lpar[5].trim().split(' '),
						version:	parseFloat(lpar[6].replace(/V/,"")),
						emoji:		lpar[7],
						name:		toTitleCase(lpar[8]),
						order: emnum
					});
				}else{
					if(lines[i].length>0){
						console.log('Cannot parse line:');
						console.log(lines[i]);
					}
				}
			}
		}
		console.log(beautify(JSON.stringify(uni_json), {indent_with_tabs: true}));
	}
});

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
