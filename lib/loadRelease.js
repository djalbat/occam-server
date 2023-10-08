"use strict";
import { loadRelease as loadReleaseEx } from "./utilities/fileSystem";
export default function loadRelease(projectsDirectoryPath, json, callback) {
    var releaseName = json.releaseName, release = loadReleaseEx(releaseName, projectsDirectoryPath);
    json = release !== null ? release.toJSON() : null;
    return callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkUmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbG9hZFJlbGVhc2UgYXMgbG9hZFJlbGVhc2VFeCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFJlbGVhc2UocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBqc29uLCBjYWxsYmFjaykge1xuICBjb25zdCB7IHJlbGVhc2VOYW1lIH0gPSBqc29uLFxuICAgICAgICByZWxlYXNlID0gbG9hZFJlbGVhc2VFeChyZWxlYXNlTmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICBqc29uID0gKHJlbGVhc2UgIT09IG51bGwpID8gIC8vL1xuICAgICAgICAgICAgcmVsZWFzZS50b0pTT04oKTpcbiAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gY2FsbGJhY2soanNvbik7XG59XG4iXSwibmFtZXMiOlsibG9hZFJlbGVhc2UiLCJsb2FkUmVsZWFzZUV4IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwianNvbiIsImNhbGxiYWNrIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlIiwidG9KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLFNBQVNBLGVBQWVDLGFBQWEsUUFBUSx5QkFBd0I7QUFFckUsZUFBZSxTQUFTRCxZQUFZRSxxQkFBcUIsRUFBRUMsSUFBSSxFQUFFQyxRQUFRO0lBQ3ZFLElBQU0sQUFBRUMsY0FBZ0JGLEtBQWhCRSxhQUNGQyxVQUFVTCxjQUFjSSxhQUFhSDtJQUUzQ0MsT0FBTyxBQUFDRyxZQUFZLE9BQ1ZBLFFBQVFDLE1BQU0sS0FDWjtJQUVaLE9BQU9ILFNBQVNEO0FBQ2xCIn0=