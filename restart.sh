sudo lsof -ti tcp:8000 | xargs kill -9 && node index.js &