import MySQLdb

db = MySQLdb.connect(host="sqlclassdb-instance-1.cqjxl5z5vyvr.us-east-2.rds.amazonaws.com",
                     user="clothing",
                     password="5kjhadkjh45saljf",
                     db="midyear_2223_clothing")

mycursor = db.cursor()

mycursor.execute("select color_name from colors where color_id = 5")


myresult = str(mycursor.fetchall())

print(myresult.strip("(").strip(",").strip(")"))
print(myresult)
db.close()