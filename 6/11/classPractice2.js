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


class Shapes {
    constructor(name, sides, height, width){
        this.name= name;
        this.side= sides
        this.height= height;
        this.width= width;
    }
}

class Rectangle extends Shapes{
    constructor(name, sides, height, width){
    super(name, sides, height, width)
}
calculateRectangleArea(){
    return this.height * this.width
}
calculateRectangleVolume(){
    return this.height * this.length * this.width
}
printStatment(){
    console.log("Given a ") + this.name + "with a height of " + this.height + " and a width of " + this.width + " it will have a volume of " + this.calculateRectangleVolume() + "and a surface area of " + this.calculateRectangleArea() 
}
}

const rec1 = new Rectangle('rectangle', 4, 12, 5)

console.log(rec1.calculateRectangleArea())

class Triangle extends Shapes{
    constructor(name, sides, height, width, base){
        super(name, sides, height, width)
        this.base= base
    }
    calculateTriangleArea(){
        return (this.height * this.base)/2
    }
}

const tri1 = new Triangle("Triangle", 3, 54, 77, 8);

console.log("The area of our triangle is " + tri1.calculateTriangleArea())

class Trapezoid extends Shapes{
    constructor(name, sides, height, width, base, base2){
        super(name, sides, height, width)
        this.base= base
        this.base2=base2
    }
    calculateTrapezoidArea(){
        return ((this.base + this.base2) * this.height)/2
    }

    printStatment(){
        console.log("Given a " + this.name + " with a base of " + this.base + " and a second base of " + this.base2 + " it will also have a height of " + this.height + " It's total area is " + this.calculateTrapezoidArea() )
    }

}

const Trap1 = new Trapezoid("Trapezoid", 2, 18, 5, 20, 13);

Trap1.printStatment()


//     structure(){
//         console.log( `Given a ${this.name} with a height of ${this.height} and a base of ${this.base} What would be the Area? `)
//     }
// }
//  const rectangle = new Shapes("rectangle", "25", "73.")

//  console.log(rectangle.structure())

//  class Figure extends Shapes {
//      constructor(name, height, base){
         
//      }
//  }