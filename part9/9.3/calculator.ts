enum operation {
    multipy,
    add,
    divide,
}


const calculator = (a: number, b: number, op : operation) : number | string => {
    if (op === operation.multipy) {
        return a * b;
    } else if (op === operation.add) {
        return a + b;
    } else if (op === operation.divide) {
        if (b === 0) return 'can\'t divide by 0!';
        return a / b;
    }
    throw new Error('Operation is not multiply, add or divide!');
}

try {
    console.log(calculator(1, 5 ,operation.divide ));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong.'
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}

