

# (YKL14.UVA10222) Decode the Mad man

``` py
# if exist in the dict 

char_dict =["1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./"]
chars = "".join(char_dict)


while True:

	try:
		sen = input()
		#print(sen)
		# trnasform to lowercase
		sen = sen.lower()
		
		
		for char in sen:
			# find char's index from chars, then -2
			# using char -2 's index get the left 2 space number
			if char in chars:
				#print(char)
				print(chars[chars.index(char)-2], end="")
			else:
				# specfic char
				print(char,end="")
		print()
	except:
		break
```