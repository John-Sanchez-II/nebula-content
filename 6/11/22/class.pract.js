class Animal {
    constructor(name, carnivore, location){
        this.name= name;
        this.carnivore = carnivore;
        this.location= location;
    } 
    creature(){
        console.log( " The " + this.name + ' lives in ', this.location )
    }
    
}

    const honeyBadger = new Animal( 'Honey Badger', true, 'Africa' )

    const blackMamba =  new Animal( 'Black Mamba', true, 'Sub Sahara Africa')

    const spiritBear =  new Animal( 'Spirit Bear', true,'Princess Royal and Gribbell Islands ' )

    console.log(spiritBear.creature())

