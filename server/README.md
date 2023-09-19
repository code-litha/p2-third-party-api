# MOVIE APP

## List of Endpoints

- GET /movies
- GET /movies/popular
- GET /movies/favorites
- POST /movies/favorites/:id

---

### GET /movies

- Response 200

```ts
[
  {
    "id": <Integer>,
    "title": <String>,
    "imgUrl": <String>
  },
  ...
]
```

---

### GET /movies/popular

- Response 200

```ts
[
  {
    "id": <Integer>,
    "title": <String>,
    "imgUrl": <String>
  },
  ...
]
```

---

### GET /movies/favorites

- Response 200

```ts
[
  {
    "id": <Integer>,
    "title": <String>,
    "imgUrl": <String>
  },
  ...
]
```

---

### POST /movies/favorites/:id

- Request Params

```ts
  id: <Integer>
```

- Response 200

```ts
{
  "message": "Successfully Add to Favorites"
}
```

---

## General Response

- Response 500

```ts
{
  "message": "Internal Server Error"
}
```
