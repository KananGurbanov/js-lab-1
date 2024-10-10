// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const counters = [];
    const arr = [root, 's']; 
  
    let levelCount = 0;
  
    while (arr.length > 1) {
      const node = arr.shift();
  
      if (node === 's') {
        counters.push(levelCount);
        levelCount = 0;
        arr.push('s');
      } else {
        levelCount++;
        arr.push(...node.children);
      }
    }
  
    counters.push(levelCount);
  
    return counters;
  }

module.exports = levelWidth;
