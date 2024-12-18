class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
        this.border = "black";
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        return node ? node.height : 0;
    }

    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    rotateLeft(y) {
        const x = y.right;
        const T2 = x.left;

        x.left = y;
        y.right = T2;

        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }

    rotateRight(x) {
        const y = x.left;
        const T2 = y.right;

        y.right = x;
        x.left = T2;

        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }

    insert(node, value) {
        if (!node) return new AVLNode(value);
        if (value < node.value) node.left = this.insert(node.left, value);
        else if (value > node.value) node.right = this.insert(node.right, value);
        else return node;

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor > 1 && value < node.left.value) return this.rotateRight(node);

        if (balanceFactor < -1 && value > node.right.value) return this.rotateLeft(node);

        if (balanceFactor > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        if (balanceFactor < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    insertValue(value) {
        const newTree = new AVLTree();
        newTree.root = this.root = this.insert(this.root, value);
        return newTree;
    }

    insertWithHighlight(value) {
        let criticalNode = null;

        const insertNode = (node, value) => {
            if (!node) {
                const newNode = new AVLNode(value);
                newNode.border = "green";
                return newNode;
            }

            if (value < node.value) {
                node.left = insertNode(node.left, value);
            } else if (value > node.value) {
                node.right = insertNode(node.right, value);
            } else {
                return node;
            }

            this.updateHeight(node);

            const balanceFactor = this.getBalanceFactor(node);

            if (Math.abs(balanceFactor) > 1 && !criticalNode) {
                criticalNode = node;
            }

            return node;
        };

        const newRoot = this.root = insertNode(this.root, value);

        if (criticalNode) {
            criticalNode.border = "red";
        }

        const newTree = new AVLTree();
        newTree.root = newRoot;
        return {
            newTree: newTree,
            hasCriticalNode: Boolean(criticalNode),
        };
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node !== null) {
          this.inOrderTraversal(node.left, result);
          result.push(node.value);
          this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    findNode(value, node = this.root) {
        if (!node) return null;
        if (value === node.value) return node;
        if (value < node.value) return this.findNode(value, node.left);
        return this.findNode(value, node.right);
    }

    getNodePositions(node = this.root, depth = 0, positions = [], x = 0, widthTracker = { minX: 0, maxX: 0 }, maxDepth = { value: 0 }) {
        if (!node) {
            return { positions, width: widthTracker.maxX - widthTracker.minX + 30, height: (maxDepth.value + 1) * 80 };
        }
    
        const offsetX = 150 / Math.pow(1.90, depth);
        const posX = x;
    
        positions.push({ value: node.value, x: posX, y: depth * 80, border: node.border });
    
        widthTracker.minX = Math.min(widthTracker.minX, posX);
        widthTracker.maxX = Math.max(widthTracker.maxX, posX);
    
        maxDepth.value = Math.max(maxDepth.value, depth);
    
        this.getNodePositions(node.left, depth + 1, positions, posX - offsetX, widthTracker, maxDepth);
        this.getNodePositions(node.right, depth + 1, positions, posX + offsetX, widthTracker, maxDepth);
    
        const totalWidth = widthTracker.maxX - widthTracker.minX + 265;
        const totalHeight = (maxDepth.value + 1) * 80;
    
        return { newPositions: positions, newWidth: totalWidth, newHeight: totalHeight };
    }
    
    balanceAfterInsert() {
        const findCriticalNode = (node) => {
            if (!node) return null;
            if (node.border === "red") return node;
            return findCriticalNode(node.left) || findCriticalNode(node.right);
        };
    
        const criticalNode = findCriticalNode(this.root);
    
        if (!criticalNode) return this;
    
        const balanceSubtree = (node) => {
            if (!node) return node;
    
            node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
            const balanceFactor = this.getBalanceFactor(node);
    
            if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0) {
                return this.rotateRight(node);
            }
            if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0) {
                return this.rotateLeft(node);
            }
            if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) {
                node.left = this.rotateLeft(node.left);
                return this.rotateRight(node);
            }
            if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) {
                node.right = this.rotateRight(node.right);
                return this.rotateLeft(node);
            }
            return node;
        };
    
        const parentNode = this.findParent(this.root, criticalNode);
    
        if (!parentNode) {
            this.root = balanceSubtree(this.root);
        } else {
            if (parentNode.left === criticalNode) {
                parentNode.left = balanceSubtree(criticalNode);
            } else {
                parentNode.right = balanceSubtree(criticalNode);
            }
        }
    
        return this;
    }
    
    findParent(root, node) {
        if (!root || root === node) return null;
        if (root.left === node || root.right === node) return root;
        return this.findParent(root.left, node) || this.findParent(root.right, node);
    }
    

    resetBorders(node = this.root) {
        if (!node) return;
        
        node.border = "black";
        
        this.resetBorders(node.left);
        this.resetBorders(node.right);
    }

    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    balance(node) {
        this.updateHeight(node);

        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor > 1) {
            if (this.getBalanceFactor(node.left) < 0) {
                node.left = this.rotateLeft(node.left);
            }
            return this.rotateRight(node);
        }

        if (balanceFactor < -1) {
            if (this.getBalanceFactor(node.right) > 0) {
                node.right = this.rotateRight(node.right);
            }
            return this.rotateLeft(node);
        }

        return node;
    }

    deleteValue(value) {
        const newTree = new AVLTree();
        newTree.root = this.root = this._deleteNode(this.root, value);
        return newTree;
    }

    _deleteNode(node, value) {
        if (!node) return node;

        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
        } else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            const minLargerNode = this._getMinValueNode(node.right);
            node.value = minLargerNode.value;
            node.right = this._deleteNode(node.right, minLargerNode.value);
        }

        return this.balance(node);
    }

    _getMinValueNode(node) {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }
}

export { AVLNode, AVLTree };
