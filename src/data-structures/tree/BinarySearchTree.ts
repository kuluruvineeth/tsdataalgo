/**
 * Represents a node of a binary search tree
 *
 * @template T The type of the value stored in the node.
 */

import { BinaryTree } from './BinaryTree';
import { BinaryTreeNode } from './BinaryTreeNode';
import { Tree } from './Tree';

class TreeNode<T> {
  constructor(
    public data: T,
    public leftChild?: TreeNode<T>,
    public rightChild?: TreeNode<T>
  ) {}
}

/**
 * An implementation of a binary search tree.
 *
 * A binary tree is a tree with only two children per node. A binary search tree on top sorts the children according
 * to following rules:
 * - left child < parent node
 * - right child > parent node
 * - all children on the left side < root node
 * - all children on the right side > root node
 *
 * @template T The data type of the values in the binary tree.
 */

export class BinarySearchTree<T> implements Tree<T> {
  rootNode?: TreeNode<T>;

  /**
   * Instantiates the binary search tree.
   *
   * @param rootNode The root node.
   */
  constructor() {
    this.rootNode = undefined;
  }

  /**
   * Checks, if the binary search tree is empty, i. e. has no root node.
   *
   * @returns Whether the binary search tree is empty.
   */
  isEmpty(): boolean {
    return this.rootNode === undefined;
  }

  /**
   * Checks whether the tree has the given data or not.
   *
   * @param data The data to check for.
   * @returns {boolean}
   */
  has(data: T): boolean {
    if (!this.rootNode) {
      return false;
    }

    let currentNode = this.rootNode;
    while (currentNode.data !== data) {
      if (data > currentNode.data) {
        if (!currentNode.rightChild) {
          return false;
        }
        currentNode = currentNode.rightChild;
      } else {
        if (!currentNode.leftChild) {
          return false;
        }

        currentNode = currentNode.leftChild;
      }
    }

    return true;
  }

  /**
   * Inserts the given data into the binary search tree.
   *
   * @param data the data to be stored in the binary search tree.
   * @returns
   */
  insert(data: T): void {
    if (!this.rootNode) {
      this.rootNode = new TreeNode<T>(data);
      return;
    }

    let currentNode: TreeNode<T> = this.rootNode;
    while (true) {
      if (data > currentNode.data) {
        if (currentNode.rightChild) {
          currentNode = currentNode.rightChild;
        } else {
          currentNode.rightChild = new TreeNode<T>(data);
          return;
        }
      } else {
        if (currentNode.leftChild) {
          currentNode = currentNode.leftChild;
        } else {
          currentNode.leftChild = new TreeNode<T>(data);
          return;
        }
      }
    }
  }

  /**
   * Finds the minimum value of the binary search tree.
   *
   * @returns The minimum value of the binary search tree.
   */
  findMin(): T {
    if (!this.rootNode) {
      throw new Error('Empty tree.');
    }

    const traverse = (node: TreeNode<T>): T => {
      return !node.leftChild ? node.data : traverse(node.leftChild);
    };

    return traverse(this.rootNode);
  }

  /**
   * Finds the maximum value of the binary search tree.
   *
   * @returns The maximum value of the binary search tree
   */
  findMax(): T {
    if (!this.rootNode) {
      throw new Error('Empty tree. ');
    }

    const traverse = (node: TreeNode<T>): T => {
      return !node.rightChild ? node.data : traverse(node.rightChild);
    };

    return traverse(this.rootNode);
  }

  /**
   * Traverses to the binary search tree in in-order i.e it follows the schema of:
   * Left Node -> Root Node -> Right Node
   *
   * @param array The already found node data for recursive access.
   * @returns
   */
  inOrderTraversal(array: T[] = []): T[] {
    if (!this.rootNode) {
      return array;
    }

    const traverse = (node?: TreeNode<T>, array: T[] = []): T[] => {
      if (!node) {
        return array;
      }

      traverse(node.leftChild, array);
      array.push(node.data);
      traverse(node.rightChild, array);
      return array;
    };

    return traverse(this.rootNode);
  }

