import csv
import matplotlib.pyplot as plt
import decimal

#import numpy as np
#
filename = "/Users/olli/Pupil/recordings/ollin-testi/01_no-animation/exports/000/fixations.csv"
with open(filename) as f:
    reader = csv.reader(f)
    header_row = next(reader)
    print(header_row)

    xs = []
    ys = []
    for i in range (1,1000):
        for row in reader:
            if row[5] == '':
                continue
            x = float(row[5])
            d = decimal.Decimal(x)
            c = round (d, 5)
            xs.append(c)
            
            if row[6] == '':
                continue
            y = float(row[6])
            r = decimal.Decimal(y)
            v = round(r, 5)
            ys.append(v)

        
    print(xs[1:4])
    
    figure = plt.figure(figsize = (5,5))
    plt.title('fixations_no-animation_000')
    plt.xlabel('x')
    plt.ylabel('y')
    plt.scatter(xs, ys, alpha=0.15)