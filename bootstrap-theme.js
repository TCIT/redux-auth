(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/views/bootstrap/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/authenticate.js":
/*!*************************************!*\
  !*** ./src/actions/authenticate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateStart = authenticateStart;
exports.authenticateComplete = authenticateComplete;
exports.authenticateError = authenticateError;
var AUTHENTICATE_START = exports.AUTHENTICATE_START = "AUTHENTICATE_START";
var AUTHENTICATE_COMPLETE = exports.AUTHENTICATE_COMPLETE = "AUTHENTICATE_COMPLETE";
var AUTHENTICATE_ERROR = exports.AUTHENTICATE_ERROR = "AUTHENTICATE_ERROR";

function authenticateStart() {
  return { type: AUTHENTICATE_START };
}
function authenticateComplete(user) {
  return { type: AUTHENTICATE_COMPLETE, user: user };
}
function authenticateError(errors) {
  return { type: AUTHENTICATE_ERROR, errors: errors };
}

/***/ }),

/***/ "./src/actions/configure.js":
/*!**********************************!*\
  !*** ./src/actions/configure.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STORE_CURRENT_ENDPOINT_KEY = exports.SET_ENDPOINT_KEYS = undefined;
exports.setEndpointKeys = setEndpointKeys;
exports.storeCurrentEndpointKey = storeCurrentEndpointKey;
exports.configure = configure;

var _extend = __webpack_require__(/*! extend */ "extend");

var _extend2 = _interopRequireDefault(_extend);

var _constants = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");

var C = _interopRequireWildcard(_constants);

var _authenticate = __webpack_require__(/*! ./authenticate */ "./src/actions/authenticate.js");

var _ui = __webpack_require__(/*! ./ui */ "./src/actions/ui.js");

var _server = __webpack_require__(/*! ./server */ "./src/actions/server.js");

var _clientSettings = __webpack_require__(/*! ../utils/client-settings */ "./src/utils/client-settings.js");

var _sessionStorage = __webpack_require__(/*! ../utils/session-storage */ "./src/utils/session-storage.js");

var _verifyAuth = __webpack_require__(/*! ../utils/verify-auth */ "./src/utils/verify-auth.js");

var _verifyAuth2 = _interopRequireDefault(_verifyAuth);

var _parseUrl = __webpack_require__(/*! ../utils/parse-url */ "./src/utils/parse-url.js");

var _parseUrl2 = _interopRequireDefault(_parseUrl);

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_ENDPOINT_KEYS = exports.SET_ENDPOINT_KEYS = "SET_ENDPOINT_KEYS";
var STORE_CURRENT_ENDPOINT_KEY = exports.STORE_CURRENT_ENDPOINT_KEY = "STORE_CURRENT_ENDPOINT_KEY";
function setEndpointKeys(endpoints, currentEndpointKey, defaultEndpointKey) {
  return { type: SET_ENDPOINT_KEYS, endpoints: endpoints, currentEndpointKey: currentEndpointKey, defaultEndpointKey: defaultEndpointKey };
};
function storeCurrentEndpointKey(currentEndpointKey) {
  return { type: STORE_CURRENT_ENDPOINT_KEY, currentEndpointKey: currentEndpointKey };
};

function configure() {
  var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function (dispatch) {
    // don't render anything for OAuth redirects
    if (settings.currentLocation && settings.currentLocation.match(/blank=true/)) {
      return Promise.resolve({ blank: true });
    }

    dispatch((0, _authenticate.authenticateStart)());

    var promise = void 0,
        firstTimeLogin = void 0,
        mustResetPassword = void 0,
        user = void 0,
        headers = void 0;

    if (settings.isServer) {
      promise = (0, _verifyAuth2.default)(endpoint, settings).then(function (_ref) {
        var user = _ref.user,
            headers = _ref.headers,
            firstTimeLogin = _ref.firstTimeLogin,
            mustResetPassword = _ref.mustResetPassword,
            currentEndpoint = _ref.currentEndpoint,
            currentEndpointKey = _ref.currentEndpointKey,
            defaultEndpointKey = _ref.defaultEndpointKey;

        dispatch((0, _server.ssAuthTokenUpdate)({
          headers: headers,
          user: user,
          firstTimeLogin: firstTimeLogin,
          mustResetPassword: mustResetPassword
        }));

        dispatch(setEndpointKeys(Object.keys(currentEndpoint), currentEndpointKey, defaultEndpointKey));

        return user;
      }).catch(function (_ref2) {
        var reason = _ref2.reason,
            firstTimeLogin = _ref2.firstTimeLogin,
            mustResetPassword = _ref2.mustResetPassword,
            currentEndpoint = _ref2.currentEndpoint,
            defaultEndpointKey = _ref2.defaultEndpointKey;

        dispatch((0, _server.ssAuthTokenUpdate)({ firstTimeLogin: firstTimeLogin, mustResetPassword: mustResetPassword }));
        dispatch(setEndpointKeys(Object.keys(currentEndpoint || {}), null, defaultEndpointKey));
        return Promise.reject({ reason: reason });
      });
    } else {
      // if the authentication happened server-side, find the resulting auth
      // credentials that were injected into the dom.
      var tokenBridge = document.getElementById("token-bridge");

      if (tokenBridge) {
        var rawServerCreds = tokenBridge.innerHTML;
        if (rawServerCreds) {
          var serverCreds = JSON.parse(rawServerCreds);

          headers = serverCreds.headers;
          user = serverCreds.user;
          firstTimeLogin = serverCreds.firstTimeLogin;
          mustResetPassword = serverCreds.mustResetPassword;


          if (user) {
            dispatch((0, _authenticate.authenticateComplete)(user));

            // do NOT send initial validation request.
            // instead use the credentials that were sent back by the server.
            settings.initialCredentials = serverCreds;
          }

          // sync client dom to prevent React "out of sync" error
          dispatch((0, _server.ssAuthTokenUpdate)({
            user: user,
            headers: headers,
            mustResetPassword: mustResetPassword,
            firstTimeLogin: firstTimeLogin
          }));
        }
      }

      var _getRedirectInfo = (0, _parseUrl2.default)(window.location),
          authRedirectPath = _getRedirectInfo.authRedirectPath,
          authRedirectHeaders = _getRedirectInfo.authRedirectHeaders;

      if (authRedirectPath) {
        dispatch((0, _reactRouterRedux.push)({ pathname: authRedirectPath }));
      }

      if (authRedirectHeaders && authRedirectHeaders.uid && authRedirectHeaders["access-token"]) {
        settings.initialCredentials = (0, _extend2.default)({}, settings.initialCredentials, authRedirectHeaders);
      }

      // if tokens were invalidated by server or from the settings, make sure
      // to clear browser credentials
      if (!settings.clientOnly && !settings.initialCredentials || settings.cleanSession) {
        (0, _sessionStorage.destroySession)();
      }

      promise = Promise.resolve((0, _clientSettings.applyConfig)({ dispatch: dispatch, endpoint: endpoint, settings: settings }));
    }

    return promise.then(function (user) {
      dispatch((0, _authenticate.authenticateComplete)(user));

      if (firstTimeLogin) {
        dispatch((0, _ui.showFirstTimeLoginSuccessModal)());
      }

      if (mustResetPassword) {
        dispatch((0, _ui.showPasswordResetSuccessModal)());
      }

      return user;
    }).catch(function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          reason = _ref3.reason;

      dispatch((0, _authenticate.authenticateError)([reason]));

      if (firstTimeLogin) {
        dispatch((0, _ui.showFirstTimeLoginErrorModal)());
      }

      if (mustResetPassword) {
        dispatch((0, _ui.showPasswordResetErrorModal)());
      }

      return Promise.resolve({ reason: reason });
    });
  };
}

/***/ }),

/***/ "./src/actions/destroy-account.js":
/*!****************************************!*\
  !*** ./src/actions/destroy-account.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DESTROY_ACCOUNT_ERROR = exports.DESTROY_ACCOUNT_COMPLETE = exports.DESTROY_ACCOUNT_START = undefined;
exports.destroyAccountStart = destroyAccountStart;
exports.destroyAccountComplete = destroyAccountComplete;
exports.destroyAccountError = destroyAccountError;
exports.destroyAccount = destroyAccount;

var _sessionStorage = __webpack_require__(/*! ../utils/session-storage */ "./src/utils/session-storage.js");

var _handleFetchResponse = __webpack_require__(/*! ../utils/handle-fetch-response */ "./src/utils/handle-fetch-response.js");

var _configure = __webpack_require__(/*! ./configure */ "./src/actions/configure.js");

var _fetch = __webpack_require__(/*! ../utils/fetch */ "./src/utils/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DESTROY_ACCOUNT_START = exports.DESTROY_ACCOUNT_START = "DESTROY_ACCOUNT_START";
var DESTROY_ACCOUNT_COMPLETE = exports.DESTROY_ACCOUNT_COMPLETE = "DESTROY_ACCOUNT_COMPLETE";
var DESTROY_ACCOUNT_ERROR = exports.DESTROY_ACCOUNT_ERROR = "DESTROY_ACCOUNT_ERROR";

function destroyAccountStart(endpoint) {
  return { type: DESTROY_ACCOUNT_START, endpoint: endpoint };
}
function destroyAccountComplete(message, endpoint) {
  return { type: DESTROY_ACCOUNT_COMPLETE, endpoint: endpoint, message: message };
}
function destroyAccountError(errors, endpoint) {
  return { type: DESTROY_ACCOUNT_ERROR, endpoint: endpoint, errors: errors };
}
function destroyAccount(endpoint) {
  return function (dispatch) {
    dispatch(destroyAccountStart(endpoint));

    return (0, _fetch2.default)((0, _sessionStorage.getDestroyAccountUrl)(endpoint), { method: "delete" }).then(_handleFetchResponse.parseResponse).then(function (_ref) {
      var message = _ref.message;

      dispatch(destroyAccountComplete(message, endpoint));

      // revert current session endpoint to default
      var defaultEndpointKey = (0, _sessionStorage.getDefaultEndpointKey)();

      // set in store
      dispatch((0, _configure.storeCurrentEndpointKey)(defaultEndpointKey));

      // and in session
      (0, _sessionStorage.setCurrentEndpointKey)(defaultEndpointKey);
    }).catch(function (_ref2) {
      var errors = _ref2.errors;
      return dispatch(destroyAccountError(errors, endpoint));
    });
  };
}

/***/ }),

/***/ "./src/actions/email-sign-in.js":
/*!**************************************!*\
  !*** ./src/actions/email-sign-in.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMAIL_SIGN_IN_FORM_UPDATE = exports.EMAIL_SIGN_IN_ERROR = exports.EMAIL_SIGN_IN_COMPLETE = exports.EMAIL_SIGN_IN_START = undefined;
exports.emailSignInFormUpdate = emailSignInFormUpdate;
exports.emailSignInStart = emailSignInStart;
exports.emailSignInComplete = emailSignInComplete;
exports.emailSignInError = emailSignInError;
exports.emailSignIn = emailSignIn;

var _sessionStorage = __webpack_require__(/*! ../utils/session-storage */ "./src/utils/session-storage.js");

var _configure = __webpack_require__(/*! ./configure */ "./src/actions/configure.js");

var _handleFetchResponse = __webpack_require__(/*! ../utils/handle-fetch-response */ "./src/utils/handle-fetch-response.js");

var _fetch = __webpack_require__(/*! ../utils/fetch */ "./src/utils/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMAIL_SIGN_IN_START = exports.EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START";
var EMAIL_SIGN_IN_COMPLETE = exports.EMAIL_SIGN_IN_COMPLETE = "EMAIL_SIGN_IN_COMPLETE";
var EMAIL_SIGN_IN_ERROR = exports.EMAIL_SIGN_IN_ERROR = "EMAIL_SIGN_IN_ERROR";
var EMAIL_SIGN_IN_FORM_UPDATE = exports.EMAIL_SIGN_IN_FORM_UPDATE = "EMAIL_SIGN_IN_FORM_UPDATE";

function emailSignInFormUpdate(endpoint, key, value) {
  return { type: EMAIL_SIGN_IN_FORM_UPDATE, endpoint: endpoint, key: key, value: value };
}
function emailSignInStart(endpoint) {
  return { type: EMAIL_SIGN_IN_START, endpoint: endpoint };
}
function emailSignInComplete(endpoint, user) {
  return { type: EMAIL_SIGN_IN_COMPLETE, user: user, endpoint: endpoint };
}
function emailSignInError(endpoint, errors) {
  return { type: EMAIL_SIGN_IN_ERROR, errors: errors, endpoint: endpoint };
}
function emailSignIn(body, endpointKey) {
  return function (dispatch) {
    // save previous endpoint key in case of failure
    var prevEndpointKey = (0, _sessionStorage.getCurrentEndpointKey)();

    // necessary for fetch to recognize the response as an api request
    (0, _sessionStorage.setCurrentEndpointKey)(endpointKey);
    var currentEndpointKey = (0, _sessionStorage.getCurrentEndpointKey)();

    dispatch((0, _configure.storeCurrentEndpointKey)(currentEndpointKey));
    dispatch(emailSignInStart(currentEndpointKey));

    return (0, _fetch2.default)((0, _sessionStorage.getEmailSignInUrl)(currentEndpointKey), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(body)
    }).then(_handleFetchResponse.parseResponse).then(function (user) {
      return dispatch(emailSignInComplete(currentEndpointKey, user));
    }).catch(function (errors) {
      // revert endpoint key to what it was before failed request
      (0, _sessionStorage.setCurrentEndpointKey)(prevEndpointKey);
      dispatch((0, _configure.storeCurrentEndpointKey)(prevEndpointKey));
      dispatch(emailSignInError(currentEndpointKey, errors));
      throw errors;
    });
  };
}

/***/ }),

/***/ "./src/actions/email-sign-up.js":
/*!**************************************!*\
  !*** ./src/actions/email-sign-up.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMAIL_SIGN_UP_FORM_UPDATE = exports.EMAIL_SIGN_UP_ERROR = exports.EMAIL_SIGN_UP_COMPLETE = exports.EMAIL_SIGN_UP_START = undefined;
exports.emailSignUpFormUpdate = emailSignUpFormUpdate;
exports.emailSignUpStart = emailSignUpStart;
exports.emailSignUpComplete = emailSignUpComplete;
exports.emailSignUpError = emailSignUpError;
exports.emailSignUp = emailSignUp;

var _sessionStorage = __webpack_require__(/*! ../utils/session-storage */ "./src/utils/session-storage.js");

var _handleFetchResponse = __webpack_require__(/*! ../utils/handle-fetch-response */ "./src/utils/handle-fetch-response.js");

var _extend = __webpack_require__(/*! extend */ "extend");

var _extend2 = _interopRequireDefault(_extend);

var _fetch = __webpack_require__(/*! ../utils/fetch */ "./src/utils/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMAIL_SIGN_UP_START = exports.EMAIL_SIGN_UP_START = "EMAIL_SIGN_UP_START";
var EMAIL_SIGN_UP_COMPLETE = exports.EMAIL_SIGN_UP_COMPLETE = "EMAIL_SIGN_UP_COMPLETE";
var EMAIL_SIGN_UP_ERROR = exports.EMAIL_SIGN_UP_ERROR = "EMAIL_SIGN_UP_ERROR";
var EMAIL_SIGN_UP_FORM_UPDATE = exports.EMAIL_SIGN_UP_FORM_UPDATE = "EMAIL_SIGN_UP_FORM_UPDATE";

function emailSignUpFormUpdate(endpoint, key, value) {
  return { type: EMAIL_SIGN_UP_FORM_UPDATE, endpoint: endpoint, key: key, value: value };
}
function emailSignUpStart(endpoint) {
  return { type: EMAIL_SIGN_UP_START, endpoint: endpoint };
}
function emailSignUpComplete(user, endpoint) {
  return { type: EMAIL_SIGN_UP_COMPLETE, user: user, endpoint: endpoint };
}
function emailSignUpError(errors, endpoint) {
  return { type: EMAIL_SIGN_UP_ERROR, errors: errors, endpoint: endpoint };
}
function emailSignUp(body, endpointKey) {
  return function (dispatch) {
    dispatch(emailSignUpStart(endpointKey));

    return (0, _fetch2.default)((0, _sessionStorage.getEmailSignUpUrl)(endpointKey), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify((0, _extend2.default)(body, {
        confirm_success_url: (0, _sessionStorage.getConfirmationSuccessUrl)()
      }))
    }).then(_handleFetchResponse.parseResponse).then(function (_ref) {
      var data = _ref.data;
      return dispatch(emailSignUpComplete(data, endpointKey));
    }).catch(function (_ref2) {
      var errors = _ref2.errors;

      dispatch(emailSignUpError(errors, endpointKey));
      throw errors;
    });
  };
}

/***/ }),

