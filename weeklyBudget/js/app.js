//class
class Budget {
    constructor(budget) {
        this.budget = budget
    }
}

//variables
let userbudget;
let budget;

//eventlisteners
eventListeners()

function eventListeners() {
    document.addEventListener("DOMContentLoaded", function () {
        userbudget = prompt("لطفا بودجه هفتگی خود را وارد کنید")
        if (userbudget === null || userbudget === "" || userbudget === "0") {
            window.location.reload()
        } else {
            budget = new Budget(userbudget)
            console.log(budget);

        }
    })
}