type Callback4 = (value: number) => void;

function displayNumbers(callback4: Callback4, delay: number): void {
  let count: number = 1;
  setInterval(() => {
    callback4(count);
    count++;
  }, delay);
}

const printNumber: Callback4 = (value: number): void => {
  console.log("Giá trị:", value);
};

displayNumbers(printNumber, 1000);
