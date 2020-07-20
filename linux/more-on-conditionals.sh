read x
read y
read z
# if [[ x -eq y && x -eq z ]]
if (( (x + y + z) == x * 3 ))
  then echo "EQUILATERAL"
# elif [[ x -ne y && y -eq z ]] || [[ x -ne z && x -eq y ]] || [[ y -ne z && y -eq x ]]
elif (( (x + y + z) % 3 ))
  then echo "ISOSCELES"
else
  echo "SCALENE"
fi
