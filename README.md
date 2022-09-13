## Table of contents 👀
* [General info](#general-info)
* [Technologies](#technologies)
* [Blog](#blog)
* [Setup](#setup)


### General info
The anime REST API was made to show some love for the anime recomendations that are all gathered here:  https://www.reddit.com/r/anime/wiki/recommendations/

#### The ANIME Object 
| Properties | Description | Type  |
|:----------- |:---------------|:--------|
|title| the anime title | String| 
|genre| the description | String | 
|synopsis|words associated with the tea  |String | 
|aired|country where the tea is first made | String| 
|status|time to brew in minutes | Number | 
|source|best temperature in Celsius to drink | Number | 
|duration| the description | String | 
|image| an image url | String |
|comments|any comments posted about the tea |Array of String | 

#### Routes ⚡
| Routes | HTTP Methods| Description
|:------- |:---------------|:--------------
| /anime      | GET                  | Displays all anime recomendations
| /anime      | POST               | Creates a new anime recomendations
| /anime      | DELETE            | Deletes all anime
|/anime/:title| GET     | Displays a specific anime, given its title
|/anime/:title| POST  | Adds a comment to a specific anime, given its title
|/anime/:title| DELETE | Deletes a specific anime, given its title
	
### Technologies
Project is created with:
<p>
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" >   
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/Made%20with-Render-1f425f.svg">
</p>

* Node version: 18.5.0
* Express version: 4.18.1
* Mongoose version: 6.6.0
* Multer version: 1.4.5
* MongoDB Atlas

#### 👉 Deployed at: 
> Note: render can load the page quite slow p please wait at least 30s. Once it loads, it should run smoothly. Please let me know if you find any bugs or errors



### Setup
To run this project locally, clone repo and add an `.env` file in the root:
```
DB_STRING='mongodb+srv://username:password@cluster0.eetsx.mongodb.net/database_name'
```

Then execute in your terminal:
```
$ npm install
$ npm start or node server.js
```

### Next Steps
- Populate database (pending to)
- Make a simple cilent side face (pending to)