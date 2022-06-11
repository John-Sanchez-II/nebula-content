class Shoes{
    constructor (name, size, color, age){
        this.name= name
        this.size= size;
        this.color = color;
        this.age = age;
    }

    sneakers(){
        console.log( "My " + this.name +  " ,size " + this.size + " are " + this.color + "and Ive had them for " + this.age)
    }

}

const Lems = new Shoes(' Lems ', ' 10 ', ' blue ', '3 years')

const vivos = new Shoes("Vivos", '10','brown', "5 years" )

const Reebok = new Shoes( 'Reebok', '10', 'red & blue', "8 years")

console.log(Lems.sneakers())