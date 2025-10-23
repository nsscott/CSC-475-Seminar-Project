
function test(){

    // Show current time and greet the user accordingly
    const now = new Date();
    const hours = now.getHours();
    let greeting;
    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    alert(greeting + " The current time is " + now.toLocaleTimeString() + ".");
}