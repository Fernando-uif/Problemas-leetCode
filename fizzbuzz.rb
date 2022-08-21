# if the number is divisible by 3, output fizz
# if the number is divisible by 5 output buzz
# if the number is divisible by Both 3 and 5 output fizzbuyzz


def fizzbuzz(number)
    if (number % 3).to_i == 0 && (number % 5).to_i == 0
        puts ("fizzbuzz")
    elsif (number % 3).to_i == 0 
        puts("fizz")
   elsif (number % 5).to_i == 0
        puts("buzz")
   else
        puts("Intente con otro numero por favor")
   end
end

p "Ingrese el numero"
number = gets.chomp.to_i;

fizzbuzz(number);


def fizzbuzz2(number)
    i = 0
    while i < number
        if (i % 3).to_i == 0 && (i % 5).to_i == 0
                    puts ("fizzbuzz: #{i}")
                elsif (i % 3).to_i == 0 
                    puts("fizz: #{i}")
               elsif (i % 5).to_i == 0
                    puts("buzz: #{i}")
              
               end
        i += 1
    end
end

fizzbuzz2(25)