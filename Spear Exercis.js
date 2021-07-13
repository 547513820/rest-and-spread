function filterOutOdds() {
    let nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

const filterOutOdds = (...arg) => {
    arg.filter(num=>num%2 === 0);
}

const findMin = (...arg) => {
   return Math.min(...arg);
}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...arg) => {
    [...arr, ...arg.map(v => v* 2)];
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
 let random_index = Math.floor(Math.random() * items.length);
    let new_arr = [...items];
    new_arr.pop(new_arr[random_index]);
    return new_arr;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return new_arr = [...array1,...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let new_obj = {...obj};
    new_obj[key] = val;
    return new_obj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return { ...obj1, ...obj2 };
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}