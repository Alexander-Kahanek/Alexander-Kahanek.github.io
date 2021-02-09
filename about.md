# Alexander R. Kahanek

<span style="color:blue">**<a href="mailto:alexanderkahanek@gmail.com">alexanderkahanek@gmail.com</a>
|
<a href="https://alexander-kahanek.github.io" target="_blank">Personal Website</a>
|
<a href="https://github.com/alexander-kahanek" target="_blank">GitHub</a>
|
<a href="https://linkedin.com/in/alex-kah" target="_blank">LinkedIn</a>**</span>

## **Programming skills**

```python
1. Python = [PyTorch, Keras, numPy, TensorFlow,Scikit-Learn,
2.          Pandas, Matplotlib, GeoPandas, Flask]
3. R <- c(Tidyverse, RandomForest, GGplot2
4.        ,Plotly, Highcharters, Shiny, Caret)
5. proficient = [C/C++, Elixir, Phoenix]
6. know = [SQL, JS, CSS, HTML]
```


<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.css" type="text/css" />
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis-network.min.js"> </script>
<center>
<h1>None</h1>
</center>

<!-- <link rel="stylesheet" href="../node_modules/vis/dist/vis.min.css" type="text/css" />
<script type="text/javascript" src="../node_modules/vis/dist/vis.js"> </script>-->

<style type="text/css">

        #mynetwork {
            width: 500px;
            height: 500px;
            background-color: #ffffff;
            border: 1px solid lightgray;
            position: relative;
            float: left;
        }

        

        

        
</style>

</head>

<body>
<div id = "mynetwork"></div>


<script type="text/javascript">

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

</script>
</body>
</html>


<!-- | <span style="color:blue">**_Area_**</span> | <span style="color:blue">**_Expertise_**</span> |
| :----------------------------------------- | ----------------------------------------------: |
| **Machine Learning**                       |                  _spaCy, PyTorch, RandomForest_ |
| **Data Analysis**                          |                     _EDA, Research, Predictive_ |
| **Data Visualisation**                     |                 _Tableau, plotly, highcharters_ |
| **Mathematics**                            |               _Statistics, Probability, Theory_ | -->

---

<!--

## **Currently**

&nbsp; &nbsp; **What I'm Doing**

: > I am an **_Undergraduate student_ at the University of North Texas**, pursuing a **Bachelors of Science in _Data Science_ with a minor in _Mathematics_, focused in _statistics and probability_**, with a plan to **gradute by _December of 2021_**.

&nbsp; &nbsp; **My Projects**

: > 1. **<a href="https://alexander-kahanek.github.io/project" title="My Project Page" target="_blank">My _personal webpage_</a>** hosts the final product for most of **my more _interesting projects_**.

2. **<a href="https://github.com/alexander-kahanek" title="My GitHub Page" target="_blank">My _github account_</a>** hosts all of **my _code_ and _documentation_**, which includes most of **my _school work_, as well as any projects**.

<!---

&nbsp; &nbsp; **Research**

: 1. Currently attending a **_Machine Learning_ focused _Research_ Program for the _Data Science and Information Technology department_** at the University of North Texas.

: 2. Currently **collaborating in a different _research project_** focused on using **COVID-19 tweet data to preform _Natural Language Proccessing_ with _flair_ and _spaCy_**.

--->

---


## **Employment**

`2020-Curr` **Research Assistant**

&nbsp; &nbsp; &nbsp; _University of North Texas_

: > Currently **performing my own research into the sentiment and causal impacts of COVID-19 in Twitter**.

`2020-2020` **NSF-REU Information Science Research**

&nbsp; &nbsp; &nbsp; _University of North Texas_

: > Worked with **Low-Resource Languages** and **Deep Learning Neural Networks** to develop generalized methods that **improve _the accuracy of_ Morphological Inflection _by 5%_**, without the need to change the NNs' architecture.

`2019-2020` **Mathematics Tutor**

&nbsp; &nbsp; &nbsp; _University of North Texas_

: > **Tutored over 400 fellow students in a multitude of _mathematics courses_**, learning how to **_illustrate_ and _convey_ complex concepts** to others effectively.

`2012-18` **Health Care Specialist (68W)**

&nbsp; &nbsp; &nbsp; _United States Army, National Guard (MA, TX)_

: > **Spearheaded a team of _15 people_**, that **reduced response time by _50%_**, for the East African Response Force, while working in the medical sector learning how to **solve problems efficiently and quickly**.

`2015-17`**Emergency Medical Technician**

&nbsp; &nbsp; &nbsp; _American Medical Respoonse (MA, TX)_

: > **Responded to over _600_ emergent 911 calls**, where I learned the importance of **_thorough documentation_**.


## **Education**

`2018-21` **University of North Texas**

: B.S. **_Data Science_**, Minor in **_Mathematics_**, **_Statistics_** Certification

: Current **_GPA_**: **3.9**

<!--

## **Soft Skills**


```python
1. Effective Communication
2. Stategic Planning and Leadership
3. Detail Oriented
4. Analytical Problem Solving
```

-->

# **Contact Links**

<span style="color:blue">**<a href="mailto:alexanderkahanek@gmail.com">alexanderkahanek@gmail.com</a>
|
<a href="https://alexander-kahanek.github.io" target="_blank">Personal Website</a>
|
<a href="https://github.com/alexander-kahanek" target="_blank">GitHub</a>
|
<a href="https://linkedin.com/in/alex-kah" target="_blank">LinkedIn</a>**</span>
