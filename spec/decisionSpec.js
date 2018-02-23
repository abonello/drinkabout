// These are the jasmine tests

describe("DrinkDecision", function() {
    describe("whatCanIDrink function", function() {
        // it("should take an age argument and return a decision on what to drink.", function() {
        //     spyOn(window, "alert");
        //     whatCanIDrink(30);
        //     expect(window.alert).toHaveBeenCalledWith("You can drink.");
        // });
        it("should take an age argument and return a decision on what to drink. (age < 0  | age = -1)", function() {
            spyOn(window, "alert");
            whatCanIDrink(-1);
            expect(window.alert).toHaveBeenCalledWith("Sorry. I can't tell what drink because that age is incorrect!");
        });
        it("should take an age argument and return a decision on what to drink. (age = 0)", function() {
            spyOn(window, "alert");
            whatCanIDrink(0);
            expect(window.alert).toHaveBeenCalledWith("Sorry. I can't tell what drink because that age is incorrect!");
        });
        it("should take an age argument and return a decision on what to drink. (age < 0 && age < 14 | age = 1)", function() {
            spyOn(window, "alert");
            whatCanIDrink(1);
            expect(window.alert).toHaveBeenCalledWith("Drink Toddy");
        });
        it("should take an age argument and return a decision on what to drink. (age < 0 && age < 14 | age = 13)", function() {
            spyOn(window, "alert");
            whatCanIDrink(13);
            expect(window.alert).toHaveBeenCalledWith("Drink Toddy");
        });
        it("should take an age argument and return a decision on what to drink. (age <= 14 && age < 18 | age = 14)", function() {
            spyOn(window, "alert");
            whatCanIDrink(14);
            expect(window.alert).toHaveBeenCalledWith("Drink Coke");
        });
        it("should take an age argument and return a decision on what to drink. (age <= 14 && age < 18 | age = 17)", function() {
            spyOn(window, "alert");
            whatCanIDrink(17);
            expect(window.alert).toHaveBeenCalledWith("Drink Coke");
        });
        it("should take an age argument and return a decision on what to drink. (age <= 18 && age < 21 | age = 18)", function() {
            spyOn(window, "alert");
            whatCanIDrink(18);
            expect(window.alert).toHaveBeenCalledWith("Drink Beer");
        });
        it("should take an age argument and return a decision on what to drink. (age <= 18 && age < 21 | age = 20)", function() {
            spyOn(window, "alert");
            whatCanIDrink(20);
            expect(window.alert).toHaveBeenCalledWith("Drink Beer");
        });
        it("should take an age argument and return a decision on what to drink. (age <= 21 && age < 130 | age = 21)", function() {
            spyOn(window, "alert");
            whatCanIDrink(21);
            expect(window.alert).toHaveBeenCalledWith("Drink Whisky");
        });
        it("should take an age argument and return a decision on what to drink. (age <= 21 && age < 130 | age = 129)", function() {
            spyOn(window, "alert");
            whatCanIDrink(129);
            expect(window.alert).toHaveBeenCalledWith("Drink Whisky");
        });
        it("should take an age argument and return a decision on what to drink. (age <= 21 && age < 130 | age = 130)", function() {
            spyOn(window, "alert");
            whatCanIDrink(130);
            expect(window.alert).toHaveBeenCalledWith("Sorry. I can't tell what drink because that age is incorrect!");
        });
        it("should take an age argument and return a decision on what to drink. (age <= 21 && age < 130 | age = 131)", function() {
            spyOn(window, "alert");
            whatCanIDrink(131);
            expect(window.alert).toHaveBeenCalledWith("Sorry. I can't tell what drink because that age is incorrect!");
        });
    });
});

