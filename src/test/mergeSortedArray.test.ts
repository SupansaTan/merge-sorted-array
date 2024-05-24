import { describe, test, expect } from "@jest/globals";
import { getValueFromIndex, merge } from "../mergeSortedArray";

describe('getValueFromIndex function', () => {
  test('get number from collection by correct index', () => {
    let collection: number[] = [1, 2, 5, 9, 10, 15, 20, Number.MAX_VALUE];
    let index: number = collection.length - 1;

    let result = getValueFromIndex(collection, index);
    expect(result).toEqual(collection[index]);
  });

  test('get number from collection by incorrect index', () => {
    let collection: number[] = [1, 2, 5, 9, 10, 15, 20, Number.MAX_VALUE];
    let index: number = -1;

    let result = getValueFromIndex(collection, index);
    expect(result).toEqual(Number.MAX_VALUE);
  });

  test('get number from collection by index that out of length', () => {
    let collection: number[] = [1, 2, 5, 9, 10, 15, 20, Number.MAX_VALUE];
    let index: number = collection.length;

    let result = getValueFromIndex(collection, index);
    expect(result).toEqual(Number.MAX_VALUE);
  });
});

describe('merge function', () => {
  test('merge triple collection and sort correctly', () => {
    let collection_1: number[] = [1, 2, 5, 9, 10, 15, 20, Number.MAX_VALUE];
    let collection_2: number[] = [Number.MAX_VALUE, 16, 8 ,2, 1, 0];
    let collection_3: number[] = [2, 3, 8, 13, Number.MAX_VALUE];

    let expectResult = collection_1.concat(collection_2, collection_3);
    expectResult.sort((a, b) => a - b);

    let actualResult = merge(collection_1, collection_2, collection_3);
    expect(actualResult).toEqual(expectResult);
  });

  test('merge couple collection with empty collection and sort correctly', () => {
    let collection_1: number[] = [1, 2, 5, 9, 10, 15, 20, Number.MAX_VALUE];
    let collection_2: number[] = [];
    let collection_3: number[] = [2, 3, 8, 13, Number.MAX_VALUE];

    let expectResult = collection_1.concat(collection_3);
    expectResult.sort((a, b) => a - b);

    let actualResult = merge(collection_1, collection_2, collection_3);
    expect(actualResult).toEqual(expectResult);
  });

  test('merge large collection and sort correctly', () => {
    let collection_1: number[] = Array.from(Array(4000000).keys());
    let collection_2: number[] = Array.from(Array(100000).keys()).reverse();
    let collection_3: number[] = Array.from(Array(300000).keys());

    let expectResult = collection_1.concat(collection_2, collection_3)
    expectResult.sort((a, b) => a - b);

    let actualResult = merge(collection_1, collection_2, collection_3);
    expect(actualResult).toEqual(expectResult);
  });
});