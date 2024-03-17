process.stdout.write('hello from spinner1.js... \rheyyy\n');

let timer = 0;
let spinning = true;

while (timer < 3000) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, timer += 200);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, timer += 200);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, timer += 200);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, timer += 200);
}



