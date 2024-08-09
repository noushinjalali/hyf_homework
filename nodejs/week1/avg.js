const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No numbers provided. Please provide numbers as arguments.");
} else {
    const numbers = args.map(Number);

    if (numbers.some(isNaN)) {
        console.log("Invalid input. Please provide only numbers.");
    } else {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;

    console.log(`The average is: ${average}`);
    }
}