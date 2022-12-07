
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, schoolName){
        super(name,id, email, 'Intern')
        this.schoolName = schoolName
    }
    getSchoolName(){
        return this.schoolName
    }


}

module.exports = Intern;
