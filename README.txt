Usage:

var cleversafe = require("npm-cleversafe");

var conn = new cleversafe(USER,PASS,HOST,PROXY)

conn.setVault("VaultName")

conn.retrieve("filename") //Downloads the file and stores it in local directory

conn.deposit("filename") //Deposits file in cleversafe



Notes:
The readMe will be updated soon with better usage info.
