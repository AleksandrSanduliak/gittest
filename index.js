
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


