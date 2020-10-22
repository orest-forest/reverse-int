module.exports = function reverse(n) {
    let str = n + '';
    let arr = str.split('');
    let newArr = [];
    if (arr[0] === '-') {
        arr.splice(0, 1);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }

    newArr = newArr.join('');
    return +newArr
};
