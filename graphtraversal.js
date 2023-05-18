function minDistance(dist,sptSet)
{
      
    // Initialize min value 
    let min = Number.MAX_VALUE;
    let min_index = -1;
      
    for(let v = 0; v < V; v++)
    {
        if (sptSet[v] == false && dist[v] <= min) 
        {
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
}
  
function printSolution(dist)
{
    document.write("Vertex \t\t Distance from Source<br>");
    for(let i = 0; i < V; i++)
    {
        document.write(i + " \t\t " + 
                 dist[i] + "<br>");
    }
}
  

function dijkstra(graph, src)
{
    let dist = new Array(V);
    let sptSet = new Array(V);
      

    for(let i = 0; i < V; i++)
    {
        dist[i] = Number.MAX_VALUE;
        sptSet[i] = false;
    }
      
 
    dist[src] = 0;
      
    // Find shortest path for all vertices 
    for(let count = 0; count < V - 1; count++)
    {
          
  
        let u = minDistance(dist, sptSet);
          
        // Mark the picked vertex as processed 
        sptSet[u] = true;
          
       
        for(let v = 0; v < V; v++)
        {
              

            if (!sptSet[v] && graph[u][v] != 0 && 
                   dist[u] != Number.MAX_VALUE &&
                   dist[u] + graph[u][v] < dist[v])
            {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
      
    // Print the constructed distance array
    printSolution(dist);
}