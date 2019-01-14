#!/usr/bin/env node
'use strict';

const fs = require('fs-extra')
    , path = require('path')
    , cp = require('child_process')
    , {format} = require('util')

const SRC_ROOT = path.join(__dirname, '..', 'src')
    , REDUX_ROOT = path.join(SRC_ROOT, 'redux')
    , PROJECT_ROOT = path.resolve('.')
    , PROJECT_IMPL_DIR = path.join(PROJECT_ROOT, 'src', 'redux')

function createDir(){
    if(!fs.existsSync(PROJECT_IMPL_DIR))
        fs.mkdirSync(PROJECT_IMPL_DIR)
}

function createContent(){
    fs.copySync(REDUX_ROOT, PROJECT_IMPL_DIR)
}

function installNpmDependencies(){
    let cmd = format('npm install --prefix %s --save redux react-redux redux-thunk', PROJECT_ROOT, PROJECT_ROOT)
    cp.execSync(cmd)
}

if(fs.existsSync(PROJECT_IMPL_DIR) && fs.readdirSync(PROJECT_IMPL_DIR).length > 0)
    throw new Error('Target directory %s is not empty', PROJECT_IMPL_DIR)

createDir()
createContent()
installNpmDependencies()