// arguments
function f1() {
    let result = 0;
    for(let i = 0; i < arguments.length; i++) {
        console.log('processing', arguments[i]);
        result += arguments[i];
    }

    return result;
}
console.log(`calling f1 for 5, 8, 7 -> ${f1(5, 8, 7)}`);

// arrow notation
let f2 = () => 'hello from f2';
console.log(`calling f2 -> ${f2()}`);

// arrow notation /2
let f3 = () => {
    console.log('hello from f3');
    return 'done';
}
console.log(`calling f3 -> ${f3()}`);

// no "this" in lambda
let f4 = () => {
    console.log('lambda "this"', this);
}
f4();

let f5a = x => x;
console.log('no default parameter:', f5a(), f5a(42));

let f5b = (x = 0) => x;
console.log('default parameter:', f5b(), f5b(42));

// rest parameter
function f6(... va) {
    let result = 0;
    for(let i = 0; i < va.length; i++) {
        console.log('processing', va[i]);
        result += va[i];
    }

    return result;
}
console.log('f6 result is', f6(5, 8, 7));

// use apply to splat an array into function parameters
console.log('f6 result is', f6.apply(null, [5, 8, 7]));

let f7 = (... va) => va.length;

console.log(`calling f7 with ${f7(1, 2, 3)} parameters`);
console.log(`calling f7 with ${f7()} parameter`);