class Stack {
    constructor(){
       this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    printStack() {
        let i = 0;
        while(i < this.items.length) {
            console.log(`item @ ${i} | ${this.items[i]}`);
            i++;
        }
    }
}

const st = new Stack();
st.push(23);

st.push(34);
st.push(54);
st.printStack();
console.log(st.peek());
console.log(st.pop());
st.printStack();