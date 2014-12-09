var HashTable = require('hashtable');

var hashTable = new HashTable();

hashTable.put('Fred', 'Good');

var value = hashTable.get('Fred');

console.log(value);
