"use strict";

import { arrayUtilities, pathUtilities, fileSystemUtilities } from "necessary";
import { File, Files, Entries, Project, Release, Projects, Releases, Directory, filePathUtilities } from "occam-model";

import { isNameHiddenName } from "../utilities/name";

const { first } = arrayUtilities,
      { isFilePathRecognisedFilePath } = filePathUtilities,
      { concatenatePaths, topmostDirectoryNameFromPath } = pathUtilities,
      { readFile,
        writeFile,
        isEntryFile,
        readDirectory,
        isEntryDirectory,
        checkEntryExists,
        checkEntryExists: checkFileExists } = fileSystemUtilities;

export function loadFile(path, projectsDirectoryPath) {
  let file = null;

  try {
    const topmostDirectoryName = topmostDirectoryNameFromPath(path);

    if (topmostDirectoryName !== null) {
      const absolutePath = concatenatePaths(projectsDirectoryPath, topmostDirectoryName),
            entryDirectory = isEntryDirectory(absolutePath);

      file = entryDirectory ?
               fileFromProject(path, projectsDirectoryPath) :
                 fileFromRelease(path, projectsDirectoryPath);
    }
  } catch (error) {
    ///
  }

  return file;
}

export function saveFile(file, projectsDirectoryPath) {
  let success = false;

  const filePath = file.getPath(),
        absoluteFilePath = concatenatePaths(projectsDirectoryPath, filePath),
        fileExists = checkFileExists(absoluteFilePath);

  if (fileExists) {
    const filePath = absoluteFilePath,  ///
          content = file.getContent();

    try {
      writeFile(filePath, content);
    } catch (error) {
      ///
    }

    success = true;
  }

  return success;
}

export function loadFiles(paths, projectsDirectoryPath) {
  let files;

  try {
    files = Files.fromNothing();

    const pathsLength = paths.length;

    if (pathsLength > 0) {
      const firstPath = first(paths),
            path = firstPath, ///
            topmostDirectoryName = topmostDirectoryNameFromPath(path);

      if (topmostDirectoryName !== null) {
        const absolutePath = concatenatePaths(projectsDirectoryPath, topmostDirectoryName),
              entryExists = checkEntryExists(absolutePath);

        if (entryExists) {
          const entryDirectory = isEntryDirectory(absolutePath);

          files = entryDirectory ?
                    filesFromProject(paths, projectsDirectoryPath) :
                      filesFromRelease(paths, projectsDirectoryPath);
        }
      }
    }
  } catch (error) {
    files = null;
  }

  return files;
}

export function loadRelease(releaseName, projectsDirectoryPath) {
  let release = null;

  try {
    const name = releaseName, ///
          topmostFileName = releaseName,  ///
          absolutePath = concatenatePaths(projectsDirectoryPath, topmostFileName),
          entryFile = isEntryFile(absolutePath);

    if (entryFile) {
      let json,
          entries;

      const content = readFile(absolutePath),
            jsonString = content; ///

      json = JSON.parse(jsonString);

      ({ entries } = json);

      json  = entries;  ///

      entries = Entries.fromJSON(json);

      release = Release.fromNameAndEntries(name, entries);
    }
  } catch (error) {
    ///
  }

  return release;
}

export function loadProject(projectName, projectsDirectoryPath, loadOnlyRecognisedFiles) {
  let project = null;

  try {
    const name = projectName,  ///
          topmostDirectoryName = projectName, ///
          entries = loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles);

    project = Project.fromNameAndEntries(name, entries);
  } catch (error) {
    ///
  }

  return project;
}

export function loadReleases(projectsDirectoryPath) {
  let releases;

  try {
    releases = Releases.fromNothing();

    const topmostFileNames = topmostFileNamesFromProjectsDirectoryPath(projectsDirectoryPath),
          releaseNames = topmostFileNames;  ///

    releaseNames.forEach((releaseName) => {
      const release = loadRelease(releaseName, projectsDirectoryPath);

      if (release !== null) {
        releases.addRelease(release);
      }
    });
  } catch (error) {
    releases = null;
  }

  return releases;
}

export function loadProjects(projectsDirectoryPath, loadOnlyRecognisedFiles) {
  let projects;

  try {
    projects = Projects.fromNothing();

    const topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath),
          projectNames = topmostDirectoryNames; ///

    projectNames.forEach((projectName) => {
      const project = loadProject(projectName, projectsDirectoryPath, loadOnlyRecognisedFiles);

      if (project !== null) {
        projects.addProject(project);
      }
    });
  } catch (error) {
    projects = null;
  }

  return projects;
}

export default {
  loadFile,
  saveFile,
  loadFiles,
  loadRelease,
  loadProject,
  loadReleases,
  loadProjects
};

function loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles) {
  const entries = Entries.fromNothing(),
        relativeDirectoryPath = topmostDirectoryName;  ///

  entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles);

  return entries;
}

function loadDirectory(path, projectsDirectoryPath) {
  const absolutePath = concatenatePaths(projectsDirectoryPath, path),
        entryDirectory = isEntryDirectory(absolutePath),
        directory = entryDirectory ?
                      Directory.fromPath(path) :
                        null;

  return directory;
}

function fileFromProject(path, projectsDirectoryPath) {
  let file = null;

  const absolutePath = concatenatePaths(projectsDirectoryPath, path),
        entryFile = isEntryFile(absolutePath);

  if (entryFile) {
    const released = false,
          content = readFile(absolutePath);

    file = File.fromPathContentAndReleased(path, content, released);
  }

  return file;
}

function fileFromRelease(path, projectsDirectoryPath) {
  const topmostDirectoryName = topmostDirectoryNameFromPath(path),
        topmostFileName = topmostDirectoryName, ///
        filePath = path,  ///
        release = loadRelease(topmostFileName, projectsDirectoryPath),
        file = release.findFile(filePath);

  return file;
}

function filesFromProject(paths, projectsDirectoryPath) {
  const files = Files.fromNothing();

  paths.forEach((path) => {
    const file = fileFromProject(path, projectsDirectoryPath);

    files.addFile(file);
  });

  return files;
}

function filesFromRelease(paths, projectsDirectoryPath) {
  const files = Files.fromNothing(),
        pathsLength = paths.length;

  if (pathsLength > 0) {
    const firstPath = first(paths),
          path = firstPath, ///
          topmostDirectoryName = topmostDirectoryNameFromPath(path),
          topmostFileName = topmostDirectoryName, ///
          release = loadRelease(topmostFileName, projectsDirectoryPath);

    paths.forEach((path) => {
      const filePath = path,  ///
            file = release.findFile(filePath);

      files.addFile(file);
    });
  }

  return files;
}

function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles) {
  const absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath),
        subEntryNames = readDirectory(absoluteDirectoryPath);

  subEntryNames.forEach((subEntryName) => {
    const subEntryNameHiddenName = isNameHiddenName(subEntryName),
          loadUnrecognisedFilesAndDirectories = !loadOnlyRecognisedFiles;

    if (!subEntryNameHiddenName) {
      const path = concatenatePaths(relativeDirectoryPath, subEntryName),
            directory = loadDirectory(path, projectsDirectoryPath);

      if (directory !== null) {
        const directoryPath = path; ///

        if (loadUnrecognisedFilesAndDirectories) {
          entries.addDirectory(directory);
        }

        entriesFromRelativeDirectoryPath(entries, directoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles); ///
      } else {
        const file = loadFile(path, projectsDirectoryPath);

        if (file !== null) {
          const filePath = file.getPath(),
                filePathRecognisedFilePath = isFilePathRecognisedFilePath(filePath),
                fileRecognisedFile = filePathRecognisedFilePath;  ///

          if (fileRecognisedFile || loadUnrecognisedFilesAndDirectories) {
            entries.addFile(file);
          }
        }
      }
    }
  });
}

function topmostFileNamesFromProjectsDirectoryPath(projectsDirectoryPath) {
  let topmostFileNames;

  const subEntryNames = readDirectory(projectsDirectoryPath);

  topmostFileNames = subEntryNames.reduce((topmostFileNames, subEntryName) => {
    const absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName),
          subEntryNameHiddenName = isNameHiddenName(subEntryName);

    if (!subEntryNameHiddenName) {
      const subEntryFile = isEntryFile(absoluteSubEntryPath);

      if (subEntryFile) {
        const topmostFileName = subEntryName;  ///

        topmostFileNames.push(topmostFileName)
      }
    }

    return topmostFileNames;
  }, []);

  return topmostFileNames;
}

function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath) {
  let topmostDirectoryNames;

  const subEntryNames = readDirectory(projectsDirectoryPath);

  topmostDirectoryNames = subEntryNames.reduce((topmostDirectoryNames, subEntryName) => {
    const absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName),
          subEntryNameHiddenName = isNameHiddenName(subEntryName);

    if (!subEntryNameHiddenName) {
      const subEntryDirectory = isEntryDirectory(absoluteSubEntryPath);

      if (subEntryDirectory) {
        const topmostDirectoryName = subEntryName;  ///

        topmostDirectoryNames.push(topmostDirectoryName)
      }
    }

    return topmostDirectoryNames;
  }, []);

  return topmostDirectoryNames;
}
