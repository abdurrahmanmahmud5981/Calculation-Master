// use strict mode for better error checking
"use strict";




// adding two numbers
function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    // Validate input
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        document.getElementById('error1').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const result = num1 + num2;
        document.getElementById('result1').innerText = ` ${num1} + ${num2} = ${result} \n The Result Is : ${result}`;
        document.getElementById('error1').innerText = '';
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';

    }
}


// subtracting two numbers
function subtract() {

    const sub1 = parseFloat(document.getElementById('sub1').value);
    const sub2 = parseFloat(document.getElementById('sub2').value);

    // Validate input
    if (isNaN(sub1) || isNaN(sub2) || sub1 < 0 || sub2 < 0) {
        document.getElementById('error2').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const result = sub1 - sub2;
        document.getElementById('result2').innerText = `${sub1} - ${sub2} = ${result} \n The Result Is : ${result}`;
        document.getElementById('error2').innerText = '';
        document.getElementById('sub1').value = '';
        document.getElementById('sub2').value = '';
    }

}
// 

// multiplying two numbers
function multiply() {
    const mul1 = parseFloat(document.getElementById('mul1').value);
    const mul2 = parseFloat(document.getElementById('mul2').value);
    // Validate input
    if (isNaN(mul1) || isNaN(mul2) || mul1 < 0 || mul2 < 0) {
        document.getElementById('error3').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const result = mul1 * mul2;
        document.getElementById('result3').innerText = `${mul1} * ${mul2} = ${result} \n The Result Is : ${result}`;
        document.getElementById('error3').innerText = '';
        document.getElementById('mul1').value = '';
        document.getElementById('mul2').value = '';
    }
}

// dividing two numbers
function divide() {
    const div1 = parseFloat(document.getElementById('div1').value);
    const div2 = parseFloat(document.getElementById('div2').value);
    // Validate input
    if (isNaN(div1) || isNaN(div2) || div1 < 0 || div2 < 0) {
        document.getElementById('error4').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const result = div1 / div2;
        document.getElementById('result4').innerText = `${div1} / ${div2} = ${result} \n The Result Is : ${result}`;
        document.getElementById('error4').innerText = '';
        document.getElementById('div1').value = '';
        document.getElementById('div2').value = '';
    }
}


// remainder of two numbers
function remainder() {
    const rem1 = parseFloat(document.getElementById('rem1').value);
    const rem2 = parseFloat(document.getElementById('rem2').value);
    // Validate input
    if (isNaN(rem1) || isNaN(rem2) || rem1 < 0 || rem2 < 0) {
        document.getElementById('error5').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const result = rem1 % rem2;
        document.getElementById('result5').innerText = `${rem1} % ${rem2} = ${result} \n The Result Is : ${result}`;
        document.getElementById('error5').innerText = '';
        document.getElementById('rem1').value = '';
        document.getElementById('rem2').value = '';
    }
}


// calculate intarest
function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    // Validate input
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal < 0 || rate < 0 || time < 0) {
        document.getElementById('error6').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const result = (principal * rate * time) / 100;
        document.getElementById('result6').innerText = `(${principal} * ${rate} * ${time}) / 100 = ${result} \n The Interest Is : ${result}`;
        document.getElementById('error6').innerText = '';
        document.getElementById('principal').value = '';
        document.getElementById('rate').value = '';
        document.getElementById('time').value = '';
    }
}


// Fahrenheit to Celsius
function fahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    // Validate input
    if (isNaN(fahrenheit) || fahrenheit < 0) {
        document.getElementById('error7').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('result7').innerText = `${fahrenheit}°F = ${celsius.toFixed(2)}°C \n The Celsius is : ${celsius.toFixed(2)}°C`;
        document.getElementById('error7').innerText = '';
        document.getElementById('fahrenheit').value = '';
    }
}

// Celsius to Fahrenheit
function celsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    // Validate input
    if (isNaN(celsius) || celsius < 0) {
        document.getElementById('error8').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('result8').innerText = `${celsius}°C = ${fahrenheit.toFixed(2)}°F \n The Fahrenheit is : ${fahrenheit.toFixed(2)}°F`;
        document.getElementById('error8').innerText = '';
        document.getElementById('celsius').value = '';
    }
}


// calculate area of circle
function areaOfCircle() {
    const radius = parseFloat(document.getElementById('radius').value);
    // Validate input
    if (isNaN(radius) || radius < 0) {
        document.getElementById('error9').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const area = Math.PI * radius * radius;
        document.getElementById('result9').innerText = ` area = ${Math.PI.toFixed(2)} * ${radius} * ${radius}\n Area of Circle: ${area.toFixed(2)} m`;
        document.getElementById('error9').innerText = '';
        document.getElementById('radius').value = '';
    }
}


