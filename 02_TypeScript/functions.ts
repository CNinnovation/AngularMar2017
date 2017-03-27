function greet1(name? : string) : string {
    return "Hello, " + name;
}

var g1 = greet1("Katharina");

var greet2 = function(name? : string) : string {
    return "Hello, " + name;
}

var g2 = greet2("Matthias");

var greet3 = (name? : string) : string =>
    "Hello, " + name;

var g3 = greet3("Stephanie");



