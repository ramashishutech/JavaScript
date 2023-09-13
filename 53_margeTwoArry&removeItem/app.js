// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr3 = arr1.concat(arr2);
    let items = [];

    // loop through array
    for(let i of arr3) {
        if(items.indexOf(i) === -1) {
            items.push(i);
        }
    }
    console.log(items);
}

const array1 = ['ashish','rahul','anand','anish'];
const array2 = ['anish','anmol','pankaj','rahul','anil']


getUniqueAfterMerge(array1, array2);