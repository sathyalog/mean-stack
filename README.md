# mean-stack
A basic example in setting up mean framework along with form submission. With form submission, form values will get stored in mongodb.

Install mongodb and create a database name 'test'.

Before you run project make sure to run mongod.exe from mongodb->bin folder.

To make your work simple, i have created a batch file that open all command prompts.
For front-end folder alone, you have to run **gulp server**.
For back-end folder, initially it establishes connection to db.Make sure you run mongod.exe before you run batch file. Once it connects to db, it prompts to enter cmd. Press ctrl+c to come out of it. Server runs automatically from this point.

######How to run Front-End?

Navigate to front-end folder and open cmd and run **_gulp serve_**

######How to run Back-end?

Navigate to back-end folder and run **_node server.js_** in cmd prompt

######How to contribute and commit files?

Just navigate to mean-stack folder and push files after commit.

######How to work with mongo?

Install mongo in your machine and go to bin folder and run **_mongod_**.

######How to see all values in DB?

_First,_ run cmd prompt(gulp serve) from front end folder

_Second,_ run cmd(node server.js) from back end folder

_Third,_ run mongod.exe from bin folder(C:\Program Files\MongoDB\Server\3.2\bin)

> Now hit **http://localhost:5000/api/message** in browser to see all values