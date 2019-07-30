function scaryClown() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("ç√∂√√√√√√√");
    }, 2000);
  });
}

// async function msg() {
//   const msg = await scaryClown();
//   console.log("Message: ", msg);
// }

function who() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("more $$$$$");
    }, 200);
  });
}
function what() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("work smarter");
    });
  });
}

function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("be consistent");
    });
  });
}

async function msg() {
  // const one = await who();
  // const two = await what();
  // const three = await where();
  const [one, two, three] = await Promise.all([who(), what(), where()]);
  console.log(`${two} ${three} ${one}`);
}

//console.log(msg());

async function hello() {
  return `Hello Brarian`;
}
const b = hello();
//b.then(i => console.log(i.toUpperCase()));

const ms = async function() {
  const mstwo = await hello().then(i => console.log("inside ms ", i));
};

const sat = async () => {
  const msg = await hello();
  console.log("inside sat   ", msg);
};

function above5() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return new Promise((resolve, reject) => {
    const val = arr[Math.floor(Math.random() * arr.length)];

    val > 5
      ? resolve(`greater than 5 || ${val}`)
      : reject(`less than 6 || ${val}`);
  });
}

async function above5ErrorHandling() {
  try {
    const res = await above5();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
