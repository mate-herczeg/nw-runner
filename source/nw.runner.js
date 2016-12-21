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

    constructor(downloaderConfig) {
        this._platform = downloaderConfig.platform;
        this._downloadPromise = nwDownloader(downloaderConfig);
    }

    run () {
        return this._downloadPromise.then((nwPath) => childp.spawn(this._getNwFileByPath(nwPath)));
    }

    _getNwFileByPath(nwPath) {
        return path.join(nwPath, this._getNwFilePath());
    }

    _getNwFilePath() {
        if (!NW_FILEPATHS[this._platform]) {
            throw Error('Could not find nwjs executable for the specified platform: ' + this._platform);
        }

        return NW_FILEPATHS[this._platform];
    }
};