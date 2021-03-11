# <span style="color:blue">Completed Projects</span>

These are only some of my favorite projects; many, many more can be found in my GitHub Repositories.

<!-- trump nickname generator -->

<!-- title -->

### <a href="https://github.com/Alexander-Kahanek/trump_nickname_gen" title="GitHub Repository" target="_blank">TrumpGen: What nickname would Trump give you?</a> &nbsp; ![image](/assets/icons/rsz_python-logo.png) &nbsp; ![image](/assets/icons/elixir-phoenix-logo.png)

<!-- body text -->

&nbsp; &nbsp; _Deep Learning Language Generation_ `January 1, 2021`
: > I walk through the initial analysis and creation, training, and implementation of a LSTM Neural Network model utilizing nicknames given by Donald Trump, <a href="https://en.wikipedia.org/wiki/List_of_nicknames_used_by_Donald_Trump" title="trump nickname data source" target="_blank">_using data scraped directly from Wikipedia_</a>. The trained model predicts the most likely nickname a given name would have, based solely on Trump's nickname vocabulary. <a href="https://nbviewer.jupyter.org/github/Alexander-Kahanek/trump_nickname_gen/blob/main/1_intial_analysis.ipynb" title="analysis python notebook" target="_blank">_The Analysis_</a> walks through the basic Exploratory Data Analysis done on the dataset, to examine its applicability for Deep Learning and navigating the challenges of producing generative text with a low volume of data _(n=162)_. <a href="https://nbviewer.jupyter.org/github/Alexander-Kahanek/trump_nickname_gen/blob/main/3_word.nn.gen.ipynb" target="_blank">_The Notebook_</a> walks through all the steps, from encoding affix embeddings to decoding the probability distributions, to extract the most likely nickname. I also implemented the model to a Phoenix based Web Application using Elixir to interface with Python directly. _(currently working on displaying this in a good format.)_

<!-- image -->

<!-- buttons -->

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://nbviewer.jupyter.org/github/Alexander-Kahanek/trump_nickname_gen/blob/main/1_intial_analysis.ipynb" target="_blank"><img src="b.analysis.png" /></a> &nbsp; &nbsp; <a href="https://nbviewer.jupyter.org/github/Alexander-Kahanek/trump_nickname_gen/blob/main/3_word.nn.gen.ipynb" target="_blank"><img src="b.notebook.png" /></a> &nbsp; &nbsp; <a href="https://github.com/Alexander-Kahanek/trump_nickname_gen" target="_blank"><img src="b.github.png" /></a>

<!--- Rubbish Dashboard project --->

<!-- title -->

### <a href="https://github.com/Alexander-Kahanek/Rubbish_Clustering" title="GitHub Repository" target="_blank">Where's the Rubbish at? </a> &nbsp; ![image](/assets/icons/rsz_1rsz_1rsz_619px-r_logosvg.png) &nbsp; ![image](/assets/icons/rsz_python-logo.png)

<!-- body text -->

&nbsp; &nbsp; _Data Visualization_ `October 1, 2020`
: > I collaborated with <a href="https://www.rubbish.love/" title="Rubbish Website" target="_blank">_Rubbish, co._</a> to visualize their community-led trash cleanup of SoMa West, CA, which contained over 25,000 points of litter and issues collected! This data dashboard was created using R Shiny and Python, and the original dataset can even be downloaded for public use!

<!-- image -->
<p align="center"><img src="https://alexander-kahanek.github.io/assets/img/dashboard-img.png"></p>

<!-- buttons -->

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://rubbishlove.shinyapps.io/dashboard/" target="_blank"><img src="b.dashboard.png" /></a> &nbsp; &nbsp; <a href="https://github.com/Alexander-Kahanek/SoMa_Dashboard" target="_blank"><img src="b.github.png" /></a> &nbsp; &nbsp; <a href="https://medium.com/rubbish-love/a-litter-dashboard-for-soma-west-a18643b19d6a" target="_blank"><img src="b.medium.png" /></a>

<!-- Low-Resource Language Morphological Inflection -->

<!-- title -->

