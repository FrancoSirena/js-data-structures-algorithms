# Purpose

This repo it is just a base for me to keep the different data structure and
sorting algorithm implemenations in one place.  
All the examples here were based on what we have available on @egghead
https://egghead.io/courses/data-structures-and-algorithms-in-javascript

## Data Structures
Basic implementations of the following:
### Stack
LIFO 
### Queue
FIFO
### Priority Queue
Similiar to que `Queue` but here we can define if the `item` has priority or
not, being them the first to get out first 
### Linked List
List where each item knows about its `next` item
### Doubly Linked List
Each item in the list knows about the `next` and `previous` items next to them
### Cyclical Linked List
Where the Tail points to the Head always
### Graphs
Simple graph implementation where each item has N neighbour items, each
relation we store in a `edge` list, to know who relates to who. We have here
the `breadthFirstSearch` impl and the `depthFirstSearch` as well 
### Trees
Simple tree implementation where to set a `root` and just add nodes beneath it
### Binary Tree
Binary tree with right and left leafs and we implement the the algorithms to
transverse it in three different types: IN ORDER; PRE ORDER; POST ORDER.

## Algorithms
Basic implementations of the following:
### Bubble Sort
Optimized implementation
### Insertion Sort
Explained
### Merge Sort
Explained
### Quick Sort
Explained
### Helpers
Dummy `generate_array` method to get random numbers from.
