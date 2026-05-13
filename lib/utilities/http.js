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
                var jsonString = content; ///
                _$json = JSON.parse(jsonString);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHR0cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tIFwic3RyZWFtXCI7XG5cbmltcG9ydCB7IG1ldGhvZHMsIGhlYWRlcnMsIGNvbnRlbnRUeXBlcywgc3RhdHVzQ29kZXMsIHJlcXVlc3RVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVORCwgREFUQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IFBPU1RfTUVUSE9EIH0gPSBtZXRob2RzLFxuICAgICAgeyBjcmVhdGVSZXF1ZXN0IH0gPSByZXF1ZXN0VXRpbGl0aWVzLFxuICAgICAgeyBPS18yMDBfU1RBVFVTX0NPREUgfSA9IHN0YXR1c0NvZGVzLFxuICAgICAgeyBBQ0NFUFRfSEVBREVSLCBDT05URU5UX1RZUEVfSEVBREVSIH0gPSBoZWFkZXJzLFxuICAgICAgeyBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFIH0gPSBjb250ZW50VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwgcXVlcnksIGpzb24sIGNhbGxiYWNrKSB7XG5cdGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKSxcblx0XHRcdFx0bWV0aG9kID0gUE9TVF9NRVRIT0QsXG5cdFx0XHRcdGhlYWRlcnMgPSB7XG4gICAgICAgICAgW0FDQ0VQVF9IRUFERVJdOiBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgIFtDT05URU5UX1RZUEVfSEVBREVSXTogQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRVxuICAgICAgICB9LFxuXHRcdFx0XHRjb250ZW50ID0ganNvblN0cmluZztcdC8vL1xuXG5cdGNvbnN0IHJlcXVlc3QgPSBjcmVhdGVSZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXNwb25zZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHJlc3BvbnNlO1xuXG5cdFx0XHRcdFx0XHRpZiAoc3RhdHVzQ29kZSAhPT0gT0tfMjAwX1NUQVRVU19DT0RFKSB7XG5cdFx0XHRcdFx0XHRcdGVycm9yID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGpzb24gPSBudWxsO1xuXG5cdFx0XHRcdFx0XHRjYWxsYmFjayhqc29uKTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnRlbnRGcm9tUmVzcG9uc2UocmVzcG9uc2UsIChjb250ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQganNvbiA9IG51bGw7XG5cblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGpzb25TdHJpbmcgPSBjb250ZW50O1x0Ly8vXG5cblx0XHRcdFx0XHRcdFx0anNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge31cdC8vL1xuXG5cdFx0XHRcdFx0XHRjYWxsYmFjayhqc29uKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHJlYWRhYmxlID0gUmVhZGFibGUuZnJvbShjb250ZW50KTtcblxuXHRyZWFkYWJsZS5waXBlKHJlcXVlc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHBvc3Rcbn07XG5cbmZ1bmN0aW9uIGNvbnRlbnRGcm9tUmVzcG9uc2UocmVzcG9uc2UsIGNhbGxiYWNrKSB7XG5cdGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG5cdHJlc3BvbnNlLm9uKERBVEEsIChkYXRhKSA9PiB7XG5cdFx0Y29udGVudCArPSBkYXRhO1xuXHR9KTtcblxuXHRyZXNwb25zZS5vbihFTkQsICgpID0+IHtcblx0XHRjYWxsYmFjayhjb250ZW50KTtcblx0fSk7XG59XG4iXSwibmFtZXMiOlsicG9zdCIsIlBPU1RfTUVUSE9EIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJyZXF1ZXN0VXRpbGl0aWVzIiwiT0tfMjAwX1NUQVRVU19DT0RFIiwic3RhdHVzQ29kZXMiLCJBQ0NFUFRfSEVBREVSIiwiaGVhZGVycyIsIkNPTlRFTlRfVFlQRV9IRUFERVIiLCJBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFIiwiY29udGVudFR5cGVzIiwiaG9zdCIsInVyaSIsInF1ZXJ5IiwianNvbiIsImNhbGxiYWNrIiwianNvblN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJjb250ZW50IiwicmVxdWVzdCIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiY29udGVudEZyb21SZXNwb25zZSIsInBhcnNlIiwicmVhZGFibGUiLCJSZWFkYWJsZSIsImZyb20iLCJwaXBlIiwiRU1QVFlfU1RSSU5HIiwib24iLCJEQVRBIiwiZGF0YSIsIkVORCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBMkRBO2VBQUE7O1FBN0NnQkE7ZUFBQUE7OztzQkFaUzt5QkFFcUQ7eUJBRXRDOzs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFNLEFBQUVDLGNBQWdCQyxrQkFBTyxDQUF2QkQsYUFDRixBQUFFRSxnQkFBa0JDLDJCQUFnQixDQUFsQ0QsZUFDRixBQUFFRSxxQkFBdUJDLHNCQUFXLENBQWxDRCxvQkFDQUUsZ0JBQXVDQyxrQkFBTyxDQUE5Q0QsZUFBZUUsc0JBQXdCRCxrQkFBTyxDQUEvQkMscUJBQ2pCLEFBQUVDLDhDQUFnREMsdUJBQVksQ0FBNUREO0FBRUQsU0FBU1YsS0FBS1ksSUFBSSxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRO1FBR3ZDO0lBRmIsSUFBTUMsYUFBYUMsS0FBS0MsU0FBUyxDQUFDSixPQUMvQkssU0FBU25CLGFBQ1RPLGFBQVUsV0FDSixpQkFESSxNQUNIRCxlQUFnQkcsOENBQ2pCLGlCQUZJLE1BRUhELHFCQUFzQkMsOENBRm5CLE9BSVZXLFVBQVVKLFlBQVksR0FBRztJQUU1QixJQUFNSyxVQUFVbkIsY0FBY1MsTUFBTUMsS0FBS0MsT0FBT00sUUFBUVosV0FBUyxTQUFDZSxPQUFPQztRQUNyRSxJQUFJQSxhQUFhLE1BQU07WUFDdEJELFFBQVE7UUFDVCxPQUFPO1lBQ04sSUFBTSxBQUFFRSxhQUFlRCxTQUFmQztZQUVSLElBQUlBLGVBQWVwQixvQkFBb0I7Z0JBQ3RDa0IsUUFBUTtZQUNUO1FBQ0Q7UUFFQSxJQUFJQSxPQUFPO1lBQ1YsSUFBTVIsU0FBTztZQUViQyxTQUFTRDtZQUVUO1FBQ0Q7UUFFQVcsb0JBQW9CRixVQUFVLFNBQUNIO1lBQzlCLElBQUlOLFNBQU87WUFFWCxJQUFJO2dCQUNILElBQU1FLGFBQWFJLFNBQVMsR0FBRztnQkFFL0JOLFNBQU9HLEtBQUtTLEtBQUssQ0FBQ1Y7WUFDbkIsRUFBRSxPQUFPTSxPQUFPLENBQUMsRUFBRSxHQUFHO1lBRXRCUCxTQUFTRDtRQUNWO0lBQ0QsSUFDQWEsV0FBV0MsZ0JBQVEsQ0FBQ0MsSUFBSSxDQUFDVDtJQUU1Qk8sU0FBU0csSUFBSSxDQUFDVDtBQUNmO0lBRUEsV0FBZTtJQUNkdEIsTUFBQUE7QUFDRDtBQUVBLFNBQVMwQixvQkFBb0JGLFFBQVEsRUFBRVIsUUFBUTtJQUM5QyxJQUFJSyxVQUFVVyx1QkFBWTtJQUUxQlIsU0FBU1MsRUFBRSxDQUFDQyxlQUFJLEVBQUUsU0FBQ0M7UUFDbEJkLFdBQVdjO0lBQ1o7SUFFQVgsU0FBU1MsRUFBRSxDQUFDRyxjQUFHLEVBQUU7UUFDaEJwQixTQUFTSztJQUNWO0FBQ0QifQ==