rm database.sqlite
sqlite3 database.sqlite < create-schema.sql
sqlite3 database.sqlite < add-data.sql
python3 -m flask --app server run