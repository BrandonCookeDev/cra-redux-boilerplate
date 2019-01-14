# cra-redux-boilerplate

## Author: Brandon Cooke

This is a personalized boilerplate script run via npm bin folder. It is run after running `create-react-app`.

## Installation

In order to use, perform the following:

```bash
npm i --save cra-redux-boilerplate redux react-redux redux-thunk
```

and after run the following

Mac/Linux
```bash
./node_modules/.bin/cra-redux
```

Windows
```cmd
start node_modules\.bin\cra-redux
```

## Impact

This package creates the following directory tree into your project:
(_NOTE: All deleteMe files are for example content_)

```diff
|-- public
|-- src
+|    |-- redux
+|    |     |-- store.js
+|    |     |
+|    |     |-- actions
+|    |     |      |-- types.js
+|    |     |      |-- deleteMeActions.js 
+|    |     |
+|    |     |-- reducers
+|    |     |      |-- index.js
+|    |     |      |-- deleteMeReducer.js
+|    |     |
+|    |     |-- sample
+|    |     |     |-- components
+|    |     |     |       |-- DeleteMe.js    
```
