# // 1.Reverse words in a given string
# // Input: s = “i love programming very much” 
# // Output: s = “much very programming love i” 

# def myFn(txt):
    
#     words = txt.split()
#     revwords = list(reversed(words))
#     return " ".join(revwords)
# print(myFn('i love programming very much'))
# --------------------------------------------------

# def rev(txt):
#     words = txt.split()
#     revwrds = words[::-1]
#     return " ".join(revwrds)

# print(rev("helloooo there"))
# ------------------------------------------------------

# // 2.find Longest Common Prefix using Sorting
# Input: {“apple”, “ape”, “april”}
# Output: “ap”
# -------------------------------------
# What is a string?
# How to reverse a string?
# How to check if a string is a palindrome?
# How to find the length of a string?
# How to extract a substring from a string?
# How to replace all occurrences of a character with another character in a string?
# How to split a string into an array of words?
# How to join an array of words into a string?
# How to check if a string contains a substring?
# How to convert a string to uppercase or lowercase?

# str1 = "Hey there python !"

# def revFn(txt):
#    words = txt.split()
#    revwords = reversed(words)
#    return " ".join(revwords)
 
# print(revFn(str1))


# def reversing(a):
#    words = a.split()
#    return " ".join(words[::-1])

# print(reversing(str1))
# import re
# example = "000"

# def ispalindrome(txt):
#     inputstr = txt.lower()
#     inputstrwitoutsplchr = re.sub(r'[^a-zA-Z0-9]+', "", inputstr)
#     reversedstr = inputstrwitoutsplchr[::-1]

#     return inputstrwitoutsplchr == reversedstr

# print(ispalindrome(example))

# str3 = "abc cd"

# def leny(x):
#     ans = len(x)

#     ans2 = sum(1 for i in x)
#     ans3 = 0
#     for char in x:
#         ans3 += 1
#     return ans2

# print(leny(str3))
# // How to extract a substring from a string?

# str4 = "hello morning"

# ans = str4[5:]
# print(ans)

#// How to replace all occurrences of a character with another character in a string?

# str4 = "hello there people"

# print(str4.replace("e", "7"))

# // How to split a string into an array of words?

# str5 = "this is an array in python"

# def spliting(x):
#     ans = x.split()
#     return ans
# print(spliting(str5))


# // How to join an array of words into a string?

# str5 = ['this', 'is', 'an', 'array_python']

# listtostr = " ".join(map(str, str5))

# print(listtostr)

# for ch in str5:
#     print(ch,end = " ")


# a = "Apple"
# ans = a.upper()
# ans2 = a.lower()

# print(ans,ans2)

# str5 = "this is an eg of substring"
# substrin = "thiss"
# # ans = str5.find(substrin)
# # print(ans)

# if substrin in str5:
#     print("yess, a susbtring available")
# else:
#     print("Nope")    

#11. couting dups and storing in dict

# str7 =  "aaabbc"
# from collections import Counter
# def dups(txt):
#     ans = Counter(txt)
#     charcount = {}
#     for ch in txt:
#         if ch in charcount:
#             charcount[ch] += 1
#         else:
#             charcount[ch] = 1    
#     return charcount


# # print(dups(str7))    
# --------------------------------------------------------

#12. finding first non repeated character in string
# Input: "cbcbdde"

# Output: e
# str8 = "aaaabccccc"

# def findinch(txt):
#     arr = {}

#     for ch in txt:
#         if ch in arr:
#             arr[ch] += 1
#         else:
#             arr[ch] = 1
#     res = min(arr, key=arr.get)
#     return res   

# print(findinch(str8))    

# --------------------------------------------------------------

# 13. reversing letters and words 
# // Input: "I evol uoy os !hcum"
# // Output: I love you so much!
# str9 = "I evol uoy os !hcum"
# def revletters(txt):
#     rr = [word[::-1] for word in txt.split()]
#     return ' '.join(rr)

# print(revletters(str9))
#---------------------------------------------------------------------------------


# 14. 
# Input: ABC

# Output: ABC, ACB, BCA, BAC, CAB, CBA


str10 = "abc"

# from itertools import permutations
# output = permutations(str10)
# final = [''.join(perms) for perms in output ]
# data = "ABC"
# i = 0
# n = len(data)-1
# res = []
# def permutations(data,i,n):
 
#     if i == n:
#         res.append(''.join(data))
#     for j in range(i,n+1):
#         data[i],data[j] = data[j],data[i]
#         permutations(data,i+1,n)
#         data[i],data[j] = data[j],data[i] #backtracking
#     return res

# print(permutations(list(data),i,n))  
               
    

# 3 factorial means 3*2*1 = 6
# 4 factorial means 4*3*2*1 = 24

# -------------------------------------------------------------------------
#15. Creates a function that takes two numbers as arguments and return their sum.

# def sumFn(a,b):
#     return a +b

# print(sumFn(5,5))

# //----------------------------------------------------------------------------

# //16. Converts hours into seconds

# def hoursIntoSec(hours):
#     return hours*3600

# print(hoursIntoSec(5))
#-------------------------------------------------------------------------

#17. Converts minutes into seconds.

# def minToSec(min):
#     return min*60

# print(minToSec(5))   

#-------------------------------------------------------------------------
