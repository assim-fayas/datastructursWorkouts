class Graph {
    constructor() {
        this.adjacencylist = {}

    }
    addvertex(vertex) {
        if (!this.adjacencylist[vertex]) {
            this.adjacencylist[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencylist[vertex1]) {
            this.addvertex(vertex1)
        }
        if (!this.adjacencylist[vertex2]) {
            this.addvertex(vertex2)
        }
        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
    }
    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencylist[vertex1].has(vertex2) &&
            this.adjacencylist[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencylist[vertex1].delete(vertex2)
        this.adjacencylist[vertex2].delete(vertex1)
    }
    removeVertex(vertex) {
        if (!this.adjacencylist[vertex]) {
            return
        }
        for (let adjacentvertex of this.adjacencylist[vertex]) {
            this.removeEdge(vertex, adjacentvertex)
        }
        delete this.adjacencylist[vertex]

    }

    bfsTraversal(startingVertex) {
        const visited = {};
        const result = [];
        const queue = [startingVertex];
        visited[startingVertex] = true;

        while (queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencylist[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }

    dfsTraversal(startingVertex) {
        const visited = {};
        const result = [];

        const dfs = (vertex) => {
            visited[vertex] = true;
            result.push(vertex);

            this.adjacencylist[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        };

        dfs(startingVertex);
        return result;
    }
    print() {
        for (let vertex in this.adjacencylist) {
            console.log(vertex + "=>" + [...this.adjacencylist[vertex]]);
        }
    }
}
const graph = new Graph()
graph.addvertex('A')
graph.addvertex('B')
graph.addvertex('C')
graph.addvertex('D')

graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('B', 'C')
graph.addEdge('C', 'D')
graph.print()

console.log(graph.dfsTraversal('A'));
console.log(graph.bfsTraversal('A'));



