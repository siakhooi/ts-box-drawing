export class Padding {
  private padByColumn: number[] = [];
  private defaultPad = 0;

  setDefault(number_of_spaces: number) {
    this.defaultPad = number_of_spaces;
  }
  setPadding(column: number, number_of_spaces: number) {
    this.padByColumn[column] = number_of_spaces;
  }
  getPad(column: number): number {
    return this.padByColumn[column] === undefined
      ? this.defaultPad
      : this.padByColumn[column];
  }
  padAll(numbers_of_spaces: number[]) {
    numbers_of_spaces.forEach((value, index) => {
      this.setPadding(index, value);
    });
  }
}