// calculate area of rectangle
function areaOfRectangle() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    // Validate input
    if (isNaN(length) || length < 0 || isNaN(width) || width < 0) {
        document.getElementById('error10').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const area = length * width;
        document.getElementById('result10').innerText = `Area of Rectangle: ${area.toFixed(2)} m`;
        document.getElementById('error10').innerText = '';
        document.getElementById('length').value = '';
        document.getElementById('width').value = '';
    }
}

// calculate area of square
function areaOfSquare() {
    const side = parseFloat(document.getElementById('side').value);
    // Validate input
    if (isNaN(side) || side < 0) {
        document.getElementById('error11').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const area = side * side;
        document.getElementById('result11').innerText = `Area of Square: ${area.toFixed(2)} m`;
        document.getElementById('error11').innerText = '';
        document.getElementById('side').value = '';
    }
}

// calculate area of triangle
function areaOfTriangle() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    // Validate input
    if (isNaN(base) || base < 0 || isNaN(height) || height < 0) {
        document.getElementById('error12').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const area = 0.5 * base * height;
        document.getElementById('result12').innerText = `Area of Triangle: ${area.toFixed(2)} m`;
        document.getElementById('error12').innerText = '';
        document.getElementById('base').value = '';
        document.getElementById('height').value = '';
    }
}

// calculate area of parallelogram
function areaOfParallelogram() {
    const base = parseFloat(document.getElementById('base1').value);
    const height = parseFloat(document.getElementById('height1').value);
    // Validate input
    if (isNaN(base) || base < 0 || isNaN(height) || height < 0) {
        document.getElementById('error13').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const area = base * height;
        document.getElementById('result13').innerText = `Area of Parallelogram: ${area.toFixed(2)} m`;
        document.getElementById('error13').innerText = '';
        document.getElementById('base1').value = '';
        document.getElementById('height1').value = '';
    }
}


// calculate area of rhombus
function areaOfRhomus() {
    const diagonal1 = parseFloat(document.getElementById('diagonal1').value);
    const diagonal2 = parseFloat(document.getElementById('diagonal2').value);
    // Validate input
    if (isNaN(diagonal1) || diagonal1 < 0 || isNaN(diagonal2) || diagonal2 < 0) {
        document.getElementById('error14').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const area = 0.5 * diagonal1 * diagonal2;
        document.getElementById('result14').innerText = `Area of Rhombus: ${area.toFixed(2)} m`;
        document.getElementById('error14').innerText = '';
        document.getElementById('diagonal1').value = '';
        document.getElementById('diagonal2').value = '';
    }
}


// calculate area of trapezium
function areaOfTrapezium() {
    const base1 = parseFloat(document.getElementById('base2').value);
    const base2 = parseFloat(document.getElementById('base3').value);
    const height = parseFloat(document.getElementById('height2').value);
    // Validate input
    if (isNaN(base1) || base1 < 0 || isNaN(base2) || base2 < 0 || isNaN(height) || height < 0) {
        document.getElementById('error15').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const area = 0.5 * (base1 + base2) * height;
        document.getElementById('result15').innerText = `Area of Trapezium: ${area.toFixed(2)} m`;
        document.getElementById('error15').innerText = '';
        document.getElementById('base2').value = '';
        document.getElementById('base3').value = '';
        document.getElementById('height2').value = '';
    }
}

// calculate area of ellipse
function areaOfEllipse() {
    const radius1 = parseFloat(document.getElementById('radius1').value);
    const radius2 = parseFloat(document.getElementById('radius2').value);
    // Validate input
    if (isNaN(radius1) || radius1 < 0 || isNaN(radius2) || radius2 < 0) {
        document.getElementById('error16').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const area = Math.PI * radius1 * radius2;
        document.getElementById('result16').innerText = `Area of Ellipse: ${area.toFixed(2)} m`;
        document.getElementById('error16').innerText = '';
        document.getElementById('radius1').value = '';
        document.getElementById('radius2').value = '';
    }
}

// calculate area of cube
function areaOfCube() {
    const cubeSide = parseFloat(document.getElementById('cubeSide').value);
    // Validate input   
    if (isNaN(cubeSide) || cubeSide < 0) {
        document.getElementById('error17').innerText = 'Error: Invalid input';
        return;// Stop execution
    }
    else {
        const area = 6 * cubeSide * cubeSide;
        document.getElementById('result17').innerText = `Area of Cube: ${area.toFixed(2)} m`;
        document.getElementById('error17').innerText = '';
        document.getElementById('side').value = '';
    }
}