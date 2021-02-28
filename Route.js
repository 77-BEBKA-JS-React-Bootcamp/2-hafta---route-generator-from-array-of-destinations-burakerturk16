const newtask = [
  ['USA', 'BRA'],
  ['BRA', 'UAE'],
  ['UAE', 'JPN'],
  ['JPN', 'PHL'],
];

const first = newtask.map((index) => index[0]);
const second = newtask.map((index) => index[1]);
console.log(first);
console.log(second);
const secondTask = [];
for (let i = 0; i < 5; i++) {
  const start = second.includes(first[i]);
  if(!start && first[i] !== undefined) 
  {
  secondTask.push(first[i]);
  }
  for(let j = 0 ; j<5; j++)
  {
  if(secondTask[i] == second[i])
  {
      if(first[j] !== undefined)
       secondTask.push(second[j]);  
  }
}
}
console.log(secondTask);
