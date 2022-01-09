# FlavorExpress
FlavorExpress is an application that allows user to view recipes. User are able to create an account to join the community. Once joined, users can leave comments, upload recipes, rate other recipes and delete their own recipes or ratings. Flavor Express is a good place to share your recipes, thoughts and ideas of cooking. The application also provides Express Hints for busy users to shorten the cooking process. It is worth trying out. So why wait? Join our community and enjoy sharing recipes and tips.

#### This page is licensed under (click badge for license page): 
[![license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## User Story
As a busy person, when I use Flavor Express, I am able to view recipes. When I sign-up, I can login using my username and password. Once logged in, I am taken to my dashboard page. I can create a new recipe using the form, click create button and a newly created recipe will appear in my dashboard. When I click on one of my recipe photos or edit recipe button, I am taken to the edit page where I can edit the title, ingredients, direction, hint or photo by clicking the update recipe button or delete the recipe using the delete recipe button. When I click update recipe, then I am redirected to my dashboard and that recipe is updated. When I click on view recipe button or the recipe picture on the recipes page, I am taken to the single recipe where I can view the picture, ingredients, direction, express hint and rate the recipe with cookies icon or leave a comment, then click on rate it. I am able to delete any rating I have on the recipe and see other comments as well. If I am not logged in, I can see the recipe and the comments or ratings but cannot edit them even if they were posted by me. When I click on logout, I return to the main page.

## Built With
* HTML
* CSS/Bulma
* JavaScript
* Node.js, Express
* Express-Session
* Handlebars.js
* MySQL, Sequelize ORM
* Dotenv
* Insomnia
* Heroku
* AWS-S3
* Multer/MulterS3
* MVC structure
* UUID
* bcrypt

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Challenges](#challenges) 
* [Collaborators](#collaborators)
* [Website](#website)

## Installation
To install this application, clone the repository.
Run $npm i.
Create an .env file.
In the file, add your database information and AWS access code. 

## Usage
Use this application to share and store your recipes. You can also find new recipes and ways to make cooking a better experience. Enjoy using this application where cooking and sharing brings endless possibilities. 

## Challenges
We had difficulties uploading pictures to handlebar and eventually found out that files are already mapped to public folder which the route should omit. Getting the parallax background works perfectly with a mobile responsive flex also consumes a lot of our time. Restful API routes are the focal point to ensure authentication after a user logged in and making sure GET, POST, PUT, and DELETE work properly. Nevertheless, git merging conflict is still happening close to the end of our project. Overall, it was a fun project and the best thing is to have a team with good communication skills and everyone contribute to the project.

## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
If you want to contribute, please contact one of the collaborators.

## Collaborators
[Kosal Cheykim GitHub](https://github.com/kcheykim) -- [kosalcheykim@gmail.com](mailto:kosalcheykim@gmail.com)<br/>
[Kurtis Hight GitHub](https://github.com/mockcomic) -- [hightkurtis@gmail.com](mailto:hightkurtis@gmail.com)<br/>
[Jose Rivera GitHub](https://github.com/jrera1796) -- [riverajose1796@gmail.com](mailto:riverajose1796@gmail.com)<br/>
[Ching Leung GitHub](https://github.com/ricky0320) -- [ricxx0320@gmail.com](mailto:ricxx0320@gmail.com)

## WebSite
https://flavor-express.herokuapp.com/<br />
![flavor-express](./public/img/flavor-express.png?raw=true)<br />
