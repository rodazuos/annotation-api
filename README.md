# API for daily note taking

Information annotation service

## Used technologies

* [NodeJS](http://nodejs.org/en)
* [Awilix](http://npmjs.com/package/awilix)
* [Koa](http://koajs.com)
* [MongoDB](http://mongodb.com)

## Endpoints

| Path                             | Method   | Description                    |
| -------------------------------- | -------- | ------------------------------ |
| /healthcheck                     | **GET**  | Verify if application is ready |
| /v1/annotation                   | **POST** | Create an annoatation          |
| /v1/annotation/_:id_             | **PUT**  | Update an annotation           |
| /v1/annotation/_:id_             | **DEL**  | Remove an annotation           |
| /v1/annotation?_limit=10&page=1_ | **GET**  | List all annotations           |

- **POST - /v1/annotation**
  > Payload

```
  {
    "title": String,
    "content": String,
    "priority": Number [min: 1, max: 3]
  }
```

- **PUT - /v1/annotation/_:id_**

  > Param id = database document id
  
  > Payload

```
  {
    "title": String,
    "content": String,
    "priority": Number [min: 1, max: 3]
  }
```


- **DEL - /v1/annotation/_:id_**

  > Param id = database document id

- **GET - /v1/annotation/list?_limit=10&page=1_**
  > Query limit = number of documents
  > Query page = page number
