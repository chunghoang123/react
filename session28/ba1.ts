type Callback = (result: number) => void;

function calculate(a: number, b: number, callback: Callback): void {
  const sum: number = a + b;
  callback(sum);
}

const printResult: Callback = (result: number): void => {
  console.log("Kết quả phép tính là:", result);
};

calculate(5, 7, printResult);