  /**
   * Traverse to the binary search tree in pre-order, i.e it follows the schema of:
   * Root Node -> Left Node -> Right Node
   *
   * @param array The already found node data for recursive access.
   * @returns
   */
  preOrderTraversal(array: T[] = []): T[] {
    if (!this.rootNode) {
      return array;
    }

    const traverse = (node?: TreeNode<T>, array: T[] = []): T[] => {
      if (!node) {
        return array;
      }

      array.push(node.data);
      traverse(node.leftChild, array);
      traverse(node.rightChild, array);

      return array;
    };

    return traverse(this.rootNode);
  }

  /**
   * Traverses to the binary search tree in post order i.e it follows the schema of:
   * Left Node -> Right Node -> Root Node
   *
   * @param array The already found node data for recursive access.
   * @returns
   */
  postOrderTraversal(array: T[] = []): T[] {
    if (!this.rootNode) {
      return array;
    }

    const traverse = (node?: TreeNode<T>, array: T[] = []): T[] => {
      if (!node) {
        return array;
      }

      traverse(node.leftChild, array);
      traverse(node.rightChild, array);
      array.push(node.data);

      return array;
    };

    return traverse(this.rootNode);
  }
}

export class BinarySearchTreeV2 extends BinaryTree<number> {
  /**
   * Recursively insert a new value in the BST.
   * @param {number} val The value being inserted
   */
  insert(val: number): void {
    this.root = this._insertImpl(val, this.root);
  }

  /**
   * Recursively search for a value in the BST
   * @param {number} val The value to search for
   * @returns {boolean} True if value is found, false if not
   */
  search(val: number): boolean {
    function searchImpl(
      value: number,
      node: BinaryTreeNode<number> | null
    ): boolean {
      if (!node) {
        return false;
      }

      const nodeValue = node.value;

      if (nodeValue === value) {
        return true;
      }

      if (value > nodeValue) {
        return searchImpl(value, node.right);
      }
      return searchImpl(value, node.left);
    }

    return searchImpl(val, this.root);
  }

  protected _insertImpl(
    value: number,
    node: BinaryTreeNode<number> | null
  ): BinaryTreeNode<number> {
    if (!node) {
      return new BinaryTreeNode(value);
    }

    if (value <= node.value) {
      node.left = this._insertImpl(value, node.left);
    } else {
      node.right = this._insertImpl(value, node.right);
    }

    return node;
  }

  private _getMinimumNode(
    node: BinaryTreeNode<number> | null
  ): BinaryTreeNode<number> | null {
    if (!node) {
      return null;
    }

    const { left } = node;
    if (!left) {
      return node;
    }

    return this._getMinimumNode(left);
  }

  /**
   * Recursively get the minimum value in the tree.
   * @returns {*} The minimum value
   */
  getMinimum(): number | null {
    const minNode = this._getMinimumNode(this.root);
    return minNode != null ? minNode.value : null;
  }

  /**
   * Recursively get the maximum value in the tree.
   * @returns {*} The maximum value.
   */
  getMaximum(): number | null {
    function getMaximumImpl(
      node: BinaryTreeNode<number> | null
    ): number | null {
      if (!node) {
        return null;
      }

      const { right } = node;
      if (!right) {
        return node.value;
      }

      return getMaximumImpl(right);
    }

    return getMaximumImpl(this.root);
  }

  /**
   * Recursively delete a given value from the tree.
   * @param {number} val The value to delete.
   * @returns {BinaryTreeNode} The root node after deletion.
   */
  delete(val: number): BinaryTreeNode<number> | null {
    this.root = this._deleteImpl(val, this.root);
    return this.root;
  }

  protected _deleteImpl(
    value: number,
    node: BinaryTreeNode<number> | null
  ): BinaryTreeNode<number> | null {
    if (!node) {
      return null;
    }

    const nodeValue = node.value;
    const { left } = node;
    const { right } = node;
    if (value < nodeValue) {
      node.left = this._deleteImpl(value, left);
      return node;
    } else if (value > nodeValue) {
      node.right = this._deleteImpl(value, right);
      return node;
    }

    if (!left && !right) {
      return null;
    }

    if (!left) {
      return right;
    }

    if (!right) {
      return left;
    }

    const tempNode: BinaryTreeNode<number> = this._getMinimumNode(
      right
    ) as BinaryTreeNode<number>;
    node.value = tempNode.value;
    node.right = this._deleteImpl(tempNode.value, right);

    return node;
  }
}
