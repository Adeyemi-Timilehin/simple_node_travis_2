const Instructor_name=process.env.NAME;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${Instructor_name} rocks!`);
    console.log("rock! tester");
    await sleep(5000);
  }
}

main();
