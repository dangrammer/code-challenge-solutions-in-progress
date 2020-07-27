read divisor
for i in `cat`
  do
    ((sum += $i))
done
printf "%.3f" `echo $sum / $divisor | bc -l`

# ALTERNATIVE
# grab first line of input, set as divisor
read divisor
# compile remaining lines of imput into array
arr=(`cat`) 
# transform arr of comma-separated elements into string of space-separated substrings
arr=${arr[*]}
# replace spaces with + signs in arr string and calculate addidtive sum
# divide sum by divisor
# format as floating point decimal with three trailing decimal places
# print to output
printf "%.3f" `echo $((${arr// /+})) / $divisor | bc -l`