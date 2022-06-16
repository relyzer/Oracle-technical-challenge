import generateUniqueID from "./generateUniqueID";

describe("generateUniqueID utility function", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  test("should successfully produce unique IDs", () => {
    const testValueOne = generateUniqueID();
    const testValueTwo = generateUniqueID();
    expect(testValueOne).not.toStrictEqual(testValueTwo);
  });
});
