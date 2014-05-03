# Simple TODO

## Description

this is a simple web application todo, it is written by [Bearcat](https://github.com/bearcatnode/bearcat) to manage business objects and enable to write simple POJOs. This demo is easy, simple and mantainable.  

## Install

```
git clone https://github.com/bearcatnode/todo.git
cd todo  
$ npm install  
```
    
## Update Mysql

create database with configuration corresponded to [dev mysql.json](https://github.com/bearcatnode/todo/blob/master/config/dev/mysql.json)
execute [todo.sql](https://github.com/bearcatnode/todo/blob/master/todo.sql)

## Run

```    
$ node server.js
```

## Run with prod env

update configuration in [prod dir](https://github.com/bearcatnode/todo/tree/master/config/prod)    

```
node server.js env=prod
```

## License 

(The MIT License)

Copyright (c) 2011, 2012 fengmk2 <fengmk2@gmail.com>.
Copyright (c) 2014, fantasyni <fantasyni@163.com>.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.