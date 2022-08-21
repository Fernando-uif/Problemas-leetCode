# Count of values in a Hash
# Implement a value_count method and accepts a hash and a value as an argument. The method should return the number of times the value appears among all the values in the hash.

def value_count(hash, number) 
    value_numbers = []
    hash.each do |element| 
        value_numbers.push(element[1])
    end
    value_numbers.count(number)
end
