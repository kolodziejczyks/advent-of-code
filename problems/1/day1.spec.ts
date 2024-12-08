import { Day1 } from "./day1";

let day: Day1;
let arr1: Array<number>;
let arr2: Array<number>;

const setup = (): void => {
  day = new Day1();
  arr1 = [3, 4, 2, 1, 3, 3];
  arr2 = [4, 3, 5, 3, 9, 3];
};

describe("Day1", () => {
  beforeEach(() => {
    setup();
  });

  it("initializes successfully", () => {
    expect(day).toBeTruthy();
  });

  it("finds smallest numbers for both arrays", () => {
    const small1 = day.findAndDeleteSmallestNumber(arr1);
    const small2 = day.findAndDeleteSmallestNumber(arr2);

    expect(small1).toEqual(1);
    expect(small2).toEqual(3);
  });

  it("returs correct distance betweeen numbers", () => {
    const distance1 = day.calculateDistance(3, 3);
    const distance2 = day.calculateDistance(1, 4);

    expect(distance1).toEqual(0);
    expect(distance2).toEqual(3);
  });

  it("makes calculation for first number and then goes to another", () => {
    expect(day.iterateOverLists(arr1, arr2)).toEqual([2, 1, 0, 1, 2, 5]);
  });

  it("sums up the whole array", () => {
    expect(day.sumResults(day.iterateOverLists(arr1, arr2))).toEqual(11);
  });
});
