# SneakerCollectorApp
Project pitch:<br>
Sneaker app allows the user to upload a photo/small profile of their sneakers and vote/like on other user's sneakers.

user stories:<br>
-As a user I can post/upload a photo of my sneaks.<br>
-I can give my username to associate with the post.<br>
-I can give a description to my sneakers in the form.<br>
-I can see my sneakers rendered on the screen once the form is submitted.<br>
-I can scroll through sneakers in the database.<br>
-I can 'like' sneakers in the database.<br>
-I can see my likes persisted through the database.<br>
-(if there's time/we can figure it out) I can sort through the database in order of likes.<br>

rough wireframe:<br>
![alt text](https://i.imgur.com/65GCPo0.jpg)


FORM:<br>
-div for form<br>
    -form element to upload the users sneakers<br>
        -header title that says something like "add your sneakers"<br>
        -text input fields, username, brand of shoes, add on features, etc.<br>
        -input for submit button<br>

SHOE CARDS:<br>
-div in html that contains all of the shoes in the database<br>
    -js append div for shoe card,<br>
        -js append img, p elements into shoe card for image and details<br>

-db.json of the shoes<br>