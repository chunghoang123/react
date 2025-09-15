type Callback3 = (value: number) => void;

function processArray(arr: number[], callback3: Callback3): void {
  arr.forEach((value, index) => {
    setTimeout(() => {
      callback3(value);
    }, (index + 1) * 1000);
  });
}

const printValue: Callback3 = (value: number): void => {
  console.log("Giá trị:", value);
};

processArray([10, 20, 30, 40], printValue);
