#Sort a list according to the second element in sublist
#student =[['Harry', 37.21], ['Berry', 37.20], ['Tina', 37.20], ['Akriti', 41], ['Harsh', 39], ['Aerry', 35.21]] 
student = [['Harsh', 20],['Beria', 20],['Varun', 19],['Kakunami', 19],['Vikas', 21]]
l = len(student) 
result = []

def second_smallest(student):
  if (len(student)<2):
    return
  if ((len(student)==2)  and (student[0][1] == student[1][1]) ):
    return
  dup_items = set()
  uniq_items = []
  for name,score in student:
    if score not in dup_items:
      uniq_items.append(score)
      dup_items.add(score)
  uniq_items.sort()    
  return  uniq_items[1]   

print("second_smallest = ",second_smallest(student))
second_smallest = second_smallest(student) 


# def Sort(student): 
#     l = len(student) 
#     for i in range(0, l): 
#         for j in range(0, l-i-1): #3-> 0,1,2
#             if (student[j][1] > student[j + 1][1]): 
#                 tempo = student[j] 
#                 student[j]= student[j + 1] 
#                 student[j + 1]= tempo 
#     return student 


# print(student[0][1])
# print(student[0+1][1])
# print(student[0][0])
# print(student[1][0])
# print(student[0])
# print(student[1]) 

for i in range(0, l): 
    if student[i][1] == second_smallest:
        temp = student[i][0]
        result.append(temp)

result.sort()
print('\n'.join(map(str, result)))