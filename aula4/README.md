Activity 4
====
This is a node app that showcases the usage of GET and POST methods, Handlebars templating, session cookies usage and Node's Filesystem library

To run the app, simply run on the terminal

    npm start
  
The app will start on http://localhost:3000/

The index page is a renderization of the files in the `views` folder. Until a request of a name is sent with the buttons, the "current session" paragraph will stay blank, and it will be filled with the name you sent

This app has 2 entry points:

    POST: /post
    GET: /get
    
The request from the get button goes to the GET entry point, and the one from the post button goes to the POST entry

Finally, each time a name is used in a session, it will be written to the file `files/names.txt`
> There is a problem involving the calls to the server methods that makes the writing of the names to occur more than once