# FuzzBox

This is a full stack RESTful bbs app. It is built with Node.js, Express and MongoDB, and styling with Bootstrap.

## Live Demo

To see a demo of this app, go to https://fuzzbox.herokuapp.com/

## Features

* RESTful routes
    * Create
    * Update
    * Edit
    * Delete
* Authentication
    * Register
    * Login and logout
* Authorization
    * One cannot create or manage posts without authenticated
    * One cannot make change on posts and comments created by other users
* Post local photos
* Interactive flash messages 

## Installing

> This app contains API keys to private database, so please replace them with your own database resources before running on local machine. However, feel free to clone this repository if necessary.
>> A seed database is provided for your convinience. Please unquote Line 24 in app.js to use it.

### Clone or download this repository
```
https://github.com/monocosmo/FuzzBox.git
```
### Install dependencies
```
npm install
```
> Please check package.json for a complete dependencies list.

## Deployment

Please setup your own environment variables for all process.env in the code during deploying.

## Built With

* [express](https://expressjs.com/) - Web framework
* [npm](https://www.npmjs.com/) - Dependency Management
* [mongoDB](https://www.mongodb.com/) - Database
* [passport](http://www.passportjs.org/) - Authentication
* [ejs](http://ejs.co/) - Front-end
* [bootstrap](https://getbootstrap.com/docs/3.3/) - Styling

## Platforms

* [Cloud9](https://c9.io/)
* [Heroku](https://www.heroku.com/)
* [mlab](https://mlab.com)
* [Cloudinary](https://cloudinary.com/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This app is developed based on the project of Udemy course - [The Web Developer Bootcamp by Colt Steele](https://www.udemy.com/the-web-developer-bootcamp/).
* Also appreciate Colt's dogs' accompany all along this fantastic course.