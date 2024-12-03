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

Worse-case runtime compexity: $\Theta$($n^2$)

While partitioning it iterates through the subarray to place elements in the correct positions relative to the pivot.
A subarray of size n would take n time to process because it passes through the array only once.

The case where its reverse sorted or already sorted.
The partitioning will need to make smaller subarrays.
There would be n partitioning steps taking n time.
n * n giving a complexity of $\Theta$($n^2$)

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”