/***/ "./src/actions/oauth-sign-in.js":
/*!**************************************!*\
  !*** ./src/actions/oauth-sign-in.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OAUTH_SIGN_IN_ERROR = exports.OAUTH_SIGN_IN_COMPLETE = exports.OAUTH_SIGN_IN_START = undefined;
exports.oAuthSignInStart = oAuthSignInStart;
exports.oAuthSignInComplete = oAuthSignInComplete;
exports.oAuthSignInError = oAuthSignInError;
exports.oAuthSignIn = oAuthSignIn;

var _constants = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");

var C = _interopRequireWildcard(_constants);

var _parseUrl = __webpack_require__(/*! ../utils/parse-url */ "./src/utils/parse-url.js");

var _sessionStorage = __webpack_require__(/*! ../utils/session-storage */ "./src/utils/session-storage.js");

var _configure = __webpack_require__(/*! ./configure */ "./src/actions/configure.js");

var _handleFetchResponse = __webpack_require__(/*! ../utils/handle-fetch-response */ "./src/utils/handle-fetch-response.js");

var _fetch = __webpack_require__(/*! ../utils/fetch */ "./src/utils/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

var _popup = __webpack_require__(/*! ../utils/popup */ "./src/utils/popup.js");

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var OAUTH_SIGN_IN_START = exports.OAUTH_SIGN_IN_START = "OAUTH_SIGN_IN_START";
var OAUTH_SIGN_IN_COMPLETE = exports.OAUTH_SIGN_IN_COMPLETE = "OAUTH_SIGN_IN_COMPLETE";
var OAUTH_SIGN_IN_ERROR = exports.OAUTH_SIGN_IN_ERROR = "OAUTH_SIGN_IN_ERROR";

// hook for rewire
var openPopup = _popup2.default;

function listenForCredentials(endpointKey, popup, provider, resolve, reject) {
  if (!resolve) {
    return new Promise(function (resolve, reject) {
      listenForCredentials(endpointKey, popup, provider, resolve, reject);
    });
  } else {
    var creds = void 0;

    try {
      creds = (0, _parseUrl.getAllParams)(popup.location);
    } catch (err) {}

    if (creds && creds.uid) {
      popup.close();
      (0, _sessionStorage.persistData)(C.SAVED_CREDS_KEY, (0, _parseUrl.normalizeTokenKeys)(creds));
      (0, _fetch2.default)((0, _sessionStorage.getTokenValidationPath)(endpointKey)).then(_handleFetchResponse.parseResponse).then(function (_ref) {
        var data = _ref.data;
        return resolve(data);
      }).catch(function (_ref2) {
        var errors = _ref2.errors;
        return reject({ errors: errors });
      });
    } else if (popup.closed) {
      reject({ errors: "Authentication was cancelled." });
    } else {
      setTimeout(function () {
        listenForCredentials(endpointKey, popup, provider, resolve, reject);
      }, 0);
    }
  }
}

function authenticate(_ref3) {
  var endpointKey = _ref3.endpointKey,
      provider = _ref3.provider,
      url = _ref3.url,
      _ref3$tab = _ref3.tab,
      tab = _ref3$tab === undefined ? false : _ref3$tab;

  var name = tab ? "_blank" : provider;
  var popup = openPopup(provider, url, name);
  return listenForCredentials(endpointKey, popup, provider);
}

function oAuthSignInStart(provider, endpoint) {
  return { type: OAUTH_SIGN_IN_START, provider: provider, endpoint: endpoint };
}
function oAuthSignInComplete(user, endpoint) {
  return { type: OAUTH_SIGN_IN_COMPLETE, user: user, endpoint: endpoint };
}
function oAuthSignInError(errors, endpoint) {
  return { type: OAUTH_SIGN_IN_ERROR, errors: errors, endpoint: endpoint };
}
function oAuthSignIn(_ref4) {
  var provider = _ref4.provider,
      params = _ref4.params,
      endpointKey = _ref4.endpointKey;

  return function (dispatch) {
    // save previous endpoint key in case of failure
    var prevEndpointKey = (0, _sessionStorage.getCurrentEndpointKey)();

    // necessary for `fetch` to recognize the response as an api request
    (0, _sessionStorage.setCurrentEndpointKey)(endpointKey);
    dispatch((0, _configure.storeCurrentEndpointKey)(endpointKey));

    var currentEndpointKey = (0, _sessionStorage.getCurrentEndpointKey)();

    dispatch(oAuthSignInStart(provider, currentEndpointKey));

    var url = (0, _sessionStorage.getOAuthUrl)({ provider: provider, params: params, currentEndpointKey: currentEndpointKey });

    return authenticate({ endpointKey: endpointKey, provider: provider, url: url }).then(function (user) {
      return dispatch(oAuthSignInComplete(user, currentEndpointKey));
    }).catch(function (_ref5) {
      var errors = _ref5.errors;

      // revert endpoint key to what it was before failed request
      (0, _sessionStorage.setCurrentEndpointKey)(prevEndpointKey);
      dispatch((0, _configure.storeCurrentEndpointKey)(prevEndpointKey));
      dispatch(oAuthSignInError(errors, currentEndpointKey));
      throw errors;
    });
  };
}

/***/ }),

/***/ "./src/actions/request-password-reset.js":
/*!***********************************************!*\
  !*** ./src/actions/request-password-reset.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REQUEST_PASSWORD_RESET_FORM_UPDATE = exports.REQUEST_PASSWORD_RESET_ERROR = exports.REQUEST_PASSWORD_RESET_COMPLETE = exports.REQUEST_PASSWORD_RESET_START = undefined;
exports.requestPasswordResetFormUpdate = requestPasswordResetFormUpdate;
exports.requestPasswordResetStart = requestPasswordResetStart;
exports.requestPasswordResetComplete = requestPasswordResetComplete;
exports.requestPasswordResetError = requestPasswordResetError;
exports.requestPasswordReset = requestPasswordReset;

var _sessionStorage = __webpack_require__(/*! ../utils/session-storage */ "./src/utils/session-storage.js");

var _handleFetchResponse = __webpack_require__(/*! ../utils/handle-fetch-response */ "./src/utils/handle-fetch-response.js");

var _extend = __webpack_require__(/*! extend */ "extend");

var _extend2 = _interopRequireDefault(_extend);

var _fetch = __webpack_require__(/*! ../utils/fetch */ "./src/utils/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_PASSWORD_RESET_START = exports.REQUEST_PASSWORD_RESET_START = "REQUEST_PASSWORD_RESET_START";
var REQUEST_PASSWORD_RESET_COMPLETE = exports.REQUEST_PASSWORD_RESET_COMPLETE = "REQUEST_PASSWORD_RESET_COMPLETE";
var REQUEST_PASSWORD_RESET_ERROR = exports.REQUEST_PASSWORD_RESET_ERROR = "REQUEST_PASSWORD_RESET_ERROR";
var REQUEST_PASSWORD_RESET_FORM_UPDATE = exports.REQUEST_PASSWORD_RESET_FORM_UPDATE = "REQUEST_PASSWORD_RESET_FORM_UPDATE";

function requestPasswordResetFormUpdate(endpoint, key, value) {
  return { type: REQUEST_PASSWORD_RESET_FORM_UPDATE, endpoint: endpoint, key: key, value: value };
}
function requestPasswordResetStart(endpoint) {
  return { type: REQUEST_PASSWORD_RESET_START, endpoint: endpoint };
}
function requestPasswordResetComplete(endpoint, message) {
  return { type: REQUEST_PASSWORD_RESET_COMPLETE, endpoint: endpoint, message: message };
}
function requestPasswordResetError(endpoint, errors) {
  return { type: REQUEST_PASSWORD_RESET_ERROR, endpoint: endpoint, errors: errors };
}
function requestPasswordReset(body, endpoint) {
  return function (dispatch) {
    dispatch(requestPasswordResetStart(endpoint));

    return (0, _fetch2.default)((0, _sessionStorage.getPasswordResetRequestUrl)(endpoint), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify((0, _extend2.default)(body, {
        redirect_url: (0, _sessionStorage.getPasswordResetRedirectUrl)(endpoint)
      }))
    }).then(_handleFetchResponse.parseResponse).then(function (_ref) {
      var message = _ref.message;
      return dispatch(requestPasswordResetComplete(endpoint, message));
    }).catch(function (_ref2) {
      var errors = _ref2.errors;
      return dispatch(requestPasswordResetError(endpoint, errors));
    });
  };
}

/***/ }),

/***/ "./src/actions/server.js":
/*!*******************************!*\
  !*** ./src/actions/server.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssAuthTokenUpdate = ssAuthTokenUpdate;
var SS_AUTH_TOKEN_UPDATE = exports.SS_AUTH_TOKEN_UPDATE = "SS_AUTH_TOKEN_UPDATE";

function ssAuthTokenUpdate(_ref) {
  var user = _ref.user,
      headers = _ref.headers,
      mustResetPassword = _ref.mustResetPassword,
      firstTimeLogin = _ref.firstTimeLogin,
      endpointKey = _ref.endpointKey;

  return { type: SS_AUTH_TOKEN_UPDATE, user: user, headers: headers, mustResetPassword: mustResetPassword, firstTimeLogin: firstTimeLogin, endpointKey: endpointKey };
}

/***/ }),

/***/ "./src/actions/sign-out.js":
/*!*********************************!*\
  !*** ./src/actions/sign-out.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIGN_OUT_ERROR = exports.SIGN_OUT_COMPLETE = exports.SIGN_OUT_START = undefined;
exports.signOutStart = signOutStart;
exports.signOutComplete = signOutComplete;
exports.signOutError = signOutError;
exports.signOut = signOut;

var _sessionStorage = __webpack_require__(/*! ../utils/session-storage */ "./src/utils/session-storage.js");

var _handleFetchResponse = __webpack_require__(/*! ../utils/handle-fetch-response */ "./src/utils/handle-fetch-response.js");

var _configure = __webpack_require__(/*! ./configure */ "./src/actions/configure.js");

var _fetch = __webpack_require__(/*! ../utils/fetch */ "./src/utils/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIGN_OUT_START = exports.SIGN_OUT_START = "SIGN_OUT_START";
var SIGN_OUT_COMPLETE = exports.SIGN_OUT_COMPLETE = "SIGN_OUT_COMPLETE";
var SIGN_OUT_ERROR = exports.SIGN_OUT_ERROR = "SIGN_OUT_ERROR";

function signOutStart(endpoint) {
  return { type: SIGN_OUT_START, endpoint: endpoint };
}
function signOutComplete(endpoint, user) {
  return { type: SIGN_OUT_COMPLETE, user: user, endpoint: endpoint };
}
function signOutError(endpoint, errors) {
  return { type: SIGN_OUT_ERROR, endpoint: endpoint, errors: errors };
}
function signOut(endpoint) {
  return function (dispatch) {
    dispatch(signOutStart(endpoint));

    return (0, _fetch2.default)((0, _sessionStorage.getSignOutUrl)(endpoint), { method: "delete" }).then(_handleFetchResponse.parseResponse).then(function (user) {
      dispatch(signOutComplete(endpoint, user));
      dispatch((0, _configure.storeCurrentEndpointKey)(null));
      (0, _sessionStorage.destroySession)();
    }).catch(function (_ref) {
      var errors = _ref.errors;

      dispatch(signOutError(endpoint, errors));
      dispatch((0, _configure.storeCurrentEndpointKey)(null));
      (0, _sessionStorage.destroySession)();
      throw errors;
    });
  };
}

/***/ }),

/***/ "./src/actions/ui.js":
/*!***************************!*\
  !*** ./src/actions/ui.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideEmailSignInSuccessModal = hideEmailSignInSuccessModal;
exports.hideEmailSignInErrorModal = hideEmailSignInErrorModal;
exports.hideOAuthSignInSuccessModal = hideOAuthSignInSuccessModal;
exports.hideOAuthSignInErrorModal = hideOAuthSignInErrorModal;
exports.hideSignOutSuccessModal = hideSignOutSuccessModal;
exports.hideSignOutErrorModal = hideSignOutErrorModal;
exports.hideEmailSignUpSuccessModal = hideEmailSignUpSuccessModal;
exports.hideEmailSignUpErrorModal = hideEmailSignUpErrorModal;
exports.showFirstTimeLoginSuccessModal = showFirstTimeLoginSuccessModal;
exports.showPasswordResetSuccessModal = showPasswordResetSuccessModal;
exports.hideFirstTimeLoginSuccessModal = hideFirstTimeLoginSuccessModal;
exports.hidePasswordResetSuccessModal = hidePasswordResetSuccessModal;
exports.showFirstTimeLoginErrorModal = showFirstTimeLoginErrorModal;
exports.showPasswordResetErrorModal = showPasswordResetErrorModal;
exports.hideFirstTimeLoginErrorModal = hideFirstTimeLoginErrorModal;
exports.hidePasswordResetErrorModal = hidePasswordResetErrorModal;
exports.hidePasswordResetRequestSuccessModal = hidePasswordResetRequestSuccessModal;
exports.hidePasswordResetRequestErrorModal = hidePasswordResetRequestErrorModal;
exports.hideUpdatePasswordSuccessModal = hideUpdatePasswordSuccessModal;
exports.hideUpdatePasswordErrorModal = hideUpdatePasswordErrorModal;
exports.hideDestroyAccountSuccessModal = hideDestroyAccountSuccessModal;
exports.hideDestroyAccountErrorModal = hideDestroyAccountErrorModal;
var HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL = exports.HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL = "HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL";
var HIDE_EMAIL_SIGN_IN_ERROR_MODAL = exports.HIDE_EMAIL_SIGN_IN_ERROR_MODAL = "HIDE_EMAIL_SIGN_IN_ERROR_MODAL";
var HIDE_OAUTH_SIGN_IN_SUCCESS_MODAL = exports.HIDE_OAUTH_SIGN_IN_SUCCESS_MODAL = "HIDE_OAUTH_SIGN_IN_SUCCESS_MODAL";
var HIDE_OAUTH_SIGN_IN_ERROR_MODAL = exports.HIDE_OAUTH_SIGN_IN_ERROR_MODAL = "HIDE_OAUTH_SIGN_IN_ERROR_MODAL";
var HIDE_SIGN_OUT_ERROR_MODAL = exports.HIDE_SIGN_OUT_ERROR_MODAL = "HIDE_SIGN_OUT_ERROR_MODAL";
var HIDE_SIGN_OUT_SUCCESS_MODAL = exports.HIDE_SIGN_OUT_SUCCESS_MODAL = "HIDE_SIGN_OUT_SUCCESS_MODAL";
var HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL = exports.HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL = "HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL";
var HIDE_EMAIL_SIGN_UP_ERROR_MODAL = exports.HIDE_EMAIL_SIGN_UP_ERROR_MODAL = "HIDE_EMAIL_SIGN_UP_ERROR_MODAL";
var SHOW_FIRST_TIME_LOGIN_SUCCESS_MODAL = exports.SHOW_FIRST_TIME_LOGIN_SUCCESS_MODAL = "SHOW_FIRST_TIME_LOGIN_SUCCESS_MODAL";
var HIDE_FIRST_TIME_LOGIN_SUCCESS_MODAL = exports.HIDE_FIRST_TIME_LOGIN_SUCCESS_MODAL = "HIDE_FIRST_TIME_LOGIN_SUCCESS_MODAL";
var HIDE_PASSWORD_RESET_SUCCESS_MODAL = exports.HIDE_PASSWORD_RESET_SUCCESS_MODAL = "HIDE_PASSWORD_RESET_SUCCESS_MODAL";
var SHOW_PASSWORD_RESET_SUCCESS_MODAL = exports.SHOW_PASSWORD_RESET_SUCCESS_MODAL = "SHOW_PASSWORD_RESET_SUCCESS_MODAL";
var SHOW_FIRST_TIME_LOGIN_ERROR_MODAL = exports.SHOW_FIRST_TIME_LOGIN_ERROR_MODAL = "SHOW_FIRST_TIME_LOGIN_ERROR_MODAL";
var HIDE_FIRST_TIME_LOGIN_ERROR_MODAL = exports.HIDE_FIRST_TIME_LOGIN_ERROR_MODAL = "HIDE_FIRST_TIME_LOGIN_ERROR_MODAL";
var HIDE_PASSWORD_RESET_ERROR_MODAL = exports.HIDE_PASSWORD_RESET_ERROR_MODAL = "HIDE_PASSWORD_RESET_ERROR_MODAL";
var SHOW_PASSWORD_RESET_ERROR_MODAL = exports.SHOW_PASSWORD_RESET_ERROR_MODAL = "SHOW_PASSWORD_RESET_ERROR_MODAL";
var HIDE_REQUEST_PASSWORD_RESET_SUCCESS_MODAL = exports.HIDE_REQUEST_PASSWORD_RESET_SUCCESS_MODAL = "HIDE_REQUEST_PASSWORD_RESET_SUCCESS_MODAL";
var HIDE_REQUEST_PASSWORD_RESET_ERROR_MODAL = exports.HIDE_REQUEST_PASSWORD_RESET_ERROR_MODAL = "HIDE_REQUEST_PASSWORD_RESET_ERROR_MODAL";
var HIDE_UPDATE_PASSWORD_SUCCESS_MODAL = exports.HIDE_UPDATE_PASSWORD_SUCCESS_MODAL = "HIDE_UPDATE_PASSWORD_SUCCESS_MODAL";
var HIDE_UPDATE_PASSWORD_ERROR_MODAL = exports.HIDE_UPDATE_PASSWORD_ERROR_MODAL = "HIDE_UPDATE_PASSWORD_ERROR_MODAL";
var HIDE_DESTROY_ACCOUNT_SUCCESS_MODAL = exports.HIDE_DESTROY_ACCOUNT_SUCCESS_MODAL = "HIDE_DESTROY_ACCOUNT_SUCCESS_MODAL";
var HIDE_DESTROY_ACCOUNT_ERROR_MODAL = exports.HIDE_DESTROY_ACCOUNT_ERROR_MODAL = "HIDE_DESTROY_ACCOUNT_ERROR_MODAL";

function hideEmailSignInSuccessModal() {
  return { type: HIDE_EMAIL_SIGN_IN_SUCCESS_MODAL };
}
function hideEmailSignInErrorModal() {
  return { type: HIDE_EMAIL_SIGN_IN_ERROR_MODAL };
}
function hideOAuthSignInSuccessModal() {
  return { type: HIDE_OAUTH_SIGN_IN_SUCCESS_MODAL };
}
function hideOAuthSignInErrorModal() {
  return { type: HIDE_OAUTH_SIGN_IN_ERROR_MODAL };
}
function hideSignOutSuccessModal() {
  return { type: HIDE_SIGN_OUT_SUCCESS_MODAL };
}
function hideSignOutErrorModal() {
  return { type: HIDE_SIGN_OUT_ERROR_MODAL };
}
function hideEmailSignUpSuccessModal() {
  return { type: HIDE_EMAIL_SIGN_UP_SUCCESS_MODAL };
}
function hideEmailSignUpErrorModal() {
  return { type: HIDE_EMAIL_SIGN_UP_ERROR_MODAL };
}
function showFirstTimeLoginSuccessModal() {
  return { type: SHOW_FIRST_TIME_LOGIN_SUCCESS_MODAL };
}
function showPasswordResetSuccessModal() {
  return { type: SHOW_PASSWORD_RESET_SUCCESS_MODAL };
}
function hideFirstTimeLoginSuccessModal() {
  return { type: HIDE_FIRST_TIME_LOGIN_SUCCESS_MODAL };
}
function hidePasswordResetSuccessModal() {
  return { type: HIDE_PASSWORD_RESET_SUCCESS_MODAL };
}
function showFirstTimeLoginErrorModal() {
  return { type: SHOW_FIRST_TIME_LOGIN_ERROR_MODAL };
}
function showPasswordResetErrorModal() {
  return { type: SHOW_PASSWORD_RESET_ERROR_MODAL };
}
function hideFirstTimeLoginErrorModal() {
  return { type: HIDE_FIRST_TIME_LOGIN_ERROR_MODAL };
}
function hidePasswordResetErrorModal() {
  return { type: HIDE_PASSWORD_RESET_ERROR_MODAL };
}
function hidePasswordResetRequestSuccessModal() {
  return { type: HIDE_REQUEST_PASSWORD_RESET_SUCCESS_MODAL };
}
function hidePasswordResetRequestErrorModal() {
  return { type: HIDE_REQUEST_PASSWORD_RESET_ERROR_MODAL };
}
function hideUpdatePasswordSuccessModal() {
  return { type: HIDE_UPDATE_PASSWORD_SUCCESS_MODAL };
}
function hideUpdatePasswordErrorModal() {
  return { type: HIDE_UPDATE_PASSWORD_ERROR_MODAL };
}
function hideDestroyAccountSuccessModal() {
  return { type: HIDE_DESTROY_ACCOUNT_SUCCESS_MODAL };
}
function hideDestroyAccountErrorModal() {
  return { type: HIDE_DESTROY_ACCOUNT_ERROR_MODAL };
}

/***/ }),

