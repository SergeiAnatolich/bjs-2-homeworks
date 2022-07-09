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
  let isTrottled = false;
  return function() {
    if(isTrottled) {
      return;
    }
    func();
    isTrottled = true;
    setTimeout(() => isTrottled = false, delay);
  }
}

function debounceDecorator2(func, delay) {
  let isTrottled = false;
  let count = null;
  return function() {
    count++;
    if(isTrottled) {
      return;
    }
    function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find(item => item.hash === hash);
    if (objectInCache) {
        console.log("Из кэша: " + objectInCache.value);
        return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args);
    cache.push({hash: hash, value: result, count: count}) ;
    if (cache.length > 5) { 
      cache.shift(); 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
    }
    isTrottled = true;
    setTimeout(() => isTrottled = false, delay);
  }
}
