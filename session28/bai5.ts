type Callback5 = (message: string) => void;

function checkCondition(condition: boolean, callback5: Callback5): void {
  setTimeout(() => {
    if (condition) {
      callback5("Điều kiện đúng");
    } else {
      callback5("Điều kiện sai");
    }
  }, 1000);
}

const printMessage: Callback5 = (message: string): void => {
  console.log(message);
};

// Ví dụ gọi thử
checkCondition(true, printMessage);
checkCondition(false, printMessage);
