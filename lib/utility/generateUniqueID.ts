// Code to generate unique ID, referenced from:
// https://stackoverflow.com/questions/3231459/create-unique-id-with-javascript

const generateUniqueID = (): string => {
  return Date.now().toString(36) + Math.random().toString(36);
};

export default generateUniqueID;
