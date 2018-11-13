let Node = function() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function() {
        this.end = true;
    }
    this.isEnd = function() {
        return this.end;
    }
}

let Tries = function () {
    this.root = new Node();
    this.add = function(input, node = this.root) {
        // sets the end at char (root)
        if(input.length === 0){
            node.setEnd();
            return;
        }
        // create a node with this char if this character doesn't exist in trie
        if(!node.keys.has(input[0])){
            node.keys.set(input[0], new Node());
        }
        // recursivelly calls add using remaiing string and root as this current charcter
        return this.add(input.substr(1), node.keys.get(input[0]));
    }

    this.isValidWord = function(word, node = this.root) {
        if(word.length === 0) {
            return node.isEnd() ? true : false;
        }
        if(!node.keys.has(word[0])){
            return false;
        }
        return this.isValidWord(word.substr(1), node.keys.get(word[0]));
    }

    this.print = function(){
        let words = new Array();
        this.search = function(node, string) {
            if(node.keys.size !== 0) {
                for(let letter of node.keys.keys()){
                    this.search(node.keys.get(letter), string.concat(letter))
                }
                if(node.isEnd()){
                    words.push(string);
                }
            } else {
                return string.length > 0 ? words.push(string) : undefined
            }
        }
        this.search(this.root, new String());
        words.forEach(elm => console.log(elm));
    }
}

myTrie = new Tries()
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isValidWord('doll'))
console.log(myTrie.isValidWord('dor'))
console.log(myTrie.isValidWord('dorf'))
myTrie.print();