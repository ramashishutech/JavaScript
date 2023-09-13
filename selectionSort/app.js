

// this is selection sort


var arr=[8,0,7,1,3,-1];

function selectionSort(arr) {

    var temp = 0;
    var l=arr.length//arr.lenght equl to variable declear l
    for (var i = 0; i < l; ++i) {
        for (var j = i + 1; j < l; ++j) {
            if (arr[i] > arr[j]) { // compare element with the reset of other element
                temp = arr[i];  // swap the valuse from smallest to gretest
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
    
}

console.log ( selectionSort(arr));
