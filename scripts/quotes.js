$(function() {
	var allQuotes = {
		love: {
			image: "assets/love-ye.jpg",
			caption: "&copy; @kimkardashian Instagram",
			quotes: ["Less talk more head right now, huh?",
				"Sometimes I feel like just saying I love you isn’t strong enough to express how much I love you…",
				"One good girl is worth a thousand bitches.",
				"We ain't married but tonight I need some consummation.",
				"Prince William’s ain’t do it right if you ask me Cause I was him I would have married Kate & Ashley.",
				"Never was much of a romantic, I could never take the intimacy.",
				"Exes can be mad but just know I never let them play with my ass… I don’t do that… I stay away from that area all together.",
				"Me and my wife got the kind of love that can turn exes into best friends."
			]
		},
		money: {
			image: "assets/money-ye.jpg", 
			caption: "&copy; Billboard magazine",
			quotes: ["If you read books - which I don't, none at all - about how to become a billionaire, they always say, 'You learn more from your mistakes.' So if you learn from your mistakes, then I'm a f*cking genius.",
				"I don't know what's better gettin' laid or gettin' paid.",
				"Should've got that insured, got GEICO for your money.",
				"PRENUP! Yeah, It's something that you need to have 'Cause when she leave yo ass she gon' leave with half.",
				"My friend showed me pictures of his kids And all I could show him was pictures of my cribs.",
				"I got a problem with spending before I get it.",
				"Cause ain't no to tuition for havin' no ambition, And ain't no loans for sittin' your ass at home.",
				"Having money's not everything, not having it is."
			]
		},
		spirituality: {
			image: "assets/spiritual-ye.jpg",
			caption: "&copy; Alex Cherry",
			quotes: ["I am God's vessel. But my greatest pain in life is that I will never be able to see myself perform live.",
			"Good energy. Positive energy.",
			"Dreams are worth more than money.",
			"Keep your nose out the sky, keep your heart to god, and keep your face to the raising sun.",
			"It gon' take a lot more than coupons to get us saved.",
			"We at war with terrorism, racism, and most of all we at war with ourselves.",
			"We buy our way out of jail, but we can't buy freedom.",
			"We can't dwell on the past all we got is today."
			]
		},
		career: {
			image:"assets/career-ye.jpg",
			caption:"&copy; GQ Magazine",
			quotes: ["I have no interest in working with anyone who is too important or too good, too traditional to take a call at 3am.",
			"I wake up every day trying to give something back to you that you can rock to and be proud of.",
			"You should be honored by my lateness.",
			"Please: Do everything you possibly can in one lifetime.",
			"Excited, humbled and motivated for the future.",
			"I want to steer clear of 'opportunities' and focus on dreams."
			]
		},
		health: {
			image: "assets/healthy-ye.jpg",
			caption: "&copy; kanyewest.com",
			quotes: ["One of my biggest achilles heels has been my ego. And if I, Kanye West, can remove my ego, I think there’s hope for everyone.",
			"Not smiling makes me smile.",
			"People always say that you can't please everybody. I think that's a cop-out. Why not attempt it? 'Cause think of all the people you will please if you try.",
			"Believe in your flyness... conquer your shyness.",
			"Love your haters - they're your biggest fans.",
			"You’ve got to be really dialed into exactly who you are to the one hundredth power or you’re just everyone else",
			"I never live in fear, I’m too out of my mind.",
			"They say people in your life are seasons, And anything that happen is for a reason.",
			"It seems we living the American dream, But the people highest up got the lowest self esteem."
			]
		},
		wildcard: {
			image: "assets/devil-ye.png",
			caption: "MK Reyes",
			quotes: ["This is not album of the year. This is album of the life.",
			"George Bush doesn't care about black people.",
			"F*ck any game company that puts in-app purchases on kids games!!!",
			"Maximum expression while I have air in my lungs.",
			"I DO NOT HAVE AN INSTAGRAM…",
			"I always had a Ph.D.: a Pretty Huge Dick.",
			"Heard they'd do anything for a Klondike, Well, I'd do anything for a blonde-dike."
			]
		}
	}; //END OF QUOTES OBJECT

	// array Stuff = ["thing1", "thing2", "thing3", "thing4"];
	// 				0			1		2			3
	// 				Stuff[2] = "thing3"


	// FUNCTION
	// function doAwesomeShit()}{
	// 	console.log("dog");
	// };

	// METHOD
	// new myObject {
	// 	doAwesomeShit: function(){
	// 		console.log("dog");
	// 	};
	// }

	$('main a').on('click', function(event){
		event.preventDefault();
		var kanyeCategory = $(this).data("category");
		var quoteLibrary = allQuotes[kanyeCategory].quotes;
		var randomNumber = Math.floor(Math.random() * quoteLibrary.length);
		var randomQuote = quoteLibrary[randomNumber];

		$('.quote-flex').html('<h3>' + randomQuote + '</h3>' + '<h4>- Kanye West</h4>');

		var kanyeImage = allQuotes[kanyeCategory].image;
		var kanyeImageTag = '<img src="' + kanyeImage + '">';

		var kanyeCaption = allQuotes[kanyeCategory].caption;
		$('.image-credit-flex').html('<div class="image-flex">' + kanyeImageTag + '</div>' + '<figcaption>' + kanyeCaption + '</figcaption>');

		$('.advice-button').html("More " + kanyeCategory + " Advice");
		$('.advice-button').data("category", kanyeCategory);
		//CSS ANIMATION
		$('.image-credit-flex').addClass('animated fadeIn');
		$('.quote-flex').addClass('animated fadeIn');
		$('.image-credit-flex').one('animationend', function() {
			$(this).removeClass('animated fadeIn');
		});
		$('.quote-flex').one('animationend', function() {
			$(this).removeClass('animated fadeIn');
		});
	});

	$('.reset-button').click(function(event) {
		event.preventDefault();
		$('.image-credit-flex').empty();
		$('.quote-flex').empty();
		$('#angel-ye').attr("src", "assets/angel-ye.png");
		$('*').removeClass('devil-mode');
	});


	$('.wild-card-container a').click(function() {
		$('#angel-ye').attr("src", "assets/devil-ye.png");
		$('*').addClass("devil-mode");
	});
});