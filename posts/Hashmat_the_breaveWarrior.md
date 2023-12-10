```

while True:
	try:
		army = input()
		# print(army)
		# split to two teams
		a, b = map(int, army.split())
		# print(type(a))
		# count diffent between two teams
		diff = abs(a-b)
		print(diff)
		#print(a, b)
	
	except:
		break
```