const db = new Dexie('video-dexie')
db.version(1).stores({
    people: '++id,name,age'
})

class Person {

    constructor(id, name, age) {
        this.id = id
        this.name = name
        this.age = age
    }

    delete(pk) {
        db.people.delete(pk)
    }

    getAll() {
        return db.people.toArray()
    }

    save() {
        db.people.add(this)
    }

    update() {
        db.people.put(this)
    }

}

db.people.where('name').equals('João').toArray()
    .then(array => console.log(array))