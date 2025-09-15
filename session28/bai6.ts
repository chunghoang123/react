type NextCallback = () => void;

function task1(next: NextCallback): void {
  setTimeout(() => {
    console.log("Task 1 hoàn thành sau 1 giây");
    next();
  }, 1000);
}

function task2(next: NextCallback): void {
  setTimeout(() => {
    console.log("Task 2 hoàn thành sau 1.5 giây");
    next();
  }, 1500);
}

function task3(next: NextCallback): void {
  setTimeout(() => {
    console.log("Task 3 hoàn thành sau 2 giây");
    next();
  }, 2000);
}

// Thực thi tuần tự
task1(() => {
  task2(() => {
    task3(() => {
      console.log("Tất cả task đã hoàn thành");
    });
  });
});
