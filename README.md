This This app showcases most of the basic functionalities of an Angular web app. The users page displays a list of users info (name and email). The data is fetched from JSONPlaceholder, an online REST API for Testing and Prototyping, by sending HTTP requests. The visitor will be able to edit, add or delete users. In a real world app, the users credentials would be ckecked against the data server to verify if they are allowed to perform such actions. The users list and the data server will be updated accordingly.
The Posts page displays on load all users' posts. A pagination menu will be used to scroll thru all the posts by displaying 10 posts per page, if any. A dropdown menu displays all the users' names and the related page of posts from the selected name will be displayed and the pagination menu will be hidden, if the user has only 10 posts or less. By clicking on a post title, the related comments will display on the right side along with commenters' avatars, illustrating the so called master/detail pattern.

To use:
 
1. Download or clone to your local machine
2. Move to your that directory (command prompt)
3. Run "npm install"
4. Run "npm start"

Of course you already have installed node on your machine!
