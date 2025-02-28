export{}
let result: Array<number> = []

function dataType(nArray: Array<any>){
    const length = nArray.length

    for (let i: number = 0; i < length; i++) {
      let dataType = typeof(nArray[i]);
      console.log(dataType)
      if(dataType !== "object" ){
        result.push(nArray[i])
      } 
    }
    return result
}

console.log(dataType([1, [], undefined, {}, "string", {}, []]))