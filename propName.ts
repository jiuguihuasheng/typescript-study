let a: {name: string, [propName: string]: any};

a = {
    name: 'test1',
    age: 23
};

let b: any, c: string;
b = 2;
c = b;

let d: (a: string) => string;
d = (a: string): string => {
    return a;
}

enum e{
    a = 0,
    b = 1
}

let f: {n1:e};
f = {n1: e.a}