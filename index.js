const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(arr){
    let output = [];
    for (let i = 0; i<2; i++){
        output.push(arr[i])
    }
    return output
}

function returnLastTwoDrivers(arr){
    let ans = []
    for(let i = arr.length-2; i<arr.length;i++){
        ans.push(arr[i])
    }
    return ans
}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function (fare){
        return fare * integer;
    }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(arraryOfDrivers, fn){
    return fn(arraryOfDrivers);
}