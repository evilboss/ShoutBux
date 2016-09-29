


# ShoutBux

A twitter like application that lets you post a “shout”(with a max character limit) to your timeline.

##Requirements

* Node Js
* npm
* Meteor Js


##Contents:
* [Installing Meteor](#step1)
* [Setting Up](#step2)
* [Running The App](#step3)
* [Install](#step4)
* [Start Page](#step5)
* [Specification](#specifications)
* [Notes](#notes)

### Installing Meteor

On Windows, simply go to https://www.meteor.com/install and use the Windows installer.

On Linux/macOS, use this line:

```bash
curl https://install.meteor.com/ | sh
```

### Setting Up

* Clone this repo <https://github.com/evilboss/ShoutBux>
* Make sure you've installed Meteor locally


### Running The App

Simply install dependencies and start your app with 
```bash 
./start.sh
```
Then you can access the app on <http://localhost:3000>

### Running Tests

In this app, every part of the client side is fully tested using the familiar tools like Mocha, Chai and Sinon.

Run tests with:


```bash
./test.sh
```

**See package.json for more information about testing setup.**

### Start Page
You can now login using these credentials

| username 	| password 	|
|-------------	|:--------:	|
| logan 	| password 	|
| scott 	| password 	|
| cable 	| password 	|
| xavier 	| password 	|
| quicksilver 	| password 	|
| tony 	| password 	|
| steve 	| password 	|
| natasha 	| password 	|
| clint 	| password 	|
| rhodey 	| password 	|

    
### Notes
**NOTE:** If this gives you missing module errors, React requires npm v3. Here's how to install npm3 and get it setup.
> ```bash
> npm install -g npm@3.8.5
> cd ShoutBux-app 
> rm -rf node_modules
> npm install
> meteor
> ```

### Specs
* [x] Must be written in NodeJS frameworks (expressJS, meteorJS etc).
* [x] Must have its own Repository(GitHub, BitBucket etc).
* [ ] Must have testing.
* [x] Must use Database storage(MySQL, sqLite or *MongoDB* etc).
* [x] A README file that contains the information about the application and the steps on how to run it.
* [ ] Must have a high level app design structure diagram. (Important!)

### Requirements
*  [x] The application should have a simple login feature
  * [x] Must implement correct form handling/validation.
  * [x] Seed the app with atleast 10 users.

* [ ] Authorized users can post, edit, delete a “shout” to their own timeline.
  * [ ]  A “shout” should contain 32 chars max.
  * [x] Should contain date posted ( momentjs library can be used)
  * [x]  “Shouts” should be sorted by date posted - latest first.
  * [ ] Only the owner of the “shout” can alter it.
* [ ] Only users that follow the other can see each others timeline.
  * [ ] Include this on the seeder where in a user follows other user
* [ ] Timelines should update realtime.
  * [ ] Whenever User X is looking at User Y’s timeline, every update of Y’s timeline should directly reflect to User X’s view of User Y’s timeline.
* [ ]  Use your imagination for the look and feel of the app.
* [ ] Candidate should demonstrate test suite implementations.


