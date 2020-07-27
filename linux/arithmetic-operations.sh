read input
printf "%.3f\n" `echo $input | bc -l`

# “printf” command used to display given string, number or any other format specifier on the terminal window.
# alternative to "echo" command that allows more complex output

# %f specifier is used for output of floating point values
# .3 dictates how many trailing decimal places

# `` allows return value of command to replace command itself (synonomous with $())

# "bc" command enables basic calculator
# -l defines the standard math library