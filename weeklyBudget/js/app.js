//class
class Budget {
    constructor(budget) {
        this.budget = budget
    }
}

class HTML {
    insertBudget(amount) {
        // console.log(amount);
        // console.log(budgetTotal);
        // console.log(budgetLeft);
        budgetTotal.innerHTML = amount
        budgetLeft.innerHTML = amount
    }
}

//variables
let userbudget;
let budget;

let budgetTotal = document.querySelector("span#total")
let budgetLeft = document.querySelector("span#left")

const addExpenseForm = document.querySelector("#add-expense")

const html = new HTML()
//eventlisteners
eventListeners()

function eventListeners() {
    document.addEventListener("DOMContentLoaded", function () {
        userbudget = prompt("لطفا بودجه هفتگی خود را وارد کنید")
        if (userbudget === null || userbudget === "" || userbudget === "0") {
            window.location.reload()
        } else {
            budget = new Budget(userbudget)
            // console.log(budget);
            html.insertBudget(budget.budget)

        }
    })

    addExpenseForm.addEventListener("submit" , function(e){
        e.preventDefault()

        const expense = document.querySelector("#expense").value
        const amount = document.querySelector("#amount").value

        console.log(expense);
        console.log(amount);

    
    })
}

