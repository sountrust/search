# search
NodeJs Search engine

Concepts à mettre ne œuvre :

    - Implémentation d'un crawler NodeJs
    - Utilisation du framwork Express pour exposer un API
    - Utilisation de la base de donnée (PostgreSQL)
    - Implémentation d'un formulaire d'inscription/connexion HTML5
    - Format d'échange JSON

* Technologies utilisées:
 * NodeJS, PostgreSQL, HTML5, CSS3, javascript, Angular (optionel)

#### A installer
* [NodeJS v10](https://nodejs.org/)  
* [Git](http://git-scm.com/)  
* [Serveur PostgreSQL](https://www.elephantsql.com/)
* l'IDE [WebStorm](https://www.jetbrains.com/webstorm/) or [Sublime Text](http://www.sublimetext.com/3) or [Visual Code](https://code.visualstudio.com/).
* Navigateurs récents (il est bon de tester avec différents navigateurs, comme Chrome, Firefox, Opera, IE)
 
#### Telecharger le projet

[![Github](https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png)](https://github.com/kbouzidi/search)

#### Package.json

Créer un fichier package.json dans le dossier de notre projet :
```
{
  "name": "search",
  "version": "0.0.1",
  "description": "SEARCH ENGINE",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/kbouzidi/search.git"
  },
  "keywords": [
    "search",
    "engine"
  ],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/kbouzidi/search/issues"
  },
  "homepage": "https://github.com/kbouzidi/search#readme",
  "dependencies": {
    "body-parser": "^1.19.0",
    "bunyan": "^1.8.12",
    "bunyan-format": "^0.2.1",
    "cheerio": "^1.0.0-rc.3",
    "cluster": "^0.7.7",
    "compression": "^1.7.4",
    "cors": "^2.8.5",
    "dotenv": "^7.0.0",
    "express": "^4.16.4",
    "express-session": "^1.16.1",
    "sequelize": "^5.8.2",
    "sync-request": "^6.1.0"
  }
}
```

##### Installation des packages
```javascript
npm install
```

##### Création du serveur 

```language-javascript
// Create server
const server = http.createServer(app).listen(process.env.PORT, function() {
  logger.info('Lancement du moteur de recherche' + process.env.PORT + ' in ' + app.get('env') + ' mode');
});

```

##### Définition des routes 

```language-javascript 
'use strict';

const express = require('express');
const routerRoot = express.Router();

// Health check
routerRoot.get('/ping', function(req, res) {
  res.send('PONG');
});

module.exports = routerRoot;
   
```

#### Service de base de donnée
```language-javascript
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_UR); //'postgres://user:pass@example.com:5432/dbname'
```

#### A faire
    - Implémentation d'un crawler
    - Implementation d'une API de search

#### En option
   - Intégration d'un API externe (Facebook, Google et/ou twitter)
   - L'utilisation d'[AngularJS](https://angularjs.org/) ou de [VueJS](https://vuejs.org/)
   - Un Dockerfile pour le déploiement 
   - L'intégration d'une API de payment
 
#### Package intéressant à utiliser 
    - Gestion des authentifications avec des token (JWT)[https://github.com/auth0/node-jsonwebtoken]
    - Gestion des sessions [express-session](https://www.npmjs.com/package/express-sessions)
    - Gestion des routes [express-enrouten](https://www.npmjs.com/package/express-enrouten)
    - ORM [SequelizeJS](http://docs.sequelizejs.com/)
    - Dashbord UI HTML/CSS [AdminLTE](https://github.com/almasaeed2010/AdminLTE)
    - [Cheerio](https://github.com/cheeriojs/cheerio)
#### Date de remise 
<code> Le 15/05/2019 à 8h00 CET</code>

### Documentation et lien uties
- [NodeJS](https://nodejs.org/api/)
- [Express](http://expressjs.com/en/api.html)
- [Gestionn des routes](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
- [Gestionn des formulaires](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms)