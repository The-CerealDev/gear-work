cog16 = 8
cog18 = 9
cog22 = 20
startcomb = [1,10,1]
comb = [0,00,0]
cog1 = 1
cog2 = 1
cog3 = 10
ada = 0 #this person takes the sum of all the 792 different digits
will = 0 #this person multiplies the three numbers in each of the cogs each turn and adds the sum of of all 792 multiplications 
print(startcomb)
n =0
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
    n += 1
    print(comb)
print(n)