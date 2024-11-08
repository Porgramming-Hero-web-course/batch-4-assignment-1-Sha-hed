{
    // Start

    const countWordOccurrences =(mS:string,sS:string):number=>{
        mS = mS.toLowerCase();
        sS = sS.toLowerCase();
        const temp:string[] = mS.split(' ')
        let count:number = 0;
        temp.forEach((word:string):void=>{
            if(word === sS) count+=1
        })
        return count
    }

    const answer = countWordOccurrences("I love typescript", "typescript");
    console.log(answer)

    // End
}