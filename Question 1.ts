function calculate_Rectangle_Area(length: number, width: number): number {
    const area: number = length * width;
    return area;
}

// Get user input for the length and width of the rectangle
var length: number = parseFloat(("23"));
var width: number = parseFloat(("15"));

// Calculate the area using the function
var area: number = calculate_Rectangle_Area(length, width);

// Display the result
console.log(`The area of the rectangle with length ${length} and width ${width} is: ${area}`);
