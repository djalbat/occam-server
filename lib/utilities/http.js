"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get post () {
        return post;
    }
});
var _stream = require("stream");
var _necessary = require("necessary");
var _constants = require("../constants");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var POST_METHOD = _necessary.methods.POST_METHOD, createRequest = _necessary.requestUtilities.createRequest, OK_200_STATUS_CODE = _necessary.statusCodes.OK_200_STATUS_CODE, ACCEPT_HEADER = _necessary.headers.ACCEPT_HEADER, CONTENT_TYPE_HEADER = _necessary.headers.CONTENT_TYPE_HEADER, APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = _necessary.contentTypes.APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
function post(host, uri, query, json, callback) {
    var _obj;
    var jsonString = JSON.stringify(json), method = POST_METHOD, _$headers = (_obj = {}, _define_property(_obj, ACCEPT_HEADER, APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE), _define_property(_obj, CONTENT_TYPE_HEADER, APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE), _obj), content = jsonString; ///
    var request = createRequest(host, uri, query, method, _$headers, function(error, response) {
        if (response === null) {
            error = true;
        } else {
            var statusCode = response.statusCode;
            if (statusCode !== OK_200_STATUS_CODE) {
                error = true;
            }
        }
        if (error) {
            var _$json = null;
            callback(_$json);
            return;
        }
        contentFromResponse(response, function(content) {
            var _$json = null;
            try {
                _$json = JSON.parse(content);
            } catch (error) {} ///
            callback(_$json);
        });
    }), readable = _stream.Readable.from(content);
    readable.pipe(request);
}
var _default = {
    post: post
};
function contentFromResponse(response, callback) {
    var content = _constants.EMPTY_STRING;
    response.on(_constants.DATA, function(data) {
        content += data;
    });
    response.on(_constants.END, function() {
        callback(content);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHR0cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tIFwic3RyZWFtXCI7XG5cbmltcG9ydCB7IG1ldGhvZHMsIGhlYWRlcnMsIGNvbnRlbnRUeXBlcywgc3RhdHVzQ29kZXMsIHJlcXVlc3RVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVORCwgREFUQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IFBPU1RfTUVUSE9EIH0gPSBtZXRob2RzLFxuICAgICAgeyBjcmVhdGVSZXF1ZXN0IH0gPSByZXF1ZXN0VXRpbGl0aWVzLFxuICAgICAgeyBPS18yMDBfU1RBVFVTX0NPREUgfSA9IHN0YXR1c0NvZGVzLFxuICAgICAgeyBBQ0NFUFRfSEVBREVSLCBDT05URU5UX1RZUEVfSEVBREVSIH0gPSBoZWFkZXJzLFxuICAgICAgeyBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFIH0gPSBjb250ZW50VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwgcXVlcnksIGpzb24sIGNhbGxiYWNrKSB7XG5cdGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKSxcblx0XHRcdFx0bWV0aG9kID0gUE9TVF9NRVRIT0QsXG5cdFx0XHRcdGhlYWRlcnMgPSB7XG4gICAgICAgICAgW0FDQ0VQVF9IRUFERVJdOiBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgIFtDT05URU5UX1RZUEVfSEVBREVSXTogQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRVxuICAgICAgICB9LFxuXHRcdFx0XHRjb250ZW50ID0ganNvblN0cmluZztcdC8vL1xuXG5cdGNvbnN0IHJlcXVlc3QgPSBjcmVhdGVSZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXNwb25zZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHJlc3BvbnNlO1xuXG5cdFx0XHRcdFx0XHRpZiAoc3RhdHVzQ29kZSAhPT0gT0tfMjAwX1NUQVRVU19DT0RFKSB7XG5cdFx0XHRcdFx0XHRcdGVycm9yID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGpzb24gPSBudWxsO1xuXG5cdFx0XHRcdFx0XHRjYWxsYmFjayhqc29uKTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnRlbnRGcm9tUmVzcG9uc2UocmVzcG9uc2UsIChjb250ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQganNvbiA9IG51bGw7XG5cblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGpzb24gPSBKU09OLnBhcnNlKGNvbnRlbnQpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHt9XHQvLy9cblxuXHRcdFx0XHRcdFx0Y2FsbGJhY2soanNvbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRyZWFkYWJsZSA9IFJlYWRhYmxlLmZyb20oY29udGVudCk7XG5cblx0cmVhZGFibGUucGlwZShyZXF1ZXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwb3N0XG59O1xuXG5mdW5jdGlvbiBjb250ZW50RnJvbVJlc3BvbnNlKHJlc3BvbnNlLCBjYWxsYmFjaykge1xuXHRsZXQgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuXHRyZXNwb25zZS5vbihEQVRBLCAoZGF0YSkgPT4ge1xuXHRcdGNvbnRlbnQgKz0gZGF0YTtcblx0fSk7XG5cblx0cmVzcG9uc2Uub24oRU5ELCAoKSA9PiB7XG5cdFx0Y2FsbGJhY2soY29udGVudCk7XG5cdH0pO1xufVxuIl0sIm5hbWVzIjpbInBvc3QiLCJQT1NUX01FVEhPRCIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwicmVxdWVzdFV0aWxpdGllcyIsIk9LXzIwMF9TVEFUVVNfQ09ERSIsInN0YXR1c0NvZGVzIiwiQUNDRVBUX0hFQURFUiIsImhlYWRlcnMiLCJDT05URU5UX1RZUEVfSEVBREVSIiwiQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSIsImNvbnRlbnRUeXBlcyIsImhvc3QiLCJ1cmkiLCJxdWVyeSIsImpzb24iLCJjYWxsYmFjayIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwiY29udGVudCIsInJlcXVlc3QiLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsImNvbnRlbnRGcm9tUmVzcG9uc2UiLCJwYXJzZSIsInJlYWRhYmxlIiwiUmVhZGFibGUiLCJmcm9tIiwicGlwZSIsIkVNUFRZX1NUUklORyIsIm9uIiwiREFUQSIsImRhdGEiLCJFTkQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXlEQTtlQUFBOztRQTNDZ0JBO2VBQUFBOzs7c0JBWlM7eUJBRXFEO3lCQUV0Qzs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBTSxBQUFFQyxjQUFnQkMsa0JBQU8sQ0FBdkJELGFBQ0YsQUFBRUUsZ0JBQWtCQywyQkFBZ0IsQ0FBbENELGVBQ0YsQUFBRUUscUJBQXVCQyxzQkFBVyxDQUFsQ0Qsb0JBQ0FFLGdCQUF1Q0Msa0JBQU8sQ0FBOUNELGVBQWVFLHNCQUF3QkQsa0JBQU8sQ0FBL0JDLHFCQUNqQixBQUFFQyw4Q0FBZ0RDLHVCQUFZLENBQTVERDtBQUVELFNBQVNWLEtBQUtZLElBQUksRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsUUFBUTtRQUd2QztJQUZiLElBQU1DLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ0osT0FDL0JLLFNBQVNuQixhQUNUTyxhQUFVLFdBQ0osaUJBREksTUFDSEQsZUFBZ0JHLDhDQUNqQixpQkFGSSxNQUVIRCxxQkFBc0JDLDhDQUZuQixPQUlWVyxVQUFVSixZQUFZLEdBQUc7SUFFNUIsSUFBTUssVUFBVW5CLGNBQWNTLE1BQU1DLEtBQUtDLE9BQU9NLFFBQVFaLFdBQVMsU0FBQ2UsT0FBT0M7UUFDckUsSUFBSUEsYUFBYSxNQUFNO1lBQ3RCRCxRQUFRO1FBQ1QsT0FBTztZQUNOLElBQU0sQUFBRUUsYUFBZUQsU0FBZkM7WUFFUixJQUFJQSxlQUFlcEIsb0JBQW9CO2dCQUN0Q2tCLFFBQVE7WUFDVDtRQUNEO1FBRUEsSUFBSUEsT0FBTztZQUNWLElBQU1SLFNBQU87WUFFYkMsU0FBU0Q7WUFFVDtRQUNEO1FBRUFXLG9CQUFvQkYsVUFBVSxTQUFDSDtZQUM5QixJQUFJTixTQUFPO1lBRVgsSUFBSTtnQkFDSEEsU0FBT0csS0FBS1MsS0FBSyxDQUFDTjtZQUNuQixFQUFFLE9BQU9FLE9BQU8sQ0FBQyxFQUFFLEdBQUc7WUFFdEJQLFNBQVNEO1FBQ1Y7SUFDRCxJQUNBYSxXQUFXQyxnQkFBUSxDQUFDQyxJQUFJLENBQUNUO0lBRTVCTyxTQUFTRyxJQUFJLENBQUNUO0FBQ2Y7SUFFQSxXQUFlO0lBQ2R0QixNQUFBQTtBQUNEO0FBRUEsU0FBUzBCLG9CQUFvQkYsUUFBUSxFQUFFUixRQUFRO0lBQzlDLElBQUlLLFVBQVVXLHVCQUFZO0lBRTFCUixTQUFTUyxFQUFFLENBQUNDLGVBQUksRUFBRSxTQUFDQztRQUNsQmQsV0FBV2M7SUFDWjtJQUVBWCxTQUFTUyxFQUFFLENBQUNHLGNBQUcsRUFBRTtRQUNoQnBCLFNBQVNLO0lBQ1Y7QUFDRCJ9