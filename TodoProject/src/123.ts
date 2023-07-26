interface SalaryMap {
    [level: string]: string;
}

let  salary: SalaryMap = {
    junior: '100원',
};

let money = salary['junior'];