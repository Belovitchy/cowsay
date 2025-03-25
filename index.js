import cowsay from "cowsay";
//console.log(`I am ${process.env.NAME}`);

console.log(cowsay.say({
    text : `I am ${process.env.NAME}, i learn in ${process.env.CAMPUS}`,
    e : "oO",
    T : "U "
}));

// or cowsay.think()