/***/ "./src/actions/update-password-modal.js":
/*!**********************************************!*\
  !*** ./src/actions/update-password-modal.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPDATE_PASSWORD_MODAL_FORM_UPDATE = exports.UPDATE_PASSWORD_MODAL_ERROR = exports.UPDATE_PASSWORD_MODAL_COMPLETE = exports.UPDATE_PASSWORD_MODAL_START = undefined;
exports.updatePasswordModalFormUpdate = updatePasswordModalFormUpdate;
exports.updatePasswordModalStart = updatePasswordModalStart;
exports.updatePasswordModalComplete = updatePasswordModalComplete;
exports.updatePasswordModalError = updatePasswordModalError;
exports.updatePasswordModal = updatePasswordModal;

var _sessionStorage = __webpack_require__(/*! ../utils/session-storage */ "./src/utils/session-storage.js");

var _handleFetchResponse = __webpack_require__(/*! ../utils/handle-fetch-response */ "./src/utils/handle-fetch-response.js");

var _fetch = __webpack_require__(/*! ../utils/fetch */ "./src/utils/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATE_PASSWORD_MODAL_START = exports.UPDATE_PASSWORD_MODAL_START = "UPDATE_PASSWORD_MODAL_START";
var UPDATE_PASSWORD_MODAL_COMPLETE = exports.UPDATE_PASSWORD_MODAL_COMPLETE = "UPDATE_PASSWORD_MODAL_COMPLETE";
var UPDATE_PASSWORD_MODAL_ERROR = exports.UPDATE_PASSWORD_MODAL_ERROR = "UPDATE_PASSWORD_MODAL_ERROR";
var UPDATE_PASSWORD_MODAL_FORM_UPDATE = exports.UPDATE_PASSWORD_MODAL_FORM_UPDATE = "UPDATE_PASSWORD_MODAL_FORM_UPDATE";

function updatePasswordModalFormUpdate(endpoint, key, value) {
  return { type: UPDATE_PASSWORD_MODAL_FORM_UPDATE, endpoint: endpoint, key: key, value: value };
}
function updatePasswordModalStart(endpoint) {
  return { type: UPDATE_PASSWORD_MODAL_START };
}
function updatePasswordModalComplete(endpoint, user) {
  return { type: UPDATE_PASSWORD_MODAL_COMPLETE, endpoint: endpoint, user: user };
}
function updatePasswordModalError(endpoint, errors) {
  return { type: UPDATE_PASSWORD_MODAL_ERROR, endpoint: endpoint, errors: errors };
}
function updatePasswordModal(body, endpointKey) {
  return function (dispatch) {
    dispatch(updatePasswordModalStart(endpointKey));

    return (0, _fetch2.default)((0, _sessionStorage.getPasswordUpdateUrl)(endpointKey), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(body)
    }).then(_handleFetchResponse.parseResponse).then(function (_ref) {
      var user = _ref.user;
      return dispatch(updatePasswordModalComplete(endpointKey, user));
    }).catch(function (_ref2) {
      var errors = _ref2.errors;
      return dispatch(updatePasswordModalError(endpointKey, errors));
    });
  };
}

/***/ }),

/***/ "./src/actions/update-password.js":
/*!****************************************!*\
  !*** ./src/actions/update-password.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPDATE_PASSWORD_FORM_UPDATE = exports.UPDATE_PASSWORD_ERROR = exports.UPDATE_PASSWORD_COMPLETE = exports.UPDATE_PASSWORD_START = undefined;
exports.updatePasswordFormUpdate = updatePasswordFormUpdate;
exports.updatePasswordStart = updatePasswordStart;
exports.updatePasswordComplete = updatePasswordComplete;
exports.updatePasswordError = updatePasswordError;
exports.updatePassword = updatePassword;

var _sessionStorage = __webpack_require__(/*! ../utils/session-storage */ "./src/utils/session-storage.js");

var _handleFetchResponse = __webpack_require__(/*! ../utils/handle-fetch-response */ "./src/utils/handle-fetch-response.js");

var _fetch = __webpack_require__(/*! ../utils/fetch */ "./src/utils/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATE_PASSWORD_START = exports.UPDATE_PASSWORD_START = "UPDATE_PASSWORD_START";
var UPDATE_PASSWORD_COMPLETE = exports.UPDATE_PASSWORD_COMPLETE = "UPDATE_PASSWORD_COMPLETE";
var UPDATE_PASSWORD_ERROR = exports.UPDATE_PASSWORD_ERROR = "UPDATE_PASSWORD_ERROR";
var UPDATE_PASSWORD_FORM_UPDATE = exports.UPDATE_PASSWORD_FORM_UPDATE = "UPDATE_PASSWORD_FORM_UPDATE";

function updatePasswordFormUpdate(endpoint, key, value) {
  return { type: UPDATE_PASSWORD_FORM_UPDATE, endpoint: endpoint, key: key, value: value };
}
function updatePasswordStart(endpoint) {
  return { type: UPDATE_PASSWORD_START, endpoint: endpoint };
}
function updatePasswordComplete(endpoint, user) {
  return { type: UPDATE_PASSWORD_COMPLETE, endpoint: endpoint, user: user };
}
function updatePasswordError(endpoint, errors) {
  return { type: UPDATE_PASSWORD_ERROR, endpoint: endpoint, errors: errors };
}
function updatePassword(body, endpoint) {
  return function (dispatch) {
    dispatch(updatePasswordStart(endpoint));

    return (0, _fetch2.default)((0, _sessionStorage.getPasswordUpdateUrl)(endpoint), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "put",
      body: JSON.stringify(body)
    }).then(_handleFetchResponse.parseResponse).then(function (_ref) {
      var user = _ref.user;
      return dispatch(updatePasswordComplete(endpoint, user));
    }).catch(function (_ref2) {
      var errors = _ref2.errors;
      return dispatch(updatePasswordError(endpoint, errors));
    });
  };
}

/***/ }),

/***/ "./src/utils/client-settings.js":
/*!**************************************!*\
  !*** ./src/utils/client-settings.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyConfig = applyConfig;

var _constants = __webpack_require__(/*! ./constants */ "./src/utils/constants.js");

var C = _interopRequireWildcard(_constants);

var _extend = __webpack_require__(/*! extend */ "extend");

var _extend2 = _interopRequireDefault(_extend);

var _fetch = __webpack_require__(/*! ./fetch */ "./src/utils/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

var _parseEndpointConfig2 = __webpack_require__(/*! ./parse-endpoint-config */ "./src/utils/parse-endpoint-config.js");

var _parseEndpointConfig3 = _interopRequireDefault(_parseEndpointConfig2);

var _configure = __webpack_require__(/*! ../actions/configure */ "./src/actions/configure.js");

var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./src/utils/session-storage.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// can't use "window" with node app
var root = Function("return this")() || (42, eval)("this");

var defaultSettings = {
  proxyIf: function proxyIf() {
    return false;
  },
  proxyUrl: "/proxy",
  forceHardRedirect: false,
  storage: "cookies",
  cookieExpiry: 14,
  cookiePath: "/",
  initialCredentials: null,

  passwordResetSuccessUrl: function passwordResetSuccessUrl() {
    return root.location.href;
  },

  confirmationSuccessUrl: function confirmationSuccessUrl() {
    return root.location.href;
  },

  tokenFormat: {
    "access-token": "{{ access-token }}",
    "token-type": "Bearer",
    client: "{{ client }}",
    expiry: "{{ expiry }}",
    uid: "{{ uid }}"
  },

  parseExpiry: function parseExpiry(headers) {
    // convert from ruby time (seconds) to js time (millis)
    return parseInt(headers["expiry"], 10) * 1000 || null;
  },

  handleLoginResponse: function handleLoginResponse(resp) {
    return resp.data;
  },

  handleAccountUpdateResponse: function handleAccountUpdateResponse(resp) {
    return resp.data;
  },

  handleTokenValidationResponse: function handleTokenValidationResponse(resp) {
    return resp.data;
  }
};

// save session configuration
function applyConfig() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      dispatch = _ref.dispatch,
      _ref$endpoint = _ref.endpoint,
      endpoint = _ref$endpoint === undefined ? {} : _ref$endpoint,
      _ref$settings = _ref.settings,
      settings = _ref$settings === undefined ? {} : _ref$settings,
      _ref$reset = _ref.reset,
      reset = _ref$reset === undefined ? false : _ref$reset;

  var currentEndpointKey = void 0;

  if (reset) {
    resetConfig();
  }

  if (settings.initialCredentials) {
    currentEndpointKey = settings.initialCredentials.currentEndpointKey;
  }

  (0, _sessionStorage.setCurrentSettings)((0, _extend2.default)({}, defaultSettings, settings));

  var _parseEndpointConfig = (0, _parseEndpointConfig3.default)(endpoint, (0, _sessionStorage.getInitialEndpointKey)()),
      defaultEndpointKey = _parseEndpointConfig.defaultEndpointKey,
      currentEndpoint = _parseEndpointConfig.currentEndpoint;

  if (!currentEndpointKey) {
    currentEndpointKey = defaultEndpointKey;
  }

  // persist default config key with session storage
  (0, _sessionStorage.setDefaultEndpointKey)(defaultEndpointKey);
  (0, _sessionStorage.setCurrentEndpoint)(currentEndpoint);

  dispatch((0, _configure.setEndpointKeys)(Object.keys(currentEndpoint), currentEndpointKey, defaultEndpointKey));
  (0, _sessionStorage.setCurrentEndpointKey)(currentEndpointKey);

  var savedCreds = (0, _sessionStorage.retrieveData)(C.SAVED_CREDS_KEY);

  if ((0, _sessionStorage.getCurrentSettings)().initialCredentials) {
    // skip initial headers check (i.e. check was already done server-side)
    var _getCurrentSettings$i = (0, _sessionStorage.getCurrentSettings)().initialCredentials,
        user = _getCurrentSettings$i.user,
        headers = _getCurrentSettings$i.headers;

    (0, _sessionStorage.persistData)(C.SAVED_CREDS_KEY, headers);
    return Promise.resolve(user);
  } else if (savedCreds) {
    // verify session credentials with API
    return (0, _fetch2.default)("" + (0, _sessionStorage.getApiUrl)(currentEndpointKey) + currentEndpoint[currentEndpointKey].tokenValidationPath).then(function (response) {
      if (response.status >= 200 && response.status < 300) {
        return response.json().then(function (_ref2) {
          var data = _ref2.data;
          return data;
        });
      }
      (0, _sessionStorage.removeData)(C.SAVED_CREDS_KEY);
      return Promise.reject({ reason: "No credentials." });
    });
  } else {
    return Promise.reject({ reason: "No credentials." });
  }
}

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INITIAL_CONFIG_KEY = exports.INITIAL_CONFIG_KEY = "default";
var DEFAULT_CONFIG_KEY = exports.DEFAULT_CONFIG_KEY = "defaultConfigKey";
var SAVED_CONFIG_KEY = exports.SAVED_CONFIG_KEY = "currentConfigName";
var SAVED_CREDS_KEY = exports.SAVED_CREDS_KEY = "authHeaders";

/***/ }),

/***/ "./src/utils/fetch.js":
/*!****************************!*\
  !*** ./src/utils/fetch.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAuthorizationHeader = addAuthorizationHeader;

exports.default = function (url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!options.headers) {
    options.headers = {};
  }
  (0, _extend2.default)(options.headers, getAuthHeaders(url));
  return (0, _isomorphicFetch2.default)(url, options).then(function (resp) {
    return updateAuthCredentials(resp);
  });
};

var _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _constants = __webpack_require__(/*! ./constants */ "./src/utils/constants.js");

var C = _interopRequireWildcard(_constants);

var _extend = __webpack_require__(/*! extend */ "extend");

var _extend2 = _interopRequireDefault(_extend);

var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./src/utils/session-storage.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isApiRequest = function isApiRequest(url) {
  return url.match((0, _sessionStorage.getApiUrl)((0, _sessionStorage.getSessionEndpointKey)()));
};

/**
 * Add access token as a bearer token in accordance to RFC 6750
 *
 * @param {string} accessToken
 * @param {object} headers
 * @returns {object} New extended headers object, with Authorization property
 */
function addAuthorizationHeader(accessToken, headers) {
  return Object.assign({}, headers, {
    Authorization: "Bearer " + accessToken
  });
}

function getAuthHeaders(url) {
  if (isApiRequest(url)) {
    // fetch current auth headers from storage
    var currentHeaders = (0, _sessionStorage.retrieveData)(C.SAVED_CREDS_KEY) || {},
        nextHeaders = {};

    // bust IE cache
    nextHeaders["If-Modified-Since"] = "Mon, 26 Jul 1997 05:00:00 GMT";

    // set header for each key in `tokenFormat` config
    for (var key in (0, _sessionStorage.getTokenFormat)()) {
      nextHeaders[key] = currentHeaders[key];
    }

    return addAuthorizationHeader(currentHeaders['access-token'], nextHeaders);
  } else {
    return {};
  }
}

function updateAuthCredentials(resp) {
  // check config apiUrl matches the current response url
  if (isApiRequest(resp.url)) {
    // set header for each key in `tokenFormat` config
    var newHeaders = {};

    // set flag to ensure that we don't accidentally nuke the headers
    // if the response tokens aren't sent back from the API
    var blankHeaders = true;

    // set header key + val for each key in `tokenFormat` config
    for (var key in (0, _sessionStorage.getTokenFormat)()) {
      newHeaders[key] = resp.headers.get(key);

      if (newHeaders[key]) {
        blankHeaders = false;
      }
    }

    // persist headers for next request
    if (!blankHeaders) {
      (0, _sessionStorage.persistData)(C.SAVED_CREDS_KEY, newHeaders);
    }
  }

  return resp;
}

