const { json2xml } = require('xml-js')
const fs = require('fs');

function toTitle(text) {
  return text.replace(/(^\w|-\w)/g, (text) => text.replace(/-/, " ").toUpperCase());
}

function getPosts() {
  const files = fs.readdirSync('markdown')
  const posts = files.map(file => {
    const rawDate = fs.statSync('markdown/' + file).birthtime
    const date = rawDate.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})
    const fileId = file.slice(0, file.length - 3)
    return {
      url: `http://beaushinkle.xyz/posts/${fileId}`,
      name: toTitle(fileId),
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

  return posts.map(post => {
    return {
      "type": "element",
      "name": "item",
      "elements": [
        {
          "type": "element",
          "name": "title",
          "elements": [
            {
              "type": "text",
              "text": post.name
            }
          ]
        },
        {
          "type": "element",
          "name": "link",
          "elements": [
            {
              "type": "text",
              "text": post.url
            }
          ]
        },
        {
          "type": "element",
          "name": "description",
          "elements": [
            {
              "type": "text",
              "text": `${post.name} - ${post.date}`
            }
          ]
        },
      ]
    }
  })
}

const options = {compact: false, ignoreComment: true, spaces: 2};

function rssFeed() {
  const xml = {
    "declaration": {
      "attributes": {
        "version": "1.0",
        "encoding": "utf-8"
      }
    },
    "elements": [
      {
        "type": "element",
        "name": "rss",
        "attributes": {
          "version": "2.0"
        },
        "elements": [
          {
            "type": "element",
            "name": "channel",
            "elements": [
              {
                "type": "element",
                "name": "title",
                "elements": [
                  {
                    "type": "text",
                    "text": "Beau Shinkle's Blog"
                  }
                ]
              },
              {
                "type": "element",
                "name": "link",
                "elements": [
                  {
                    "type": "text",
                    "text": "http://beaushinkle.xyz/"
                  }
                ]
              },
              {
                "type": "element",
                "name": "description",
                "elements": [
                  {
                    "type": "text",
                    "text": "List of Writings from Beau Shinkle"
                  }
                ]
              },
            ].concat(getPosts())
          }
        ]
      }
    ]
  }
  return json2xml(xml, options)
}

exports.rssFeed = rssFeed
