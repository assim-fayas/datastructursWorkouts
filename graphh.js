// class Graph {
//     constructor() {
//         this.adjacencylist = {}

//     }
//     addvertex(vertex) {
//         if (!this.adjacencylist[vertex]) {
//             this.adjacencylist[vertex] = new Set()
//         }
//     }
//     addEdge(vertex1, vertex2) {
//         if (!this.adjacencylist[vertex1]) {
//             this.addvertex(vertex1)
//         }
//         if (!this.adjacencylist[vertex2]) {
//             this.addvertex(vertex2)
//         }
//         this.adjacencylist[vertex1].add(vertex2)
//         this.adjacencylist[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1, vertex2) {
//         return (
//             this.adjacencylist[vertex1].has(vertex2) &&
//             this.adjacencylist[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1, vertex2) {
//         this.adjacencylist[vertex1].delete(vertex2)
//         this.adjacencylist[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex) {
//         if (!this.adjacencylist[vertex]) {
//             return
//         }
//         for(let adjacentvertex of this.adjacencylist[vertex]){
//             this.removeEdge(vertex,adjacentvertex)
//         }
//         delete this.adjacencyList[vertex]

//     }
//     print() {
//         for (let vertex in this.adjacencylist) {
//             console.log(vertex + "=>" + [...this.adjacencylist[vertex]]);
//         }
//     }
// }
// const graph = new Graph()
// graph.addvertex("A")
// graph.addvertex("B")
// graph.addvertex("C")
// graph.addEdge("A", "B")
// graph.addEdge("B", "C")
// graph.print()
// console.log(graph.hasEdge("A", "B"));
// console.log(graph.hasEdge("A", "C")); 
class Graph {
    constructor() {
        this.adjecencylist = {}

    }
    addvertex(vertex) {
        if (!this.adjecencylist[vertex]) {
            this.adjecencylist[vertex] = new Set()
        }
    }
    addedges(vertex1, vertex2) {
        if (!this.adjecencylist[vertex1]) {
            this.addvertex(vertex1)
        }
        if (!this.adjecencylist[vertex2]) {
            this.addvertex(vertex2)
        }
        this.adjecencylist[vertex1].add(vertex2)
        this.adjecencylist[vertex2].add(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adjecencylist[vertex1].delete(vertex2)
        this.adjecencylist[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjecencylist[vertex]){
            return
        }
        for(let adjecentvertex of this.adjecencylist[vertex]){
            this.removeEdge(vertex,adjecentvertex)
        }
        delete this.adjecencylist[vertex]
    }
    print() {
        for (let vertex in this.adjecencylist) {
            console.log(vertex+"=>" + [...this.adjecencylist[vertex]]);
        }

    }
}


const graph = new Graph()
graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addedges("A","B")
graph.addedges("B","C")
graph.removeVertex("A")



graph.print()