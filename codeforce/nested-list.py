# student = [['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]]

#     #     print(float(student[0][1]))
#     # lowest = student[0]
#     # lowest2 = None 
#     # for name,score in student:
#     #     if score < lowest:  
#     #         lowest2 = lowest 
#     #         lowest = score  
#     #     elif lowest2 == None or lowest2 > score:  
#     #         lowest2 = score  
#     #     #print(lowest)
#     # print(lowest2)

#     #sorted(student)[+1]
# student.sort(reverse=True)
# print("Second lowest element is:", student)

#     #for name,score in sorted(student)[+1]:
#     #print(student[name][0])
# #min_(student)

def Sort(student): 
    l = len(student) 
    for i in range(0, l): 
        for j in range(0, l-i-1): #3-> 0,1,2
            if (student[j][1] > student[j + 1][1]): 
                tempo = student[j] 
                student[j]= student[j + 1] 
                student[j + 1]= tempo 
    return student 
  
# Driver Code 
student =[['rishav', 10], ['akash', 5], ['bam', 20], ['gaurav', 15]] 
#print(Sort(sub_li)) 
print(student[0][1])
print(student[0+1][1])
print(student[0][0])
print(student[1][0])
print(student[0])
print(student[1]) 