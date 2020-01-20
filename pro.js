var student = function(){
    this.name="khushbu";
    this.age=20;
    this.email="khushbu2gmail.com"
}



student.prototype={
    address:"surat",
    getName:function(){
        return this.name;
    }
}

var stud= new student();

console.log(stud.address);




