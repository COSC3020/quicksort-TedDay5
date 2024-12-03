function quicksort(array) {
    let stack = [];

    stack.push({low: 0, high: array.length - 1})

    while(stack.length > 0) {
        let {low, high} = stack.pop();

        if(low >= high) {
            continue;
        }
        let pivot = low;

        for(let n = low + 1; n <= high; n++) {
            if(array[n] < array[low]) {
                pivot++;
                [array[pivot], array[n]] = [array[n], array[pivot]];
            }
        }
        [array[low], array[pivot]] = [array[pivot], array[low]];
        if(pivot - 1 > low) {
            stack.push({low: low, high: pivot - 1});
        }
        if(pivot + 1 < high) {
            stack.push({low: pivot + 1, high: high});
        }
    }
    return array;
}
