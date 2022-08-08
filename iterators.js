'use strict';


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
    names.push(array[index].name);
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

const executeFilter = (array) => {
  return array.filter((item) => item.gender === 'female').map((people) => people.name);
}

const executeReduce = (array) => {
  return array.map((item) => +item.height).reduce((previous, current) => previous + current, 0);
}

const executeForEach = (array) => {
  const names = [];
  array.forEach((item)=> names.push(item.name));
  return names;
}

module.exports = {
  executeFor,
  executeForIn,
  executeForOf,
  executeMap,
  executeFilter,
  executeReduce,
  executeForEach,
};