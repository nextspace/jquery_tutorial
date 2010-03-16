// Basics

// declare a global variable (global means your whole program can see it)
var thing

// datatypes
var yo = "yo!"  // strings

var odelay = 42   // integer
var sup = 3.22    // float
var zoo = ["steve", "kieth", "mahesh", "laurie", "sean"]; // array/list
var mix = [23, "thing", {kung: "fu"}]  // array can be mixed types
var today = new Date()

var flight = {             // a js "object"
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        city: "Los Angeles"
    }
}

// all this is is key/value and it can be as deeply nested as you want

// value retrieval
flight.departure.IATA    // "SYD"
flight.airline           // "Oceanic"
// override? no problem
flight.airline = "MacDaddy Airlines"
// add new property? no problem
flight.somethings_there_that_wasnt_there_before = "hi"

// OR
var obj = {}

obj.foo = "sadness"
obj.bar = "joy"
// anonymous functions? no problem
obj.do_that_thing = function(){ return "awwwwwwwwww schnap!!"}


// regex literals (WHA?)
var match_dis = /^yo(our)?\smama$/i
"yo mama".match(match_dis) // will return true


// define a named function "yo()"
function yo(as, many, parameters, needed) {
    people = [as, many, parameters, needed]
    for p in people {
        
    }
}

// call the function
yo()



