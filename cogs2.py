S = 0
T = 0
n = 0
for i in range(1,9):
    for j in range(10,21):
        for k in range(1,10):
            print(f"{i},{j},{k}")
            n+=1
            ada = (i * 1000)+ (j * 10) + (k)
            will = i * j * k
            S += ada
            T += will
            print(f"will = {will}")
            print(f"ada = {ada}")
print(n)
print(f"S = {S}")
print(f"T = {T}")
print(f"S/T = {S/T}")