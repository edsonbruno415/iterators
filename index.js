const { getPeople } = require('./service');
const {
  executeForIn,
  executeForOf,
  executeMap,
  executeFor,
  executeReduce,
  executeFilter,
  executeForEach,
}= require('./iterators');

async function main() {
  const people =  await getPeople('lars');

  const namesFor = executeFor(people);

  const namesForIn = executeForIn(people);

  const namesForOf = executeForOf(people);

  const namesMap = executeMap(people);

  const femaleFilter = executeFilter(people);

  const heightReduce = executeReduce(people);

  const namesForEach = executeForEach(people);

  console.log(`
    FOR: ${namesFor}
    FOR IN: ${namesForIn}
    FOR OF: ${namesForOf}
    MAP: ${namesMap}
    FILTER: ${femaleFilter}
    REDUCE: ${heightReduce}
    FOR EACH: ${namesForEach}
  `);
}
main();