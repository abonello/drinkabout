function whatCanIDrink(age) {
    if (age <= 0) {
        alert("Sorry. I can't tell what drink because that age is incorrect!");
    } else if (age < 14) {
        alert("Drink Toddy");
    } else if (age < 18) {
        alert("Drink Coke");
    } else if (age < 21) {
        alert("Drink Beer");
    } else if (age < 130) {
        alert("Drink Whisky");
    } else {
        alert("Sorry. I can't tell what drink because that age is incorrect!");
    }
    // alert("You can drink.");
}


