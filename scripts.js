  // Function to generate random hex colors
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate the color palette
function generatePalette() {
    const palette = document.getElementById('palette');
    palette.innerHTML = ''; // Clear previous colors

    for (let i = 0; i < 6; i++) {
        const color = getRandomColor();
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.innerHTML = `<span class="color-code">${color}</span>`;
        colorBox.addEventListener('click', () => {
            navigator.clipboard.writeText(color);
            alert(`Copied ${color} to clipboard!`);
        });
        palette.appendChild(colorBox);
    }
}

// Generate palette on page load
window.onload = generatePalette;