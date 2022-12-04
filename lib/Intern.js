
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name,id, email, 'Intern')
        this.school = school
    }
    getSchool(){
        return this.school
    }

    // constructor(name, id, email, githubUser) { 
    //     super(name,id,email)
    //     this.github = githubUser
}

module.exports = Intern;
