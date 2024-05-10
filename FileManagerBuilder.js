var fs = require('fs');
var File = require('./index.js');
class FileManagerBuilder{
    
    file
    constructor(hellos){
        this.file = new File();
    }
    setName(name){
        this.file.name = name;
        return this;
    }
    setPath(path){
        this.file.path = path;
        return this;
    }
    setExtension(extension){
        this.file.extension = extension;
        return this;
    }
    setSizeInBytes(size){
        this.file.size = size;
        return this;
    }
    setContent(content){
        this.file.content = content;
        return this;
     }
   async create(){
        var directory = `${this.file.path}/${this.file.name}.${this.file.extension}`;
        var pathToCreate = `${this.file.path}`;
        try {
           await fs.mkdir(pathToCreate, { recursive: true },async (err) => {
            if (err) {
              console.error('Error creating directory:', err);
              return;
            }
        await fs.appendFile(`${directory}`, `${this.file.content}`, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        }); 
        } catch (error) {
            console.error('Error creating file:', error);
        }
        
        return this.file;
    }
    async read(){
        var directory = `${this.file.path}/${this.file.name}.${this.file.extension}`;
        this.file.allPath = directory;
        try {
            
            const data = await fs.readFileSync(directory,{ encoding: 'utf8' });
            this.file.content = await data;
            return this.file;
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.error('File not found!'); 
            } else {
                throw error; 
            }
        }
    }
}

module.exports = FileManagerBuilder;