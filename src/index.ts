let num: number = 20;
if (num > 50) {
    num += 10;
}

let sales: number = 123_345_456;
let sales1 = 123_345_456;
let course: string = 'Typescript';
let isFlagged: boolean = true;
let level; // type - any
level = 1;
level = 'string';
// avoid using any

function readDocument(obj: any) {
    return obj;
}

// js 
let numbers = [1,2,3,'4']
// ts
let numbersTs: number[] = [1,2,3,4]
numbersTs.forEach(n => n.toString())

// Tuple
let user: [number, string] = [1, 'Tejas']
user.push(1)

// Enum
let small = 1;
let medium = 2;
let large = 3;

enum Size {
    Small = 1,
    Medium = 2,
    Large = 3
}

let mySize: Size = Size.Medium;
console.log(mySize)


function calTax(num: number, year?: number): number {
    if( (year || 2000) > 2022 )
        return 2000;
    return 2022;
}

function calTaxAlt(num: number, year = 2000): number {
    if( year > 2022 )
        return 2000;
    return 2022;
}


// Object
let emp: {
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
} = { 
    id: 12, 
    retire: (date: Date) => {

    }
}

emp.name = 'Tejas'

type Employee = {
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
}

let emp1: Employee = {
    id: 12, 
    retire: (date: Date) => {

    }
}

// Union types
function kgToLbs(weight: number | string): number {
    if(typeof weight == 'number') {
       return weight * 2;
    }
    weight.toLocaleString();
    return parseInt(weight);
}


// Intersection type
let weight: number & string;
type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}