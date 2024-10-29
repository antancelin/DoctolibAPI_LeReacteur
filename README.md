# Doctolib API

## Service Web pour obtenir les disponibilités

Le premier service Web à développer permettra d'**obtenir les disponibilités** du cabinet médical pour une date donnée.

**Si celle-ci existe déjà, le serveur renverra cette date, sinon il faudra la créer et la sauvegarder dans la base de données.**

- URL: http://localhost:3000/visits
- Méthode: GET
- Paramètres query :
  - **"date"** (exemple: "2022-02-01")

### Exemple

- GET : http://localhost:3000/visits?date=2022-02-01

Aura pour réponse **(statut 200)** :

```json
{
  "slots": {
    "1000": {
      "name": "",
      "isAvailable": true
    },
    "1030": {
      "name": "",
      "isAvailable": true
    },
    "1100": {
      "name": "",
      "isAvailable": true
    },
    "1130": {
      "name": "",
      "isAvailable": true
    },
    "1400": {
      "name": "",
      "isAvailable": true
    },
    "1430": {
      "name": "",
      "isAvailable": true
    },
    "1500": {
      "name": "",
      "isAvailable": true
    },
    "1530": {
      "name": "",
      "isAvailable": true
    },
    "1600": {
      "name": "",
      "isAvailable": true
    },
    "1630": {
      "name": "",
      "isAvailable": true
    },
    "1700": {
      "name": "",
      "isAvailable": true
    },
    "1730": {
      "name": "",
      "isAvailable": true
    }
  },
  "_id": "5e1c30cca11eaf63be7c654e",
  "date": "2023-06-01T15:55:09.912Z",
  "__v": 0
}
```

## Service Web pour réserver

Le deuxième service Web à développer permettra de **réserver un créneau**.

- URL: http://localhost:3000/visits
- Méthode: POST
- Paramètres query :
  - **"date"** (exemple: "2022-02-01")
- Paramètres body :
  - **"slot"** (exemple: "1400" pour 2h00 de l'après-midi)
  - **"name"** (exemple: "John")

### Exemple

- POST : http://localhost:3000/visits?date=2022-02-01

```json
{
  "slot": "1400",
  "name": "John"
}
```

Aura pour réponse **(statut 200)** :

```json
{
  "message": "Successfuly booked"
}
```

Si le service pour obtenir les disponibilités est appelé de nouveau http://localhost:3000/visits?date=2022-02-01, nous aurons maintenant la réponse suivante **(statut 200)** :

```json
{
  "slots": {
    "1000": {
      "name": "",
      "isAvailable": true
    },
    "1030": {
      "name": "",
      "isAvailable": true
    },
    "1100": {
      "name": "",
      "isAvailable": true
    },
    "1130": {
      "name": "",
      "isAvailable": true
    },
    "1400": {
      "name": "John",
      "isAvailable": false
    },
    "1430": {
      "name": "",
      "isAvailable": true
    },
    "1500": {
      "name": "",
      "isAvailable": true
    },
    "1530": {
      "name": "",
      "isAvailable": true
    },
    "1600": {
      "name": "",
      "isAvailable": true
    },
    "1630": {
      "name": "",
      "isAvailable": true
    },
    "1700": {
      "name": "",
      "isAvailable": true
    },
    "1730": {
      "name": "",
      "isAvailable": true
    }
  },
  "_id": "5e1c37b550b7a2645791dc2a",
  "date": "2023-06-01T15:55:09.912Z",
  "__v": 0
}
```

Et si jamais vous tentez de nouveau de **réserver le même créneau**, le serveur devra refuser votre demande **(statut 400)** :

```json
{
  "message": "Slot already booked"
}
```

## Bonus

- Répondre avec le code de **statut 400** en cas d'erreur de la part du client ou **status 500** en cas d'erreur de la part du serveur https://expressjs.com/en/api.html#res.status
- Ne pas pouvoir réserver une **date dans le passé**. Pour cela, vous devrez utiliser le package [date-fns](https://www.npmjs.com/package/date-fns)
- Ne pas avoir la possibilité de réserver un créneau le **dimanche**
- Créer un service pour **annuler une réservation**.
- Créer un autre projet **'Doctolib-Client'** indépendant, qui permettra d'**appeler ce serveur** pour effectuer des réservations depuis le terminal.