/***/ }),

/***/ "./src/utils/handle-fetch-response.js":
/*!********************************************!*\
  !*** ./src/utils/handle-fetch-response.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseResponse = parseResponse;
function parseResponse(response) {
  var json = response.json();
  if (response.status >= 200 && response.status < 300) {
    return json;
  } else {
    return json.then(function (err) {
      return Promise.reject(err);
    });
  }
}

/***/ }),

/***/ "./src/utils/parse-endpoint-config.js":
/*!********************************************!*\
  !*** ./src/utils/parse-endpoint-config.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseEndpointConfig;

var _constants = __webpack_require__(/*! ./constants */ "./src/utils/constants.js");

var C = _interopRequireWildcard(_constants);

var _extend = __webpack_require__(/*! extend */ "extend");

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// base endpoint that other endpoints extend from
var defaultEndpoint = {
  apiUrl: "/api",
  signOutPath: "/auth/sign_out",
  emailSignInPath: "/auth/sign_in",
  emailRegistrationPath: "/auth",
  accountUpdatePath: "/auth",
  accountDeletePath: "/auth",
  passwordResetPath: "/auth/password",
  passwordUpdatePath: "/auth/password",
  tokenValidationPath: "/auth/validate_token",

  authProviderPaths: {
    github: "/auth/github",
    facebook: "/auth/facebook",
    google: "/auth/google_oauth2"
  }
};

function getFirstObjectKey(obj) {
  for (var key in obj) {
    return key;
  }
};

function parseEndpointConfig(endpoint) {
  var defaultEndpointKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  // normalize so opts is always an array of objects
  if (endpoint.constructor !== Array) {
    // single config will always be called 'default' unless set
    // by previous session
    defaultEndpointKey = C.INITIAL_CONFIG_KEY;

    // config should look like {default: {...}}
    var defaultConfig = {};
    defaultConfig[defaultEndpointKey] = endpoint;

    // endpoint should look like [{default: {...}}]
    endpoint = [defaultConfig];
  }

  var currentEndpoint = {};

  // iterate over config items, extend each from defaults
  for (var i = 0; i < endpoint.length; i++) {
    var configName = getFirstObjectKey(endpoint[i]);

    // set first as default config
    if (!defaultEndpointKey) {
      defaultEndpointKey = configName;
    }

    // save config to `configs` hash
    currentEndpoint[configName] = (0, _extend2.default)({}, defaultEndpoint, endpoint[i][configName]);
  }

  return { defaultEndpointKey: defaultEndpointKey, currentEndpoint: currentEndpoint };
}

/***/ }),

/***/ "./src/utils/parse-url.js":
/*!********************************!*\
  !*** ./src/utils/parse-url.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeTokenKeys = normalizeTokenKeys;
exports.getAllParams = getAllParams;
exports.default = getRedirectInfo;

var _querystring = __webpack_require__(/*! querystring */ "querystring");

var _querystring2 = _interopRequireDefault(_querystring);

var _extend = __webpack_require__(/*! extend */ "extend");

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeTokenKeys(params) {
  // normalize keys
  if (params.token) {
    params["access-token"] = params.token;
    delete params.token;
  }
  if (params.auth_token) {
    params["access-token"] = params.auth_token;
    delete params.auth_token;
  }
  if (params.client_id) {
    params.client = params.client_id;
    delete params.client_id;
  }
  if (params.config) {
    params.endpointKey = params.config;
    delete params.config;
  }

  return params;
};

var getAnchorSearch = function getAnchorSearch(location) {
  var rawAnchor = location.anchor || "",
      arr = rawAnchor.split("?");
  return arr.length > 1 ? arr[1] : null;
};

var getSearchQs = function getSearchQs(location) {
  var rawQs = location.search || "",
      qs = rawQs.replace("?", ""),
      qsObj = qs ? _querystring2.default.parse(qs) : {};

  return qsObj;
};

var getAnchorQs = function getAnchorQs(location) {
  var anchorQs = getAnchorSearch(location),
      anchorQsObj = anchorQs ? _querystring2.default.parse(anchorQs) : {};

  return anchorQsObj;
};

var stripKeys = function stripKeys(obj, keys) {
  for (var q in keys) {
    delete obj[keys[q]];
  }

  return obj;
};

function getAllParams(location) {
  return (0, _extend2.default)({}, getAnchorQs(location), getSearchQs(location));
};

var buildCredentials = function buildCredentials(location, keys) {
  var params = getAllParams(location);
  var authHeaders = {};

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      authHeaders[key] = params[key];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return normalizeTokenKeys(authHeaders);
};

// this method is tricky. we want to reconstruct the current URL with the
// following conditions:
// 1. search contains none of the supplied keys
// 2. anchor search (i.e. `#/?key=val`) contains none of the supplied keys
// 3. all of the keys NOT supplied are presevered in their original form
// 4. url protocol, host, and path are preserved
var getLocationWithoutParams = function getLocationWithoutParams(currentLocation, keys) {
  // strip all values from both actual and anchor search params
  var newSearch = _querystring2.default.stringify(stripKeys(getSearchQs(currentLocation), keys)),
      newAnchorQs = _querystring2.default.stringify(stripKeys(getAnchorQs(currentLocation), keys)),
      newAnchor = (currentLocation.hash || "").split("?")[0];

  if (newSearch) {
    newSearch = "?" + newSearch;
  }

  if (newAnchorQs) {
    newAnchor += "?" + newAnchorQs;
  }

  if (newAnchor && !newAnchor.match(/^#/)) {
    newAnchor = "#/" + newAnchor;
  }

  // reconstruct location with stripped auth keys
  var newLocation = currentLocation.pathname + newSearch + newAnchor;

  return newLocation;
};

function getRedirectInfo(currentLocation) {
  if (!currentLocation) {
    return {};
  } else {
    var authKeys = ["access-token", "token", "auth_token", "config", "client", "client_id", "expiry", "uid", "reset_password", "account_confirmation_success"];

    var authRedirectHeaders = buildCredentials(currentLocation, authKeys);
    var authRedirectPath = getLocationWithoutParams(currentLocation, authKeys);

    if (authRedirectPath !== currentLocation) {
      return { authRedirectHeaders: authRedirectHeaders, authRedirectPath: authRedirectPath };
    } else {
      return {};
    }
  }
}

/***/ }),

/***/ "./src/utils/popup.js":
/*!****************************!*\
  !*** ./src/utils/popup.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = openPopup;
/* istanbul ignore next */
var settings = "scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no";

/* istanbul ignore next */
function getPopupOffset(_ref) {
  var width = _ref.width,
      height = _ref.height;

  var wLeft = window.screenLeft ? window.screenLeft : window.screenX;
  var wTop = window.screenTop ? window.screenTop : window.screenY;

  var left = wLeft + window.innerWidth / 2 - width / 2;
  var top = wTop + window.innerHeight / 2 - height / 2;

  return { top: top, left: left };
}

/* istanbul ignore next */
function getPopupSize(provider) {
  switch (provider) {
    case "facebook":
      return { width: 580, height: 400 };

    case "google":
      return { width: 452, height: 633 };

    case "github":
      return { width: 1020, height: 618 };

    case "linkedin":
      return { width: 527, height: 582 };

    case "twitter":
      return { width: 495, height: 645 };

    case "live":
      return { width: 500, height: 560 };

    case "yahoo":
      return { width: 559, height: 519 };

    default:
      return { width: 1020, height: 618 };
  }
}

/* istanbul ignore next */
function getPopupDimensions(provider) {
  var _getPopupSize = getPopupSize(provider),
      width = _getPopupSize.width,
      height = _getPopupSize.height;

  var _getPopupOffset = getPopupOffset({ width: width, height: height }),
      top = _getPopupOffset.top,
      left = _getPopupOffset.left;

  return "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;
}

/* istanbul ignore next */
function openPopup(provider, url, name) {
  return window.open(url, name, settings + "," + getPopupDimensions(provider));
}

/***/ }),

/***/ "./src/utils/session-storage.js":
/*!**************************************!*\
  !*** ./src/utils/session-storage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrentSettings = setCurrentSettings;
exports.getCurrentSettings = getCurrentSettings;
exports.setCurrentEndpoint = setCurrentEndpoint;
exports.getCurrentEndpoint = getCurrentEndpoint;
exports.setCurrentEndpointKey = setCurrentEndpointKey;
exports.getCurrentEndpointKey = getCurrentEndpointKey;
exports.setDefaultEndpointKey = setDefaultEndpointKey;
exports.getDefaultEndpointKey = getDefaultEndpointKey;
exports.resetConfig = resetConfig;
exports.destroySession = destroySession;
exports.getInitialEndpointKey = getInitialEndpointKey;
exports.getSessionEndpointKey = getSessionEndpointKey;
exports.getSessionEndpoint = getSessionEndpoint;
exports.getDestroyAccountUrl = getDestroyAccountUrl;
exports.getSignOutUrl = getSignOutUrl;
exports.getEmailSignInUrl = getEmailSignInUrl;
exports.getEmailSignUpUrl = getEmailSignUpUrl;
exports.getPasswordResetRequestUrl = getPasswordResetRequestUrl;
exports.getPasswordUpdateUrl = getPasswordUpdateUrl;
exports.getTokenValidationPath = getTokenValidationPath;
exports.getOAuthUrl = getOAuthUrl;
exports.getConfirmationSuccessUrl = getConfirmationSuccessUrl;
exports.getPasswordResetRedirectUrl = getPasswordResetRedirectUrl;
exports.getApiUrl = getApiUrl;
exports.getTokenFormat = getTokenFormat;
exports.removeData = removeData;
exports.persistData = persistData;
exports.retrieveData = retrieveData;

var _browserCookies = __webpack_require__(/*! browser-cookies */ "browser-cookies");

var _browserCookies2 = _interopRequireDefault(_browserCookies);

var _constants = __webpack_require__(/*! ./constants */ "./src/utils/constants.js");

var C = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// even though this code shouldn't be used server-side, node will throw
// errors if "window" is used
var root = Function("return this")() || (42, eval)("this");

// stateful variables that persist throughout session
root.authState = {
  currentSettings: {},
  currentEndpoint: {},
  defaultEndpointKey: null
};

function setCurrentSettings(s) {
  root.authState.currentSettings = s;
}

function getCurrentSettings() {
  return root.authState.currentSettings;
}

function setCurrentEndpoint(e) {
  root.authState.currentEndpoint = e;
}

function getCurrentEndpoint() {
  return root.authState.currentEndpoint;
}

function setCurrentEndpointKey(k) {
  persistData(C.SAVED_CONFIG_KEY, k || getDefaultEndpointKey());
}

function getCurrentEndpointKey() {
  return retrieveData(C.SAVED_CONFIG_KEY) || getDefaultEndpointKey();
}

function setDefaultEndpointKey(k) {
  persistData(C.DEFAULT_CONFIG_KEY, k);
}

function getDefaultEndpointKey() {
  return retrieveData(C.DEFAULT_CONFIG_KEY);
}

// reset stateful variables
function resetConfig() {
  root.authState = root.authState || {};
  root.authState.currentSettings = {};
  root.authState.currentEndpoint = {};
  destroySession();
}

function destroySession() {
  var sessionKeys = [C.SAVED_CREDS_KEY, C.SAVED_CONFIG_KEY];

  for (var key in sessionKeys) {
    key = sessionKeys[key];

    // kill all local storage keys
    if (root.localStorage) {
      root.localStorage.removeItem(key);
    }

    // remove from base path in case config is not specified
    _browserCookies2.default.erase(key, {
      path: root.authState.currentSettings.cookiePath || "/"
    });
  }
}

function unescapeQuotes(val) {
  return val && val.replace(/("|')/g, "");
};

function getInitialEndpointKey() {
  return unescapeQuotes(_browserCookies2.default.get(C.SAVED_CONFIG_KEY) || root.localStorage && root.localStorage.getItem(C.SAVED_CONFIG_KEY));
}

// TODO: make this really work
function getSessionEndpointKey(k) {
  var key = k || getCurrentEndpointKey();
  if (!key) {
    throw "You must configure redux-auth before use.";
  } else {
    return key;
  }
}

function getSessionEndpoint(k) {
  return getCurrentEndpoint()[getSessionEndpointKey(k)];
}

// only should work for current session
function getDestroyAccountUrl(endpointKey) {
  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).accountDeletePath;
}

// only should work for current session
function getSignOutUrl(endpointKey) {
  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).signOutPath;
}

function getEmailSignInUrl(endpointKey) {
  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).emailSignInPath;
}

function getEmailSignUpUrl(endpointKey) {
  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).emailRegistrationPath + "?config_name=" + endpointKey;
}

function getPasswordResetRequestUrl(endpointKey) {
  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).passwordResetPath + "?config_name=" + endpointKey;
}

function getPasswordUpdateUrl(endpointKey) {
  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).passwordUpdatePath;
}

function getTokenValidationPath(endpointKey) {
  return "" + getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).tokenValidationPath;
}

function getOAuthUrl(_ref) {
  var provider = _ref.provider,
      params = _ref.params,
      endpointKey = _ref.endpointKey;

  var oAuthUrl = getApiUrl(endpointKey) + getSessionEndpoint(endpointKey).authProviderPaths[provider] + "?auth_origin_url=" + encodeURIComponent(root.location.href) + "&config_name=" + encodeURIComponent(getSessionEndpointKey(endpointKey));

  if (params) {
    for (var key in params) {
      oAuthUrl += "&";
      oAuthUrl += encodeURIComponent(key);
      oAuthUrl += "=";
      oAuthUrl += encodeURIComponent(params[key]);
    }
  }

  return oAuthUrl;
}

function getConfirmationSuccessUrl() {
  return root.authState.currentSettings.confirmationSuccessUrl();
}

function getPasswordResetRedirectUrl() {
  return root.authState.currentSettings.confirmationSuccessUrl();
}

function getApiUrl(key) {
  var configKey = getSessionEndpointKey(key);
  return root.authState.currentEndpoint[configKey].apiUrl;
}

function getTokenFormat() {
  return root.authState.currentSettings.tokenFormat;
}

function removeData(key) {

  switch (root.authState.currentSettings.storage) {
    case "localStorage":
      root.localStorage.removeItem(key);
      break;
    default:
      _browserCookies2.default.erase(key);
  }
}

function persistData(key, val) {
  val = JSON.stringify(val);

  switch (root.authState.currentSettings.storage) {
    case "localStorage":
      root.localStorage.setItem(key, val);
      break;

    default:
      _browserCookies2.default.set(key, val, {
        expires: root.authState.currentSettings.cookieExpiry,
        path: root.authState.currentSettings.cookiePath
      });
      break;
  }
};

function retrieveData(key, storage) {
  var val = null;

  switch (storage || root.authState.currentSettings.storage) {
    case "localStorage":
      val = root.localStorage && root.localStorage.getItem(key);
      break;

    default:
      val = _browserCookies2.default.get(key);
      break;
  }

  // if value is a simple string, the parser will fail. in that case, simply
  // unescape the quotes and return the string.
  try {
    // return parsed json response
    return JSON.parse(val);
  } catch (err) {
    // unescape quotes
    return unescapeQuotes(val);
  }
};

/***/ }),

/***/ "./src/utils/verify-auth.js":
/*!**********************************!*\
  !*** ./src/utils/verify-auth.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.fetchToken = fetchToken;

var _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _cookie = __webpack_require__(/*! cookie */ "cookie");

var _cookie2 = _interopRequireDefault(_cookie);

var _parseUrl = __webpack_require__(/*! ../utils/parse-url */ "./src/utils/parse-url.js");

var _parseUrl2 = _interopRequireDefault(_parseUrl);

var _constants = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");

var C = _interopRequireWildcard(_constants);

var _fetch = __webpack_require__(/*! ../utils/fetch */ "./src/utils/fetch.js");

var _parseEndpointConfig3 = __webpack_require__(/*! ./parse-endpoint-config */ "./src/utils/parse-endpoint-config.js");

var _parseEndpointConfig4 = _interopRequireDefault(_parseEndpointConfig3);

var _url = __webpack_require__(/*! url */ "url");

var _url2 = _interopRequireDefault(_url);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseHeaders(headers) {
  // set header for each key in `tokenFormat` config
  var newHeaders = {};

  // set flag to ensure that we don't accidentally nuke the headers
  // if the response tokens aren't sent back from the API
  var blankHeaders = true;

  // set header key + val for each key in `tokenFormat` config
  // TODO: get actual config value
  var _arr = ["access-token", "token-type", "client", "expiry", "uid", "config", "endpointKey"];
  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];
    newHeaders[key] = headers[key];

    if (newHeaders[key]) {
      // normalize -- sometimes headers come back in array form
      if (_typeof(newHeaders[key]) === "object") {
        newHeaders[key] = newHeaders[key][0];
      }

      blankHeaders = false;
    }
  }

  // persist headers for next request
  if (!blankHeaders) {
    return newHeaders;
  }
}

