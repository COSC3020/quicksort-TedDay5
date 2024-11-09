function quicksort(array) {
    pivot = 0;
    while (pivot < array.length && array.length > 1) {
        for (n = 0; n < array.length; n++) {
            if (n != pivot && pivot != array.length - 1) {
                if (array[n] < array[pivot] && n > pivot) {
                    temp = array[n];
                    for (i = n; i >= pivot; i--) {
                        array[i] = array[i - 1];
                    }
                    array[pivot] = temp;
                }
            }
        }
        pivot++;
    }
    return array;
}
