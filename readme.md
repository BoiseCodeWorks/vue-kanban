#Vue-Kanban

A non trivial application utilizing vuejs and node


###The Setup N-tier

***NOTE:*** This project is going to take a while

Perhaps on of the most important skills to obtain on your road to becoming a Software Engineer is the ability to work on large projects. Especially when those larger projects have a code scaffolding that has been set up by someone other than yourself. It is important to be able to jump into the mix of a development teams build and disect what everything is doing. 

As we move into these larger projects we are also going to start enforcing stricter guidelines to help teach the concepts of Object Oriented Programming.

You will notice that there are two main directories in this project. One for the frontend and the other is for the server. Having these distinct directories helps create a separation of concerns. To help cement this even further you will want to open up two instances of vscode, one for each directory. 

You will know you have opened the folders correctly when you can press `f5` to start the server and `ctrl/cmd+shift+b` to start the client.

The goal of each of these projects is to be decoupled from each other. Meaning your web front-end should have no idea if your backend ever has to change databases, switch servers, or any number of other things that can often occur. Likewise our backend server shouldn't care at all about what JS-Flavor-of-the-Week-Framework we are using, or even if requests are coming from a mobile application. 

![n-tier](http://www.amzi.com/articles/youbet_architecture.gif)


###The Server
On the server we are utilizing a node-mongodb setup with express sessions and a mongoose ORM. The server side code has been setup in a somewhat oppionated architecture that will help and hinder you. You will want to make sure that you work within the confines of what has been setup for you to this point. 

###The WWW Client
The Web client has been setup to utilize one of the shiney new javascript frameworks Vuejs. There are several advantages to using this setup but again it will force you into utilizing a structure that you may not be ver comfortable with. 


###Feature Requests (AKA your tasks)

Kanban is a simple enough application. Users have the request to be able to create and manage boards, lists, and tasks. Tasks should also have the ability to add notes or comments and should be assigned to individual users. This setup will take a while to get all ironed out but we have some time to work on it so don't fret.

A board manages several lists. Once created lists can not be transfered between boards but they can be removed. If a list is removed go ahead and remove all of the tasks and comments on the list as well.

A task should be able to move between any of the lists on whatever board it was created. Tasks can be removed individually. 

Comments always belong to a task and will transfer with the task when moved. This should not require any effort on your part. If a comment is created only the user who created the comment should be able to edit/remove it unless of course the task, list, or board is removed. 

It will probably be helpful to start on the backend of this application first. Utilize a tool like postman to create a user and start creating and editing your boards and lists which has been setup for you already. Then move onto the other collections. 

The active user is always stored on the server side via sessions so you should be able to enforce some of the security concerns using something like `req.session.uid`

For now all users can see all collections and anyone can create boards, lists, tasks, or comments. Once  we have all of the features working we will move to an invite only board setup that will have boards belonging to a primary user and having contributors.
