"use strict"; /* eslint-env browser */ /* global */ /* eslint no-warning-comments: [1, { "terms": ["todo", "fix", "help"], "location": "anywhere" }] */
var socket = io.connect();

// Declare Variables
var masterData = {};

// Dynamic Data
Tabletop.init({
	key: "https://docs.google.com/spreadsheets/d/1JOn0wGxMg9suEuaPpzX5QjZPpib_AbJV6Ev3OmFURD0/pubhtml",
	callback: function (data, tabletop) {
		console.log(data);
		for (var i = 0; i < data.length; i++) {
			var identifier = data[i].title.replace(/\s/g,'').toLowerCase();
			// var contents = data[i].content.split("\n");
			/*masterData[identifier] = {
				title: data[i].title,
				content: data[i].content
			};*/

			if ($(".dynamicHeader-" + identifier).length) {
				$("section.hero.firstHero").parallax({
					imageSrc: "https://drive.google.com/uc?export=view&id=" + data[i].imageURL.substring(32, 60),
					speed: 0.2
				});
				$(".dynamicHeroBody-" + identifier).text(data[i].title);
				$(".dynamicHeroBody-" + identifier).css("color", data[i].color);
				$(".dynamicHeader-" + identifier).text(data[i].heading);
				$(".dynamicContent-" + identifier).text(data[i].content);
			}
		}
		console.log(masterData);
	},
	simpleSheet: true
});

// DOM Manipulation

// $('#comic1').parallax({imageSrc: 'assets/img/kitty.jpeg'});
// console.log("bob");

$("#startAppBtn").click(function () {
	console.log($("#startAppBtn").animatecss("fadeOut"));
});