
Who likes it?
function likes(names) {
  const like = 'likes this'
  if(names.length === 0) return 'no one likes this'
  else if(names.length === 1) return `${names[0]} ${like}`
  else if(names.length === 2) return `${names[0]}, ${names[1]} ${like}`
  else if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} ${like}`
  else if(names.length >= 4 ) return `${names[0]}, ${names[1]} and ${names.length - 2} others ${like}`
}
console.log(likes(['Peter', 'John', 'Dick', 'Daby']))


Split the bill
function splitTheBill(x) {
let iterable = 0
const length = Object.keys(x).length
for(let key in x) iterable += x[key]
const result = iterable/length
const arr = Object.entries(x).map(([key,value]) => [key, value-result])
const obj = {}
arr.forEach((ev, indx) => obj[ev[0]] = Number(ev[1].toFixed(2)))
return obj
}


Highest and Lowest
function highAndLow(numbers){
let min = numbers[0], max = numbers[0];
const arr = numbers.split(' ')
min = Math.min(...arr)
max = Math.max(...arr)
return [max, min].join(' ')
}





