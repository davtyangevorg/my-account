export const areColorsNull = (colors) =>
    colors.every((el) => el.color === null);

export const getFilledColors = (array) => array.filter((el) => el.color);

export const getSizeSum = (items) =>
    items.reduce((acum, el) => acum + el.size, 0);

export const reverseMap = (arr, callback) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(callback(arr[i], i));
    }
    return newArr;
};
