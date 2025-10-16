const waitfun = (time, message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, time);
  });
};

const orderCoffee = async () => {
  await waitfun(4000, "Make some order");
  await waitfun(3000, "Brewing coffee");
  await waitfun(2000, "Serving coffee");
  await waitfun(1000, "Thank you for your visiting");
};

orderCoffee();
console.log("end");