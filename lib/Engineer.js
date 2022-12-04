
const Employee = require("./Employee");

class Engineer extends Employee {
constructor(name, id, email, githubUser) { 
    super(name,id,email, 'Engineer')
    this.github = githubUser

}
getGithub(){
    return this.github
}




}
module.exports = Engineer;
