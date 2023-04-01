### Resource (backend)
Resource is somewhat of a notepad for blog ideas. Whenever a good idea strikes, users can record their ideas in the app, including the potential blog's title, an image, and the body.

This app is a part of an upcoming blog titled Resource Blog.

### Technologies Used
- Express
- NodeJS
- MongoDB
- REST API

### Routes
| Routes      | Description |
| ----------- | ----------- |
| app.get '/'      | Index       |
| app.get '/posts'   | Blog Index        |
| app.post '/posts'   | Create Blog Post        |
| app.get '/posts/:id'      | Read Blog Post       |
| app.put '/posts/:id'      | Update Blog Post       |
| app.delete '/posts/:id'   | Delete Blog Post        |

### ERD
![](https://i.imgur.com/xOZWxc3.png)
