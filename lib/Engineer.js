
const Employee = require("./Employee");

class Engineer extends Employee {
constructor(name, id, email, githubUser) { 
    super(name,id,email)
    this.github = githubUser

}
getGithub(){
    return this.github
}

getRole(){
    return 'Engineer'
}



}
module.exports = Engineer;
