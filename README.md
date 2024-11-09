# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Worse-case runtime compexity: $\Theta$($n^3$)

This is due to the outer loop runing n times as it iterates through the array.
The first inner loop also runs n times.
The case where its reverse sorted, will need to move n elements then n - 1 elements then n - 2 elements until it reaches the 2nd to last element which would make it sorted.

This simplifies into n(n(n-2)) which is $n^3$ - 2 $n^2$ so finaly $\Theta$($n^3$)
