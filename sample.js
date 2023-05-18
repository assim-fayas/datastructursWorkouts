class HashaTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
        const index = this.hash(key)
        return this.table[index] = value
    } get(key) {
        const index = this.hash(key)
        return this.table[index]
    } remove(key) {
        const Index = this.hash(key)
        return this.table[Index] = undefined
    }
    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }

}
const table = new HashaTable(50)

table.set('name', 'nameer')
table.set('age', 19)
console.log(table.get('name'));
table.display()
