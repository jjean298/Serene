let totalWater = 0
const historyList = document.getElementById('history-list');
const totalElement = document.getElementById('total');

function addWater() {
    const amount=parseInt(document.getElementById('amount').value);

    if(isNaN(amount) || amount <=0) {
        alert("Please enter valid amount.")
        return;
    }

    totalWater += amount;
    totalElement.textContent = totalWater;

    const listItem = document.createElement('li');
    listItem.textContent = `${getCurrentTime()} - ${amount} mL`;
    historyList.appendChild(listItem);

    document.getElementById('amount').value="";
}

function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}