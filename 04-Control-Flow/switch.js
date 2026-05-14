//switch
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

//switch statement with multiple cases
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "banana":
        console.log("This is a common fruit.");
        break;
    case "mango":
        console.log("This is a tropical fruit.");
        break;
    default:
        console.log("Unknown fruit");
}
