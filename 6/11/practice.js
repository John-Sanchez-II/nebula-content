//  const dog = 'woof!';

// const dog2 ={
// name: 'max',
// color: 'gray',
// speak:(){
// console.log("woof!")
// }
// };

// console.log(dog2.speak())
// class string is capital
//  class Forum {

// }

// const user4 = new User("Bayley");

// // Creating an instance of a Forum
// const generalForum = new Forum("General Forum");

// // Using properties on our objects (instances) to log a custom string
// console.log(`${generalForum.subject} has these comments: ${generalForum.comments}`);

// // Using a method with our user instance, that we defined in our User class 
// user4.comment(generalForum, "Bayley's farm has the best free range eggs in town!");

// // Using a method with our forum instance, that we defined in our Forum class 
// generalForum.showComments();

// // Here We're creating a new forum instance
// const troubleShootingforum = new Forum("Troubleshooting");

// // Here we are using a method from our user instance...
// user4.comment(troubleShootingforum, "I don't know where to pickup the eggs.");

// // Again, using a method from our forum instance
// troubleShootingforum.showComments();

class Fruit {
    constructor(name, color, seeded){
        this.name = name;
        this.color = color;
        this.seeded = seeded;
    }
    bite(){
        console.log("this " + this.name + " is Delicious!")
    }
    makeJuice(){
        console.log('here, have some ' + this.name + ' juice')
    }
}

const cherry = new Fruit( 'cherry', 'red', true);
console.log(cherry.makeJuice());

class Vegetables extends Fruit {
    constructor(name, color, seeded, isSweet){
    super(name, color, seeded);
    this.isSweet = isSweet;
}
}
    const celery = new Vegetables('celery', 'green', false, false);

celery.makeJuice()

const cucumber = new Vegetables("cucumber", 'green', true, false);
cucumber.bite()

