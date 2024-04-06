function generateRandomColors() {

    // Generate random hue between 0 and 360
    const hue = Math.floor(Math.random() * 360);

    // Set high saturation and lightness for bright and colorful colors
    const saturation = 70;
    const lightness = 70;

    // Create HSL color string
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;

}


export default generateRandomColors
