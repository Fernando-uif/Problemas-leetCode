def running_sum(nums)
    saveArray = []
    for i in 0..nums.length - 1
        (!saveArray[i - 1]) ? saveArray.push(nums[i].to_i) : saveArray.push(nums[i].to_i + saveArray[ i - 1].to_i)
    end
    p saveArray
    return saveArray
end
running_sum([1,2,3,4])