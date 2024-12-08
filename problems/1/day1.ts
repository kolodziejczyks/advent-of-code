export class Day1 {
  public findAndDeleteSmallestNumber(arr: Array<number>): number | undefined {
    arr.sort();

    if (arr.length === 1) {
      const result = arr[0];
      arr.pop();
      return result;
    }

    return arr.shift();
  }

  public calculateDistance(num1, num2): number {
    return Math.abs(num1 - num2);
  }

  public iterateOverLists(
    arr1: Array<number>,
    arr2: Array<number>
  ): Array<number> {
    let results: Array<number> = [];
    const fullLength = arr1.length;

    if (arr1.length !== arr2.length) {
      throw new Error("Length not equal! Check the input arrays.");
    }

    for (let i = 0; i < fullLength; i++) {
      let j1 = this.findAndDeleteSmallestNumber(arr1);
      let j2 = this.findAndDeleteSmallestNumber(arr2);

      results.push(this.calculateDistance(j1, j2));
    }

    return results;
  }

  public sumResults(array): number {
    return array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  }
}
