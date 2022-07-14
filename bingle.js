function fibonacci_sequence(min, max) {
    let fibonacci_array = [];
    for (let i = min; i <= max; i++) {
        fibonacci_array.push(fibonacci(i));
    }
    return fibonacci_array;
}
