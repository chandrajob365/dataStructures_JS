class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue(element) {
        return this.items.shift();
    }

    printQueue(){
        this.items.forEach((elem, i) => console.log(`Item @ ${i} | `, elem));
    }
}

const q = new Queue();
q.enqueue(23);
q.enqueue(34);
q.enqueue(44);
q.enqueue(54);
q.printQueue();
console.log(q.dequeue());
q.printQueue();