function fetchToken(_ref) {
  var rawEndpoints = _ref.rawEndpoints,
      cookies = _ref.cookies,
      currentLocation = _ref.currentLocation;

  var _getRedirectInfo = (0, _parseUrl2.default)(_url2.default.parse(currentLocation)),
      authRedirectHeaders = _getRedirectInfo.authRedirectHeaders;

  return new Promise(function (resolve, reject) {
    if (cookies || authRedirectHeaders) {
      var rawCookies = _cookie2.default.parse(cookies || "{}");
      var parsedCookies = JSON.parse(rawCookies.authHeaders || "false");
      var firstTimeLogin = void 0,
          mustResetPassword = void 0,
          currentEndpointKey = void 0,
          headers = void 0;

      if (authRedirectHeaders && authRedirectHeaders.uid && authRedirectHeaders["access-token"]) {
        headers = parseHeaders(authRedirectHeaders);
        currentEndpointKey = authRedirectHeaders.endpointKey || null;
        mustResetPassword = JSON.parse(authRedirectHeaders.reset_password || "false");
        firstTimeLogin = JSON.parse(authRedirectHeaders.account_confirmation_success || "false");
      } else if (rawCookies && parsedCookies) {
        headers = parsedCookies;
        currentEndpointKey = JSON.parse(rawCookies[C.SAVED_CONFIG_KEY] || "null");
        mustResetPassword = JSON.parse(parsedCookies.mustResetPassword || "false");
        firstTimeLogin = JSON.parse(parsedCookies.firstTimeLogin || "false");
      }

      if (!headers) {
        return reject({
          reason: "No creds",
          currentEndpoint: currentEndpoint,
          defaultEndpointKey: defaultEndpointKey
        });
      }

      var newHeaders,
          _parseEndpointConfig = (0, _parseEndpointConfig4.default)(rawEndpoints),
          currentEndpoint = _parseEndpointConfig.currentEndpoint,
          defaultEndpointKey = _parseEndpointConfig.defaultEndpointKey,
          _currentEndpoint = currentEndpoint[currentEndpointKey || defaultEndpointKey],
          apiUrl = _currentEndpoint.apiUrl,
          tokenValidationPath = _currentEndpoint.tokenValidationPath,
          validationUrl = "" + apiUrl + tokenValidationPath + "?unbatch=true";


      return (0, _isomorphicFetch2.default)(validationUrl, {
        headers: (0, _fetch.addAuthorizationHeader)(headers['access-token'], headers)
      }).then(function (resp) {
        newHeaders = parseHeaders(resp.headers.raw());
        return resp.json();
      }).then(function (json) {
        if (json.success) {
          return resolve({
            headers: newHeaders,
            user: json.data,
            mustResetPassword: mustResetPassword,
            firstTimeLogin: firstTimeLogin,
            currentEndpoint: currentEndpoint,
            currentEndpointKey: currentEndpointKey,
            defaultEndpointKey: defaultEndpointKey
          });
        } else {
          return reject({
            reason: json.errors,
            mustResetPassword: mustResetPassword,
            firstTimeLogin: firstTimeLogin,
            currentEndpoint: currentEndpoint,
            defaultEndpointKey: defaultEndpointKey
          });
        }
      }).catch(function (reason) {
        return reject({
          reason: reason,
          firstTimeLogin: firstTimeLogin,
          mustResetPassword: mustResetPassword,
          currentEndpoint: currentEndpoint,
          defaultEndpointKey: defaultEndpointKey
        });
      });
    } else {
      var _parseEndpointConfig2 = (0, _parseEndpointConfig4.default)(rawEndpoints),
          _currentEndpoint2 = _parseEndpointConfig2.currentEndpoint,
          _defaultEndpointKey = _parseEndpointConfig2.defaultEndpointKey;

      reject({
        reason: "No creds",
        currentEndpoint: _currentEndpoint2,
        defaultEndpointKey: _defaultEndpointKey
      });
    }
  });
}

function verifyAuth(rawEndpoints, _ref2) {
  var isServer = _ref2.isServer,
      cookies = _ref2.cookies,
      currentLocation = _ref2.currentLocation;

  return new Promise(function (resolve, reject) {
    if (isServer) {
      return fetchToken({ rawEndpoints: rawEndpoints, cookies: cookies, currentLocation: currentLocation }).then(function (res) {
        return resolve(res);
      }).catch(function (res) {
        return reject(res);
      });
    } else {
      // TODO: deal with localStorage
      //Auth.validateToken(getCurrentEndpointKey())
      //.then((user) => resolve(user.data), (err) => reject({reason: err}));
    }
  });
}

exports.default = verifyAuth;

/***/ }),

/***/ "./src/views/TokenBridge.js":
/*!**********************************!*\
  !*** ./src/views/TokenBridge.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TokenBridge = function (_React$Component) {
  _inherits(TokenBridge, _React$Component);

  function TokenBridge() {
    _classCallCheck(this, TokenBridge);

    return _possibleConstructorReturn(this, (TokenBridge.__proto__ || Object.getPrototypeOf(TokenBridge)).apply(this, arguments));
  }

  _createClass(TokenBridge, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("script", { id: "token-bridge",
        type: "application/json",
        dangerouslySetInnerHTML: { __html: this.props.initialCredentials } });
    }
  }]);

  return TokenBridge;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  var auth = state.get('auth');
  var headers = auth.getIn(["server", "headers"]);

  return {
    initialCredentials: headers && JSON.stringify({
      user: auth.getIn(["server", "user"]),
      mustResetPassword: auth.getIn(["server", "mustResetPassword"]),
      firstTimeLogin: auth.getIn(["server", "firstTimeLogin"]),
      currentEndpointKey: auth.getIn(["configure", "currentEndpointKey"]),
      defaultEndpointKey: auth.getIn(["configure", "defaultEndpointKey"]),
      headers: headers
    })
  };
})(TokenBridge);

/***/ }),

/***/ "./src/views/bootstrap/AuthGlobals.js":
/*!********************************************!*\
  !*** ./src/views/bootstrap/AuthGlobals.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _EmailSignInSuccessModal = __webpack_require__(/*! ./modals/EmailSignInSuccessModal */ "./src/views/bootstrap/modals/EmailSignInSuccessModal.js");

var _EmailSignInSuccessModal2 = _interopRequireDefault(_EmailSignInSuccessModal);

var _EmailSignInErrorModal = __webpack_require__(/*! ./modals/EmailSignInErrorModal */ "./src/views/bootstrap/modals/EmailSignInErrorModal.js");

var _EmailSignInErrorModal2 = _interopRequireDefault(_EmailSignInErrorModal);

var _OAuthSignInSuccessModal = __webpack_require__(/*! ./modals/OAuthSignInSuccessModal */ "./src/views/bootstrap/modals/OAuthSignInSuccessModal.js");

var _OAuthSignInSuccessModal2 = _interopRequireDefault(_OAuthSignInSuccessModal);

var _OAuthSignInErrorModal = __webpack_require__(/*! ./modals/OAuthSignInErrorModal */ "./src/views/bootstrap/modals/OAuthSignInErrorModal.js");

var _OAuthSignInErrorModal2 = _interopRequireDefault(_OAuthSignInErrorModal);

var _EmailSignUpSuccessModal = __webpack_require__(/*! ./modals/EmailSignUpSuccessModal */ "./src/views/bootstrap/modals/EmailSignUpSuccessModal.js");

var _EmailSignUpSuccessModal2 = _interopRequireDefault(_EmailSignUpSuccessModal);

var _EmailSignUpErrorModal = __webpack_require__(/*! ./modals/EmailSignUpErrorModal */ "./src/views/bootstrap/modals/EmailSignUpErrorModal.js");

var _EmailSignUpErrorModal2 = _interopRequireDefault(_EmailSignUpErrorModal);

var _SignOutSuccessModal = __webpack_require__(/*! ./modals/SignOutSuccessModal */ "./src/views/bootstrap/modals/SignOutSuccessModal.js");

var _SignOutSuccessModal2 = _interopRequireDefault(_SignOutSuccessModal);

var _SignOutErrorModal = __webpack_require__(/*! ./modals/SignOutErrorModal */ "./src/views/bootstrap/modals/SignOutErrorModal.js");

var _SignOutErrorModal2 = _interopRequireDefault(_SignOutErrorModal);

var _FirstTimeLoginSuccessModal = __webpack_require__(/*! ./modals/FirstTimeLoginSuccessModal */ "./src/views/bootstrap/modals/FirstTimeLoginSuccessModal.js");

var _FirstTimeLoginSuccessModal2 = _interopRequireDefault(_FirstTimeLoginSuccessModal);

var _FirstTimeLoginErrorModal = __webpack_require__(/*! ./modals/FirstTimeLoginErrorModal */ "./src/views/bootstrap/modals/FirstTimeLoginErrorModal.js");

var _FirstTimeLoginErrorModal2 = _interopRequireDefault(_FirstTimeLoginErrorModal);

var _RequestPasswordResetErrorModal = __webpack_require__(/*! ./modals/RequestPasswordResetErrorModal */ "./src/views/bootstrap/modals/RequestPasswordResetErrorModal.js");

var _RequestPasswordResetErrorModal2 = _interopRequireDefault(_RequestPasswordResetErrorModal);

var _RequestPasswordResetSuccessModal = __webpack_require__(/*! ./modals/RequestPasswordResetSuccessModal */ "./src/views/bootstrap/modals/RequestPasswordResetSuccessModal.js");

var _RequestPasswordResetSuccessModal2 = _interopRequireDefault(_RequestPasswordResetSuccessModal);

var _UpdatePasswordErrorModal = __webpack_require__(/*! ./modals/UpdatePasswordErrorModal */ "./src/views/bootstrap/modals/UpdatePasswordErrorModal.js");

var _UpdatePasswordErrorModal2 = _interopRequireDefault(_UpdatePasswordErrorModal);

var _UpdatePasswordSuccessModal = __webpack_require__(/*! ./modals/UpdatePasswordSuccessModal */ "./src/views/bootstrap/modals/UpdatePasswordSuccessModal.js");

var _UpdatePasswordSuccessModal2 = _interopRequireDefault(_UpdatePasswordSuccessModal);

var _DestroyAccountErrorModal = __webpack_require__(/*! ./modals/DestroyAccountErrorModal */ "./src/views/bootstrap/modals/DestroyAccountErrorModal.js");

var _DestroyAccountErrorModal2 = _interopRequireDefault(_DestroyAccountErrorModal);

var _DestroyAccountSuccessModal = __webpack_require__(/*! ./modals/DestroyAccountSuccessModal */ "./src/views/bootstrap/modals/DestroyAccountSuccessModal.js");

var _DestroyAccountSuccessModal2 = _interopRequireDefault(_DestroyAccountSuccessModal);

var _PasswordResetSuccessModal = __webpack_require__(/*! ./modals/PasswordResetSuccessModal */ "./src/views/bootstrap/modals/PasswordResetSuccessModal.js");

var _PasswordResetSuccessModal2 = _interopRequireDefault(_PasswordResetSuccessModal);

var _TokenBridge = __webpack_require__(/*! ../TokenBridge */ "./src/views/TokenBridge.js");

var _TokenBridge2 = _interopRequireDefault(_TokenBridge);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthGlobals = function (_React$Component) {
  _inherits(AuthGlobals, _React$Component);

  function AuthGlobals() {
    _classCallCheck(this, AuthGlobals);

    return _possibleConstructorReturn(this, (AuthGlobals.__proto__ || Object.getPrototypeOf(AuthGlobals)).apply(this, arguments));
  }

  _createClass(AuthGlobals, [{
    key: "render",
    value: function render() {
      var showEmailSignInSuccess = this.props.emailSignInSuccessEnabled && this.props.auth.getIn(["ui", "emailSignInSuccessModalVisible"]);

      var showEmailSignInError = this.props.emailSignInErrorEnabled && this.props.auth.getIn(["ui", "emailSignInErrorModalVisible"]);

      var showEmailSignUpSuccess = this.props.emailSignUpSuccessEnabled && this.props.auth.getIn(["ui", "emailSignUpSuccessModalVisible"]);

      var showEmailSignUpError = this.props.emailSignUpErrorEnabled && this.props.auth.getIn(["ui", "emailSignUpErrorModalVisible"]);

      var showSignOutSuccess = this.props.signOutSuccessEnabled && this.props.auth.getIn(["ui", "signOutSuccessModalVisible"]);

      var showSignOutError = this.props.signOutErrorEnabled && this.props.auth.getIn(["ui", "signOutErrorModalVisible"]);

      var showFirstTimeLoginSuccess = this.props.firstTimeLoginSuccessEnabled && this.props.auth.getIn(["ui", "firstTimeLoginSuccessModalVisible"]);

      var showFirstTimeLoginError = this.props.firstTimeLoginErrorEnabled && this.props.auth.getIn(["ui", "firstTimeLoginErrorModalVisible"]);

      var showRequestPasswordResetError = this.props.requestPasswordResetErrorEnabled && this.props.auth.getIn(["ui", "requestPasswordResetErrorModalVisible"]);

      var showRequestPasswordResetSuccess = this.props.requestPasswordResetSuccessEnabled && this.props.auth.getIn(["ui", "requestPasswordResetSuccessModalVisible"]);

      var showOAuthSignInSuccess = this.props.oAuthSignInSuccessEnabled && this.props.auth.getIn(["ui", "oAuthSignInSuccessModalVisible"]);

      var showOAuthSignInError = this.props.oAuthSignInErrorEnabled && this.props.auth.getIn(["ui", "oAuthSignInErrorModalVisible"]);

      var updatePasswordSuccess = this.props.updatePasswordSuccessEnabled && this.props.auth.getIn(["ui", "updatePasswordSuccessModalVisible"]);

      var updatePasswordError = this.props.updatePasswordErrorEnabled && this.props.auth.getIn(["ui", "updatePasswordErrorModalVisible"]);

      var destroyAccountSuccess = this.props.destroyAccountSuccessEnabled && this.props.auth.getIn(["ui", "destroyAccountSuccessModalVisible"]);

      var destroyAccountError = this.props.destroyAccountErrorEnabled && this.props.auth.getIn(["ui", "destroyAccountErrorModalVisible"]);

      var passwordResetSuccess = this.props.passwordResetSuccessEnabled && this.props.auth.getIn(["ui", "passwordResetSuccessModalVisible"]);

      //let passwordResetError = (
      //this.props.passwordResetErrorEnabled &&
      //this.props.auth.getIn(["ui", "passwordResetErrorModalVisible"])
      //);

      return _react2.default.createElement(
        "div",
        { id: "auth-modals" },
        _react2.default.createElement(_EmailSignInSuccessModal2.default, { show: showEmailSignInSuccess }),
        _react2.default.createElement(_EmailSignInErrorModal2.default, { show: showEmailSignInError }),
        _react2.default.createElement(_OAuthSignInSuccessModal2.default, { show: showOAuthSignInSuccess }),
        _react2.default.createElement(_OAuthSignInErrorModal2.default, { show: showOAuthSignInError }),
        _react2.default.createElement(_EmailSignUpSuccessModal2.default, { show: showEmailSignUpSuccess }),
        _react2.default.createElement(_EmailSignUpErrorModal2.default, { show: showEmailSignUpError }),
        _react2.default.createElement(_SignOutSuccessModal2.default, { show: showSignOutSuccess }),
        _react2.default.createElement(_SignOutErrorModal2.default, { show: showSignOutError }),
        _react2.default.createElement(_FirstTimeLoginSuccessModal2.default, { show: showFirstTimeLoginSuccess }),
        _react2.default.createElement(_FirstTimeLoginErrorModal2.default, { show: showFirstTimeLoginError }),
        _react2.default.createElement(_RequestPasswordResetErrorModal2.default, { show: showRequestPasswordResetError }),
        _react2.default.createElement(_RequestPasswordResetSuccessModal2.default, { show: showRequestPasswordResetSuccess }),
        _react2.default.createElement(_UpdatePasswordErrorModal2.default, { show: updatePasswordError }),
        _react2.default.createElement(_UpdatePasswordSuccessModal2.default, { show: updatePasswordSuccess }),
        _react2.default.createElement(_DestroyAccountErrorModal2.default, { show: destroyAccountError }),
        _react2.default.createElement(_DestroyAccountSuccessModal2.default, { show: destroyAccountSuccess }),
        _react2.default.createElement(_PasswordResetSuccessModal2.default, { show: passwordResetSuccess }),
        _react2.default.createElement(_TokenBridge2.default, null)
      );
    }
  }]);

  return AuthGlobals;
}(_react2.default.Component);

AuthGlobals.defaultProps = {
  signOutSuccessEnabled: true,
  signOutErrorEnabled: true,
  emailSignInSuccessEnabled: true,
  emailSignInErrorEnabled: true,
  oAuthSignInSuccessEnabled: true,
  oAuthSignInErrorEnabled: true,
  emailSignUpSuccessEnabled: true,
  emailSignUpErrorEnabled: true,
  firstTimeLoginSuccessEnabled: true,
  firstTimeLoginErrorEnabled: true,
  requestPasswordResetErrorEnabled: true,
  requestPasswordResetSuccessEnabled: true,
  updatePasswordErrorEnabled: true,
  updatePasswordSuccessEnabled: true,
  destroyAccountErrorEnabled: true,
  destroyAccountSuccessEnabled: true,
  passwordResetSuccessEnabled: true,
  passwordResetErrorEnabled: true
};
exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(AuthGlobals);

