# Occam Server

The [Occam](https://github.com/djalbat/occam) IDE's server functionality.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [Contact](#contact)

## Introduction

The Occam IDE's server functionality.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-server

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-server.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

The exported functions are:

* `loadFile()`
* `saveFile()`
* `loadFiles()`
* `loadProject()`
* `loadRelease()`
* `loadProjects()`
* `loadReleases()`
* `removeRelease()`
* `moveProjectEntries()`
* `removeProjectEntries()`
* `renameProjectEntries()`
* `createProjectEntries()`

Soem utility functions are also exported. See the source for details.

Typical usage is as follows:

```
const open = require('occam-open-cli'), ///
      server = require('occam-server'); ///

const { Files } = open,
      { loadFiles } = server;

const filePaths = ...,
      projectsDirectoryPath = ...,
      json = {
        filePaths
      };

loadFiles(projectsDirectoryPath, json, function(json) {
  const files = (json !== null) ?
                  Files.fromJSON(json) :
                    null;

  ...
});
```

Note that you get JSON back, not an instance of the `Files` class, and that JSON might be `null`.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
