function myEach(collection, callback) {
    let keys = Object.keys(collection);
    keys.forEach(key => callback(collection[key]));
    return collection;
}

function myMap(collection, callback) {
    let keys = Object.keys(collection);
    const newCollection = [];
    keys.forEach(key => newCollection.push(callback(collection[key])));
    return newCollection;
}

function myReduce(collection, callback, acc) {
    let keys = Object.keys(collection);
    if (!acc) {
        acc = collection[keys[0]];
        keys.shift();
    }
    keys.forEach(key => {
        acc = callback(acc, collection[key], collection);
    })
    return acc;
}

function myFind(collection, predicate) {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
        let current = collection[keys[i]];
        if (predicate(current))
            return current;
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const keys = Object.keys(collection);
    const result = [];
    keys.forEach(key => {
        if (predicate(collection[key]))
            result.push(collection[key]);
    });
    return result;
}

function mySize(collection) {
    const keys = Object.keys(collection);
    return keys.length;
}

function myFirst(array, n) {
    return n ? array.slice(0, n) : array[0];
}

function myLast(array, n) {
    return n ? array.slice(-n) : array[array.length - 1];
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}