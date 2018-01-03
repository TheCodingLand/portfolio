# Personal-portfolio

[Demo](http://vps497588.ovh.net)

This portfolio is made with [React](https://github.com/facebook/react), [Material UI](https://github.com/callemall/material-ui) and lots of love.
Although it is my personal portfolio, feel free to fork and have fun with it.

## Installation

 1. Run `npm i`.
 2. Run `npm start`.
 3. Visit [localhost:3000](http://localhost:3000).
 
 ## Publish on GitHub Pages

1. Run `npm run deploy`. This will start the build process and push afterwards to the gh-pages branch.
2. Set under Settings > GitHub Pages the source to `gh-pages branch` and click `Save`.


## One way to serve small apps like this in production

### Set up Nginx server : 

#### 1. Install

`sudo apt-get install nginx`

#### 2. edit configuration

`sudo nano /etc/nginx/sites-available/default`

#### 3. Server config :

```ini
server {
    listen 80;

    server_name example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 4. Restart server :

```
sudo systemctl restart nginx
```

### Setup nodejs process manager

```
sudo npm install -g pm2
```

```
pm2 start /root/portfolio/node_modules/react-scripts/scripts/start.js
```

### Have fun.
