const btn = document.getElementById("button");
const text = document.getElementById("title");
let upgradeButton = document.getElementById("upgrade");
let score = 0;
let scoreMultiplier = 1;
let upgradePrices = [10, 50, 100, 250, 700];
let upgradeIndex = 0;
let upgradeMultipliers = [1, 2, 4, 6, 8, 10];

function clicked() {
    score += scoreMultiplier;
    text.innerHTML = score;
    console.log('clicked');
}

function buyUpgrade() {
    if (score >= upgradePrices[upgradeIndex]) {
        score -= upgradePrices[upgradeIndex];
        text.innerHTML = score;
        upgradeIndex++;
        scoreMultiplier = upgradeMultipliers[upgradeIndex];
    }

    else {
        alert(`You don't have enough money! You need ${upgradePrices[upgradeIndex]} money!`)
    }
}

btn.onclick = clicked;
upgradeButton.onclick = buyUpgrade;