
// 7.   Given a list of people (all objects) list people over the age of 20 and under the age of 35 in order of youngest to oldest


const people1 = [
    { name: "Dan", age: 12 },
    { name: "Joe", age: 33 },
    { name: "Samantha", age: 67 },
    { name: "Jocelyn", age: 23 },
    { name: "Sasha", age: 65 },
    { name: "Tim", age: 25 },
];
people1.sort((a,b)=> a.age > b.age ? 1 : -1)
const youngAdult = people1.filter(people => people.age> 20 && people.age < 35 )

console.log(people1)
console.log(youngAdult)

// 8.   Given an array of objects, each object is a food, including an expiration date
//      return the food that will expire soonest
//      ex food: {name: 'banana', expiration: "Dec 21, 2022"}
//      hint: JavaScript Date object may be helpful
//      // new Date(year, monthIndex, day)
        // const d1 = new Date(2010, 3, 28) => April, 28, 2010

        const food = [
            { name: "Banana", exp: new Date(2021, 11, 21) },
            { name: "Steak", exp: new Date(2022, 0, 5) },
            { name: "Milk", exp: new Date(2022, 0, 8) },
            { name: "Eggs", exp: new Date(2021, 11, 28) },
            { name: "Bread", exp: new Date(2021, 11, 20) },
        ];

        food.sort((a,b)=> a.exp - b.exp ? -1 : 1)

        console.log("name: " + food[0].name + " " + " expirataion " + foodexp.toDateString())
       


       
        function exampleFunction(arr){
            let total = 0;
            for(let i = 0; i < arr.length; i++){
                total += arr[i];
            }
        
            for(let i = 0; i < arr.length; i++){
                if(arr[i] / 2 < i){
                    total -= arr[i] / 2;
                }
            }
            
            return total;
        }


        function binarySearch(arr, key){
            let start = 0;
            let end = arr.length - 1;
        
            while(start <= end){
                let middle = Math.floor((start + end) / 2);
                if(arr[middle] === key){
                    return key + ' is at index ' + middle;
                }else if(arr[middle] < key){
                    start = middle + 1;
                } else {
                    end = middle - 1;
                }
            }
            return -1;
        }

        console.log(binarySearch(nums, 3))