/***/ }),

/***/ "./src/views/bootstrap/ButtonLoader.js":
/*!*********************************************!*\
  !*** ./src/views/bootstrap/ButtonLoader.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _reactLoader = __webpack_require__(/*! react-loader */ "react-loader");

var _reactLoader2 = _interopRequireDefault(_reactLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonLoader = function (_React$Component) {
  _inherits(ButtonLoader, _React$Component);

  function ButtonLoader() {
    _classCallCheck(this, ButtonLoader);

    return _possibleConstructorReturn(this, (ButtonLoader.__proto__ || Object.getPrototypeOf(ButtonLoader)).apply(this, arguments));
  }

  _createClass(ButtonLoader, [{
    key: "renderIcon",
    value: function renderIcon() {
      var icon = void 0;

      if (this.props.loading) {
        var spinColor = !this.props.bsStyle || this.props.bsStyle === "default" ? this.props.spinColorDark : this.props.spinColorLight;

        icon = _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_reactLoader2.default, _extends({ ref: "spinner" }, this.props.spinConfig, { color: spinColor, loaded: false }))
        );
      } else {
        icon = this.props.icon;
      }

      return _react2.default.createElement(
        "div",
        { style: {
            position: "relative",
            display: "inline-block",
            marginRight: "6px",
            width: "10px",
            height: "10px",
            top: "1px"
          } },
        icon
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Button,
        {
          onClick: this.props.onClick,
          disabled: this.props.disabled || this.props.loading,
          bsStyle: this.props.bsStyle,
          className: this.props.className,
          type: this.props.type,
          style: this.props.style,
          bsSize: this.props.bsSize },
        this.renderIcon(),
        " ",
        this.props.children
      );
    }
  }]);

  return ButtonLoader;
}(_react2.default.Component);

ButtonLoader.defaultProps = {
  icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "heart" }),
  loading: false,
  spinConfig: {
    lines: 10,
    length: 4,
    width: 2,
    radius: 3
  },
  spinColorDark: "#444",
  spinColorLight: "#fff",
  children: _react2.default.createElement(
    "span",
    null,
    "Submit"
  ),
  style: {}
};
exports.default = ButtonLoader;

/***/ }),

/***/ "./src/views/bootstrap/DestroyAccountButton.js":
/*!*****************************************************!*\
  !*** ./src/views/bootstrap/DestroyAccountButton.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ButtonLoader = __webpack_require__(/*! ./ButtonLoader */ "./src/views/bootstrap/ButtonLoader.js");

var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

var _destroyAccount = __webpack_require__(/*! ../../actions/destroy-account */ "./src/actions/destroy-account.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DestroyAccountButton = function (_React$Component) {
  _inherits(DestroyAccountButton, _React$Component);

  function DestroyAccountButton() {
    _classCallCheck(this, DestroyAccountButton);

    return _possibleConstructorReturn(this, (DestroyAccountButton.__proto__ || Object.getPrototypeOf(DestroyAccountButton)).apply(this, arguments));
  }

  _createClass(DestroyAccountButton, [{
    key: "getEndpoint",
    value: function getEndpoint() {
      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.dispatch((0, _destroyAccount.destroyAccount)(this.getEndpoint()));
    }
  }, {
    key: "render",
    value: function render() {
      var disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
      return _react2.default.createElement(_ButtonLoader2.default, _extends({
        loading: this.props.auth.getIn(["destroyAccount", this.getEndpoint(), "loading"]),
        icon: this.props.icon,
        disabled: disabled,
        className: "destroy-account-submit",
        onClick: this.handleClick.bind(this)
      }, this.props));
    }
  }]);

  return DestroyAccountButton;
}(_react2.default.Component);

DestroyAccountButton.defaultProps = {
  children: _react2.default.createElement(
    "span",
    null,
    "Destroy Account"
  ),
  icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "remove" })
};
exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(DestroyAccountButton);

/***/ }),

/***/ "./src/views/bootstrap/EmailSignInForm.js":
/*!************************************************!*\
  !*** ./src/views/bootstrap/EmailSignInForm.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ButtonLoader = __webpack_require__(/*! ./ButtonLoader */ "./src/views/bootstrap/ButtonLoader.js");

var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

var _Input = __webpack_require__(/*! ./Input */ "./src/views/bootstrap/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _emailSignIn = __webpack_require__(/*! ../../actions/email-sign-in */ "./src/actions/email-sign-in.js");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailSignInForm = function (_React$Component) {
  _inherits(EmailSignInForm, _React$Component);

  function EmailSignInForm() {
    _classCallCheck(this, EmailSignInForm);

    return _possibleConstructorReturn(this, (EmailSignInForm.__proto__ || Object.getPrototypeOf(EmailSignInForm)).apply(this, arguments));
  }

  _createClass(EmailSignInForm, [{
    key: "getEndpoint",
    value: function getEndpoint() {
      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
    }
  }, {
    key: "handleInput",
    value: function handleInput(key, val) {
      this.props.dispatch((0, _emailSignIn.emailSignInFormUpdate)(this.getEndpoint(), key, val));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var formData = this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form"]).toJS();
      this.props.dispatch((0, _emailSignIn.emailSignIn)(formData, this.getEndpoint())).then(this.props.next).catch(function () {});
    }
  }, {
    key: "render",
    value: function render() {
      var disabled = this.props.auth.getIn(["user", "isSignedIn"]) || this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "loading"]);

      return _react2.default.createElement(
        "form",
        { className: "redux-auth email-sign-in-form clearfix",
          onSubmit: this.handleSubmit.bind(this) },
        _react2.default.createElement(_Input2.default, _extends({ type: "text",
          groupClassName: "email-sign-in-email",
          label: "Email",
          placeholder: "Email",
          disabled: disabled,
          value: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "email"]),
          errors: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "email"]),
          onChange: this.handleInput.bind(this, "email")
        }, this.props.inputProps.email)),
        _react2.default.createElement(_Input2.default, _extends({ type: "password",
          label: "Password",
          groupClassName: "email-sign-in-password",
          placeholder: "Password",
          disabled: disabled,
          value: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "password"]),
          errors: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "password"]),
          onChange: this.handleInput.bind(this, "password")
        }, this.props.inputProps.password)),
        _react2.default.createElement(
          _ButtonLoader2.default,
          _extends({ loading: this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "loading"]),
            type: "submit",
            icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "log-in" }),
            className: "email-sign-in-submit pull-right",
            disabled: disabled,
            onClick: this.handleSubmit.bind(this)
          }, this.props.inputProps.submit),
          "Sign In"
        )
      );
    }
  }]);

  return EmailSignInForm;
}(_react2.default.Component);

EmailSignInForm.propTypes = {
  endpoint: _react.PropTypes.string,
  next: _react.PropTypes.func,
  inputProps: _react.PropTypes.shape({
    email: _react.PropTypes.object,
    password: _react.PropTypes.object,
    submit: _react.PropTypes.object
  })
};
EmailSignInForm.defaultProps = {
  next: function next() {},
  inputProps: {
    email: {},
    password: {},
    submit: {}
  }
};
exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(EmailSignInForm);

/***/ }),

/***/ "./src/views/bootstrap/EmailSignUpForm.js":
/*!************************************************!*\
  !*** ./src/views/bootstrap/EmailSignUpForm.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Input = __webpack_require__(/*! ./Input */ "./src/views/bootstrap/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _ButtonLoader = __webpack_require__(/*! ./ButtonLoader */ "./src/views/bootstrap/ButtonLoader.js");

var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

var _emailSignUp = __webpack_require__(/*! ../../actions/email-sign-up */ "./src/actions/email-sign-up.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailSignUpForm = function (_React$Component) {
  _inherits(EmailSignUpForm, _React$Component);

  function EmailSignUpForm() {
    _classCallCheck(this, EmailSignUpForm);

    return _possibleConstructorReturn(this, (EmailSignUpForm.__proto__ || Object.getPrototypeOf(EmailSignUpForm)).apply(this, arguments));
  }

  _createClass(EmailSignUpForm, [{
    key: "getEndpoint",
    value: function getEndpoint() {
      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
    }
  }, {
    key: "handleInput",
    value: function handleInput(key, val) {
      this.props.dispatch((0, _emailSignUp.emailSignUpFormUpdate)(this.getEndpoint(), key, val));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var formData = this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form"]).toJS();
      this.props.dispatch((0, _emailSignUp.emailSignUp)(formData, this.getEndpoint())).then(this.props.next).catch(function () {});
    }
  }, {
    key: "render",
    value: function render() {
      var disabled = this.props.auth.getIn(["user", "isSignedIn"]) || this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "loading"]);

      return _react2.default.createElement(
        "form",
        { className: "redux-auth email-sign-up-form clearfix",
          onSubmit: this.handleSubmit.bind(this) },
        _react2.default.createElement(_Input2.default, _extends({ type: "text",
          label: "Email",
          placeholder: "Email",
          groupClassName: "email-sign-up-email",
          disabled: disabled,
          value: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "email"]),
          errors: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "email"]),
          onChange: this.handleInput.bind(this, "email")
        }, this.props.inputProps.email)),
        _react2.default.createElement(_Input2.default, _extends({ type: "password",
          label: "Password",
          placeholder: "Password",
          groupClassName: "email-sign-up-password",
          disabled: disabled,
          value: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "password"]),
          errors: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "password"]),
          onChange: this.handleInput.bind(this, "password")
        }, this.props.inputProps.password)),
        _react2.default.createElement(_Input2.default, _extends({ type: "password",
          label: "Password Confirmation",
          placeholder: "Password Confirmation",
          groupClassName: "email-sign-up-password-confirmation",
          disabled: disabled,
          value: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "password_confirmation"]),
          errors: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "password_confirmation"]),
          onChange: this.handleInput.bind(this, "password_confirmation")
        }, this.props.inputProps.passwordConfirmation)),
        _react2.default.createElement(
          _ButtonLoader2.default,
          _extends({ loading: this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "loading"]),
            type: "submit",
            className: "email-sign-up-submit pull-right",
            icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "send" }),
            disabled: disabled,
            onClick: this.handleSubmit.bind(this)
          }, this.props.inputProps.submit),
          "Sign Up"
        )
      );
    }
  }]);

  return EmailSignUpForm;
}(_react2.default.Component);

EmailSignUpForm.defaultProps = {
  next: function next() {},
  inputProps: {
    email: {},
    password: {},
    submit: {}
  }
};
exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(EmailSignUpForm);

/***/ }),

/***/ "./src/views/bootstrap/ErrorList.js":
/*!******************************************!*\
  !*** ./src/views/bootstrap/ErrorList.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorList = function (_React$Component) {
  _inherits(ErrorList, _React$Component);

  function ErrorList() {
    _classCallCheck(this, ErrorList);

    return _possibleConstructorReturn(this, (ErrorList.__proto__ || Object.getPrototypeOf(ErrorList)).apply(this, arguments));
  }

  _createClass(ErrorList, [{
    key: "renderErrorList",
    value: function renderErrorList() {
      var errorCount = (this.props.errors || _immutable2.default.fromJS([])).size;

      if (errorCount > 0) {
        // pluralize message
        var errorWord = "error";
        errorWord += errorCount === 1 ? "" : "s";

        return _react2.default.createElement(
          "div",
          { className: "has-error" },
          _react2.default.createElement(
            "p",
            null,
            "Please correct the following ",
            errorWord,
            ":"
          ),
          this.props.errors.map(function (err, i) {
            return _react2.default.createElement(
              "p",
              {
                key: i,
                className: "control-label modal-error-item",
                style: { paddingLeft: "20px", position: "relative" } },
              _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign",
                style: { position: "absolute", left: 0, top: 2 } }),
              " ",
              err
            );
          })
        );
      } else {
        return _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign" }),
          " There was an error processing this form. Please check each field and try again."
        );
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "auth-error-message" },
        this.renderErrorList()
      );
    }
  }]);

  return ErrorList;
}(_react2.default.Component);

ErrorList.defaultProps = {
  errors: _immutable2.default.fromJS([])
};
exports.default = ErrorList;

/***/ }),

/***/ "./src/views/bootstrap/Input.js":
/*!**************************************!*\
  !*** ./src/views/bootstrap/Input.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthInput = function (_React$Component) {
  _inherits(AuthInput, _React$Component);

  function AuthInput() {
    _classCallCheck(this, AuthInput);

    return _possibleConstructorReturn(this, (AuthInput.__proto__ || Object.getPrototypeOf(AuthInput)).apply(this, arguments));
  }

  _createClass(AuthInput, [{
    key: "handleInput",
    value: function handleInput(ev) {
      this.props.onChange(ev.target.value);
    }
  }, {
    key: "renderErrorList",
    value: function renderErrorList() {
      var _this2 = this;

      if (this.props.errors.size) {
        return _react2.default.createElement(
          "div",
          { className: "auth-error-message has-error" },
          this.props.errors.map(function (err, i) {
            return _react2.default.createElement(
              "p",
              { className: "control-label inline-error-item",
                style: { paddingLeft: "20px", position: "relative", marginBottom: "28px" },
                key: i },
              _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign",
                style: {
                  position: "absolute",
                  left: 0,
                  top: 2
                }
              }),
              " ",
              _this2.props.label,
              " ",
              err
            );
          })
        );
      } else {
        return _react2.default.createElement("span", null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_reactBootstrap.Input, _extends({}, this.props, {
          bsStyle: this.props.errors.size ? "error" : null,
          onChange: this.handleInput.bind(this) })),
        this.renderErrorList()
      );
    }
  }]);

  return AuthInput;
}(_react2.default.Component);

AuthInput.defaultProps = {
  label: "",
  value: null,
  errors: _immutable2.default.fromJS([])
};
exports.default = AuthInput;

/***/ }),

/***/ "./src/views/bootstrap/OAuthSignInButton.js":
/*!**************************************************!*\
  !*** ./src/views/bootstrap/OAuthSignInButton.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _ButtonLoader = __webpack_require__(/*! ./ButtonLoader */ "./src/views/bootstrap/ButtonLoader.js");

var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _oauthSignIn = __webpack_require__(/*! ../../actions/oauth-sign-in */ "./src/actions/oauth-sign-in.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// hook for rewire
var oAuthSignIn = _oauthSignIn.oAuthSignIn;

var OAuthSignInButton = function (_React$Component) {
  _inherits(OAuthSignInButton, _React$Component);

  function OAuthSignInButton() {
    _classCallCheck(this, OAuthSignInButton);

    return _possibleConstructorReturn(this, (OAuthSignInButton.__proto__ || Object.getPrototypeOf(OAuthSignInButton)).apply(this, arguments));
  }

  _createClass(OAuthSignInButton, [{
    key: "getEndpoint",
    value: function getEndpoint() {
      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.dispatch(oAuthSignIn({
        provider: this.props.provider,
        params: this.props.signInParams,
        endpointKey: this.getEndpoint()
      })).then(this.props.next).catch(function () {});
    }
  }, {
    key: "render",
    value: function render() {
      var disabled = this.props.auth.getIn(["user", "isSignedIn"]);
      var loading = this.props.auth.getIn(["ui", "oAuthSignInLoadingProvider"]) === this.props.provider && this.props.auth.getIn(["oAuthSignIn", this.getEndpoint(), "loading"]);

      return _react2.default.createElement(_ButtonLoader2.default, _extends({
        loading: loading,
        icon: this.props.icon,
        className: this.props.className + ' oauth-sign-in-submit',
        disabled: disabled,
        onClick: this.handleClick.bind(this)
      }, this.props));
    }
  }]);

  return OAuthSignInButton;
}(_react2.default.Component);

OAuthSignInButton.defaultProps = {
  signInParams: {},
  children: _react2.default.createElement(
    "span",
    null,
    "OAuth Sign In"
  ),
  icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "log-in" }),
  next: function next() {}
};
exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(OAuthSignInButton);

/***/ }),

/***/ "./src/views/bootstrap/RequestPasswordResetForm.js":
/*!*********************************************************!*\
  !*** ./src/views/bootstrap/RequestPasswordResetForm.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Input = __webpack_require__(/*! ./Input */ "./src/views/bootstrap/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _ButtonLoader = __webpack_require__(/*! ./ButtonLoader */ "./src/views/bootstrap/ButtonLoader.js");

