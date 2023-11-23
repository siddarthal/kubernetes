const { v4: uuidv4 } = require('uuid');
const id = uuidv4();
function print() {
  const now = new Date();
  const iso = now.toISOString();
  console.log(`${iso}: ${id}`);  
}
print(); 
setInterval(print, 5000);