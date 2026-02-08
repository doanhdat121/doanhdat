const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const rollSound = new Audio("media/sound.mp3");

function drawDiceFace(number) {
    const diceSize = Math.min(canvas.width, canvas.height);
    const margin = (canvas.width - diceSize) / 2;
    const dotRadius = diceSize * 0.05;
    const dotOffset = diceSize * 0.25;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#fff";
    ctx.fillRect(margin, margin, diceSize, diceSize);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 5;
    ctx.strokeRect(margin, margin, diceSize, diceSize);

    const centerX = margin + diceSize / 2;
    const centerY = margin + diceSize / 2;

    // Mảng vị trí các chấm (Reconstructed from PDF logic)
    const dotPositions = [
        // 1
        [[centerX, centerY]], 
        // 2
        [
            [centerX - dotOffset, centerY - dotOffset],
            [centerX + dotOffset, centerY + dotOffset]
        ],
        // 3
        [
            [centerX - dotOffset, centerY - dotOffset],
            [centerX, centerY],
            [centerX + dotOffset, centerY + dotOffset]
        ],
        // 4
        [
            [centerX - dotOffset, centerY - dotOffset],
            [centerX + dotOffset, centerY - dotOffset],
            [centerX - dotOffset, centerY + dotOffset],
            [centerX + dotOffset, centerY + dotOffset]
        ],
        // 5
        [
            [centerX - dotOffset, centerY - dotOffset],
            [centerX + dotOffset, centerY - dotOffset],
            [centerX, centerY],
            [centerX - dotOffset, centerY + dotOffset],
            [centerX + dotOffset, centerY + dotOffset]
        ],
        // 6
        [
            [centerX - dotOffset, centerY - dotOffset],
            [centerX - dotOffset, centerY],
            [centerX - dotOffset, centerY + dotOffset],
            [centerX + dotOffset, centerY - dotOffset],
            [centerX + dotOffset, centerY],
            [centerX + dotOffset, centerY + dotOffset]
        ]
    ];

    ctx.fillStyle = "#000";
    // Vẽ chấm dựa trên số
    if (dotPositions[number - 1]) {
        dotPositions[number - 1].forEach(([x, y]) => {
            ctx.beginPath();
            ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
            ctx.fill();
        });
    }
}

function rollDice() {
    let rollCount = 0;
    const maxRolls = 6; 
    const interval = 100;

    rollSound.play();

    const intervalId = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        drawDiceFace(randomNumber);
        rollCount++;
        
        if (rollCount >= maxRolls) {
            clearInterval(intervalId);
        }
    }, interval);

    setTimeout(() => {
        rollSound.pause();
        rollSound.currentTime = 0;
    }, maxRolls * interval);
}


document.getElementById("rollDiceButton").addEventListener("click", rollDice);