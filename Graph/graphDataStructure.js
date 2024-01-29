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
