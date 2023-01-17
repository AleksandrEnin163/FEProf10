let array = [1, 2, 3, 4, 5];
let new_string = array.join(',');

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let count_voters = voters.filter(el => el.voted === true).length;

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const wishes_sum = wishlist.reduce((acc, item) => acc + item.price, 0);


let goods = [
    {id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5]},
    {id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4]},
    {id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3]},
    {id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4]}
];

goods.forEach((el) => {
    el.avgmark = el.marks.reduce((acc, item) => acc + item) / el.marks.length;
	delete el.marks;
});