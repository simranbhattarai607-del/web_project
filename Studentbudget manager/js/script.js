let transactions = [];

function addTransaction() {
    let text = document.getElementById("text").value;
    let amount = document.getElementById("amount").value;

    if (text === "" || amount === "") {
        alert("Fill all fields!");
        return;
    }

    transactions.push({
        text: text,
        amount: +amount
    });

    updateUI();

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";
}

function updateUI() {
    let list = document.getElementById("list");
    let balance = 0;
    list.innerHTML = "";

    transactions.forEach((t, index) => {
        balance += t.amount;

        let li = document.createElement("li");
        li.innerHTML = `
            ${t.text} ₹${t.amount}
            <button onclick="deleteTransaction(${index})">X</button>
        `;
        list.appendChild(li);
    });

    document.getElementById("balance").innerText = balance;
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateUI();
}