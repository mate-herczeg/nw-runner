'use strict';

const nwDownloader = require('nw-downloader');
const childp = require('child_process');
const path = require('path');

const NW_FILEPATHS = {
    win: 'nw.exe',
    linux: 'nw',
    osx: 'nwjs.app/Contents/MacOS/nwjs' 
};

module.exports = class NwRunner {

    constructor(appPath, downloaderConfig) {
        this._appPath = appPath; 
        this._platform = downloaderConfig.platform;
        this._downloadPromise = nwDownloader(downloaderConfig);
    }

    run () {
        const argumentArray = Array.from(arguments);

        argumentArray.unshift(this._appPath);

        return this._downloadPromise.then(
            (nwPath) => childp.spawn(this._getNwFileByPath(nwPath), argumentArray)
        );
    }

    _getNwFileByPath(nwPath) {
        return path.join(nwPath, this._getNwFilePath());
    }

    _getNwFilePath() {
        return NW_FILEPATHS[this._platform];
    }
};