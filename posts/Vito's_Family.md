

```py
rows = int(input())

for i in range(rows):
	nums = input().split()
	addr = nums[1:]
	nums = int(nums[0])
	
	# print(type(nums))
	# print(nums, addr)
	# transform to integer for sort number order
	addr = [int(x) for x in addr]
	# sort the address
	# addr = addr.sorted()
	addr.sort()
	
	#print(addr)
	
	# get middle number
	middle = addr[ (nums - 1) // 2]
	# print(middle)
	
	# record the total distance
	distance = 0
	
	# get total road length (using each addr minus middle value)
	for j in addr:
		distance += abs(j-middle)
		
	print(distance)
		
	# print(middle)
	# print(addr)
	
		
		
```