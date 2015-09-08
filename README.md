# getdependents
A module that retrieves a list of modules that depend of the specified module

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## Install
```
npm install getdpendents
```


### Usage

```
dependents(name, [opts], callback)
```

* name - the name of the module you wish to retrieve dependents for
* opts - allow you to specify a registry other than public npm
* callback

```js
var dependents = require('getdependents')

dependents('express', function (err, deps) {
		...
})
```
