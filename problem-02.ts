{
    // Start

    function removeDuplicates(num:number[]):number[]{
        let num1:number[]=[]
        num1.push(num[0])
        num.forEach((n:number):void=>{
            if(num1.indexOf(n)==-1){
                num1.push(n)
            }
        })
        return num1;
    }
    let newArray:number[] = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(newArray)

    //End
}