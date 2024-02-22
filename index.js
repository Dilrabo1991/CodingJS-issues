//!? First and Last 6
// Check if the first or last element in an array is 6
function firstLast6(nums) {
    if (nums[0] === 6 || nums[nums.length - 1] === 6) {
        return true;
    }
    return false;
}
//? Middle Way
function middleWay(a, b) {
    return [a[1], b[1]]
}
//? Make Middle
function makeMiddle(nums) {
    let middle = Math.floor(nums.length / 2)
    return [nums[middle - 1], nums[middle]]
}
//? Same First Last
function sameFirstLast(nums) {
    if (nums.length == 0) {
        return false
    }
    if (nums.length == 1 || nums[0] == nums[nums.length - 1]) {
        return true
    }
    return false
}

//? Make Ends
function makeEnds(nums) {
    return [nums[0], nums[nums.length - 1]]
}

//? Plus Two
function plusTwo(a, b) {
    let newArr = [];
    for (let i = 0; i < a.length; i++) {
        newArr.push(a[i]);
    }
    for (let i = 0; i < a.length; i++) {
        newArr.push(b[i]);
    }
    return newArr
}
//? ConCat
function plusTwo(a, b) {
    let newArr = a.concat(b)
    return newArr
}

function plusTwo(a, b) {
    let newArr = ([...a, ...b])
    return newArr
}
//? Make Pi
function makePi() {
    return [3, 1, 4]
}
//? Has 23
function has23(nums) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 2 || nums[i] == 3) {
            return true
        }
    }
    return false
}
//? Swap Ends
function swapEnds(nums) {
    let temp = nums[0]
    nums[0] = nums[nums.length - 1]
    nums[nums.length - 1] = temp
    return nums
}


//? Common Ends
function commonEnd(a, b) {
    if (a[0] == b[0] || a[a.length - 1] == b[b.length - 1]) {
        return true
    }
    return false
}
//? No 2, 3
function no23(nums) {
    if (nums.includes(2) || nums.includes(3)) {
        return false
    }
    return true
}
//? Middle Three
function midThree(nums) {
    let middle = Math.floor(nums.length / 2)

    return [nums[middle - 1], nums[middle], nums[middle + 1]]
}
















