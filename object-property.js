const students = [
    {id: 1, name:'Muhib khan', Occupation: 'Poet'},
    {id: 2, name:'Kazi Nazrul Islam', Occupation: 'Poet'},
    {id: 3, name:'Robindronath Tagor', Occupation: 'Poet'},
]

const poetNames0 = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i].name;
    poetNames0.push(element);
    
}
console.log(poetNames0);

const students0 = [
    {id: 1, name:'Muhib khan', Occupation: 'Poet'},
    {id: 2, name:'Kazi Nazrul Islam', Occupation: 'Poet'},
    {id: 3, name:'Robindronath Tagor', Occupation: 'Poet'},
]
const poetNames1 = students0.map(x => x.name);
console.log(poetNames1);

const students1 = [
    {id: 1, name:'Muhib khan', Occupation: 'Poet'},
    {id: 2, name:'Kazi Nazrul Islam', Occupation: 'Poet'},
    {id: 3, name:'Robindronath Tagor', Occupation: 'Poet'},
    {id: 4, name:'Jibonanondo dash', Occupation: 'Poet'},
    {id: 5, name:'Lionel Mesee', Occupation: 'Football Player'},
    {id: 6, name:'Ronaldo', Occupation: 'Football Player'},
    {id: 5, name:'Mashrafee bin Mortaja', Occupation: 'Cricket Player'},
    {id: 5, name:'Neymar', Occupation: 'Football Player'},
    {id: 5, name:'Sakib Al Hasan', Occupation: 'Cricket Player'},
]
const footballPlayer = students1.filter(x => x.Occupation === 'Football Player');
console.log(footballPlayer);

const students2 = [
    {id: 1, name:'Muhib khan', Occupation: 'Poet'},
    {id: 2, name:'Kazi Nazrul Islam', Occupation: 'Poet'},
    {id: 3, name:'Robindronath Tagor', Occupation: 'Poet'},
    {id: 4, name:'Jibonanondo dash', Occupation: 'Poet'},
    {id: 5, name:'Lionel Mesee', Occupation: 'Football Player'},
    {id: 6, name:'Ronaldo', Occupation: 'Football Player'},
    {id: 7, name:'Mashrafee bin Mortaja', Occupation: 'Cricket Player'},
    {id: 8, name:'Neymar', Occupation: 'Football Player'},
    {id: 9, name:'Sakib Al Hasan', Occupation: 'Cricket Player'},
    {id: 10, name:'Shoaib akter', Occupation: 'Cricket Player'},
]
const cricketPlayer = students2.filter(x => x.Occupation === 'Cricket Player');
console.log(cricketPlayer);

const students3 = [
    {id: 1, name:'Muhib khan', Occupation: 'Poet'},
    {id: 2, name:'Kazi Nazrul Islam', Occupation: 'Poet'},
    {id: 3, name:'Robindronath Tagor', Occupation: 'Poet'},
    {id: 4, name:'Jibonanondo dash', Occupation: 'Poet'},
    {id: 5, name:'Lionel Mesee', Occupation: 'Football Player'},
    {id: 6, name:'Ronaldo', Occupation: 'Football Player'},
    {id: 7, name:'Mashrafee bin Mortaja', Occupation: 'Cricket Player'},
    {id: 8, name:'Neymar', Occupation: 'Football Player'},
    {id: 9, name:'Sakib Al Hasan', Occupation: 'Cricket Player'},
    {id: 10, name:'Shoaib akter', Occupation: 'Cricket Player'},
]
const poet = students3.filter(x => x.Occupation === 'Poet');
console.log(poet);


