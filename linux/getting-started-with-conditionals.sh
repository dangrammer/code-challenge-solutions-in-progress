read char
if [[ $char = "Y" || $char = "y" ]]
  then echo "YES"
elif [[ $char = "N" || $char = "n" ]]
  then echo "NO"
else
  echo "input must be 'y' 'Y' 'n' or 'N'"
fi
