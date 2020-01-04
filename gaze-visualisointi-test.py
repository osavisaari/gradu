import csv
import matplotlib.pyplot as plt
import decimal
import pandas as pd
import json
# import numpy as np
#
filename = (
    "/Users/olli/Pupil/recordings/ollin-testi/01_no-animation/exports/000/fixations.csv"
)
df = pd.read_csv(filename)


json_filename = "/Users/olli/Downloads/olli-testi_28-12.json"

with open(json_filename, 'r') as f:
    d = json.load(f)

arrows = pd.DataFrame(d["arrows"])
user_presses = pd.DataFrame(d["userPresses"])
user_animation_reaction_time = pd.DataFrame(d["userAnimatonReactionTime"])
animations = pd.DataFrame(d["animations"])

arrows = arrows.set_index("date")
arrows.index = pd.to_datetime(pd.to_datetime(arrows.index))
arrows = arrows.sort_index()

user_presses = user_presses.set_index("date")
user_presses.index = pd.to_datetime(pd.to_datetime(user_presses.index))
user_presses = user_presses.sort_index()

df2 = pd.merge_asof(arrows, user_presses, left_index=True, right_index=True, direction='forward')

print(arrows)
print(user_presses)
print(df2)


#print(user_animation_reaction_time)
#print(animations.columns)



#df.plot(kind="scatter", x="norm_pos_x", y="norm_pos_y")

#
#with open(filename) as f:
#    reader = csv.reader(f)
#    header_row = next(reader)
#    print(header_row)
#
#    xs = []
#    ys = []
#    for i in range(1, 100):
#        for row in reader:
#            if row[3] == "":
#                continue
#            x = float(row[3])
#            d = decimal.Decimal(x)
#            c = round(d, 4)
#            xs.append(c)
#
#            if row[4] == "":
#                continue
#            y = float(row[4])
#            r = decimal.Decimal(y)
#            v = round(r, 5)
#            ys.append(v)
#
#    print(len(xs))
#    print(xs[1:4])
#
#    figure = plt.figure(figsize=(10, 10))
#    plt.title("fixations_no-animation_000")
#    plt.xlabel("x")
#    plt.ylabel("y")
#    plt.scatter(xs, ys, alpha=0.15)
