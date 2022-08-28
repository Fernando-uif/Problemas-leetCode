def roman_to_int(wordRoman)
    romanNumber = []
   for i in 0..wordRoman.length - 1
        romanNumber.push(wordRoman[i])
   end
   romanNumber = romanNumber.map do |element|
    element.upcase
   end
   total = 0
   romanNumbersValue = {
    "I"=> 1,
    "V"=> 5,
    "X"=> 10,
    "L"=> 50,
    "C"=> 100,
    "D"=> 500,
    "M"=> 1000,
   }
   i = 0
   while i < romanNumber.length
    if (romanNumbersValue[romanNumber[i]].to_i < romanNumbersValue[romanNumber[i + 1]].to_i)
        total += (romanNumbersValue[romanNumber[i + 1]].to_i) - (romanNumbersValue[romanNumber[i ]].to_i)
        i += 2
    else 
        if (romanNumbersValue[romanNumber[i]])
        total += romanNumbersValue[romanNumber[i]].to_i
        i += 1
        end
        
    end
   
    
   end
   p total
   return total
end
roman_to_int("MCMXCIV")
