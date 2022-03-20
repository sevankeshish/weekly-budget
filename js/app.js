//class
class Budget {
    constructor(budget) {
        this.budget = budget
        this.budgetLeft = this.budget
    }
    subtractFromBudget(amount) {
        return this.budgetLeft -= amount

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
    printMessage(message, className) {
        const div = document.createElement("div")
        div.classList.add("alert", "text-center", className)
        // console.log(div);  
        div.appendChild(document.createTextNode(message))
        const primary = document.querySelector(".primary")
        primary.insertBefore(div, addExpenseForm)

        setTimeout(() => {
            document.querySelector(".alert").remove()
        }, 3000);

        addExpenseForm.reset()
    }

    insertExpense(name, amount) {
        const expenses = document.querySelector("#expenses ul")
        let li = document.createElement("li")

        li.classList = "list-group-item d-flex justify-content-between align-items-center"
        li.innerHTML = `
        ${name}
        <span class = "badge badge-primary badge-pill">${amount}</span>
        `
        expenses.appendChild(li)
    }
    trackBudget(amount) {

        const budgetLeftToman = budget.subtractFromBudget(amount)
        budgetLeft.innerHTML = `${budgetLeftToman}`

        if (isNaN(amount)) {

            console.log(alert(" لیست شما پاک شد، از اول شروع کنید"));
            expenses.remove()


        } else if ((budget.budget / 4) > budgetLeftToman) {
            budgetLeft.parentElement.parentElement.classList.remove("alert-success", "alert-warning")
            budgetLeft.parentElement.parentElement.classList.add("alert-danger")
        } else if ((budget.budget / 2) > budgetLeftToman) {
            budgetLeft.parentElement.parentElement.classList.remove("alert-success")
            budgetLeft.parentElement.parentElement.classList.add("alert-warning")
        }
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
        if (isNaN(userbudget) || userbudget === "" || userbudget === "0" || userbudget === null) {
            window.location.reload()
        } else {
            budget = new Budget(userbudget)
            // console.log(budget);
            html.insertBudget(budget.budget)

        }
    })

    addExpenseForm.addEventListener("submit", function (e) {
        e.preventDefault()

        const expense = document.querySelector("#expense").value
        const amount = document.querySelector("#amount").value

        // console.log(expense);
        // console.log(amount);
        if (expense === "" || amount === "") {
            html.printMessage("همه موارد الزامی می باشند ", "alert-danger")
        } else if (!isNaN(expense)) {
            html.printMessage("لطفا متن وارد کنید", "alert-danger")
        } else if (isNaN(amount)) {
            html.printMessage("لطفا عدد وارد کنید", "alert-danger")
        } else {
            // html.printMessage("همه موارد درست است " , "alert-success")
            html.insertExpense(expense, amount)
            html.trackBudget(amount)
        }

    })
}