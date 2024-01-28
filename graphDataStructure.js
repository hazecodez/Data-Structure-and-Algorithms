// class Graph {
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertex) {
//         if(!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = new Set()
//         }
//     }
//     addEdges(vertex1,vertex2) {
//         if(!this.adjacencyList[vertex1]) {
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]) {
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2);
//         this.adjacencyList[vertex2].add(vertex1);
//     }
//     display() {
//         for(let vertex in this.adjacencyList) {
//             console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
//         }
//     }
//     hasEdge(vertex1,vertex2){
//         return (this.adjacencyList[vertex1].has(vertex2) &&
//         this.adjacencyList[vertex2].has(vertex1))
//     }
//     removeEdge(vertex1,vertex2) {
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex) {
//         if(!this.adjacencyList[vertex]) {
//             return;
//         }
//         for(let adjacentVertex of this.adjacencyList[vertex]) {
//             this.removeEdge(vertex,adjacentVertex);
//         }
//         delete this.adjacencyList[vertex]
//     }
//     bfs(startingVertex) {
//         const visited = new Map();
//         const queue = [];
    
        
//         for (const vertex of this.adjacencyList.keys()) {
//           visited.set(vertex, false);
//         }
    
        
//         visited.set(startingVertex, true);
//         queue.push(startingVertex);
    
//         while (queue.length !== 0) {
          
//           const currentVertex = queue.shift();
//           console.log(currentVertex);
    
          
//           const adjacentVertices = this.adjacencyList.get(currentVertex);
    
          
//           for (const adjacentVertex of adjacentVertices) {
//             if (!visited.get(adjacentVertex)) {
//               visited.set(adjacentVertex, true);
//               queue.push(adjacentVertex);
//             }
//           }
//         }
//       }
// }
// const graph = new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addEdges("A","B")
// graph.addEdges("B","C")
// graph.addEdges("C","B")
// graph.removeVertex('A')
// graph.display()


  


//   graph.addVertex("A");
//   graph.addVertex("B");
//   graph.addVertex("C");
//   graph.addVertex("D");
  
//   graph.addEdges("A", "B");
//   graph.addEdges("A", "C");
//   graph.addEdges("B", "D");
//   graph.addEdges("C", "D");
//   graph.bfs("A");
  
class Graph {
    constructor() {
      this.adjacencyList = new Map(); 
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  
    dfs(startingVertex) {
      const visited = new Map();
  
     
      for (const vertex of this.adjacencyList.keys()) {
        visited.set(vertex, false);
      }
  
     
      this.dfsRecursive(startingVertex, visited);
    }
  
    dfsRecursive(vertex, visited) {
      
      visited.set(vertex, true);
      console.log(vertex);
  
      
      const adjacentVertices = this.adjacencyList.get(vertex);
  
      
      for (const adjacentVertex of adjacentVertices) {
        if (!visited.get(adjacentVertex)) {
          this.dfsRecursive(adjacentVertex, visited);
        }
      }
    }
  }
  
  
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "D");
  
  console.log("DFS starting from vertex 'A':");
  graph.dfs("A");
  