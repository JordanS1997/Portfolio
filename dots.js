let banner = document.querySelector('.fpcontent');
let canvas = document.getElementById('dots');
let ctx = canvas.getContext('2d');

let dots = [];
let colors = [
    '#FF6B6B', // Vibrant red
    '#FFA500', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Lime green
    '#00CED1', // Turquoise
    '#1E90FF', // Dodger blue
    '#9370DB', // Purple
    '#FF69B4', // Hot pink
    '#C0C0C0', // Silver
    '#FF00FF'
];

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

for (let i = 0; i < 100; i++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: colors[Math.floor(Math.random() * 10)]
    });
}

// const draw = () => {
//     dots.forEach(dot => {
//         ctx.fillStyle = dot.color;
//         ctx.beginPath();
//         ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
//         ctx.fill();
//     });
// }

// draw();

banner.addEventListener('mousemove', (event) => {
    let mouse = {
        x: event.clientX - banner.getBoundingClientRect().left,
        y: event.clientY - banner.getBoundingClientRect().top
    }

    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x - 50) ** 2 + (mouse.y - dot.y - 50) ** 2);
        if (distance < 190) {
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = .4;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})

banner.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

})

// Get the canvas ele
// Set the canvas size to the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let prevX = 0;
let prevY = 0;
let alpha = 10; // Initial alpha value

// Set the initial line width and alpha
ctx.lineWidth = .4;
ctx.globalAlpha = alpha;

// Add an event listener for the mousemove event
document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Check if the mouse has moved
    if (x !== prevX || y !== prevY) {
        // Generate a random RGB color
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        // Draw a line between the previous and current mouse positions
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.stroke();

        // Gradually decrease the alpha value over time
        alpha -= 0.01;
        ctx.globalAlpha = alpha;

        // Update the previous mouse position
        prevX = x;
        prevY = y;

        // Clear the canvas if the alpha value reaches 0
        if (alpha <= 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            alpha = 10; // Reset the alpha value
            alert('OUT OF INK :P');
        }
    }
});