### <a href="https://github.com/foltaProject/folta/tree/master/morphology_training_gml-nno" title="GitHub Repository" target="_blank">How do you morphologically inflect 'vorswinden'?</a> &nbsp; ![image](/assets/icons/rsz_python-logo.png)

<!-- body text -->

&nbsp; &nbsp; _Deep Learning, Research_ `August 25, 2020`
: > Utilizing the results and data from <a href="https://sigmorphon.github.io/sharedtasks/2020/task0/" title="GitHub Repository" target="_blank">_Sigmorphon 2020 Task 0_</a> we improved the accuracy of Morphological Inflection in Low-Resouce Languages by 5%, namely Middle Low German (GML) and Norwegian Nynorsk (NNO). We accomplished this without the need to change the architecture of the neural network, instead we combined other targeted High-Resource Languages and our given Low-Resource Language, such as English and German being added to Middle Low German data, to artificially add volume that imrpoved inflection predictions of the Low-Resouce Language.

<!-- image -->

<p align="center"><img src="https://alexander-kahanek.github.io/assets/img/morphological_inflection.png"></p>

<!-- buttons -->

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://github.com/foltaProject/folta/blob/master/morphology_training_gml-nno/data_augmentation_paper.pdf" target="_blank"><img src="b.paper.png" /></a> &nbsp; &nbsp; <a href="https://nbviewer.jupyter.org/github/foltaProject/folta/blob/master/morphology_training_gml-nno/neural-transducer_modifications/lemma.analysis.ipynb" target="_blank"><img src="b.notebook.png" /></a> &nbsp; &nbsp; <a href="https://github.com/foltaProject/folta/tree/master/morphology_training_gml-nno" target="_blank"><img src="b.github.png" /></a> &nbsp; &nbsp;

<!--- trivago ML project --->

<!-- title -->

### <a href="hotel.html" title="Finished Product" target="_blank">Hotel Bookings, Canceled or Not?</a> &nbsp; ![image](/assets/icons/rsz_1rsz_1rsz_619px-r_logosvg.png)

<!-- body text -->

&nbsp; &nbsp; _Machine Learning, Classification_ `April 30, 2020`

: > Using <a href="https://github.com/rfordatascience/tidytuesday/blob/master/data/2020/2020-02-11/readme.md" title="Dataset Repository" target="_blank">_Trivago's hotel booking data_</a>, I walk through an in-depth feature analysis to find important fields that could be used to improve customer retention. I also walk through the implementation of the three presented Random Forest models for predicting whether a customer will cancel their booking prior to arrival, each with their own benefits of reducing incorrectly predicted cancelations (False Negative Rate) and improving the correctly guessed cancelations (True Positive Rate).

<!-- Results Table -->

| Proposed Model | **_Accuracy_** | **False Negative Rate** | **True Positive Rate** |   **ROC**   | **Confidence Threshold** |
| -------------- | :------------: | :---------------------: | :--------------------: | :---------: | :----------------------: |
| Model 1        |     0.7846     |         0.05247         |      **0.36362**       |   0.91189   |           0.63           |
| Model 2        |     0.7683     |       **0.01623**       |        0.19981         | **0.92109** |           0.8            |
| Model 3        |   **0.7878**   |         0.03687         |        0.30815         |   0.91513   |           0.7            |

<!-- | Measurement   | Model 1  | Model 2  | Model 3  |
|---|:---:|:---:|:---:|:---:|:---:|
| **_Accuracy_**  |0.7846  | 0.7683  | **0.7878**  |
| **False Negative Rate**  | 0.05247  | **0.01623**  | 0.03687  |
| **True Positive Rate**   | **0.36362**  | 0.19981  | 0.30815  |
| **ROC**  |  0.91189   | **0.92109**  | 0.91513  |
| **Confidence Threshold**  |  0.63  | 0.8  | 0.7  | -->

<!-- buttons -->

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="hotel.html" target="_blank"><img src="b.analysis.png" /></a> &nbsp; &nbsp; <a href="https://github.com/Alexander-Kahanek/Trivago_Classification" target="_blank"><img src="b.github.png" /></a>

<!--- covid monte carlo project --->

<!-- title -->

### <a href="covid.html" title="Finished Product" target="_blank">Predicting COVID-19 in Italy.</a> &nbsp; ![image](/assets/icons/rsz_1rsz_1rsz_619px-r_logosvg.png)

