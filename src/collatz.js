  
export function generateCollatz(n) {
    
    const numbers = [];
    numbers.push(n)
    while (n > 1) {

        if (n & 1) {
            n = n * 3 + 1
        } else {
            n = Math.floor(n / 2)
        }

        
        numbers.push(n);
    }
    const len = numbers.length

    return [len, numbers]
}