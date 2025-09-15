type MyFilterCallback<T> = (element: T, searchValue: T, array: T[]) => boolean;

function myFilter<T>(array: T[], searchValue: T, callback: MyFilterCallback<T>): T[] {
  const result: T[] = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], searchValue, array)) {
      result.push(array[index]);
    }
  }
  return result;
}

const numbers1: number[] = [1, 2, 2, 3, 4, 5, 6];

const matchValue: MyFilterCallback<number> = (element, searchValue, arr) => {
  return element === searchValue;
};

console.log(myFilter(numbers1, 2, matchValue));   
console.log(myFilter(numbers1, 10, matchValue));  
