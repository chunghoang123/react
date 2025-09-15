type Callback2 = () => void;

function delayedCallback(callback: Callback2, delay: number): void {
  setTimeout(callback, delay);
}

const sayHello: Callback2 = () => {
  console.log("Xin chào! Callback đã được gọi sau delay.");
};

delayedCallback(sayHello, 2000);
