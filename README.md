# KeepIt

KeepIt is a modern approach to wardrobes. To simplify the process of getting your jacket whenever you lose your tag KeepIt will serve you.

## How to run
### Start server
Go to /server/:
```
    sqlite3 database.sqlite < create-schema.sql
    sqlite3 database.sqlite < add-data.sql
    python3 -m flask --app server run
```
### Start React app
Go to root:
```
    yarn dev
```