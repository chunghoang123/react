type MyCallback<T> = (currentValue: T, index: number, array: T[]) => void;

function myForEach<T>(array: T[], callback: MyCallback<T>): void {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];

const printInfo: MyCallback<number> = (value: number, index: number, arr: number[]): void => {
  console.log("Giá trị:", value, "| Vị trí:", index, "| Mảng:", arr);
};

myForEach(numbers, printInfo);
