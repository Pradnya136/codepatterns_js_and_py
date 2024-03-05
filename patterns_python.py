

# for i in range(1,5):
#     line = ""
#     for j in range(1,i+1):
#         line += "* "
#     print(line)

# ascii_n = 65
# row = 5
# b = 0
# for i in range(0,row):
#     b += 1
#     for j in range( 0,i+1):
#         ch = chr(ascii_n)
#         print(ch, end= " ")
#         ascii_n +=1
#     print("\r")    


# word = "Happy"
# x = ""
# for i in word:
#     x += i
#     print(x)
# rows = 6
# for i in range(rows):
#     for j in range(i):
#         print(i*2-1,end=" ")
#     print("")   


# for i in range(rows,0,-1):
#     for j in range(i):
#         print(i,end=" ")
#     print("")    

# for i in range(1,6):
#     print(i)
# n = 5
# for i in range(n):
#     print(n - i)

# n = 6
# for i in range(n):
#     for j in range(i):
#         print(i, end=" ")
#     print("")    

# n = 6
# for i in range(n):
#     for j in range(i):
#         print(j + 1, end= " ")
#     print("")    

# n = 5
# for i in range(n):
#     for j in range(n - i):
#         print(i + 1, end = " ")
#     print("")    

# n = 5
# for i in range(n):
#     for j in range(n - i):
#         print(5, end=" ")
#     print("")    

# n = 6
# for i in range(n-1):
#     for j in range(n-i):
#         print(j, end=" ")
#     print("")    
# n = 5
# for i in range(1, 10,2):
#     for j in range((5 - i//2)+1):
#         print(i,end= " ")
#     print("")    


# n = 6
# for i in range(n):
#     for j in range(i):
#         print(i, end= " ")
#     print("")     


# for i in range(n):
#     for j in range(i):
#         print(j + 1, end=" ")
#     print("")    

# n = 5
# for i in range(n):
#     for j in range(n - i):
#         print(i + 1, end=" ")
#     print("")    



# n = 5

# for i in range(n):
#     for j in range(n - i):
#         print(5, end= " ")
#     print("")    


# n = 6
# for i in range(0,n-1):
#     for j in range(n - i):
#         print(j, end=" ")
#     print("")    


# while cond
#     code
# n = 5
# i = 1
# while i <= n:
#     j = 1
#     while j <= i:
#         print((i*2)-1, end= " ")
#         j += 1
#     i += 1    

#     print("")    


# n = 5
# for i in range(n):
#     for j in range(n - i):
#         print(n - i, end= " ")
#     print("")    

# n = 6
# for i in range(n):
#     for j in range(i,0,-1):
#         print( j , end= " ")
#     print("")    

# n = 5
# for i in range(n):
#     for j in range(n-i,0,-1):
#         print( j, end=" ")
#     print("")    


# start = 1
# stop = 2
# currentno = stop
# for i in range(2,6):
#     for j in range(start, stop):
#         currentno -= 1
#         print(currentno, end=" ")
#     print()
#     start = stop
#     stop += i
#     currentno = stop    




# for i in range(1,6):
#     n = 1
#     for j in range(6,0,-1):
#         if j > i:
#             print(" ", end= " ")
#         else:
#             print(n, end= " ")
#             n += 1
#     print()            

# numrow = 6
# for i in range(numrow):
#     output = " "
#     for j in range(numrow - i):
#         output += "  "
#     coeff = 1
#     for k in range(i+1):
#         output += "   " + str(coeff)
#         coeff = coeff * ( i - k)//(k+1)
#     print(output)                 


