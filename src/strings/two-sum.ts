const twoSum = (nums:number[], target:number) => {
  const valueIndex = new Map()

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
     
    if (valueIndex.has(diff)){
      return [valueIndex.get(diff), i]
    }else{
      valueIndex.set(nums[i], i)
    }
  }
}

const result = twoSum([1, 2, 3, 4, 5, 6], 8)
console.log(result)

