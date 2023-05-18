
var n;
    n = prompt();
    var m;
    m = prompt();
     
    var adjMat = new Array(n+1);
    for(let i = 0; i < adjMat.length; i++){
        adjMat[i] = new Array(n+1);
    }
     
    for(let i = 0; i < m; i++){
        var u = prompt();
        var v = prompt();
        adjMat[u][v] = 1;
        adjMat[v][u] = 1;
        // for a directed graph with an edge pointing from u to v,we just assign
        // adjMat[u][v] as 1
    }