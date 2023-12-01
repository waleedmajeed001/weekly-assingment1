function calculate_Cube_Volume(length: number, width: number): number {
    const area = length * width;
    return area;
}

// Get user input for the length and width of the rectangle
var length: number = parseFloat(("8"));
var width: number = parseFloat(("8"));

// Calculate the area using the function
var area: number = calculate_Cube_Volume(length, width);

// Display the result
console.log(`The volume of the cube with length +{length}, and width +{width}, is: ${area}`);
