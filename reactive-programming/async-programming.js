//-----------------------------------
// Me
//-----------------------------------

const { Subject } = require("rxjs");
const { filter, map, bufferCount } = require("rxjs/operators");

const trainer = {
  getTopicAsync() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("resolving promise");
        resolve("NG");
      }, 3000);
    });
  },
  getTopicsAsync() {
    const stream = new Subject();
    let n = 0;
    const interval = setInterval(() => {
      n++;
      console.log("training propagating data/event into stream");
      stream.next(n);
      if (n === 10) {
        stream.complete();
        clearInterval(interval);
      }
    }, 2000);
    return stream;
  },
};

//-----------------------------------
// You
//-----------------------------------

const employee = {
  dolearnAndWork() {
    console.log("employee requesting topic on trainer");
    let promise = trainer.getTopicAsync();
    console.log("employee got promise, defer action to future");
    promise
      .then((topic) => {
        console.log("employee learning " + topic);
      })
      .catch((err) => {
        console.log("employee handling " + err);
      });
    console.log("employee doing other work if exist");
  },
  dolearnAndWorkV2() {
    console.log("employee requesting topics on trainer");
    const stream = trainer.getTopicsAsync();
    console.log("employee got stream, defer action to future");
    stream
      .pipe(filter((t) => t % 2 === 0))
      .pipe(map((t) => t * t))
      .pipe(bufferCount(2))
      .subscribe({
        next: (topic) => {
          console.log("employee learning " + topic);
        },
        error: (err) => {
          console.log("employee handling " + err);
        },
        complete: () => {
          console.log("thanks trainer for all topics");
        },
      });
  },
};

employee.dolearnAndWorkV2();
