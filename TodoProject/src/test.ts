interface Person {
    name?: string;  // ? - 옵션 속성
    age: number;
}

function logAge(someone: Person) {
    console.log(someone.age);
}

let captain = { age: 100 };
logAge(captain);