<!-- body text -->

&nbsp; &nbsp; _Predictive Analysis_ `March 24, 2020`
: > I walk through the full process of manipulating the raw COVID-19 data <a href="https://data.humdata.org/dataset/novel-coronavirus-2019-ncov-cases" title="the data source" target="_blank">_from a compilation of John Hopkins' dataset_</a>, analyzing the data for patterns, and creating and implementing a hand built Markov Chain type Monte Carlo Algorithm to predict the future number of Cumulative Deceased Cases in Italy. The predictions had great accuracy to the actual reported cases, especially as only 2 months of data was used. However, this accuracy tends to drop off over time, showing this is a better short-term predictor.

<!-- : > This project uses the COVID-19 data to create and implement a hand built Markov Chain type Monte Carlo Algorithm to predict the future number of Cumulative Deceased Cases in Italy, as well as take an in-depth analysis of Italys' Deceased Cases. -->

<!-- image -->

<p align="center"><img src="https://alexander-kahanek.github.io/assets/img/italy_covid_graphs.png"></p>

<!-- buttons -->

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="covid.html" target="_blank"><img src="b.analysis.png" /></a> &nbsp; &nbsp; <a href="https://github.com/Alexander-Kahanek/COVID_Monte_Carlo" target="_blank"><img src="b.github.png" /></a>

<!--- traffic analysis project --->

<!-- title -->

### <a href="accidents.html" title="Finished Product" target="_blank">Weekday vs Weekend: Accident Analysis in Texas.</a> &nbsp; ![image](/assets/icons/rsz_1rsz_1rsz_619px-r_logosvg.png)

<!-- body text -->

&nbsp; &nbsp; _Exploratory Data Analysis_ `April 21, 2020`
: > In this group Data Analysis we dive into exploring the patterns in Texas Accidents from the middle of 2014 to the end of 2019. Along with a general analysis of the dataset, we found patterns that showed the number of accidents drop significantly during the weekend (as expected). We also ranked the highways and intersates to show which are the worst for Weekdays and Weekends respectively. Finally, we created an interactive graph that can be used to visually explore all the data across texas.

<!-- image -->

<p align="center"><img src="https://alexander-kahanek.github.io/assets/img/accidents-day-week.png"></p>

<!-- buttons -->

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="accidents.html" target="_blank"><img src="b.analysis2.png" /></a> &nbsp; &nbsp; <a href="https://github.com/Alexander-Kahanek/TX_Accidents" target="_blank"><img src="b.github.png" /></a>

<!--- world happiness project

### <a href="happiness.html" title="Finished Product" target="_blank">World Happiness Correlations</a> &nbsp; ![image](/assets/icons/rsz_python-logo.png)

&nbsp; &nbsp; _Exploratory Data Analysis_ `March 14, 2020`
: > This project is __my first data analysis__, which is __centered around the use of *Pearsons r*__, __and *r squared*__, to __find *correlations* in Happniness scores__ accross many Countries.

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="happiness.html" target="_blank"><img src="button-output.png" /></a> &nbsp; &nbsp; &nbsp; <a href="https://github.com/Alexander-Kahanek/World_Happiness" target="_blank"><img src="button-github.png" /></a>

--->

<!-- ---
# <span style="color:blue">In Progress Projects</span> -->

<!--- covid twitter research project ---!>

<!-- title -->

<!-- ### <a href="https://github.com/Alexander-Kahanek/COVID_Research" title="GitHub Repository" target="_blank">Researching COVID-19 Tweets</a> &nbsp; ![image](/assets/icons/rsz_python-logo.png) -->

<!-- body text -->

<!-- &nbsp; &nbsp; _Natural Language Processing, Research_ `In Progress`
: > This is a research project that is currently in progress. The current work is being constantly updated in my GitHub Repository below. In short, the research is using state-of-the-art pre-trained Natural Language Processing models to analyze the temporal and geospatial sentiment of COVID-19 and CDC guidelines across Twitter in the United States. -->

<!-- buttons -->

<!-- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://github.com/Alexander-Kahanek/COVID_Research" target="_blank"><img src="b.github.png" /></a> -->
