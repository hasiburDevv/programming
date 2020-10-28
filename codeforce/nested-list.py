#Sort a list according to the second element in sublist
student =[['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]] 
l = len(student) 
result = []
def Sort(student): 
    l = len(student) 
    for i in range(0, l): 
        for j in range(0, l-i-1): #3-> 0,1,2
            if (student[j][1] > student[j + 1][1]): 
                tempo = student[j] 
                student[j]= student[j + 1] 
                student[j + 1]= tempo 
    return student 

Sort(student) 
print(student)
print(student[0][1])
print(student[0+1][1])
print(student[0][0])
print(student[1][0])
print(student[0])
print(student[1]) 

for i in range(0, l): 
    if student[i][1] == student[1][1]:
        temp = student[i][0]
        result.append(temp)

print(sorted(result))
