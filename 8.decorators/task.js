function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(',');
      let objectInCache = cache.find(item => item.hash === hash);
      if (objectInCache) {
          console.log("Из кэша: " + objectInCache.value);
          return "Из кэша: " + objectInCache.value;
      }
  
      let result = func(...args);
      cache.push({hash: hash, value: result}) ;
      if (cache.length > 5) { 
        cache.shift(); 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isTrottled = false;
  return function() {
    clearTimeout(timeoutId);
    if (isTrottled) {
      timeoutId = setTimeout(() => {
        isTrottled = false;
        func();
      }, delay);
      return;
    }
    func();
    isTrottled = true;
    timeoutId = setTimeout(() => isTrottled = false, delay);
  }
}

function debounceDecorator2(func, delay) {
  let timeoutId = null;
  let isTrottled = false;
  function wrapper() {
    wrapper.count++;
    clearTimeout(timeoutId);
    if (isTrottled) {
      timeoutId = setTimeout(() => {
        isTrottled = false;
        func();
      }, delay);
      return;
    }
    func();
    isTrottled = true;
    timeoutId = setTimeout(() => isTrottled = false, delay);
  }
  wrapper.count = 0;
  return wrapper;
}
