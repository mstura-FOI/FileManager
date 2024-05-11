## Installation
To install this package use
```cli
npm i filemanageriojs
```
# Use
This package is using fs library under the hood, but its abstracting the functionalities for ease of use.
For working with this file you have to import it with
```javascript
var FileBuilder = require('filemanageriojs/FileManagerBuilder.js')
var file = new FileBuilder()
```
Then you are all set to read and create files.

```javascript
const CreatedFile =  file.setPath('path/to/file')
.setName('file')
.setContent("Its me")
.setExtension("ts").create()
CreatedFile.then((res)=>console.log(res)).catch((err)=>console.log(err))
```
You will get a File object that contains all the neccessary information about the created file. And in this case it looks like this
```
File {
  name: 'file',
  path: 'path/to/file',
  extension: 'ts',
  size: undefined,
  content: 'Its me',
  allPath: undefined,
  numberOfCharacters: 5
}
```
To read files you can use
```javascript
const ReadFile = file.setPath('path/to/file')
.setName('file')
.setExtension('ts')
.read()
```
This will return a file that is read or an error if it doesn't exist 
the following file looks like this
```
File {
  name: 'file',
  path: 'path/to/file',
  extension: 'ts',
  size: undefined,
  content: 'Its me',
  allPath: 'path/to/file/file.ts',
  numberOfCharacters: 5
}
```
## JSON OBJECT MANIPULATION
Working with objects JSON
Creating a json file for storing users
```javascript
var users = [{
    name: "John Doe",
    age: 25,
    email: "johndoe@gmail.com"
}];
var jsonFile = File.setName("Users").setPath("./users").setExtension("json").setContent(JSON.stringify(users)).create();
```
Reading the file and manipulating with the data
```javascript
var file = File.setName("Users").setPath("./users").setExtension("json").read();
file.then((file) => {
    var content = JSON.parse(file.content);
    content.push({
        name: "Jane Doe",
        age: 24,
        email: ""
    })
    File.updateObject(content); //Hydrate the file with newest data
}).catch((error) => {
    console.error(error);
});
```
We get the following file 
```json
[{
    "name": "John Doe",
    "age": 25,
    "email": "johndoe@gmail.com"
},
{
    "name": "Jane Doe",
    "age": 24,
    "email": ""
}]
```
For deleting use.
```javascript
var file = File.setName("Users").setPath("./users").setExtension("json").read();
file.then((file) => {
    var content = JSON.parse(file.content);
    content.pop()
    File.updateObject(content); //Hydrate the file with newest data

}).catch((error) => {
    console.error(error);
});
// OR
File.deleteObjectAtIndex(1) 
```
Using pop will delete the last element in the array while deleteObjectAtIndex(index) will delete the element at index. 
