---
title: '(YKL32.UVA10008) What "s Cryptanalysis?'
author: 'Wang'
date: '2023-12-02'
---
# (YKL32.UVA10008) What's Cryptanalysis?

```python
row = int(input())
# dictionary for store character
my_dict = {}
for i in range(row):
	# store input sequence
	seq = input()
	# iterate char seq to filter alphabet
	for char in seq:
		# transform to upperCase
		char = char.upper()
		# print(char)
		# judgement is it alphabet
		if char.isalpha():
			# print("isalphabet")
			# judgement is it exist in dict
			if char in my_dict:
				my_dict[char] +=1
			else:
			# initial char into dictionary
				my_dict[char] = 1
				
	#print(my_dict)
	
# Then we get complete dictionary that sotre all alphabet number
# Store dict accroding alphabet times if the same times according alphabet order
my_dict = dict(sorted(my_dict.items(), key = lambda x:(-x[1], x[0])))
#print(my_dict)
for char, count in my_dict.items():
	print(char, count)	
	# print(seq)
# print(row)
```