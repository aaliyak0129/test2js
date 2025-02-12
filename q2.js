let obj={
    name:"aaliya",
    age:20,
    greeting:function(){
        console.log(` Hello my name is ${this.name} i am ${this.age} years old `)
    }
}
obj.greeting();