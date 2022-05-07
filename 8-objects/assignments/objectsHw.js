// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const dreamVehicle = {
    make: 'Nissan',
    model: 'GTR',
    year: 2022,
    allWhellDrive: true,
    weight: '3865-lbs',
    color: 'red',
    variants:['Spec-V', 'Egoist', 'Bolt', 'GTR-50', 'Gentleman', 'Midnight Opal', 'Nismo']

}

console.log(dreamVehicle)



// 2.   Using dot-notation Log to the console 3 properties from the previous object
dreamVehicle.allWhellDrive = 'False'
dreamVehicle.color = 'Green'
dreamVehicle.make = 'R35'
console.log(dreamVehicle)
// 3.   Using bracket-notation Log to the console 3 properties from the previous object

dreamVehicle['year'] = 2020
dreamVehicle['weight'] = '4000-lbs'
delete dreamVehicle.allWhellDrive
console.log(dreamVehicle)

// 4.   Try and log a property that doesn't already exist - what output do we get?

dreamVehicle.unveiling = 2007
console.log(dreamVehicle)

// 5.   Add a new key-value pair to the vehicle. 
//didn't understand the question

// 6.   Using bracket-notation update a property on the vehicle. 
dreamVehicle.variants[1] = 'T-Spec'
console.log(dreamVehicle)
// 7.   Using dot-notation update a property on the vehicle. 

const dreamCar = {
    make: "Corvette",
    model: "Stingray",
    year: 1969,
    convertible: true,
    colorMain: "Turqoiuse",
    colorHighlight: "Bubblegum Pink",
    carIsOn: true,
    trunkContents: ["Basketball", "Chess Set", "Baseball", "Spare Tire"],
    gloveCompartment: ["Sunglasses", "Gloves", "Registration"],
  };

  dreamCar.convertible = false
  dreamCar.trunkContents[2] = 'Kite'
console.log(dreamCar)
// 8.   Create a method for turning your vehicle on

const startCar = ()=> {
    dreamCar.carIsOn = true
}

dreamCar.startCar = startCar

// 9.   Create a method for turning your vehicle off

const turnOffCar = ()=> {
    dreamCar.carIsOn = false
}

dreamCar.turnOffCar = turnOffCar

console.log(dreamCar)

//10.   
//      a. Check if your vehicle is on (it should be off)
//      b. Start your vehicle
//      c. Check if your vehicle is on (it should be on)
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)


 if(!dreamCar.carIsOn){
     dreamCar.startCar()
}
 else if(dreamCar.carIsOn){
    dreamCar.turnOffCar()
}

console.log(dreamCar)



 dreamCar.stopEngine = function (inPark, keyTurned) {
     if (inPark && keyTurned && dreamCar.carIsOn === true) {
    dreamCar.carIsOn = false;
      return "Car is turned off";
     } else if (!inPark && keyTurned && dreamCar.carIsOn === true) {
      return "Please put the car in park";
    } else if (inPark && !keyTurned && dreamCar.carIsOn === true) {
      return "Just in park";
    } else {
     return " The engine is already off";
     }
  };
  dreamCar.startCar()

  // questions 8-10 were already done, fiddled with it but did not really understand what was done