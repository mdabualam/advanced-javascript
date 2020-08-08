const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'},
];

const names = students.map(s => s.name);
const ids = students.map (s => s.id);

const older = students.filter(s => s.id > 40);
const bigger = students.find( s => s.id > 40);

console.log(bigger);

