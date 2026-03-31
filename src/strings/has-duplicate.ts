const hasDuplicate = (nums:number[]) => {
  const hashSet = new Set()

  for (let i = 0; i < nums.length; i++) {
    if(hashSet.has(nums[i])){
      return true 
    }else{
      hashSet.add(nums[i])
    }
  }
  return false
} 

const result = hasDuplicate([1, 2, 3, 4])
console.log(result)