var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _requestPasswordReset = __webpack_require__(/*! ../../actions/request-password-reset */ "./src/actions/request-password-reset.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequestPasswordResetForm = function (_React$Component) {
  _inherits(RequestPasswordResetForm, _React$Component);

  function RequestPasswordResetForm() {
    _classCallCheck(this, RequestPasswordResetForm);

    return _possibleConstructorReturn(this, (RequestPasswordResetForm.__proto__ || Object.getPrototypeOf(RequestPasswordResetForm)).apply(this, arguments));
  }

  _createClass(RequestPasswordResetForm, [{
    key: "getEndpoint",
    value: function getEndpoint() {
      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
    }
  }, {
    key: "handleInput",
    value: function handleInput(key, val) {
      this.props.dispatch((0, _requestPasswordReset.requestPasswordResetFormUpdate)(this.getEndpoint(), key, val));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var formData = this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "form"]).toJS();
      this.props.dispatch((0, _requestPasswordReset.requestPasswordReset)(formData, this.getEndpoint()));
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "loading"]);
      var inputDisabled = this.props.auth.getIn(["user", "isSignedIn"]);
      var submitDisabled = !this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "form", "email"]);

      return _react2.default.createElement(
        "form",
        {
          className: "redux-auth request-password-reset-form clearfix",
          onSubmit: this.handleSubmit.bind(this) },
        _react2.default.createElement(_Input2.default, _extends({
          type: "text",
          label: "Email Address",
          groupClassName: "request-password-reset-email",
          placeholder: "Email Address",
          disabled: loading || inputDisabled,
          value: this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "form", "email"]),
          errors: this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "errors", "email"]),
          onChange: this.handleInput.bind(this, "email")
        }, this.props.inputProps.email)),
        _react2.default.createElement(
          _ButtonLoader2.default,
          _extends({
            loading: loading,
            type: "submit",
            icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "send" }),
            className: "pull-right request-password-reset-submit",
            disabled: inputDisabled || submitDisabled,
            onClick: this.handleSubmit.bind(this)
          }, this.props.inputProps.submit),
          "Request Password Reset"
        )
      );
    }
  }]);

  return RequestPasswordResetForm;
}(_react2.default.Component);

RequestPasswordResetForm.defaultProps = {
  inputProps: {
    email: {},
    submit: {}
  }
};
exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(RequestPasswordResetForm);

/***/ }),

/***/ "./src/views/bootstrap/SignOutButton.js":
/*!**********************************************!*\
  !*** ./src/views/bootstrap/SignOutButton.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ButtonLoader = __webpack_require__(/*! ./ButtonLoader */ "./src/views/bootstrap/ButtonLoader.js");

var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _signOut = __webpack_require__(/*! ../../actions/sign-out */ "./src/actions/sign-out.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignOutButton = function (_React$Component) {
  _inherits(SignOutButton, _React$Component);

  function SignOutButton() {
    _classCallCheck(this, SignOutButton);

    return _possibleConstructorReturn(this, (SignOutButton.__proto__ || Object.getPrototypeOf(SignOutButton)).apply(this, arguments));
  }

  _createClass(SignOutButton, [{
    key: "getEndpoint",
    value: function getEndpoint() {
      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.dispatch((0, _signOut.signOut)(this.getEndpoint())).then(this.props.next).catch(function () {});
    }
  }, {
    key: "render",
    value: function render() {
      var disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
      return _react2.default.createElement(_ButtonLoader2.default, _extends({
        loading: this.props.auth.getIn(["signOut", this.getEndpoint(), "loading"]),
        icon: this.props.icon,
        disabled: disabled,
        className: "sign-out-submit",
        onClick: this.handleClick.bind(this)
      }, this.props));
    }
  }]);

  return SignOutButton;
}(_react2.default.Component);

SignOutButton.defaultProps = {
  next: function next() {},
  children: _react2.default.createElement(
    "span",
    null,
    "Sign Out"
  ),
  icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "log-out" })
};
exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(SignOutButton);

/***/ }),

/***/ "./src/views/bootstrap/UpdatePasswordForm.js":
/*!***************************************************!*\
  !*** ./src/views/bootstrap/UpdatePasswordForm.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Input = __webpack_require__(/*! ./Input */ "./src/views/bootstrap/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _ButtonLoader = __webpack_require__(/*! ./ButtonLoader */ "./src/views/bootstrap/ButtonLoader.js");

var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _updatePassword = __webpack_require__(/*! ../../actions/update-password */ "./src/actions/update-password.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdatePasswordForm = function (_React$Component) {
  _inherits(UpdatePasswordForm, _React$Component);

  function UpdatePasswordForm() {
    _classCallCheck(this, UpdatePasswordForm);

    return _possibleConstructorReturn(this, (UpdatePasswordForm.__proto__ || Object.getPrototypeOf(UpdatePasswordForm)).apply(this, arguments));
  }

  _createClass(UpdatePasswordForm, [{
    key: "getEndpoint",
    value: function getEndpoint() {
      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
    }
  }, {
    key: "handleInput",
    value: function handleInput(key, val) {
      this.props.dispatch((0, _updatePassword.updatePasswordFormUpdate)(this.getEndpoint(), key, val));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var formData = this.props.auth.getIn(["updatePassword", this.getEndpoint(), "form"]).toJS();
      this.props.dispatch((0, _updatePassword.updatePassword)(formData, this.getEndpoint()));
    }
  }, {
    key: "render",
    value: function render() {
      var endpoint = this.getEndpoint();
      var loading = this.props.auth.getIn(["updatePassword", endpoint, "loading"]);
      var disabled = !this.props.auth.getIn(["user", "isSignedIn"]) || loading || this.props.auth.getIn(["user", "attributes", "provider"]) !== "email";

      return _react2.default.createElement(
        "form",
        { className: "redux-auth update-password-form clearfix",
          onSubmit: this.handleSubmit.bind(this) },
        _react2.default.createElement(_Input2.default, _extends({ type: "password",
          label: "Password",
          placeholder: "Password",
          disabled: disabled,
          groupClassName: "update-password-password",
          value: this.props.auth.getIn(["updatePassword", endpoint, "form", "password"]),
          errors: this.props.auth.getIn(["updatePassword", endpoint, "errors", "password"]),
          onChange: this.handleInput.bind(this, "password")
        }, this.props.inputProps.password)),
        _react2.default.createElement(_Input2.default, _extends({ type: "password",
          label: "Password Confirmation",
          placeholder: "Password Confirmation",
          disabled: disabled,
          groupClassName: "update-password-password-confirmation",
          value: this.props.auth.getIn(["updatePassword", endpoint, "form", "password_confirmation"]),
          errors: this.props.auth.getIn(["updatePassword", endpoint, "errors", "password_confirmation"]),
          onChange: this.handleInput.bind(this, "password_confirmation")
        }, this.props.inputProps.passwordConfirmation)),
        _react2.default.createElement(
          _ButtonLoader2.default,
          _extends({ loading: loading,
            type: "submit",
            disabled: disabled,
            className: "pull-right update-password-submit",
            icon: this.props.icon || _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "lock" }),
            onClick: this.handleSubmit.bind(this)
          }, this.props.inputProps.submit),
          "Update Password"
        )
      );
    }
  }]);

  return UpdatePasswordForm;
}(_react2.default.Component);

UpdatePasswordForm.defaultProps = {
  inputProps: {
    password: {},
    passwordConfirmation: {}
  }
};
exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(UpdatePasswordForm);

/***/ }),

/***/ "./src/views/bootstrap/index.js":
/*!**************************************!*\
  !*** ./src/views/bootstrap/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLoader = exports.TokenBridge = exports.DestroyAccountButton = exports.UpdatePasswordForm = exports.OAuthSignInButton = exports.RequestPasswordResetForm = exports.SignOutButton = exports.EmailSignUpForm = exports.EmailSignInForm = exports.AuthGlobals = undefined;

var _AuthGlobals2 = __webpack_require__(/*! ./AuthGlobals */ "./src/views/bootstrap/AuthGlobals.js");

var _AuthGlobals3 = _interopRequireDefault(_AuthGlobals2);

var _EmailSignInForm2 = __webpack_require__(/*! ./EmailSignInForm */ "./src/views/bootstrap/EmailSignInForm.js");

var _EmailSignInForm3 = _interopRequireDefault(_EmailSignInForm2);

var _EmailSignUpForm2 = __webpack_require__(/*! ./EmailSignUpForm */ "./src/views/bootstrap/EmailSignUpForm.js");

var _EmailSignUpForm3 = _interopRequireDefault(_EmailSignUpForm2);

var _SignOutButton2 = __webpack_require__(/*! ./SignOutButton */ "./src/views/bootstrap/SignOutButton.js");

var _SignOutButton3 = _interopRequireDefault(_SignOutButton2);

var _RequestPasswordResetForm2 = __webpack_require__(/*! ./RequestPasswordResetForm */ "./src/views/bootstrap/RequestPasswordResetForm.js");

var _RequestPasswordResetForm3 = _interopRequireDefault(_RequestPasswordResetForm2);

var _OAuthSignInButton2 = __webpack_require__(/*! ./OAuthSignInButton */ "./src/views/bootstrap/OAuthSignInButton.js");

var _OAuthSignInButton3 = _interopRequireDefault(_OAuthSignInButton2);

var _UpdatePasswordForm2 = __webpack_require__(/*! ./UpdatePasswordForm */ "./src/views/bootstrap/UpdatePasswordForm.js");

var _UpdatePasswordForm3 = _interopRequireDefault(_UpdatePasswordForm2);

var _DestroyAccountButton2 = __webpack_require__(/*! ./DestroyAccountButton */ "./src/views/bootstrap/DestroyAccountButton.js");

var _DestroyAccountButton3 = _interopRequireDefault(_DestroyAccountButton2);

var _TokenBridge2 = __webpack_require__(/*! ../TokenBridge */ "./src/views/TokenBridge.js");

var _TokenBridge3 = _interopRequireDefault(_TokenBridge2);

var _ButtonLoader2 = __webpack_require__(/*! ./ButtonLoader */ "./src/views/bootstrap/ButtonLoader.js");

var _ButtonLoader3 = _interopRequireDefault(_ButtonLoader2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AuthGlobals = _AuthGlobals3.default;
exports.EmailSignInForm = _EmailSignInForm3.default;
exports.EmailSignUpForm = _EmailSignUpForm3.default;
exports.SignOutButton = _SignOutButton3.default;
exports.RequestPasswordResetForm = _RequestPasswordResetForm3.default;
exports.OAuthSignInButton = _OAuthSignInButton3.default;
exports.UpdatePasswordForm = _UpdatePasswordForm3.default;
exports.DestroyAccountButton = _DestroyAccountButton3.default;
exports.TokenBridge = _TokenBridge3.default;
exports.ButtonLoader = _ButtonLoader3.default;

/***/ }),

/***/ "./src/views/bootstrap/modals/DestroyAccountErrorModal.js":
/*!****************************************************************!*\
  !*** ./src/views/bootstrap/modals/DestroyAccountErrorModal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DestroyAccountErrorModal = function (_React$Component) {
  _inherits(DestroyAccountErrorModal, _React$Component);

  function DestroyAccountErrorModal() {
    _classCallCheck(this, DestroyAccountErrorModal);

    return _possibleConstructorReturn(this, (DestroyAccountErrorModal.__proto__ || Object.getPrototypeOf(DestroyAccountErrorModal)).apply(this, arguments));
  }

  _createClass(DestroyAccountErrorModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Modal2.default, {
        containerClass: "destroy-account-error-modal",
        show: this.props.show,
        closeAction: _ui.hideDestroyAccountErrorModal,
        title: "Error",
        errorAddr: ["destroyAccount", "errors"] });
    }
  }]);

  return DestroyAccountErrorModal;
}(_react2.default.Component);

exports.default = DestroyAccountErrorModal;

/***/ }),

/***/ "./src/views/bootstrap/modals/DestroyAccountSuccessModal.js":
/*!******************************************************************!*\
  !*** ./src/views/bootstrap/modals/DestroyAccountSuccessModal.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DestroyAccountSuccessModal = function (_React$Component) {
  _inherits(DestroyAccountSuccessModal, _React$Component);

  function DestroyAccountSuccessModal() {
    _classCallCheck(this, DestroyAccountSuccessModal);

    return _possibleConstructorReturn(this, (DestroyAccountSuccessModal.__proto__ || Object.getPrototypeOf(DestroyAccountSuccessModal)).apply(this, arguments));
  }

  _createClass(DestroyAccountSuccessModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        {
          show: this.props.show,
          containerClass: "destroy-account-success-modal",
          closeAction: _ui.hideDestroyAccountSuccessModal,
          title: "Destroy Account Success" },
        _react2.default.createElement(
          "p",
          null,
          this.props.auth.getIn(["ui", "destroyAccountMessage"])
        )
      );
    }
  }]);

  return DestroyAccountSuccessModal;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(DestroyAccountSuccessModal);

/***/ }),

/***/ "./src/views/bootstrap/modals/EmailSignInErrorModal.js":
/*!*************************************************************!*\
  !*** ./src/views/bootstrap/modals/EmailSignInErrorModal.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailSignInErrorModal = function (_React$Component) {
  _inherits(EmailSignInErrorModal, _React$Component);

  function EmailSignInErrorModal() {
    _classCallCheck(this, EmailSignInErrorModal);

    return _possibleConstructorReturn(this, (EmailSignInErrorModal.__proto__ || Object.getPrototypeOf(EmailSignInErrorModal)).apply(this, arguments));
  }

  _createClass(EmailSignInErrorModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Modal2.default, {
        show: this.props.show,
        containerClass: "email-sign-in-error-modal",
        closeAction: _ui.hideEmailSignInErrorModal,
        title: "Sign In Error",
        errorAddr: ["emailSignIn", "errors"] });
    }
  }]);

  return EmailSignInErrorModal;
}(_react2.default.Component);

exports.default = EmailSignInErrorModal;

/***/ }),

/***/ "./src/views/bootstrap/modals/EmailSignInSuccessModal.js":
/*!***************************************************************!*\
  !*** ./src/views/bootstrap/modals/EmailSignInSuccessModal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailSignInSuccessModal = function (_React$Component) {
  _inherits(EmailSignInSuccessModal, _React$Component);

  function EmailSignInSuccessModal() {
    _classCallCheck(this, EmailSignInSuccessModal);

    return _possibleConstructorReturn(this, (EmailSignInSuccessModal.__proto__ || Object.getPrototypeOf(EmailSignInSuccessModal)).apply(this, arguments));
  }

  _createClass(EmailSignInSuccessModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        {
          show: this.props.show,
          containerClass: "email-sign-in-success-modal",
          closeAction: _ui.hideEmailSignInSuccessModal,
          closeBtnLabel: "Close",
          title: "Welcome Back" },
        _react2.default.createElement(
          "p",
          null,
          "You are now signed in as ",
          this.props.auth.getIn(["user", "attributes", "email"]),
          "."
        )
      );
    }
  }]);

  return EmailSignInSuccessModal;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(EmailSignInSuccessModal);

/***/ }),

/***/ "./src/views/bootstrap/modals/EmailSignUpErrorModal.js":
/*!*************************************************************!*\
  !*** ./src/views/bootstrap/modals/EmailSignUpErrorModal.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailSignUpErrorModal = function (_React$Component) {
  _inherits(EmailSignUpErrorModal, _React$Component);

  function EmailSignUpErrorModal() {
    _classCallCheck(this, EmailSignUpErrorModal);

    return _possibleConstructorReturn(this, (EmailSignUpErrorModal.__proto__ || Object.getPrototypeOf(EmailSignUpErrorModal)).apply(this, arguments));
  }

  _createClass(EmailSignUpErrorModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Modal2.default, {
        show: this.props.show,
        containerClass: "email-sign-up-error-modal",
        title: "Sign Up Error",
        errorAddr: ["emailSignUp", "errors", "full_messages"],
        closeAction: _ui.hideEmailSignUpErrorModal });
    }
  }]);

  return EmailSignUpErrorModal;
}(_react2.default.Component);

exports.default = EmailSignUpErrorModal;

/***/ }),

/***/ "./src/views/bootstrap/modals/EmailSignUpSuccessModal.js":
/*!***************************************************************!*\
  !*** ./src/views/bootstrap/modals/EmailSignUpSuccessModal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailSignUpSuccessModal = function (_React$Component) {
  _inherits(EmailSignUpSuccessModal, _React$Component);

  function EmailSignUpSuccessModal() {
    _classCallCheck(this, EmailSignUpSuccessModal);

    return _possibleConstructorReturn(this, (EmailSignUpSuccessModal.__proto__ || Object.getPrototypeOf(EmailSignUpSuccessModal)).apply(this, arguments));
  }

  _createClass(EmailSignUpSuccessModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        {
          containerClass: "email-sign-up-success-modal",
          show: this.props.show,
          closeAction: _ui.hideEmailSignUpSuccessModal,
          title: "Sign Up Success" },
        _react2.default.createElement(
          "p",
          null,
          "A confirmation email was sent to your account at ",
          this.props.auth.getIn(["ui", "emailSignUpAddress"]),
          ". Follow the instructions in the email to complete registration."
        )
      );
    }
  }]);

  return EmailSignUpSuccessModal;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(EmailSignUpSuccessModal);

/***/ }),

