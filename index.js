const express = require('express');
const path = require('path');
const marked = require("marked");
const fs = require('fs');

const app = express();
const port = 8000;
const handlebars = require('express-handlebars');
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
  layoutsDir: __dirname + '/views/layouts',
}));
const dir = path.join(__dirname, 'public');
app.use(express.static(dir))

const home = (_, res) => {
  fs.readdir('markdown', (_, files) => {
    const posts = files.map(file => {
      const rawDate = fs.statSync('markdown/' + file).birthtime
      const date = rawDate.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})
      return {
        ref: file.slice(0, file.length - 3),
        name: toTitle(file.slice(0, file.length - 3)),
        date: date,
        rawDate: rawDate
      }
    })
    posts.sort((left, right) => {
      if (left.rawDate < right.rawDate) {
        return 1
      } else {
        return -1
      }
    })
    res.render('main', {layout: 'index', posts: posts});
  })
}

app.get('/', home);
app.get('/posts', home);

function toTitle(text) {
  return text.replace(/(^\w|-\w)/g, (text) => text.replace(/-/, " ").toUpperCase());
}

app.get('/posts/:postName', (req, res) => {
  const fileName = 'markdown/' + req.params.postName + '.md'
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err == null) {
      fs.stat(fileName, (_, stats) => {
        const html = marked(data);
        const date = stats.birthtime.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})
        res.render('post', {layout: 'index', html: html, title: toTitle(req.params.postName), date: date});
      })
    } else {
      res.sendStatus(404)
    }
  })
})

app.listen(port, () => console.log(`App listening to port ${port}`));
