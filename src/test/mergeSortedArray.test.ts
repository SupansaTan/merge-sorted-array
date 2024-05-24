import { describe, test, expect } from "@jest/globals";
import { getValueFromIndex, merge } from "../mergeSortedArray";

describe('getValueFromIndex function', () => {
  test('get number from collection by correct index', () => {
    let collection = [1, 2, 5, 9, 10, 15, 20, Number.MAX_VALUE];
    let index = collection.length - 1;

    let result = getValueFromIndex(collection, index);
    expect(result).toEqual(collection[index]);
  });

  test('get number from collection by incorrect index', () => {
    let collection = [1, 2, 5, 9, 10, 15, 20, Number.MAX_VALUE];
    let index = -1;

    let result = getValueFromIndex(collection, index);
    expect(result).toEqual(Number.MAX_VALUE);
  });

  test('get number from collection by index that out of length', () => {
    let collection = [1, 2, 5, 9, 10, 15, 20, Number.MAX_VALUE];
    let index = collection.length;

    let result = getValueFromIndex(collection, index);
    expect(result).toEqual(Number.MAX_VALUE);
  });
});