/***/ "./src/views/bootstrap/modals/FirstTimeLoginErrorModal.js":
/*!****************************************************************!*\
  !*** ./src/views/bootstrap/modals/FirstTimeLoginErrorModal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FirstTimeLoginErrorModal = function (_React$Component) {
  _inherits(FirstTimeLoginErrorModal, _React$Component);

  function FirstTimeLoginErrorModal() {
    _classCallCheck(this, FirstTimeLoginErrorModal);

    return _possibleConstructorReturn(this, (FirstTimeLoginErrorModal.__proto__ || Object.getPrototypeOf(FirstTimeLoginErrorModal)).apply(this, arguments));
  }

  _createClass(FirstTimeLoginErrorModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        {
          show: this.props.show,
          containerClass: "first-time-login-error-modal",
          closeAction: _ui.hideFirstTimeLoginErrorModal,
          title: "Confirmation Error" },
        _react2.default.createElement(
          "p",
          null,
          "There was a problem confirming your account. Please try again."
        )
      );
    }
  }]);

  return FirstTimeLoginErrorModal;
}(_react2.default.Component);

exports.default = FirstTimeLoginErrorModal;

/***/ }),

/***/ "./src/views/bootstrap/modals/FirstTimeLoginSuccessModal.js":
/*!******************************************************************!*\
  !*** ./src/views/bootstrap/modals/FirstTimeLoginSuccessModal.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FirstTimeLoginSuccessModal = function (_React$Component) {
  _inherits(FirstTimeLoginSuccessModal, _React$Component);

  function FirstTimeLoginSuccessModal() {
    _classCallCheck(this, FirstTimeLoginSuccessModal);

    return _possibleConstructorReturn(this, (FirstTimeLoginSuccessModal.__proto__ || Object.getPrototypeOf(FirstTimeLoginSuccessModal)).apply(this, arguments));
  }

  _createClass(FirstTimeLoginSuccessModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        {
          show: this.props.show,
          containerClass: "first-time-login-success-modal",
          title: "Welcome " + this.props.auth.getIn(["user", "attributes", "email"]) + "!",
          closeBtnLabel: "Close",
          closeAction: _ui.hideFirstTimeLoginSuccessModal },
        _react2.default.createElement(
          "p",
          null,
          "Your account has been confirmed."
        )
      );
    }
  }]);

  return FirstTimeLoginSuccessModal;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(FirstTimeLoginSuccessModal);

/***/ }),

/***/ "./src/views/bootstrap/modals/Modal.js":
/*!*********************************************!*\
  !*** ./src/views/bootstrap/modals/Modal.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _ErrorList = __webpack_require__(/*! ../ErrorList */ "./src/views/bootstrap/ErrorList.js");

var _ErrorList2 = _interopRequireDefault(_ErrorList);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModal = function (_React$Component) {
  _inherits(BaseModal, _React$Component);

  function BaseModal() {
    _classCallCheck(this, BaseModal);

    return _possibleConstructorReturn(this, (BaseModal.__proto__ || Object.getPrototypeOf(BaseModal)).apply(this, arguments));
  }

  _createClass(BaseModal, [{
    key: "close",
    value: function close() {
      this.props.dispatch(this.props.closeAction());
    }
  }, {
    key: "getEndpoint",
    value: function getEndpoint() {
      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
    }
  }, {
    key: "getErrorList",
    value: function getErrorList() {
      var _props$errorAddr = _toArray(this.props.errorAddr),
          base = _props$errorAddr[0],
          rest = _props$errorAddr.slice(1);

      return _react2.default.createElement(_ErrorList2.default, { errors: this.props.auth.getIn([base, this.getEndpoint()].concat(_toConsumableArray(rest))) });
    }
  }, {
    key: "render",
    value: function render() {
      var body = this.props.errorAddr ? this.getErrorList() : this.props.children;

      return _react2.default.createElement(
        _reactBootstrap.Modal,
        {
          show: this.props.show,
          className: "redux-auth-modal " + this.props.containerClass,
          onHide: this.close.bind(this) },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          { closeButton: true },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            this.props.title
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          body
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            {
              onClick: this.close.bind(this),
              className: this.props.containerClass + "-close" },
            this.props.closeBtnLabel
          )
        )
      );
    }
  }]);

  return BaseModal;
}(_react2.default.Component);

BaseModal.defaultProps = {
  show: false,
  errorAddr: null,
  closeBtnLabel: "Ok"
};
exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(BaseModal);

/***/ }),

/***/ "./src/views/bootstrap/modals/OAuthSignInErrorModal.js":
/*!*************************************************************!*\
  !*** ./src/views/bootstrap/modals/OAuthSignInErrorModal.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OAuthSignInErrorModal = function (_React$Component) {
  _inherits(OAuthSignInErrorModal, _React$Component);

  function OAuthSignInErrorModal() {
    _classCallCheck(this, OAuthSignInErrorModal);

    return _possibleConstructorReturn(this, (OAuthSignInErrorModal.__proto__ || Object.getPrototypeOf(OAuthSignInErrorModal)).apply(this, arguments));
  }

  _createClass(OAuthSignInErrorModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        {
          show: this.props.show,
          containerClass: "oauth-sign-in-error-modal",
          closeAction: _ui.hideOAuthSignInErrorModal,
          title: "OAuth Sign In Error" },
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign" }),
          " There was an error authenticating your account. Please try again."
        )
      );
    }
  }]);

  return OAuthSignInErrorModal;
}(_react2.default.Component);

exports.default = OAuthSignInErrorModal;

/***/ }),

/***/ "./src/views/bootstrap/modals/OAuthSignInSuccessModal.js":
/*!***************************************************************!*\
  !*** ./src/views/bootstrap/modals/OAuthSignInSuccessModal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OAuthSignInSuccessModal = function (_React$Component) {
  _inherits(OAuthSignInSuccessModal, _React$Component);

  function OAuthSignInSuccessModal() {
    _classCallCheck(this, OAuthSignInSuccessModal);

    return _possibleConstructorReturn(this, (OAuthSignInSuccessModal.__proto__ || Object.getPrototypeOf(OAuthSignInSuccessModal)).apply(this, arguments));
  }

  _createClass(OAuthSignInSuccessModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        {
          show: this.props.show,
          containerClass: "oauth-sign-in-success-modal",
          closeAction: _ui.hideOAuthSignInSuccessModal,
          title: "Welcome" },
        _react2.default.createElement(
          "p",
          null,
          "You are now signed in via ",
          this.props.auth.getIn(["user", "attributes", "provider"]),
          "."
        )
      );
    }
  }]);

  return OAuthSignInSuccessModal;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(OAuthSignInSuccessModal);

/***/ }),

/***/ "./src/views/bootstrap/modals/PasswordResetSuccessModal.js":
/*!*****************************************************************!*\
  !*** ./src/views/bootstrap/modals/PasswordResetSuccessModal.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _ButtonLoader = __webpack_require__(/*! ../ButtonLoader */ "./src/views/bootstrap/ButtonLoader.js");

var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

var _Input = __webpack_require__(/*! ../Input */ "./src/views/bootstrap/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _updatePasswordModal = __webpack_require__(/*! ../../../actions/update-password-modal */ "./src/actions/update-password-modal.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PasswordResetSuccessModal = function (_React$Component) {
  _inherits(PasswordResetSuccessModal, _React$Component);

  function PasswordResetSuccessModal() {
    _classCallCheck(this, PasswordResetSuccessModal);

    return _possibleConstructorReturn(this, (PasswordResetSuccessModal.__proto__ || Object.getPrototypeOf(PasswordResetSuccessModal)).apply(this, arguments));
  }

  _createClass(PasswordResetSuccessModal, [{
    key: "getEndpoint",
    value: function getEndpoint() {
      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
    }
  }, {
    key: "handleInput",
    value: function handleInput(key, val) {
      this.props.dispatch((0, _updatePasswordModal.updatePasswordModalFormUpdate)(this.getEndpoint(), key, val));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      var formData = this.props.auth.getIn(["updatePasswordModal", this.getEndpoint(), "form"]).toJS();
      this.props.dispatch((0, _updatePasswordModal.updatePasswordModal)(formData, this.getEndpoint()));
    }
  }, {
    key: "close",
    value: function close() {
      this.props.dispatch((0, _ui.hidePasswordResetSuccessModal)(this.getEndpoint()));
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.props.auth.getIn(["updatePasswordModal", this.getEndpoint(), "loading"]),
          endpoint = this.getEndpoint();

      return _react2.default.createElement(
        _reactBootstrap.Modal,
        {
          show: this.props.show,
          className: "password-reset-success-modal",
          onHide: this.close.bind(this) },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          { closeButton: true },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            "Reset Your Password"
          )
        ),
        _react2.default.createElement(
          "form",
          null,
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(_Input2.default, _extends({
              type: "password",
              label: "Password",
              placeholder: "Password",
              disabled: loading,
              groupClassName: "password-reset-success-modal-password",
              value: this.props.auth.getIn(["updatePasswordModal", endpoint, "form", "password"]),
              errors: this.props.auth.getIn(["updatePasswordModal", endpoint, "errors", "password"]),
              onChange: this.handleInput.bind(this, "password")
            }, this.props.inputProps.password)),
            _react2.default.createElement(_Input2.default, _extends({
              type: "password",
              label: "Password Confirmation",
              placeholder: "Password Confirmation",
              disabled: loading,
              groupClassName: "password-reset-success-modal-password-confirmation",
              value: this.props.auth.getIn(["updatePasswordModal", endpoint, "form", "password_confirmation"]),
              errors: this.props.auth.getIn(["updatePasswordModal", endpoint, "errors", "password_confirmation"]),
              onChange: this.handleInput.bind(this, "password_confirmation")
            }, this.props.inputProps.passwordConfirmation))
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              _extends({
                className: "password-reset-success-modal-close",
                onClick: this.close.bind(this)
              }, this.props.inputProps.cancel),
              "Cancel"
            ),
            _react2.default.createElement(_ButtonLoader2.default, _extends({}, this.props, {
              loading: loading,
              type: "submit",
              className: "password-reset-success-modal-submit",
              icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "lock" }),
              onClick: this.handleSubmit.bind(this)
            }, this.props.inputProps.submit))
          )
        )
      );
    }
  }]);

  return PasswordResetSuccessModal;
}(_react2.default.Component);

PasswordResetSuccessModal.defaultProps = {
  show: false,
  inputProps: {}
};
exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(PasswordResetSuccessModal);

/***/ }),

/***/ "./src/views/bootstrap/modals/RequestPasswordResetErrorModal.js":
/*!**********************************************************************!*\
  !*** ./src/views/bootstrap/modals/RequestPasswordResetErrorModal.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequestPasswordResetErrorModal = function (_React$Component) {
  _inherits(RequestPasswordResetErrorModal, _React$Component);

  function RequestPasswordResetErrorModal() {
    _classCallCheck(this, RequestPasswordResetErrorModal);

    return _possibleConstructorReturn(this, (RequestPasswordResetErrorModal.__proto__ || Object.getPrototypeOf(RequestPasswordResetErrorModal)).apply(this, arguments));
  }

  _createClass(RequestPasswordResetErrorModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Modal2.default, {
        show: this.props.show,
        containerClass: "request-password-reset-error-modal",
        closeAction: _ui.hidePasswordResetRequestErrorModal,
        title: "Error",
        errorAddr: ["requestPasswordReset", "errors"] });
    }
  }]);

  return RequestPasswordResetErrorModal;
}(_react2.default.Component);

exports.default = RequestPasswordResetErrorModal;

/***/ }),

/***/ "./src/views/bootstrap/modals/RequestPasswordResetSuccessModal.js":
/*!************************************************************************!*\
  !*** ./src/views/bootstrap/modals/RequestPasswordResetSuccessModal.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequestPasswordResetSuccessModal = function (_React$Component) {
  _inherits(RequestPasswordResetSuccessModal, _React$Component);

  function RequestPasswordResetSuccessModal() {
    _classCallCheck(this, RequestPasswordResetSuccessModal);

    return _possibleConstructorReturn(this, (RequestPasswordResetSuccessModal.__proto__ || Object.getPrototypeOf(RequestPasswordResetSuccessModal)).apply(this, arguments));
  }

  _createClass(RequestPasswordResetSuccessModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        {
          show: this.props.show,
          containerClass: "request-password-reset-success-modal",
          title: "Password Reset Request Success",
          closeAction: _ui.hidePasswordResetRequestSuccessModal },
        _react2.default.createElement(
          "p",
          null,
          this.props.auth.getIn(["ui", "requestPasswordResetSuccessMessage"])
        )
      );
    }
  }]);

  return RequestPasswordResetSuccessModal;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return { auth: auth };
})(RequestPasswordResetSuccessModal);

/***/ }),

/***/ "./src/views/bootstrap/modals/SignOutErrorModal.js":
/*!*********************************************************!*\
  !*** ./src/views/bootstrap/modals/SignOutErrorModal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignOutErrorModal = function (_React$Component) {
  _inherits(SignOutErrorModal, _React$Component);

  function SignOutErrorModal() {
    _classCallCheck(this, SignOutErrorModal);

    return _possibleConstructorReturn(this, (SignOutErrorModal.__proto__ || Object.getPrototypeOf(SignOutErrorModal)).apply(this, arguments));
  }

  _createClass(SignOutErrorModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        {
          show: this.props.show,
          containerClass: "sign-out-error-modal",
          closeAction: _ui.hideSignOutErrorModal,
          title: "Sign Out Error" },
        _react2.default.createElement(
          "p",
          null,
          "The server encountered an error while trying to sign you out. Your account information has been wiped from this browser, but you may want to sign in and then sign back out again to resolve any issues."
        )
      );
    }
  }]);

  return SignOutErrorModal;
}(_react2.default.Component);

exports.default = SignOutErrorModal;

/***/ }),

/***/ "./src/views/bootstrap/modals/SignOutSuccessModal.js":
/*!***********************************************************!*\
  !*** ./src/views/bootstrap/modals/SignOutSuccessModal.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignOutSuccessModal = function (_React$Component) {
  _inherits(SignOutSuccessModal, _React$Component);

  function SignOutSuccessModal() {
    _classCallCheck(this, SignOutSuccessModal);

    return _possibleConstructorReturn(this, (SignOutSuccessModal.__proto__ || Object.getPrototypeOf(SignOutSuccessModal)).apply(this, arguments));
  }

  _createClass(SignOutSuccessModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        {
          show: this.props.show,
          containerClass: "sign-out-success-modal",
          title: "Goodbye!",
          closeAction: _ui.hideSignOutSuccessModal },
        _react2.default.createElement(
          "p",
          null,
          "You have been successfully signed out."
        )
      );
    }
  }]);

  return SignOutSuccessModal;
}(_react2.default.Component);

exports.default = SignOutSuccessModal;

/***/ }),

/***/ "./src/views/bootstrap/modals/UpdatePasswordErrorModal.js":
/*!****************************************************************!*\
  !*** ./src/views/bootstrap/modals/UpdatePasswordErrorModal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdatePasswordErrorModal = function (_React$Component) {
  _inherits(UpdatePasswordErrorModal, _React$Component);

  function UpdatePasswordErrorModal() {
    _classCallCheck(this, UpdatePasswordErrorModal);

    return _possibleConstructorReturn(this, (UpdatePasswordErrorModal.__proto__ || Object.getPrototypeOf(UpdatePasswordErrorModal)).apply(this, arguments));
  }

  _createClass(UpdatePasswordErrorModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Modal2.default, {
        show: this.props.show,
        containerClass: "update-password-error-modal",
        title: "Error",
        closeAction: _ui.hideUpdatePasswordErrorModal,
        errorAddr: ["updatePassword", "errors", "full_messages"] });
    }
  }]);

  return UpdatePasswordErrorModal;
}(_react2.default.Component);

exports.default = UpdatePasswordErrorModal;

/***/ }),

/***/ "./src/views/bootstrap/modals/UpdatePasswordSuccessModal.js":
/*!******************************************************************!*\
  !*** ./src/views/bootstrap/modals/UpdatePasswordSuccessModal.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! ../../../actions/ui */ "./src/actions/ui.js");

var _Modal = __webpack_require__(/*! ./Modal */ "./src/views/bootstrap/modals/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdatePasswordSuccessModal = function (_React$Component) {
  _inherits(UpdatePasswordSuccessModal, _React$Component);

  function UpdatePasswordSuccessModal() {
    _classCallCheck(this, UpdatePasswordSuccessModal);

    return _possibleConstructorReturn(this, (UpdatePasswordSuccessModal.__proto__ || Object.getPrototypeOf(UpdatePasswordSuccessModal)).apply(this, arguments));
  }

  _createClass(UpdatePasswordSuccessModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        {
          show: this.props.show,
          containerClass: "update-password-success-modal",
          closeAction: _ui.hideUpdatePasswordSuccessModal,
          title: "Success" },
        _react2.default.createElement(
          "p",
          null,
          "Your password has been successfully changed."
        )
      );
    }
  }]);

  return UpdatePasswordSuccessModal;
}(_react2.default.Component);

exports.default = UpdatePasswordSuccessModal;

/***/ }),

/***/ "browser-cookies":
/*!**********************************!*\
  !*** external "browser-cookies" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("browser-cookies");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "extend":
/*!*************************!*\
  !*** external "extend" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("extend");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-loader":
/*!*******************************!*\
  !*** external "react-loader" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loader");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ })));