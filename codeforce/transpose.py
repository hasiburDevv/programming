transposed = []
matrix =  [[1, 2], [3,4], [5,6], [7,8]]

#[[1, 2, 3], [4, 5, 6]]

for i in range(len(matrix[0])):
    print(" i ",i)
    transposed_row = []

    for row in matrix:
        print("*")
        #print(" row ",row)
        print("row ",row[i])
        transposed_row.append(row[i])
        print("*******************", transposed_row)
    transposed.append(transposed_row)
    

print(transposed)