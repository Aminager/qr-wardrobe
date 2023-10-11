rm database.db
sqlite3 database.db < create-schema.sql
sqlite3 database.db < add-data.sql
python3 -m flask --app server run