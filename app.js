const Singleton = (function(){
  let instance;

  function createInstance(){
    const object = new Object({name: 'John'});
    return object;
  }

  return {
    getInstance: function(){
      if (!instance){
        instance = createInstance();
      }
      
      return instance;
    }
  }
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// console.log(instance1);

console.log(instance1 === instance2);  // equals true because you can't have more than 1 instance with this pattern

