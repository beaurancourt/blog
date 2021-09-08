I wanted an extremely simple blogging setup where I could just add/edit
markdown files and see that immediately reflected. The way this works is have a
nodejs server running express-handlebars. Node runs through the markdown folder
and converts the files into posts, and runs those through the post view and the
index layout. These get styled with https://milligram.io/
