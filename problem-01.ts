{
    // Start

    function sumArray(numbers: number[]): number {
        return numbers.reduce((sum: number, curr: number): number => sum + curr, 0)
    }

    sumArray([1, 2, 3])


    // End
}