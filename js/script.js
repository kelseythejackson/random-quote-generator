// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" and "refreshQuote" functions are called
document.getElementById('loadQuote').addEventListener("click", function() {
    printQuote();
    refreshQuote(); 
}, false);

let quoteBox = document.getElementById('quote-box'),
refresh = [], // // will hold the objects when removed from the quotes array
hexCodes = ['155BD1', '4a0c3a', 'D16D15', '15D163', 'A915D1', '389486', '945238', '945238', '10AFEA', '000000', '333333', '800000'], //arry to build hex values
colors = [], // will hold the colors when removed from the hexCodes array
quotes = [
    //the quote array that holds the quote objects
    {
        quote: 'Everything negative - pressure, challenges - is all an opportunity for me to rise.',
        source: 'Kobe Bryant',
        tags: ['Idol', 'Legend', 'Hoops', 'Greatest']
    },
    {
        quote: 'Discipline is doing what you hate to do, but nonetheless doing it like you love it',
        source: 'Mike Tyson',
        tags: ['Iron Mike', 'Boxing']
    },
    {
        quote: 'Champions aren\'t made in the gyms. Champions are made from something they have deep inside them-a desire, a dream, a vision.',
        source: 'Muhammad Ali',
        tags: ['Greatest', 'Boxing', 'Ali']
    },
    {
        quote: 'I think that the good and the great are only separated by the willingness to sacrifice.',
        source: 'Kareem Abdul-Jabbar',
        tags: ['Lakers', 'Legend', 'Showtime']
    },
    {
        quote: 'It\'s not what happens to you, but how you react to it that matters',
        source: 'Epictetus',
        tags: ['stoicism', 'philosophy']
    },
    {
        quote: 'To improve is to change, so to be perfect is to change often.',
        source: 'Sir Winston Churchill',
        tags: ['badass', 'philosophy']
    },
    {
        quote: 'Yeah, Zeus! As in, father of Apollo? Mount Olympus? Don\'t f**k with me or I\'ll shove a lightning bolt up your a**!',
        source: 'Samuel L. Jackson',
        citation: 'Die Hard With A Vengeance',
        year: 1995,
        tags: ['SamJack', 'Bad MotherF*cker']
    },
    {
        quote: 'The Dude Abides',
        source: 'Jeff Bridges',
        citation: 'The Big Lebowski',
        year: 1998,
        tags: ['The Dude', 'Awesome']
    },
    {
        quote: 'Later, dudes. S you in your A\'s, don’t wear a C and J all over your B\'s',
        source: 'Charlie Day',
        citation: 'It\'s Always Sunny in Philadelphia',
        tags: ['Bird Law', 'Kitten Mittens']
    }

    

];

function getRandomQuote() {
    // Check to see if the quotes array is equal to zero.
    if (quotes.length === 0) {
        // Iterate over the refresh array and push the first child of each element to the quotes array
        for (let i = 0; i < refresh.length; i++) {
            quotes.push(refresh[i][0]);
        }
        //Clears out the refresh array
        refresh = [];
    }
   
    // Takes a random index in the quotes array and assign it to the quote variable.
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    // Take the random quote out of the quotes of the array and adds it to the refresh array.
    refresh.push(quotes.splice(quotes.indexOf(quote), 1));
    // logs the quote and the number of quotes remaining to the console.
    console.log(quote.quote + ' ..... Number of quotes left in the array: ' + quotes.length);
    // return the random quote
    return quote;
}

function getRandomColor() {
    // Check to see if the hexCodes array is equal to zero.
    if (hexCodes.length === 0) {
        // Iterate over the colors array and push the first child of each element to the hexCodes array
        for (let c = 0; c < colors.length; c++) {
            hexCodes.push(colors[c][0]);
        }
        //Clears out the colors array
        colors = [];
    }

    // Takes a random index in the hexCodes array and assign it to the hexCode variable.
    let hexCode = hexCodes[Math.floor(Math.random() * hexCodes.length)];
    // Appends the random hex code to the pound sign and assing it to the hexValue variable
    let hexValue = '#' + hexCode;
    // Take the random hexCode out of the hexCodes of the array and adds it to the colors array.
    colors.push(hexCodes.splice(hexCodes.indexOf(hexCode), 1));
    // return the random hexValue
    return hexValue;
}

function printQuote() {
    // assigns the getRandomQuote to the selectedQuote variable
    let selectedQuote = getRandomQuote(),
    //Initialize the markup variable
        markup = '';
    // Concatenate the markup to displaye the data from the quotes array
    markup += '<p class="quote">' +  selectedQuote.quote + '</p>';
    markup += '<p class="source">' +  selectedQuote.source;
    if (selectedQuote.citation !== undefined){ 
        markup += '<span class="citation">' +  selectedQuote.citation + '</span>';
    }
    if (selectedQuote.year !== undefined) {
        markup += '<span class="year">' + selectedQuote.year + '</span>';
    }
    markup += ' </p>';
    // set the innerHTML of the quoteBox element equal to markup
    quoteBox.innerHTML = markup;
    // Takes the backgroundColor property of the body element and sets it equal to the returned value of the getRandomQuote function
    document.body.style.backgroundColor = getRandomColor();
}

function refreshQuote() {
    // Checks if the interval function exists
    if(interval) {
        //clears out the interval variable
        clearInterval(interval);
        // sets the interval variable to a setInterval function
        interval = setInterval(printQuote, 15000);
    }
}

// Creates the interval variable
let interval = setInterval(printQuote, 15000);

// the printQuote function
printQuote();


