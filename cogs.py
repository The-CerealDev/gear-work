cog16 = 8
cog18 = 9
cog22 = 20
startcomb = [1,10,1]
comb = [0,00,0]
cog1 = 1
cog2 = 1
cog3 = 10
ada = 1+10+1 #this person takes the sum of all the 792 different digits
will = 1101 #this person multiplies the three numbers in each of the cogs each turn and adds the sum of of all 792 multiplications 
print(startcomb)
n =0
T =0
S = 0
while comb != startcomb :
    
    if cog1 < cog16:
        cog1 +=1
    else: cog1 = startcomb[0]
    if cog2 < cog18:
        cog2 +=1
    else: cog2 = startcomb[2]
    if cog3 < cog22:
        cog3 +=1
    else: cog3 = startcomb[1]
    comb = [cog1, cog3, cog2]
    will = comb[0]*comb[1]*comb[2]
    ada = int(str(comb[0])+str(comb[1])+str(comb[2]))
    T += will
    S += ada
    n += 1
    print(comb)
    print(f"adas stuff {ada}")
    print("wills cog",will)
print(n)
print(f"T = {T}")#this prints the total sum of all the 792 products 
print(f"S = {S}")
print(f"S/T ={S/T}") 