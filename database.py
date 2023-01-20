import MySQLdb

db = MySQLdb.connect(host="sqlclassdb-instance-1.cqjxl5z5vyvr.us-east-2.rds.amazonaws.com",
                     user="clothing",
                     password="5kjhadkjh45saljf",
                     db="midyear_2223_clothing")

mycursor = db.cursor()

mycursor.execute("""select color_name, color_id 
from colors where color_id < 9 and color_id > 2""")

myresult = mycursor.fetchall()

print(myresult[0][0])

db.close()
