// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(child) {
        if (child instanceof Node) {
            this.children.push(child);
        } else {
            this.children.push(new Node(child));
        }
    }

    remove(child) {
        this.children = this.children.filter(c => {
            if (typeof child === 'string') {
                return c.data !== child; 
            } else {
                return c !== child; 
            }
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        if (!this.root) return;

        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            fn(node);
            for (const child of node.children) {
                queue.push(child);
            }
        }
    }

    traverseDF(fn) {
        if (!this.root) return;

        const traverse = (node) => {
            fn(node);
            for (const child of node.children) {
                traverse(child);
            }
        };

        traverse(this.root);
    }
}

module.exports = { Tree, Node };
