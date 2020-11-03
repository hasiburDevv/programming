'''
w = int(input())

if 1 <= w <= 100:
    if w == 2:
        print("NO")
    elif w % 2 == 0:
        print("YES")
    else:
        print("NO")
'''

num = int(input("enter your number :"))
number = num//2
temp = num - number
if (temp+number) == num: 
    print(num," = ",temp," + ", number)
