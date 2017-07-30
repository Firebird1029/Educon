"use strict"; /* eslint-env browser */ /* global */ /* eslint no-warning-comments: [1, { "terms": ["todo", "fix", "help"], "location": "anywhere" }] */
var socket = io.connect();

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

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
					imageSrc: data[i].imageURL,
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