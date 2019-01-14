#!/usr/bin/env node
'use strict';

const errHandle = e => { console.error(e); process.exit(1); }
process.on('error', errHandle)
process.on('SIGINT', errHandle)
process.on('uncaughtException', errHandle)
process.on('unhandledRejection', errHandle)

const fs = require('fs-extra')
    , path = require('path')
    , cp = require('child_process')
    , {format} = require('util')

const SRC_ROOT = path.join(__dirname, '..', 'src')
    , REDUX_ROOT = path.join(SRC_ROOT, 'redux')
    , PROJECT_ROOT = path.resolve('.')
    , PROJECT_IMPL_DIR = path.join(PROJECT_ROOT, 'src', 'redux')

function createDir(){
    console.time('Creating dir')
    if(!fs.existsSync(PROJECT_IMPL_DIR))
        fs.mkdirSync(PROJECT_IMPL_DIR)
    console.timeEnd('Creating dir')
}

function createContent(){
    console.time('Creating content')
    fs.copySync(REDUX_ROOT, PROJECT_IMPL_DIR)
    console.timeEnd('Creating content')
}

function installNpmDependencies(){
    console.time('Installing npm dependencies')
    let cmd = format(`npm install --prefix ${PROJECT_ROOT} --save redux react-redux redux-thunk`)
    console.log('Running install command: %s', cmd)
    cp.execSync(cmd)
    console.time('Installing npm dependencies')
}

if(fs.existsSync(PROJECT_IMPL_DIR) && fs.readdirSync(PROJECT_IMPL_DIR).length > 0)
    throw new Error('Target directory %s is not empty', PROJECT_IMPL_DIR)

createDir()
createContent()
installNpmDependencies()

console.log('Done!')
process.exit(0);