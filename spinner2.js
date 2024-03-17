let timer = 0;
const list = ["|", "/", "-", "\\"];

while (timer < 5000) {
  for (let item of list) {
    setTimeout(() => {
      process.stdout.write(`\r${item}   `);
    }, timer += 200);
  }
}


