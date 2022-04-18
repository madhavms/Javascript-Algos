var a  = function Greet(){
    var args = [...arguments];
    console.log(args.forEach( b => console.log(`Good Morning ${b}. Have a wonderful day!!.`))); // executes the function once for every array element.
    };
    
    var names = ['Unni','Madhav','Pranav','Sajan','Sreekanth'];
    names.forEach(name => a(name));