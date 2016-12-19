'use strict';

const nwDownloader = require('nw-downloader');
const childp = require('child_process');
const path = require('path');

const NW_FILEPATH = {
    windows: 'nw.exe',
    linux: 'nw',
    osx: 'nw' 
};

module.exports = class NwRunner {

    constructor(downloaderConfig) {
        this._downloaderConfig = downloaderConfig;
        this._downloadPromise = nwDownloader(downloaderConfig);
    }

    run () {
        return this._downloadPromise.then((nwPath) => childp.spawn(this._getNwFileByPath(nwPath)));
    }

    _getNwFileByPath(nwPath) {
        return path.join(nwPath, this._getNwFilePath());
    }

    _getNwFilePath() {
        switch (this._downloaderConfig.platform) {
            case 'win': 
                return NW_FILEPATH.windows;
                break;
            case 'linux':
                return NW_FILEPATH.linux; 
                break;
            case 'osx': 
                return NW_FILEPATH.osx;
                break;
        };
    }
};