import { Day1 } from "./day1";

let day: Day1;

const setup = (): void => {
  const arr1 = [3, 4, 2, 1, 3, 3];
  const arr2 = [4, 3, 5, 3, 9, 3];

  day = new Day1(arr1, arr2);
};

describe("Day1", () => {
  it("initializes successfully", () => {
    setup();
    expect(day).toBeTruthy();
  });

  it('', () => {
    
  })
});
