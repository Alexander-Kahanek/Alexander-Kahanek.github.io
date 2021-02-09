// initialize global variables.
var edges;
var nodes;
var network; 
var container;
var options, data;


// This method is responsible for drawing the graph, returns the drawn network
function drawGraph() {
    var container = document.getElementById('mynetwork');
    
    

    // parsing and collecting nodes and edges from the python
    nodes = new vis.DataSet([{"id": 5, "label": "Machine Learing", "shape": "dot", "size": 15}, {"id": 6, "label": "Deep Learning", "shape": "dot", "size": 15}, {"id": 7, "label": "Reinforcement Learning", "shape": "dot", "size": 15}, {"id": 8, "label": "Research Analysis", "shape": "dot", "size": 15}, {"id": 9, "label": "Statistical Analysis", "shape": "dot", "size": 15}, {"id": 10, "label": "Predictive Analysis", "shape": "dot", "size": 15}, {"id": 11, "label": "Data Analysis", "shape": "dot", "size": 15}, {"id": 12, "label": "Data Visualization", "shape": "dot", "size": 15}, {"id": 13, "label": "ML Web App Development", "shape": "dot", "size": 15}, {"id": 0, "label": "Artificial Intelligence", "shape": "dot"}, {"id": 1, "label": "Analysis", "shape": "dot"}, {"id": 2, "label": "Data", "shape": "dot"}, {"id": 3, "label": "Other", "shape": "dot"}, {"id": 14, "label": "Tableau", "shape": "dot", "size": 10}]);
    edges = new vis.DataSet([{"from": 0, "to": 5}, {"from": 0, "to": 6}, {"from": 0, "to": 7}, {"from": 1, "to": 8}, {"from": 1, "to": 9}, {"from": 1, "to": 10}, {"from": 2, "to": 11}, {"from": 2, "to": 12}, {"from": 3, "to": 13}, {"from": 1, "to": 11}, {"from": 14, "to": 12}]);

    // adding nodes and edges to the graph
    data = {nodes: nodes, edges: edges};

    var options = {
"configure": {
    "enabled": false
},
"edges": {
    "color": {
        "inherit": true
    },
    "smooth": {
        "enabled": false,
        "type": "continuous"
    }
},
"interaction": {
    "dragNodes": true,
    "hideEdgesOnDrag": false,
    "hideNodesOnDrag": false
},
"physics": {
    "enabled": true,
    "stabilization": {
        "enabled": true,
        "fit": true,
        "iterations": 1000,
        "onlyDynamicEdges": false,
        "updateInterval": 50
    }
}
};
    
    

    

    network = new vis.Network(container, data, options);

    


    

    return network;

}

drawGraph();