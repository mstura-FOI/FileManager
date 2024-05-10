To install this package use
```cli
npm i filemanageriojs
```
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
  allPath: undefined
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
  content: 'hellohelloIts mehellohelloIts me',
  allPath: 'path/to/file/file.ts'
}
```
