transposed = []
matrix = [[1, 4, 9], [2, 5, 10], [3, 6, 11], [4, 8, 12]]


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