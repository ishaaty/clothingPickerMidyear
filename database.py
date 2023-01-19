import MySQLdb

db = MySQLdb.connect(host="localhost",
                     user="root",
                     password="",
                     db="midyearProject")

mycursor = db.cursor()

mycursor.execute("select * from colors")
