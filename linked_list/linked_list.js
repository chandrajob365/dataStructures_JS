class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let newNode = new Node(element)
        // console.log("newNode | ", newNode, "  |  head | ", this.head);
        if(!this.head){
            this.head = newNode;
            this.size++;
            console.log("here, head | ", this.head);

            return;
        }
        let current = this.head;
        while(current && current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.size++;
        // this.printNodes();
        return;
    }

    insertAt(element, index) {
        if(index < 0 || index > this.size){
            console.log("Invalid insertion index | ", index);
            return;
        }
        let newNode = new Node(element);
        let current = this.head;
        if(!this.head){
            console.log(`Node @ ${index} | ${element} inserted`);
            this.head = newNode;
            this.size++;
            return;
        }
        if(index === 0) {
            let tempHead = this.head;
            this.head = newNode;
            newNode.next = tempHead;
            this.size++;
            console.log(`Node @ ${index} | ${element} inserted`);
            return;
        }
        let i = 0;
        while(current && current.next && index - 1 > i){
            current = current.next;
            i++;
        }
        console.log(`Node @ ${index} | ${element} inserted`);
        let tempCurrent = current.next;
        current.next = newNode;
        newNode.next = tempCurrent;
        this.size++;
        return;
    }

    deleteNode(element) {
        if(this.head && this.head.data === element){
            console.log(`Node @ ${index} | ${element} deleted`);
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        let prev = current;
        while(current) {
            console.log("----- current | ", current.data);
            if(current.data === element){
                console.log("prev | ", prev, "  |  current | ", current);
                prev.next = current.next;
                console.log(`Node @ ${index} | ${element} deleted`);
                this.size--;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    deleteNodeAt(index) {
        if(index < 0 || index >= this.size){
            console.log("Invalid deletion index | ", index);
            return;
        }
        if(index === 0) {
            console.log(`Node @ ${index} | ${this.head.data} deleted`);
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        let prev = current;
        let i = 0;
        while(current && current.next && index > i) {
            prev = current;
            current = current.next;
            i++;
        }
        console.log(`Node @ ${index} | ${current.data} deleted`);
        prev.next = current.next;
        this.size--;
        return;
    }

    indexOf(element) {
        let current = this.head;
        let i = 0;
        while(current){
            if(current.data === element) {
                console.log(`${element} found @ | `, i);
                return;
            }
            current = current.next;
            i++;
        }
        console.log(`${element} not found`);
    }

    getElementByIndex(index) {
        if(index < 0 || index >= this.size) {
            console.log(`You are looking for element @ invalid index`);
            return;
        }
        let current = this.head;
        let i = 0;
        while(current) {
            if(index === i) {
                console.log(`element @ index ${index} | `, current.data);
                return;
            }
            i++;
            current = current.next;
        }
    }

    printNodes(){
        let current = this.head;
        console.log("======= elements start========= | size | ", this.size);
        while(current) {
            console.log(current.data);
            current = current.next;
        }
        console.log("======= elements end=========");

    }
}

const ll = new SinglyLinkedList();
ll.add(2);
ll.printNodes();
ll.add(12);
ll.add(23);
ll.insertAt(33, 0);
ll.insertAt(44, 4);
ll.insertAt(54, 9)
ll.insertAt(74, 3);
ll.printNodes();
ll.deleteNodeAt(4);
ll.printNodes();
ll.deleteNodeAt(7);
ll.printNodes();
ll.insertAt(12, 0);
ll.printNodes();
ll.insertAt(-1, -1);
ll.printNodes();
ll.indexOf(12);
ll.indexOf(2);
ll.indexOf(33);
ll.indexOf(44);
ll.indexOf(-44);
ll.getElementByIndex(0);
ll.getElementByIndex(1);
ll.getElementByIndex(3);
ll.getElementByIndex(5);
ll.getElementByIndex(-1);
ll.getElementByIndex(7);

