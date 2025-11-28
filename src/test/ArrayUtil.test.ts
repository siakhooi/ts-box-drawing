import {isNoData} from '../main/ArrayUtil';

describe('isNoData', () => {
  test('returns true when row is undefined', () => {
    const values: string[][] = [];
    expect(isNoData(values, 0, 0)).toBe(true);
  });

  test('returns true when cell is undefined', () => {
    const values: string[][] = [[]];
    expect(isNoData(values, 0, 0)).toBe(true);
  });

  test('returns true when cell is empty string', () => {
    const values: string[][] = [['']];
    expect(isNoData(values, 0, 0)).toBe(true);
  });

  test('returns false when cell has value', () => {
    const values: string[][] = [['1']];
    expect(isNoData(values, 0, 0)).toBe(false);
  });

  test('returns false when cell has multi-character value', () => {
    const values: string[][] = [['123']];
    expect(isNoData(values, 0, 0)).toBe(false);
  });

  test('returns true when accessing row beyond array bounds', () => {
    const values: string[][] = [
      ['1', '2'],
      ['3', '4'],
    ];
    expect(isNoData(values, 5, 0)).toBe(true);
  });

  test('returns true when accessing column beyond array bounds', () => {
    const values: string[][] = [
      ['1', '2'],
      ['3', '4'],
    ];
    expect(isNoData(values, 0, 5)).toBe(true);
  });

  test('returns true when accessing negative row index', () => {
    const values: string[][] = [
      ['1', '2'],
      ['3', '4'],
    ];
    expect(isNoData(values, -1, 0)).toBe(true);
  });

  test('returns true when accessing negative column index', () => {
    const values: string[][] = [
      ['1', '2'],
      ['3', '4'],
    ];
    expect(isNoData(values, 0, -1)).toBe(true);
  });

  test('returns false when cell contains whitespace', () => {
    const values: string[][] = [[' ']];
    expect(isNoData(values, 0, 0)).toBe(false);
  });

  test('handles sparse arrays correctly - missing row', () => {
    const values: string[][] = [];
    values[2] = ['1', '2', '3'];
    expect(isNoData(values, 0, 0)).toBe(true);
    expect(isNoData(values, 2, 0)).toBe(false);
  });

  test('handles sparse arrays correctly - missing cell', () => {
    const values: string[][] = [[]];
    values[0][2] = '3';
    expect(isNoData(values, 0, 0)).toBe(true);
    expect(isNoData(values, 0, 2)).toBe(false);
  });

  test('returns false for cell with special characters', () => {
    const values: string[][] = [['@', '#', '$']];
    expect(isNoData(values, 0, 0)).toBe(false);
    expect(isNoData(values, 0, 1)).toBe(false);
    expect(isNoData(values, 0, 2)).toBe(false);
  });

  test('works with 9x9 Sudoku grid', () => {
    const values: string[][] = Array(9)
      .fill(null)
      .map(() => Array(9).fill('5'));
    values[4][4] = '';

    expect(isNoData(values, 0, 0)).toBe(false);
    expect(isNoData(values, 4, 4)).toBe(true);
    expect(isNoData(values, 8, 8)).toBe(false);
  });

  test('returns true when cell is null', () => {
    const values: any[][] = [[null]];
    expect(isNoData(values, 0, 0)).toBe(true);
  });

  test('returns true when row contains null', () => {
    const values: any[][] = [['1', null, '3']];
    expect(isNoData(values, 0, 1)).toBe(true);
  });

  test('returns false when cell has object with non-zero length', () => {
    const values: any[][] = [[{length: 5}]];
    expect(isNoData(values, 0, 0)).toBe(false);
  });

  test('returns true when cell has object with zero length', () => {
    const values: any[][] = [[{length: 0}]];
    expect(isNoData(values, 0, 0)).toBe(true);
  });

  test('returns false when cell has object without length property', () => {
    const values: any[][] = [[{value: 'test'}]];
    expect(isNoData(values, 0, 0)).toBe(false);
  });
});
