import bisect

def maximum_sum(a, m):
  sorted_pre_sums = []
  pre_sum = 0
  max_sum = 0

  for i in range(len(a)):
    pre_sum = (pre_sum + a[i]) % m
    max_sum = max(max_sum, pre_sum)
    idx = bisect.bisect_right(sorted_pre_sums, pre_sum)
    
    if idx < len(sorted_pre_sums): 
      max_sum = max(max_sum, pre_sum - sorted_pre_sums[idx] + m)

    bisect.insort(sorted_pre_sums, pre_sum)

  return max_sum

# a = [3, 3, 9, 9, 5]
# m = 7
# result: 6

a = [1, 5, 9]
m = 5
# result: 4

print(maximum_sum(a, m))