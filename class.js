class Student{
    constructor(sName, sId){
        this.id = sId;
        this.name = sName;
        this.school = "DGBHS";
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "Mahi");
const student3 = new Student(16, "Salam");
const student4 = new Student(17, "Mojnu");

console.log(student1, student2, student3, student4);
console.log(student1.name, student2.id, student3, student4);


