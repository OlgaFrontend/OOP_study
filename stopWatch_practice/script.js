function StopWatch() {
  let starTime, endTime, running, duration = 0;

  this.start = function () {
    if(running)
      throw new Error('Stopwatch is running!');

    running = true;

    starTime = new Date();
  }

  this.stop = function () {
    if(!running)
      throw new Error('Stopwatch was stopped!');
    
    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - starTime.getTime()) / 1000;
    duration += seconds;
  }

  this.reset = function () {
    starTime = null;
    endTime = null;
    running = false;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    }
  });
}

const sw = new StopWatch();