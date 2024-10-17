const person = {
    name: 'Belmont chandramohan',
    age: 33,
    Location:'Pondicherry',
};

const career = {
    position: "Front-End Developer",
    company: "Amazoan",
    salary: "25LPA",
};

const personWithCareer = {
    ...person,
    ...career,
};

console.log(personWithCareer);