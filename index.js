const { getPeople } = require('./service');
const {
  executeForIn,
  executeForOf,
  executeMap,
  executeFor,
  executeReduce,
  executeFilter,
  executeForEach,
  executeMyMap,
  executeMyFilter,
  executeMyReduce,
}= require('./iterators');

async function main() {
  const people =  await getPeople('lars');

  const namesFor = executeFor(people);

  const namesForIn = executeForIn(people);

  const namesForOf = executeForOf(people);

  const namesMap = executeMap(people);

  const namesMyMap = executeMyMap(people);

  const femaleFilter = executeFilter(people);

  const maleFilter = executeMyFilter(people);

  const heightReduce = executeReduce(people);

  const namesForEach = executeForEach(people);

  const heightMyReduce = executeMyReduce(people);

  console.log(`
    FOR: ${namesFor}
    FOR IN: ${namesForIn}
    FOR OF: ${namesForOf}
    FOR EACH: ${namesForEach}
    MAP: ${namesMap}
    MY MAP: ${namesMyMap}
    FILTER: ${femaleFilter}
    MY FILTER: ${maleFilter}
    REDUCE: ${heightReduce}
    MY REDUCE: ${heightMyReduce}
  `);
}
main();