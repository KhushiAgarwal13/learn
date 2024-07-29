// lets use setitmeout
// lets create a ice cream

// once we place an order, production will start

let stocks = {
  Fruits: ["strawberry", "grapes", "banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
// these are the stocks we'll using in our ice cream
function order(fruiname, production) {
    console.log("order has been placed")
    production()
}
function production() {
  setTimeout(() => {
    console.log("production has been started");
    setTimeout(() => {
      console.log(`${stocks.liquid[0]} has been chooosen`);
      setTimeout(() => {
        console.log(`${stocks.holder[0]} is choosen`);
        setTimeout(() => {
          console.log(`${stocks.toppings[1]} has been selected`);
          setTimeout(()=>{
                console.log("Yayyy, ice cream served")
          },0)
        }, 1000);
      }, 3000);
    }, 1000);
  }, 2000);
};
order(0, production);
