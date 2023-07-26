interface Person {
  name?: string;
  age: number;
}

function logAge(someone: Person) {
  console.log(someone.age);
}
function logPersonInfo(you: Person) {
   console.log(you.name);
  console.log(you.age);
}

let captain = { age: 100 };
logAge(captain);
