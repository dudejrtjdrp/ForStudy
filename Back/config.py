ddb = {
    'user'     : 'root',
    'password' : '1950harrY@',
    'host'     : 'localhost',
    'port'     : '3306',
    'database' : 'portfolio'
}

DB_URL = f"mysql+pymysql://{ddb['user']}:{ddb['password']}@{ddb['host']}:{ddb['port']}/{ddb['database']}?charset=utf8" 