// Creating a hash table:

class HashTable {
    constructor() {
        this.table = new Array(137);
        this.values = [];
    }

    hash(string) {
        let hash = 0;
        for (let i = 0; i < string.length; i++) {
            hash += string.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    put(key, value) {
        const index = this.hash(key);
        this.table[index] = key;
        this.values[index] = value;
    }

    get(key) {
        const index = this.hash(key);
        return this.values[index];
    }
}

const hashTable = new HashTable();
hashTable.put("apple", 2.50);
hashTable.put("banana", 1.50);
console.log(hashTable.get("apple")); // Output: 2.50
console.log(hashTable.get("banana")); // Output: 1.50


// Checking if a string is an anagram using a hash table:

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const table = new Map();
  for (let i = 0; i < str1.length; i++) {
    const char = str1.charAt(i);
    table.set(char, table.get(char) + 1 || 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2.charAt(i);
    if (!table.has(char)) {
      return false;
    }
    table.set(char, table.get(char) - 1);
    if (table.get(char) < 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("listen", "loud")); // Output: false



// Finding the first non-repeating character in a string using a hash table

function firstNonRepeatingChar(str) {
  const table = new Map();
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    table.set(char, table.get(char) + 1 || 1);
  }
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (table.get(char) === 1) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("aabbcdd")); // Output: "c"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null