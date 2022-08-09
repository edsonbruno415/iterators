'use strict';

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
}

Array.prototype.myFilter = function (callback) {
  const array = [];
  for (let index = 0; index < this.length; index++) {
    const result = callback(this[index], index, this)
    if (result) array.push(this[index]);
  }
  return array;
}

Array.prototype.myReduce = function (callback, initialValue) {
  const initialValueIsEmpty = [undefined, null].includes(initialValue);
  let previous = initialValue, index = 0;
  if(initialValueIsEmpty){
    index = 1;
    previous = this[0];
  }
  for (; index < this.length; index++) {
    previous = callback(previous, this[index], index, this);
  }
  return previous;
}


const executeFor = (array) => {
  const names = [];
  for (let i = 0; i < array.length; i++) {
    names.push(array[i].name);
  }
  return names;
}

const executeForIn = (array) => {
  const names = [];
  for (let index in array) {
    const result = array[index].name;
    names.push(result);
  }
  return names;
}

const executeForOf = (array) => {
  const names = [];
  for (let item of array) {
    names.push(item.name);
  }
  return names;
}

const executeMap = (array) => {
  return array.map((item) => item.name);
}

const executeMyMap = (array) => {
  return array.myMap((item) => item.name);
}

const executeFilter = (array) => {
  return array.filter((item) => item.gender === 'female').map((people) => people.name);
}

const executeMyFilter = (array) => {
  return array.myFilter((item) => item.gender === 'male').map((people) => people.name);
}

const executeReduce = (array) => {
  return array.map((item) => +item.height).reduce((previous, current) => previous + current, 0);
}

const executeMyReduce = (array) => {
  return array.map((item) => +item.height).myReduce((previous, current) => previous + current, 0);
}

const executeForEach = (array) => {
  const names = [];
  array.forEach((item) => names.push(item.name));
  return names;
}

module.exports = {
  executeFor,
  executeForIn,
  executeForOf,
  executeMap,
  executeMyMap,
  executeFilter,
  executeReduce,
  executeForEach,
  executeMyFilter,
  executeMyReduce,
};