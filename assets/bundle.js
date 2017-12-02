/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;

exports.out_of_memory              = out_of_memory;
exports.sys_error                  = sys_error;
exports.failure                    = failure;
exports.invalid_argument           = invalid_argument;
exports.end_of_file                = end_of_file;
exports.division_by_zero           = division_by_zero;
exports.not_found                  = not_found;
exports.match_failure              = match_failure;
exports.stack_overflow             = stack_overflow;
exports.sys_blocked_io             = sys_blocked_io;
exports.assert_failure             = assert_failure;
exports.undefined_recursive_module = undefined_recursive_module;
/*  Not a pure module */


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_array = __webpack_require__(12);

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity ? arity : 1;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d) {
      if (d < 0) {
        _args = Caml_array.caml_array_sub(args, arity$1, -d | 0);
        _f = f.apply(null, Caml_array.caml_array_sub(args, 0, arity$1));
        continue ;
        
      } else {
        return (function(f,args){
        return function (x) {
          return app(f, args.concat(/* array */[x]));
        }
        }(f,args));
      }
    } else {
      return f.apply(null, args);
    }
  };
}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return o(a0);
      case 2 : 
          return (function (param) {
              return o(a0, param);
            });
      case 3 : 
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 : 
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });
      
    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return (function (a0) {
        return _1(o, a0);
      });
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 : 
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });
      
    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function __2(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return (function (a0, a1) {
        return _2(o, a0, a1);
      });
  }
}

function curry_3(o, a0, a1, a2, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[a2]);
      case 3 : 
          return o(a0, a1, a2);
      case 4 : 
          return (function (param) {
              return o(a0, a1, a2, param);
            });
      case 5 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, param, param$1);
            });
      case 6 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2
              ]);
  }
  
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function __3(o) {
  var arity = o.length;
  if (arity === 3) {
    return o;
  } else {
    return (function (a0, a1, a2) {
        return _3(o, a0, a1, a2);
      });
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[a3]);
      case 4 : 
          return o(a0, a1, a2, a3);
      case 5 : 
          return (function (param) {
              return o(a0, a1, a2, a3, param);
            });
      case 6 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            });
      case 7 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3
              ]);
  }
  
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function __4(o) {
  var arity = o.length;
  if (arity === 4) {
    return o;
  } else {
    return (function (a0, a1, a2, a3) {
        return _4(o, a0, a1, a2, a3);
      });
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[a4]);
      case 5 : 
          return o(a0, a1, a2, a3, a4);
      case 6 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, param);
            });
      case 7 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, a4, param, param$1);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4
              ]);
  }
  
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function __5(o) {
  var arity = o.length;
  if (arity === 5) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4) {
        return _5(o, a0, a1, a2, a3, a4);
      });
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
      case 6 : 
          return o(a0, a1, a2, a3, a4, a5);
      case 7 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, a5, param);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  }
  
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function __6(o) {
  var arity = o.length;
  if (arity === 6) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5) {
        return _6(o, a0, a1, a2, a3, a4, a5);
      });
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
      case 7 : 
          return o(a0, a1, a2, a3, a4, a5, a6);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  }
  
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function __7(o) {
  var arity = o.length;
  if (arity === 7) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6) {
        return _7(o, a0, a1, a2, a3, a4, a5, a6);
      });
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6,
                      a7
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                      a6,
                      a7
                    ]);
      case 7 : 
          return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  }
  
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}

function __8(o) {
  var arity = o.length;
  if (arity === 8) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
      });
  }
}

exports.app     = app;
exports.curry_1 = curry_1;
exports._1      = _1;
exports.__1     = __1;
exports.curry_2 = curry_2;
exports._2      = _2;
exports.__2     = __2;
exports.curry_3 = curry_3;
exports._3      = _3;
exports.__3     = __3;
exports.curry_4 = curry_4;
exports._4      = _4;
exports.__4     = __4;
exports.curry_5 = curry_5;
exports._5      = _5;
exports.__5     = __5;
exports.curry_6 = curry_6;
exports._6      = _6;
exports.__6     = __6;
exports.curry_7 = curry_7;
exports._7      = _7;
exports.__7     = __7;
exports.curry_8 = curry_8;
exports._8      = _8;
exports.__8     = __8;
/* No side effect */


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry                    = __webpack_require__(1);
var Caml_io                  = __webpack_require__(31);
var Caml_obj                 = __webpack_require__(8);
var Caml_sys                 = __webpack_require__(24);
var Caml_format              = __webpack_require__(14);
var Caml_string              = __webpack_require__(9);
var Caml_exceptions          = __webpack_require__(17);
var Caml_missing_polyfill    = __webpack_require__(34);
var Caml_builtin_exceptions  = __webpack_require__(0);
var CamlinternalFormatBasics = __webpack_require__(35);

function failwith(s) {
  throw [
        Caml_builtin_exceptions.failure,
        s
      ];
}

function invalid_arg(s) {
  throw [
        Caml_builtin_exceptions.invalid_argument,
        s
      ];
}

var Exit = Caml_exceptions.create("Pervasives.Exit");

function min(x, y) {
  if (Caml_obj.caml_lessequal(x, y)) {
    return x;
  } else {
    return y;
  }
}

function max(x, y) {
  if (Caml_obj.caml_greaterequal(x, y)) {
    return x;
  } else {
    return y;
  }
}

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function lnot(x) {
  return x ^ -1;
}

var min_int = -2147483648;

function $caret(a, b) {
  return a + b;
}

function char_of_int(n) {
  if (n < 0 || n > 255) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "char_of_int"
        ];
  } else {
    return n;
  }
}

function string_of_bool(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}

function bool_of_string(param) {
  switch (param) {
    case "false" : 
        return /* false */0;
    case "true" : 
        return /* true */1;
    default:
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "bool_of_string"
          ];
  }
}

function string_of_int(param) {
  return "" + param;
}

function valid_float_lexem(s) {
  var l = s.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= l) {
      return $caret(s, ".");
    } else {
      var match = Caml_string.get(s, i);
      if (match >= 48) {
        if (match >= 58) {
          return s;
        } else {
          _i = i + 1 | 0;
          continue ;
          
        }
      } else if (match !== 45) {
        return s;
      } else {
        _i = i + 1 | 0;
        continue ;
        
      }
    }
  };
}

function string_of_float(f) {
  return valid_float_lexem(Caml_format.caml_format_float("%.12g", f));
}

function $at(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at(l1[1], l2)
          ];
  } else {
    return l2;
  }
}

var stdin = Caml_io.stdin;

var stdout = Caml_io.stdout;

var stderr = Caml_io.stderr;

function open_out_gen(_, _$1, _$2) {
  return Caml_io.caml_ml_open_descriptor_out(Caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
}

function open_out(name) {
  return open_out_gen(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_text */7,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function open_out_bin(name) {
  return open_out_gen(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_binary */6,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function flush_all() {
  var _param = Caml_io.caml_ml_out_channels_list(/* () */0);
  while(true) {
    var param = _param;
    if (param) {
      try {
        Caml_io.caml_ml_flush(param[0]);
      }
      catch (exn){
        
      }
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function output_bytes(oc, s) {
  return Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output_string(oc, s) {
  return Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "output"
        ];
  } else {
    return Caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_substring(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "output_substring"
        ];
  } else {
    return Caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_value(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_output_value not implemented by bucklescript yet\n");
}

function close_out(oc) {
  Caml_io.caml_ml_flush(oc);
  return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
}

function close_out_noerr(oc) {
  try {
    Caml_io.caml_ml_flush(oc);
  }
  catch (exn){
    
  }
  try {
    return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
  }
  catch (exn$1){
    return /* () */0;
  }
}

function open_in_gen(_, _$1, _$2) {
  return Caml_io.caml_ml_open_descriptor_in(Caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
}

function open_in(name) {
  return open_in_gen(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_text */7,
                /* [] */0
              ]
            ], 0, name);
}

function open_in_bin(name) {
  return open_in_gen(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_binary */6,
                /* [] */0
              ]
            ], 0, name);
}

function input(_, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "input"
        ];
  } else {
    return Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
  }
}

function unsafe_really_input(_, _$1, _ofs, _len) {
  while(true) {
    var len = _len;
    var ofs = _ofs;
    if (len <= 0) {
      return /* () */0;
    } else {
      var r = Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
      if (r) {
        _len = len - r | 0;
        _ofs = ofs + r | 0;
        continue ;
        
      } else {
        throw Caml_builtin_exceptions.end_of_file;
      }
    }
  };
}

function really_input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "really_input"
        ];
  } else {
    return unsafe_really_input(ic, s, ofs, len);
  }
}

function really_input_string(ic, len) {
  var s = Caml_string.caml_create_string(len);
  really_input(ic, s, 0, len);
  return Caml_string.bytes_to_string(s);
}

function input_line(chan) {
  var build_result = function (buf, _pos, _param) {
    while(true) {
      var param = _param;
      var pos = _pos;
      if (param) {
        var hd = param[0];
        var len = hd.length;
        Caml_string.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
        _param = param[1];
        _pos = pos - len | 0;
        continue ;
        
      } else {
        return buf;
      }
    };
  };
  var scan = function (_accu, _len) {
    while(true) {
      var len = _len;
      var accu = _accu;
      var n = Caml_missing_polyfill.not_implemented("caml_ml_input_scan_line not implemented by bucklescript yet\n");
      if (n) {
        if (n > 0) {
          var res = Caml_string.caml_create_string(n - 1 | 0);
          Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
          Caml_io.caml_ml_input_char(chan);
          if (accu) {
            var len$1 = (len + n | 0) - 1 | 0;
            return build_result(Caml_string.caml_create_string(len$1), len$1, /* :: */[
                        res,
                        accu
                      ]);
          } else {
            return res;
          }
        } else {
          var beg = Caml_string.caml_create_string(-n | 0);
          Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
          _len = len - n | 0;
          _accu = /* :: */[
            beg,
            accu
          ];
          continue ;
          
        }
      } else if (accu) {
        return build_result(Caml_string.caml_create_string(len), len, accu);
      } else {
        throw Caml_builtin_exceptions.end_of_file;
      }
    };
  };
  return Caml_string.bytes_to_string(scan(/* [] */0, 0));
}

function close_in_noerr() {
  try {
    return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
  }
  catch (exn){
    return /* () */0;
  }
}

function print_char(c) {
  return Caml_io.caml_ml_output_char(stdout, c);
}

function print_string(s) {
  return output_string(stdout, s);
}

function print_bytes(s) {
  return output_bytes(stdout, s);
}

function print_int(i) {
  return output_string(stdout, "" + i);
}

function print_float(f) {
  return output_string(stdout, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function print_endline(param) {
  console.log(param);
  return 0;
}

function print_newline() {
  Caml_io.caml_ml_output_char(stdout, /* "\n" */10);
  return Caml_io.caml_ml_flush(stdout);
}

function prerr_char(c) {
  return Caml_io.caml_ml_output_char(stderr, c);
}

function prerr_string(s) {
  return output_string(stderr, s);
}

function prerr_bytes(s) {
  return output_bytes(stderr, s);
}

function prerr_int(i) {
  return output_string(stderr, "" + i);
}

function prerr_float(f) {
  return output_string(stderr, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function prerr_endline(param) {
  console.error(param);
  return 0;
}

function prerr_newline() {
  Caml_io.caml_ml_output_char(stderr, /* "\n" */10);
  return Caml_io.caml_ml_flush(stderr);
}

function read_line() {
  Caml_io.caml_ml_flush(stdout);
  return input_line(stdin);
}

function read_int() {
  return Caml_format.caml_int_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function read_float() {
  return Caml_format.caml_float_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function string_of_format(param) {
  return param[1];
}

function $caret$caret(param, param$1) {
  return /* Format */[
          CamlinternalFormatBasics.concat_fmt(param[0], param$1[0]),
          $caret(param[1], $caret("%,", param$1[1]))
        ];
}

var exit_function = [flush_all];

function at_exit(f) {
  var g = exit_function[0];
  exit_function[0] = (function () {
      Curry._1(f, /* () */0);
      return Curry._1(g, /* () */0);
    });
  return /* () */0;
}

function do_at_exit() {
  return Curry._1(exit_function[0], /* () */0);
}

function exit(retcode) {
  do_at_exit(/* () */0);
  return Caml_sys.caml_sys_exit(retcode);
}

var max_int = 2147483647;

var infinity = Infinity;

var neg_infinity = -Infinity;

var nan = NaN;

var max_float = Number.MAX_VALUE;

var min_float = Number.MIN_VALUE;

var epsilon_float = 2.220446049250313e-16;

var flush = Caml_io.caml_ml_flush;

var output_char = Caml_io.caml_ml_output_char;

var output_byte = Caml_io.caml_ml_output_char;

function output_binary_int(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_output_int not implemented by bucklescript yet\n");
}

function seek_out(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_out not implemented by bucklescript yet\n");
}

function pos_out() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_out not implemented by bucklescript yet\n");
}

function out_channel_length() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
}

function set_binary_mode_out(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
}

var input_char = Caml_io.caml_ml_input_char;

var input_byte = Caml_io.caml_ml_input_char;

function input_binary_int() {
  return Caml_missing_polyfill.not_implemented("caml_ml_input_int not implemented by bucklescript yet\n");
}

function input_value() {
  return Caml_missing_polyfill.not_implemented("caml_input_value not implemented by bucklescript yet\n");
}

function seek_in(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_in not implemented by bucklescript yet\n");
}

function pos_in() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_in not implemented by bucklescript yet\n");
}

function in_channel_length() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
}

function close_in() {
  return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
}

function set_binary_mode_in(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
}

function LargeFile_000(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_out_64 not implemented by bucklescript yet\n");
}

function LargeFile_001() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_out_64 not implemented by bucklescript yet\n");
}

function LargeFile_002() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
}

function LargeFile_003(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_in_64 not implemented by bucklescript yet\n");
}

function LargeFile_004() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_in_64 not implemented by bucklescript yet\n");
}

function LargeFile_005() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
}

var LargeFile = [
  LargeFile_000,
  LargeFile_001,
  LargeFile_002,
  LargeFile_003,
  LargeFile_004,
  LargeFile_005
];

exports.invalid_arg         = invalid_arg;
exports.failwith            = failwith;
exports.Exit                = Exit;
exports.min                 = min;
exports.max                 = max;
exports.abs                 = abs;
exports.max_int             = max_int;
exports.min_int             = min_int;
exports.lnot                = lnot;
exports.infinity            = infinity;
exports.neg_infinity        = neg_infinity;
exports.nan                 = nan;
exports.max_float           = max_float;
exports.min_float           = min_float;
exports.epsilon_float       = epsilon_float;
exports.$caret              = $caret;
exports.char_of_int         = char_of_int;
exports.string_of_bool      = string_of_bool;
exports.bool_of_string      = bool_of_string;
exports.string_of_int       = string_of_int;
exports.string_of_float     = string_of_float;
exports.$at                 = $at;
exports.stdin               = stdin;
exports.stdout              = stdout;
exports.stderr              = stderr;
exports.print_char          = print_char;
exports.print_string        = print_string;
exports.print_bytes         = print_bytes;
exports.print_int           = print_int;
exports.print_float         = print_float;
exports.print_endline       = print_endline;
exports.print_newline       = print_newline;
exports.prerr_char          = prerr_char;
exports.prerr_string        = prerr_string;
exports.prerr_bytes         = prerr_bytes;
exports.prerr_int           = prerr_int;
exports.prerr_float         = prerr_float;
exports.prerr_endline       = prerr_endline;
exports.prerr_newline       = prerr_newline;
exports.read_line           = read_line;
exports.read_int            = read_int;
exports.read_float          = read_float;
exports.open_out            = open_out;
exports.open_out_bin        = open_out_bin;
exports.open_out_gen        = open_out_gen;
exports.flush               = flush;
exports.flush_all           = flush_all;
exports.output_char         = output_char;
exports.output_string       = output_string;
exports.output_bytes        = output_bytes;
exports.output              = output;
exports.output_substring    = output_substring;
exports.output_byte         = output_byte;
exports.output_binary_int   = output_binary_int;
exports.output_value        = output_value;
exports.seek_out            = seek_out;
exports.pos_out             = pos_out;
exports.out_channel_length  = out_channel_length;
exports.close_out           = close_out;
exports.close_out_noerr     = close_out_noerr;
exports.set_binary_mode_out = set_binary_mode_out;
exports.open_in             = open_in;
exports.open_in_bin         = open_in_bin;
exports.open_in_gen         = open_in_gen;
exports.input_char          = input_char;
exports.input_line          = input_line;
exports.input               = input;
exports.really_input        = really_input;
exports.really_input_string = really_input_string;
exports.input_byte          = input_byte;
exports.input_binary_int    = input_binary_int;
exports.input_value         = input_value;
exports.seek_in             = seek_in;
exports.pos_in              = pos_in;
exports.in_channel_length   = in_channel_length;
exports.close_in            = close_in;
exports.close_in_noerr      = close_in_noerr;
exports.set_binary_mode_in  = set_binary_mode_in;
exports.LargeFile           = LargeFile;
exports.string_of_format    = string_of_format;
exports.$caret$caret        = $caret$caret;
exports.exit                = exit;
exports.at_exit             = at_exit;
exports.valid_float_lexem   = valid_float_lexem;
exports.unsafe_really_input = unsafe_really_input;
exports.do_at_exit          = do_at_exit;
/* No side effect */


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function div(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x / y | 0;
  }
}

function mod_(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x % y;
  }
}

function caml_bswap16(x) {
  return ((x & 255) << 8) | ((x & 65280) >>> 8);
}

function caml_int32_bswap(x) {
  return ((x & 255) << 24) | ((x & 65280) << 8) | ((x & 16711680) >>> 8) | ((x & 4278190080) >>> 24);
}

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);

var caml_nativeint_bswap = caml_int32_bswap;

exports.div                  = div;
exports.mod_                 = mod_;
exports.caml_bswap16         = caml_bswap16;
exports.caml_int32_bswap     = caml_int32_bswap;
exports.caml_nativeint_bswap = caml_nativeint_bswap;
exports.imul                 = imul;
/* imul Not a pure module */


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Curry                 = __webpack_require__(1);
var Reasongl              = __webpack_require__(15);
var Reprocessing_Common   = __webpack_require__(18);
var Reprocessing_Matrix   = __webpack_require__(21);
var Reprocessing_Internal = __webpack_require__(22);

function width(env) {
  return env[/* size */18][/* width */1];
}

function height(env) {
  return env[/* size */18][/* height */0];
}

function windowWidth(env) {
  return Curry._1(Reasongl.Gl[/* Window */2][/* getWidth */0], env[/* window */1]);
}

function windowHeight(env) {
  return Curry._1(Reasongl.Gl[/* Window */2][/* getHeight */1], env[/* window */1]);
}

function mouse(env) {
  return env[/* mouse */12][/* pos */0];
}

function pmouse(env) {
  return env[/* mouse */12][/* prevPos */1];
}

function mousePressed(env) {
  return env[/* mouse */12][/* pressed */2];
}

function keyCode(env) {
  return env[/* keyboard */11][/* keyCode */0];
}

function key(key$1, env) {
  return Curry._2(Reprocessing_Common.KeySet[/* mem */2], key$1, env[/* keyboard */11][/* down */3]);
}

function keyPressed(key, env) {
  return Curry._2(Reprocessing_Common.KeySet[/* mem */2], key, env[/* keyboard */11][/* pressed */1]);
}

function keyReleased(key, env) {
  return Curry._2(Reprocessing_Common.KeySet[/* mem */2], key, env[/* keyboard */11][/* released */2]);
}

function size(width, height, env) {
  Curry._3(Reasongl.Gl[/* Window */2][/* setWindowSize */6], env[/* window */1], width, height);
  return Reprocessing_Internal.resetSize(env, width, height);
}

function resizeable(resizeable$1, env) {
  env[/* size */18][/* resizeable */2] = resizeable$1;
  return /* () */0;
}

function frameRate(env) {
  return env[/* frame */15][/* rate */1];
}

function frameCount(env) {
  return env[/* frame */15][/* count */0];
}

function deltaTime(env) {
  return env[/* frame */15][/* deltaTime */2];
}

function localizePointf(p, env) {
  return Reprocessing_Matrix.matptmul(Reprocessing_Matrix.matinv(env[/* matrix */16]), p);
}

function localizePoint(param, env) {
  var match = Reprocessing_Matrix.matptmul(Reprocessing_Matrix.matinv(env[/* matrix */16]), /* tuple */[
        param[0],
        param[1]
      ]);
  return /* tuple */[
          match[0] | 0,
          match[1] | 0
        ];
}

function loadUserData(key, _) {
  return Curry._1(Reasongl.Gl[/* File */1][/* loadUserData */2], key);
}

function saveUserData(key, value, _) {
  return Curry._2(Reasongl.Gl[/* File */1][/* saveUserData */1], key, value);
}

exports.width          = width;
exports.height         = height;
exports.windowWidth    = windowWidth;
exports.windowHeight   = windowHeight;
exports.mouse          = mouse;
exports.pmouse         = pmouse;
exports.mousePressed   = mousePressed;
exports.keyCode        = keyCode;
exports.key            = key;
exports.keyPressed     = keyPressed;
exports.keyReleased    = keyReleased;
exports.size           = size;
exports.resizeable     = resizeable;
exports.frameRate      = frameRate;
exports.frameCount     = frameCount;
exports.deltaTime      = deltaTime;
exports.localizePoint  = localizePoint;
exports.localizePointf = localizePointf;
exports.loadUserData   = loadUserData;
exports.saveUserData   = saveUserData;
/* Reasongl Not a pure module */


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function __(tag, block) {
  block.tag = tag;
  return block;
}

exports.__ = __;
/* No side effect */


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE



var pi = 4.0 * Math.atan(1.0);

var two_pi = 2.0 * pi;

var half_pi = 0.5 * pi;

var quarter_pi = 0.25 * pi;

var white = /* float array */[
  1,
  1,
  1,
  1
];

var black = /* float array */[
  0,
  0,
  0,
  1
];

var red = /* float array */[
  1,
  0,
  0,
  1
];

var green = /* float array */[
  0,
  1,
  0,
  1
];

var blue = /* float array */[
  0,
  0,
  1,
  1
];

var tau = two_pi;

exports.white      = white;
exports.black      = black;
exports.red        = red;
exports.green      = green;
exports.blue       = blue;
exports.pi         = pi;
exports.half_pi    = half_pi;
exports.quarter_pi = quarter_pi;
exports.two_pi     = two_pi;
exports.tau        = tau;
/* pi Not a pure module */


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry                   = __webpack_require__(1);
var Caml_obj                = __webpack_require__(8);
var Pervasives              = __webpack_require__(2);
var Caml_builtin_exceptions = __webpack_require__(0);

function length(l) {
  var _len = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var len = _len;
    if (param) {
      _param = param[1];
      _len = len + 1 | 0;
      continue ;
      
    } else {
      return len;
    }
  };
}

function hd(param) {
  if (param) {
    return param[0];
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "hd"
        ];
  }
}

function tl(param) {
  if (param) {
    return param[1];
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "tl"
        ];
  }
}

function nth(l, n) {
  if (n < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.nth"
        ];
  } else {
    var _l = l;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var l$1 = _l;
      if (l$1) {
        if (n$1) {
          _n = n$1 - 1 | 0;
          _l = l$1[1];
          continue ;
          
        } else {
          return l$1[0];
        }
      } else {
        throw [
              Caml_builtin_exceptions.failure,
              "nth"
            ];
      }
    };
  }
}

function rev_append(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
      
    } else {
      return l2;
    }
  };
}

function rev(l) {
  return rev_append(l, /* [] */0);
}

function flatten(param) {
  if (param) {
    return Pervasives.$at(param[0], flatten(param[1]));
  } else {
    return /* [] */0;
  }
}

function map(f, param) {
  if (param) {
    var r = Curry._1(f, param[0]);
    return /* :: */[
            r,
            map(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi(i, f, param) {
  if (param) {
    var r = Curry._2(f, i, param[0]);
    return /* :: */[
            r,
            mapi(i + 1 | 0, f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi$1(f, l) {
  return mapi(0, f, l);
}

function rev_map(f, l) {
  var _accu = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = /* :: */[
        Curry._1(f, param[0]),
        accu
      ];
      continue ;
      
    } else {
      return accu;
    }
  };
}

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      Curry._1(f, param[0]);
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function iteri(f, l) {
  var _i = 0;
  var f$1 = f;
  var _param = l;
  while(true) {
    var param = _param;
    var i = _i;
    if (param) {
      Curry._2(f$1, i, param[0]);
      _param = param[1];
      _i = i + 1 | 0;
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function fold_left(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = Curry._2(f, accu, l[0]);
      continue ;
      
    } else {
      return accu;
    }
  };
}

function fold_right(f, l, accu) {
  if (l) {
    return Curry._2(f, l[0], fold_right(f, l[1], accu));
  } else {
    return accu;
  }
}

function map2(f, l1, l2) {
  if (l1) {
    if (l2) {
      var r = Curry._2(f, l1[0], l2[0]);
      return /* :: */[
              r,
              map2(f, l1[1], l2[1])
            ];
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.map2"
          ];
    }
  } else if (l2) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.map2"
        ];
  } else {
    return /* [] */0;
  }
}

function rev_map2(f, l1, l2) {
  var _accu = /* [] */0;
  var _l1 = l1;
  var _l2 = l2;
  while(true) {
    var l2$1 = _l2;
    var l1$1 = _l1;
    var accu = _accu;
    if (l1$1) {
      if (l2$1) {
        _l2 = l2$1[1];
        _l1 = l1$1[1];
        _accu = /* :: */[
          Curry._2(f, l1$1[0], l2$1[0]),
          accu
        ];
        continue ;
        
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.rev_map2"
            ];
      }
    } else if (l2$1) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.rev_map2"
          ];
    } else {
      return accu;
    }
  };
}

function iter2(f, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        Curry._2(f, l1[0], l2[0]);
        _l2 = l2[1];
        _l1 = l1[1];
        continue ;
        
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.iter2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.iter2"
          ];
    } else {
      return /* () */0;
    }
  };
}

function fold_left2(f, _accu, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    var accu = _accu;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        _accu = Curry._3(f, accu, l1[0], l2[0]);
        continue ;
        
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.fold_left2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.fold_left2"
          ];
    } else {
      return accu;
    }
  };
}

function fold_right2(f, l1, l2, accu) {
  if (l1) {
    if (l2) {
      return Curry._3(f, l1[0], l2[0], fold_right2(f, l1[1], l2[1], accu));
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.fold_right2"
          ];
    }
  } else if (l2) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.fold_right2"
        ];
  } else {
    return accu;
  }
}

function for_all(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Curry._1(p, param[0])) {
        _param = param[1];
        continue ;
        
      } else {
        return /* false */0;
      }
    } else {
      return /* true */1;
    }
  };
}

function exists(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Curry._1(p, param[0])) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  };
}

function for_all2(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (Curry._2(p, l1[0], l2[0])) {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
          
        } else {
          return /* false */0;
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.for_all2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.for_all2"
          ];
    } else {
      return /* true */1;
    }
  };
}

function exists2(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (Curry._2(p, l1[0], l2[0])) {
          return /* true */1;
        } else {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
          
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.exists2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.exists2"
          ];
    } else {
      return /* false */0;
    }
  };
}

function mem(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Caml_obj.caml_compare(param[0], x)) {
        _param = param[1];
        continue ;
        
      } else {
        return /* true */1;
      }
    } else {
      return /* false */0;
    }
  };
}

function memq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (param[0] === x) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  };
}

function assoc(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (Caml_obj.caml_compare(match[0], x)) {
        _param = param[1];
        continue ;
        
      } else {
        return match[1];
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function assq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (match[0] === x) {
        return match[1];
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function mem_assoc(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Caml_obj.caml_compare(param[0][0], x)) {
        _param = param[1];
        continue ;
        
      } else {
        return /* true */1;
      }
    } else {
      return /* false */0;
    }
  };
}

function mem_assq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (param[0][0] === x) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  };
}

function remove_assoc(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (Caml_obj.caml_compare(pair[0], x)) {
      return /* :: */[
              pair,
              remove_assoc(x, l)
            ];
    } else {
      return l;
    }
  } else {
    return /* [] */0;
  }
}

function remove_assq(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (pair[0] === x) {
      return l;
    } else {
      return /* :: */[
              pair,
              remove_assq(x, l)
            ];
    }
  } else {
    return /* [] */0;
  }
}

function find(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var x = param[0];
      if (Curry._1(p, x)) {
        return x;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function find_all(p) {
  return (function (param) {
      var _accu = /* [] */0;
      var _param = param;
      while(true) {
        var param$1 = _param;
        var accu = _accu;
        if (param$1) {
          var l = param$1[1];
          var x = param$1[0];
          if (Curry._1(p, x)) {
            _param = l;
            _accu = /* :: */[
              x,
              accu
            ];
            continue ;
            
          } else {
            _param = l;
            continue ;
            
          }
        } else {
          return rev_append(accu, /* [] */0);
        }
      };
    });
}

function partition(p, l) {
  var _yes = /* [] */0;
  var _no = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var no = _no;
    var yes = _yes;
    if (param) {
      var l$1 = param[1];
      var x = param[0];
      if (Curry._1(p, x)) {
        _param = l$1;
        _yes = /* :: */[
          x,
          yes
        ];
        continue ;
        
      } else {
        _param = l$1;
        _no = /* :: */[
          x,
          no
        ];
        continue ;
        
      }
    } else {
      return /* tuple */[
              rev_append(yes, /* [] */0),
              rev_append(no, /* [] */0)
            ];
    }
  };
}

function split(param) {
  if (param) {
    var match = param[0];
    var match$1 = split(param[1]);
    return /* tuple */[
            /* :: */[
              match[0],
              match$1[0]
            ],
            /* :: */[
              match[1],
              match$1[1]
            ]
          ];
  } else {
    return /* tuple */[
            /* [] */0,
            /* [] */0
          ];
  }
}

function combine(l1, l2) {
  if (l1) {
    if (l2) {
      return /* :: */[
              /* tuple */[
                l1[0],
                l2[0]
              ],
              combine(l1[1], l2[1])
            ];
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.combine"
          ];
    }
  } else if (l2) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.combine"
        ];
  } else {
    return /* [] */0;
  }
}

function merge(cmp, l1, l2) {
  if (l1) {
    if (l2) {
      var h2 = l2[0];
      var h1 = l1[0];
      if (Curry._2(cmp, h1, h2) <= 0) {
        return /* :: */[
                h1,
                merge(cmp, l1[1], l2)
              ];
      } else {
        return /* :: */[
                h2,
                merge(cmp, l1, l2[1])
              ];
      }
    } else {
      return l1;
    }
  } else {
    return l2;
  }
}

function chop(_k, _l) {
  while(true) {
    var l = _l;
    var k = _k;
    if (k) {
      if (l) {
        _l = l[1];
        _k = k - 1 | 0;
        continue ;
        
      } else {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "list.ml",
                223,
                11
              ]
            ];
      }
    } else {
      return l;
    }
  };
}

function stable_sort(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (Curry._2(cmp, x1, x2) <= 0) {
              if (Curry._2(cmp, x2, x3) <= 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else if (Curry._2(cmp, x1, x3) <= 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              }
            } else if (Curry._2(cmp, x1, x3) <= 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ]
                    ];
            } else if (Curry._2(cmp, x2, x3) <= 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            } else {
              return /* :: */[
                      x3,
                      /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (Curry._2(cmp, x1$1, x2$1) <= 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (Curry._2(cmp, h1, h2) > 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = l1[1];
              continue ;
              
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = l2$1[1];
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (Curry._2(cmp, x1, x2) > 0) {
              if (Curry._2(cmp, x2, x3) > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else if (Curry._2(cmp, x1, x3) > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              }
            } else if (Curry._2(cmp, x1, x3) > 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ]
                    ];
            } else if (Curry._2(cmp, x2, x3) > 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            } else {
              return /* :: */[
                      x3,
                      /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (Curry._2(cmp, x1$1, x2$1) > 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (Curry._2(cmp, h1, h2) <= 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = l1[1];
              continue ;
              
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = l2$1[1];
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

function sort_uniq(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = Curry._2(cmp, x1, x2);
            if (c) {
              if (c < 0) {
                var c$1 = Curry._2(cmp, x2, x3);
                if (c$1) {
                  if (c$1 < 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$2 = Curry._2(cmp, x1, x3);
                    if (c$2) {
                      if (c$2 < 0) {
                        return /* :: */[
                                x1,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x1,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                var c$3 = Curry._2(cmp, x1, x3);
                if (c$3) {
                  if (c$3 < 0) {
                    return /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$4 = Curry._2(cmp, x2, x3);
                    if (c$4) {
                      if (c$4 < 0) {
                        return /* :: */[
                                x2,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x2,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x1,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                }
              }
            } else {
              var c$5 = Curry._2(cmp, x2, x3);
              if (c$5) {
                if (c$5 < 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = Curry._2(cmp, x1$1, x2$1);
        if (c$6) {
          if (c$6 < 0) {
            return /* :: */[
                    x1$1,
                    /* :: */[
                      x2$1,
                      /* [] */0
                    ]
                  ];
          } else {
            return /* :: */[
                    x2$1,
                    /* :: */[
                      x1$1,
                      /* [] */0
                    ]
                  ];
          }
        } else {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = Curry._2(cmp, h1, h2);
            if (c$7) {
              if (c$7 > 0) {
                _accu = /* :: */[
                  h1,
                  accu
                ];
                _l1 = t1;
                continue ;
                
              } else {
                _accu = /* :: */[
                  h2,
                  accu
                ];
                _l2 = t2;
                continue ;
                
              }
            } else {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = Curry._2(cmp, x1, x2);
            if (c) {
              if (c > 0) {
                var c$1 = Curry._2(cmp, x2, x3);
                if (c$1) {
                  if (c$1 > 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$2 = Curry._2(cmp, x1, x3);
                    if (c$2) {
                      if (c$2 > 0) {
                        return /* :: */[
                                x1,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x1,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                var c$3 = Curry._2(cmp, x1, x3);
                if (c$3) {
                  if (c$3 > 0) {
                    return /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$4 = Curry._2(cmp, x2, x3);
                    if (c$4) {
                      if (c$4 > 0) {
                        return /* :: */[
                                x2,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x2,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x1,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                }
              }
            } else {
              var c$5 = Curry._2(cmp, x2, x3);
              if (c$5) {
                if (c$5 > 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = Curry._2(cmp, x1$1, x2$1);
        if (c$6) {
          if (c$6 > 0) {
            return /* :: */[
                    x1$1,
                    /* :: */[
                      x2$1,
                      /* [] */0
                    ]
                  ];
          } else {
            return /* :: */[
                    x2$1,
                    /* :: */[
                      x1$1,
                      /* [] */0
                    ]
                  ];
          }
        } else {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = Curry._2(cmp, h1, h2);
            if (c$7) {
              if (c$7 < 0) {
                _accu = /* :: */[
                  h1,
                  accu
                ];
                _l1 = t1;
                continue ;
                
              } else {
                _accu = /* :: */[
                  h2,
                  accu
                ];
                _l2 = t2;
                continue ;
                
              }
            } else {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

var append = Pervasives.$at;

var concat = flatten;

var filter = find_all;

var sort = stable_sort;

var fast_sort = stable_sort;

exports.length       = length;
exports.hd           = hd;
exports.tl           = tl;
exports.nth          = nth;
exports.rev          = rev;
exports.append       = append;
exports.rev_append   = rev_append;
exports.concat       = concat;
exports.flatten      = flatten;
exports.iter         = iter;
exports.iteri        = iteri;
exports.map          = map;
exports.mapi         = mapi$1;
exports.rev_map      = rev_map;
exports.fold_left    = fold_left;
exports.fold_right   = fold_right;
exports.iter2        = iter2;
exports.map2         = map2;
exports.rev_map2     = rev_map2;
exports.fold_left2   = fold_left2;
exports.fold_right2  = fold_right2;
exports.for_all      = for_all;
exports.exists       = exists;
exports.for_all2     = for_all2;
exports.exists2      = exists2;
exports.mem          = mem;
exports.memq         = memq;
exports.find         = find;
exports.filter       = filter;
exports.find_all     = find_all;
exports.partition    = partition;
exports.assoc        = assoc;
exports.assq         = assq;
exports.mem_assoc    = mem_assoc;
exports.mem_assq     = mem_assq;
exports.remove_assoc = remove_assoc;
exports.remove_assq  = remove_assq;
exports.split        = split;
exports.combine      = combine;
exports.sort         = sort;
exports.stable_sort  = stable_sort;
exports.fast_sort    = fast_sort;
exports.sort_uniq    = sort_uniq;
exports.merge        = merge;
/* No side effect */


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Block                   = __webpack_require__(5);
var Caml_builtin_exceptions = __webpack_require__(0);

function caml_obj_dup(x) {
  var len = x.length | 0;
  var v = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    v[i] = x[i];
  }
  v.tag = x.tag | 0;
  return v;
}

function caml_obj_truncate(x, new_size) {
  var len = x.length | 0;
  if (new_size <= 0 || new_size > len) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Obj.truncate"
        ];
  } else if (len !== new_size) {
    for(var i = new_size ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      x[i] = 0;
    }
    x.length = new_size;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_lazy_make_forward(x) {
  return Block.__(250, [x]);
}

function caml_update_dummy(x, y) {
  var len = y.length | 0;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    x[i] = y[i];
  }
  var y_tag = y.tag | 0;
  if (y_tag !== 0) {
    x.tag = y_tag;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_compare(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return 0;
    } else {
      var a_type = typeof a;
      var b_type = typeof b;
      if (a_type === "string") {
        var x = a;
        var y = b;
        if (x < y) {
          return -1;
        } else if (x === y) {
          return 0;
        } else {
          return 1;
        }
      } else {
        var is_a_number = +(a_type === "number");
        var is_b_number = +(b_type === "number");
        if (is_a_number !== 0) {
          if (is_b_number !== 0) {
            return caml_int_compare(a, b);
          } else {
            return -1;
          }
        } else if (is_b_number !== 0) {
          return 1;
        } else if (a_type === "boolean" || a_type === "undefined" || a === null) {
          var x$1 = a;
          var y$1 = b;
          if (x$1 === y$1) {
            return 0;
          } else if (x$1 < y$1) {
            return -1;
          } else {
            return 1;
          }
        } else if (a_type === "function" || b_type === "function") {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "compare: functional value"
              ];
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return caml_int_compare(a[1], b[1]);
          } else if (tag_a === 251) {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            if (tag_a < tag_b) {
              return -1;
            } else {
              return 1;
            }
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return 0;
                } else {
                  var res = caml_compare(a$1[i], b$1[i]);
                  if (res !== 0) {
                    return res;
                  } else {
                    _i = i + 1 | 0;
                    continue ;
                    
                  }
                }
              };
            } else if (len_a < len_b) {
              var a$2 = a;
              var b$2 = b;
              var _i$1 = 0;
              var short_length = len_a;
              while(true) {
                var i$1 = _i$1;
                if (i$1 === short_length) {
                  return -1;
                } else {
                  var res$1 = caml_compare(a$2[i$1], b$2[i$1]);
                  if (res$1 !== 0) {
                    return res$1;
                  } else {
                    _i$1 = i$1 + 1 | 0;
                    continue ;
                    
                  }
                }
              };
            } else {
              var a$3 = a;
              var b$3 = b;
              var _i$2 = 0;
              var short_length$1 = len_b;
              while(true) {
                var i$2 = _i$2;
                if (i$2 === short_length$1) {
                  return 1;
                } else {
                  var res$2 = caml_compare(a$3[i$2], b$3[i$2]);
                  if (res$2 !== 0) {
                    return res$2;
                  } else {
                    _i$2 = i$2 + 1 | 0;
                    continue ;
                    
                  }
                }
              };
            }
          }
        }
      }
    }
  };
}

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return /* true */1;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return /* false */0;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "undefined" || b === null) {
          return /* false */0;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return +(a[1] === b[1]);
          } else if (tag_a === 251) {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return /* false */0;
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return /* true */1;
                } else if (caml_equal(a$1[i], b$1[i])) {
                  _i = i + 1 | 0;
                  continue ;
                  
                } else {
                  return /* false */0;
                }
              };
            } else {
              return /* false */0;
            }
          }
        }
      }
    }
  };
}

function caml_notequal(a, b) {
  return 1 - caml_equal(a, b);
}

function caml_greaterequal(a, b) {
  return +(caml_compare(a, b) >= 0);
}

function caml_greaterthan(a, b) {
  return +(caml_compare(a, b) > 0);
}

function caml_lessequal(a, b) {
  return +(caml_compare(a, b) <= 0);
}

function caml_lessthan(a, b) {
  return +(caml_compare(a, b) < 0);
}

var caml_int32_compare = caml_int_compare;

var caml_nativeint_compare = caml_int_compare;

exports.caml_obj_dup           = caml_obj_dup;
exports.caml_obj_truncate      = caml_obj_truncate;
exports.caml_lazy_make_forward = caml_lazy_make_forward;
exports.caml_update_dummy      = caml_update_dummy;
exports.caml_int_compare       = caml_int_compare;
exports.caml_int32_compare     = caml_int32_compare;
exports.caml_nativeint_compare = caml_nativeint_compare;
exports.caml_compare           = caml_compare;
exports.caml_equal             = caml_equal;
exports.caml_notequal          = caml_notequal;
exports.caml_greaterequal      = caml_greaterequal;
exports.caml_greaterthan       = caml_greaterthan;
exports.caml_lessthan          = caml_lessthan;
exports.caml_lessequal         = caml_lessequal;
/* No side effect */


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function string_of_char(prim) {
  return String.fromCharCode(prim);
}

function caml_string_get(s, i) {
  if (i >= s.length || i < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

function caml_create_string(len) {
  if (len < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.create"
        ];
  } else {
    return new Array(len);
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_fill_string(s, i, l, c) {
  if (l > 0) {
    for(var k = i ,k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k){
      s[k] = c;
    }
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;
    if (len <= off1) {
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }
      return /* () */0;
    } else {
      for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
        s2[i2 + i$2 | 0] = /* "\000" */0;
      }
      return /* () */0;
    }
  } else {
    return 0;
  }
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for(var j = range; j >= 0; --j){
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return /* () */0;
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for(var k = 0; k <= range$1; ++k){
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    }
  } else {
    return 0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    res[i] = s.charCodeAt(i);
  }
  return res;
}

function bytes_to_string(a) {
  var bytes = a;
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (i === 0 && len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null,bytes);
  } else {
    var offset = 0;
    while(s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null,tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    };
    return s;
  }
}

function caml_string_of_char_array(chars) {
  var len = chars.length;
  var bytes = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    bytes[i] = chars[i];
  }
  return bytes_to_string(bytes);
}

function caml_is_printable(c) {
  if (c > 31) {
    return +(c < 127);
  } else {
    return /* false */0;
  }
}

function caml_string_get16(s, i) {
  return s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0;
}

function caml_string_get32(s, i) {
  return ((s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0) + (s.charCodeAt(i + 2 | 0) << 16) | 0) + (s.charCodeAt(i + 3 | 0) << 24) | 0;
}

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

exports.bytes_of_string           = bytes_of_string;
exports.bytes_to_string           = bytes_to_string;
exports.caml_is_printable         = caml_is_printable;
exports.caml_string_of_char_array = caml_string_of_char_array;
exports.caml_string_get           = caml_string_get;
exports.caml_string_compare       = caml_string_compare;
exports.caml_create_string        = caml_create_string;
exports.caml_fill_string          = caml_fill_string;
exports.caml_blit_string          = caml_blit_string;
exports.caml_blit_bytes           = caml_blit_bytes;
exports.caml_string_get16         = caml_string_get16;
exports.caml_string_get32         = caml_string_get32;
exports.string_of_char            = string_of_char;
exports.get                       = get;
/* No side effect */


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (immutable) */ __webpack_exports__["setMatrixArrayType"] = setMatrixArrayType;
/* harmony export (immutable) */ __webpack_exports__["toRadian"] = toRadian;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
const EPSILON = 0.000001;
/* harmony export (immutable) */ __webpack_exports__["EPSILON"] = EPSILON;

let ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
const RANDOM = Math.random;
/* harmony export (immutable) */ __webpack_exports__["RANDOM"] = RANDOM;


/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}

const degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Curry                  = __webpack_require__(1);
var Reasongl               = __webpack_require__(15);
var Pervasives             = __webpack_require__(2);
var RGLConstants           = __webpack_require__(20);
var Reprocessing_Env       = __webpack_require__(4);
var Reprocessing_Font      = __webpack_require__(42);
var Reprocessing_Matrix    = __webpack_require__(21);
var Reprocessing_Internal  = __webpack_require__(22);
var Reprocessing_Constants = __webpack_require__(6);

function translate(x, y, env) {
  return Reprocessing_Matrix.matmatmul(env[/* matrix */16], Reprocessing_Matrix.createTranslation(x, y));
}

function rotate(theta, env) {
  return Reprocessing_Matrix.matmatmul(env[/* matrix */16], Reprocessing_Matrix.createRotation(theta));
}

function scale(x, y, env) {
  return Reprocessing_Matrix.matmatmul(env[/* matrix */16], Reprocessing_Matrix.createScaling(x, y));
}

function shear(x, y, env) {
  return Reprocessing_Matrix.matmatmul(env[/* matrix */16], Reprocessing_Matrix.createShearing(x, y));
}

function fill(color, env) {
  var init = env[/* style */13];
  env[/* style */13] = /* record */[
    /* strokeColor */init[/* strokeColor */0],
    /* strokeWeight */init[/* strokeWeight */1],
    /* strokeCap */init[/* strokeCap */2],
    /* fillColor : Some */[color],
    /* rectMode */init[/* rectMode */4]
  ];
  return /* () */0;
}

function noFill(env) {
  var init = env[/* style */13];
  env[/* style */13] = /* record */[
    /* strokeColor */init[/* strokeColor */0],
    /* strokeWeight */init[/* strokeWeight */1],
    /* strokeCap */init[/* strokeCap */2],
    /* fillColor : None */0,
    /* rectMode */init[/* rectMode */4]
  ];
  return /* () */0;
}

function stroke(color, env) {
  var init = env[/* style */13];
  env[/* style */13] = /* record */[
    /* strokeColor : Some */[color],
    /* strokeWeight */init[/* strokeWeight */1],
    /* strokeCap */init[/* strokeCap */2],
    /* fillColor */init[/* fillColor */3],
    /* rectMode */init[/* rectMode */4]
  ];
  return /* () */0;
}

function noStroke(env) {
  var init = env[/* style */13];
  env[/* style */13] = /* record */[
    /* strokeColor : None */0,
    /* strokeWeight */init[/* strokeWeight */1],
    /* strokeCap */init[/* strokeCap */2],
    /* fillColor */init[/* fillColor */3],
    /* rectMode */init[/* rectMode */4]
  ];
  return /* () */0;
}

function strokeWeight(weight, env) {
  var init = env[/* style */13];
  env[/* style */13] = /* record */[
    /* strokeColor */init[/* strokeColor */0],
    /* strokeWeight */weight,
    /* strokeCap */init[/* strokeCap */2],
    /* fillColor */init[/* fillColor */3],
    /* rectMode */init[/* rectMode */4]
  ];
  return /* () */0;
}

function strokeCap(cap, env) {
  var init = env[/* style */13];
  env[/* style */13] = /* record */[
    /* strokeColor */init[/* strokeColor */0],
    /* strokeWeight */init[/* strokeWeight */1],
    /* strokeCap */cap,
    /* fillColor */init[/* fillColor */3],
    /* rectMode */init[/* rectMode */4]
  ];
  return /* () */0;
}

function rectMode(rm, env) {
  var init = env[/* style */13];
  env[/* style */13] = /* record */[
    /* strokeColor */init[/* strokeColor */0],
    /* strokeWeight */init[/* strokeWeight */1],
    /* strokeCap */init[/* strokeCap */2],
    /* fillColor */init[/* fillColor */3],
    /* rectMode */rm
  ];
  return /* () */0;
}

function pushStyle(env) {
  env[/* styleStack */14] = /* :: */[
    env[/* style */13],
    env[/* styleStack */14]
  ];
  return /* () */0;
}

function popStyle(env) {
  var match = env[/* styleStack */14];
  if (match) {
    env[/* style */13] = match[0];
    env[/* styleStack */14] = match[1];
    return /* () */0;
  } else {
    return Pervasives.failwith("Too many `popStyle` without enough `pushStyle`.");
  }
}

function pushMatrix(env) {
  var copy = Reprocessing_Matrix.createIdentity(/* () */0);
  Reprocessing_Matrix.copyInto(env[/* matrix */16], copy);
  env[/* matrixStack */17] = /* :: */[
    copy,
    env[/* matrixStack */17]
  ];
  return /* () */0;
}

function popMatrix(env) {
  var match = env[/* matrixStack */17];
  if (match) {
    env[/* matrix */16] = match[0];
    env[/* matrixStack */17] = match[1];
    return /* () */0;
  } else {
    return Pervasives.failwith("Too many `popMatrix` without enough `pushMatrix`.");
  }
}

function loadImage(filename, $staropt$star, env) {
  var isPixel = $staropt$star ? $staropt$star[0] : /* false */0;
  return Reprocessing_Internal.loadImage(env, filename, isPixel);
}

function subImage(img, param, width, height, param$1, subw, subh, env) {
  var match = img[0];
  if (match) {
    return Reprocessing_Internal.drawImageWithMatrix(match[0], param[0], param[1], width, height, param$1[0], param$1[1], subw, subh, env);
  } else {
    console.log("image not ready yet, just doing nothing :D");
    return /* () */0;
  }
}

function image(img, param, width, height, env) {
  var match = img[0];
  if (match) {
    var img$1 = match[0];
    var imgw = img$1[/* width */3];
    var imgh = img$1[/* height */2];
    var exit = 0;
    var w;
    var h;
    if (width) {
      var w$1 = width[0];
      w = w$1;
      if (height) {
        h = height[0];
        exit = 1;
      } else {
        h = imgh;
        exit = 1;
      }
    } else {
      w = imgw;
      if (height) {
        h = height[0];
        exit = 1;
      } else {
        h = imgh;
        exit = 1;
      }
    }
    if (exit === 1) {
      return Reprocessing_Internal.drawImageWithMatrix(img$1, param[0], param[1], w, h, 0, 0, imgw, imgh, env);
    }
    
  } else {
    console.log("image not ready yet, just doing nothing :D");
    return /* () */0;
  }
}

function linef(p1, p2, env) {
  var match = env[/* style */13][/* strokeColor */0];
  if (match) {
    var color = match[0];
    var partial_arg = env[/* matrix */16];
    var transform = function (param) {
      return Reprocessing_Matrix.matptmul(partial_arg, param);
    };
    var width = env[/* style */13][/* strokeWeight */1];
    var radius = width / 2;
    var project = +(env[/* style */13][/* strokeCap */2] === /* Project */2);
    Reprocessing_Internal.drawLine(Curry._1(transform, p1), Curry._1(transform, p2), color, width, project, env);
    if (env[/* style */13][/* strokeCap */2]) {
      return 0;
    } else {
      Reprocessing_Internal.drawEllipse(env, p1, radius, radius, env[/* matrix */16], color);
      return Reprocessing_Internal.drawEllipse(env, p2, radius, radius, env[/* matrix */16], color);
    }
  } else {
    return /* () */0;
  }
}

function line(param, param$1, env) {
  return linef(/* tuple */[
              param[0],
              param[1]
            ], /* tuple */[
              param$1[0],
              param$1[1]
            ], env);
}

function ellipsef(center, radx, rady, env) {
  var match = env[/* style */13][/* fillColor */3];
  if (match) {
    Reprocessing_Internal.drawEllipse(env, center, radx, rady, env[/* matrix */16], match[0]);
  }
  var match$1 = env[/* style */13][/* strokeColor */0];
  if (match$1) {
    return Reprocessing_Internal.drawArcStroke(env, center, radx, rady, 0, Reprocessing_Constants.tau, /* false */0, /* false */0, env[/* matrix */16], match$1[0], env[/* style */13][/* strokeWeight */1]);
  } else {
    return /* () */0;
  }
}

function ellipse(param, radx, rady, env) {
  return ellipsef(/* tuple */[
              param[0],
              param[1]
            ], radx, rady, env);
}

function quadf(p1, p2, p3, p4, env) {
  var partial_arg = env[/* matrix */16];
  var transform = function (param) {
    return Reprocessing_Matrix.matptmul(partial_arg, param);
  };
  var match_000 = Curry._1(transform, p1);
  var match_001 = Curry._1(transform, p2);
  var match_002 = Curry._1(transform, p3);
  var match_003 = Curry._1(transform, p4);
  var p4$1 = match_003;
  var p3$1 = match_002;
  var p2$1 = match_001;
  var p1$1 = match_000;
  var match = env[/* style */13][/* fillColor */3];
  if (match) {
    Reprocessing_Internal.addRectToGlobalBatch(env, p3$1, p4$1, p2$1, p1$1, match[0]);
  }
  var match$1 = env[/* style */13][/* strokeColor */0];
  if (match$1) {
    var color = match$1[0];
    var width = env[/* style */13][/* strokeWeight */1];
    Reprocessing_Internal.drawLine(p1$1, p2$1, color, width, /* false */0, env);
    Reprocessing_Internal.drawLine(p2$1, p3$1, color, width, /* false */0, env);
    Reprocessing_Internal.drawLine(p3$1, p4$1, color, width, /* false */0, env);
    Reprocessing_Internal.drawLine(p1$1, p4$1, color, width, /* false */0, env);
    var r = width / 2;
    Reprocessing_Internal.drawEllipse(env, p1$1, r, r, Reprocessing_Matrix.identity, color);
    Reprocessing_Internal.drawEllipse(env, p2$1, r, r, Reprocessing_Matrix.identity, color);
    Reprocessing_Internal.drawEllipse(env, p3$1, r, r, Reprocessing_Matrix.identity, color);
    return Reprocessing_Internal.drawEllipse(env, p4$1, r, r, Reprocessing_Matrix.identity, color);
  } else {
    return /* () */0;
  }
}

function quad(param, param$1, param$2, param$3, env) {
  return quadf(/* tuple */[
              param[0],
              param[1]
            ], /* tuple */[
              param$1[0],
              param$1[1]
            ], /* tuple */[
              param$2[0],
              param$2[1]
            ], /* tuple */[
              param$3[0],
              param$3[1]
            ], env);
}

function rectf(param, width, height, env) {
  var y = param[1];
  var x = param[0];
  var match = env[/* style */13][/* rectMode */4];
  switch (match) {
    case 0 : 
        return quadf(/* tuple */[
                    x,
                    y
                  ], /* tuple */[
                    x + width,
                    y
                  ], /* tuple */[
                    x + width,
                    y + height
                  ], /* tuple */[
                    x,
                    y + height
                  ], env);
    case 1 : 
        var x$1 = x - width / 2;
        var y$1 = y - height / 2;
        return quadf(/* tuple */[
                    x$1,
                    y$1
                  ], /* tuple */[
                    x$1 + width,
                    y$1
                  ], /* tuple */[
                    x$1 + width,
                    y$1 + height
                  ], /* tuple */[
                    x$1,
                    y$1 + height
                  ], env);
    case 2 : 
        var x$2 = x - width;
        var y$2 = y - height;
        var width$1 = width * 2;
        var height$1 = height * 2;
        return quadf(/* tuple */[
                    x$2,
                    y$2
                  ], /* tuple */[
                    x$2 + width$1,
                    y$2
                  ], /* tuple */[
                    x$2 + width$1,
                    y$2 + height$1
                  ], /* tuple */[
                    x$2,
                    y$2 + height$1
                  ], env);
    
  }
}

function rect(param, width, height, env) {
  return rectf(/* tuple */[
              param[0],
              param[1]
            ], width, height, env);
}

function bezierPoint(param, param$1, param$2, param$3, t) {
  return /* tuple */[
          Math.pow(1 - t, 3) * param[0] + 3 * Math.pow(1 - t, 2) * t * param$1[0] + 3 * (1 - t) * Math.pow(t, 2) * param$2[0] + Math.pow(t, 3) * param$3[0],
          Math.pow(1 - t, 3) * param[1] + 3 * Math.pow(1 - t, 2) * t * param$1[1] + 3 * (1 - t) * Math.pow(t, 2) * param$2[1] + Math.pow(t, 3) * param$3[1]
        ];
}

function bezierTangent(param, param$1, param$2, param$3, t) {
  var yy3 = param$2[1];
  var xx3 = param$2[0];
  var yy2 = param$1[1];
  var xx2 = param$1[0];
  return /* tuple */[
          -3 * Math.pow(1 - t, 2) * param[0] + 3 * Math.pow(1 - t, 2) * xx2 - 6 * t * (1 - t) * xx2 - 3 * Math.pow(t, 2) * xx3 + 6 * t * (1 - t) * xx3 + 3 * Math.pow(t, 2) * param$3[0],
          -3 * Math.pow(1 - t, 2) * param[1] + 3 * Math.pow(1 - t, 2) * yy2 - 6 * t * (1 - t) * yy2 - 3 * Math.pow(t, 2) * yy3 + 6 * t * (1 - t) * yy3 + 3 * Math.pow(t, 2) * param$3[1]
        ];
}

function bezier(param, param$1, param$2, param$3, env) {
  var yy4 = param$3[1];
  var xx4 = param$3[0];
  var yy3 = param$2[1];
  var xx3 = param$2[0];
  var yy2 = param$1[1];
  var xx2 = param$1[0];
  var yy1 = param[1];
  var xx1 = param[0];
  for(var i = 0; i <= 19; ++i){
    var match = bezierPoint(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], i / 20.0);
    var y1 = match[1];
    var x1 = match[0];
    var match$1 = bezierPoint(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], (i + 1 | 0) / 20.0);
    var y2 = match$1[1];
    var x2 = match$1[0];
    var match$2 = bezierTangent(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], i / 20.0);
    var match$3 = bezierTangent(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], (i + 1 | 0) / 20.0);
    var a1 = Math.atan2(match$2[1], match$2[0]) - Reprocessing_Constants.half_pi;
    var a2 = Math.atan2(match$3[1], match$3[0]) - Reprocessing_Constants.half_pi;
    var strokeWeightf = env[/* style */13][/* strokeWeight */1];
    quadf(/* tuple */[
          x1 + Math.cos(a1) * strokeWeightf / 2,
          y1 + Math.sin(a1) * strokeWeightf / 2
        ], /* tuple */[
          x1 - Math.cos(a1) * strokeWeightf / 2,
          y1 - Math.sin(a1) * strokeWeightf / 2
        ], /* tuple */[
          x2 - Math.cos(a2) * strokeWeightf / 2,
          y2 - Math.sin(a2) * strokeWeightf / 2
        ], /* tuple */[
          x2 + Math.cos(a2) * strokeWeightf / 2,
          y2 + Math.sin(a2) * strokeWeightf / 2
        ], env);
  }
  return /* () */0;
}

function curvePoint(param, param$1, param$2, param$3, t) {
  var yy3 = param$2[1];
  var xx3 = param$2[0];
  var yy2 = param$1[1];
  var xx2 = param$1[0];
  var mx0 = (1 - 0.5) * (xx3 - param[0]);
  var my0 = (1 - 0.5) * (yy3 - param[1]);
  var mx1 = (1 - 0.5) * (param$3[0] - xx2);
  var my1 = (1 - 0.5) * (param$3[1] - yy2);
  return /* tuple */[
          (2 * Math.pow(t, 3) - 3 * Math.pow(t, 2) + 1) * xx2 + (Math.pow(t, 3) - 2 * Math.pow(t, 2) + t) * mx0 + (-2 * Math.pow(t, 3) + 3 * Math.pow(t, 2)) * xx3 + (Math.pow(t, 3) - Math.pow(t, 2)) * mx1,
          (2 * Math.pow(t, 3) - 3 * Math.pow(t, 2) + 1) * yy2 + (Math.pow(t, 3) - 2 * Math.pow(t, 2) + t) * my0 + (-2 * Math.pow(t, 3) + 3 * Math.pow(t, 2)) * yy3 + (Math.pow(t, 3) - Math.pow(t, 2)) * my1
        ];
}

function curveTangent(param, param$1, param$2, param$3, t) {
  var yy3 = param$2[1];
  var xx3 = param$2[0];
  var yy2 = param$1[1];
  var xx2 = param$1[0];
  var mx0 = (1 - 0.5) * (xx3 - param[0]);
  var my0 = (1 - 0.5) * (yy3 - param[1]);
  var mx1 = (1 - 0.5) * (param$3[0] - xx2);
  var my1 = (1 - 0.5) * (param$3[1] - yy2);
  return /* tuple */[
          (6 * Math.pow(t, 2) - 6 * t) * xx2 + (3 * Math.pow(t, 2) - 4 * t + 1) * mx0 + (-6 * Math.pow(t, 2) + 6 * t) * xx3 + (3 * Math.pow(t, 2) - 2 * t) * mx1,
          (6 * Math.pow(t, 2) - 6 * t) * yy2 + (3 * Math.pow(t, 2) - 4 * t + 1) * my0 + (-6 * Math.pow(t, 2) + 6 * t) * yy3 + (3 * Math.pow(t, 2) - 2 * t) * my1
        ];
}

function curve(param, param$1, param$2, param$3, env) {
  var yy4 = param$3[1];
  var xx4 = param$3[0];
  var yy3 = param$2[1];
  var xx3 = param$2[0];
  var yy2 = param$1[1];
  var xx2 = param$1[0];
  var yy1 = param[1];
  var xx1 = param[0];
  for(var i = 0; i <= 19; ++i){
    var match = curvePoint(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], i / 20.0);
    var y1 = match[1];
    var x1 = match[0];
    var match$1 = curvePoint(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], (i + 1 | 0) / 20.0);
    var y2 = match$1[1];
    var x2 = match$1[0];
    var match$2 = curveTangent(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], i / 20.0);
    var match$3 = curveTangent(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], (i + 1 | 0) / 20.0);
    var a1 = Math.atan2(match$2[1], match$2[0]) - Reprocessing_Constants.half_pi;
    var a2 = Math.atan2(match$3[1], match$3[0]) - Reprocessing_Constants.half_pi;
    var strokeWeightf = env[/* style */13][/* strokeWeight */1];
    quadf(/* tuple */[
          x1 + Math.cos(a1) * strokeWeightf / 2,
          y1 + Math.sin(a1) * strokeWeightf / 2
        ], /* tuple */[
          x1 - Math.cos(a1) * strokeWeightf / 2,
          y1 - Math.sin(a1) * strokeWeightf / 2
        ], /* tuple */[
          x2 - Math.cos(a2) * strokeWeightf / 2,
          y2 - Math.sin(a2) * strokeWeightf / 2
        ], /* tuple */[
          x2 + Math.cos(a2) * strokeWeightf / 2,
          y2 + Math.sin(a2) * strokeWeightf / 2
        ], env);
  }
  return /* () */0;
}

function pixelf(param, color, env) {
  var y = param[1];
  var x = param[0];
  var w = env[/* style */13][/* strokeWeight */1];
  return Reprocessing_Internal.addRectToGlobalBatch(env, /* tuple */[
              x + w,
              y + w
            ], /* tuple */[
              x,
              y + w
            ], /* tuple */[
              x + w,
              y
            ], /* tuple */[
              x,
              y
            ], color);
}

function pixel(param, color, env) {
  return pixelf(/* tuple */[
              param[0],
              param[1]
            ], color, env);
}

function trianglef(p1, p2, p3, env) {
  var partial_arg = env[/* matrix */16];
  var transform = function (param) {
    return Reprocessing_Matrix.matptmul(partial_arg, param);
  };
  var match_000 = Curry._1(transform, p1);
  var match_001 = Curry._1(transform, p2);
  var match_002 = Curry._1(transform, p3);
  var p3$1 = match_002;
  var p2$1 = match_001;
  var p1$1 = match_000;
  var match = env[/* style */13][/* fillColor */3];
  if (match) {
    Reprocessing_Internal.drawTriangle(env, p1$1, p2$1, p3$1, match[0]);
  }
  var match$1 = env[/* style */13][/* strokeColor */0];
  if (match$1) {
    var color = match$1[0];
    var width = env[/* style */13][/* strokeWeight */1];
    Reprocessing_Internal.drawLine(p1$1, p2$1, color, width, /* false */0, env);
    Reprocessing_Internal.drawLine(p2$1, p3$1, color, width, /* false */0, env);
    Reprocessing_Internal.drawLine(p1$1, p3$1, color, width, /* false */0, env);
    var r = width / 2;
    Reprocessing_Internal.drawEllipse(env, p1$1, r, r, Reprocessing_Matrix.identity, color);
    Reprocessing_Internal.drawEllipse(env, p2$1, r, r, Reprocessing_Matrix.identity, color);
    return Reprocessing_Internal.drawEllipse(env, p3$1, r, r, Reprocessing_Matrix.identity, color);
  } else {
    return /* () */0;
  }
}

function triangle(param, param$1, param$2, env) {
  return trianglef(/* tuple */[
              param[0],
              param[1]
            ], /* tuple */[
              param$1[0],
              param$1[1]
            ], /* tuple */[
              param$2[0],
              param$2[1]
            ], env);
}

function arcf(center, radx, rady, start, stop, isOpen, isPie, env) {
  var match = env[/* style */13][/* fillColor */3];
  if (match) {
    Reprocessing_Internal.drawArc(env, center, radx, rady, start, stop, isPie, env[/* matrix */16], match[0]);
  }
  var match$1 = env[/* style */13][/* strokeColor */0];
  if (match$1) {
    return Reprocessing_Internal.drawArcStroke(env, center, radx, rady, start, stop, isOpen, isPie, env[/* matrix */16], match$1[0], env[/* style */13][/* strokeWeight */1]);
  } else {
    return /* () */0;
  }
}

function arc(param, radx, rady, start, stop, isOpen, isPie, env) {
  return arcf(/* tuple */[
              param[0],
              param[1]
            ], radx, rady, start, stop, isOpen, isPie, env);
}

function loadFont(filename, $staropt$star, env) {
  var isPixel = $staropt$star ? $staropt$star[0] : /* false */0;
  return Reprocessing_Font.Font[/* parseFontFormat */8](env, filename, isPixel);
}

function text(font, body, param, env) {
  return Reprocessing_Font.Font[/* drawString */11](env, font, body, param[0], param[1]);
}

function clear(env) {
  return Curry._2(Reasongl.Gl[/* clear */39], env[/* gl */2], RGLConstants.color_buffer_bit | RGLConstants.depth_buffer_bit);
}

function background(color, env) {
  clear(env);
  var w = Reprocessing_Env.width(env);
  var h = Reprocessing_Env.height(env);
  return Reprocessing_Internal.addRectToGlobalBatch(env, /* tuple */[
              w,
              h
            ], /* tuple */[
              0,
              h
            ], /* tuple */[
              w,
              0
            ], /* tuple */[
              0,
              0
            ], color);
}

exports.translate    = translate;
exports.rotate       = rotate;
exports.scale        = scale;
exports.shear        = shear;
exports.fill         = fill;
exports.noFill       = noFill;
exports.stroke       = stroke;
exports.noStroke     = noStroke;
exports.strokeWeight = strokeWeight;
exports.strokeCap    = strokeCap;
exports.rectMode     = rectMode;
exports.pushStyle    = pushStyle;
exports.popStyle     = popStyle;
exports.pushMatrix   = pushMatrix;
exports.popMatrix    = popMatrix;
exports.loadImage    = loadImage;
exports.image        = image;
exports.subImage     = subImage;
exports.rectf        = rectf;
exports.rect         = rect;
exports.curve        = curve;
exports.linef        = linef;
exports.line         = line;
exports.ellipsef     = ellipsef;
exports.ellipse      = ellipse;
exports.quadf        = quadf;
exports.quad         = quad;
exports.pixelf       = pixelf;
exports.pixel        = pixel;
exports.trianglef    = trianglef;
exports.triangle     = triangle;
exports.bezier       = bezier;
exports.arcf         = arcf;
exports.arc          = arc;
exports.loadFont     = loadFont;
exports.text         = text;
exports.clear        = clear;
exports.background   = background;
/* Reasongl Not a pure module */


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  };
  return result;
}

function len(_acc, _l) {
  while(true) {
    var l = _l;
    var acc = _acc;
    if (l) {
      _l = l[1];
      _acc = l[0].length + acc | 0;
      continue ;
      
    } else {
      return acc;
    }
  };
}

function fill(arr, _i, _l) {
  while(true) {
    var l = _l;
    var i = _i;
    if (l) {
      var x = l[0];
      var l$1 = x.length;
      var k = i;
      var j = 0;
      while(j < l$1) {
        arr[k] = x[j];
        k = k + 1 | 0;
        j = j + 1 | 0;
      };
      _l = l[1];
      _i = k;
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function caml_array_concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    xs[index] = newval;
    return /* () */0;
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}

function caml_array_blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
    }
    return /* () */0;
  }
}

exports.caml_array_sub    = caml_array_sub;
exports.caml_array_concat = caml_array_concat;
exports.caml_make_vect    = caml_make_vect;
exports.caml_array_blit   = caml_array_blit;
exports.caml_array_get    = caml_array_get;
exports.caml_array_set    = caml_array_set;
/* No side effect */


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Reprocessing_Env = __webpack_require__(4);

function rectCollide(param, param$1) {
  var match = param$1[1];
  var match$1 = param$1[0];
  var b = match$1[1];
  var a = match$1[0];
  var y = param[1];
  var x = param[0];
  if (x >= a && x <= (a + match[0] | 0) && y >= b) {
    return +(y <= (b + match[1] | 0));
  } else {
    return /* false */0;
  }
}

function flDiv(a, b) {
  return a / b;
}

function counter(num) {
  return /* tuple */[
          0,
          num
        ];
}

function dx(param) {
  return Math.cos(param[/* theta */1]) * param[/* mag */0];
}

function dy(param) {
  return Math.sin(param[/* theta */1]) * param[/* mag */0];
}

function vecToPos(vec) {
  return /* tuple */[
          dx(vec),
          dy(vec)
        ];
}

function vecFromPos(param) {
  var dy = param[1];
  var dx = param[0];
  return /* float array */[
          Math.sqrt(dx * dx + dy * dy),
          Math.atan2(dy, dx)
        ];
}

function dist(param) {
  var dy = param[1];
  var dx = param[0];
  return Math.sqrt(dx * dx + dy * dy);
}

function thetaToward(param, param$1) {
  return Math.atan2(param$1[1] - param[1], param$1[0] - param[0]);
}

function posAdd(param, param$1) {
  return /* tuple */[
          param[0] + param$1[0],
          param[1] + param$1[1]
        ];
}

function posSub(param, param$1) {
  return /* tuple */[
          param[0] - param$1[0],
          param[1] - param$1[1]
        ];
}

function vecAdd(v1, v2) {
  return vecFromPos(posAdd(vecToPos(v1), vecToPos(v2)));
}

function vecToward(p1, p2) {
  return vecFromPos(posSub(p2, p1));
}

function scaleVec(param, scale) {
  return /* float array */[
          param[/* mag */0] * scale,
          param[/* theta */1]
        ];
}

function scalePos(param, scale) {
  return /* tuple */[
          param[0] * scale,
          param[1] * scale
        ];
}

function withAlpha(param, alpha) {
  return /* float array */[
          param[/* r */0],
          param[/* g */1],
          param[/* b */2],
          param[/* a */3] * alpha
        ];
}

function collides(p1, p2, d) {
  return +(dist(posSub(p1, p2)) <= d);
}

function increment(env) {
  return Reprocessing_Env.deltaTime(env) * 1000 / 16;
}

function stepTimer(param, env) {
  var max = param[1];
  var current = param[0];
  var time = increment(env);
  if (current + time >= max) {
    return /* tuple */[
            /* tuple */[
              max,
              max
            ],
            /* true */1
          ];
  } else {
    return /* tuple */[
            /* tuple */[
              current + time,
              max
            ],
            /* false */0
          ];
  }
}

function isFullTimer(param) {
  return +(param[0] === param[1]);
}

function loopTimer(param, env) {
  var max = param[1];
  var current = param[0];
  var time = increment(env);
  if (current + time >= max) {
    return /* tuple */[
            /* tuple */[
              0,
              max
            ],
            /* true */1
          ];
  } else {
    return /* tuple */[
            /* tuple */[
              current + time,
              max
            ],
            /* false */0
          ];
  }
}

function countDown(param) {
  var max = param[1];
  var current = param[0];
  if (current <= 1) {
    return /* tuple */[
            /* tuple */[
              0,
              max
            ],
            /* true */1
          ];
  } else {
    return /* tuple */[
            /* tuple */[
              current - 1 | 0,
              max
            ],
            /* false */0
          ];
  }
}

var v0 = /* float array */[
  0,
  0
];

exports.rectCollide = rectCollide;
exports.flDiv       = flDiv;
exports.counter     = counter;
exports.v0          = v0;
exports.dx          = dx;
exports.dy          = dy;
exports.vecToPos    = vecToPos;
exports.vecFromPos  = vecFromPos;
exports.dist        = dist;
exports.thetaToward = thetaToward;
exports.posAdd      = posAdd;
exports.posSub      = posSub;
exports.vecAdd      = vecAdd;
exports.vecToward   = vecToward;
exports.scaleVec    = scaleVec;
exports.scalePos    = scalePos;
exports.withAlpha   = withAlpha;
exports.collides    = collides;
exports.increment   = increment;
exports.stepTimer   = stepTimer;
exports.isFullTimer = isFullTimer;
exports.loopTimer   = loopTimer;
exports.countDown   = countDown;
/* Reprocessing_Env Not a pure module */


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry                   = __webpack_require__(1);
var Caml_int32              = __webpack_require__(3);
var Caml_int64              = __webpack_require__(25);
var Caml_utils              = __webpack_require__(33);
var Caml_builtin_exceptions = __webpack_require__(0);

function caml_failwith(s) {
  throw [
        Caml_builtin_exceptions.failure,
        s
      ];
}

function parse_digit(c) {
  if (c >= 65) {
    if (c >= 97) {
      if (c >= 123) {
        return -1;
      } else {
        return c - 87 | 0;
      }
    } else if (c >= 91) {
      return -1;
    } else {
      return c - 55 | 0;
    }
  } else if (c > 57 || c < 48) {
    return -1;
  } else {
    return c - /* "0" */48 | 0;
  }
}

function int_of_string_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    case 3 : 
        return 2;
    
  }
}

function parse_sign_and_base(s) {
  var sign = 1;
  var base = /* Dec */2;
  var i = 0;
  if (s[i] === "-") {
    sign = -1;
    i = i + 1 | 0;
  }
  var match = s.charCodeAt(i);
  var match$1 = s.charCodeAt(i + 1 | 0);
  if (match === 48) {
    if (match$1 >= 89) {
      if (match$1 !== 98) {
        if (match$1 !== 111) {
          if (match$1 === 120) {
            base = /* Hex */1;
            i = i + 2 | 0;
          }
          
        } else {
          base = /* Oct */0;
          i = i + 2 | 0;
        }
      } else {
        base = /* Bin */3;
        i = i + 2 | 0;
      }
    } else if (match$1 !== 66) {
      if (match$1 !== 79) {
        if (match$1 >= 88) {
          base = /* Hex */1;
          i = i + 2 | 0;
        }
        
      } else {
        base = /* Oct */0;
        i = i + 2 | 0;
      }
    } else {
      base = /* Bin */3;
      i = i + 2 | 0;
    }
  }
  return /* tuple */[
          i,
          sign,
          base
        ];
}

function caml_int_of_string(s) {
  var match = parse_sign_and_base(s);
  var i = match[0];
  var base = int_of_string_base(match[2]);
  var threshold = 4294967295;
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = parse_digit(c);
  if (d < 0 || d >= base) {
    throw [
          Caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
          
        } else {
          var v = parse_digit(a);
          if (v < 0 || v >= base) {
            throw [
                  Caml_builtin_exceptions.failure,
                  "int_of_string"
                ];
          } else {
            var acc$1 = base * acc + v;
            if (acc$1 > threshold) {
              throw [
                    Caml_builtin_exceptions.failure,
                    "int_of_string"
                  ];
            } else {
              _k = k + 1 | 0;
              _acc = acc$1;
              continue ;
              
            }
          }
        }
      }
    };
  };
  var res = match[1] * aux(d, i + 1 | 0);
  var or_res = res | 0;
  if (base === 10 && res !== or_res) {
    throw [
          Caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  return or_res;
}

function caml_int64_of_string(s) {
  var match = parse_sign_and_base(s);
  var hbase = match[2];
  var i = match[0];
  var base = Caml_int64.of_int32(int_of_string_base(hbase));
  var sign = Caml_int64.of_int32(match[1]);
  var threshold;
  switch (hbase) {
    case 0 : 
        threshold = /* int64 */[
          /* hi */536870911,
          /* lo */4294967295
        ];
        break;
    case 1 : 
        threshold = /* int64 */[
          /* hi */268435455,
          /* lo */4294967295
        ];
        break;
    case 2 : 
        threshold = /* int64 */[
          /* hi */429496729,
          /* lo */2576980377
        ];
        break;
    case 3 : 
        threshold = /* int64 */[
          /* hi */2147483647,
          /* lo */4294967295
        ];
        break;
    
  }
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = Caml_int64.of_int32(parse_digit(c));
  if (Caml_int64.lt(d, /* int64 */[
          /* hi */0,
          /* lo */0
        ]) || Caml_int64.ge(d, base)) {
    throw [
          Caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
          
        } else {
          var v = Caml_int64.of_int32(parse_digit(a));
          if (Caml_int64.lt(v, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ]) || Caml_int64.ge(v, base) || Caml_int64.gt(acc, threshold)) {
            throw [
                  Caml_builtin_exceptions.failure,
                  "int64_of_string"
                ];
          } else {
            var acc$1 = Caml_int64.add(Caml_int64.mul(base, acc), v);
            _k = k + 1 | 0;
            _acc = acc$1;
            continue ;
            
          }
        }
      }
    };
  };
  var res = Caml_int64.mul(sign, aux(d, i + 1 | 0));
  var or_res = Caml_int64.or_(res, /* int64 */[
        /* hi */0,
        /* lo */0
      ]);
  if (Caml_int64.eq(base, /* int64 */[
          /* hi */0,
          /* lo */10
        ]) && Caml_int64.neq(res, or_res)) {
    throw [
          Caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  return or_res;
}

function int_of_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = /* record */[
    /* justify */"+",
    /* signstyle */"-",
    /* filter */" ",
    /* alternate : false */0,
    /* base : Dec */2,
    /* signedconv : false */0,
    /* width */0,
    /* uppercase : false */0,
    /* sign */1,
    /* prec */-1,
    /* conv */"f"
  ];
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 : 
                  f[/* base */4] = /* Hex */1;
                  f[/* uppercase */7] = /* true */1;
                  _i = i + 1 | 0;
                  continue ;
                  case 13 : 
              case 14 : 
              case 15 : 
                  exit = 5;
                  break;
              case 12 : 
              case 17 : 
                  exit = 4;
                  break;
              case 23 : 
                  f[/* base */4] = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
                  case 29 : 
                  f[/* base */4] = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
                  case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 16 : 
              case 18 : 
              case 19 : 
              case 20 : 
              case 21 : 
              case 22 : 
              case 24 : 
              case 25 : 
              case 26 : 
              case 27 : 
              case 28 : 
              case 30 : 
              case 31 : 
                  exit = 1;
                  break;
              case 32 : 
                  f[/* base */4] = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
                  
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = /* true */1;
          f[/* uppercase */7] = /* true */1;
          f[/* conv */10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue ;
          
        }
      } else {
        var switcher = c - 32 | 0;
        if (switcher > 25 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 3 : 
                f[/* alternate */3] = /* true */1;
                _i = i + 1 | 0;
                continue ;
                case 0 : 
            case 11 : 
                exit = 2;
                break;
            case 13 : 
                f[/* justify */0] = "-";
                _i = i + 1 | 0;
                continue ;
                case 14 : 
                f[/* prec */9] = 0;
                var j = i + 1 | 0;
                while((function(j){
                    return function () {
                      var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                      return +(w >= 0 && w <= 9);
                    }
                    }(j))()) {
                  f[/* prec */9] = (Caml_int32.imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                  j = j + 1 | 0;
                };
                _i = j;
                continue ;
                case 1 : 
            case 2 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 12 : 
            case 15 : 
                exit = 1;
                break;
            case 16 : 
                f[/* filter */2] = "0";
                _i = i + 1 | 0;
                continue ;
                case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
                exit = 3;
                break;
            
          }
        }
      }
      switch (exit) {
        case 1 : 
            _i = i + 1 | 0;
            continue ;
            case 2 : 
            f[/* signstyle */1] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            case 3 : 
            f[/* width */6] = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return +(w >= 0 && w <= 9);
                }
                }(j$1))()) {
              f[/* width */6] = (Caml_int32.imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            };
            _i = j$1;
            continue ;
            case 4 : 
            f[/* signedconv */5] = /* true */1;
            f[/* base */4] = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
            case 5 : 
            f[/* signedconv */5] = /* true */1;
            f[/* conv */10] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            
      }
    }
  };
}

function finish_formatting(param, rawbuffer) {
  var justify = param[/* justify */0];
  var signstyle = param[/* signstyle */1];
  var filter = param[/* filter */2];
  var alternate = param[/* alternate */3];
  var base = param[/* base */4];
  var signedconv = param[/* signedconv */5];
  var width = param[/* width */6];
  var uppercase = param[/* uppercase */7];
  var sign = param[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base) {
      if (base === /* Hex */1) {
        len = len + 2 | 0;
      }
      
    } else {
      len = len + 1 | 0;
    }
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_int(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? (
        f$1[/* signedconv */5] ? (f$1[/* sign */8] = -1, -i$1) : (i$1 >>> 0)
      ) : i$1;
    var s = i$2.toString(int_of_base(f$1[/* base */4]));
    if (f$1[/* prec */9] >= 0) {
      f$1[/* filter */2] = " ";
      var n = f$1[/* prec */9] - s.length | 0;
      if (n > 0) {
        s = Caml_utils.repeat(n, "0") + s;
      }
      
    }
    return finish_formatting(f$1, s);
  }
}

function caml_int64_format(fmt, x) {
  var f = parse_format(fmt);
  var x$1 = f[/* signedconv */5] && Caml_int64.lt(x, /* int64 */[
        /* hi */0,
        /* lo */0
      ]) ? (f[/* sign */8] = -1, Caml_int64.neg(x)) : x;
  var s = "";
  var match = f[/* base */4];
  switch (match) {
    case 0 : 
        var wbase = /* int64 */[
          /* hi */0,
          /* lo */8
        ];
        var cvtbl = "01234567";
        if (Caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y = Caml_int64.discard_sign(x$1);
          var match$1 = Caml_int64.div_mod(y, wbase);
          var quotient = Caml_int64.add(/* int64 */[
                /* hi */268435456,
                /* lo */0
              ], match$1[0]);
          var modulus = match$1[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          while(Caml_int64.neq(quotient, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$2 = Caml_int64.div_mod(quotient, wbase);
            quotient = match$2[0];
            modulus = match$2[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          };
        } else {
          var match$3 = Caml_int64.div_mod(x$1, wbase);
          var quotient$1 = match$3[0];
          var modulus$1 = match$3[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          while(Caml_int64.neq(quotient$1, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$4 = Caml_int64.div_mod(quotient$1, wbase);
            quotient$1 = match$4[0];
            modulus$1 = match$4[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          };
        }
        break;
    case 1 : 
        s = Caml_int64.to_hex(x$1) + s;
        break;
    case 2 : 
        var wbase$1 = /* int64 */[
          /* hi */0,
          /* lo */10
        ];
        var cvtbl$1 = "0123456789";
        if (Caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y$1 = Caml_int64.discard_sign(x$1);
          var match$5 = Caml_int64.div_mod(y$1, wbase$1);
          var match$6 = Caml_int64.div_mod(Caml_int64.add(/* int64 */[
                    /* hi */0,
                    /* lo */8
                  ], match$5[1]), wbase$1);
          var quotient$2 = Caml_int64.add(Caml_int64.add(/* int64 */[
                    /* hi */214748364,
                    /* lo */3435973836
                  ], match$5[0]), match$6[0]);
          var modulus$2 = match$6[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          while(Caml_int64.neq(quotient$2, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$7 = Caml_int64.div_mod(quotient$2, wbase$1);
            quotient$2 = match$7[0];
            modulus$2 = match$7[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          };
        } else {
          var match$8 = Caml_int64.div_mod(x$1, wbase$1);
          var quotient$3 = match$8[0];
          var modulus$3 = match$8[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          while(Caml_int64.neq(quotient$3, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$9 = Caml_int64.div_mod(quotient$3, wbase$1);
            quotient$3 = match$9[0];
            modulus$3 = match$9[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          };
        }
        break;
    
  }
  if (f[/* prec */9] >= 0) {
    f[/* filter */2] = " ";
    var n = f[/* prec */9] - s.length | 0;
    if (n > 0) {
      s = Caml_utils.repeat(n, "0") + s;
    }
    
  }
  return finish_formatting(f, s);
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e" : 
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" : 
          s = x$1.toFixed(prec);
          break;
      case "g" : 
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            };
            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while((function () {
                      s = x$1.toFixed(p);
                      return +(s.length > (prec$1 + 1 | 0));
                    })()) {
                p = p - 1 | 0;
              };
            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              };
              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
      default:
        
    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting(f, s);
}

var float_of_string = (
  function (s, caml_failwith) {
    var res = +s;
    if ((s.length > 0) && (res === res))
        return res;
    s = s.replace(/_/g, "");
    res = +s;
    if (((s.length > 0) && (res === res)) || /^[+-]?nan$/i.test(s)) {
        return res;
    }
    ;
    if (/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(s)) {
        var pidx = s.indexOf('p');
        pidx = (pidx == -1) ? s.indexOf('P') : pidx;
        var exp = +s.substring(pidx + 1);
        res = +s.substring(0, pidx);
        return res * Math.pow(2, exp);
    }
    if (/^\+?inf(inity)?$/i.test(s))
        return Infinity;
    if (/^-inf(inity)?$/i.test(s))
        return -Infinity;
    caml_failwith("float_of_string");
}

);

function caml_float_of_string(s) {
  return Curry._2(float_of_string, s, caml_failwith);
}

var caml_nativeint_format = caml_format_int;

var caml_int32_format = caml_format_int;

var caml_int32_of_string = caml_int_of_string;

var caml_nativeint_of_string = caml_int_of_string;

exports.caml_format_float        = caml_format_float;
exports.caml_format_int          = caml_format_int;
exports.caml_nativeint_format    = caml_nativeint_format;
exports.caml_int32_format        = caml_int32_format;
exports.caml_float_of_string     = caml_float_of_string;
exports.caml_int64_format        = caml_int64_format;
exports.caml_int_of_string       = caml_int_of_string;
exports.caml_int32_of_string     = caml_int32_of_string;
exports.caml_int64_of_string     = caml_int64_of_string;
exports.caml_nativeint_of_string = caml_nativeint_of_string;
/* float_of_string Not a pure module */


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var List                    = __webpack_require__(7);
var Curry                   = __webpack_require__(1);
var Events                  = __webpack_require__(47);
var GlMatrix                = __webpack_require__(48);
var Caml_int32              = __webpack_require__(3);
var Pervasives              = __webpack_require__(2);
var RGLConstants            = __webpack_require__(20);
var Caml_builtin_exceptions = __webpack_require__(0);

var $$window = (window);

var Document = /* module */[/* window */$$window];

function createCanvas() {
  return document.createElement("canvas");
}

function readFile(filename, cb) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", filename, false);
  rawFile.onreadystatechange = (function () {
      if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0)) {
        return Curry._1(cb, rawFile.responseText);
      } else {
        return 0;
      }
    });
  rawFile.send(null);
  return /* () */0;
}

function saveUserData(key, value) {
  try {
    var string = stringify(value);
    setItem(key, string);
    return /* true */1;
  }
  catch (exn){
    return /* false */0;
  }
}

function loadUserData(key) {
  try {
    var string = setItem(key);
    if (string == null) {
      return /* None */0;
    } else {
      return /* Some */[parse(string)];
    }
  }
  catch (exn){
    return /* None */0;
  }
}

var File = /* module */[
  /* readFile */readFile,
  /* saveUserData */saveUserData,
  /* loadUserData */loadUserData
];

function getWidth($$window) {
  return $$window.width / window.devicePixelRatio | 0;
}

function getHeight($$window) {
  return $$window.height / window.devicePixelRatio | 0;
}

function getPixelWidth($$window) {
  return getWidth($$window) * window.devicePixelRatio | 0;
}

function getPixelHeight($$window) {
  return getHeight($$window) * window.devicePixelRatio | 0;
}

function getPixelScale() {
  return window.devicePixelRatio;
}

function init(_, cb) {
  var canvas = document.createElement("canvas");
  canvas.style.backgroundColor = "black";
  document.body.appendChild(canvas);
  return Curry._1(cb, canvas);
}

function setWindowSize($$window, width, height) {
  $$window.width = width * window.devicePixelRatio | 0;
  $$window.height = height * window.devicePixelRatio | 0;
  $$window.style.width = Pervasives.string_of_int(width) + "px";
  $$window.style.height = Pervasives.string_of_int(height) + "px";
  return /* () */0;
}

function getContext($$window) {
  return $$window.getContext("webgl", {
              preserveDrawingBuffer: /* true */1,
              antialias: /* true */1
            });
}

var Window = /* module */[
  /* getWidth */getWidth,
  /* getHeight */getHeight,
  /* getPixelWidth */getPixelWidth,
  /* getPixelHeight */getPixelHeight,
  /* getPixelScale */getPixelScale,
  /* init */init,
  /* setWindowSize */setWindowSize,
  /* getContext */getContext
];

function getTimeMs() {
  return performance.now();
}

function render(canvas, mouseDown, mouseUp, mouseMove, keyDown, keyUp, windowResize, displayFunc, _) {
  if (mouseDown) {
    var cb = mouseDown[0];
    canvas.addEventListener("mousedown", (function (e) {
            var match = e.button;
            var button;
            if (match > 2 || match < 0) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "reasongl.re",
                      202,
                      19
                    ]
                  ];
            } else {
              button = match;
            }
            var rect = canvas.getBoundingClientRect();
            var x = e.clientX - rect.left | 0;
            var y = e.clientY - rect.top | 0;
            return Curry._4(cb, button, /* MouseDown */0, x, y);
          }));
  }
  if (mouseUp) {
    var cb$1 = mouseUp[0];
    canvas.addEventListener("mouseup", (function (e) {
            var match = e.button;
            var button;
            if (match > 2 || match < 0) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "reasongl.re",
                      224,
                      19
                    ]
                  ];
            } else {
              button = match;
            }
            var rect = canvas.getBoundingClientRect();
            var x = e.clientX - rect.left | 0;
            var y = e.clientY - rect.top | 0;
            return Curry._4(cb$1, button, /* MouseUp */1, x, y);
          }));
  }
  if (mouseMove) {
    var cb$2 = mouseMove[0];
    canvas.addEventListener("mousemove", (function (e) {
            var rect = canvas.getBoundingClientRect();
            var x = e.clientX - rect.left | 0;
            var y = e.clientY - rect.top | 0;
            return Curry._2(cb$2, x, y);
          }));
  }
  var keyLastPressed = [/* [] */0];
  if (keyDown) {
    var cb$3 = keyDown[0];
    $$window.addEventListener("keydown", (function (e) {
            var keycode = e.which;
            var repeat = List.fold_left((function (acc, k) {
                    if (acc) {
                      return /* true */1;
                    } else {
                      return +(k === keycode);
                    }
                  }), /* false */0, keyLastPressed[0]);
            if (!repeat) {
              keyLastPressed[0] = /* :: */[
                keycode,
                keyLastPressed[0]
              ];
            }
            return Curry._2(cb$3, Events.keycodeMap(keycode), repeat);
          }));
  }
  if (keyUp) {
    var cb$4 = keyUp[0];
    $$window.addEventListener("keyup", (function (e) {
            var keycode = e.which;
            keyLastPressed[0] = List.filter((function (k) {
                      return +(k !== keycode);
                    }))(keyLastPressed[0]);
            return Curry._1(cb$4, Events.keycodeMap(keycode));
          }));
  }
  if (windowResize) {
    var cb$5 = windowResize[0];
    $$window.addEventListener("resize", (function () {
            return Curry._1(cb$5, /* () */0);
          }));
  }
  var tick = function (prev, _) {
    var now = Date.now();
    Curry._1(displayFunc, now - prev);
    canvas.__hiddenrafid = window.requestAnimationFrame((function (param) {
            return tick(now, param);
          }));
    return /* () */0;
  };
  var partial_arg = Date.now();
  canvas.__hiddenrafid = window.requestAnimationFrame((function (param) {
          return tick(partial_arg, param);
        }));
  return /* () */0;
}

function shaderSource(context, shader, source) {
  context.shaderSource(shader, "#version 100 \n precision highp float; \n" + source);
  return /* () */0;
}

function create(kind, size) {
  switch (kind) {
    case 0 : 
        return new Float64Array(size);
    case 1 : 
        return new Float32Array(size);
    case 2 : 
        return new Int16Array(size);
    case 3 : 
        return new Uint16Array(size);
    case 4 : 
        return new Int8Array(size);
    case 5 : 
    case 6 : 
        return new Uint8Array(size);
    case 8 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "reasongl.re",
                418,
                17
              ]
            ];
    case 7 : 
    case 9 : 
        return new Int32Array(size);
    
  }
}

function of_array(kind, arr) {
  switch (kind) {
    case 0 : 
        return new Float64Array(arr);
    case 1 : 
        return new Float32Array(arr);
    case 2 : 
        return new Int16Array(arr);
    case 3 : 
        return new Uint16Array(arr);
    case 4 : 
        return new Int8Array(arr);
    case 5 : 
    case 6 : 
        return new Uint8Array(arr);
    case 8 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "reasongl.re",
                431,
                17
              ]
            ];
    case 7 : 
    case 9 : 
        return new Int32Array(arr);
    
  }
}

function unsafe_blit(arr, arr2, offset, _) {
  arr2.set(arr, offset);
  return /* () */0;
}

function sub(arr, offset, len) {
  return arr.subarray(offset, offset + len | 0);
}

function readPixels_RGBA(context, x, y, width, height) {
  var data = new Uint8Array((Caml_int32.imul(width, height) << 2));
  context.readPixels(x, y, width, height, RGLConstants.rgba, RGLConstants.unsigned_byte, data);
  return data;
}

function loadImage(filename, _, callback, _$1) {
  var image = new Image();
  image.src = filename;
  image.addEventListener("load", (function () {
          return Curry._1(callback, /* Some */[image]);
        }));
  return /* () */0;
}

function texImage2DWithImage(context, target, level, image) {
  context.texImage2D(target, level, RGLConstants.rgba, RGLConstants.rgba, RGLConstants.unsigned_byte, image);
  return /* () */0;
}

function texImage2D_RGBA(context, target, level, width, height, border, data) {
  context.texImage2D(target, level, RGLConstants.rgba, width, height, border, RGLConstants.rgba, RGLConstants.unsigned_byte, data);
  return /* () */0;
}

function vertexAttribPointer(context, attribute, size, type_, normalize, stride, offset) {
  var normalize$1 = normalize ? true : false;
  context.vertexAttribPointer(attribute, size, type_, normalize$1, stride, offset);
  return /* () */0;
}

function to_array(a) {
  return a;
}

function Mat4_001() {
  return GlMatrix.mat4.create();
}

function Mat4_002(prim) {
  GlMatrix.mat4.identity(prim);
  return /* () */0;
}

function Mat4_003(prim, prim$1, prim$2) {
  GlMatrix.mat4.translate(prim, prim$1, prim$2);
  return /* () */0;
}

function Mat4_004(prim, prim$1, prim$2) {
  GlMatrix.mat4.scale(prim, prim$1, prim$2);
  return /* () */0;
}

function Mat4_005(prim, prim$1, prim$2, prim$3) {
  GlMatrix.mat4.rotate(prim, prim$1, prim$2, prim$3);
  return /* () */0;
}

function Mat4_006(prim, prim$1, prim$2, prim$3, prim$4, prim$5, prim$6) {
  GlMatrix.mat4.ortho(prim, prim$1, prim$2, prim$3, prim$4, prim$5, prim$6);
  return /* () */0;
}

var Mat4 = /* module */[
  /* to_array */to_array,
  Mat4_001,
  Mat4_002,
  Mat4_003,
  Mat4_004,
  Mat4_005,
  Mat4_006
];

function uniformMatrix4fv(context, $$location, value) {
  context.uniformMatrix4fv($$location, false, value);
  return /* () */0;
}

function getProgramParameter(context, program, paramName) {
  switch (paramName) {
    case 0 : 
        if (context.getProgramParameter(program, context.DELETE_STATUS)) {
          return 1;
        } else {
          return 0;
        }
    case 1 : 
        if (context.getProgramParameter(program, context.LINK_STATUS)) {
          return 1;
        } else {
          return 0;
        }
    case 2 : 
        if (context.getProgramParameter(program, context.VALIDATE_STATUS)) {
          return 1;
        } else {
          return 0;
        }
    
  }
}

function getShaderParameter(context, shader, paramName) {
  switch (paramName) {
    case 0 : 
        if (context.getShaderParameter(shader, context.DELETE_STATUS)) {
          return 1;
        } else {
          return 0;
        }
    case 1 : 
        if (context.getShaderParameter(shader, context.COMPILE_STATUS)) {
          return 1;
        } else {
          return 0;
        }
    case 2 : 
        return context.getShaderParameter(shader, context.SHADER_TYPE);
    
  }
}

var Gl_003 = /* Events : Events */[Events.keycodeMap];

function Gl_006(prim, prim$1, prim$2, prim$3, prim$4) {
  prim.clearColor(prim$1, prim$2, prim$3, prim$4);
  return /* () */0;
}

function Gl_007(prim) {
  return prim.createProgram();
}

function Gl_008(prim, prim$1) {
  return prim.createShader(prim$1);
}

function Gl_009(prim, prim$1, prim$2) {
  prim.attachShader(prim$1, prim$2);
  return /* () */0;
}

function Gl_010(prim, prim$1) {
  prim.deleteShader(prim$1);
  return /* () */0;
}

function Gl_012(prim, prim$1) {
  prim.compileShader(prim$1);
  return /* () */0;
}

function Gl_013(prim, prim$1) {
  prim.linkProgram(prim$1);
  return /* () */0;
}

function Gl_014(prim, prim$1) {
  prim.useProgram(prim$1);
  return /* () */0;
}

function Gl_015(prim) {
  return prim.createBuffer();
}

function Gl_016(prim, prim$1, prim$2) {
  prim.bindBuffer(prim$1, prim$2);
  return /* () */0;
}

function Gl_017(prim) {
  return prim.createTexture();
}

function Gl_018(prim, prim$1) {
  prim.activeTexture(prim$1);
  return /* () */0;
}

function Gl_019(prim, prim$1, prim$2) {
  prim.bindTexture(prim$1, prim$2);
  return /* () */0;
}

function Gl_020(prim, prim$1, prim$2, prim$3) {
  prim.texParameteri(prim$1, prim$2, prim$3);
  return /* () */0;
}

function Gl_021(prim, prim$1) {
  prim.enable(prim$1);
  return /* () */0;
}

function Gl_022(prim, prim$1) {
  prim.disable(prim$1);
  return /* () */0;
}

function Gl_023(prim, prim$1, prim$2) {
  prim.blendFunc(prim$1, prim$2);
  return /* () */0;
}

var Gl_024 = /* Bigarray */[
  create,
  of_array,
  (function (prim) {
      return prim.length;
    }),
  (function (prim, prim$1) {
      prim.set(prim$1);
      return /* () */0;
    }),
  unsafe_blit,
  (function (prim, prim$1) {
      return prim[prim$1];
    }),
  (function (prim, prim$1) {
      return prim[prim$1];
    }),
  (function (prim, prim$1, prim$2) {
      prim[prim$1] = prim$2;
      return /* () */0;
    }),
  (function (prim, prim$1, prim$2) {
      prim[prim$1] = prim$2;
      return /* () */0;
    }),
  sub
];

function Gl_025(prim, prim$1, prim$2, prim$3, prim$4, prim$5, prim$6, prim$7, prim$8, prim$9) {
  prim.texSubImage2D(prim$1, prim$2, prim$3, prim$4, prim$5, prim$6, prim$7, prim$8, prim$9);
  return /* () */0;
}

function Gl_027(prim) {
  return prim.width;
}

function Gl_028(prim) {
  return prim.height;
}

function Gl_031(prim, prim$1, prim$2) {
  prim.uniform1i(prim$1, prim$2);
  return /* () */0;
}

function Gl_032(prim, prim$1, prim$2) {
  prim.uniform1f(prim$1, prim$2);
  return /* () */0;
}

function Gl_033(prim, prim$1, prim$2, prim$3) {
  prim.uniform2f(prim$1, prim$2, prim$3);
  return /* () */0;
}

function Gl_034(prim, prim$1, prim$2, prim$3, prim$4) {
  prim.uniform3f(prim$1, prim$2, prim$3, prim$4);
  return /* () */0;
}

function Gl_035(prim, prim$1, prim$2, prim$3, prim$4, prim$5) {
  prim.uniform4f(prim$1, prim$2, prim$3, prim$4, prim$5);
  return /* () */0;
}

function Gl_037(prim, prim$1, prim$2, prim$3) {
  prim.bufferData(prim$1, prim$2, prim$3);
  return /* () */0;
}

function Gl_038(prim, prim$1, prim$2, prim$3, prim$4) {
  prim.viewport(prim$1, prim$2, prim$3, prim$4);
  return /* () */0;
}

function Gl_039(prim, prim$1) {
  prim.clear(prim$1);
  return /* () */0;
}

function Gl_040(prim, prim$1, prim$2) {
  return prim.getUniformLocation(prim$1, prim$2);
}

function Gl_041(prim, prim$1, prim$2) {
  return prim.getAttribLocation(prim$1, prim$2);
}

function Gl_042(prim, prim$1) {
  prim.enableVertexAttribArray(prim$1);
  return /* () */0;
}

function Gl_044(prim, prim$1, prim$2) {
  prim.vertexAttribDivisor(prim$1, prim$2);
  return /* () */0;
}

function Gl_049(prim, prim$1) {
  return prim.getShaderInfoLog(prim$1);
}

function Gl_050(prim, prim$1) {
  return prim.getProgramInfoLog(prim$1);
}

function Gl_051(prim, prim$1) {
  return prim.getShaderSource(prim$1);
}

function Gl_052(prim, prim$1, prim$2, prim$3) {
  prim.drawArrays(prim$1, prim$2, prim$3);
  return /* () */0;
}

function Gl_053(prim, prim$1, prim$2, prim$3, prim$4) {
  prim.drawElements(prim$1, prim$2, prim$3, prim$4);
  return /* () */0;
}

function Gl_054(prim, prim$1, prim$2, prim$3, prim$4, prim$5) {
  prim.drawElementsInstanced(prim$1, prim$2, prim$3, prim$4, prim$5);
  return /* () */0;
}

var Gl = /* module */[
  /* target */"web",
  /* File */File,
  /* Window */Window,
  Gl_003,
  /* getTimeMs */getTimeMs,
  /* render */render,
  Gl_006,
  Gl_007,
  Gl_008,
  Gl_009,
  Gl_010,
  /* shaderSource */shaderSource,
  Gl_012,
  Gl_013,
  Gl_014,
  Gl_015,
  Gl_016,
  Gl_017,
  Gl_018,
  Gl_019,
  Gl_020,
  Gl_021,
  Gl_022,
  Gl_023,
  Gl_024,
  Gl_025,
  /* readPixels_RGBA */readPixels_RGBA,
  Gl_027,
  Gl_028,
  /* loadImage */loadImage,
  /* texImage2DWithImage */texImage2DWithImage,
  Gl_031,
  Gl_032,
  Gl_033,
  Gl_034,
  Gl_035,
  /* texImage2D_RGBA */texImage2D_RGBA,
  Gl_037,
  Gl_038,
  Gl_039,
  Gl_040,
  Gl_041,
  Gl_042,
  /* vertexAttribPointer */vertexAttribPointer,
  Gl_044,
  /* Mat4 */Mat4,
  /* uniformMatrix4fv */uniformMatrix4fv,
  /* getProgramParameter */getProgramParameter,
  /* getShaderParameter */getShaderParameter,
  Gl_049,
  Gl_050,
  Gl_051,
  Gl_052,
  Gl_053,
  Gl_054
];

exports.Document     = Document;
exports.createCanvas = createCanvas;
exports.Gl           = Gl;
/* window Not a pure module */


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var MyUtils           = __webpack_require__(13);
var Reprocessing      = __webpack_require__(39);
var Reprocessing_Env  = __webpack_require__(4);
var Reprocessing_Draw = __webpack_require__(11);

var isPhone = +(Reprocessing.target === "native-ios");

var phoneScale = isPhone !== 0 ? 2 : 1;

function getPhonePos(env) {
  var w = Reprocessing_Env.width(env) * phoneScale;
  var h = Reprocessing_Env.height(env) * phoneScale;
  return /* tuple */[
          w / 2,
          h / 2
        ];
}

function joystickPos(env) {
  var w = Reprocessing_Env.width(env);
  var h = Reprocessing_Env.height(env);
  return /* tuple */[
          w - 75,
          h - 75
        ];
}

function playerExplosion(player) {
  return /* record */[
          /* pos */player[/* pos */0],
          /* color */player[/* color */1],
          /* timer */MyUtils.counter(30),
          /* size */player[/* size */6]
        ];
}

function enemyExplosion(enemy) {
  return /* record */[
          /* pos */enemy[/* pos */0],
          /* color */enemy[/* color */1],
          /* timer */MyUtils.counter(30),
          /* size */enemy[/* size */2]
        ];
}

function bulletExplosion(item) {
  return /* record */[
          /* pos */item[/* pos */7],
          /* color */item[/* color */0],
          /* timer */MyUtils.counter(30),
          /* size */item[/* size */4]
        ];
}

function posToward(p1, p2, distance) {
  return MyUtils.posAdd(p1, MyUtils.vecToPos(/* float array */[
                  distance,
                  MyUtils.thetaToward(p1, p2)
                ]));
}

function shoot($staropt$star, $staropt$star$1, param, _, self, player) {
  var size = param[1];
  var behavior = $staropt$star ? $staropt$star[0] : /* Normal */0;
  var theta = $staropt$star$1 ? $staropt$star$1[0] : 0;
  var theta$1 = MyUtils.thetaToward(self[/* pos */0], player[/* pos */0]) + theta;
  var pos = MyUtils.vecToPos(/* float array */[
        self[/* size */2] + size + 5,
        theta$1
      ]);
  return /* record */[
          /* color */param[0],
          /* behavior */behavior,
          /* warmup : tuple */[
            0,
            20
          ],
          /* damage */param[3],
          /* size */size,
          /* vel : float array */[
            param[2],
            theta$1
          ],
          /* acc */MyUtils.v0,
          /* pos */MyUtils.posAdd(self[/* pos */0], pos)
        ];
}

function circle(center, rad) {
  return (function (param) {
      return Reprocessing_Draw.ellipsef(center, rad, rad, param);
    });
}

var Utils = 0;

var fullPlayerHealth = 100;

exports.Utils            = Utils;
exports.fullPlayerHealth = fullPlayerHealth;
exports.isPhone          = isPhone;
exports.phoneScale       = phoneScale;
exports.getPhonePos      = getPhonePos;
exports.joystickPos      = joystickPos;
exports.playerExplosion  = playerExplosion;
exports.enemyExplosion   = enemyExplosion;
exports.bulletExplosion  = bulletExplosion;
exports.posToward        = posToward;
exports.shoot            = shoot;
exports.circle           = circle;
/* isPhone Not a pure module */


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var id = [0];

function caml_set_oo_id(b) {
  b[1] = id[0];
  id[0] += 1;
  return b;
}

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function isCamlExceptionOrOpenVariant(e) {
  if (e === undefined) {
    return /* false */0;
  } else if (e.tag === 248) {
    return /* true */1;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return +(slot.tag === 248);
    } else {
      return /* false */0;
    }
  }
}

exports.caml_set_oo_id               = caml_set_oo_id;
exports.get_id                       = get_id;
exports.create                       = create;
exports.isCamlExceptionOrOpenVariant = isCamlExceptionOrOpenVariant;
/* No side effect */


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var $$Set                   = __webpack_require__(54);
var List                    = __webpack_require__(7);
var $$String                = __webpack_require__(19);
var Caml_obj                = __webpack_require__(8);
var Pervasives              = __webpack_require__(2);
var Caml_string             = __webpack_require__(9);
var Caml_builtin_exceptions = __webpack_require__(0);

var compare = Caml_obj.caml_compare;

var KeySet = $$Set.Make(/* module */[/* compare */compare]);

function peekch(param) {
  var i = param[1];
  var str = param[0];
  if (i < str.length) {
    return /* Some */[Caml_string.get(str, i)];
  } else {
    return /* None */0;
  }
}

function popch(param) {
  return /* tuple */[
          param[0],
          param[1] + 1 | 0
        ];
}

function peekn(param, len) {
  var i = param[1];
  var str = param[0];
  if ((i + len | 0) < str.length) {
    return /* Some */[$$String.sub(str, i, len)];
  } else {
    return /* None */0;
  }
}

function skipWhite(param) {
  var str = param[0];
  var len = str.length;
  var _n = param[1];
  while(true) {
    var n = _n;
    if (n >= len) {
      return /* tuple */[
              str,
              n
            ];
    } else if (Caml_string.get(str, n) === /* " " */32) {
      _n = n + 1 | 0;
      continue ;
      
    } else {
      return /* tuple */[
              str,
              n
            ];
    }
  };
}

function popn(param, len) {
  return /* tuple */[
          param[0],
          param[1] + len | 0
        ];
}

function match_(stream, matchstr) {
  var len = matchstr.length;
  var match = peekn(stream, len);
  if (match) {
    var peek = match[0];
    if (peek === matchstr) {
      return popn(stream, len);
    } else {
      return Pervasives.failwith("Could not match '" + (matchstr + ("', got '" + (peek + "' instead."))));
    }
  } else {
    return Pervasives.failwith("Could not match " + matchstr);
  }
}

function charsRemaining(param) {
  return param[0].length - param[1] | 0;
}

function create(str) {
  return /* tuple */[
          str,
          0
        ];
}

var Stream = /* module */[
  /* empty : [] */0,
  /* peekch */peekch,
  /* popch */popch,
  /* peekn */peekn,
  /* skipWhite */skipWhite,
  /* popn */popn,
  /* match_ */match_,
  /* charsRemaining */charsRemaining,
  /* create */create
];

function read(name) {
  var ic = Pervasives.open_in(name);
  var try_read = function () {
    var exit = 0;
    var x;
    try {
      x = Pervasives.input_line(ic);
      exit = 1;
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.end_of_file) {
        return /* None */0;
      } else {
        throw exn;
      }
    }
    if (exit === 1) {
      return /* Some */[x];
    }
    
  };
  var loop = function (_acc) {
    while(true) {
      var acc = _acc;
      var match = try_read(/* () */0);
      if (match) {
        _acc = /* :: */[
          $$String.make(1, /* "\n" */10),
          /* :: */[
            match[0],
            acc
          ]
        ];
        continue ;
        
      } else {
        Pervasives.close_in(ic);
        return List.rev(acc);
      }
    };
  };
  return $$String.concat("", loop(/* [] */0));
}

function append_char(s, c) {
  return s + $$String.make(1, c);
}

function split(str, sep) {
  var _stream = /* tuple */[
    str,
    0
  ];
  var sep$1 = sep;
  var _accstr = "";
  var _acc = /* [] */0;
  while(true) {
    var acc = _acc;
    var accstr = _accstr;
    var stream = _stream;
    var match = peekch(stream);
    if (match) {
      var c = match[0];
      if (c === sep$1) {
        _acc = /* :: */[
          accstr,
          acc
        ];
        _accstr = "";
        _stream = popch(stream);
        continue ;
        
      } else {
        _accstr = append_char(accstr, c);
        _stream = popch(stream);
        continue ;
        
      }
    } else {
      return List.rev(/* :: */[
                  accstr,
                  acc
                ]);
    }
  };
}

var Constants = 0;

var circularBufferSize = 60000;

var vertexSize = 8;

exports.Constants          = Constants;
exports.KeySet             = KeySet;
exports.circularBufferSize = circularBufferSize;
exports.vertexSize         = vertexSize;
exports.Stream             = Stream;
exports.read               = read;
exports.append_char        = append_char;
exports.split              = split;
/* KeySet Not a pure module */


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var List        = __webpack_require__(7);
var Bytes       = __webpack_require__(26);
var Caml_int32  = __webpack_require__(3);
var Caml_string = __webpack_require__(9);

function make(n, c) {
  return Caml_string.bytes_to_string(Bytes.make(n, c));
}

function init(n, f) {
  return Caml_string.bytes_to_string(Bytes.init(n, f));
}

function copy(s) {
  return Caml_string.bytes_to_string(Bytes.copy(Caml_string.bytes_of_string(s)));
}

function sub(s, ofs, len) {
  return Caml_string.bytes_to_string(Bytes.sub(Caml_string.bytes_of_string(s), ofs, len));
}

function concat(sep, l) {
  if (l) {
    var hd = l[0];
    var num = [0];
    var len = [0];
    List.iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = Caml_string.caml_create_string(len[0] + Caml_int32.imul(sep.length, num[0] - 1 | 0) | 0);
    Caml_string.caml_blit_string(hd, 0, r, 0, hd.length);
    var pos = [hd.length];
    List.iter((function (s) {
            Caml_string.caml_blit_string(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            Caml_string.caml_blit_string(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return Caml_string.bytes_to_string(r);
  } else {
    return "";
  }
}

function iter(f, s) {
  return Bytes.iter(f, Caml_string.bytes_of_string(s));
}

function iteri(f, s) {
  return Bytes.iteri(f, Caml_string.bytes_of_string(s));
}

function map(f, s) {
  return Caml_string.bytes_to_string(Bytes.map(f, Caml_string.bytes_of_string(s)));
}

function mapi(f, s) {
  return Caml_string.bytes_to_string(Bytes.mapi(f, Caml_string.bytes_of_string(s)));
}

function is_space(param) {
  var switcher = param - 9 | 0;
  if (switcher > 4 || switcher < 0) {
    if (switcher !== 23) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  } else if (switcher !== 2) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function trim(s) {
  if (s === "" || !(is_space(s.charCodeAt(0)) || is_space(s.charCodeAt(s.length - 1 | 0)))) {
    return s;
  } else {
    return Caml_string.bytes_to_string(Bytes.trim(Caml_string.bytes_of_string(s)));
  }
}

function escaped(s) {
  var needs_escape = function (_i) {
    while(true) {
      var i = _i;
      if (i >= s.length) {
        return /* false */0;
      } else {
        var match = s.charCodeAt(i);
        if (match >= 32) {
          var switcher = match - 34 | 0;
          if (switcher > 58 || switcher < 0) {
            if (switcher >= 93) {
              return /* true */1;
            } else {
              _i = i + 1 | 0;
              continue ;
              
            }
          } else if (switcher > 57 || switcher < 1) {
            return /* true */1;
          } else {
            _i = i + 1 | 0;
            continue ;
            
          }
        } else {
          return /* true */1;
        }
      }
    };
  };
  if (needs_escape(0)) {
    return Caml_string.bytes_to_string(Bytes.escaped(Caml_string.bytes_of_string(s)));
  } else {
    return s;
  }
}

function index(s, c) {
  return Bytes.index(Caml_string.bytes_of_string(s), c);
}

function rindex(s, c) {
  return Bytes.rindex(Caml_string.bytes_of_string(s), c);
}

function index_from(s, i, c) {
  return Bytes.index_from(Caml_string.bytes_of_string(s), i, c);
}

function rindex_from(s, i, c) {
  return Bytes.rindex_from(Caml_string.bytes_of_string(s), i, c);
}

function contains(s, c) {
  return Bytes.contains(Caml_string.bytes_of_string(s), c);
}

function contains_from(s, i, c) {
  return Bytes.contains_from(Caml_string.bytes_of_string(s), i, c);
}

function rcontains_from(s, i, c) {
  return Bytes.rcontains_from(Caml_string.bytes_of_string(s), i, c);
}

function uppercase(s) {
  return Caml_string.bytes_to_string(Bytes.uppercase(Caml_string.bytes_of_string(s)));
}

function lowercase(s) {
  return Caml_string.bytes_to_string(Bytes.lowercase(Caml_string.bytes_of_string(s)));
}

function capitalize(s) {
  return Caml_string.bytes_to_string(Bytes.capitalize(Caml_string.bytes_of_string(s)));
}

function uncapitalize(s) {
  return Caml_string.bytes_to_string(Bytes.uncapitalize(Caml_string.bytes_of_string(s)));
}

var compare = Caml_string.caml_string_compare;

var fill = Bytes.fill;

var blit = Bytes.blit_string;

exports.make           = make;
exports.init           = init;
exports.copy           = copy;
exports.sub            = sub;
exports.fill           = fill;
exports.blit           = blit;
exports.concat         = concat;
exports.iter           = iter;
exports.iteri          = iteri;
exports.map            = map;
exports.mapi           = mapi;
exports.trim           = trim;
exports.escaped        = escaped;
exports.index          = index;
exports.rindex         = rindex;
exports.index_from     = index_from;
exports.rindex_from    = rindex_from;
exports.contains       = contains;
exports.contains_from  = contains_from;
exports.rcontains_from = rcontains_from;
exports.uppercase      = uppercase;
exports.lowercase      = lowercase;
exports.capitalize     = capitalize;
exports.uncapitalize   = uncapitalize;
exports.compare        = compare;
/* No side effect */


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE



var triangles = 4;

var triangle_strip = 5;

var texture0 = 33984;

var texture1 = 33985;

var texture2 = 33986;

var texture_2d = 3553;

var blend = 3042;

var texture_wrap_s = 10242;

var texture_wrap_t = 10243;

var clamp_to_edge = 33071;

var src_alpha = 770;

var one_minus_src_alpha = 771;

var dst_alpha = 772;

var depth_test = 2929;

var rgb = 6407;

var rgba = 6408;

var triangle_fan = 6;

var array_buffer = 34962;

var element_array_buffer = 34963;

var array_buffer_binding = 34964;

var element_array_buffer_binding = 34965;

var stream_draw = 35040;

var static_draw = 35044;

var dynamic_draw = 35048;

var buffer_size = 34660;

var buffer_usage = 34661;

var float_ = 5126;

var unsigned_int = 5125;

var current_vertex_attrib = 34342;

var fragment_shader = 35632;

var vertex_shader = 35633;

var max_vertex_attribs = 34921;

var max_vertex_uniform_vectors = 36347;

var max_varying_vectors = 36348;

var max_combined_texture_image_units = 35661;

var max_vertex_texture_image_units = 35660;

var max_texture_image_units = 34930;

var max_fragment_uniform_vectors = 36349;

var shader_type = 35663;

var delete_status = 35712;

var link_status = 35714;

var validate_status = 35715;

var attached_shaders = 35717;

var active_uniforms = 35718;

var active_attributes = 35721;

var shading_language_version = 35724;

var current_program = 35725;

var compile_status = 35713;

var vendor = 7936;

var renderer = 7937;

var version = 7938;

var float_vec2 = 35664;

var float_vec3 = 35665;

var float_vec4 = 35666;

var int_vec2 = 35667;

var int_vec3 = 35668;

var int_vec4 = 35669;

var bool_ = 35670;

var bool_vec2 = 35671;

var bool_vec3 = 35672;

var bool_vec4 = 35673;

var float_mat2 = 35674;

var float_mat3 = 35675;

var float_mat4 = 35676;

var sampler_2d = 35678;

var sampler_cube = 35680;

var unpack_flip_y_webgl = 37440;

var unpack_premultiply_alpha_webgl = 37441;

var context_lost_webgl = 37442;

var unpack_colorspace_conversion_webgl = 37443;

var browser_default_webgl = 37444;

var vertex_attrib_array_enabled = 34338;

var vertex_attrib_array_size = 34339;

var vertex_attrib_array_stride = 34340;

var vertex_attrib_array_type = 34341;

var vertex_attrib_array_normalized = 34922;

var vertex_attrib_array_pointer = 34373;

var vertex_attrib_array_buffer_binding = 34975;

var depth_buffer_bit = 256;

var stencil_buffer_bit = 1024;

var color_buffer_bit = 16384;

var unsigned_short = 5123;

var unsigned_byte = 5121;

var texture_mag_filter = 10240;

var texture_min_filter = 10241;

var nearest = 9728;

var linear = 9729;

var nearest_mipmap_nearest = 9984;

var linear_mipmap_nearest = 9985;

var nearest_mipmap_linear = 9986;

var linear_mipmap_linear = 9987;

exports.triangles                          = triangles;
exports.triangle_strip                     = triangle_strip;
exports.texture0                           = texture0;
exports.texture1                           = texture1;
exports.texture2                           = texture2;
exports.texture_2d                         = texture_2d;
exports.blend                              = blend;
exports.texture_wrap_s                     = texture_wrap_s;
exports.texture_wrap_t                     = texture_wrap_t;
exports.clamp_to_edge                      = clamp_to_edge;
exports.src_alpha                          = src_alpha;
exports.one_minus_src_alpha                = one_minus_src_alpha;
exports.dst_alpha                          = dst_alpha;
exports.depth_test                         = depth_test;
exports.rgb                                = rgb;
exports.rgba                               = rgba;
exports.triangle_fan                       = triangle_fan;
exports.array_buffer                       = array_buffer;
exports.element_array_buffer               = element_array_buffer;
exports.array_buffer_binding               = array_buffer_binding;
exports.element_array_buffer_binding       = element_array_buffer_binding;
exports.stream_draw                        = stream_draw;
exports.static_draw                        = static_draw;
exports.dynamic_draw                       = dynamic_draw;
exports.buffer_size                        = buffer_size;
exports.buffer_usage                       = buffer_usage;
exports.float_                             = float_;
exports.unsigned_int                       = unsigned_int;
exports.current_vertex_attrib              = current_vertex_attrib;
exports.fragment_shader                    = fragment_shader;
exports.vertex_shader                      = vertex_shader;
exports.max_vertex_attribs                 = max_vertex_attribs;
exports.max_vertex_uniform_vectors         = max_vertex_uniform_vectors;
exports.max_varying_vectors                = max_varying_vectors;
exports.max_combined_texture_image_units   = max_combined_texture_image_units;
exports.max_vertex_texture_image_units     = max_vertex_texture_image_units;
exports.max_texture_image_units            = max_texture_image_units;
exports.max_fragment_uniform_vectors       = max_fragment_uniform_vectors;
exports.shader_type                        = shader_type;
exports.delete_status                      = delete_status;
exports.link_status                        = link_status;
exports.validate_status                    = validate_status;
exports.attached_shaders                   = attached_shaders;
exports.active_uniforms                    = active_uniforms;
exports.active_attributes                  = active_attributes;
exports.shading_language_version           = shading_language_version;
exports.current_program                    = current_program;
exports.compile_status                     = compile_status;
exports.vendor                             = vendor;
exports.renderer                           = renderer;
exports.version                            = version;
exports.float_vec2                         = float_vec2;
exports.float_vec3                         = float_vec3;
exports.float_vec4                         = float_vec4;
exports.int_vec2                           = int_vec2;
exports.int_vec3                           = int_vec3;
exports.int_vec4                           = int_vec4;
exports.bool_                              = bool_;
exports.bool_vec2                          = bool_vec2;
exports.bool_vec3                          = bool_vec3;
exports.bool_vec4                          = bool_vec4;
exports.float_mat2                         = float_mat2;
exports.float_mat3                         = float_mat3;
exports.float_mat4                         = float_mat4;
exports.sampler_2d                         = sampler_2d;
exports.sampler_cube                       = sampler_cube;
exports.unpack_flip_y_webgl                = unpack_flip_y_webgl;
exports.unpack_premultiply_alpha_webgl     = unpack_premultiply_alpha_webgl;
exports.context_lost_webgl                 = context_lost_webgl;
exports.unpack_colorspace_conversion_webgl = unpack_colorspace_conversion_webgl;
exports.browser_default_webgl              = browser_default_webgl;
exports.vertex_attrib_array_enabled        = vertex_attrib_array_enabled;
exports.vertex_attrib_array_size           = vertex_attrib_array_size;
exports.vertex_attrib_array_stride         = vertex_attrib_array_stride;
exports.vertex_attrib_array_type           = vertex_attrib_array_type;
exports.vertex_attrib_array_normalized     = vertex_attrib_array_normalized;
exports.vertex_attrib_array_pointer        = vertex_attrib_array_pointer;
exports.vertex_attrib_array_buffer_binding = vertex_attrib_array_buffer_binding;
exports.depth_buffer_bit                   = depth_buffer_bit;
exports.stencil_buffer_bit                 = stencil_buffer_bit;
exports.color_buffer_bit                   = color_buffer_bit;
exports.unsigned_short                     = unsigned_short;
exports.unsigned_byte                      = unsigned_byte;
exports.texture_mag_filter                 = texture_mag_filter;
exports.texture_min_filter                 = texture_min_filter;
exports.nearest                            = nearest;
exports.linear                             = linear;
exports.nearest_mipmap_nearest             = nearest_mipmap_nearest;
exports.linear_mipmap_nearest              = linear_mipmap_nearest;
exports.nearest_mipmap_linear              = nearest_mipmap_linear;
exports.linear_mipmap_linear               = linear_mipmap_linear;
/* No side effect */


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Caml_array              = __webpack_require__(12);
var Pervasives              = __webpack_require__(2);
var Caml_builtin_exceptions = __webpack_require__(0);

var identity = /* float array */[
  1,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  1
];

function createIdentity() {
  return /* float array */[
          1,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          1
        ];
}

function createTranslation(dx, dy) {
  return /* float array */[
          1,
          0,
          dx,
          0,
          1,
          dy,
          0,
          0,
          1
        ];
}

function createRotation(theta) {
  return /* float array */[
          Math.cos(theta),
          -Math.sin(theta),
          0,
          Math.sin(theta),
          Math.cos(theta),
          0,
          0,
          0,
          1
        ];
}

function createScaling(sx, sy) {
  return /* float array */[
          sx,
          0,
          0,
          0,
          sy,
          0,
          0,
          0,
          1
        ];
}

function createShearing(sx, sy) {
  return /* float array */[
          1,
          sx,
          0,
          sy,
          1,
          0,
          0,
          0,
          1
        ];
}

function copyInto(src, dst) {
  Caml_array.caml_array_set(dst, 0, Caml_array.caml_array_get(src, 0));
  Caml_array.caml_array_set(dst, 1, Caml_array.caml_array_get(src, 1));
  Caml_array.caml_array_set(dst, 2, Caml_array.caml_array_get(src, 2));
  Caml_array.caml_array_set(dst, 3, Caml_array.caml_array_get(src, 3));
  Caml_array.caml_array_set(dst, 4, Caml_array.caml_array_get(src, 4));
  Caml_array.caml_array_set(dst, 5, Caml_array.caml_array_get(src, 5));
  Caml_array.caml_array_set(dst, 6, Caml_array.caml_array_get(src, 6));
  Caml_array.caml_array_set(dst, 7, Caml_array.caml_array_get(src, 7));
  return Caml_array.caml_array_set(dst, 8, Caml_array.caml_array_get(src, 8));
}

function matmatmul(mat1, mat2) {
  if (mat1.length !== 9) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "Reprocessing_Matrix.re",
            56,
            9
          ]
        ];
  } else {
    var m0 = mat1[0];
    var m1 = mat1[1];
    var m2 = mat1[2];
    var m3 = mat1[3];
    var m4 = mat1[4];
    var m5 = mat1[5];
    var m6 = mat1[6];
    var m7 = mat1[7];
    var m8 = mat1[8];
    if (mat2.length !== 9) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "Reprocessing_Matrix.re",
              56,
              9
            ]
          ];
    } else {
      var ma = mat2[0];
      var mb = mat2[1];
      var mc = mat2[2];
      var md = mat2[3];
      var me = mat2[4];
      var mf = mat2[5];
      var mg = mat2[6];
      var mh = mat2[7];
      var mi = mat2[8];
      Caml_array.caml_array_set(mat1, 0, ma * m0 + md * m1 + mg * m2);
      Caml_array.caml_array_set(mat1, 1, mb * m0 + me * m1 + mh * m2);
      Caml_array.caml_array_set(mat1, 2, mc * m0 + mf * m1 + mi * m2);
      Caml_array.caml_array_set(mat1, 3, ma * m3 + md * m4 + mg * m5);
      Caml_array.caml_array_set(mat1, 4, mb * m3 + me * m4 + mh * m5);
      Caml_array.caml_array_set(mat1, 5, mc * m3 + mf * m4 + mi * m5);
      Caml_array.caml_array_set(mat1, 6, ma * m6 + md * m7 + mg * m8);
      Caml_array.caml_array_set(mat1, 7, mb * m6 + me * m7 + mh * m8);
      return Caml_array.caml_array_set(mat1, 8, mc * m6 + mf * m7 + mi * m8);
    }
  }
}

function matvecmul(m, v) {
  var a = Caml_array.caml_array_get(v, 0);
  var b = Caml_array.caml_array_get(v, 1);
  var c = Caml_array.caml_array_get(v, 2);
  Caml_array.caml_array_set(v, 0, a * Caml_array.caml_array_get(m, 0) + b * Caml_array.caml_array_get(m, 1) + c * Caml_array.caml_array_get(m, 2));
  Caml_array.caml_array_set(v, 1, a * Caml_array.caml_array_get(m, 3) + b * Caml_array.caml_array_get(m, 4) + c * Caml_array.caml_array_get(m, 5));
  return Caml_array.caml_array_set(v, 2, a * Caml_array.caml_array_get(m, 6) + b * Caml_array.caml_array_get(m, 7) + c * Caml_array.caml_array_get(m, 8));
}

function matptmul(m, param) {
  var y = param[1];
  var x = param[0];
  return /* tuple */[
          x * Caml_array.caml_array_get(m, 0) + y * Caml_array.caml_array_get(m, 1) + Caml_array.caml_array_get(m, 2),
          x * Caml_array.caml_array_get(m, 3) + y * Caml_array.caml_array_get(m, 4) + Caml_array.caml_array_get(m, 5)
        ];
}

function matinv(mat) {
  if (mat.length !== 9) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "Reprocessing_Matrix.re",
            136,
            9
          ]
        ];
  } else {
    var m00 = mat[0];
    var m01 = mat[1];
    var m02 = mat[2];
    var m10 = mat[3];
    var m11 = mat[4];
    var m12 = mat[5];
    var m20 = mat[6];
    var m21 = mat[7];
    var m22 = mat[8];
    var det = m00 * m11 * m22 + m01 * m12 * m20 + m02 * m10 * m21 - m00 * m12 * m21 - m01 * m10 * m22 - m02 * m11 * m20;
    if (det === 0) {
      Pervasives.invalid_arg("The current transform matrix cannot be inverted");
    }
    var invdet = 1 / det;
    var adj00 = m11 * m22 - m12 * m21;
    var adj01 = -(m01 * m22 - m02 * m21);
    var adj02 = m01 * m12 - m02 * m11;
    var adj10 = -(m10 * m22 - m12 * m20);
    var adj11 = m00 * m22 - m02 * m20;
    var adj12 = -(m00 * m12 - m02 * m10);
    var adj20 = m10 * m21 - m11 * m20;
    var adj21 = -(m00 * m21 - m01 * m20);
    var adj22 = m00 * m11 - m01 * m10;
    return /* float array */[
            invdet * adj00,
            invdet * adj01,
            invdet * adj02,
            invdet * adj10,
            invdet * adj11,
            invdet * adj12,
            invdet * adj20,
            invdet * adj21,
            invdet * adj22
          ];
  }
}

exports.identity          = identity;
exports.createIdentity    = createIdentity;
exports.createTranslation = createTranslation;
exports.createRotation    = createRotation;
exports.createScaling     = createScaling;
exports.createShearing    = createShearing;
exports.copyInto          = copyInto;
exports.matmatmul         = matmatmul;
exports.matvecmul         = matvecmul;
exports.matptmul          = matptmul;
exports.matinv            = matinv;
/* No side effect */


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Curry                  = __webpack_require__(1);
var Reasongl               = __webpack_require__(15);
var Caml_int32             = __webpack_require__(3);
var Pervasives             = __webpack_require__(2);
var RGLConstants           = __webpack_require__(20);
var Reprocessing_Common    = __webpack_require__(18);
var Reprocessing_Matrix    = __webpack_require__(21);
var Reprocessing_Shaders   = __webpack_require__(55);
var Reprocessing_Constants = __webpack_require__(6);

function getProgram(context, vertexShaderSource, fragmentShaderSource) {
  var vertexShader = Curry._2(Reasongl.Gl[/* createShader */8], context, RGLConstants.vertex_shader);
  Reasongl.Gl[/* shaderSource */11](context, vertexShader, vertexShaderSource);
  Curry._2(Reasongl.Gl[/* compileShader */12], context, vertexShader);
  var compiledCorrectly = +(Reasongl.Gl[/* getShaderParameter */48](context, vertexShader, /* Compile_status */1) === 1);
  if (compiledCorrectly) {
    var fragmentShader = Curry._2(Reasongl.Gl[/* createShader */8], context, RGLConstants.fragment_shader);
    Reasongl.Gl[/* shaderSource */11](context, fragmentShader, fragmentShaderSource);
    Curry._2(Reasongl.Gl[/* compileShader */12], context, fragmentShader);
    var compiledCorrectly$1 = +(Reasongl.Gl[/* getShaderParameter */48](context, fragmentShader, /* Compile_status */1) === 1);
    if (compiledCorrectly$1) {
      var program = Curry._1(Reasongl.Gl[/* createProgram */7], context);
      Curry._3(Reasongl.Gl[/* attachShader */9], context, program, vertexShader);
      Curry._2(Reasongl.Gl[/* deleteShader */10], context, vertexShader);
      Curry._3(Reasongl.Gl[/* attachShader */9], context, program, fragmentShader);
      Curry._2(Reasongl.Gl[/* deleteShader */10], context, fragmentShader);
      Curry._2(Reasongl.Gl[/* linkProgram */13], context, program);
      var linkedCorrectly = +(Reasongl.Gl[/* getProgramParameter */47](context, program, /* Link_status */1) === 1);
      if (linkedCorrectly) {
        return /* Some */[program];
      } else {
        console.log("Linking error: " + Curry._2(Reasongl.Gl[/* getProgramInfoLog */50], context, program));
        return /* None */0;
      }
    } else {
      console.log("Fragment shader error: " + Curry._2(Reasongl.Gl[/* getShaderInfoLog */49], context, fragmentShader));
      return /* None */0;
    }
  } else {
    console.log("Vertex shader error: " + Curry._2(Reasongl.Gl[/* getShaderInfoLog */49], context, vertexShader));
    return /* None */0;
  }
}

function createCanvas($$window, height, width) {
  Curry._3(Reasongl.Gl[/* Window */2][/* setWindowSize */6], $$window, width, height);
  var context = Curry._1(Reasongl.Gl[/* Window */2][/* getContext */7], $$window);
  Curry._5(Reasongl.Gl[/* viewport */38], context, -1, -1, width, height);
  Curry._5(Reasongl.Gl[/* clearColor */6], context, 0, 0, 0, 1);
  Curry._2(Reasongl.Gl[/* clear */39], context, RGLConstants.color_buffer_bit | RGLConstants.depth_buffer_bit);
  var camera = /* record */[/* projectionMatrix */Curry._1(Reasongl.Gl[/* Mat4 */45][/* create */1], /* () */0)];
  var vertexBuffer = Curry._1(Reasongl.Gl[/* createBuffer */15], context);
  var elementBuffer = Curry._1(Reasongl.Gl[/* createBuffer */15], context);
  var match = getProgram(context, Reprocessing_Shaders.vertexShaderSource, Reprocessing_Shaders.fragmentShaderSource);
  var program = match ? match[0] : Pervasives.failwith("Could not create the program and/or the shaders. Aborting.");
  Curry._2(Reasongl.Gl[/* useProgram */14], context, program);
  var aVertexPosition = Curry._3(Reasongl.Gl[/* getAttribLocation */41], context, program, "aVertexPosition");
  Curry._2(Reasongl.Gl[/* enableVertexAttribArray */42], context, aVertexPosition);
  var aVertexColor = Curry._3(Reasongl.Gl[/* getAttribLocation */41], context, program, "aVertexColor");
  Curry._2(Reasongl.Gl[/* enableVertexAttribArray */42], context, aVertexColor);
  var pMatrixUniform = Curry._3(Reasongl.Gl[/* getUniformLocation */40], context, program, "uPMatrix");
  Reasongl.Gl[/* uniformMatrix4fv */46](context, pMatrixUniform, camera[/* projectionMatrix */0]);
  var aTextureCoord = Curry._3(Reasongl.Gl[/* getAttribLocation */41], context, program, "aTextureCoord");
  Curry._2(Reasongl.Gl[/* enableVertexAttribArray */42], context, aTextureCoord);
  var texture = Curry._1(Reasongl.Gl[/* createTexture */17], context);
  Curry._2(Reasongl.Gl[/* activeTexture */18], context, RGLConstants.texture0);
  Curry._3(Reasongl.Gl[/* bindTexture */19], context, RGLConstants.texture_2d, texture);
  var uSampler = Curry._3(Reasongl.Gl[/* getUniformLocation */40], context, program, "uSampler");
  Reasongl.Gl[/* texImage2D_RGBA */36](context, RGLConstants.texture_2d, 0, 1, 1, 0, Curry._2(Reasongl.Gl[/* Bigarray */24][/* of_array */1], /* Uint8 */5, /* int array */[
            0,
            0,
            0,
            0
          ]));
  Curry._4(Reasongl.Gl[/* texParameteri */20], context, RGLConstants.texture_2d, RGLConstants.texture_mag_filter, RGLConstants.linear);
  Curry._4(Reasongl.Gl[/* texParameteri */20], context, RGLConstants.texture_2d, RGLConstants.texture_min_filter, RGLConstants.linear_mipmap_nearest);
  Curry._2(Reasongl.Gl[/* enable */21], context, RGLConstants.blend);
  Curry._3(Reasongl.Gl[/* blendFunc */23], context, RGLConstants.src_alpha, RGLConstants.one_minus_src_alpha);
  Curry._7(Reasongl.Gl[/* Mat4 */45][/* ortho */6], camera[/* projectionMatrix */0], 0, width, height, 0, 0, 1);
  return /* record */[
          /* camera */camera,
          /* window */$$window,
          /* gl */context,
          /* vertexBuffer */vertexBuffer,
          /* elementBuffer */elementBuffer,
          /* aVertexColor */aVertexColor,
          /* aTextureCoord */aTextureCoord,
          /* aVertexPosition */aVertexPosition,
          /* pMatrixUniform */pMatrixUniform,
          /* uSampler */uSampler,
          /* batch : record */[
            /* vertexArray */Curry._2(Reasongl.Gl[/* Bigarray */24][/* create */0], /* Float32 */1, Caml_int32.imul(Reprocessing_Common.circularBufferSize, Reprocessing_Common.vertexSize)),
            /* elementArray */Curry._2(Reasongl.Gl[/* Bigarray */24][/* create */0], /* Uint16 */3, Reprocessing_Common.circularBufferSize),
            /* vertexPtr */0,
            /* elementPtr */0,
            /* currTex : None */0,
            /* nullTex */texture
          ],
          /* keyboard : record */[
            /* keyCode : Nothing */65,
            /* pressed */Reprocessing_Common.KeySet[/* empty */0],
            /* released */Reprocessing_Common.KeySet[/* empty */0],
            /* down */Reprocessing_Common.KeySet[/* empty */0]
          ],
          /* mouse : record */[
            /* pos : tuple */[
              0,
              0
            ],
            /* prevPos : tuple */[
              0,
              0
            ],
            /* pressed : false */0
          ],
          /* style : record */[
            /* strokeColor : None */0,
            /* strokeWeight */3,
            /* strokeCap : Round */0,
            /* fillColor : Some */[/* float array */[
                0,
                0,
                0,
                1
              ]],
            /* rectMode : Corner */0
          ],
          /* styleStack : [] */0,
          /* frame : record */[
            /* count */1,
            /* rate */10,
            /* deltaTime */0.001
          ],
          /* matrix */Reprocessing_Matrix.createIdentity(/* () */0),
          /* matrixStack : [] */0,
          /* size : record */[
            /* height */height,
            /* width */width,
            /* resizeable : true */1
          ]
        ];
}

function drawGeometry(vertexArray, elementArray, mode, count, textureBuffer, env) {
  Curry._3(Reasongl.Gl[/* bindBuffer */16], env[/* gl */2], RGLConstants.array_buffer, env[/* vertexBuffer */3]);
  Curry._4(Reasongl.Gl[/* bufferData */37], env[/* gl */2], RGLConstants.array_buffer, vertexArray, RGLConstants.stream_draw);
  Reasongl.Gl[/* vertexAttribPointer */43](env[/* gl */2], env[/* aVertexPosition */7], 2, RGLConstants.float_, /* false */0, (Reprocessing_Common.vertexSize << 2), 0);
  Reasongl.Gl[/* vertexAttribPointer */43](env[/* gl */2], env[/* aVertexColor */5], 4, RGLConstants.float_, /* false */0, (Reprocessing_Common.vertexSize << 2), 8);
  Reasongl.Gl[/* vertexAttribPointer */43](env[/* gl */2], env[/* aTextureCoord */6], 2, RGLConstants.float_, /* false */0, (Reprocessing_Common.vertexSize << 2), 24);
  Curry._3(Reasongl.Gl[/* uniform1i */31], env[/* gl */2], env[/* uSampler */9], 0);
  Curry._3(Reasongl.Gl[/* bindBuffer */16], env[/* gl */2], RGLConstants.element_array_buffer, env[/* elementBuffer */4]);
  Curry._4(Reasongl.Gl[/* bufferData */37], env[/* gl */2], RGLConstants.element_array_buffer, elementArray, RGLConstants.stream_draw);
  Curry._3(Reasongl.Gl[/* bindTexture */19], env[/* gl */2], RGLConstants.texture_2d, textureBuffer);
  return Curry._5(Reasongl.Gl[/* drawElements */53], env[/* gl */2], mode, count, RGLConstants.unsigned_short, 0);
}

function flushGlobalBatch(env) {
  if (env[/* batch */10][/* elementPtr */3] > 0) {
    var match = env[/* batch */10][/* currTex */4];
    var textureBuffer = match ? match[0] : env[/* batch */10][/* nullTex */5];
    drawGeometry(Curry._3(Reasongl.Gl[/* Bigarray */24][/* sub */9], env[/* batch */10][/* vertexArray */0], 0, env[/* batch */10][/* vertexPtr */2]), Curry._3(Reasongl.Gl[/* Bigarray */24][/* sub */9], env[/* batch */10][/* elementArray */1], 0, env[/* batch */10][/* elementPtr */3]), RGLConstants.triangles, env[/* batch */10][/* elementPtr */3], textureBuffer, env);
    env[/* batch */10][/* currTex */4] = /* None */0;
    env[/* batch */10][/* vertexPtr */2] = 0;
    env[/* batch */10][/* elementPtr */3] = 0;
    return /* () */0;
  } else {
    return 0;
  }
}

function maybeFlushBatch(texture, el, vert, env) {
  if ((env[/* batch */10][/* elementPtr */3] + el | 0) >= Reprocessing_Common.circularBufferSize || (env[/* batch */10][/* vertexPtr */2] + vert | 0) >= Reprocessing_Common.circularBufferSize || env[/* batch */10][/* elementPtr */3] > 0 && env[/* batch */10][/* currTex */4] !== texture) {
    return flushGlobalBatch(env);
  } else {
    return 0;
  }
}

function addRectToGlobalBatch(env, param, param$1, param$2, param$3, param$4) {
  var a = param$4[/* a */3];
  var b = param$4[/* b */2];
  var g = param$4[/* g */1];
  var r = param$4[/* r */0];
  maybeFlushBatch(/* None */0, 6, 32, env);
  var set = Reasongl.Gl[/* Bigarray */24][/* set */7];
  var i = env[/* batch */10][/* vertexPtr */2];
  var vertexArrayToMutate = env[/* batch */10][/* vertexArray */0];
  Curry._3(set, vertexArrayToMutate, i + 0 | 0, param[0]);
  Curry._3(set, vertexArrayToMutate, i + 1 | 0, param[1]);
  Curry._3(set, vertexArrayToMutate, i + 2 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 3 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 4 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 5 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 6 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 7 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 8 | 0, param$1[0]);
  Curry._3(set, vertexArrayToMutate, i + 9 | 0, param$1[1]);
  Curry._3(set, vertexArrayToMutate, i + 10 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 11 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 12 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 13 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 14 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 15 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 16 | 0, param$2[0]);
  Curry._3(set, vertexArrayToMutate, i + 17 | 0, param$2[1]);
  Curry._3(set, vertexArrayToMutate, i + 18 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 19 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 20 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 21 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 22 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 23 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 24 | 0, param$3[0]);
  Curry._3(set, vertexArrayToMutate, i + 25 | 0, param$3[1]);
  Curry._3(set, vertexArrayToMutate, i + 26 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 27 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 28 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 29 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 30 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 31 | 0, 0.0);
  var ii = Caml_int32.div(i, Reprocessing_Common.vertexSize);
  var j = env[/* batch */10][/* elementPtr */3];
  var elementArrayToMutate = env[/* batch */10][/* elementArray */1];
  Curry._3(set, elementArrayToMutate, j + 0 | 0, ii);
  Curry._3(set, elementArrayToMutate, j + 1 | 0, ii + 1 | 0);
  Curry._3(set, elementArrayToMutate, j + 2 | 0, ii + 2 | 0);
  Curry._3(set, elementArrayToMutate, j + 3 | 0, ii + 1 | 0);
  Curry._3(set, elementArrayToMutate, j + 4 | 0, ii + 2 | 0);
  Curry._3(set, elementArrayToMutate, j + 5 | 0, ii + 3 | 0);
  env[/* batch */10][/* vertexPtr */2] = i + (Reprocessing_Common.vertexSize << 2) | 0;
  env[/* batch */10][/* elementPtr */3] = j + 6 | 0;
  return /* () */0;
}

function drawTriangle(env, param, param$1, param$2, param$3) {
  var a = param$3[/* a */3];
  var b = param$3[/* b */2];
  var g = param$3[/* g */1];
  var r = param$3[/* r */0];
  maybeFlushBatch(/* None */0, 24, 3, env);
  var set = Reasongl.Gl[/* Bigarray */24][/* set */7];
  var i = env[/* batch */10][/* vertexPtr */2];
  var vertexArrayToMutate = env[/* batch */10][/* vertexArray */0];
  Curry._3(set, vertexArrayToMutate, i + 0 | 0, param[0]);
  Curry._3(set, vertexArrayToMutate, i + 1 | 0, param[1]);
  Curry._3(set, vertexArrayToMutate, i + 2 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 3 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 4 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 5 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 6 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 7 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 8 | 0, param$1[0]);
  Curry._3(set, vertexArrayToMutate, i + 9 | 0, param$1[1]);
  Curry._3(set, vertexArrayToMutate, i + 10 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 11 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 12 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 13 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 14 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 15 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 16 | 0, param$2[0]);
  Curry._3(set, vertexArrayToMutate, i + 17 | 0, param$2[1]);
  Curry._3(set, vertexArrayToMutate, i + 18 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 19 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 20 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 21 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 22 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 23 | 0, 0.0);
  var ii = Caml_int32.div(i, Reprocessing_Common.vertexSize);
  var j = env[/* batch */10][/* elementPtr */3];
  var elementArrayToMutate = env[/* batch */10][/* elementArray */1];
  Curry._3(set, elementArrayToMutate, j + 0 | 0, ii);
  Curry._3(set, elementArrayToMutate, j + 1 | 0, ii + 1 | 0);
  Curry._3(set, elementArrayToMutate, j + 2 | 0, ii + 2 | 0);
  env[/* batch */10][/* vertexPtr */2] = i + Caml_int32.imul(3, Reprocessing_Common.vertexSize) | 0;
  env[/* batch */10][/* elementPtr */3] = j + 3 | 0;
  return /* () */0;
}

function drawLine(param, param$1, color, width, project, env) {
  var yy2 = param$1[1];
  var xx2 = param$1[0];
  var yy1 = param[1];
  var xx1 = param[0];
  var dx = xx2 - xx1;
  var dy = yy2 - yy1;
  var mag = Math.sqrt(dx * dx + dy * dy);
  var radius = width / 2;
  var xthing = dy / mag * radius;
  var ything = -dx / mag * radius;
  var match = project !== 0 ? /* tuple */[
      dx / mag * radius,
      xthing
    ] : /* tuple */[
      0,
      0
    ];
  var projecty = match[1];
  var projectx = match[0];
  var x1 = xx2 + xthing + projectx;
  var y1 = yy2 + ything + projecty;
  var x2 = xx1 + xthing - projectx;
  var y2 = yy1 + ything - projecty;
  var x3 = xx2 - xthing + projectx;
  var y3 = yy2 - ything + projecty;
  var x4 = xx1 - xthing - projectx;
  var y4 = yy1 - ything - projecty;
  return addRectToGlobalBatch(env, /* tuple */[
              x1,
              y1
            ], /* tuple */[
              x2,
              y2
            ], /* tuple */[
              x3,
              y3
            ], /* tuple */[
              x4,
              y4
            ], color);
}

function drawArc(env, param, radx, rady, start, stop, isPie, matrix, param$1) {
  var a = param$1[/* a */3];
  var b = param$1[/* b */2];
  var g = param$1[/* g */1];
  var r = param$1[/* r */0];
  var yCenterOfCircle = param[1];
  var xCenterOfCircle = param[0];
  var noOfFans = ((radx + rady | 0) / 4 | 0) + 10 | 0;
  maybeFlushBatch(/* None */0, Caml_int32.imul(3, noOfFans), (noOfFans << 3), env);
  var pi = 4.0 * Math.atan(1.0);
  var anglePerFan = 2 * pi / noOfFans;
  var verticesData = env[/* batch */10][/* vertexArray */0];
  var elementData = env[/* batch */10][/* elementArray */1];
  var set = Reasongl.Gl[/* Bigarray */24][/* set */7];
  var get = Reasongl.Gl[/* Bigarray */24][/* get */5];
  var vertexArrayOffset = env[/* batch */10][/* vertexPtr */2];
  var elementArrayOffset = env[/* batch */10][/* elementPtr */3];
  var start_i = isPie ? (start / anglePerFan | 0) - 2 | 0 : (start / anglePerFan | 0) - 1 | 0;
  var stop_i = (stop / anglePerFan | 0) - 1 | 0;
  for(var i = start_i; i <= stop_i; ++i){
    var param$2;
    if (isPie && (i - start_i | 0) === 0) {
      param$2 = /* tuple */[
        xCenterOfCircle,
        yCenterOfCircle
      ];
    } else {
      var angle = anglePerFan * (i + 1 | 0);
      param$2 = /* tuple */[
        xCenterOfCircle + Math.cos(angle) * radx,
        yCenterOfCircle + Math.sin(angle) * rady
      ];
    }
    var match = Reprocessing_Matrix.matptmul(matrix, param$2);
    var ii = Caml_int32.imul(i - start_i | 0, Reprocessing_Common.vertexSize) + vertexArrayOffset | 0;
    Curry._3(set, verticesData, ii + 0 | 0, match[0]);
    Curry._3(set, verticesData, ii + 1 | 0, match[1]);
    Curry._3(set, verticesData, ii + 2 | 0, r);
    Curry._3(set, verticesData, ii + 3 | 0, g);
    Curry._3(set, verticesData, ii + 4 | 0, b);
    Curry._3(set, verticesData, ii + 5 | 0, a);
    Curry._3(set, verticesData, ii + 6 | 0, 0.0);
    Curry._3(set, verticesData, ii + 7 | 0, 0.0);
    if ((i - start_i | 0) < 3) {
      Curry._3(set, elementData, (i - start_i | 0) + elementArrayOffset | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize));
    } else {
      var jj = (Caml_int32.imul((i - start_i | 0) - 3 | 0, 3) + elementArrayOffset | 0) + 3 | 0;
      Curry._3(set, elementData, jj, Caml_int32.div(vertexArrayOffset, Reprocessing_Common.vertexSize));
      Curry._3(set, elementData, jj + 1 | 0, Curry._2(get, elementData, jj - 1 | 0));
      Curry._3(set, elementData, jj + 2 | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize));
    }
  }
  env[/* batch */10][/* vertexPtr */2] = env[/* batch */10][/* vertexPtr */2] + Caml_int32.imul(noOfFans, Reprocessing_Common.vertexSize) | 0;
  env[/* batch */10][/* elementPtr */3] = (env[/* batch */10][/* elementPtr */3] + Caml_int32.imul((stop_i - start_i | 0) - 3 | 0, 3) | 0) + 3 | 0;
  return /* () */0;
}

function drawEllipse(env, center, radx, rady, matrix, c) {
  return drawArc(env, center, radx, rady, 0, Reprocessing_Constants.tau, /* false */0, matrix, c);
}

function drawArcStroke(env, param, radx, rady, start, stop, isOpen, isPie, matrix, strokeColor, strokeWidth) {
  var a = strokeColor[/* a */3];
  var b = strokeColor[/* b */2];
  var g = strokeColor[/* g */1];
  var r = strokeColor[/* r */0];
  var yCenterOfCircle = param[1];
  var xCenterOfCircle = param[0];
  var verticesData = env[/* batch */10][/* vertexArray */0];
  var elementData = env[/* batch */10][/* elementArray */1];
  var noOfFans = ((radx + rady | 0) / 4 | 0) + 10 | 0;
  var set = Reasongl.Gl[/* Bigarray */24][/* set */7];
  maybeFlushBatch(/* None */0, 6, 16, env);
  var pi = 4.0 * Math.atan(1.0);
  var anglePerFan = 2 * pi / noOfFans;
  var start_i = (start / anglePerFan | 0) - 1 | 0;
  var stop_i = (stop / anglePerFan | 0) - 1 | 0;
  var prevEl = /* None */0;
  var halfwidth = strokeWidth / 2;
  for(var i = start_i; i <= stop_i; ++i){
    var angle = anglePerFan * (i + 1 | 0);
    var param_000 = xCenterOfCircle + Math.cos(angle) * (radx - halfwidth);
    var param_001 = yCenterOfCircle + Math.sin(angle) * (rady - halfwidth);
    var param$1 = /* tuple */[
      param_000,
      param_001
    ];
    var match = Reprocessing_Matrix.matptmul(matrix, param$1);
    var param_000$1 = xCenterOfCircle + Math.cos(angle) * (radx + halfwidth);
    var param_001$1 = yCenterOfCircle + Math.sin(angle) * (rady + halfwidth);
    var param$2 = /* tuple */[
      param_000$1,
      param_001$1
    ];
    var match$1 = Reprocessing_Matrix.matptmul(matrix, param$2);
    var ii = env[/* batch */10][/* vertexPtr */2];
    Curry._3(set, verticesData, ii + 0 | 0, match[0]);
    Curry._3(set, verticesData, ii + 1 | 0, match[1]);
    Curry._3(set, verticesData, ii + 2 | 0, r);
    Curry._3(set, verticesData, ii + 3 | 0, g);
    Curry._3(set, verticesData, ii + 4 | 0, b);
    Curry._3(set, verticesData, ii + 5 | 0, a);
    Curry._3(set, verticesData, ii + 6 | 0, 0.0);
    Curry._3(set, verticesData, ii + 7 | 0, 0.0);
    var ii$1 = ii + Reprocessing_Common.vertexSize | 0;
    Curry._3(set, verticesData, ii$1 + 0 | 0, match$1[0]);
    Curry._3(set, verticesData, ii$1 + 1 | 0, match$1[1]);
    Curry._3(set, verticesData, ii$1 + 2 | 0, r);
    Curry._3(set, verticesData, ii$1 + 3 | 0, g);
    Curry._3(set, verticesData, ii$1 + 4 | 0, b);
    Curry._3(set, verticesData, ii$1 + 5 | 0, a);
    Curry._3(set, verticesData, ii$1 + 6 | 0, 0.0);
    Curry._3(set, verticesData, ii$1 + 7 | 0, 0.0);
    env[/* batch */10][/* vertexPtr */2] = env[/* batch */10][/* vertexPtr */2] + (Reprocessing_Common.vertexSize << 1) | 0;
    var currOuter = Caml_int32.div(ii$1, Reprocessing_Common.vertexSize);
    var currInner = Caml_int32.div(ii$1, Reprocessing_Common.vertexSize) - 1 | 0;
    var currEl = /* Some */[/* tuple */[
        currInner,
        currOuter
      ]];
    var match$2 = prevEl;
    if (match$2) {
      var match$3 = match$2[0];
      var prevInner = match$3[0];
      var elementArrayOffset = env[/* batch */10][/* elementPtr */3];
      Curry._3(set, elementData, elementArrayOffset, prevInner);
      Curry._3(set, elementData, elementArrayOffset + 1 | 0, match$3[1]);
      Curry._3(set, elementData, elementArrayOffset + 2 | 0, currOuter);
      Curry._3(set, elementData, elementArrayOffset + 3 | 0, currOuter);
      Curry._3(set, elementData, elementArrayOffset + 4 | 0, prevInner);
      Curry._3(set, elementData, elementArrayOffset + 5 | 0, currInner);
      env[/* batch */10][/* elementPtr */3] = env[/* batch */10][/* elementPtr */3] + 6 | 0;
      prevEl = currEl;
    } else {
      prevEl = currEl;
    }
  }
  if (isOpen) {
    return 0;
  } else {
    var param_000$2 = xCenterOfCircle + Math.cos(start) * radx;
    var param_001$2 = yCenterOfCircle + Math.sin(start) * rady;
    var param$3 = /* tuple */[
      param_000$2,
      param_001$2
    ];
    var match$4 = Reprocessing_Matrix.matptmul(matrix, param$3);
    var startY = match$4[1];
    var startX = match$4[0];
    var param_000$3 = xCenterOfCircle + Math.cos(stop) * radx;
    var param_001$3 = yCenterOfCircle + Math.sin(stop) * rady;
    var param$4 = /* tuple */[
      param_000$3,
      param_001$3
    ];
    var match$5 = Reprocessing_Matrix.matptmul(matrix, param$4);
    var stopY = match$5[1];
    var stopX = match$5[0];
    if (isPie) {
      drawLine(/* tuple */[
            startX,
            startY
          ], /* tuple */[
            xCenterOfCircle,
            yCenterOfCircle
          ], strokeColor, halfwidth, /* false */0, env);
      drawLine(/* tuple */[
            stopX,
            stopY
          ], /* tuple */[
            xCenterOfCircle,
            yCenterOfCircle
          ], strokeColor, halfwidth, /* false */0, env);
      drawEllipse(env, Reprocessing_Matrix.matptmul(matrix, /* tuple */[
                xCenterOfCircle,
                yCenterOfCircle
              ]), halfwidth, halfwidth, matrix, strokeColor);
    } else {
      drawLine(/* tuple */[
            startX,
            startY
          ], /* tuple */[
            stopX,
            stopY
          ], strokeColor, halfwidth, /* false */0, env);
    }
    drawEllipse(env, /* tuple */[
          startX,
          startY
        ], halfwidth, halfwidth, matrix, strokeColor);
    return drawEllipse(env, /* tuple */[
                stopX,
                stopY
              ], halfwidth, halfwidth, matrix, strokeColor);
  }
}

function loadImage(env, filename, isPixel) {
  var imageRef = [/* None */0];
  Reasongl.Gl[/* loadImage */29](filename, /* None */0, (function (imageData) {
          if (imageData) {
            var img = imageData[0];
            var textureBuffer = Curry._1(Reasongl.Gl[/* createTexture */17], env[/* gl */2]);
            var height = Curry._1(Reasongl.Gl[/* getImageHeight */28], img);
            var width = Curry._1(Reasongl.Gl[/* getImageWidth */27], img);
            var filter = isPixel !== 0 ? RGLConstants.nearest : RGLConstants.linear;
            imageRef[0] = /* Some */[/* record */[
                /* textureBuffer */textureBuffer,
                /* img */img,
                /* height */height,
                /* width */width
              ]];
            Curry._3(Reasongl.Gl[/* bindTexture */19], env[/* gl */2], RGLConstants.texture_2d, textureBuffer);
            Reasongl.Gl[/* texImage2DWithImage */30](env[/* gl */2], RGLConstants.texture_2d, 0, img);
            Curry._4(Reasongl.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_mag_filter, filter);
            Curry._4(Reasongl.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_min_filter, filter);
            Curry._4(Reasongl.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_wrap_s, RGLConstants.clamp_to_edge);
            return Curry._4(Reasongl.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_wrap_t, RGLConstants.clamp_to_edge);
          } else {
            return Pervasives.failwith("Could not load image '" + (filename + "'."));
          }
        }), /* () */0);
  return imageRef;
}

function drawImage(param, param$1, param$2, param$3, param$4, subx, suby, subw, subh, env) {
  var imgw = param[/* width */3];
  var imgh = param[/* height */2];
  var textureBuffer = param[/* textureBuffer */0];
  maybeFlushBatch(/* Some */[textureBuffer], 6, 32, env);
  var match_000 = subx / imgw;
  var match_001 = suby / imgh;
  var match_002 = subw / imgw;
  var match_003 = subh / imgh;
  var fsubh = match_003;
  var fsubw = match_002;
  var fsuby = match_001;
  var fsubx = match_000;
  var set = Reasongl.Gl[/* Bigarray */24][/* set */7];
  var ii = env[/* batch */10][/* vertexPtr */2];
  var vertexArray = env[/* batch */10][/* vertexArray */0];
  Curry._3(set, vertexArray, ii + 0 | 0, param$1[0]);
  Curry._3(set, vertexArray, ii + 1 | 0, param$1[1]);
  Curry._3(set, vertexArray, ii + 2 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 3 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 4 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 5 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 6 | 0, fsubx + fsubw);
  Curry._3(set, vertexArray, ii + 7 | 0, fsuby + fsubh);
  Curry._3(set, vertexArray, ii + 8 | 0, param$2[0]);
  Curry._3(set, vertexArray, ii + 9 | 0, param$2[1]);
  Curry._3(set, vertexArray, ii + 10 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 11 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 12 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 13 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 14 | 0, fsubx);
  Curry._3(set, vertexArray, ii + 15 | 0, fsuby + fsubh);
  Curry._3(set, vertexArray, ii + 16 | 0, param$3[0]);
  Curry._3(set, vertexArray, ii + 17 | 0, param$3[1]);
  Curry._3(set, vertexArray, ii + 18 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 19 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 20 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 21 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 22 | 0, fsubx + fsubw);
  Curry._3(set, vertexArray, ii + 23 | 0, fsuby);
  Curry._3(set, vertexArray, ii + 24 | 0, param$4[0]);
  Curry._3(set, vertexArray, ii + 25 | 0, param$4[1]);
  Curry._3(set, vertexArray, ii + 26 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 27 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 28 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 29 | 0, 0.0);
  Curry._3(set, vertexArray, ii + 30 | 0, fsubx);
  Curry._3(set, vertexArray, ii + 31 | 0, fsuby);
  var jj = env[/* batch */10][/* elementPtr */3];
  var elementArray = env[/* batch */10][/* elementArray */1];
  Curry._3(set, elementArray, jj, Caml_int32.div(ii, Reprocessing_Common.vertexSize));
  Curry._3(set, elementArray, jj + 1 | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize) + 1 | 0);
  Curry._3(set, elementArray, jj + 2 | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize) + 2 | 0);
  Curry._3(set, elementArray, jj + 3 | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize) + 1 | 0);
  Curry._3(set, elementArray, jj + 4 | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize) + 2 | 0);
  Curry._3(set, elementArray, jj + 5 | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize) + 3 | 0);
  env[/* batch */10][/* vertexPtr */2] = ii + (Reprocessing_Common.vertexSize << 2) | 0;
  env[/* batch */10][/* elementPtr */3] = jj + 6 | 0;
  env[/* batch */10][/* currTex */4] = /* Some */[textureBuffer];
  return /* () */0;
}

function drawImageWithMatrix(image, x, y, width, height, subx, suby, subw, subh, env) {
  var partial_arg = env[/* matrix */16];
  var transform = function (param) {
    return Reprocessing_Matrix.matptmul(partial_arg, param);
  };
  var p1 = Curry._1(transform, /* tuple */[
        x + width | 0,
        y + height | 0
      ]);
  var p2 = Curry._1(transform, /* tuple */[
        x,
        y + height | 0
      ]);
  var p3 = Curry._1(transform, /* tuple */[
        x + width | 0,
        y
      ]);
  var p4 = Curry._1(transform, /* tuple */[
        x,
        y
      ]);
  return drawImage(image, p1, p2, p3, p4, subx, suby, subw, subh, env);
}

function resetSize(env, width, height) {
  env[/* size */18][/* width */1] = width;
  env[/* size */18][/* height */0] = height;
  var match_000 = Curry._1(Reasongl.Gl[/* Window */2][/* getPixelWidth */2], env[/* window */1]);
  var match_001 = Curry._1(Reasongl.Gl[/* Window */2][/* getPixelHeight */3], env[/* window */1]);
  Curry._5(Reasongl.Gl[/* viewport */38], env[/* gl */2], 0, 0, match_000, match_001);
  Curry._5(Reasongl.Gl[/* clearColor */6], env[/* gl */2], 0, 0, 0, 1);
  Curry._7(Reasongl.Gl[/* Mat4 */45][/* ortho */6], env[/* camera */0][/* projectionMatrix */0], 0, width, height, 0, 0, 1);
  return Reasongl.Gl[/* uniformMatrix4fv */46](env[/* gl */2], env[/* pMatrixUniform */8], env[/* camera */0][/* projectionMatrix */0]);
}

var Matrix = 0;

exports.Matrix               = Matrix;
exports.getProgram           = getProgram;
exports.createCanvas         = createCanvas;
exports.drawGeometry         = drawGeometry;
exports.flushGlobalBatch     = flushGlobalBatch;
exports.maybeFlushBatch      = maybeFlushBatch;
exports.addRectToGlobalBatch = addRectToGlobalBatch;
exports.drawTriangle         = drawTriangle;
exports.drawLine             = drawLine;
exports.drawArc              = drawArc;
exports.drawEllipse          = drawEllipse;
exports.drawArcStroke        = drawArcStroke;
exports.loadImage            = loadImage;
exports.drawImage            = drawImage;
exports.drawImageWithMatrix  = drawImageWithMatrix;
exports.resetSize            = resetSize;
/* Reasongl Not a pure module */


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Block        = __webpack_require__(5);
var Curry        = __webpack_require__(1);
var Reprocessing = __webpack_require__(39);

var Screen = /* module */[];

function empty_000(ctx, state, _) {
  return /* Same */Block.__(0, [
            ctx,
            state
          ]);
}

function empty_001(ctx, state, _) {
  return /* Same */Block.__(0, [
            ctx,
            state
          ]);
}

function empty_002(ctx, state, _) {
  return /* Same */Block.__(0, [
            ctx,
            state
          ]);
}

var empty = /* record */[
  empty_000,
  empty_001,
  empty_002
];

function stateless($staropt$star, $staropt$star$1, $staropt$star$2, _) {
  var run = $staropt$star ? $staropt$star[0] : (function (ctx, _) {
        return /* Stateless */Block.__(2, [ctx]);
      });
  var mouseDown = $staropt$star$1 ? $staropt$star$1[0] : (function (ctx, _) {
        return /* Stateless */Block.__(2, [ctx]);
      });
  var keyPressed = $staropt$star$2 ? $staropt$star$2[0] : (function (ctx, _) {
        return /* Stateless */Block.__(2, [ctx]);
      });
  return /* record */[
          /* run */(function (ctx, _, env) {
              return Curry._2(run, ctx, env);
            }),
          /* keyPressed */(function (ctx, _, env) {
              return Curry._2(keyPressed, ctx, env);
            }),
          /* mouseDown */(function (ctx, _, env) {
              return Curry._2(mouseDown, ctx, env);
            })
        ];
}

function $$process(transitionTo, context, env, innerState, wrapper, run) {
  var match = Curry._3(run, context, innerState, env);
  switch (match.tag | 0) {
    case 0 : 
        return /* tuple */[
                match[0],
                Curry._1(wrapper, match[1])
              ];
    case 1 : 
        var context$1 = match[0];
        return /* tuple */[
                context$1,
                Curry._3(transitionTo, context$1, match[1], env)
              ];
    case 2 : 
        return /* tuple */[
                match[0],
                Curry._1(wrapper, innerState)
              ];
    case 3 : 
        return /* tuple */[
                context,
                Curry._3(transitionTo, context, match[0], env)
              ];
    
  }
}

function draw(transitionTo, getScreen, param, env) {
  var match = Curry._1(getScreen, param[1]);
  return $$process(transitionTo, param[0], env, match[0], match[2], match[1][/* run */0]);
}

function keyPressed(transitionTo, getScreen, param, env) {
  var match = Curry._1(getScreen, param[1]);
  return $$process(transitionTo, param[0], env, match[0], match[2], match[1][/* keyPressed */1]);
}

function mouseDown(transitionTo, getScreen, param, env) {
  var match = Curry._1(getScreen, param[1]);
  return $$process(transitionTo, param[0], env, match[0], match[2], match[1][/* mouseDown */2]);
}

var Helpers = /* module */[
  /* process */$$process,
  /* draw */draw,
  /* keyPressed */keyPressed,
  /* mouseDown */mouseDown
];

function run(transitionTo, setup, getScreen, perfMonitorFont) {
  return Reprocessing.run(setup, /* Some */[(function (param, param$1) {
                  return draw(transitionTo, getScreen, param, param$1);
                })], /* None */0, /* None */0, /* Some */[(function (param, param$1) {
                  return mouseDown(transitionTo, getScreen, param, param$1);
                })], /* None */0, /* Some */[(function (param, param$1) {
                  return keyPressed(transitionTo, getScreen, param, param$1);
                })], /* None */0, /* None */0, /* Some */[perfMonitorFont], /* () */0);
}

exports.Screen    = Screen;
exports.empty     = empty;
exports.stateless = stateless;
exports.Helpers   = Helpers;
exports.run       = run;
/* Reprocessing Not a pure module */


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var Caml_builtin_exceptions = __webpack_require__(0);

function caml_sys_getenv(s) {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    var match$1 = match.env[s];
    if (match$1 !== undefined) {
      return match$1;
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
}

function caml_sys_time() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.uptime();
  } else {
    return -1;
  }
}

function caml_sys_random_seed() {
  return /* array */[((Date.now() | 0) ^ 4294967295) * Math.random() | 0];
}

function caml_sys_system_command() {
  return 127;
}

function caml_sys_getcwd() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.cwd();
  } else {
    return "/";
  }
}

function caml_sys_get_argv() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    if (match.argv == null) {
      return /* tuple */[
              "",
              /* array */[""]
            ];
    } else {
      return /* tuple */[
              match.argv[0],
              match.argv
            ];
    }
  } else {
    return /* tuple */[
            "",
            /* array */[""]
          ];
  }
}

function caml_sys_exit(exit_code) {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.exit(exit_code);
  } else {
    return /* () */0;
  }
}

function caml_sys_is_directory() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_sys_is_directory not implemented"
      ];
}

function caml_sys_file_exists() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_sys_file_exists not implemented"
      ];
}

exports.caml_sys_getenv         = caml_sys_getenv;
exports.caml_sys_time           = caml_sys_time;
exports.caml_sys_random_seed    = caml_sys_random_seed;
exports.caml_sys_system_command = caml_sys_system_command;
exports.caml_sys_getcwd         = caml_sys_getcwd;
exports.caml_sys_get_argv       = caml_sys_get_argv;
exports.caml_sys_exit           = caml_sys_exit;
exports.caml_sys_is_directory   = caml_sys_is_directory;
exports.caml_sys_file_exists    = caml_sys_file_exists;
/* No side effect */

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_obj                = __webpack_require__(8);
var Caml_int32              = __webpack_require__(3);
var Caml_utils              = __webpack_require__(33);
var Caml_builtin_exceptions = __webpack_require__(0);

var min_int = /* record */[
  /* hi */-2147483648,
  /* lo */0
];

var max_int = /* record */[
  /* hi */134217727,
  /* lo */1
];

var one = /* record */[
  /* hi */0,
  /* lo */1
];

var zero = /* record */[
  /* hi */0,
  /* lo */0
];

var neg_one = /* record */[
  /* hi */-1,
  /* lo */4294967295
];

function neg_signed(x) {
  return +((x & 2147483648) !== 0);
}

function add(param, param$1) {
  var other_low_ = param$1[/* lo */1];
  var this_low_ = param[/* lo */1];
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
  var hi = param[/* hi */0] + param$1[/* hi */0] + overflow & 4294967295;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function not(param) {
  var hi = param[/* hi */0] ^ -1;
  var lo = param[/* lo */1] ^ -1;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function eq(x, y) {
  if (x[/* hi */0] === y[/* hi */0]) {
    return +(x[/* lo */1] === y[/* lo */1]);
  } else {
    return /* false */0;
  }
}

function neg(x) {
  if (eq(x, min_int)) {
    return min_int;
  } else {
    return add(not(x), one);
  }
}

function sub(x, y) {
  return add(x, neg(y));
}

function lsl_(x, numBits) {
  if (numBits) {
    var lo = x[/* lo */1];
    if (numBits >= 32) {
      return /* record */[
              /* hi */(lo << (numBits - 32 | 0)),
              /* lo */0
            ];
    } else {
      var hi = (lo >>> (32 - numBits | 0)) | (x[/* hi */0] << numBits);
      return /* record */[
              /* hi */hi,
              /* lo */((lo << numBits) >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function lsr_(x, numBits) {
  if (numBits) {
    var hi = x[/* hi */0];
    var offset = numBits - 32 | 0;
    if (offset) {
      if (offset > 0) {
        var lo = (hi >>> offset);
        return /* record */[
                /* hi */0,
                /* lo */(lo >>> 0)
              ];
      } else {
        var hi$1 = (hi >>> numBits);
        var lo$1 = (hi << (-offset | 0)) | (x[/* lo */1] >>> numBits);
        return /* record */[
                /* hi */hi$1,
                /* lo */(lo$1 >>> 0)
              ];
      }
    } else {
      return /* record */[
              /* hi */0,
              /* lo */(hi >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function asr_(x, numBits) {
  if (numBits) {
    var hi = x[/* hi */0];
    if (numBits < 32) {
      var hi$1 = (hi >> numBits);
      var lo = (hi << (32 - numBits | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo >>> 0)
            ];
    } else {
      var lo$1 = (hi >> (numBits - 32 | 0));
      return /* record */[
              /* hi */hi >= 0 ? 0 : -1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function is_zero(param) {
  if (param[/* hi */0] !== 0 || param[/* lo */1] !== 0) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function mul(_this, _other) {
  while(true) {
    var other = _other;
    var $$this = _this;
    var exit = 0;
    var lo;
    var this_hi = $$this[/* hi */0];
    var exit$1 = 0;
    var exit$2 = 0;
    var exit$3 = 0;
    if (this_hi !== 0) {
      exit$3 = 4;
    } else if ($$this[/* lo */1] !== 0) {
      exit$3 = 4;
    } else {
      return zero;
    }
    if (exit$3 === 4) {
      if (other[/* hi */0] !== 0) {
        exit$2 = 3;
      } else if (other[/* lo */1] !== 0) {
        exit$2 = 3;
      } else {
        return zero;
      }
    }
    if (exit$2 === 3) {
      if (this_hi !== -2147483648) {
        exit$1 = 2;
      } else if ($$this[/* lo */1] !== 0) {
        exit$1 = 2;
      } else {
        lo = other[/* lo */1];
        exit = 1;
      }
    }
    if (exit$1 === 2) {
      var other_hi = other[/* hi */0];
      var lo$1 = $$this[/* lo */1];
      var exit$4 = 0;
      if (other_hi !== -2147483648) {
        exit$4 = 3;
      } else if (other[/* lo */1] !== 0) {
        exit$4 = 3;
      } else {
        lo = lo$1;
        exit = 1;
      }
      if (exit$4 === 3) {
        var other_lo = other[/* lo */1];
        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg(other);
            _this = neg($$this);
            continue ;
            
          } else {
            return neg(mul(neg($$this), other));
          }
        } else if (other_hi < 0) {
          return neg(mul($$this, neg(other)));
        } else {
          var a48 = (this_hi >>> 16);
          var a32 = this_hi & 65535;
          var a16 = (lo$1 >>> 16);
          var a00 = lo$1 & 65535;
          var b48 = (other_hi >>> 16);
          var b32 = other_hi & 65535;
          var b16 = (other_lo >>> 16);
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = (c16 >>> 16);
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = (c32 >>> 16);
          c32 = (c32 & 65535) + a16 * b16;
          c48 += (c32 >>> 16);
          c32 = (c32 & 65535) + a00 * b32;
          c48 += (c32 >>> 16);
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | (c48 << 16);
          var lo$2 = c00 & 65535 | ((c16 & 65535) << 16);
          return /* record */[
                  /* hi */hi,
                  /* lo */(lo$2 >>> 0)
                ];
        }
      }
      
    }
    if (exit === 1) {
      if ((lo & 1) === 0) {
        return zero;
      } else {
        return min_int;
      }
    }
    
  };
}

function swap(param) {
  var hi = Caml_int32.caml_int32_bswap(param[/* lo */1]);
  var lo = Caml_int32.caml_int32_bswap(param[/* hi */0]);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function xor(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] ^ param$1[/* hi */0],
          /* lo */((param[/* lo */1] ^ param$1[/* lo */1]) >>> 0)
        ];
}

function or_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] | param$1[/* hi */0],
          /* lo */((param[/* lo */1] | param$1[/* lo */1]) >>> 0)
        ];
}

function and_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] & param$1[/* hi */0],
          /* lo */((param[/* lo */1] & param$1[/* lo */1]) >>> 0)
        ];
}

function ge(param, param$1) {
  var other_hi = param$1[/* hi */0];
  var hi = param[/* hi */0];
  if (hi > other_hi) {
    return /* true */1;
  } else if (hi < other_hi) {
    return /* false */0;
  } else {
    return +(param[/* lo */1] >= param$1[/* lo */1]);
  }
}

function neq(x, y) {
  return 1 - eq(x, y);
}

function lt(x, y) {
  return 1 - ge(x, y);
}

function gt(x, y) {
  if (x[/* hi */0] > y[/* hi */0]) {
    return /* true */1;
  } else if (x[/* hi */0] < y[/* hi */0]) {
    return /* false */0;
  } else {
    return +(x[/* lo */1] > y[/* lo */1]);
  }
}

function le(x, y) {
  return 1 - gt(x, y);
}

function to_float(param) {
  return param[/* hi */0] * (0x100000000) + param[/* lo */1];
}

var two_ptr_32_dbl = Math.pow(2, 32);

var two_ptr_63_dbl = Math.pow(2, 63);

var neg_two_ptr_63 = -Math.pow(2, 63);

function of_float(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero;
  } else if (x <= neg_two_ptr_63) {
    return min_int;
  } else if (x + 1 >= two_ptr_63_dbl) {
    return max_int;
  } else if (x < 0) {
    return neg(of_float(-x));
  } else {
    var hi = x / two_ptr_32_dbl | 0;
    var lo = x % two_ptr_32_dbl | 0;
    return /* record */[
            /* hi */hi,
            /* lo */(lo >>> 0)
          ];
  }
}

function div(_self, _other) {
  while(true) {
    var other = _other;
    var self = _self;
    var self_hi = self[/* hi */0];
    var exit = 0;
    var exit$1 = 0;
    if (other[/* hi */0] !== 0) {
      exit$1 = 2;
    } else if (other[/* lo */1] !== 0) {
      exit$1 = 2;
    } else {
      throw Caml_builtin_exceptions.division_by_zero;
    }
    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0) {
          exit = 1;
        } else if (self[/* lo */1] !== 0) {
          exit = 1;
        } else {
          return zero;
        }
      } else if (self[/* lo */1] !== 0) {
        exit = 1;
      } else if (eq(other, one) || eq(other, neg_one)) {
        return self;
      } else if (eq(other, min_int)) {
        return one;
      } else {
        var other_hi = other[/* hi */0];
        var half_this = asr_(self, 1);
        var approx = lsl_(div(half_this, other), 1);
        var exit$2 = 0;
        if (approx[/* hi */0] !== 0) {
          exit$2 = 3;
        } else if (approx[/* lo */1] !== 0) {
          exit$2 = 3;
        } else if (other_hi < 0) {
          return one;
        } else {
          return neg(one);
        }
        if (exit$2 === 3) {
          var y = mul(other, approx);
          var rem = add(self, neg(y));
          return add(approx, div(rem, other));
        }
        
      }
    }
    if (exit === 1) {
      var other_hi$1 = other[/* hi */0];
      var exit$3 = 0;
      if (other_hi$1 !== -2147483648) {
        exit$3 = 2;
      } else if (other[/* lo */1] !== 0) {
        exit$3 = 2;
      } else {
        return zero;
      }
      if (exit$3 === 2) {
        if (self_hi < 0) {
          if (other_hi$1 < 0) {
            _other = neg(other);
            _self = neg(self);
            continue ;
            
          } else {
            return neg(div(neg(self), other));
          }
        } else if (other_hi$1 < 0) {
          return neg(div(self, neg(other)));
        } else {
          var res = zero;
          var rem$1 = self;
          while(ge(rem$1, other)) {
            var approx$1 = Math.max(1, Math.floor(to_float(rem$1) / to_float(other)));
            var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
            var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            var approxRes = of_float(approx$1);
            var approxRem = mul(approxRes, other);
            while(approxRem[/* hi */0] < 0 || gt(approxRem, rem$1)) {
              approx$1 -= delta;
              approxRes = of_float(approx$1);
              approxRem = mul(approxRes, other);
            };
            if (is_zero(approxRes)) {
              approxRes = one;
            }
            res = add(res, approxRes);
            rem$1 = add(rem$1, neg(approxRem));
          };
          return res;
        }
      }
      
    }
    
  };
}

function mod_(self, other) {
  var y = mul(div(self, other), other);
  return add(self, neg(y));
}

function div_mod(self, other) {
  var quotient = div(self, other);
  var y = mul(quotient, other);
  return /* tuple */[
          quotient,
          add(self, neg(y))
        ];
}

function compare(self, other) {
  var v = Caml_obj.caml_nativeint_compare(self[/* hi */0], other[/* hi */0]);
  if (v) {
    return v;
  } else {
    return Caml_obj.caml_nativeint_compare(self[/* lo */1], other[/* lo */1]);
  }
}

function of_int32(lo) {
  return /* record */[
          /* hi */lo < 0 ? -1 : 0,
          /* lo */(lo >>> 0)
        ];
}

function to_int32(x) {
  return x[/* lo */1] | 0;
}

function to_hex(x) {
  var aux = function (v) {
    return (v >>> 0).toString(16);
  };
  var match = x[/* hi */0];
  var match$1 = x[/* lo */1];
  var exit = 0;
  if (match !== 0) {
    exit = 1;
  } else if (match$1 !== 0) {
    exit = 1;
  } else {
    return "0";
  }
  if (exit === 1) {
    if (match$1 !== 0) {
      if (match !== 0) {
        var lo = aux(x[/* lo */1]);
        var pad = 8 - lo.length | 0;
        if (pad <= 0) {
          return aux(x[/* hi */0]) + lo;
        } else {
          return aux(x[/* hi */0]) + (Caml_utils.repeat(pad, "0") + lo);
        }
      } else {
        return aux(x[/* lo */1]);
      }
    } else {
      return aux(x[/* hi */0]) + "00000000";
    }
  }
  
}

function discard_sign(x) {
  return /* record */[
          /* hi */2147483647 & x[/* hi */0],
          /* lo */x[/* lo */1]
        ];
}

function float_of_bits(x) {
  var int32 = new Int32Array(/* array */[
        x[/* lo */1],
        x[/* hi */0]
      ]);
  return new Float64Array(int32.buffer)[0];
}

function bits_of_float(x) {
  var u = new Float64Array(/* float array */[x]);
  var int32 = new Int32Array(u.buffer);
  var x$1 = int32[1];
  var hi = x$1;
  var x$2 = int32[0];
  var lo = x$2;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function get64(s, i) {
  var hi = (s.charCodeAt(i + 4 | 0) << 32) | (s.charCodeAt(i + 5 | 0) << 40) | (s.charCodeAt(i + 6 | 0) << 48) | (s.charCodeAt(i + 7 | 0) << 56);
  var lo = s.charCodeAt(i) | (s.charCodeAt(i + 1 | 0) << 8) | (s.charCodeAt(i + 2 | 0) << 16) | (s.charCodeAt(i + 3 | 0) << 24);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

exports.min_int       = min_int;
exports.max_int       = max_int;
exports.one           = one;
exports.zero          = zero;
exports.not           = not;
exports.of_int32      = of_int32;
exports.to_int32      = to_int32;
exports.add           = add;
exports.neg           = neg;
exports.sub           = sub;
exports.lsl_          = lsl_;
exports.lsr_          = lsr_;
exports.asr_          = asr_;
exports.is_zero       = is_zero;
exports.mul           = mul;
exports.xor           = xor;
exports.or_           = or_;
exports.and_          = and_;
exports.swap          = swap;
exports.ge            = ge;
exports.eq            = eq;
exports.neq           = neq;
exports.lt            = lt;
exports.gt            = gt;
exports.le            = le;
exports.to_float      = to_float;
exports.of_float      = of_float;
exports.div           = div;
exports.mod_          = mod_;
exports.div_mod       = div_mod;
exports.compare       = compare;
exports.to_hex        = to_hex;
exports.discard_sign  = discard_sign;
exports.float_of_bits = float_of_bits;
exports.bits_of_float = bits_of_float;
exports.get64         = get64;
/* two_ptr_32_dbl Not a pure module */


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Char                    = __webpack_require__(27);
var List                    = __webpack_require__(7);
var Curry                   = __webpack_require__(1);
var Caml_obj                = __webpack_require__(8);
var Caml_int32              = __webpack_require__(3);
var Pervasives              = __webpack_require__(2);
var Caml_string             = __webpack_require__(9);
var Caml_builtin_exceptions = __webpack_require__(0);

function make(n, c) {
  var s = Caml_string.caml_create_string(n);
  Caml_string.caml_fill_string(s, 0, n, c);
  return s;
}

function init(n, f) {
  var s = Caml_string.caml_create_string(n);
  for(var i = 0 ,i_finish = n - 1 | 0; i <= i_finish; ++i){
    s[i] = Curry._1(f, i);
  }
  return s;
}

var empty = [];

function copy(s) {
  var len = s.length;
  var r = Caml_string.caml_create_string(len);
  Caml_string.caml_blit_bytes(s, 0, r, 0, len);
  return r;
}

function to_string(b) {
  return Caml_string.bytes_to_string(copy(b));
}

function of_string(s) {
  return copy(Caml_string.bytes_of_string(s));
}

function sub(s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.sub / Bytes.sub"
        ];
  } else {
    var r = Caml_string.caml_create_string(len);
    Caml_string.caml_blit_bytes(s, ofs, r, 0, len);
    return r;
  }
}

function sub_string(b, ofs, len) {
  return Caml_string.bytes_to_string(sub(b, ofs, len));
}

function extend(s, left, right) {
  var len = (s.length + left | 0) + right | 0;
  var r = Caml_string.caml_create_string(len);
  var match = left < 0 ? /* tuple */[
      -left | 0,
      0
    ] : /* tuple */[
      0,
      left
    ];
  var dstoff = match[1];
  var srcoff = match[0];
  var cpylen = Pervasives.min(s.length - srcoff | 0, len - dstoff | 0);
  if (cpylen > 0) {
    Caml_string.caml_blit_bytes(s, srcoff, r, dstoff, cpylen);
  }
  return r;
}

function fill(s, ofs, len, c) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.fill / Bytes.fill"
        ];
  } else {
    return Caml_string.caml_fill_string(s, ofs, len, c);
  }
}

function blit(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Bytes.blit"
        ];
  } else {
    return Caml_string.caml_blit_bytes(s1, ofs1, s2, ofs2, len);
  }
}

function blit_string(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.blit / Bytes.blit_string"
        ];
  } else {
    return Caml_string.caml_blit_string(s1, ofs1, s2, ofs2, len);
  }
}

function iter(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._1(f, a[i]);
  }
  return /* () */0;
}

function iteri(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._2(f, i, a[i]);
  }
  return /* () */0;
}

function concat(sep, l) {
  if (l) {
    var hd = l[0];
    var num = [0];
    var len = [0];
    List.iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = Caml_string.caml_create_string(len[0] + Caml_int32.imul(sep.length, num[0] - 1 | 0) | 0);
    Caml_string.caml_blit_bytes(hd, 0, r, 0, hd.length);
    var pos = [hd.length];
    List.iter((function (s) {
            Caml_string.caml_blit_bytes(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            Caml_string.caml_blit_bytes(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return r;
  } else {
    return empty;
  }
}

function cat(a, b) {
  return a.concat(b);
}

function is_space(param) {
  var switcher = param - 9 | 0;
  if (switcher > 4 || switcher < 0) {
    if (switcher !== 23) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  } else if (switcher !== 2) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function trim(s) {
  var len = s.length;
  var i = 0;
  while(i < len && is_space(s[i])) {
    i = i + 1 | 0;
  };
  var j = len - 1 | 0;
  while(j >= i && is_space(s[j])) {
    j = j - 1 | 0;
  };
  if (j >= i) {
    return sub(s, i, (j - i | 0) + 1 | 0);
  } else {
    return empty;
  }
}

function escaped(s) {
  var n = 0;
  for(var i = 0 ,i_finish = s.length - 1 | 0; i <= i_finish; ++i){
    var match = s[i];
    var tmp;
    if (match >= 32) {
      var switcher = match - 34 | 0;
      tmp = switcher > 58 || switcher < 0 ? (
          switcher >= 93 ? 4 : 1
        ) : (
          switcher > 57 || switcher < 1 ? 2 : 1
        );
    } else {
      tmp = match >= 11 ? (
          match !== 13 ? 4 : 2
        ) : (
          match >= 8 ? 2 : 4
        );
    }
    n = n + tmp | 0;
  }
  if (n === s.length) {
    return copy(s);
  } else {
    var s$prime = Caml_string.caml_create_string(n);
    n = 0;
    for(var i$1 = 0 ,i_finish$1 = s.length - 1 | 0; i$1 <= i_finish$1; ++i$1){
      var c = s[i$1];
      var exit = 0;
      if (c >= 35) {
        if (c !== 92) {
          if (c >= 127) {
            exit = 1;
          } else {
            s$prime[n] = c;
          }
        } else {
          exit = 2;
        }
      } else if (c >= 32) {
        if (c >= 34) {
          exit = 2;
        } else {
          s$prime[n] = c;
        }
      } else if (c >= 14) {
        exit = 1;
      } else {
        switch (c) {
          case 8 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "b" */98;
              break;
          case 9 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "t" */116;
              break;
          case 10 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "n" */110;
              break;
          case 0 : 
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 : 
          case 5 : 
          case 6 : 
          case 7 : 
          case 11 : 
          case 12 : 
              exit = 1;
              break;
          case 13 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "r" */114;
              break;
          
        }
      }
      switch (exit) {
        case 1 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 100 | 0) | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 10 | 0) % 10 | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + c % 10 | 0;
            break;
        case 2 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = c;
            break;
        
      }
      n = n + 1 | 0;
    }
    return s$prime;
  }
}

function map(f, s) {
  var l = s.length;
  if (l) {
    var r = Caml_string.caml_create_string(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._1(f, s[i]);
    }
    return r;
  } else {
    return s;
  }
}

function mapi(f, s) {
  var l = s.length;
  if (l) {
    var r = Caml_string.caml_create_string(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._2(f, i, s[i]);
    }
    return r;
  } else {
    return s;
  }
}

function uppercase(s) {
  return map(Char.uppercase, s);
}

function lowercase(s) {
  return map(Char.lowercase, s);
}

function apply1(f, s) {
  if (s.length) {
    var r = copy(s);
    r[0] = Curry._1(f, s[0]);
    return r;
  } else {
    return s;
  }
}

function capitalize(s) {
  return apply1(Char.uppercase, s);
}

function uncapitalize(s) {
  return apply1(Char.lowercase, s);
}

function index_rec(s, lim, _i, c) {
  while(true) {
    var i = _i;
    if (i >= lim) {
      throw Caml_builtin_exceptions.not_found;
    } else if (s[i] === c) {
      return i;
    } else {
      _i = i + 1 | 0;
      continue ;
      
    }
  };
}

function index(s, c) {
  return index_rec(s, s.length, 0, c);
}

function index_from(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.index_from / Bytes.index_from"
        ];
  } else {
    return index_rec(s, l, i, c);
  }
}

function rindex_rec(s, _i, c) {
  while(true) {
    var i = _i;
    if (i < 0) {
      throw Caml_builtin_exceptions.not_found;
    } else if (s[i] === c) {
      return i;
    } else {
      _i = i - 1 | 0;
      continue ;
      
    }
  };
}

function rindex(s, c) {
  return rindex_rec(s, s.length - 1 | 0, c);
}

function rindex_from(s, i, c) {
  if (i < -1 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.rindex_from / Bytes.rindex_from"
        ];
  } else {
    return rindex_rec(s, i, c);
  }
}

function contains_from(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.contains_from / Bytes.contains_from"
        ];
  } else {
    try {
      index_rec(s, l, i, c);
      return /* true */1;
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        return /* false */0;
      } else {
        throw exn;
      }
    }
  }
}

function contains(s, c) {
  return contains_from(s, 0, c);
}

function rcontains_from(s, i, c) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.rcontains_from / Bytes.rcontains_from"
        ];
  } else {
    try {
      rindex_rec(s, i, c);
      return /* true */1;
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        return /* false */0;
      } else {
        throw exn;
      }
    }
  }
}

var compare = Caml_obj.caml_compare;

var unsafe_to_string = Caml_string.bytes_to_string;

var unsafe_of_string = Caml_string.bytes_of_string;

exports.make             = make;
exports.init             = init;
exports.empty            = empty;
exports.copy             = copy;
exports.of_string        = of_string;
exports.to_string        = to_string;
exports.sub              = sub;
exports.sub_string       = sub_string;
exports.extend           = extend;
exports.fill             = fill;
exports.blit             = blit;
exports.blit_string      = blit_string;
exports.concat           = concat;
exports.cat              = cat;
exports.iter             = iter;
exports.iteri            = iteri;
exports.map              = map;
exports.mapi             = mapi;
exports.trim             = trim;
exports.escaped          = escaped;
exports.index            = index;
exports.rindex           = rindex;
exports.index_from       = index_from;
exports.rindex_from      = rindex_from;
exports.contains         = contains;
exports.contains_from    = contains_from;
exports.rcontains_from   = rcontains_from;
exports.uppercase        = uppercase;
exports.lowercase        = lowercase;
exports.capitalize       = capitalize;
exports.uncapitalize     = uncapitalize;
exports.compare          = compare;
exports.unsafe_to_string = unsafe_to_string;
exports.unsafe_of_string = unsafe_of_string;
/* No side effect */


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_string             = __webpack_require__(9);
var Caml_builtin_exceptions = __webpack_require__(0);

function chr(n) {
  if (n < 0 || n > 255) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Char.chr"
        ];
  } else {
    return n;
  }
}

function escaped(c) {
  var exit = 0;
  if (c >= 40) {
    if (c !== 92) {
      exit = c >= 127 ? 1 : 2;
    } else {
      return "\\\\";
    }
  } else if (c >= 32) {
    if (c >= 39) {
      return "\\'";
    } else {
      exit = 2;
    }
  } else if (c >= 14) {
    exit = 1;
  } else {
    switch (c) {
      case 8 : 
          return "\\b";
      case 9 : 
          return "\\t";
      case 10 : 
          return "\\n";
      case 0 : 
      case 1 : 
      case 2 : 
      case 3 : 
      case 4 : 
      case 5 : 
      case 6 : 
      case 7 : 
      case 11 : 
      case 12 : 
          exit = 1;
          break;
      case 13 : 
          return "\\r";
      
    }
  }
  switch (exit) {
    case 1 : 
        var s = new Array(4);
        s[0] = /* "\\" */92;
        s[1] = 48 + (c / 100 | 0) | 0;
        s[2] = 48 + (c / 10 | 0) % 10 | 0;
        s[3] = 48 + c % 10 | 0;
        return Caml_string.bytes_to_string(s);
    case 2 : 
        var s$1 = new Array(1);
        s$1[0] = c;
        return Caml_string.bytes_to_string(s$1);
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function uppercase(c) {
  if (c >= /* "a" */97 && c <= /* "z" */122 || c >= /* "\224" */224 && c <= /* "\246" */246 || c >= /* "\248" */248 && c <= /* "\254" */254) {
    return c - 32 | 0;
  } else {
    return c;
  }
}

function compare(c1, c2) {
  return c1 - c2 | 0;
}

exports.chr       = chr;
exports.escaped   = escaped;
exports.lowercase = lowercase;
exports.uppercase = uppercase;
exports.compare   = compare;
/* No side effect */


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $$Array                 = __webpack_require__(29);
var Curry                   = __webpack_require__(1);
var Int32                   = __webpack_require__(62);
var Int64                   = __webpack_require__(63);
var Digest                  = __webpack_require__(64);
var Caml_sys                = __webpack_require__(24);
var Nativeint               = __webpack_require__(66);
var Caml_array              = __webpack_require__(12);
var Caml_int64              = __webpack_require__(25);
var Pervasives              = __webpack_require__(2);
var Caml_string             = __webpack_require__(9);
var Caml_builtin_exceptions = __webpack_require__(0);

function assign(st1, st2) {
  $$Array.blit(st2[/* st */0], 0, st1[/* st */0], 0, 55);
  st1[/* idx */1] = st2[/* idx */1];
  return /* () */0;
}

function full_init(s, seed) {
  var combine = function (accu, x) {
    return Digest.string(accu + x);
  };
  var extract = function (d) {
    return ((Caml_string.get(d, 0) + (Caml_string.get(d, 1) << 8) | 0) + (Caml_string.get(d, 2) << 16) | 0) + (Caml_string.get(d, 3) << 24) | 0;
  };
  var seed$1 = seed.length ? seed : /* int array */[0];
  var l = seed$1.length;
  for(var i = 0; i <= 54; ++i){
    Caml_array.caml_array_set(s[/* st */0], i, i);
  }
  var accu = "x";
  for(var i$1 = 0 ,i_finish = 54 + Pervasives.max(55, l) | 0; i$1 <= i_finish; ++i$1){
    var j = i$1 % 55;
    var k = i$1 % l;
    accu = combine(accu, Caml_array.caml_array_get(seed$1, k));
    Caml_array.caml_array_set(s[/* st */0], j, (Caml_array.caml_array_get(s[/* st */0], j) ^ extract(accu)) & 1073741823);
  }
  s[/* idx */1] = 0;
  return /* () */0;
}

function make(seed) {
  var result = /* record */[
    /* st */Caml_array.caml_make_vect(55, 0),
    /* idx */0
  ];
  full_init(result, seed);
  return result;
}

function make_self_init() {
  return make(Caml_sys.caml_sys_random_seed(/* () */0));
}

function copy(s) {
  var result = /* record */[
    /* st */Caml_array.caml_make_vect(55, 0),
    /* idx */0
  ];
  assign(result, s);
  return result;
}

function bits(s) {
  s[/* idx */1] = (s[/* idx */1] + 1 | 0) % 55;
  var curval = Caml_array.caml_array_get(s[/* st */0], s[/* idx */1]);
  var newval = Caml_array.caml_array_get(s[/* st */0], (s[/* idx */1] + 24 | 0) % 55) + (curval ^ (curval >>> 25) & 31) | 0;
  var newval30 = newval & 1073741823;
  Caml_array.caml_array_set(s[/* st */0], s[/* idx */1], newval30);
  return newval30;
}

function $$int(s, bound) {
  if (bound > 1073741823 || bound <= 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Random.int"
        ];
  } else {
    var s$1 = s;
    var n = bound;
    while(true) {
      var r = bits(s$1);
      var v = r % n;
      if ((r - v | 0) > ((1073741823 - n | 0) + 1 | 0)) {
        continue ;
        
      } else {
        return v;
      }
    };
  }
}

function int32(s, bound) {
  if (bound <= 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Random.int32"
        ];
  } else {
    var s$1 = s;
    var n = bound;
    while(true) {
      var b1 = bits(s$1);
      var b2 = ((bits(s$1) & 1) << 30);
      var r = b1 | b2;
      var v = r % n;
      if ((r - v | 0) > ((Int32.max_int - n | 0) + 1 | 0)) {
        continue ;
        
      } else {
        return v;
      }
    };
  }
}

function int64(s, bound) {
  if (Caml_int64.le(bound, /* int64 */[
          /* hi */0,
          /* lo */0
        ])) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Random.int64"
        ];
  } else {
    var s$1 = s;
    var n = bound;
    while(true) {
      var b1 = Caml_int64.of_int32(bits(s$1));
      var b2 = Caml_int64.lsl_(Caml_int64.of_int32(bits(s$1)), 30);
      var b3 = Caml_int64.lsl_(Caml_int64.of_int32(bits(s$1) & 7), 60);
      var r = Caml_int64.or_(b1, /* int64 */[
            /* hi */b2[0] | b3[0],
            /* lo */((b2[1] | b3[1]) >>> 0)
          ]);
      var v = Caml_int64.mod_(r, n);
      if (Caml_int64.gt(Caml_int64.sub(r, v), Caml_int64.add(Caml_int64.sub(Int64.max_int, n), /* int64 */[
                  /* hi */0,
                  /* lo */1
                ]))) {
        continue ;
        
      } else {
        return v;
      }
    };
  }
}

var nativeint = Nativeint.size === 32 ? int32 : (function (s, bound) {
      return int64(s, Caml_int64.of_int32(bound))[1] | 0;
    });

function rawfloat(s) {
  var r1 = bits(s);
  var r2 = bits(s);
  return (r1 / 1073741824.0 + r2) / 1073741824.0;
}

function $$float(s, bound) {
  return rawfloat(s) * bound;
}

function bool(s) {
  return +((bits(s) & 1) === 0);
}

var $$default = /* record */[
  /* st : array */[
    987910699,
    495797812,
    364182224,
    414272206,
    318284740,
    990407751,
    383018966,
    270373319,
    840823159,
    24560019,
    536292337,
    512266505,
    189156120,
    730249596,
    143776328,
    51606627,
    140166561,
    366354223,
    1003410265,
    700563762,
    981890670,
    913149062,
    526082594,
    1021425055,
    784300257,
    667753350,
    630144451,
    949649812,
    48546892,
    415514493,
    258888527,
    511570777,
    89983870,
    283659902,
    308386020,
    242688715,
    482270760,
    865188196,
    1027664170,
    207196989,
    193777847,
    619708188,
    671350186,
    149669678,
    257044018,
    87658204,
    558145612,
    183450813,
    28133145,
    901332182,
    710253903,
    510646120,
    652377910,
    409934019,
    801085050
  ],
  /* idx */0
];

function bits$1() {
  return bits($$default);
}

function $$int$1(bound) {
  return $$int($$default, bound);
}

function int32$1(bound) {
  return int32($$default, bound);
}

function nativeint$1(bound) {
  return Curry._2(nativeint, $$default, bound);
}

function int64$1(bound) {
  return int64($$default, bound);
}

function $$float$1(scale) {
  return rawfloat($$default) * scale;
}

function bool$1() {
  return bool($$default);
}

function full_init$1(seed) {
  return full_init($$default, seed);
}

function init(seed) {
  return full_init($$default, /* int array */[seed]);
}

function self_init() {
  return full_init$1(Caml_sys.caml_sys_random_seed(/* () */0));
}

function get_state() {
  return copy($$default);
}

function set_state(s) {
  return assign($$default, s);
}

var State = [
  make,
  make_self_init,
  copy,
  bits,
  $$int,
  int32,
  nativeint,
  int64,
  $$float,
  bool
];

exports.init      = init;
exports.full_init = full_init$1;
exports.self_init = self_init;
exports.bits      = bits$1;
exports.$$int     = $$int$1;
exports.int32     = int32$1;
exports.nativeint = nativeint$1;
exports.int64     = int64$1;
exports.$$float   = $$float$1;
exports.bool      = bool$1;
exports.State     = State;
exports.get_state = get_state;
exports.set_state = set_state;
/* No side effect */


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry                   = __webpack_require__(1);
var Js_exn                  = __webpack_require__(41);
var Caml_array              = __webpack_require__(12);
var Caml_exceptions         = __webpack_require__(17);
var Caml_builtin_exceptions = __webpack_require__(0);

function init(l, f) {
  if (l) {
    if (l < 0) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Array.init"
          ];
    } else {
      var res = Caml_array.caml_make_vect(l, Curry._1(f, 0));
      for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
        res[i] = Curry._1(f, i);
      }
      return res;
    }
  } else {
    return /* array */[];
  }
}

function make_matrix(sx, sy, init) {
  var res = Caml_array.caml_make_vect(sx, /* array */[]);
  for(var x = 0 ,x_finish = sx - 1 | 0; x <= x_finish; ++x){
    res[x] = Caml_array.caml_make_vect(sy, init);
  }
  return res;
}

function copy(a) {
  var l = a.length;
  if (l) {
    return Caml_array.caml_array_sub(a, 0, l);
  } else {
    return /* array */[];
  }
}

function append(a1, a2) {
  var l1 = a1.length;
  if (l1) {
    if (a2.length) {
      return a1.concat(a2);
    } else {
      return Caml_array.caml_array_sub(a1, 0, l1);
    }
  } else {
    return copy(a2);
  }
}

function sub(a, ofs, len) {
  if (len < 0 || ofs > (a.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Array.sub"
        ];
  } else {
    return Caml_array.caml_array_sub(a, ofs, len);
  }
}

function fill(a, ofs, len, v) {
  if (ofs < 0 || len < 0 || ofs > (a.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Array.fill"
        ];
  } else {
    for(var i = ofs ,i_finish = (ofs + len | 0) - 1 | 0; i <= i_finish; ++i){
      a[i] = v;
    }
    return /* () */0;
  }
}

function blit(a1, ofs1, a2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (a1.length - len | 0) || ofs2 < 0 || ofs2 > (a2.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Array.blit"
        ];
  } else {
    return Caml_array.caml_array_blit(a1, ofs1, a2, ofs2, len);
  }
}

function iter(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._1(f, a[i]);
  }
  return /* () */0;
}

function map(f, a) {
  var l = a.length;
  if (l) {
    var r = Caml_array.caml_make_vect(l, Curry._1(f, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._1(f, a[i]);
    }
    return r;
  } else {
    return /* array */[];
  }
}

function iteri(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._2(f, i, a[i]);
  }
  return /* () */0;
}

function mapi(f, a) {
  var l = a.length;
  if (l) {
    var r = Caml_array.caml_make_vect(l, Curry._2(f, 0, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._2(f, i, a[i]);
    }
    return r;
  } else {
    return /* array */[];
  }
}

function to_list(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    } else {
      _res = /* :: */[
        a[i],
        res
      ];
      _i = i - 1 | 0;
      continue ;
      
    }
  };
}

function list_length(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = accu + 1 | 0;
      continue ;
      
    } else {
      return accu;
    }
  };
}

function of_list(l) {
  if (l) {
    var a = Caml_array.caml_make_vect(list_length(0, l), l[0]);
    var _i = 1;
    var _param = l[1];
    while(true) {
      var param = _param;
      var i = _i;
      if (param) {
        a[i] = param[0];
        _param = param[1];
        _i = i + 1 | 0;
        continue ;
        
      } else {
        return a;
      }
    };
  } else {
    return /* array */[];
  }
}

function fold_left(f, x, a) {
  var r = x;
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    r = Curry._2(f, r, a[i]);
  }
  return r;
}

function fold_right(f, a, x) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = Curry._2(f, a[i], r);
  }
  return r;
}

var Bottom = Caml_exceptions.create("Array.Bottom");

function sort(cmp, a) {
  var maxson = function (l, i) {
    var i31 = ((i + i | 0) + i | 0) + 1 | 0;
    var x = i31;
    if ((i31 + 2 | 0) < l) {
      if (Curry._2(cmp, Caml_array.caml_array_get(a, i31), Caml_array.caml_array_get(a, i31 + 1 | 0)) < 0) {
        x = i31 + 1 | 0;
      }
      if (Curry._2(cmp, Caml_array.caml_array_get(a, x), Caml_array.caml_array_get(a, i31 + 2 | 0)) < 0) {
        x = i31 + 2 | 0;
      }
      return x;
    } else if ((i31 + 1 | 0) < l && Curry._2(cmp, Caml_array.caml_array_get(a, i31), Caml_array.caml_array_get(a, i31 + 1 | 0)) < 0) {
      return i31 + 1 | 0;
    } else if (i31 < l) {
      return i31;
    } else {
      throw [
            Bottom,
            i
          ];
    }
  };
  var trickle = function (l, i, e) {
    try {
      var l$1 = l;
      var _i = i;
      var e$1 = e;
      while(true) {
        var i$1 = _i;
        var j = maxson(l$1, i$1);
        if (Curry._2(cmp, Caml_array.caml_array_get(a, j), e$1) > 0) {
          Caml_array.caml_array_set(a, i$1, Caml_array.caml_array_get(a, j));
          _i = j;
          continue ;
          
        } else {
          return Caml_array.caml_array_set(a, i$1, e$1);
        }
      };
    }
    catch (raw_exn){
      var exn = Js_exn.internalToOCamlException(raw_exn);
      if (exn[0] === Bottom) {
        return Caml_array.caml_array_set(a, exn[1], e);
      } else {
        throw exn;
      }
    }
  };
  var bubble = function (l, i) {
    try {
      var l$1 = l;
      var _i = i;
      while(true) {
        var i$1 = _i;
        var j = maxson(l$1, i$1);
        Caml_array.caml_array_set(a, i$1, Caml_array.caml_array_get(a, j));
        _i = j;
        continue ;
        
      };
    }
    catch (raw_exn){
      var exn = Js_exn.internalToOCamlException(raw_exn);
      if (exn[0] === Bottom) {
        return exn[1];
      } else {
        throw exn;
      }
    }
  };
  var trickleup = function (_i, e) {
    while(true) {
      var i = _i;
      var father = (i - 1 | 0) / 3 | 0;
      if (i === father) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "array.ml",
                168,
                4
              ]
            ];
      }
      if (Curry._2(cmp, Caml_array.caml_array_get(a, father), e) < 0) {
        Caml_array.caml_array_set(a, i, Caml_array.caml_array_get(a, father));
        if (father > 0) {
          _i = father;
          continue ;
          
        } else {
          return Caml_array.caml_array_set(a, 0, e);
        }
      } else {
        return Caml_array.caml_array_set(a, i, e);
      }
    };
  };
  var l = a.length;
  for(var i = ((l + 1 | 0) / 3 | 0) - 1 | 0; i >= 0; --i){
    trickle(l, i, Caml_array.caml_array_get(a, i));
  }
  for(var i$1 = l - 1 | 0; i$1 >= 2; --i$1){
    var e = Caml_array.caml_array_get(a, i$1);
    Caml_array.caml_array_set(a, i$1, Caml_array.caml_array_get(a, 0));
    trickleup(bubble(i$1, 0), e);
  }
  if (l > 1) {
    var e$1 = Caml_array.caml_array_get(a, 1);
    Caml_array.caml_array_set(a, 1, Caml_array.caml_array_get(a, 0));
    return Caml_array.caml_array_set(a, 0, e$1);
  } else {
    return 0;
  }
}

function stable_sort(cmp, a) {
  var merge = function (src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs) {
    var src1r = src1ofs + src1len | 0;
    var src2r = src2ofs + src2len | 0;
    var _i1 = src1ofs;
    var _s1 = Caml_array.caml_array_get(a, src1ofs);
    var _i2 = src2ofs;
    var _s2 = Caml_array.caml_array_get(src2, src2ofs);
    var _d = dstofs;
    while(true) {
      var d = _d;
      var s2 = _s2;
      var i2 = _i2;
      var s1 = _s1;
      var i1 = _i1;
      if (Curry._2(cmp, s1, s2) <= 0) {
        Caml_array.caml_array_set(dst, d, s1);
        var i1$1 = i1 + 1 | 0;
        if (i1$1 < src1r) {
          _d = d + 1 | 0;
          _s1 = Caml_array.caml_array_get(a, i1$1);
          _i1 = i1$1;
          continue ;
          
        } else {
          return blit(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
        }
      } else {
        Caml_array.caml_array_set(dst, d, s2);
        var i2$1 = i2 + 1 | 0;
        if (i2$1 < src2r) {
          _d = d + 1 | 0;
          _s2 = Caml_array.caml_array_get(src2, i2$1);
          _i2 = i2$1;
          continue ;
          
        } else {
          return blit(a, i1, dst, d + 1 | 0, src1r - i1 | 0);
        }
      }
    };
  };
  var isortto = function (srcofs, dst, dstofs, len) {
    for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      var e = Caml_array.caml_array_get(a, srcofs + i | 0);
      var j = (dstofs + i | 0) - 1 | 0;
      while(j >= dstofs && Curry._2(cmp, Caml_array.caml_array_get(dst, j), e) > 0) {
        Caml_array.caml_array_set(dst, j + 1 | 0, Caml_array.caml_array_get(dst, j));
        j = j - 1 | 0;
      };
      Caml_array.caml_array_set(dst, j + 1 | 0, e);
    }
    return /* () */0;
  };
  var sortto = function (srcofs, dst, dstofs, len) {
    if (len <= 5) {
      return isortto(srcofs, dst, dstofs, len);
    } else {
      var l1 = len / 2 | 0;
      var l2 = len - l1 | 0;
      sortto(srcofs + l1 | 0, dst, dstofs + l1 | 0, l2);
      sortto(srcofs, a, srcofs + l2 | 0, l1);
      return merge(srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs);
    }
  };
  var l = a.length;
  if (l <= 5) {
    return isortto(0, a, 0, l);
  } else {
    var l1 = l / 2 | 0;
    var l2 = l - l1 | 0;
    var t = Caml_array.caml_make_vect(l2, Caml_array.caml_array_get(a, 0));
    sortto(l1, t, 0, l2);
    sortto(0, a, l2, l1);
    return merge(l2, l1, t, 0, l2, a, 0);
  }
}

var create_matrix = make_matrix;

var concat = Caml_array.caml_array_concat;

var fast_sort = stable_sort;

exports.init          = init;
exports.make_matrix   = make_matrix;
exports.create_matrix = create_matrix;
exports.append        = append;
exports.concat        = concat;
exports.sub           = sub;
exports.copy          = copy;
exports.fill          = fill;
exports.blit          = blit;
exports.to_list       = to_list;
exports.of_list       = of_list;
exports.iter          = iter;
exports.map           = map;
exports.iteri         = iteri;
exports.mapi          = mapi;
exports.fold_left     = fold_left;
exports.fold_right    = fold_right;
exports.sort          = sort;
exports.stable_sort   = stable_sort;
exports.fast_sort     = fast_sort;
/* No side effect */


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var $$Array                = __webpack_require__(29);
var Random                 = __webpack_require__(28);
var Caml_array             = __webpack_require__(12);
var Caml_int32             = __webpack_require__(3);
var Pervasives             = __webpack_require__(2);
var Reprocessing_Common    = __webpack_require__(18);
var Reprocessing_Constants = __webpack_require__(6);

var lookup_table = [/* int array */[]];

function round(i) {
  return Math.floor(i + 0.5);
}

function sq(x) {
  return Caml_int32.imul(x, x);
}

function pow(base, exp) {
  if (exp !== 0) {
    if (exp !== 1) {
      var b = pow(base, exp / 2 | 0);
      return Caml_int32.imul(Caml_int32.imul(b, b), exp % 2 ? base : 1);
    } else {
      return base;
    }
  } else {
    return 1;
  }
}

function constrain(amt, low, high) {
  return Pervasives.max(Pervasives.min(amt, high), low);
}

function remapf(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * ((value - low1) / (high1 - low1));
}

function remap(value, low1, high1, low2, high2) {
  return remapf(value, low1, high1, low2, high2) | 0;
}

function norm(value, low, high) {
  return remapf(value, low, high, 0, 1);
}

function randomf(min, max) {
  return Random.$$float(max - min) + min;
}

function random(min, max) {
  return Random.$$int(max - min | 0) + min | 0;
}

var randomSeed = Random.init;

function randomGaussian() {
  var u1 = 0.0;
  var u2 = 0.0;
  while(u1 <= Pervasives.min_float) {
    u1 = Random.$$float(1.0);
    u2 = Random.$$float(1.0);
  };
  return Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(Reprocessing_Constants.two_pi * u2);
}

function lerpf(low, high) {
  return (function (param) {
      return remapf(param, 0, 1, low, high);
    });
}

function lerp(low, high, value) {
  return lerpf(low, high)(value) | 0;
}

function distf(param, param$1) {
  var dx = param$1[0] - param[0];
  var dy = param$1[1] - param[1];
  return Math.sqrt(dx * dx + dy * dy);
}

function dist(param, param$1) {
  return distf(/* tuple */[
              param[0],
              param[1]
            ], /* tuple */[
              param$1[0],
              param$1[1]
            ]);
}

function magf(vec) {
  return distf(/* tuple */[
              0,
              0
            ], vec);
}

function mag(vec) {
  return dist(/* tuple */[
              0,
              0
            ], vec);
}

function lerpColor(low, high, value) {
  return /* float array */[
          lerpf(low[/* r */0], high[/* r */0])(value),
          lerpf(low[/* g */1], high[/* g */1])(value),
          lerpf(low[/* b */2], high[/* b */2])(value),
          lerpf(low[/* a */3], high[/* a */3])(value)
        ];
}

function degrees(x) {
  return 180.0 / Reprocessing_Constants.pi * x;
}

function radians(x) {
  return Reprocessing_Constants.pi / 180.0 * x;
}

function noise(x, y, z) {
  var p = lookup_table[0];
  var fade = function (t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  };
  var grad = function (hash, x, y, z) {
    var match = hash & 15;
    if (match > 15 || match < 0) {
      return 0.0;
    } else {
      switch (match) {
        case 0 : 
            return x + y;
        case 1 : 
            return -x + y;
        case 2 : 
            return x - y;
        case 3 : 
            return -x - y;
        case 4 : 
            return x + z;
        case 5 : 
            return -x + z;
        case 6 : 
            return x - z;
        case 7 : 
            return -x - z;
        case 8 : 
            return y + z;
        case 10 : 
            return y - z;
        case 12 : 
            return y + x;
        case 9 : 
        case 13 : 
            return -y + z;
        case 14 : 
            return y - x;
        case 11 : 
        case 15 : 
            return -y - z;
        
      }
    }
  };
  var xi = x & 255;
  var yi = y & 255;
  var zi = z & 255;
  var xf = x - Math.floor(x);
  var yf = y - Math.floor(y);
  var zf = z - Math.floor(z);
  var u = fade(xf);
  var v = fade(yf);
  var w = fade(zf);
  var aaa = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi) + yi | 0) + zi | 0);
  var aba = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi) + (yi + 1 | 0) | 0) + zi | 0);
  var aab = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi) + yi | 0) + (zi + 1 | 0) | 0);
  var abb = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi) + (yi + 1 | 0) | 0) + (zi + 1 | 0) | 0);
  var baa = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi + 1 | 0) + yi | 0) + zi | 0);
  var bba = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi + 1 | 0) + (yi + 1 | 0) | 0) + zi | 0);
  var bab = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi + 1 | 0) + yi | 0) + (zi + 1 | 0) | 0);
  var bbb = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi + 1 | 0) + (yi + 1 | 0) | 0) + (zi + 1 | 0) | 0);
  var x1 = lerpf(grad(aaa, xf, yf, zf), grad(baa, xf - 1.0, yf, zf))(u);
  var x2 = lerpf(grad(aba, xf, yf - 1.0, zf), grad(bba, xf - 1.0, yf - 1.0, zf))(u);
  var y1 = lerpf(x1, x2)(v);
  var x1$1 = lerpf(grad(aab, xf, yf, zf - 1.0), grad(bab, xf - 1.0, yf, zf - 1.0))(u);
  var x2$1 = lerpf(grad(abb, xf, yf - 1.0, zf - 1.0), grad(bbb, xf - 1.0, yf - 1.0, zf - 1.0))(u);
  var y2 = lerpf(x1$1, x2$1)(v);
  return (lerpf(y1, y2)(w) + 1.0) / 2.0;
}

function shuffle(array) {
  var array$1 = $$Array.copy(array);
  var length = array$1.length;
  for(var i = 0; i <= 255; ++i){
    var j = Random.$$int(length - i | 0);
    var tmp = Caml_array.caml_array_get(array$1, i);
    Caml_array.caml_array_set(array$1, i, Caml_array.caml_array_get(array$1, i + j | 0));
    Caml_array.caml_array_set(array$1, i + j | 0, tmp);
  }
  return array$1;
}

function noiseSeed(seed) {
  var state = Random.get_state(/* () */0);
  Random.init(seed);
  var array = Caml_array.caml_make_vect(256, 0);
  var array$1 = $$Array.mapi((function (i, _) {
          return i;
        }), array);
  var array$2 = shuffle(array$1);
  var double_array = $$Array.append(array$2, array$2);
  lookup_table[0] = double_array;
  return Random.set_state(state);
}

function color(r, g, b, a) {
  return /* float array */[
          r / 255,
          g / 255,
          b / 255,
          a / 255
        ];
}

function colorf(r, g, b, a) {
  return /* float array */[
          r,
          g,
          b,
          a
        ];
}

function intersectRectCircle(param, rectW, rectH, param$1, circleRad) {
  var halfW = rectW / 2;
  var halfH = rectH / 2;
  var cdistX = Math.abs(param$1[0] - (param[0] + halfW));
  var cdistY = Math.abs(param$1[1] - (param[1] + halfH));
  if (cdistX > halfW + circleRad || cdistY > halfH + circleRad) {
    return /* false */0;
  } else if (cdistX <= halfW || cdistY <= halfH) {
    return /* true */1;
  } else {
    var cornerDistSq = Math.pow(cdistX - halfW, 2) + Math.pow(cdistY - halfH, 2);
    return +(cornerDistSq <= Math.pow(circleRad, 2));
  }
}

function intersectRectRect(param, rect1W, rect1H, param$1, rect2W, rect2H) {
  var ry2 = param$1[1];
  var rx2 = param$1[0];
  var ry1 = param[1];
  var rx1 = param[0];
  return 1 - +(rx2 > rx1 + rect1W || rx2 + rect2W < rx1 || ry2 > ry1 + rect1H || ry2 + rect2H < ry1);
}

var split = Reprocessing_Common.split;

exports.color               = color;
exports.colorf              = colorf;
exports.round               = round;
exports.sq                  = sq;
exports.pow                 = pow;
exports.constrain           = constrain;
exports.remapf              = remapf;
exports.remap               = remap;
exports.norm                = norm;
exports.randomf             = randomf;
exports.random              = random;
exports.randomSeed          = randomSeed;
exports.randomGaussian      = randomGaussian;
exports.lerpf               = lerpf;
exports.lerp                = lerp;
exports.lerpColor           = lerpColor;
exports.distf               = distf;
exports.dist                = dist;
exports.magf                = magf;
exports.mag                 = mag;
exports.degrees             = degrees;
exports.radians             = radians;
exports.noise               = noise;
exports.noiseSeed           = noiseSeed;
exports.split               = split;
exports.intersectRectCircle = intersectRectCircle;
exports.intersectRectRect   = intersectRectRect;
/* Reprocessing_Common Not a pure module */


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var Curry                   = __webpack_require__(1);
var Caml_builtin_exceptions = __webpack_require__(0);

function $caret(prim, prim$1) {
  return prim + prim$1;
}

var stdin = undefined;

var stdout = /* record */[
  /* buffer */"",
  /* output */(function (_, s) {
      var v = s.length - 1 | 0;
      if (( (typeof process !== "undefined") && process.stdout && process.stdout.write)) {
        return ( process.stdout.write )(s);
      } else if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

var stderr = /* record */[
  /* buffer */"",
  /* output */(function (_, s) {
      var v = s.length - 1 | 0;
      if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

function caml_ml_open_descriptor_in() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_open_descriptor_in not implemented"
      ];
}

function caml_ml_open_descriptor_out() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_open_descriptor_out not implemented"
      ];
}

function caml_ml_flush(oc) {
  if (oc[/* buffer */0] !== "") {
    Curry._2(oc[/* output */1], oc, oc[/* buffer */0]);
    oc[/* buffer */0] = "";
    return /* () */0;
  } else {
    return 0;
  }
}

var node_std_output = (function (s){
   return (typeof process !== "undefined") && process.stdout && (process.stdout.write(s), true);
   }
);

function caml_ml_output(oc, str, offset, len) {
  var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
  if (( (typeof process !== "undefined") && process.stdout && process.stdout.write ) && oc === stdout) {
    return ( process.stdout.write )(str$1);
  } else {
    var id = str$1.lastIndexOf("\n");
    if (id < 0) {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1;
      return /* () */0;
    } else {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(0, id + 1 | 0);
      caml_ml_flush(oc);
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(id + 1 | 0);
      return /* () */0;
    }
  }
}

function caml_ml_output_char(oc, $$char) {
  return caml_ml_output(oc, String.fromCharCode($$char), 0, 1);
}

function caml_ml_input(_, _$1, _$2, _$3) {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_input ic not implemented"
      ];
}

function caml_ml_input_char() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_input_char not implemnted"
      ];
}

function caml_ml_out_channels_list() {
  return /* :: */[
          stdout,
          /* :: */[
            stderr,
            /* [] */0
          ]
        ];
}

exports.$caret                      = $caret;
exports.stdin                       = stdin;
exports.stdout                      = stdout;
exports.stderr                      = stderr;
exports.caml_ml_open_descriptor_in  = caml_ml_open_descriptor_in;
exports.caml_ml_open_descriptor_out = caml_ml_open_descriptor_out;
exports.caml_ml_flush               = caml_ml_flush;
exports.node_std_output             = node_std_output;
exports.caml_ml_output              = caml_ml_output;
exports.caml_ml_output_char         = caml_ml_output_char;
exports.caml_ml_input               = caml_ml_input;
exports.caml_ml_input_char          = caml_ml_input_char;
exports.caml_ml_out_channels_list   = caml_ml_out_channels_list;
/* stdin Not a pure module */

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var repeat = ( (String.prototype.repeat && function (count,self){return self.repeat(count)}) ||
                                                  function(count , self) {
        if (self.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (self.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        var rpt = '';
        for (;;) {
            if ((count & 1) == 1) {
                rpt += self;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            self += self;
        }
        return rpt;
    }
);

exports.repeat = repeat;
/* repeat Not a pure module */


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var not_implemented = (function (s){ throw new Error(s)});

exports.not_implemented = not_implemented;
/* not_implemented Not a pure module */


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Block = __webpack_require__(5);

function erase_rel(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [erase_rel(param[0])]);
      case 1 : 
          return /* String_ty */Block.__(1, [erase_rel(param[0])]);
      case 2 : 
          return /* Int_ty */Block.__(2, [erase_rel(param[0])]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [erase_rel(param[0])]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [erase_rel(param[0])]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [erase_rel(param[0])]);
      case 6 : 
          return /* Float_ty */Block.__(6, [erase_rel(param[0])]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [erase_rel(param[0])]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    param[0],
                    erase_rel(param[1])
                  ]);
      case 9 : 
          var ty1 = param[0];
          return /* Format_subst_ty */Block.__(9, [
                    ty1,
                    ty1,
                    erase_rel(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [erase_rel(param[0])]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [erase_rel(param[0])]);
      case 12 : 
          return /* Any_ty */Block.__(12, [erase_rel(param[0])]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [erase_rel(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [erase_rel(param[0])]);
      
    }
  }
}

function concat_fmtty(fmtty1, fmtty2) {
  if (typeof fmtty1 === "number") {
    return fmtty2;
  } else {
    switch (fmtty1.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 1 : 
          return /* String_ty */Block.__(1, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 2 : 
          return /* Int_ty */Block.__(2, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 6 : 
          return /* Float_ty */Block.__(6, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    fmtty1[0],
                    concat_fmtty(fmtty1[1], fmtty2)
                  ]);
      case 9 : 
          return /* Format_subst_ty */Block.__(9, [
                    fmtty1[0],
                    fmtty1[1],
                    concat_fmtty(fmtty1[2], fmtty2)
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 12 : 
          return /* Any_ty */Block.__(12, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [concat_fmtty(fmtty1[0], fmtty2)]);
      
    }
  }
}

function concat_fmt(fmt1, fmt2) {
  if (typeof fmt1 === "number") {
    return fmt2;
  } else {
    switch (fmt1.tag | 0) {
      case 0 : 
          return /* Char */Block.__(0, [concat_fmt(fmt1[0], fmt2)]);
      case 1 : 
          return /* Caml_char */Block.__(1, [concat_fmt(fmt1[0], fmt2)]);
      case 2 : 
          return /* String */Block.__(2, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 3 : 
          return /* Caml_string */Block.__(3, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 4 : 
          return /* Int */Block.__(4, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 5 : 
          return /* Int32 */Block.__(5, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 6 : 
          return /* Nativeint */Block.__(6, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 7 : 
          return /* Int64 */Block.__(7, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 8 : 
          return /* Float */Block.__(8, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 9 : 
          return /* Bool */Block.__(9, [concat_fmt(fmt1[0], fmt2)]);
      case 10 : 
          return /* Flush */Block.__(10, [concat_fmt(fmt1[0], fmt2)]);
      case 11 : 
          return /* String_literal */Block.__(11, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 12 : 
          return /* Char_literal */Block.__(12, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 13 : 
          return /* Format_arg */Block.__(13, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 14 : 
          return /* Format_subst */Block.__(14, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 15 : 
          return /* Alpha */Block.__(15, [concat_fmt(fmt1[0], fmt2)]);
      case 16 : 
          return /* Theta */Block.__(16, [concat_fmt(fmt1[0], fmt2)]);
      case 17 : 
          return /* Formatting_lit */Block.__(17, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 18 : 
          return /* Formatting_gen */Block.__(18, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 19 : 
          return /* Reader */Block.__(19, [concat_fmt(fmt1[0], fmt2)]);
      case 20 : 
          return /* Scan_char_set */Block.__(20, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 21 : 
          return /* Scan_get_counter */Block.__(21, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 22 : 
          return /* Scan_next_char */Block.__(22, [concat_fmt(fmt1[0], fmt2)]);
      case 23 : 
          return /* Ignored_param */Block.__(23, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 24 : 
          return /* Custom */Block.__(24, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      
    }
  }
}

exports.concat_fmtty = concat_fmtty;
exports.erase_rel    = erase_rel;
exports.concat_fmt   = concat_fmt;
/* No side effect */


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["fromMat4"] = fromMat4;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromMat2d"] = fromMat2d;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["normalFromMat4"] = normalFromMat4;
/* harmony export (immutable) */ __webpack_exports__["projection"] = projection;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(10);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  let det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  out[0] = (a11 * a22 - a12 * a21);
  out[1] = (a02 * a21 - a01 * a22);
  out[2] = (a01 * a12 - a02 * a11);
  out[3] = (a12 * a20 - a10 * a22);
  out[4] = (a00 * a22 - a02 * a20);
  out[5] = (a02 * a10 - a00 * a12);
  out[6] = (a10 * a21 - a11 * a20);
  out[7] = (a01 * a20 - a00 * a21);
  out[8] = (a00 * a11 - a01 * a10);
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b00 = b[0], b01 = b[1], b02 = b[2];
  let b10 = b[3], b11 = b[4], b12 = b[5];
  let b20 = b[6], b21 = b[7], b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],
    x = v[0], y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],

    s = Math.sin(rad),
    c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ', ' +
          a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}



/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] &&
         a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
         a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat3.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["hermite"] = hermite;
/* harmony export (immutable) */ __webpack_exports__["bezier"] = bezier;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(10);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x*x + y*y + z*z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x*x + y*y + z*z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x*x + y*y + z*z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2];
  let bx = b[0], by = b[1], bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  let factorTimes2 = t * t;
  let factor1 = factorTimes2 * (2 * t - 3) + 1;
  let factor2 = factorTimes2 * (t - 2) + t;
  let factor3 = factorTimes2 * (t - 1);
  let factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  let inverseFactor = 1 - t;
  let inverseFactorTimesTwo = inverseFactor * inverseFactor;
  let factorTimes2 = t * t;
  let factor1 = inverseFactorTimesTwo * inverseFactor;
  let factor2 = 3 * t * inverseFactorTimesTwo;
  let factor3 = 3 * factorTimes2 * inverseFactor;
  let factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  let r = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0 * Math.PI;
  let z = (__WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0) - 1.0;
  let zScale = Math.sqrt(1.0-z*z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  r[1] = p[1];
  r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  let tempA = fromValues(a[0], a[1], a[2]);
  let tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  let cosine = dot(tempA, tempB);

  if(cosine > 1.0) {
    return 0;
  }
  else if(cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2];
  let b0 = b[0], b1 = b[1], b2 = b[2];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec3.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec3.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec3.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec3.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 3;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(10);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x*x + y*y + z*z + w*w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, vectorScale) {
  vectorScale = vectorScale || 1.0;

  //TODO: This is a pretty awful way of doing this. Find something better.
  out[0] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[1] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[2] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[3] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  normalize(out, out);
  scale(out, out, vectorScale);
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec4.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec4.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec4.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 4;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Sys                        = __webpack_require__(57);
var Block                      = __webpack_require__(5);
var Curry                      = __webpack_require__(1);
var Printf                     = __webpack_require__(58);
var Random                     = __webpack_require__(28);
var Reasongl                   = __webpack_require__(15);
var RGLConstants               = __webpack_require__(20);
var Reprocessing_Env           = __webpack_require__(4);
var Reprocessing_Draw          = __webpack_require__(11);
var Reprocessing_Utils         = __webpack_require__(30);
var Reprocessing_Common        = __webpack_require__(18);
var Reprocessing_Matrix        = __webpack_require__(21);
var Reprocessing_Internal      = __webpack_require__(22);
var Reprocessing_Constants     = __webpack_require__(6);
var Reprocessing_Hotreload     = __webpack_require__(68);
var Reprocessing_ClientWrapper = __webpack_require__(70);

var hotreloadData = [/* None */0];

function unwrapOrDefault($$default, opt) {
  if (opt) {
    return opt[0];
  } else {
    return $$default;
  }
}

function identity(a, _) {
  return a;
}

function hotreload(filename) {
  hotreloadData[0] = /* Some */[/* record */[
      /* started : false */0,
      /* filename */filename,
      /* draw */identity,
      /* mouseMove */identity,
      /* mouseDragged */identity,
      /* mouseDown */identity,
      /* mouseUp */identity,
      /* keyPressed */identity,
      /* keyReleased */identity,
      /* keyTyped */identity
    ]];
  return Reprocessing_Hotreload.checkRebuild(filename);
}

var target = Reasongl.Gl[/* target */0];

function run(setup, draw, mouseMove, mouseDragged, mouseDown, mouseUp, keyPressed, keyReleased, keyTyped, perfMonitorFont, _) {
  var match = hotreloadData[0];
  var fns;
  if (match) {
    var hr = match[0];
    hr[/* draw */2] = unwrapOrDefault(identity, draw);
    hr[/* keyPressed */7] = unwrapOrDefault(identity, keyPressed);
    hr[/* keyReleased */8] = unwrapOrDefault(identity, keyReleased);
    hr[/* keyTyped */9] = unwrapOrDefault(identity, keyTyped);
    hr[/* mouseMove */3] = unwrapOrDefault(identity, mouseMove);
    hr[/* mouseDragged */4] = unwrapOrDefault(identity, mouseDragged);
    hr[/* mouseDown */5] = unwrapOrDefault(identity, mouseDown);
    hr[/* mouseUp */6] = unwrapOrDefault(identity, mouseUp);
    console.log("Succesfully changed functions");
    fns = hr;
  } else {
    fns = /* record */[
      /* started : false */0,
      /* filename */"",
      /* draw */unwrapOrDefault(identity, draw),
      /* mouseMove */unwrapOrDefault(identity, mouseMove),
      /* mouseDragged */unwrapOrDefault(identity, mouseDragged),
      /* mouseDown */unwrapOrDefault(identity, mouseDown),
      /* mouseUp */unwrapOrDefault(identity, mouseUp),
      /* keyPressed */unwrapOrDefault(identity, keyPressed),
      /* keyReleased */unwrapOrDefault(identity, keyReleased),
      /* keyTyped */unwrapOrDefault(identity, keyTyped)
    ];
  }
  if (fns[/* started */0]) {
    return 0;
  } else {
    fns[/* started */0] = /* true */1;
    Random.self_init(/* () */0);
    Reprocessing_Utils.noiseSeed(Random.$$int(Reprocessing_Utils.pow(2, 29)));
    return Curry._2(Reprocessing_ClientWrapper.init, Sys.argv, (function ($$window) {
                  var env = Reprocessing_Internal.createCanvas($$window, 200, 200);
                  var userState = [Curry._1(setup, env)];
                  var monitorFont = perfMonitorFont ? /* Some */[Reprocessing_Draw.loadFont(perfMonitorFont[0], /* None */0, env)] : /* None */0;
                  var width = Curry._1(Reasongl.Gl[/* Window */2][/* getWidth */0], env[/* window */1]);
                  var height = Curry._1(Reasongl.Gl[/* Window */2][/* getHeight */1], env[/* window */1]);
                  var data = Reasongl.Gl[/* readPixels_RGBA */26](env[/* gl */2], 0, 0, width, height);
                  var textureBuffer = Curry._1(Reasongl.Gl[/* createTexture */17], env[/* gl */2]);
                  Curry._3(Reasongl.Gl[/* bindTexture */19], env[/* gl */2], RGLConstants.texture_2d, textureBuffer);
                  Reasongl.Gl[/* texImage2D_RGBA */36](env[/* gl */2], RGLConstants.texture_2d, 0, width, height, 0, data);
                  Curry._4(Reasongl.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_mag_filter, RGLConstants.linear);
                  Curry._4(Reasongl.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_min_filter, RGLConstants.linear);
                  Curry._4(Reasongl.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_wrap_s, RGLConstants.clamp_to_edge);
                  Curry._4(Reasongl.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_wrap_t, RGLConstants.clamp_to_edge);
                  var reDrawPreviousBufferOnSecondFrame = function () {
                    var match_000 = 0 + width | 0;
                    var match_000$1 = 0 + width | 0;
                    var match_001 = 0 + height | 0;
                    var match_001$1 = 0 + height | 0;
                    var verticesColorAndTexture = /* float array */[
                      match_000,
                      0,
                      0.0,
                      0.0,
                      0.0,
                      0.0,
                      1,
                      1.0,
                      1.0,
                      0,
                      0,
                      0.0,
                      0.0,
                      0.0,
                      0.0,
                      1,
                      0.0,
                      1.0,
                      match_000$1,
                      match_001,
                      0.0,
                      0.0,
                      0.0,
                      0.0,
                      1,
                      1.0,
                      0.0,
                      0,
                      match_001$1,
                      0.0,
                      0.0,
                      0.0,
                      0.0,
                      1,
                      0.0,
                      0.0
                    ];
                    return Reprocessing_Internal.drawGeometry(Curry._2(Reasongl.Gl[/* Bigarray */24][/* of_array */1], /* Float32 */1, verticesColorAndTexture), Curry._2(Reasongl.Gl[/* Bigarray */24][/* of_array */1], /* Uint16 */3, /* array */[
                                    0,
                                    1,
                                    2,
                                    1,
                                    2,
                                    3
                                  ]), RGLConstants.triangles, 6, textureBuffer, env);
                  };
                  return Reasongl.Gl[/* render */5](env[/* window */1], /* Some */[(function (_, _$1, x, y) {
                                  env[/* mouse */12][/* pos */0] = /* tuple */[
                                    x,
                                    y
                                  ];
                                  env[/* mouse */12][/* pressed */2] = /* true */1;
                                  userState[0] = Curry._2(fns[/* mouseDown */5], userState[0], env);
                                  return /* () */0;
                                })], /* Some */[(function (_, _$1, x, y) {
                                  env[/* mouse */12][/* pos */0] = /* tuple */[
                                    x,
                                    y
                                  ];
                                  env[/* mouse */12][/* pressed */2] = /* false */0;
                                  userState[0] = Curry._2(fns[/* mouseUp */6], userState[0], env);
                                  return /* () */0;
                                })], /* Some */[(function (x, y) {
                                  env[/* mouse */12][/* pos */0] = /* tuple */[
                                    x,
                                    y
                                  ];
                                  if (env[/* mouse */12][/* pressed */2]) {
                                    userState[0] = Curry._2(fns[/* mouseDragged */4], userState[0], env);
                                    return /* () */0;
                                  } else {
                                    userState[0] = Curry._2(fns[/* mouseMove */3], userState[0], env);
                                    return /* () */0;
                                  }
                                })], /* Some */[(function (keycode, repeat) {
                                  env[/* keyboard */11][/* keyCode */0] = keycode;
                                  if (!repeat) {
                                    userState[0] = Curry._2(fns[/* keyPressed */7], userState[0], env);
                                    env[/* keyboard */11][/* pressed */1] = Curry._2(Reprocessing_Common.KeySet[/* add */3], keycode, env[/* keyboard */11][/* pressed */1]);
                                    env[/* keyboard */11][/* down */3] = Curry._2(Reprocessing_Common.KeySet[/* add */3], keycode, env[/* keyboard */11][/* down */3]);
                                  }
                                  userState[0] = Curry._2(fns[/* keyTyped */9], userState[0], env);
                                  return /* () */0;
                                })], /* Some */[(function (keycode) {
                                  env[/* keyboard */11][/* keyCode */0] = keycode;
                                  env[/* keyboard */11][/* released */2] = Curry._2(Reprocessing_Common.KeySet[/* add */3], keycode, env[/* keyboard */11][/* released */2]);
                                  env[/* keyboard */11][/* down */3] = Curry._2(Reprocessing_Common.KeySet[/* remove */5], keycode, env[/* keyboard */11][/* down */3]);
                                  userState[0] = Curry._2(fns[/* keyReleased */8], userState[0], env);
                                  return /* () */0;
                                })], /* Some */[(function () {
                                  if (env[/* size */18][/* resizeable */2]) {
                                    var height = Curry._1(Reasongl.Gl[/* Window */2][/* getHeight */1], env[/* window */1]);
                                    var width = Curry._1(Reasongl.Gl[/* Window */2][/* getWidth */0], env[/* window */1]);
                                    return Reprocessing_Internal.resetSize(env, width, height);
                                  } else {
                                    return Reprocessing_Env.size(Reprocessing_Env.width(env), Reprocessing_Env.height(env), env);
                                  }
                                })], (function (f) {
                                if (env[/* frame */15][/* count */0] === 2) {
                                  reDrawPreviousBufferOnSecondFrame(/* () */0);
                                }
                                var match = hotreloadData[0];
                                if (match) {
                                  Reprocessing_Hotreload.checkRebuild(fns[/* filename */1]);
                                }
                                var beforeDrawTime = Reasongl.Gl[/* getTimeMs */4](/* () */0);
                                userState[0] = Curry._2(fns[/* draw */2], userState[0], env);
                                var afterDrawTime = Reasongl.Gl[/* getTimeMs */4](/* () */0);
                                var fr = Reprocessing_Env.frameRate(env);
                                if (monitorFont) {
                                  var body = Curry._2(Printf.sprintf(/* Format */[
                                            /* Int */Block.__(4, [
                                                /* Int_d */0,
                                                /* No_padding */0,
                                                /* No_precision */0,
                                                /* String_literal */Block.__(11, [
                                                    " fps : ",
                                                    /* Float */Block.__(8, [
                                                        /* Float_f */0,
                                                        /* No_padding */0,
                                                        /* Lit_precision */[2],
                                                        /* String_literal */Block.__(11, [
                                                            "ms",
                                                            /* End_of_format */0
                                                          ])
                                                      ])
                                                  ])
                                              ]),
                                            "%d fps : %-0.2fms"
                                          ]), fr, afterDrawTime - beforeDrawTime);
                                  var h = Reprocessing_Env.width(env);
                                  Reprocessing_Draw.text(monitorFont[0], body, /* tuple */[
                                        5,
                                        h - 20 | 0
                                      ], env);
                                }
                                var f$1 = f;
                                var env$1 = env;
                                var rate = 1000 / f$1 | 0;
                                env$1[/* mouse */12][/* prevPos */1] = env$1[/* mouse */12][/* pos */0];
                                env$1[/* frame */15] = /* record */[
                                  /* count */env$1[/* frame */15][/* count */0] + 1 | 0,
                                  /* rate */rate,
                                  /* deltaTime */f$1 / 1000
                                ];
                                env$1[/* keyboard */11][/* released */2] = Reprocessing_Common.KeySet[/* empty */0];
                                env$1[/* keyboard */11][/* pressed */1] = Reprocessing_Common.KeySet[/* empty */0];
                                Reprocessing_Matrix.copyInto(Reprocessing_Matrix.identity, env$1[/* matrix */16]);
                                if (env$1[/* batch */10][/* elementPtr */3] > 0) {
                                  return Reprocessing_Internal.flushGlobalBatch(env$1);
                                } else {
                                  return 0;
                                }
                              }), /* () */0);
                }));
  }
}

var Draw = 0;

var Env = 0;

var Events = 0;

var Utils = 0;

var Constants = 0;

exports.Draw      = Draw;
exports.Env       = Env;
exports.Events    = Events;
exports.Utils     = Utils;
exports.Constants = Constants;
exports.hotreload = hotreload;
exports.target    = target;
exports.run       = run;
/* Reasongl Not a pure module */


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Bytes                   = __webpack_require__(26);
var Curry                   = __webpack_require__(1);
var $$String                = __webpack_require__(19);
var Pervasives              = __webpack_require__(2);
var Caml_string             = __webpack_require__(9);
var Caml_builtin_exceptions = __webpack_require__(0);

function create(n) {
  var n$1 = n < 1 ? 1 : n;
  var s = Caml_string.caml_create_string(n$1);
  return /* record */[
          /* buffer */s,
          /* position */0,
          /* length */n$1,
          /* initial_buffer */s
        ];
}

function contents(b) {
  return Bytes.sub_string(b[/* buffer */0], 0, b[/* position */1]);
}

function to_bytes(b) {
  return Bytes.sub(b[/* buffer */0], 0, b[/* position */1]);
}

function sub(b, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (b[/* position */1] - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.sub"
        ];
  } else {
    return Bytes.sub_string(b[/* buffer */0], ofs, len);
  }
}

function blit(src, srcoff, dst, dstoff, len) {
  if (len < 0 || srcoff < 0 || srcoff > (src[/* position */1] - len | 0) || dstoff < 0 || dstoff > (dst.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.blit"
        ];
  } else {
    return Bytes.blit(src[/* buffer */0], srcoff, dst, dstoff, len);
  }
}

function nth(b, ofs) {
  if (ofs < 0 || ofs >= b[/* position */1]) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.nth"
        ];
  } else {
    return b[/* buffer */0][ofs];
  }
}

function length(b) {
  return b[/* position */1];
}

function clear(b) {
  b[/* position */1] = 0;
  return /* () */0;
}

function reset(b) {
  b[/* position */1] = 0;
  b[/* buffer */0] = b[/* initial_buffer */3];
  b[/* length */2] = b[/* buffer */0].length;
  return /* () */0;
}

function resize(b, more) {
  var len = b[/* length */2];
  var new_len = len;
  while((b[/* position */1] + more | 0) > new_len) {
    new_len = (new_len << 1);
  };
  var new_buffer = Caml_string.caml_create_string(new_len);
  Bytes.blit(b[/* buffer */0], 0, new_buffer, 0, b[/* position */1]);
  b[/* buffer */0] = new_buffer;
  b[/* length */2] = new_len;
  return /* () */0;
}

function add_char(b, c) {
  var pos = b[/* position */1];
  if (pos >= b[/* length */2]) {
    resize(b, 1);
  }
  b[/* buffer */0][pos] = c;
  b[/* position */1] = pos + 1 | 0;
  return /* () */0;
}

function add_substring(b, s, offset, len) {
  if (offset < 0 || len < 0 || (offset + len | 0) > s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.add_substring/add_subbytes"
        ];
  }
  var new_position = b[/* position */1] + len | 0;
  if (new_position > b[/* length */2]) {
    resize(b, len);
  }
  Bytes.blit_string(s, offset, b[/* buffer */0], b[/* position */1], len);
  b[/* position */1] = new_position;
  return /* () */0;
}

function add_subbytes(b, s, offset, len) {
  return add_substring(b, Caml_string.bytes_to_string(s), offset, len);
}

function add_string(b, s) {
  var len = s.length;
  var new_position = b[/* position */1] + len | 0;
  if (new_position > b[/* length */2]) {
    resize(b, len);
  }
  Bytes.blit_string(s, 0, b[/* buffer */0], b[/* position */1], len);
  b[/* position */1] = new_position;
  return /* () */0;
}

function add_bytes(b, s) {
  return add_string(b, Caml_string.bytes_to_string(s));
}

function add_buffer(b, bs) {
  return add_subbytes(b, bs[/* buffer */0], 0, bs[/* position */1]);
}

function add_channel(b, ic, len) {
  if (len < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.add_channel"
        ];
  }
  if ((b[/* position */1] + len | 0) > b[/* length */2]) {
    resize(b, len);
  }
  Pervasives.really_input(ic, b[/* buffer */0], b[/* position */1], len);
  b[/* position */1] = b[/* position */1] + len | 0;
  return /* () */0;
}

function output_buffer(oc, b) {
  return Pervasives.output(oc, b[/* buffer */0], 0, b[/* position */1]);
}

function closing(param) {
  if (param !== 40) {
    if (param !== 123) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "buffer.ml",
              126,
              9
            ]
          ];
    } else {
      return /* "}" */125;
    }
  } else {
    return /* ")" */41;
  }
}

function advance_to_closing(opening, closing, k, s, start) {
  var _k = k;
  var _i = start;
  var lim = s.length;
  while(true) {
    var i = _i;
    var k$1 = _k;
    if (i >= lim) {
      throw Caml_builtin_exceptions.not_found;
    } else if (Caml_string.get(s, i) === opening) {
      _i = i + 1 | 0;
      _k = k$1 + 1 | 0;
      continue ;
      
    } else if (Caml_string.get(s, i) === closing) {
      if (k$1) {
        _i = i + 1 | 0;
        _k = k$1 - 1 | 0;
        continue ;
        
      } else {
        return i;
      }
    } else {
      _i = i + 1 | 0;
      continue ;
      
    }
  };
}

function advance_to_non_alpha(s, start) {
  var _i = start;
  var lim = s.length;
  while(true) {
    var i = _i;
    if (i >= lim) {
      return lim;
    } else {
      var match = Caml_string.get(s, i);
      var exit = 0;
      if (match >= 91) {
        if (match >= 97) {
          if (match >= 123) {
            return i;
          } else {
            exit = 1;
          }
        } else if (match !== 95) {
          return i;
        } else {
          exit = 1;
        }
      } else if (match >= 58) {
        if (match >= 65) {
          exit = 1;
        } else {
          return i;
        }
      } else if (match >= 48) {
        exit = 1;
      } else {
        return i;
      }
      if (exit === 1) {
        _i = i + 1 | 0;
        continue ;
        
      }
      
    }
  };
}

function find_ident(s, start, lim) {
  if (start >= lim) {
    throw Caml_builtin_exceptions.not_found;
  } else {
    var c = Caml_string.get(s, start);
    var exit = 0;
    if (c !== 40) {
      if (c !== 123) {
        var stop = advance_to_non_alpha(s, start + 1 | 0);
        return /* tuple */[
                $$String.sub(s, start, stop - start | 0),
                stop
              ];
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var new_start = start + 1 | 0;
      var stop$1 = advance_to_closing(c, closing(c), 0, s, new_start);
      return /* tuple */[
              $$String.sub(s, new_start, (stop$1 - start | 0) - 1 | 0),
              stop$1 + 1 | 0
            ];
    }
    
  }
}

function add_substitute(b, f, s) {
  var lim = s.length;
  var _previous = /* " " */32;
  var _i = 0;
  while(true) {
    var i = _i;
    var previous = _previous;
    if (i < lim) {
      var current = Caml_string.get(s, i);
      if (current !== 36) {
        if (previous === /* "\\" */92) {
          add_char(b, /* "\\" */92);
          add_char(b, current);
          _i = i + 1 | 0;
          _previous = /* " " */32;
          continue ;
          
        } else if (current !== 92) {
          add_char(b, current);
          _i = i + 1 | 0;
          _previous = current;
          continue ;
          
        } else {
          _i = i + 1 | 0;
          _previous = current;
          continue ;
          
        }
      } else if (previous === /* "\\" */92) {
        add_char(b, current);
        _i = i + 1 | 0;
        _previous = /* " " */32;
        continue ;
        
      } else {
        var j = i + 1 | 0;
        var match = find_ident(s, j, lim);
        add_string(b, Curry._1(f, match[0]));
        _i = match[1];
        _previous = /* " " */32;
        continue ;
        
      }
    } else if (previous === /* "\\" */92) {
      return add_char(b, previous);
    } else {
      return 0;
    }
  };
}

exports.create         = create;
exports.contents       = contents;
exports.to_bytes       = to_bytes;
exports.sub            = sub;
exports.blit           = blit;
exports.nth            = nth;
exports.length         = length;
exports.clear          = clear;
exports.reset          = reset;
exports.add_char       = add_char;
exports.add_string     = add_string;
exports.add_bytes      = add_bytes;
exports.add_substring  = add_substring;
exports.add_subbytes   = add_subbytes;
exports.add_substitute = add_substitute;
exports.add_buffer     = add_buffer;
exports.add_channel    = add_channel;
exports.output_buffer  = output_buffer;
/* No side effect */


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_exceptions = __webpack_require__(17);

var $$Error = Caml_exceptions.create("Js_exn.Error");

function internalToOCamlException(e) {
  if (Caml_exceptions.isCamlExceptionOrOpenVariant(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}

function raiseError(str) {
  throw new Error(str);
}

function raiseEvalError(str) {
  throw new EvalError(str);
}

function raiseRangeError(str) {
  throw new RangeError(str);
}

function raiseReferenceError(str) {
  throw new ReferenceError(str);
}

function raiseSyntaxError(str) {
  throw new SyntaxError(str);
}

function raiseTypeError(str) {
  throw new TypeError(str);
}

function raiseUriError(str) {
  throw new URIError(str);
}

exports.$$Error                  = $$Error;
exports.internalToOCamlException = internalToOCamlException;
exports.raiseError               = raiseError;
exports.raiseEvalError           = raiseEvalError;
exports.raiseRangeError          = raiseRangeError;
exports.raiseReferenceError      = raiseReferenceError;
exports.raiseSyntaxError         = raiseSyntaxError;
exports.raiseTypeError           = raiseTypeError;
exports.raiseUriError            = raiseUriError;
/* No side effect */


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var $$Map                 = __webpack_require__(67);
var List                  = __webpack_require__(7);
var Curry                 = __webpack_require__(1);
var $$String              = __webpack_require__(19);
var Caml_obj              = __webpack_require__(8);
var Reasongl              = __webpack_require__(15);
var Pervasives            = __webpack_require__(2);
var Caml_format           = __webpack_require__(14);
var Reprocessing_Common   = __webpack_require__(18);
var Reprocessing_Internal = __webpack_require__(22);

var compare = Caml_obj.caml_compare;

var IntMap = $$Map.Make(/* module */[/* compare */compare]);

function compare$1(param, param$1) {
  var first = Caml_obj.caml_compare(param[0], param$1[0]);
  if (first !== 0) {
    return first;
  } else {
    return Caml_obj.caml_compare(param[1], param$1[1]);
  }
}

var IntPairMap = $$Map.Make(/* module */[/* compare */compare$1]);

function parse_num(_stream, _acc) {
  while(true) {
    var acc = _acc;
    var stream = _stream;
    var match = Reprocessing_Common.Stream[/* peekch */1](stream);
    var exit = 0;
    var c;
    if (match) {
      var c$1 = match[0];
      if (c$1 >= 48) {
        if (c$1 >= 58) {
          exit = 1;
        } else {
          c = c$1;
          exit = 2;
        }
      } else if (c$1 !== 45) {
        exit = 1;
      } else {
        c = c$1;
        exit = 2;
      }
    } else {
      exit = 1;
    }
    switch (exit) {
      case 1 : 
          try {
            return /* tuple */[
                    stream,
                    Caml_format.caml_int_of_string(acc)
                  ];
          }
          catch (exn){
            return Pervasives.failwith("Could not parse number [" + (acc + "]."));
          }
          break;
      case 2 : 
          _acc = Reprocessing_Common.append_char(acc, c);
          _stream = Reprocessing_Common.Stream[/* popch */2](stream);
          continue ;
          
    }
  };
}

function parse_num$1(stream) {
  return parse_num(stream, "");
}

function parse_string(_stream, _acc) {
  while(true) {
    var acc = _acc;
    var stream = _stream;
    var match = Reprocessing_Common.Stream[/* peekch */1](stream);
    if (match) {
      var c = match[0];
      if (c !== 34) {
        _acc = Reprocessing_Common.append_char(acc, c);
        _stream = Reprocessing_Common.Stream[/* popch */2](stream);
        continue ;
        
      } else {
        return /* tuple */[
                Reprocessing_Common.Stream[/* popch */2](stream),
                acc
              ];
      }
    } else {
      return Pervasives.failwith("Unterminated string.");
    }
  };
}

function parse_string$1(stream) {
  return parse_string(stream, "");
}

function pop_line(_stream) {
  while(true) {
    var stream = _stream;
    var match = Reprocessing_Common.Stream[/* peekch */1](stream);
    if (match) {
      if (match[0] !== 10) {
        _stream = Reprocessing_Common.Stream[/* popch */2](stream);
        continue ;
        
      } else {
        return Reprocessing_Common.Stream[/* popch */2](stream);
      }
    } else {
      return Pervasives.failwith("could not pop line");
    }
  };
}

function parse_char_fmt(_stream, _num, _map) {
  while(true) {
    var map = _map;
    var num = _num;
    var stream = _stream;
    if (num <= 0) {
      return /* tuple */[
              stream,
              map
            ];
    } else {
      var stream$1 = Reprocessing_Common.Stream[/* match_ */6](stream, "char id=");
      var match = parse_num(stream$1, "");
      var stream$2 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match[0]), "x=");
      var match$1 = parse_num(stream$2, "");
      var stream$3 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$1[0]), "y=");
      var match$2 = parse_num(stream$3, "");
      var stream$4 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$2[0]), "width=");
      var match$3 = parse_num(stream$4, "");
      var stream$5 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$3[0]), "height=");
      var match$4 = parse_num(stream$5, "");
      var stream$6 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$4[0]), "xoffset=");
      var match$5 = parse_num(stream$6, "");
      var stream$7 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$5[0]), "yoffset=");
      var match$6 = parse_num(stream$7, "");
      var stream$8 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$6[0]), "xadvance=");
      var match$7 = parse_num(stream$8, "");
      var stream$9 = pop_line(match$7[0]);
      var new_map = Curry._3(IntMap[/* add */3], match[1], /* record */[
            /* x */match$1[1],
            /* y */match$2[1],
            /* width */match$3[1],
            /* height */match$4[1],
            /* xoffset */match$5[1],
            /* yoffset */match$6[1],
            /* xadvance */match$7[1]
          ], map);
      _map = new_map;
      _num = num - 1 | 0;
      _stream = stream$9;
      continue ;
      
    }
  };
}

function parse_kern_fmt(_stream, _num, _map) {
  while(true) {
    var map = _map;
    var num = _num;
    var stream = _stream;
    if (num) {
      var stream$1 = Reprocessing_Common.Stream[/* match_ */6](stream, "kerning first=");
      var match = parse_num(stream$1, "");
      var stream$2 = Reprocessing_Common.Stream[/* match_ */6](match[0], " second=");
      var match$1 = parse_num(stream$2, "");
      var stream$3 = Reprocessing_Common.Stream[/* match_ */6](match$1[0], " amount=");
      var match$2 = parse_num(stream$3, "");
      var stream$4 = pop_line(match$2[0]);
      var new_map = Curry._3(IntPairMap[/* add */3], /* tuple */[
            match[1],
            match$1[1]
          ], match$2[1], map);
      _map = new_map;
      _num = num - 1 | 0;
      _stream = stream$4;
      continue ;
      
    } else {
      return /* tuple */[
              stream,
              map
            ];
    }
  };
}

function replaceFilename(path, filename) {
  var splitStr = Reprocessing_Common.split(path, /* "/" */47);
  var revLst = List.rev(splitStr);
  var newRevLst = revLst ? /* :: */[
      filename,
      revLst[1]
    ] : /* [] */0;
  var newLst = List.rev(newRevLst);
  return $$String.concat("/", newLst);
}

function parseFontFormat(env, path, isPixel) {
  var ret = [/* None */0];
  Curry._2(Reasongl.Gl[/* File */1][/* readFile */0], path, (function (str) {
          var stream = Reprocessing_Common.Stream[/* create */8](str + "\n");
          var stream$1 = pop_line(pop_line(stream));
          var stream$2 = Reprocessing_Common.Stream[/* match_ */6](stream$1, "page id=0 file=\"");
          var match = parse_string(stream$2, "");
          var stream$3 = pop_line(match[0]);
          var stream$4 = Reprocessing_Common.Stream[/* match_ */6](stream$3, "chars count=");
          var match$1 = parse_num(stream$4, "");
          var stream$5 = pop_line(match$1[0]);
          var match$2 = parse_char_fmt(stream$5, match$1[1], IntMap[/* empty */0]);
          var stream$6 = Reprocessing_Common.Stream[/* match_ */6](match$2[0], "kernings count=");
          var match$3 = parse_num(stream$6, "");
          var stream$7 = pop_line(match$3[0]);
          var match$4 = parse_kern_fmt(stream$7, match$3[1], IntPairMap[/* empty */0]);
          var img_filename = replaceFilename(path, match[1]);
          ret[0] = /* Some */[/* record */[
              /* chars */match$2[1],
              /* kerning */match$4[1],
              /* image */Reprocessing_Internal.loadImage(env, img_filename, isPixel)
            ]];
          return /* () */0;
        }));
  return ret;
}

function getChar(fnt, ch) {
  try {
    return Curry._2(IntMap[/* find */21], ch, fnt[/* chars */0]);
  }
  catch (exn){
    return Pervasives.failwith("Could not find character " + (Pervasives.string_of_int(ch) + " in font."));
  }
}

function drawChar(env, fnt, image, ch, last, x, y) {
  var c = getChar(fnt, ch);
  var kernAmount;
  if (last) {
    try {
      kernAmount = Curry._2(IntPairMap[/* find */21], /* tuple */[
            last[0],
            ch
          ], fnt[/* kerning */1]);
    }
    catch (exn){
      kernAmount = 0;
    }
  } else {
    kernAmount = 0;
  }
  if (image) {
    Reprocessing_Internal.drawImageWithMatrix(image[0], (x + c[/* xoffset */4] | 0) + kernAmount | 0, y + c[/* yoffset */5] | 0, c[/* width */2], c[/* height */3], c[/* x */0], c[/* y */1], c[/* width */2], c[/* height */3], env);
    return c[/* xadvance */6] + kernAmount | 0;
  } else {
    return c[/* xadvance */6] + kernAmount | 0;
  }
}

function drawString(env, fnt, str, x, y) {
  var match = fnt[0];
  if (match) {
    var fnt$1 = match[0];
    var match$1 = fnt$1[/* image */2][0];
    if (match$1) {
      var img = match$1[0];
      var offset = [x];
      var lastChar = [/* None */0];
      return $$String.iter((function (c) {
                    var advance = drawChar(env, fnt$1, /* Some */[img], c, lastChar[0], offset[0], y);
                    offset[0] = offset[0] + advance | 0;
                    lastChar[0] = /* Some */[c];
                    return /* () */0;
                  }), str);
    } else {
      console.log("loading font.");
      return /* () */0;
    }
  } else {
    return /* () */0;
  }
}

function calcStringWidth(env, fnt, str) {
  var offset = [0];
  var lastChar = [/* None */0];
  $$String.iter((function (c) {
          offset[0] = offset[0] + drawChar(env, fnt, /* None */0, c, lastChar[0], offset[0], 0) | 0;
          lastChar[0] = /* Some */[c];
          return /* () */0;
        }), str);
  return offset[0];
}

var Font = /* module */[
  /* IntMap */IntMap,
  /* IntPairMap */IntPairMap,
  /* parse_num */parse_num$1,
  /* parse_string */parse_string$1,
  /* pop_line */pop_line,
  /* parse_char_fmt */parse_char_fmt,
  /* parse_kern_fmt */parse_kern_fmt,
  /* replaceFilename */replaceFilename,
  /* parseFontFormat */parseFontFormat,
  /* getChar */getChar,
  /* drawChar */drawChar,
  /* drawString */drawString,
  /* calcStringWidth */calcStringWidth
];

var Internal = 0;

exports.Internal = Internal;
exports.Font     = Font;
/* IntMap Not a pure module */


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Block                  = __webpack_require__(5);
var MyUtils                = __webpack_require__(13);
var GravShared             = __webpack_require__(16);
var Reprocessing_Env       = __webpack_require__(4);
var Reprocessing_Utils     = __webpack_require__(30);
var Reprocessing_Constants = __webpack_require__(6);

function red($staropt$star, pos) {
  var warmup = $staropt$star ? $staropt$star[0] : 200;
  return /* record */[
          /* pos */pos,
          /* color */Reprocessing_Constants.red,
          /* size */20,
          /* warmup : tuple */[
            0,
            50
          ],
          /* health : tuple */[
            1,
            1
          ],
          /* movement : Stationary */0,
          /* behavior : SimpleShooter */Block.__(0, [
              /* tuple */[
                warmup,
                300
              ],
              /* tuple */[
                Reprocessing_Constants.white,
                5,
                3,
                5
              ]
            ])
        ];
}

function blue($staropt$star, pos) {
  var warmup = $staropt$star ? $staropt$star[0] : 0;
  return /* record */[
          /* pos */pos,
          /* color */Reprocessing_Constants.blue,
          /* size */20,
          /* warmup : tuple */[
            0,
            50
          ],
          /* health : tuple */[
            2,
            2
          ],
          /* movement : Stationary */0,
          /* behavior : SimpleShooter */Block.__(0, [
              /* tuple */[
                warmup,
                100
              ],
              /* tuple */[
                Reprocessing_Constants.white,
                5,
                2,
                5
              ]
            ])
        ];
}

function green($staropt$star, pos) {
  var warmup = $staropt$star ? $staropt$star[0] : 0;
  return /* record */[
          /* pos */pos,
          /* color */Reprocessing_Constants.green,
          /* size */25,
          /* warmup : tuple */[
            0,
            50
          ],
          /* health : tuple */[
            3,
            3
          ],
          /* movement : Stationary */0,
          /* behavior : TripleShooter */Block.__(1, [
              /* tuple */[
                warmup,
                200
              ],
              /* tuple */[
                Reprocessing_Constants.blue,
                7,
                2,
                10
              ]
            ])
        ];
}

var colorPink = Reprocessing_Utils.color(255, 100, 200, 255);

function pink($staropt$star, pos) {
  var warmup = $staropt$star ? $staropt$star[0] : 0;
  return /* record */[
          /* pos */pos,
          /* color */colorPink,
          /* size */30,
          /* warmup : tuple */[
            0,
            50
          ],
          /* health : tuple */[
            4,
            4
          ],
          /* movement : GoToPosition */Block.__(0, [
              pos,
              MyUtils.v0
            ]),
          /* behavior : Asteroid */Block.__(3, [
              /* tuple */[
                warmup,
                200
              ],
              0,
              /* tuple */[
                colorPink,
                10,
                2,
                15
              ]
            ])
        ];
}

var color = Reprocessing_Utils.color(100, 150, 255, 255);

function scatterShooter($staropt$star, pos) {
  var warmup = $staropt$star ? $staropt$star[0] : 200;
  return /* record */[
          /* pos */pos,
          /* color */color,
          /* size */35,
          /* warmup : tuple */[
            0,
            50
          ],
          /* health : tuple */[
            10,
            10
          ],
          /* movement : Wander */Block.__(1, [
              pos,
              MyUtils.v0
            ]),
          /* behavior : ScatterShot */Block.__(2, [
              /* tuple */[
                warmup,
                500
              ],
              5,
              /* tuple */[
                color,
                10,
                3,
                30
              ],
              /* tuple */[
                color,
                7,
                2,
                10
              ]
            ])
        ];
}

var levels = /* array */[
  /* :: */[
    red(/* None */0, /* tuple */[
          600,
          600
        ]),
    /* [] */0
  ],
  /* :: */[
    red(/* None */0, /* tuple */[
          200,
          200
        ]),
    /* :: */[
      red(/* None */0, /* tuple */[
            600,
            600
          ]),
      /* [] */0
    ]
  ],
  /* :: */[
    blue(/* None */0, /* tuple */[
          600,
          600
        ]),
    /* [] */0
  ],
  /* :: */[
    blue(/* None */0, /* tuple */[
          600,
          600
        ]),
    /* :: */[
      blue(/* None */0, /* tuple */[
            200,
            200
          ]),
      /* [] */0
    ]
  ],
  /* :: */[
    blue(/* None */0, /* tuple */[
          600,
          600
        ]),
    /* :: */[
      blue(/* None */0, /* tuple */[
            200,
            200
          ]),
      /* :: */[
        blue(/* None */0, /* tuple */[
              600,
              200
            ]),
        /* :: */[
          blue(/* None */0, /* tuple */[
                200,
                600
              ]),
          /* [] */0
        ]
      ]
    ]
  ],
  /* :: */[
    green(/* None */0, /* tuple */[
          600,
          600
        ]),
    /* [] */0
  ],
  /* :: */[
    pink(/* None */0, /* tuple */[
          600,
          600
        ]),
    /* [] */0
  ],
  /* :: */[
    scatterShooter(/* None */0, /* tuple */[
          600,
          600
        ]),
    /* [] */0
  ]
];

function makePhoneLevels(env) {
  var w = Reprocessing_Env.width(env) * GravShared.phoneScale;
  var h = Reprocessing_Env.height(env) * GravShared.phoneScale;
  return /* array */[
          /* :: */[
            red(/* None */0, /* tuple */[
                  w / 2,
                  w / 2
                ]),
            /* [] */0
          ],
          /* :: */[
            red(/* None */0, /* tuple */[
                  w / 2,
                  w / 2
                ]),
            /* :: */[
              red(/* None */0, /* tuple */[
                    w / 2,
                    h - w / 2
                  ]),
              /* [] */0
            ]
          ],
          /* :: */[
            blue(/* None */0, /* tuple */[
                  w / 2,
                  w / 2
                ]),
            /* [] */0
          ],
          /* :: */[
            blue(/* None */0, /* tuple */[
                  w / 2,
                  w / 2
                ]),
            /* :: */[
              blue(/* None */0, /* tuple */[
                    w / 2,
                    h - w / 2
                  ]),
              /* [] */0
            ]
          ],
          /* :: */[
            blue(/* None */0, /* tuple */[
                  w / 3,
                  w / 3
                ]),
            /* :: */[
              blue(/* None */0, /* tuple */[
                    w * 2 / 3,
                    w / 3
                  ]),
              /* :: */[
                blue(/* None */0, /* tuple */[
                      w / 3,
                      h - w / 3
                    ]),
                /* :: */[
                  blue(/* None */0, /* tuple */[
                        w * 2 / 3,
                        h - w / 3
                      ]),
                  /* [] */0
                ]
              ]
            ]
          ]
        ];
}

function getLevels(env) {
  if (GravShared.isPhone !== 0) {
    return makePhoneLevels(env);
  } else {
    return levels;
  }
}

exports.red             = red;
exports.blue            = blue;
exports.green           = green;
exports.colorPink       = colorPink;
exports.pink            = pink;
exports.color           = color;
exports.scatterShooter  = scatterShooter;
exports.levels          = levels;
exports.makePhoneLevels = makePhoneLevels;
exports.getLevels       = getLevels;
/* colorPink Not a pure module */


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Reprocessing_Draw = __webpack_require__(11);
var Reprocessing_Font = __webpack_require__(42);

function centerText(param, font, body, env) {
  var match = font[0];
  if (match) {
    var width = Reprocessing_Font.Font[/* calcStringWidth */12](env, match[0], body);
    return Reprocessing_Draw.text(font, body, /* tuple */[
                param[0] - (width / 2 | 0) | 0,
                param[1]
              ], env);
  } else {
    return /* () */0;
  }
}

exports.centerText = centerText;
/* Reprocessing_Draw Not a pure module */


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var GravGame          = __webpack_require__(46);
var DoneScreen        = __webpack_require__(72);
var GravShared        = __webpack_require__(16);
var LevelPicker       = __webpack_require__(73);
var ScreenManager     = __webpack_require__(23);
var WelcomeScreen     = __webpack_require__(74);
var Reprocessing_Env  = __webpack_require__(4);
var Reprocessing_Draw = __webpack_require__(11);

function editState(level) {
  return /* Some */[level];
}

var LevelEditor = /* module */[
  /* blankState : None */0,
  /* editState */editState,
  /* screen */ScreenManager.empty
];

function setup(initialScreen, env) {
  var match = GravShared.isPhone !== 0 ? /* tuple */[
      Reprocessing_Env.windowWidth(env),
      Reprocessing_Env.windowHeight(env)
    ] : /* tuple */[
      800,
      800
    ];
  Reprocessing_Env.size(match[0], match[1], env);
  var match$1 = Reprocessing_Env.loadUserData("highest_beaten_level", env);
  return /* tuple */[
          /* record */[
            /* highestBeatenLevel */match$1 ? match$1[0] : -1,
            /* userLevels : array */[],
            /* highScores : array */[],
            /* smallFont */Reprocessing_Draw.loadFont("./assets/SFCompactDisplay-Regular-16.fnt", /* Some */[/* false */0], env),
            /* textFont */Reprocessing_Draw.loadFont("./assets/SFCompactDisplay-Regular-24.fnt", /* Some */[/* false */0], env),
            /* titleFont */Reprocessing_Draw.loadFont("./assets/SFCompactRounded-Black-48.fnt", /* Some */[/* false */0], env)
          ],
          initialScreen
        ];
}

function transitionTo(_, transition, env) {
  if (typeof transition === "number") {
    if (transition >= 389604418) {
      if (transition >= 904096751) {
        return /* `WelcomeScreen */[
                346237326,
                WelcomeScreen.initialState(env)
              ];
      } else {
        console.log("Start");
        return /* `Game */[
                792207378,
                GravGame.initialState(env)
              ];
      }
    } else if (transition >= 159781690) {
      return /* `LevelEditor */[
              -417964495,
              /* None */0
            ];
    } else {
      return /* `LevelPicker */[
              705042450,
              LevelPicker.initialState
            ];
    }
  } else {
    var variant = transition[0];
    if (variant !== -260283624) {
      if (variant >= 671741690) {
        return /* `LevelEditor */[
                -417964495,
                /* Some */[transition[1]]
              ];
      } else {
        return /* `DoneScreen */[
                34271662,
                DoneScreen.initialState(transition[1])
              ];
      }
    } else {
      return /* `Game */[
              792207378,
              GravGame.newAtLevel(env, transition[1])
            ];
    }
  }
}

function getScreen(state) {
  var variant = state[0];
  if (variant !== 34271662) {
    if (variant >= 705042450) {
      if (variant >= 792207378) {
        return /* Screen */[
                state[1],
                GravGame.screen,
                (function (state) {
                    return /* `Game */[
                            792207378,
                            state
                          ];
                  })
              ];
      } else {
        return /* Screen */[
                state[1],
                LevelPicker.screen,
                (function (state) {
                    return /* `LevelPicker */[
                            705042450,
                            state
                          ];
                  })
              ];
      }
    } else if (variant >= 346237326) {
      return /* Screen */[
              state[1],
              WelcomeScreen.screen,
              (function (state) {
                  return /* `WelcomeScreen */[
                          346237326,
                          state
                        ];
                })
            ];
    } else {
      return /* Screen */[
              state[1],
              ScreenManager.empty,
              (function (state) {
                  return /* `LevelEditor */[
                          -417964495,
                          state
                        ];
                })
            ];
    }
  } else {
    return /* Screen */[
            state[1],
            DoneScreen.screen,
            (function (state) {
                return /* `DoneScreen */[
                        34271662,
                        state
                      ];
              })
          ];
  }
}

var initialScreen = /* `WelcomeScreen */[
  346237326,
  /* () */0
];

ScreenManager.run(transitionTo, (function (param) {
        return setup(initialScreen, param);
      }), getScreen, "./assets/SFCompactDisplay-Regular-16.fnt");

exports.LevelEditor   = LevelEditor;
exports.setup         = setup;
exports.transitionTo  = transitionTo;
exports.getScreen     = getScreen;
exports.initialScreen = initialScreen;
/*  Not a pure module */


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var List                   = __webpack_require__(7);
var Block                  = __webpack_require__(5);
var MyUtils                = __webpack_require__(13);
var GravDraw               = __webpack_require__(56);
var GravStep               = __webpack_require__(71);
var Caml_array             = __webpack_require__(12);
var GravLevels             = __webpack_require__(43);
var GravShared             = __webpack_require__(16);
var ScreenManager          = __webpack_require__(23);
var Reprocessing_Env       = __webpack_require__(4);
var Reprocessing_Draw      = __webpack_require__(11);
var Reprocessing_Constants = __webpack_require__(6);

function newGame(env) {
  var levels = GravShared.isPhone !== 0 ? GravLevels.makePhoneLevels(env) : GravLevels.levels;
  var font = Reprocessing_Draw.loadFont("./assets/SFCompactRounded-Black-48.fnt", /* Some */[/* false */0], env);
  return /* record */[
          /* status : Running */0,
          /* level */0,
          /* font */font,
          /* levels */levels,
          /* me : record */[
            /* pos */GravShared.getPhonePos(env),
            /* color */Reprocessing_Constants.green,
            /* health */GravShared.fullPlayerHealth,
            /* lives */3,
            /* vel */MyUtils.v0,
            /* acc */MyUtils.v0,
            /* size */15
          ],
          /* enemies */Caml_array.caml_array_get(levels, 0),
          /* bullets : [] */0,
          /* explosions : [] */0
        ];
}

function drawState(state, env) {
  Reprocessing_Draw.background(Reprocessing_Constants.black, env);
  if (GravShared.isPhone) {
    Reprocessing_Draw.pushMatrix(env);
    Reprocessing_Draw.scale(1 / GravShared.phoneScale, 1 / GravShared.phoneScale, env);
  }
  if (state[/* status */0] === /* Running */0 || state[/* status */0] === /* Paused */1) {
    GravDraw.drawMe(state[/* me */4], env);
  }
  List.iter((function (param) {
          return GravDraw.drawEnemy(env, param);
        }), state[/* enemies */5]);
  List.iter((function (param) {
          return GravDraw.drawBullet(env, param);
        }), state[/* bullets */6]);
  List.iter((function (param) {
          return GravDraw.drawExplosion(env, param);
        }), state[/* explosions */7]);
  if (GravShared.isPhone) {
    Reprocessing_Draw.popMatrix(env);
  }
  return GravDraw.drawStatus(state[/* me */4], env);
}

function mainLoop(ctx, state, env) {
  var match = state[/* status */0];
  var exit = 0;
  if (typeof match === "number") {
    if (match !== 0) {
      drawState(state, env);
      return /* Same */Block.__(0, [
                ctx,
                state
              ]);
    } else {
      exit = 1;
    }
  } else if (match[0] !== 0) {
    exit = 1;
  } else if (state[/* me */4][/* lives */3] > 0) {
    var init = state[/* me */4];
    return /* Same */Block.__(0, [
              ctx,
              /* record */[
                /* status : Running */0,
                /* level */state[/* level */1],
                /* font */state[/* font */2],
                /* levels */state[/* levels */3],
                /* me : record */[
                  /* pos */init[/* pos */0],
                  /* color */init[/* color */1],
                  /* health */GravShared.fullPlayerHealth,
                  /* lives */state[/* me */4][/* lives */3] - 1 | 0,
                  /* vel */init[/* vel */4],
                  /* acc */init[/* acc */5],
                  /* size */init[/* size */6]
                ],
                /* enemies */Caml_array.caml_array_get(state[/* levels */3], state[/* level */1]),
                /* bullets : [] */0,
                /* explosions : [] */0
              ]
            ]);
  } else {
    return /* Transition */Block.__(1, [
              ctx,
              /* `Finished */[
                -289386606,
                /* false */0
              ]
            ]);
  }
  if (exit === 1) {
    var newrecord = state.slice();
    var t = state[/* status */0];
    newrecord[/* status */0] = typeof t === "number" ? t : /* Dead */[t[0] - 1 | 0];
    var match$1 = +(newrecord[/* status */0] === /* Running */0);
    var state$1 = match$1 !== 0 ? (
        GravShared.isPhone !== 0 ? GravStep.stepMeMouse(newrecord, env) : GravStep.stepMeKeys(newrecord, env)
      ) : newrecord;
    var state$2 = GravStep.stepEnemies(state$1, env);
    var newrecord$1 = state$2.slice();
    newrecord$1[/* explosions */7] = GravStep.stepExplosions(state$2[/* explosions */7], env);
    var state$3 = GravStep.stepBullets(newrecord$1, env);
    drawState(state$3, env);
    var match$2 = +(state$3[/* enemies */5] !== /* [] */0 || state$3[/* status */0] !== /* Running */0);
    if (match$2 !== 0) {
      return /* Same */Block.__(0, [
                ctx,
                state$3
              ]);
    } else {
      var ctx$1;
      if (state$3[/* level */1] > ctx[/* highestBeatenLevel */0]) {
        Reprocessing_Env.saveUserData("highest_beaten_level", state$3[/* level */1], env);
        var newrecord$2 = ctx.slice();
        newrecord$2[/* highestBeatenLevel */0] = state$3[/* level */1];
        ctx$1 = newrecord$2;
      } else {
        ctx$1 = ctx;
      }
      var match$3 = +(state$3[/* level */1] >= (state$3[/* levels */3].length - 1 | 0));
      if (match$3 !== 0) {
        return /* Transition */Block.__(1, [
                  ctx$1,
                  /* `Finished */[
                    -289386606,
                    /* true */1
                  ]
                ]);
      } else {
        var newrecord$3 = state$3.slice();
        return /* Same */Block.__(0, [
                  ctx$1,
                  (newrecord$3[/* level */1] = state$3[/* level */1] + 1 | 0, newrecord$3[/* enemies */5] = Caml_array.caml_array_get(state$3[/* levels */3], state$3[/* level */1] + 1 | 0), newrecord$3)
                ]);
      }
    }
  }
  
}

function newAtLevel(env, level) {
  var state = newGame(env);
  if (level >= state[/* levels */3].length) {
    return state;
  } else {
    return /* record */[
            /* status : Running */0,
            /* level */level,
            /* font */state[/* font */2],
            /* levels */state[/* levels */3],
            /* me */state[/* me */4],
            /* enemies */Caml_array.caml_array_get(state[/* levels */3], level),
            /* bullets */state[/* bullets */6],
            /* explosions */state[/* explosions */7]
          ];
  }
}

function keyPressed(ctx, state, env) {
  var k = Reprocessing_Env.keyCode(env);
  if (k !== 3) {
    var switcher = k - 4 | 0;
    var tmp;
    if (switcher > 38 || switcher < 0) {
      tmp = state;
    } else {
      switch (switcher) {
        case 0 : 
            var match = state[/* status */0];
            if (typeof match === "number") {
              if (match !== 0) {
                var newrecord = state.slice();
                newrecord[/* status */0] = /* Running */0;
                tmp = newrecord;
              } else {
                var newrecord$1 = state.slice();
                newrecord$1[/* status */0] = /* Paused */1;
                tmp = newrecord$1;
              }
            } else {
              tmp = state;
            }
            break;
        case 7 : 
            tmp = newAtLevel(env, 0);
            break;
        case 8 : 
            tmp = newAtLevel(env, 1);
            break;
        case 9 : 
            tmp = newAtLevel(env, 2);
            break;
        case 10 : 
            tmp = newAtLevel(env, 3);
            break;
        case 11 : 
            tmp = newAtLevel(env, 4);
            break;
        case 12 : 
            tmp = newAtLevel(env, 5);
            break;
        case 13 : 
            tmp = newAtLevel(env, 6);
            break;
        case 14 : 
            tmp = newAtLevel(env, 7);
            break;
        case 15 : 
            tmp = newAtLevel(env, 8);
            break;
        case 1 : 
        case 2 : 
        case 3 : 
        case 4 : 
        case 5 : 
        case 6 : 
        case 16 : 
        case 17 : 
        case 18 : 
        case 19 : 
        case 20 : 
        case 21 : 
        case 22 : 
        case 23 : 
        case 24 : 
        case 25 : 
        case 26 : 
        case 27 : 
        case 28 : 
        case 29 : 
        case 30 : 
        case 31 : 
        case 32 : 
        case 33 : 
        case 34 : 
        case 35 : 
        case 36 : 
        case 37 : 
            tmp = state;
            break;
        case 38 : 
            tmp = newGame(env);
            break;
        
      }
    }
    return /* Same */Block.__(0, [
              ctx,
              tmp
            ]);
  } else {
    return /* Transition */Block.__(1, [
              ctx,
              /* Quit */904096751
            ]);
  }
}

var screen_000 = mainLoop;

var screen_001 = keyPressed;

var screen_002 = /* mouseDown */ScreenManager.empty[/* mouseDown */2];

var screen = /* record */[
  screen_000,
  screen_001,
  screen_002
];

var initialState = newGame;

exports.newGame      = newGame;
exports.initialState = initialState;
exports.drawState    = drawState;
exports.mainLoop     = mainLoop;
exports.newAtLevel   = newAtLevel;
exports.keyPressed   = keyPressed;
exports.screen       = screen;
/* MyUtils Not a pure module */


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE



function keycodeMap(param) {
  var switcher = param - 8 | 0;
  if (switcher > 214 || switcher < 0) {
    return /* Nothing */65;
  } else {
    switch (switcher) {
      case 0 : 
          return /* Backspace */0;
      case 1 : 
          return /* Tab */1;
      case 5 : 
          return /* Enter */2;
      case 8 : 
          return /* LeftShift */56;
      case 9 : 
          return /* LeftCtrl */55;
      case 10 : 
          return /* LeftAlt */57;
      case 12 : 
          return /* CapsLock */63;
      case 19 : 
          return /* Escape */3;
      case 24 : 
          return /* Space */4;
      case 29 : 
          return /* Left */52;
      case 30 : 
          return /* Up */54;
      case 31 : 
          return /* Right */51;
      case 32 : 
          return /* Down */53;
      case 40 : 
          return /* Num_0 */10;
      case 41 : 
          return /* Num_1 */11;
      case 42 : 
          return /* Num_2 */12;
      case 43 : 
          return /* Num_3 */13;
      case 44 : 
          return /* Num_4 */14;
      case 45 : 
          return /* Num_5 */15;
      case 46 : 
          return /* Num_6 */16;
      case 47 : 
          return /* Num_7 */17;
      case 48 : 
          return /* Num_8 */18;
      case 49 : 
          return /* Num_9 */19;
      case 57 : 
          return /* A */25;
      case 58 : 
          return /* B */26;
      case 59 : 
          return /* C */27;
      case 60 : 
          return /* D */28;
      case 61 : 
          return /* E */29;
      case 62 : 
          return /* F */30;
      case 63 : 
          return /* G */31;
      case 64 : 
          return /* H */32;
      case 65 : 
          return /* I */33;
      case 66 : 
          return /* J */34;
      case 67 : 
          return /* K */35;
      case 68 : 
          return /* L */36;
      case 69 : 
          return /* M */37;
      case 70 : 
          return /* N */38;
      case 71 : 
          return /* O */39;
      case 72 : 
          return /* P */40;
      case 73 : 
          return /* Q */41;
      case 74 : 
          return /* R */42;
      case 75 : 
          return /* S */43;
      case 76 : 
          return /* T */44;
      case 77 : 
          return /* U */45;
      case 78 : 
          return /* V */46;
      case 79 : 
          return /* W */47;
      case 80 : 
          return /* X */48;
      case 81 : 
          return /* Y */49;
      case 82 : 
          return /* Z */50;
      case 83 : 
          return /* LeftOsKey */58;
      case 85 : 
          return /* RightOsKey */62;
      case 178 : 
          return /* Semicolon */20;
      case 179 : 
          return /* Equals */21;
      case 180 : 
          return /* Comma */6;
      case 181 : 
          return /* Minus */7;
      case 182 : 
          return /* Period */8;
      case 183 : 
          return /* Slash */9;
      case 184 : 
          return /* Backtick */64;
      case 2 : 
      case 3 : 
      case 4 : 
      case 6 : 
      case 7 : 
      case 11 : 
      case 13 : 
      case 14 : 
      case 15 : 
      case 16 : 
      case 17 : 
      case 18 : 
      case 20 : 
      case 21 : 
      case 22 : 
      case 23 : 
      case 25 : 
      case 26 : 
      case 27 : 
      case 28 : 
      case 33 : 
      case 34 : 
      case 35 : 
      case 36 : 
      case 37 : 
      case 38 : 
      case 39 : 
      case 50 : 
      case 51 : 
      case 52 : 
      case 53 : 
      case 54 : 
      case 55 : 
      case 56 : 
      case 84 : 
      case 86 : 
      case 87 : 
      case 88 : 
      case 89 : 
      case 90 : 
      case 91 : 
      case 92 : 
      case 93 : 
      case 94 : 
      case 95 : 
      case 96 : 
      case 97 : 
      case 98 : 
      case 99 : 
      case 100 : 
      case 101 : 
      case 102 : 
      case 103 : 
      case 104 : 
      case 105 : 
      case 106 : 
      case 107 : 
      case 108 : 
      case 109 : 
      case 110 : 
      case 111 : 
      case 112 : 
      case 113 : 
      case 114 : 
      case 115 : 
      case 116 : 
      case 117 : 
      case 118 : 
      case 119 : 
      case 120 : 
      case 121 : 
      case 122 : 
      case 123 : 
      case 124 : 
      case 125 : 
      case 126 : 
      case 127 : 
      case 128 : 
      case 129 : 
      case 130 : 
      case 131 : 
      case 132 : 
      case 133 : 
      case 134 : 
      case 135 : 
      case 136 : 
      case 137 : 
      case 138 : 
      case 139 : 
      case 140 : 
      case 141 : 
      case 142 : 
      case 143 : 
      case 144 : 
      case 145 : 
      case 146 : 
      case 147 : 
      case 148 : 
      case 149 : 
      case 150 : 
      case 151 : 
      case 152 : 
      case 153 : 
      case 154 : 
      case 155 : 
      case 156 : 
      case 157 : 
      case 158 : 
      case 159 : 
      case 160 : 
      case 161 : 
      case 162 : 
      case 163 : 
      case 164 : 
      case 165 : 
      case 166 : 
      case 167 : 
      case 168 : 
      case 169 : 
      case 170 : 
      case 171 : 
      case 172 : 
      case 173 : 
      case 174 : 
      case 175 : 
      case 176 : 
      case 177 : 
      case 185 : 
      case 186 : 
      case 187 : 
      case 188 : 
      case 189 : 
      case 190 : 
      case 191 : 
      case 192 : 
      case 193 : 
      case 194 : 
      case 195 : 
      case 196 : 
      case 197 : 
      case 198 : 
      case 199 : 
      case 200 : 
      case 201 : 
      case 202 : 
      case 203 : 
      case 204 : 
      case 205 : 
      case 206 : 
      case 207 : 
      case 208 : 
      case 209 : 
      case 210 : 
          return /* Nothing */65;
      case 211 : 
          return /* OpenBracket */22;
      case 212 : 
          return /* Backslash */23;
      case 213 : 
          return /* CloseBracket */24;
      case 214 : 
          return /* Quote */5;
      
    }
  }
}

exports.keycodeMap = keycodeMap;
/* No side effect */


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__ = __webpack_require__(38);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function() { return __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2", function() { return __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2d", function() { return __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__; });
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
// END HEADER













/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["LDU"] = LDU;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(10);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    let a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];

  // Calculate the determinant
  let det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] =  a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] =  a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  let a0 = a[0];
  out[0] =  a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] =  a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2]/a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat2.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(10);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  let aa = a[0], ab = a[1], ac = a[2], ad = a[3];
  let atx = a[4], aty = a[5];

  let det = aa * ad - ab * ac;
  if(!det){
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromXRotation"] = fromXRotation;
/* harmony export (immutable) */ __webpack_exports__["fromYRotation"] = fromYRotation;
/* harmony export (immutable) */ __webpack_exports__["fromZRotation"] = fromZRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslation"] = fromRotationTranslation;
/* harmony export (immutable) */ __webpack_exports__["getTranslation"] = getTranslation;
/* harmony export (immutable) */ __webpack_exports__["getScaling"] = getScaling;
/* harmony export (immutable) */ __webpack_exports__["getRotation"] = getRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScale"] = fromRotationTranslationScale;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScaleOrigin"] = fromRotationTranslationScaleOrigin;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["frustum"] = frustum;
/* harmony export (immutable) */ __webpack_exports__["perspective"] = perspective;
/* harmony export (immutable) */ __webpack_exports__["perspectiveFromFieldOfView"] = perspectiveFromFieldOfView;
/* harmony export (immutable) */ __webpack_exports__["ortho"] = ortho;
/* harmony export (immutable) */ __webpack_exports__["lookAt"] = lookAt;
/* harmony export (immutable) */ __webpack_exports__["targetTo"] = targetTo;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(10);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 4x4 Matrix
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}


/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a03 = a[3];
    let a12 = a[6], a13 = a[7];
    let a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
  out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
  out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
  out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
  out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
  out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  // Cache only the current line of the second matrix
  let b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
  out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
  out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
  out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  let x = v[0], y = v[1], z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
    out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
    out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1], z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;

  if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
  a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
  a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
  b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
  b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[0]  = a[0];
    out[1]  = a[1];
    out[2]  = a[2];
    out[3]  = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[4]  = a[4];
    out[5]  = a[5];
    out[6]  = a[6];
    out[7]  = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[8]  = a[8];
    out[9]  = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;

  if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = 1;
  out[1]  = 0;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = 0;
  out[2]  = -s;
  out[3]  = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = s;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  let trace = mat[0] + mat[5] + mat[10];
  let S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if ((mat[0] > mat[5])&(mat[0] > mat[10])) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  let ox = o[0];
  let oy = o[1];
  let oz = o[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  let rl = 1 / (right - left);
  let tb = 1 / (top - bottom);
  let nf = 1 / (near - far);
  out[0] = (near * 2) * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = (near * 2) * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (far * near * 2) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (2 * far * near) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  let upTan = Math.tan(fov.upDegrees * Math.PI/180.0);
  let downTan = Math.tan(fov.downDegrees * Math.PI/180.0);
  let leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0);
  let rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0);
  let xScale = 2.0 / (leftTan + rightTan);
  let yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = ((upTan - downTan) * yScale * 0.5);
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = (far * near) / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  let eyex = eye[0];
  let eyey = eye[1];
  let eyez = eye[2];
  let upx = up[0];
  let upy = up[1];
  let upz = up[2];
  let centerx = center[0];
  let centery = center[1];
  let centerz = center[2];

  if (Math.abs(eyex - centerx) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"] &&
      Math.abs(eyey - centery) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"] &&
      Math.abs(eyez - centerz) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) {
    return mat4.identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  let eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  let z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  let len = z0*z0 + z1*z1 + z2*z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  let x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
          a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
          a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
          a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  out[9] = a[9] + (b[9] * scale);
  out[10] = a[10] + (b[10] * scale);
  out[11] = a[11] + (b[11] * scale);
  out[12] = a[12] + (b[12] * scale);
  out[13] = a[13] + (b[13] * scale);
  out[14] = a[14] + (b[14] * scale);
  out[15] = a[15] + (b[15] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
         a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] &&
         a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
         a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3];
  let a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7];
  let a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11];
  let a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];

  let b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3];
  let b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7];
  let b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11];
  let b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];

  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
          Math.abs(a9 - b9) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
          Math.abs(a10 - b10) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
          Math.abs(a11 - b11) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
          Math.abs(a12 - b12) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
          Math.abs(a13 - b13) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
          Math.abs(a14 - b14) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
          Math.abs(a15 - b15) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["setAxisAngle"] = setAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["getAxisAngle"] = getAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["calculateW"] = calculateW;
/* harmony export (immutable) */ __webpack_exports__["slerp"] = slerp;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["conjugate"] = conjugate;
/* harmony export (immutable) */ __webpack_exports__["fromMat3"] = fromMat3;
/* harmony export (immutable) */ __webpack_exports__["fromEuler"] = fromEuler;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mat3__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vec3__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vec4__ = __webpack_require__(38);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */






/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  let rad = Math.acos(q[3]) * 2.0;
  let s = Math.sin(rad / 2.0);
  if (s != 0.0) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let by = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bz = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  let x = a[0], y = a[1], z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if ( cosom < 0.0 ) {
    cosom = -cosom;
    bx = - bx;
    by = - by;
    bz = - bz;
    bw = - bw;
  }
  // calculate coefficients
  if ( (1.0 - cosom) > 0.000001 ) {
    // standard case (slerp)
    omega  = Math.acos(cosom);
    sinom  = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let dot = a0*a0 + a1*a1 + a2*a2 + a3*a3;
  let invDot = dot ? 1.0/dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0*invDot;
  out[1] = -a1*invDot;
  out[2] = -a2*invDot;
  out[3] = a3*invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if ( fTrace > 0.0 ) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0);  // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5/fRoot;  // 1/(4w)
    out[0] = (m[5]-m[7])*fRoot;
    out[1] = (m[6]-m[2])*fRoot;
    out[2] = (m[1]-m[3])*fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if ( m[4] > m[0] )
      i = 1;
    if ( m[8] > m[i*3+i] )
      i = 2;
    let j = (i+1)%3;
    let k = (i+2)%3;

    fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
    out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
    out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
    let halfToRad = 0.5 * Math.PI / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;

    let sx = Math.sin(x);
    let cx = Math.cos(x);
    let sy = Math.sin(y);
    let cy = Math.cos(y);
    let sz = Math.sin(z);
    let cz = Math.cos(z);

    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;

    return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
const clone = __WEBPACK_IMPORTED_MODULE_3__vec4__["clone"];
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;


/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
const fromValues = __WEBPACK_IMPORTED_MODULE_3__vec4__["fromValues"];
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;


/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
const copy = __WEBPACK_IMPORTED_MODULE_3__vec4__["copy"];
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;


/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
const set = __WEBPACK_IMPORTED_MODULE_3__vec4__["set"];
/* harmony export (immutable) */ __webpack_exports__["set"] = set;


/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
const add = __WEBPACK_IMPORTED_MODULE_3__vec4__["add"];
/* harmony export (immutable) */ __webpack_exports__["add"] = add;


/**
 * Alias for {@link quat.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
const scale = __WEBPACK_IMPORTED_MODULE_3__vec4__["scale"];
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;


/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = __WEBPACK_IMPORTED_MODULE_3__vec4__["dot"];
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;


/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
const lerp = __WEBPACK_IMPORTED_MODULE_3__vec4__["lerp"];
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;


/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length = __WEBPACK_IMPORTED_MODULE_3__vec4__["length"];
/* harmony export (immutable) */ __webpack_exports__["length"] = length;


/**
 * Alias for {@link quat.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
const squaredLength = __WEBPACK_IMPORTED_MODULE_3__vec4__["squaredLength"];
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;


/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize = __WEBPACK_IMPORTED_MODULE_3__vec4__["normalize"];
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;


/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const exactEquals = __WEBPACK_IMPORTED_MODULE_3__vec4__["exactEquals"];
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;


/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const equals = __WEBPACK_IMPORTED_MODULE_3__vec4__["equals"];
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;


/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
const rotationTo = (function() {
  let tmpvec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["create"]();
  let xUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["fromValues"](1,0,0);
  let yUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["fromValues"](0,1,0);

  return function(out, a, b) {
    let dot = __WEBPACK_IMPORTED_MODULE_2__vec3__["dot"](a, b);
    if (dot < -0.999999) {
      __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, xUnitVec3, a);
      if (__WEBPACK_IMPORTED_MODULE_2__vec3__["len"](tmpvec3) < 0.000001)
        __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, yUnitVec3, a);
      __WEBPACK_IMPORTED_MODULE_2__vec3__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
})();
/* harmony export (immutable) */ __webpack_exports__["rotationTo"] = rotationTo;


/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */
const sqlerp = (function () {
  let temp1 = create();
  let temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}());
/* harmony export (immutable) */ __webpack_exports__["sqlerp"] = sqlerp;


/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
const setAxes = (function() {
  let matr = __WEBPACK_IMPORTED_MODULE_1__mat3__["create"]();

  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
})();
/* harmony export (immutable) */ __webpack_exports__["setAxes"] = setAxes;



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat2"] = transformMat2;
/* harmony export (immutable) */ __webpack_exports__["transformMat2d"] = transformMat2d;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(10);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = 0;
  out[1] = 0;
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
};

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
};

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
};

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
};

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
};

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round (out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return Math.sqrt(x*x + y*y);
};

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return x*x + y*y;
};

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
    y = a[1];
  return Math.sqrt(x*x + y*y);
};

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength (a) {
  var x = a[0],
    y = a[1];
  return x*x + y*y;
};

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
};

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
    y = a[1];
  var len = x*x + y*y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
    ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1];
  let b0 = b[0], b1 = b[1];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec2.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec2.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec2.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec2.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 2;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var List                    = __webpack_require__(7);
var Curry                   = __webpack_require__(1);
var Caml_builtin_exceptions = __webpack_require__(0);

function Make(funarg) {
  var height = function (param) {
    if (param) {
      return param[3];
    } else {
      return 0;
    }
  };
  var create = function (l, v, r) {
    var hl = l ? l[3] : 0;
    var hr = r ? r[3] : 0;
    return /* Node */[
            l,
            v,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  };
  var bal = function (l, v, r) {
    var hl = l ? l[3] : 0;
    var hr = r ? r[3] : 0;
    if (hl > (hr + 2 | 0)) {
      if (l) {
        var lr = l[2];
        var lv = l[1];
        var ll = l[0];
        if (height(ll) >= height(lr)) {
          return create(ll, lv, create(lr, v, r));
        } else if (lr) {
          return create(create(ll, lv, lr[0]), lr[1], create(lr[2], v, r));
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Set.bal"
              ];
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Set.bal"
            ];
      }
    } else if (hr > (hl + 2 | 0)) {
      if (r) {
        var rr = r[2];
        var rv = r[1];
        var rl = r[0];
        if (height(rr) >= height(rl)) {
          return create(create(l, v, rl), rv, rr);
        } else if (rl) {
          return create(create(l, v, rl[0]), rl[1], create(rl[2], rv, rr));
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Set.bal"
              ];
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Set.bal"
            ];
      }
    } else {
      return /* Node */[
              l,
              v,
              r,
              hl >= hr ? hl + 1 | 0 : hr + 1 | 0
            ];
    }
  };
  var add = function (x, t) {
    if (t) {
      var r = t[2];
      var v = t[1];
      var l = t[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(add(x, l), v, r);
        } else {
          return bal(l, v, add(x, r));
        }
      } else {
        return t;
      }
    } else {
      return /* Node */[
              /* Empty */0,
              x,
              /* Empty */0,
              1
            ];
    }
  };
  var singleton = function (x) {
    return /* Node */[
            /* Empty */0,
            x,
            /* Empty */0,
            1
          ];
  };
  var add_min_element = function (v, param) {
    if (param) {
      return bal(add_min_element(v, param[0]), param[1], param[2]);
    } else {
      return singleton(v);
    }
  };
  var add_max_element = function (v, param) {
    if (param) {
      return bal(param[0], param[1], add_max_element(v, param[2]));
    } else {
      return singleton(v);
    }
  };
  var join = function (l, v, r) {
    if (l) {
      if (r) {
        var rh = r[3];
        var lh = l[3];
        if (lh > (rh + 2 | 0)) {
          return bal(l[0], l[1], join(l[2], v, r));
        } else if (rh > (lh + 2 | 0)) {
          return bal(join(l, v, r[0]), r[1], r[2]);
        } else {
          return create(l, v, r);
        }
      } else {
        return add_max_element(v, l);
      }
    } else {
      return add_min_element(v, r);
    }
  };
  var min_elt = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var l = param[0];
        if (l) {
          _param = l;
          continue ;
          
        } else {
          return param[1];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var max_elt = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var r = param[2];
        if (r) {
          _param = r;
          continue ;
          
        } else {
          return param[1];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var remove_min_elt = function (param) {
    if (param) {
      var l = param[0];
      if (l) {
        return bal(remove_min_elt(l), param[1], param[2]);
      } else {
        return param[2];
      }
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Set.remove_min_elt"
          ];
    }
  };
  var concat = function (t1, t2) {
    if (t1) {
      if (t2) {
        return join(t1, min_elt(t2), remove_min_elt(t2));
      } else {
        return t1;
      }
    } else {
      return t2;
    }
  };
  var split = function (x, param) {
    if (param) {
      var r = param[2];
      var v = param[1];
      var l = param[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          var match = split(x, l);
          return /* tuple */[
                  match[0],
                  match[1],
                  join(match[2], v, r)
                ];
        } else {
          var match$1 = split(x, r);
          return /* tuple */[
                  join(l, v, match$1[0]),
                  match$1[1],
                  match$1[2]
                ];
        }
      } else {
        return /* tuple */[
                l,
                /* true */1,
                r
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* false */0,
              /* Empty */0
            ];
    }
  };
  var is_empty = function (param) {
    if (param) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  };
  var mem = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = Curry._2(funarg[/* compare */0], x, param[1]);
        if (c) {
          _param = c < 0 ? param[0] : param[2];
          continue ;
          
        } else {
          return /* true */1;
        }
      } else {
        return /* false */0;
      }
    };
  };
  var remove = function (x, param) {
    if (param) {
      var r = param[2];
      var v = param[1];
      var l = param[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(remove(x, l), v, r);
        } else {
          return bal(l, v, remove(x, r));
        }
      } else {
        var t1 = l;
        var t2 = r;
        if (t1) {
          if (t2) {
            return bal(t1, min_elt(t2), remove_min_elt(t2));
          } else {
            return t1;
          }
        } else {
          return t2;
        }
      }
    } else {
      return /* Empty */0;
    }
  };
  var union = function (s1, s2) {
    if (s1) {
      if (s2) {
        var h2 = s2[3];
        var v2 = s2[1];
        var h1 = s1[3];
        var v1 = s1[1];
        if (h1 >= h2) {
          if (h2 === 1) {
            return add(v2, s1);
          } else {
            var match = split(v1, s2);
            return join(union(s1[0], match[0]), v1, union(s1[2], match[2]));
          }
        } else if (h1 === 1) {
          return add(v1, s2);
        } else {
          var match$1 = split(v2, s1);
          return join(union(match$1[0], s2[0]), v2, union(match$1[2], s2[2]));
        }
      } else {
        return s1;
      }
    } else {
      return s2;
    }
  };
  var inter = function (s1, s2) {
    if (s1) {
      if (s2) {
        var r1 = s1[2];
        var v1 = s1[1];
        var l1 = s1[0];
        var match = split(v1, s2);
        var l2 = match[0];
        if (match[1] !== 0) {
          return join(inter(l1, l2), v1, inter(r1, match[2]));
        } else {
          return concat(inter(l1, l2), inter(r1, match[2]));
        }
      } else {
        return /* Empty */0;
      }
    } else {
      return /* Empty */0;
    }
  };
  var diff = function (s1, s2) {
    if (s1) {
      if (s2) {
        var r1 = s1[2];
        var v1 = s1[1];
        var l1 = s1[0];
        var match = split(v1, s2);
        var l2 = match[0];
        if (match[1] !== 0) {
          return concat(diff(l1, l2), diff(r1, match[2]));
        } else {
          return join(diff(l1, l2), v1, diff(r1, match[2]));
        }
      } else {
        return s1;
      }
    } else {
      return /* Empty */0;
    }
  };
  var cons_enum = function (_s, _e) {
    while(true) {
      var e = _e;
      var s = _s;
      if (s) {
        _e = /* More */[
          s[1],
          s[2],
          e
        ];
        _s = s[0];
        continue ;
        
      } else {
        return e;
      }
    };
  };
  var compare = function (s1, s2) {
    var _e1 = cons_enum(s1, /* End */0);
    var _e2 = cons_enum(s2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2) {
          var c = Curry._2(funarg[/* compare */0], e1[0], e2[0]);
          if (c !== 0) {
            return c;
          } else {
            _e2 = cons_enum(e2[1], e2[2]);
            _e1 = cons_enum(e1[1], e1[2]);
            continue ;
            
          }
        } else {
          return 1;
        }
      } else if (e2) {
        return -1;
      } else {
        return 0;
      }
    };
  };
  var equal = function (s1, s2) {
    return +(compare(s1, s2) === 0);
  };
  var subset = function (_s1, _s2) {
    while(true) {
      var s2 = _s2;
      var s1 = _s1;
      if (s1) {
        if (s2) {
          var r2 = s2[2];
          var l2 = s2[0];
          var r1 = s1[2];
          var v1 = s1[1];
          var l1 = s1[0];
          var c = Curry._2(funarg[/* compare */0], v1, s2[1]);
          if (c) {
            if (c < 0) {
              if (subset(/* Node */[
                      l1,
                      v1,
                      /* Empty */0,
                      0
                    ], l2)) {
                _s1 = r1;
                continue ;
                
              } else {
                return /* false */0;
              }
            } else if (subset(/* Node */[
                    /* Empty */0,
                    v1,
                    r1,
                    0
                  ], r2)) {
              _s1 = l1;
              continue ;
              
            } else {
              return /* false */0;
            }
          } else if (subset(l1, l2)) {
            _s2 = r2;
            _s1 = r1;
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    };
  };
  var iter = function (f, _param) {
    while(true) {
      var param = _param;
      if (param) {
        iter(f, param[0]);
        Curry._1(f, param[1]);
        _param = param[2];
        continue ;
        
      } else {
        return /* () */0;
      }
    };
  };
  var fold = function (f, _s, _accu) {
    while(true) {
      var accu = _accu;
      var s = _s;
      if (s) {
        _accu = Curry._2(f, s[1], fold(f, s[0], accu));
        _s = s[2];
        continue ;
        
      } else {
        return accu;
      }
    };
  };
  var for_all = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (Curry._1(p, param[1])) {
          if (for_all(p, param[0])) {
            _param = param[2];
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    };
  };
  var exists = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (Curry._1(p, param[1])) {
          return /* true */1;
        } else if (exists(p, param[0])) {
          return /* true */1;
        } else {
          _param = param[2];
          continue ;
          
        }
      } else {
        return /* false */0;
      }
    };
  };
  var filter = function (p, param) {
    if (param) {
      var v = param[1];
      var l$prime = filter(p, param[0]);
      var pv = Curry._1(p, v);
      var r$prime = filter(p, param[2]);
      if (pv) {
        return join(l$prime, v, r$prime);
      } else {
        return concat(l$prime, r$prime);
      }
    } else {
      return /* Empty */0;
    }
  };
  var partition = function (p, param) {
    if (param) {
      var v = param[1];
      var match = partition(p, param[0]);
      var lf = match[1];
      var lt = match[0];
      var pv = Curry._1(p, v);
      var match$1 = partition(p, param[2]);
      var rf = match$1[1];
      var rt = match$1[0];
      if (pv) {
        return /* tuple */[
                join(lt, v, rt),
                concat(lf, rf)
              ];
      } else {
        return /* tuple */[
                concat(lt, rt),
                join(lf, v, rf)
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* Empty */0
            ];
    }
  };
  var cardinal = function (param) {
    if (param) {
      return (cardinal(param[0]) + 1 | 0) + cardinal(param[2]) | 0;
    } else {
      return 0;
    }
  };
  var elements_aux = function (_accu, _param) {
    while(true) {
      var param = _param;
      var accu = _accu;
      if (param) {
        _param = param[0];
        _accu = /* :: */[
          param[1],
          elements_aux(accu, param[2])
        ];
        continue ;
        
      } else {
        return accu;
      }
    };
  };
  var elements = function (s) {
    return elements_aux(/* [] */0, s);
  };
  var find = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var v = param[1];
        var c = Curry._2(funarg[/* compare */0], x, v);
        if (c) {
          _param = c < 0 ? param[0] : param[2];
          continue ;
          
        } else {
          return v;
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var of_list = function (l) {
    if (l) {
      var match = l[1];
      var x0 = l[0];
      if (match) {
        var match$1 = match[1];
        var x1 = match[0];
        if (match$1) {
          var match$2 = match$1[1];
          var x2 = match$1[0];
          if (match$2) {
            var match$3 = match$2[1];
            var x3 = match$2[0];
            if (match$3) {
              if (match$3[1]) {
                var l$1 = List.sort_uniq(funarg[/* compare */0], l);
                var sub = function (n, l) {
                  var exit = 0;
                  if (n > 3 || n < 0) {
                    exit = 1;
                  } else {
                    switch (n) {
                      case 0 : 
                          return /* tuple */[
                                  /* Empty */0,
                                  l
                                ];
                      case 1 : 
                          if (l) {
                            return /* tuple */[
                                    /* Node */[
                                      /* Empty */0,
                                      l[0],
                                      /* Empty */0,
                                      1
                                    ],
                                    l[1]
                                  ];
                          } else {
                            exit = 1;
                          }
                          break;
                      case 2 : 
                          if (l) {
                            var match = l[1];
                            if (match) {
                              return /* tuple */[
                                      /* Node */[
                                        /* Node */[
                                          /* Empty */0,
                                          l[0],
                                          /* Empty */0,
                                          1
                                        ],
                                        match[0],
                                        /* Empty */0,
                                        2
                                      ],
                                      match[1]
                                    ];
                            } else {
                              exit = 1;
                            }
                          } else {
                            exit = 1;
                          }
                          break;
                      case 3 : 
                          if (l) {
                            var match$1 = l[1];
                            if (match$1) {
                              var match$2 = match$1[1];
                              if (match$2) {
                                return /* tuple */[
                                        /* Node */[
                                          /* Node */[
                                            /* Empty */0,
                                            l[0],
                                            /* Empty */0,
                                            1
                                          ],
                                          match$1[0],
                                          /* Node */[
                                            /* Empty */0,
                                            match$2[0],
                                            /* Empty */0,
                                            1
                                          ],
                                          2
                                        ],
                                        match$2[1]
                                      ];
                              } else {
                                exit = 1;
                              }
                            } else {
                              exit = 1;
                            }
                          } else {
                            exit = 1;
                          }
                          break;
                      
                    }
                  }
                  if (exit === 1) {
                    var nl = n / 2 | 0;
                    var match$3 = sub(nl, l);
                    var l$1 = match$3[1];
                    if (l$1) {
                      var match$4 = sub((n - nl | 0) - 1 | 0, l$1[1]);
                      return /* tuple */[
                              create(match$3[0], l$1[0], match$4[0]),
                              match$4[1]
                            ];
                    } else {
                      throw [
                            Caml_builtin_exceptions.assert_failure,
                            [
                              "set.ml",
                              372,
                              18
                            ]
                          ];
                    }
                  }
                  
                };
                return sub(List.length(l$1), l$1)[0];
              } else {
                return add(match$3[0], add(x3, add(x2, add(x1, singleton(x0)))));
              }
            } else {
              return add(x3, add(x2, add(x1, singleton(x0))));
            }
          } else {
            return add(x2, add(x1, singleton(x0)));
          }
        } else {
          return add(x1, singleton(x0));
        }
      } else {
        return singleton(x0);
      }
    } else {
      return /* Empty */0;
    }
  };
  return [
          /* Empty */0,
          is_empty,
          mem,
          add,
          singleton,
          remove,
          union,
          inter,
          diff,
          compare,
          equal,
          subset,
          iter,
          fold,
          for_all,
          exists,
          filter,
          partition,
          cardinal,
          elements,
          min_elt,
          max_elt,
          min_elt,
          split,
          find,
          of_list
        ];
}

exports.Make = Make;
/* No side effect */


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE



var vertexShaderSource = "\n  // precision highp float;\n  attribute vec2 aVertexPosition;\n  attribute vec4 aVertexColor;\n  attribute vec2 aTextureCoord;\n\n  uniform mat4 uPMatrix;\n\n  varying vec4 vColor;\n  varying vec2 vTextureCoord;\n\n  void main(void) {\n    gl_Position = uPMatrix * vec4(aVertexPosition, 0.0, 1.0);\n    vColor = aVertexColor;\n    vTextureCoord = aTextureCoord;\n  }\n";

var fragmentShaderSource = "\n  // precision highp float;\n  varying vec4 vColor;\n  varying vec2 vTextureCoord;\n\n  uniform sampler2D uSampler;\n\n  void main(void) {\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + vColor;\n  }\n";

exports.vertexShaderSource   = vertexShaderSource;
exports.fragmentShaderSource = fragmentShaderSource;
/* No side effect */


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var List                   = __webpack_require__(7);
var MyUtils                = __webpack_require__(13);
var Caml_int32             = __webpack_require__(3);
var GravShared             = __webpack_require__(16);
var Pervasives             = __webpack_require__(2);
var Reprocessing_Env       = __webpack_require__(4);
var Reprocessing_Draw      = __webpack_require__(11);
var Reprocessing_Constants = __webpack_require__(6);

function rect(param, w, h, env) {
  return Reprocessing_Draw.rectf(/* tuple */[
              param[0] - w / 2,
              param[1] - h / 2
            ], w, h, env);
}

function scale(d) {
  return Math.sqrt(d);
}

function drawOnScreen(color, param, rad, $staropt$star, $staropt$star$1, env) {
  var y = param[1];
  var x = param[0];
  var stroke = $staropt$star ? $staropt$star[0] : /* false */0;
  var strokeWeight = $staropt$star$1 ? $staropt$star$1[0] : 3;
  var height = Reprocessing_Env.height(env);
  var width = Reprocessing_Env.width(env);
  var match = GravShared.isPhone !== 0 ? /* tuple */[
      height * GravShared.phoneScale,
      width * GravShared.phoneScale
    ] : /* tuple */[
      height,
      width
    ];
  var width$1 = match[1];
  var height$1 = match[0];
  Reprocessing_Draw.fill(MyUtils.withAlpha(color, 0.6), env);
  Reprocessing_Draw.noStroke(env);
  if (x + rad < 0) {
    if (y + rad < 0) {
      return rect(/* tuple */[
                  0,
                  0
                ], 8, 8, env);
    } else if (y - rad > height$1) {
      return rect(/* tuple */[
                  0,
                  height$1
                ], 8, 8, env);
    } else {
      return rect(/* tuple */[
                  0,
                  y
                ], 8, Math.sqrt(-x), env);
    }
  } else if (x - rad > width$1) {
    if (y + rad < 0) {
      return rect(/* tuple */[
                  width$1,
                  0
                ], 8, 8, env);
    } else if (y - rad > height$1) {
      return rect(/* tuple */[
                  width$1,
                  height$1
                ], 8, 8, env);
    } else {
      var w = Math.sqrt(x - width$1);
      return rect(/* tuple */[
                  width$1,
                  y
                ], 8, w, env);
    }
  } else if (y + rad < 0) {
    var h = Math.sqrt(-y);
    return rect(/* tuple */[
                x,
                0
              ], h, 8, env);
  } else if (y - rad > height$1) {
    var h$1 = Math.sqrt(y - height$1);
    return rect(/* tuple */[
                x,
                height$1
              ], h$1, 8, env);
  } else {
    if (stroke) {
      Reprocessing_Draw.stroke(color, env);
      Reprocessing_Draw.strokeWeight(strokeWeight, env);
      Reprocessing_Draw.noFill(env);
    } else {
      Reprocessing_Draw.fill(color, env);
      Reprocessing_Draw.noStroke(env);
    }
    return GravShared.circle(/* tuple */[
                  x,
                  y
                ], rad)(env);
  }
}

function drawStatus(me, env) {
  var percent = MyUtils.flDiv(me[/* health */2], GravShared.fullPlayerHealth);
  Reprocessing_Draw.strokeWeight(1, env);
  Reprocessing_Draw.stroke(Reprocessing_Constants.white, env);
  Reprocessing_Draw.noFill(env);
  Reprocessing_Draw.rect(/* tuple */[
        10,
        10
      ], 100, 10, env);
  Reprocessing_Draw.fill(Reprocessing_Constants.white, env);
  Reprocessing_Draw.noStroke(env);
  Reprocessing_Draw.rect(/* tuple */[
        10,
        10
      ], 100 * percent | 0, 10, env);
  for(var i = 0 ,i_finish = me[/* lives */3]; i <= i_finish; ++i){
    GravShared.circle(/* tuple */[
            (Caml_int32.imul(i, 15) + 100 | 0) + 20 | 0,
            15
          ], 5)(env);
  }
  return /* () */0;
}

function drawJoystick(env) {
  Reprocessing_Draw.fill(Reprocessing_Constants.green, env);
  Reprocessing_Draw.noStroke(env);
  GravShared.circle(GravShared.joystickPos(env), 5)(env);
  Reprocessing_Draw.stroke(Reprocessing_Constants.green, env);
  Reprocessing_Draw.noFill(env);
  return GravShared.circle(GravShared.joystickPos(env), 35)(env);
}

function fldiv(a, b) {
  return a / b;
}

function drawMe(me, env) {
  drawOnScreen(MyUtils.withAlpha(me[/* color */1], 0.3), me[/* pos */0], me[/* size */6], /* None */0, /* None */0, env);
  var health = fldiv(me[/* health */2], GravShared.fullPlayerHealth);
  drawOnScreen(me[/* color */1], me[/* pos */0], me[/* size */6] * health, /* None */0, /* None */0, env);
  Reprocessing_Draw.noFill(env);
  Reprocessing_Draw.stroke(MyUtils.withAlpha(Reprocessing_Constants.green, health), env);
  Reprocessing_Draw.strokeWeight(2, env);
  GravShared.circle(me[/* pos */0], me[/* size */6])(env);
  return Reprocessing_Draw.noStroke(env);
}

function getCircleParams(radius, numCircles, spin) {
  var halfAngle = Reprocessing_Constants.pi * (numCircles - 2) / numCircles / 2;
  var s = Math.cos(halfAngle);
  var circleRadius = radius / (1 + 1 / s);
  var polygonRadius = radius - circleRadius;
  var by = Reprocessing_Constants.two_pi / numCircles;
  var circles = /* [] */0;
  for(var i = 0 ,i_finish = (numCircles | 0) - 1 | 0; i <= i_finish; ++i){
    var fi = i;
    var t = by * fi + spin;
    var center_000 = Math.cos(t) * polygonRadius;
    var center_001 = Math.sin(t) * polygonRadius;
    var center = /* tuple */[
      center_000,
      center_001
    ];
    circles = /* :: */[
      /* tuple */[
        center,
        circleRadius
      ],
      circles
    ];
  }
  return circles;
}

function drawEnemy(env, enemy) {
  var match = enemy[/* warmup */3];
  var maxval = match[1];
  var warmup = match[0];
  var rad = enemy[/* size */2] * warmup / maxval;
  drawOnScreen(enemy[/* color */1], enemy[/* pos */0], rad, /* Some */[/* true */1], /* None */0, env);
  var match$1 = enemy[/* health */4];
  var full = match$1[1];
  if (full > 1) {
    Reprocessing_Draw.fill(MyUtils.withAlpha(enemy[/* color */1], 0.6), env);
    Reprocessing_Draw.noStroke(env);
    var match$2 = enemy[/* behavior */6];
    if (match$2.tag === 3) {
      var match$3 = +(full === 2);
      List.iter((function (param) {
              return GravShared.circle(MyUtils.posAdd(param[0], enemy[/* pos */0]), param[1])(env);
            }), getCircleParams(rad, match$3 !== 0 ? 2 : Math.pow(full - 1 | 0, 2), -match$2[1] / 5 / full));
    } else {
      var sweep = Reprocessing_Constants.two_pi / full;
      Reprocessing_Draw.stroke(enemy[/* color */1], env);
      Reprocessing_Draw.noFill(env);
      for(var i = 0 ,i_finish = match$1[0] - 1 | 0; i <= i_finish; ++i){
        var f = i;
        Reprocessing_Draw.arcf(enemy[/* pos */0], Pervasives.max(0, rad - 10), Pervasives.max(0, rad - 10), sweep * f, sweep * f + sweep, /* false */0, /* true */1, env);
      }
    }
  }
  if (warmup === maxval) {
    var match$4 = enemy[/* behavior */6];
    var timer = match$4[0];
    var loaded = timer[0] / timer[1];
    Reprocessing_Draw.noFill(env);
    Reprocessing_Draw.stroke(MyUtils.withAlpha(Reprocessing_Constants.white, 0.4), env);
    Reprocessing_Draw.strokeWeight(2, env);
    Reprocessing_Draw.arcf(enemy[/* pos */0], rad + 5, rad + 5, 0, Reprocessing_Constants.two_pi * loaded, /* true */1, /* false */0, env);
    return Reprocessing_Draw.noStroke(env);
  } else {
    return 0;
  }
}

function drawBullet(env, bullet) {
  var match = bullet[/* behavior */1];
  if (match) {
    var counter = match[1];
    var loaded = counter[0] / counter[1];
    drawOnScreen(bullet[/* color */0], bullet[/* pos */7], bullet[/* size */4] * (1 - loaded), /* None */0, /* None */0, env);
    Reprocessing_Draw.noFill(env);
    Reprocessing_Draw.stroke(bullet[/* color */0], env);
    return GravShared.circle(bullet[/* pos */7], bullet[/* size */4])(env);
  } else {
    return drawOnScreen(bullet[/* color */0], bullet[/* pos */7], bullet[/* size */4], /* None */0, /* None */0, env);
  }
}

function drawExplosion(env, explosion) {
  var match = explosion[/* timer */2];
  var faded = 1 - match[0] / match[1];
  Reprocessing_Draw.fill(MyUtils.withAlpha(explosion[/* color */1], faded), env);
  Reprocessing_Draw.noStroke(env);
  var size = (1.5 - 0.5 * faded) * explosion[/* size */3];
  return GravShared.circle(explosion[/* pos */0], size)(env);
}

exports.rect            = rect;
exports.scale           = scale;
exports.drawOnScreen    = drawOnScreen;
exports.drawStatus      = drawStatus;
exports.drawJoystick    = drawJoystick;
exports.fldiv           = fldiv;
exports.drawMe          = drawMe;
exports.getCircleParams = getCircleParams;
exports.drawEnemy       = drawEnemy;
exports.drawBullet      = drawBullet;
exports.drawExplosion   = drawExplosion;
/* MyUtils Not a pure module */


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_sys        = __webpack_require__(24);
var Caml_exceptions = __webpack_require__(17);

var is_js = /* true */1;

var match = Caml_sys.caml_sys_get_argv(/* () */0);

var big_endian = /* false */0;

var unix = /* true */1;

var win32 = /* false */0;

var cygwin = /* false */0;

var max_array_length = 2147483647;

var max_string_length = 2147483647;

var interactive = [/* false */0];

function set_signal(_, _$1) {
  return /* () */0;
}

var Break = Caml_exceptions.create("Sys.Break");

function catch_break() {
  return /* () */0;
}

var argv = match[1];

var executable_name = match[0];

var os_type = "Unix";

var word_size = 32;

var sigabrt = -1;

var sigalrm = -2;

var sigfpe = -3;

var sighup = -4;

var sigill = -5;

var sigint = -6;

var sigkill = -7;

var sigpipe = -8;

var sigquit = -9;

var sigsegv = -10;

var sigterm = -11;

var sigusr1 = -12;

var sigusr2 = -13;

var sigchld = -14;

var sigcont = -15;

var sigstop = -16;

var sigtstp = -17;

var sigttin = -18;

var sigttou = -19;

var sigvtalrm = -20;

var sigprof = -21;

var ocaml_version = "4.02.3+dev1-2015-07-10";

exports.argv              = argv;
exports.executable_name   = executable_name;
exports.interactive       = interactive;
exports.os_type           = os_type;
exports.unix              = unix;
exports.win32             = win32;
exports.cygwin            = cygwin;
exports.word_size         = word_size;
exports.big_endian        = big_endian;
exports.is_js             = is_js;
exports.max_string_length = max_string_length;
exports.max_array_length  = max_array_length;
exports.set_signal        = set_signal;
exports.sigabrt           = sigabrt;
exports.sigalrm           = sigalrm;
exports.sigfpe            = sigfpe;
exports.sighup            = sighup;
exports.sigill            = sigill;
exports.sigint            = sigint;
exports.sigkill           = sigkill;
exports.sigpipe           = sigpipe;
exports.sigquit           = sigquit;
exports.sigsegv           = sigsegv;
exports.sigterm           = sigterm;
exports.sigusr1           = sigusr1;
exports.sigusr2           = sigusr2;
exports.sigchld           = sigchld;
exports.sigcont           = sigcont;
exports.sigstop           = sigstop;
exports.sigtstp           = sigtstp;
exports.sigttin           = sigttin;
exports.sigttou           = sigttou;
exports.sigvtalrm         = sigvtalrm;
exports.sigprof           = sigprof;
exports.Break             = Break;
exports.catch_break       = catch_break;
exports.ocaml_version     = ocaml_version;
/* No side effect */


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry              = __webpack_require__(1);
var Buffer             = __webpack_require__(40);
var Pervasives         = __webpack_require__(2);
var CamlinternalFormat = __webpack_require__(59);

function kfprintf(k, o, param) {
  return CamlinternalFormat.make_printf((function (o, acc) {
                CamlinternalFormat.output_acc(o, acc);
                return Curry._1(k, o);
              }), o, /* End_of_acc */0, param[0]);
}

function kbprintf(k, b, param) {
  return CamlinternalFormat.make_printf((function (b, acc) {
                CamlinternalFormat.bufput_acc(b, acc);
                return Curry._1(k, b);
              }), b, /* End_of_acc */0, param[0]);
}

function ikfprintf(k, oc, param) {
  return CamlinternalFormat.make_printf((function (oc, _) {
                return Curry._1(k, oc);
              }), oc, /* End_of_acc */0, param[0]);
}

function fprintf(oc, fmt) {
  return kfprintf((function () {
                return /* () */0;
              }), oc, fmt);
}

function bprintf(b, fmt) {
  return kbprintf((function () {
                return /* () */0;
              }), b, fmt);
}

function ifprintf(oc, fmt) {
  return ikfprintf((function () {
                return /* () */0;
              }), oc, fmt);
}

function printf(fmt) {
  return fprintf(Pervasives.stdout, fmt);
}

function eprintf(fmt) {
  return fprintf(Pervasives.stderr, fmt);
}

function ksprintf(k, param) {
  var k$prime = function (_, acc) {
    var buf = Buffer.create(64);
    CamlinternalFormat.strput_acc(buf, acc);
    return Curry._1(k, Buffer.contents(buf));
  };
  return CamlinternalFormat.make_printf(k$prime, /* () */0, /* End_of_acc */0, param[0]);
}

function sprintf(fmt) {
  return ksprintf((function (s) {
                return s;
              }), fmt);
}

var kprintf = ksprintf;

exports.fprintf   = fprintf;
exports.printf    = printf;
exports.eprintf   = eprintf;
exports.sprintf   = sprintf;
exports.bprintf   = bprintf;
exports.ifprintf  = ifprintf;
exports.kfprintf  = kfprintf;
exports.ikfprintf = ikfprintf;
exports.ksprintf  = ksprintf;
exports.kbprintf  = kbprintf;
exports.kprintf   = kprintf;
/* No side effect */


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Char                     = __webpack_require__(27);
var Block                    = __webpack_require__(5);
var Bytes                    = __webpack_require__(26);
var Curry                    = __webpack_require__(1);
var Buffer                   = __webpack_require__(40);
var Js_exn                   = __webpack_require__(41);
var $$String                 = __webpack_require__(19);
var Caml_io                  = __webpack_require__(31);
var Caml_obj                 = __webpack_require__(8);
var Caml_bytes               = __webpack_require__(60);
var Caml_float               = __webpack_require__(61);
var Caml_int32               = __webpack_require__(3);
var Pervasives               = __webpack_require__(2);
var Caml_format              = __webpack_require__(14);
var Caml_string              = __webpack_require__(9);
var Caml_exceptions          = __webpack_require__(17);
var Caml_builtin_exceptions  = __webpack_require__(0);
var CamlinternalFormatBasics = __webpack_require__(35);

function create_char_set() {
  return Bytes.make(32, /* "\000" */0);
}

function add_in_char_set(char_set, c) {
  var str_ind = (c >>> 3);
  var mask = (1 << (c & 7));
  char_set[str_ind] = Pervasives.char_of_int(Caml_bytes.get(char_set, str_ind) | mask);
  return /* () */0;
}

var freeze_char_set = Bytes.to_string;

function rev_char_set(char_set) {
  var char_set$prime = Bytes.make(32, /* "\000" */0);
  for(var i = 0; i <= 31; ++i){
    char_set$prime[i] = Pervasives.char_of_int(Caml_string.get(char_set, i) ^ 255);
  }
  return Caml_string.bytes_to_string(char_set$prime);
}

function is_in_char_set(char_set, c) {
  var str_ind = (c >>> 3);
  var mask = (1 << (c & 7));
  return +((Caml_string.get(char_set, str_ind) & mask) !== 0);
}

function pad_of_pad_opt(pad_opt) {
  if (pad_opt) {
    return /* Lit_padding */Block.__(0, [
              /* Right */1,
              pad_opt[0]
            ]);
  } else {
    return /* No_padding */0;
  }
}

function prec_of_prec_opt(prec_opt) {
  if (prec_opt) {
    return /* Lit_precision */[prec_opt[0]];
  } else {
    return /* No_precision */0;
  }
}

function param_format_of_ignored_format(ign, fmt) {
  if (typeof ign === "number") {
    switch (ign) {
      case 0 : 
          return /* Param_format_EBB */[/* Char */Block.__(0, [fmt])];
      case 1 : 
          return /* Param_format_EBB */[/* Caml_char */Block.__(1, [fmt])];
      case 2 : 
          return /* Param_format_EBB */[/* Bool */Block.__(9, [fmt])];
      case 3 : 
          return /* Param_format_EBB */[/* Reader */Block.__(19, [fmt])];
      case 4 : 
          return /* Param_format_EBB */[/* Scan_next_char */Block.__(22, [fmt])];
      
    }
  } else {
    switch (ign.tag | 0) {
      case 0 : 
          return /* Param_format_EBB */[/* String */Block.__(2, [
                      pad_of_pad_opt(ign[0]),
                      fmt
                    ])];
      case 1 : 
          return /* Param_format_EBB */[/* Caml_string */Block.__(3, [
                      pad_of_pad_opt(ign[0]),
                      fmt
                    ])];
      case 2 : 
          return /* Param_format_EBB */[/* Int */Block.__(4, [
                      ign[0],
                      pad_of_pad_opt(ign[1]),
                      /* No_precision */0,
                      fmt
                    ])];
      case 3 : 
          return /* Param_format_EBB */[/* Int32 */Block.__(5, [
                      ign[0],
                      pad_of_pad_opt(ign[1]),
                      /* No_precision */0,
                      fmt
                    ])];
      case 4 : 
          return /* Param_format_EBB */[/* Nativeint */Block.__(6, [
                      ign[0],
                      pad_of_pad_opt(ign[1]),
                      /* No_precision */0,
                      fmt
                    ])];
      case 5 : 
          return /* Param_format_EBB */[/* Int64 */Block.__(7, [
                      ign[0],
                      pad_of_pad_opt(ign[1]),
                      /* No_precision */0,
                      fmt
                    ])];
      case 6 : 
          return /* Param_format_EBB */[/* Float */Block.__(8, [
                      /* Float_f */0,
                      pad_of_pad_opt(ign[0]),
                      prec_of_prec_opt(ign[1]),
                      fmt
                    ])];
      case 7 : 
          return /* Param_format_EBB */[/* Format_arg */Block.__(13, [
                      ign[0],
                      ign[1],
                      fmt
                    ])];
      case 8 : 
          return /* Param_format_EBB */[/* Format_subst */Block.__(14, [
                      ign[0],
                      ign[1],
                      fmt
                    ])];
      case 9 : 
          return /* Param_format_EBB */[/* Scan_char_set */Block.__(20, [
                      ign[0],
                      ign[1],
                      fmt
                    ])];
      case 10 : 
          return /* Param_format_EBB */[/* Scan_get_counter */Block.__(21, [
                      ign[0],
                      fmt
                    ])];
      
    }
  }
}

function buffer_check_size(buf, overhead) {
  var len = buf[/* bytes */1].length;
  var min_len = buf[/* ind */0] + overhead | 0;
  if (min_len > len) {
    var new_len = Pervasives.max((len << 1), min_len);
    var new_str = Caml_string.caml_create_string(new_len);
    Bytes.blit(buf[/* bytes */1], 0, new_str, 0, len);
    buf[/* bytes */1] = new_str;
    return /* () */0;
  } else {
    return 0;
  }
}

function buffer_add_char(buf, c) {
  buffer_check_size(buf, 1);
  buf[/* bytes */1][buf[/* ind */0]] = c;
  buf[/* ind */0] = buf[/* ind */0] + 1 | 0;
  return /* () */0;
}

function buffer_add_string(buf, s) {
  var str_len = s.length;
  buffer_check_size(buf, str_len);
  $$String.blit(s, 0, buf[/* bytes */1], buf[/* ind */0], str_len);
  buf[/* ind */0] = buf[/* ind */0] + str_len | 0;
  return /* () */0;
}

function buffer_contents(buf) {
  return Bytes.sub_string(buf[/* bytes */1], 0, buf[/* ind */0]);
}

function char_of_iconv(iconv) {
  switch (iconv) {
    case 0 : 
    case 1 : 
    case 2 : 
        return /* "d" */100;
    case 3 : 
    case 4 : 
    case 5 : 
        return /* "i" */105;
    case 6 : 
    case 7 : 
        return /* "x" */120;
    case 8 : 
    case 9 : 
        return /* "X" */88;
    case 10 : 
    case 11 : 
        return /* "o" */111;
    case 12 : 
        return /* "u" */117;
    
  }
}

function char_of_fconv(fconv) {
  switch (fconv) {
    case 0 : 
    case 1 : 
    case 2 : 
        return /* "f" */102;
    case 3 : 
    case 4 : 
    case 5 : 
        return /* "e" */101;
    case 6 : 
    case 7 : 
    case 8 : 
        return /* "E" */69;
    case 9 : 
    case 10 : 
    case 11 : 
        return /* "g" */103;
    case 12 : 
    case 13 : 
    case 14 : 
        return /* "G" */71;
    case 15 : 
        return /* "F" */70;
    
  }
}

function char_of_counter(counter) {
  switch (counter) {
    case 0 : 
        return /* "l" */108;
    case 1 : 
        return /* "n" */110;
    case 2 : 
        return /* "N" */78;
    
  }
}

function bprint_char_set(buf, char_set) {
  var print_char = function (buf, i) {
    var c = Pervasives.char_of_int(i);
    if (c !== 37) {
      if (c !== 64) {
        return buffer_add_char(buf, c);
      } else {
        buffer_add_char(buf, /* "%" */37);
        return buffer_add_char(buf, /* "@" */64);
      }
    } else {
      buffer_add_char(buf, /* "%" */37);
      return buffer_add_char(buf, /* "%" */37);
    }
  };
  var print_out = function (set, _i) {
    while(true) {
      var i = _i;
      if (i < 256) {
        if (is_in_char_set(set, Pervasives.char_of_int(i))) {
          var set$1 = set;
          var i$1 = i;
          var match = Pervasives.char_of_int(i$1);
          var switcher = match - 45 | 0;
          if (switcher > 48 || switcher < 0) {
            if (switcher >= 210) {
              return print_char(buf, 255);
            } else {
              return print_second(set$1, i$1 + 1 | 0);
            }
          } else if (switcher > 47 || switcher < 1) {
            return print_out(set$1, i$1 + 1 | 0);
          } else {
            return print_second(set$1, i$1 + 1 | 0);
          }
        } else {
          _i = i + 1 | 0;
          continue ;
          
        }
      } else {
        return 0;
      }
    };
  };
  var print_second = function (set, i) {
    if (is_in_char_set(set, Pervasives.char_of_int(i))) {
      var match = Pervasives.char_of_int(i);
      var exit = 0;
      var switcher = match - 45 | 0;
      if (switcher > 48 || switcher < 0) {
        if (switcher >= 210) {
          print_char(buf, 254);
          return print_char(buf, 255);
        } else {
          exit = 1;
        }
      } else if (switcher > 47 || switcher < 1) {
        if (is_in_char_set(set, Pervasives.char_of_int(i + 1 | 0))) {
          exit = 1;
        } else {
          print_char(buf, i - 1 | 0);
          return print_out(set, i + 1 | 0);
        }
      } else {
        exit = 1;
      }
      if (exit === 1) {
        if (is_in_char_set(set, Pervasives.char_of_int(i + 1 | 0))) {
          var set$1 = set;
          var i$1 = i - 1 | 0;
          var _j = i + 2 | 0;
          while(true) {
            var j = _j;
            if (j === 256 || !is_in_char_set(set$1, Pervasives.char_of_int(j))) {
              print_char(buf, i$1);
              print_char(buf, /* "-" */45);
              print_char(buf, j - 1 | 0);
              if (j < 256) {
                return print_out(set$1, j + 1 | 0);
              } else {
                return 0;
              }
            } else {
              _j = j + 1 | 0;
              continue ;
              
            }
          };
        } else {
          print_char(buf, i - 1 | 0);
          print_char(buf, i);
          return print_out(set, i + 2 | 0);
        }
      }
      
    } else {
      print_char(buf, i - 1 | 0);
      return print_out(set, i + 1 | 0);
    }
  };
  var print_start = function (set) {
    var is_alone = function (c) {
      var match_000 = Char.chr(c - 1 | 0);
      var match_001 = Char.chr(c + 1 | 0);
      if (is_in_char_set(set, c)) {
        return 1 - (is_in_char_set(set, match_000) && is_in_char_set(set, match_001));
      } else {
        return /* false */0;
      }
    };
    if (is_alone(/* "]" */93)) {
      buffer_add_char(buf, /* "]" */93);
    }
    print_out(set, 1);
    if (is_alone(/* "-" */45)) {
      return buffer_add_char(buf, /* "-" */45);
    } else {
      return 0;
    }
  };
  buffer_add_char(buf, /* "[" */91);
  print_start(is_in_char_set(char_set, /* "\000" */0) ? (buffer_add_char(buf, /* "^" */94), rev_char_set(char_set)) : char_set);
  return buffer_add_char(buf, /* "]" */93);
}

function bprint_padty(buf, padty) {
  switch (padty) {
    case 0 : 
        return buffer_add_char(buf, /* "-" */45);
    case 1 : 
        return /* () */0;
    case 2 : 
        return buffer_add_char(buf, /* "0" */48);
    
  }
}

function bprint_ignored_flag(buf, ign_flag) {
  if (ign_flag) {
    return buffer_add_char(buf, /* "_" */95);
  } else {
    return 0;
  }
}

function bprint_pad_opt(buf, pad_opt) {
  if (pad_opt) {
    return buffer_add_string(buf, "" + pad_opt[0]);
  } else {
    return /* () */0;
  }
}

function bprint_padding(buf, pad) {
  if (typeof pad === "number") {
    return /* () */0;
  } else {
    bprint_padty(buf, pad[0]);
    if (pad.tag) {
      return buffer_add_char(buf, /* "*" */42);
    } else {
      return buffer_add_string(buf, "" + pad[1]);
    }
  }
}

function bprint_precision(buf, prec) {
  if (typeof prec === "number") {
    if (prec !== 0) {
      return buffer_add_string(buf, ".*");
    } else {
      return /* () */0;
    }
  } else {
    buffer_add_char(buf, /* "." */46);
    return buffer_add_string(buf, "" + prec[0]);
  }
}

function bprint_iconv_flag(buf, iconv) {
  switch (iconv) {
    case 1 : 
    case 4 : 
        return buffer_add_char(buf, /* "+" */43);
    case 2 : 
    case 5 : 
        return buffer_add_char(buf, /* " " */32);
    case 7 : 
    case 9 : 
    case 11 : 
        return buffer_add_char(buf, /* "#" */35);
    case 0 : 
    case 3 : 
    case 6 : 
    case 8 : 
    case 10 : 
    case 12 : 
        return /* () */0;
    
  }
}

function bprint_int_fmt(buf, ign_flag, iconv, pad, prec) {
  buffer_add_char(buf, /* "%" */37);
  bprint_ignored_flag(buf, ign_flag);
  bprint_iconv_flag(buf, iconv);
  bprint_padding(buf, pad);
  bprint_precision(buf, prec);
  return buffer_add_char(buf, char_of_iconv(iconv));
}

function bprint_altint_fmt(buf, ign_flag, iconv, pad, prec, c) {
  buffer_add_char(buf, /* "%" */37);
  bprint_ignored_flag(buf, ign_flag);
  bprint_iconv_flag(buf, iconv);
  bprint_padding(buf, pad);
  bprint_precision(buf, prec);
  buffer_add_char(buf, c);
  return buffer_add_char(buf, char_of_iconv(iconv));
}

function bprint_fconv_flag(buf, fconv) {
  switch (fconv) {
    case 1 : 
    case 4 : 
    case 7 : 
    case 10 : 
    case 13 : 
        return buffer_add_char(buf, /* "+" */43);
    case 2 : 
    case 5 : 
    case 8 : 
    case 11 : 
    case 14 : 
        return buffer_add_char(buf, /* " " */32);
    case 0 : 
    case 3 : 
    case 6 : 
    case 9 : 
    case 12 : 
    case 15 : 
        return /* () */0;
    
  }
}

function bprint_float_fmt(buf, ign_flag, fconv, pad, prec) {
  buffer_add_char(buf, /* "%" */37);
  bprint_ignored_flag(buf, ign_flag);
  bprint_fconv_flag(buf, fconv);
  bprint_padding(buf, pad);
  bprint_precision(buf, prec);
  return buffer_add_char(buf, char_of_fconv(fconv));
}

function string_of_formatting_lit(formatting_lit) {
  if (typeof formatting_lit === "number") {
    switch (formatting_lit) {
      case 0 : 
          return "@]";
      case 1 : 
          return "@}";
      case 2 : 
          return "@?";
      case 3 : 
          return "@\n";
      case 4 : 
          return "@.";
      case 5 : 
          return "@@";
      case 6 : 
          return "@%";
      
    }
  } else {
    switch (formatting_lit.tag | 0) {
      case 0 : 
      case 1 : 
          return formatting_lit[0];
      case 2 : 
          return "@" + Caml_string.bytes_to_string(Bytes.make(1, formatting_lit[0]));
      
    }
  }
}

function string_of_formatting_gen(formatting_gen) {
  return formatting_gen[0][1];
}

function bprint_char_literal(buf, chr) {
  if (chr !== 37) {
    return buffer_add_char(buf, chr);
  } else {
    return buffer_add_string(buf, "%%");
  }
}

function bprint_string_literal(buf, str) {
  for(var i = 0 ,i_finish = str.length - 1 | 0; i <= i_finish; ++i){
    bprint_char_literal(buf, Caml_string.get(str, i));
  }
  return /* () */0;
}

function bprint_fmtty(buf, _fmtty) {
  while(true) {
    var fmtty = _fmtty;
    if (typeof fmtty === "number") {
      return /* () */0;
    } else {
      switch (fmtty.tag | 0) {
        case 0 : 
            buffer_add_string(buf, "%c");
            _fmtty = fmtty[0];
            continue ;
            case 1 : 
            buffer_add_string(buf, "%s");
            _fmtty = fmtty[0];
            continue ;
            case 2 : 
            buffer_add_string(buf, "%i");
            _fmtty = fmtty[0];
            continue ;
            case 3 : 
            buffer_add_string(buf, "%li");
            _fmtty = fmtty[0];
            continue ;
            case 4 : 
            buffer_add_string(buf, "%ni");
            _fmtty = fmtty[0];
            continue ;
            case 5 : 
            buffer_add_string(buf, "%Li");
            _fmtty = fmtty[0];
            continue ;
            case 6 : 
            buffer_add_string(buf, "%f");
            _fmtty = fmtty[0];
            continue ;
            case 7 : 
            buffer_add_string(buf, "%B");
            _fmtty = fmtty[0];
            continue ;
            case 8 : 
            buffer_add_string(buf, "%{");
            bprint_fmtty(buf, fmtty[0]);
            buffer_add_string(buf, "%}");
            _fmtty = fmtty[1];
            continue ;
            case 9 : 
            buffer_add_string(buf, "%(");
            bprint_fmtty(buf, fmtty[0]);
            buffer_add_string(buf, "%)");
            _fmtty = fmtty[2];
            continue ;
            case 10 : 
            buffer_add_string(buf, "%a");
            _fmtty = fmtty[0];
            continue ;
            case 11 : 
            buffer_add_string(buf, "%t");
            _fmtty = fmtty[0];
            continue ;
            case 12 : 
            buffer_add_string(buf, "%?");
            _fmtty = fmtty[0];
            continue ;
            case 13 : 
            buffer_add_string(buf, "%r");
            _fmtty = fmtty[0];
            continue ;
            case 14 : 
            buffer_add_string(buf, "%_r");
            _fmtty = fmtty[0];
            continue ;
            
      }
    }
  };
}

function int_of_custom_arity(param) {
  if (param) {
    return 1 + int_of_custom_arity(param[0]) | 0;
  } else {
    return 0;
  }
}

function bprint_fmt(buf, fmt) {
  var _fmt = fmt;
  var _ign_flag = /* false */0;
  while(true) {
    var ign_flag = _ign_flag;
    var fmt$1 = _fmt;
    if (typeof fmt$1 === "number") {
      return /* () */0;
    } else {
      switch (fmt$1.tag | 0) {
        case 0 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "c" */99);
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 1 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "C" */67);
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 2 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_padding(buf, fmt$1[0]);
            buffer_add_char(buf, /* "s" */115);
            _ign_flag = /* false */0;
            _fmt = fmt$1[1];
            continue ;
            case 3 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_padding(buf, fmt$1[0]);
            buffer_add_char(buf, /* "S" */83);
            _ign_flag = /* false */0;
            _fmt = fmt$1[1];
            continue ;
            case 4 : 
            bprint_int_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2]);
            _ign_flag = /* false */0;
            _fmt = fmt$1[3];
            continue ;
            case 5 : 
            bprint_altint_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2], /* "l" */108);
            _ign_flag = /* false */0;
            _fmt = fmt$1[3];
            continue ;
            case 6 : 
            bprint_altint_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2], /* "n" */110);
            _ign_flag = /* false */0;
            _fmt = fmt$1[3];
            continue ;
            case 7 : 
            bprint_altint_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2], /* "L" */76);
            _ign_flag = /* false */0;
            _fmt = fmt$1[3];
            continue ;
            case 8 : 
            bprint_float_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2]);
            _ign_flag = /* false */0;
            _fmt = fmt$1[3];
            continue ;
            case 9 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "B" */66);
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 10 : 
            buffer_add_string(buf, "%!");
            _fmt = fmt$1[0];
            continue ;
            case 11 : 
            bprint_string_literal(buf, fmt$1[0]);
            _fmt = fmt$1[1];
            continue ;
            case 12 : 
            bprint_char_literal(buf, fmt$1[0]);
            _fmt = fmt$1[1];
            continue ;
            case 13 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_pad_opt(buf, fmt$1[0]);
            buffer_add_char(buf, /* "{" */123);
            bprint_fmtty(buf, fmt$1[1]);
            buffer_add_char(buf, /* "%" */37);
            buffer_add_char(buf, /* "}" */125);
            _ign_flag = /* false */0;
            _fmt = fmt$1[2];
            continue ;
            case 14 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_pad_opt(buf, fmt$1[0]);
            buffer_add_char(buf, /* "(" */40);
            bprint_fmtty(buf, fmt$1[1]);
            buffer_add_char(buf, /* "%" */37);
            buffer_add_char(buf, /* ")" */41);
            _ign_flag = /* false */0;
            _fmt = fmt$1[2];
            continue ;
            case 15 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "a" */97);
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 16 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "t" */116);
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 17 : 
            bprint_string_literal(buf, string_of_formatting_lit(fmt$1[0]));
            _fmt = fmt$1[1];
            continue ;
            case 18 : 
            bprint_string_literal(buf, "@{");
            bprint_string_literal(buf, string_of_formatting_gen(fmt$1[0]));
            _fmt = fmt$1[1];
            continue ;
            case 19 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "r" */114);
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 20 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_pad_opt(buf, fmt$1[0]);
            bprint_char_set(buf, fmt$1[1]);
            _ign_flag = /* false */0;
            _fmt = fmt$1[2];
            continue ;
            case 21 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, char_of_counter(fmt$1[0]));
            _ign_flag = /* false */0;
            _fmt = fmt$1[1];
            continue ;
            case 22 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_string_literal(buf, "0c");
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 23 : 
            var match = param_format_of_ignored_format(fmt$1[0], fmt$1[1]);
            _ign_flag = /* true */1;
            _fmt = match[0];
            continue ;
            case 24 : 
            for(var _i = 1 ,_i_finish = int_of_custom_arity(fmt$1[0]); _i <= _i_finish; ++_i){
              buffer_add_char(buf, /* "%" */37);
              bprint_ignored_flag(buf, ign_flag);
              buffer_add_char(buf, /* "?" */63);
            }
            _ign_flag = /* false */0;
            _fmt = fmt$1[2];
            continue ;
            
      }
    }
  };
}

function string_of_fmt(fmt) {
  var buf = /* record */[
    /* ind */0,
    /* bytes */new Array(16)
  ];
  bprint_fmt(buf, fmt);
  return buffer_contents(buf);
}

function symm(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [symm(param[0])]);
      case 1 : 
          return /* String_ty */Block.__(1, [symm(param[0])]);
      case 2 : 
          return /* Int_ty */Block.__(2, [symm(param[0])]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [symm(param[0])]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [symm(param[0])]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [symm(param[0])]);
      case 6 : 
          return /* Float_ty */Block.__(6, [symm(param[0])]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [symm(param[0])]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    param[0],
                    symm(param[1])
                  ]);
      case 9 : 
          return /* Format_subst_ty */Block.__(9, [
                    param[1],
                    param[0],
                    symm(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [symm(param[0])]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [symm(param[0])]);
      case 12 : 
          return /* Any_ty */Block.__(12, [symm(param[0])]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [symm(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [symm(param[0])]);
      
    }
  }
}

function fmtty_rel_det(param) {
  if (typeof param === "number") {
    return /* tuple */[
            (function () {
                return /* Refl */0;
              }),
            (function () {
                return /* Refl */0;
              }),
            (function () {
                return /* Refl */0;
              }),
            (function () {
                return /* Refl */0;
              })
          ];
  } else {
    switch (param.tag | 0) {
      case 0 : 
          var match = fmtty_rel_det(param[0]);
          var af = match[1];
          var fa = match[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match[2],
                  match[3]
                ];
      case 1 : 
          var match$1 = fmtty_rel_det(param[0]);
          var af$1 = match$1[1];
          var fa$1 = match$1[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$1[2],
                  match$1[3]
                ];
      case 2 : 
          var match$2 = fmtty_rel_det(param[0]);
          var af$2 = match$2[1];
          var fa$2 = match$2[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$2[2],
                  match$2[3]
                ];
      case 3 : 
          var match$3 = fmtty_rel_det(param[0]);
          var af$3 = match$3[1];
          var fa$3 = match$3[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$3, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$3, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$3[2],
                  match$3[3]
                ];
      case 4 : 
          var match$4 = fmtty_rel_det(param[0]);
          var af$4 = match$4[1];
          var fa$4 = match$4[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$4, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$4, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$4[2],
                  match$4[3]
                ];
      case 5 : 
          var match$5 = fmtty_rel_det(param[0]);
          var af$5 = match$5[1];
          var fa$5 = match$5[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$5, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$5, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$5[2],
                  match$5[3]
                ];
      case 6 : 
          var match$6 = fmtty_rel_det(param[0]);
          var af$6 = match$6[1];
          var fa$6 = match$6[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$6, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$6, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$6[2],
                  match$6[3]
                ];
      case 7 : 
          var match$7 = fmtty_rel_det(param[0]);
          var af$7 = match$7[1];
          var fa$7 = match$7[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$7, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$7, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$7[2],
                  match$7[3]
                ];
      case 8 : 
          var match$8 = fmtty_rel_det(param[1]);
          var af$8 = match$8[1];
          var fa$8 = match$8[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$8, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$8, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$8[2],
                  match$8[3]
                ];
      case 9 : 
          var match$9 = fmtty_rel_det(param[2]);
          var de = match$9[3];
          var ed = match$9[2];
          var af$9 = match$9[1];
          var fa$9 = match$9[0];
          var ty = trans(symm(param[0]), param[1]);
          var match$10 = fmtty_rel_det(ty);
          var jd = match$10[3];
          var dj = match$10[2];
          var ga = match$10[1];
          var ag = match$10[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$9, /* Refl */0);
                      Curry._1(ag, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(ga, /* Refl */0);
                      Curry._1(af$9, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(ed, /* Refl */0);
                      Curry._1(dj, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(jd, /* Refl */0);
                      Curry._1(de, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      case 10 : 
          var match$11 = fmtty_rel_det(param[0]);
          var af$10 = match$11[1];
          var fa$10 = match$11[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$10, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$10, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$11[2],
                  match$11[3]
                ];
      case 11 : 
          var match$12 = fmtty_rel_det(param[0]);
          var af$11 = match$12[1];
          var fa$11 = match$12[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$11, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$11, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$12[2],
                  match$12[3]
                ];
      case 12 : 
          var match$13 = fmtty_rel_det(param[0]);
          var af$12 = match$13[1];
          var fa$12 = match$13[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$12, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$12, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$13[2],
                  match$13[3]
                ];
      case 13 : 
          var match$14 = fmtty_rel_det(param[0]);
          var de$1 = match$14[3];
          var ed$1 = match$14[2];
          var af$13 = match$14[1];
          var fa$13 = match$14[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$13, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$13, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(ed$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(de$1, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      case 14 : 
          var match$15 = fmtty_rel_det(param[0]);
          var de$2 = match$15[3];
          var ed$2 = match$15[2];
          var af$14 = match$15[1];
          var fa$14 = match$15[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$14, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$14, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(ed$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(de$2, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      
    }
  }
}

function trans(ty1, ty2) {
  var exit = 0;
  if (typeof ty1 === "number") {
    if (typeof ty2 === "number") {
      return /* End_of_fmtty */0;
    } else {
      switch (ty2.tag | 0) {
        case 8 : 
            exit = 6;
            break;
        case 9 : 
            exit = 7;
            break;
        case 10 : 
            exit = 1;
            break;
        case 11 : 
            exit = 2;
            break;
        case 12 : 
            exit = 3;
            break;
        case 13 : 
            exit = 4;
            break;
        case 14 : 
            exit = 5;
            break;
        default:
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "camlinternalFormat.ml",
                  816,
                  23
                ]
              ];
      }
    }
  } else {
    switch (ty1.tag | 0) {
      case 0 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 0 : 
                  return /* Char_ty */Block.__(0, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 1 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 1 : 
                  return /* String_ty */Block.__(1, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 2 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 2 : 
                  return /* Int_ty */Block.__(2, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 3 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 3 : 
                  return /* Int32_ty */Block.__(3, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 4 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 4 : 
                  return /* Nativeint_ty */Block.__(4, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 5 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 5 : 
                  return /* Int64_ty */Block.__(5, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 6 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 6 : 
                  return /* Float_ty */Block.__(6, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 7 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 7 : 
                  return /* Bool_ty */Block.__(7, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 8 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    802,
                    26
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 8 : 
                  return /* Format_arg_ty */Block.__(8, [
                            trans(ty1[0], ty2[0]),
                            trans(ty1[1], ty2[1])
                          ]);
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        802,
                        26
                      ]
                    ];
            }
          }
          break;
      case 9 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    812,
                    28
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  var ty = trans(symm(ty1[1]), ty2[0]);
                  var match = fmtty_rel_det(ty);
                  Curry._1(match[1], /* Refl */0);
                  Curry._1(match[3], /* Refl */0);
                  return /* Format_subst_ty */Block.__(9, [
                            ty1[0],
                            ty2[1],
                            trans(ty1[2], ty2[2])
                          ]);
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        812,
                        28
                      ]
                    ];
            }
          }
          break;
      case 10 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    780,
                    21
                  ]
                ];
          } else if (ty2.tag === 10) {
            return /* Alpha_ty */Block.__(10, [trans(ty1[0], ty2[0])]);
          } else {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    780,
                    21
                  ]
                ];
          }
          break;
      case 11 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    784,
                    21
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  return /* Theta_ty */Block.__(11, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        784,
                        21
                      ]
                    ];
            }
          }
          break;
      case 12 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    788,
                    19
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  return /* Any_ty */Block.__(12, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        788,
                        19
                      ]
                    ];
            }
          }
          break;
      case 13 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    792,
                    22
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  return /* Reader_ty */Block.__(13, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        792,
                        22
                      ]
                    ];
            }
          }
          break;
      case 14 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    797,
                    30
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  return /* Ignored_reader_ty */Block.__(14, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        797,
                        30
                      ]
                    ];
            }
          }
          break;
      
    }
  }
  switch (exit) {
    case 1 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                781,
                21
              ]
            ];
    case 2 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                785,
                21
              ]
            ];
    case 3 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                789,
                19
              ]
            ];
    case 4 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                793,
                22
              ]
            ];
    case 5 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                798,
                30
              ]
            ];
    case 6 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                803,
                26
              ]
            ];
    case 7 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                813,
                28
              ]
            ];
    case 8 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                817,
                23
              ]
            ];
    
  }
}

function fmtty_of_formatting_gen(formatting_gen) {
  return fmtty_of_fmt(formatting_gen[0][0]);
}

function fmtty_of_fmt(_fmtty) {
  while(true) {
    var fmtty = _fmtty;
    var exit = 0;
    if (typeof fmtty === "number") {
      return /* End_of_fmtty */0;
    } else {
      switch (fmtty.tag | 0) {
        case 2 : 
        case 3 : 
            exit = 1;
            break;
        case 4 : 
            var ty_rest = fmtty_of_fmt(fmtty[3]);
            var prec_ty = fmtty_of_precision_fmtty(fmtty[2], /* Int_ty */Block.__(2, [ty_rest]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty);
        case 5 : 
            var ty_rest$1 = fmtty_of_fmt(fmtty[3]);
            var prec_ty$1 = fmtty_of_precision_fmtty(fmtty[2], /* Int32_ty */Block.__(3, [ty_rest$1]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty$1);
        case 6 : 
            var ty_rest$2 = fmtty_of_fmt(fmtty[3]);
            var prec_ty$2 = fmtty_of_precision_fmtty(fmtty[2], /* Nativeint_ty */Block.__(4, [ty_rest$2]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty$2);
        case 7 : 
            var ty_rest$3 = fmtty_of_fmt(fmtty[3]);
            var prec_ty$3 = fmtty_of_precision_fmtty(fmtty[2], /* Int64_ty */Block.__(5, [ty_rest$3]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty$3);
        case 8 : 
            var ty_rest$4 = fmtty_of_fmt(fmtty[3]);
            var prec_ty$4 = fmtty_of_precision_fmtty(fmtty[2], /* Float_ty */Block.__(6, [ty_rest$4]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty$4);
        case 9 : 
            return /* Bool_ty */Block.__(7, [fmtty_of_fmt(fmtty[0])]);
        case 10 : 
            _fmtty = fmtty[0];
            continue ;
            case 13 : 
            return /* Format_arg_ty */Block.__(8, [
                      fmtty[1],
                      fmtty_of_fmt(fmtty[2])
                    ]);
        case 14 : 
            var ty = fmtty[1];
            return /* Format_subst_ty */Block.__(9, [
                      ty,
                      ty,
                      fmtty_of_fmt(fmtty[2])
                    ]);
        case 15 : 
            return /* Alpha_ty */Block.__(10, [fmtty_of_fmt(fmtty[0])]);
        case 16 : 
            return /* Theta_ty */Block.__(11, [fmtty_of_fmt(fmtty[0])]);
        case 11 : 
        case 12 : 
        case 17 : 
            _fmtty = fmtty[1];
            continue ;
            case 18 : 
            return CamlinternalFormatBasics.concat_fmtty(fmtty_of_formatting_gen(fmtty[0]), fmtty_of_fmt(fmtty[1]));
        case 19 : 
            return /* Reader_ty */Block.__(13, [fmtty_of_fmt(fmtty[0])]);
        case 20 : 
            return /* String_ty */Block.__(1, [fmtty_of_fmt(fmtty[2])]);
        case 21 : 
            return /* Int_ty */Block.__(2, [fmtty_of_fmt(fmtty[1])]);
        case 23 : 
            var ign = fmtty[0];
            var fmt = fmtty[1];
            if (typeof ign === "number") {
              if (ign === 3) {
                return /* Ignored_reader_ty */Block.__(14, [fmtty_of_fmt(fmt)]);
              } else {
                return fmtty_of_fmt(fmt);
              }
            } else if (ign.tag === 8) {
              return CamlinternalFormatBasics.concat_fmtty(ign[1], fmtty_of_fmt(fmt));
            } else {
              return fmtty_of_fmt(fmt);
            }
        case 24 : 
            return fmtty_of_custom(fmtty[0], fmtty_of_fmt(fmtty[2]));
        default:
          return /* Char_ty */Block.__(0, [fmtty_of_fmt(fmtty[0])]);
      }
    }
    if (exit === 1) {
      return fmtty_of_padding_fmtty(fmtty[0], /* String_ty */Block.__(1, [fmtty_of_fmt(fmtty[1])]));
    }
    
  };
}

function fmtty_of_custom(arity, fmtty) {
  if (arity) {
    return /* Any_ty */Block.__(12, [fmtty_of_custom(arity[0], fmtty)]);
  } else {
    return fmtty;
  }
}

function fmtty_of_padding_fmtty(pad, fmtty) {
  if (typeof pad === "number" || !pad.tag) {
    return fmtty;
  } else {
    return /* Int_ty */Block.__(2, [fmtty]);
  }
}

function fmtty_of_precision_fmtty(prec, fmtty) {
  if (typeof prec === "number" && prec !== 0) {
    return /* Int_ty */Block.__(2, [fmtty]);
  } else {
    return fmtty;
  }
}

var Type_mismatch = Caml_exceptions.create("CamlinternalFormat.Type_mismatch");

function type_padding(pad, fmtty) {
  if (typeof pad === "number") {
    return /* Padding_fmtty_EBB */[
            /* No_padding */0,
            fmtty
          ];
  } else if (pad.tag) {
    if (typeof fmtty === "number") {
      throw Type_mismatch;
    } else if (fmtty.tag === 2) {
      return /* Padding_fmtty_EBB */[
              /* Arg_padding */Block.__(1, [pad[0]]),
              fmtty[0]
            ];
    } else {
      throw Type_mismatch;
    }
  } else {
    return /* Padding_fmtty_EBB */[
            /* Lit_padding */Block.__(0, [
                pad[0],
                pad[1]
              ]),
            fmtty
          ];
  }
}

function type_padprec(pad, prec, fmtty) {
  var match = type_padding(pad, fmtty);
  if (typeof prec === "number") {
    if (prec !== 0) {
      var match$1 = match[1];
      if (typeof match$1 === "number") {
        throw Type_mismatch;
      } else if (match$1.tag === 2) {
        return /* Padprec_fmtty_EBB */[
                match[0],
                /* Arg_precision */1,
                match$1[0]
              ];
      } else {
        throw Type_mismatch;
      }
    } else {
      return /* Padprec_fmtty_EBB */[
              match[0],
              /* No_precision */0,
              match[1]
            ];
    }
  } else {
    return /* Padprec_fmtty_EBB */[
            match[0],
            /* Lit_precision */[prec[0]],
            match[1]
          ];
  }
}

function type_ignored_param_one(ign, fmt, fmtty) {
  var match = type_format_gen(fmt, fmtty);
  return /* Fmt_fmtty_EBB */[
          /* Ignored_param */Block.__(23, [
              ign,
              match[0]
            ]),
          match[1]
        ];
}

function type_format_gen(fmt, fmtty) {
  if (typeof fmt === "number") {
    return /* Fmt_fmtty_EBB */[
            /* End_of_format */0,
            fmtty
          ];
  } else {
    switch (fmt.tag | 0) {
      case 0 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Char */Block.__(0, [match[0]]),
                    match[1]
                  ];
          }
          break;
      case 1 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match$1 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Caml_char */Block.__(1, [match$1[0]]),
                    match$1[1]
                  ];
          }
          break;
      case 2 : 
          var match$2 = type_padding(fmt[0], fmtty);
          var match$3 = match$2[1];
          if (typeof match$3 === "number") {
            throw Type_mismatch;
          } else if (match$3.tag === 1) {
            var match$4 = type_format_gen(fmt[1], match$3[0]);
            return /* Fmt_fmtty_EBB */[
                    /* String */Block.__(2, [
                        match$2[0],
                        match$4[0]
                      ]),
                    match$4[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 3 : 
          var match$5 = type_padding(fmt[0], fmtty);
          var match$6 = match$5[1];
          if (typeof match$6 === "number") {
            throw Type_mismatch;
          } else if (match$6.tag === 1) {
            var match$7 = type_format_gen(fmt[1], match$6[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Caml_string */Block.__(3, [
                        match$5[0],
                        match$7[0]
                      ]),
                    match$7[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 4 : 
          var match$8 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$9 = match$8[2];
          if (typeof match$9 === "number") {
            throw Type_mismatch;
          } else if (match$9.tag === 2) {
            var match$10 = type_format_gen(fmt[3], match$9[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int */Block.__(4, [
                        fmt[0],
                        match$8[0],
                        match$8[1],
                        match$10[0]
                      ]),
                    match$10[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 5 : 
          var match$11 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$12 = match$11[2];
          if (typeof match$12 === "number") {
            throw Type_mismatch;
          } else if (match$12.tag === 3) {
            var match$13 = type_format_gen(fmt[3], match$12[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int32 */Block.__(5, [
                        fmt[0],
                        match$11[0],
                        match$11[1],
                        match$13[0]
                      ]),
                    match$13[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 6 : 
          var match$14 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$15 = match$14[2];
          if (typeof match$15 === "number") {
            throw Type_mismatch;
          } else if (match$15.tag === 4) {
            var match$16 = type_format_gen(fmt[3], match$15[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Nativeint */Block.__(6, [
                        fmt[0],
                        match$14[0],
                        match$14[1],
                        match$16[0]
                      ]),
                    match$16[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 7 : 
          var match$17 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$18 = match$17[2];
          if (typeof match$18 === "number") {
            throw Type_mismatch;
          } else if (match$18.tag === 5) {
            var match$19 = type_format_gen(fmt[3], match$18[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int64 */Block.__(7, [
                        fmt[0],
                        match$17[0],
                        match$17[1],
                        match$19[0]
                      ]),
                    match$19[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 8 : 
          var match$20 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$21 = match$20[2];
          if (typeof match$21 === "number") {
            throw Type_mismatch;
          } else if (match$21.tag === 6) {
            var match$22 = type_format_gen(fmt[3], match$21[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Float */Block.__(8, [
                        fmt[0],
                        match$20[0],
                        match$20[1],
                        match$22[0]
                      ]),
                    match$22[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 9 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 7) {
            var match$23 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Bool */Block.__(9, [match$23[0]]),
                    match$23[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 10 : 
          var match$24 = type_format_gen(fmt[0], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Flush */Block.__(10, [match$24[0]]),
                  match$24[1]
                ];
      case 11 : 
          var match$25 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* String_literal */Block.__(11, [
                      fmt[0],
                      match$25[0]
                    ]),
                  match$25[1]
                ];
      case 12 : 
          var match$26 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Char_literal */Block.__(12, [
                      fmt[0],
                      match$26[0]
                    ]),
                  match$26[1]
                ];
      case 13 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 8) {
            var sub_fmtty$prime = fmtty[0];
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[fmt[1]], /* Fmtty_EBB */[sub_fmtty$prime])) {
              throw Type_mismatch;
            }
            var match$27 = type_format_gen(fmt[2], fmtty[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Format_arg */Block.__(13, [
                        fmt[0],
                        sub_fmtty$prime,
                        match$27[0]
                      ]),
                    match$27[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 14 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 9) {
            var sub_fmtty1 = fmtty[0];
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(fmt[1])], /* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub_fmtty1)])) {
              throw Type_mismatch;
            }
            var match$28 = type_format_gen(fmt[2], CamlinternalFormatBasics.erase_rel(fmtty[2]));
            return /* Fmt_fmtty_EBB */[
                    /* Format_subst */Block.__(14, [
                        fmt[0],
                        sub_fmtty1,
                        match$28[0]
                      ]),
                    match$28[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 15 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 10) {
            var match$29 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Alpha */Block.__(15, [match$29[0]]),
                    match$29[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 16 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 11) {
            var match$30 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Theta */Block.__(16, [match$30[0]]),
                    match$30[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 17 : 
          var match$31 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Formatting_lit */Block.__(17, [
                      fmt[0],
                      match$31[0]
                    ]),
                  match$31[1]
                ];
      case 18 : 
          var formatting_gen = fmt[0];
          var fmt0 = fmt[1];
          var fmtty0 = fmtty;
          if (formatting_gen.tag) {
            var match$32 = formatting_gen[0];
            var match$33 = type_format_gen(match$32[0], fmtty0);
            var match$34 = type_format_gen(fmt0, match$33[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Formatting_gen */Block.__(18, [
                        /* Open_box */Block.__(1, [/* Format */[
                              match$33[0],
                              match$32[1]
                            ]]),
                        match$34[0]
                      ]),
                    match$34[1]
                  ];
          } else {
            var match$35 = formatting_gen[0];
            var match$36 = type_format_gen(match$35[0], fmtty0);
            var match$37 = type_format_gen(fmt0, match$36[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Formatting_gen */Block.__(18, [
                        /* Open_tag */Block.__(0, [/* Format */[
                              match$36[0],
                              match$35[1]
                            ]]),
                        match$37[0]
                      ]),
                    match$37[1]
                  ];
          }
      case 19 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 13) {
            var match$38 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Reader */Block.__(19, [match$38[0]]),
                    match$38[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 20 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 1) {
            var match$39 = type_format_gen(fmt[2], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Scan_char_set */Block.__(20, [
                        fmt[0],
                        fmt[1],
                        match$39[0]
                      ]),
                    match$39[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 21 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 2) {
            var match$40 = type_format_gen(fmt[1], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Scan_get_counter */Block.__(21, [
                        fmt[0],
                        match$40[0]
                      ]),
                    match$40[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 23 : 
          var ign = fmt[0];
          var fmt$1 = fmt[1];
          var fmtty$1 = fmtty;
          if (typeof ign === "number") {
            if (ign === 3) {
              if (typeof fmtty$1 === "number") {
                throw Type_mismatch;
              } else if (fmtty$1.tag === 14) {
                var match$41 = type_format_gen(fmt$1, fmtty$1[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Ignored_param */Block.__(23, [
                            /* Ignored_reader */3,
                            match$41[0]
                          ]),
                        match$41[1]
                      ];
              } else {
                throw Type_mismatch;
              }
            } else {
              return type_ignored_param_one(ign, fmt$1, fmtty$1);
            }
          } else {
            switch (ign.tag | 0) {
              case 7 : 
                  return type_ignored_param_one(/* Ignored_format_arg */Block.__(7, [
                                ign[0],
                                ign[1]
                              ]), fmt$1, fmtty$1);
              case 8 : 
                  var match$42 = type_ignored_format_substitution(ign[1], fmt$1, fmtty$1);
                  var match$43 = match$42[1];
                  return /* Fmt_fmtty_EBB */[
                          /* Ignored_param */Block.__(23, [
                              /* Ignored_format_subst */Block.__(8, [
                                  ign[0],
                                  match$42[0]
                                ]),
                              match$43[0]
                            ]),
                          match$43[1]
                        ];
              default:
                return type_ignored_param_one(ign, fmt$1, fmtty$1);
            }
          }
      case 22 : 
      case 24 : 
          throw Type_mismatch;
      
    }
  }
}

function type_ignored_format_substitution(sub_fmtty, fmt, fmtty) {
  if (typeof sub_fmtty === "number") {
    return /* Fmtty_fmt_EBB */[
            /* End_of_fmtty */0,
            type_format_gen(fmt, fmtty)
          ];
  } else {
    switch (sub_fmtty.tag | 0) {
      case 0 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Char_ty */Block.__(0, [match[0]]),
                    match[1]
                  ];
          }
          break;
      case 1 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 1) {
            var match$1 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* String_ty */Block.__(1, [match$1[0]]),
                    match$1[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 2 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 2) {
            var match$2 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int_ty */Block.__(2, [match$2[0]]),
                    match$2[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 3 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 3) {
            var match$3 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int32_ty */Block.__(3, [match$3[0]]),
                    match$3[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 4 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 4) {
            var match$4 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Nativeint_ty */Block.__(4, [match$4[0]]),
                    match$4[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 5 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 5) {
            var match$5 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int64_ty */Block.__(5, [match$5[0]]),
                    match$5[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 6 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 6) {
            var match$6 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Float_ty */Block.__(6, [match$6[0]]),
                    match$6[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 7 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 7) {
            var match$7 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Bool_ty */Block.__(7, [match$7[0]]),
                    match$7[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 8 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 8) {
            var sub2_fmtty$prime = fmtty[0];
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[sub_fmtty[0]], /* Fmtty_EBB */[sub2_fmtty$prime])) {
              throw Type_mismatch;
            }
            var match$8 = type_ignored_format_substitution(sub_fmtty[1], fmt, fmtty[1]);
            return /* Fmtty_fmt_EBB */[
                    /* Format_arg_ty */Block.__(8, [
                        sub2_fmtty$prime,
                        match$8[0]
                      ]),
                    match$8[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 9 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 9) {
            var sub2_fmtty$prime$1 = fmtty[1];
            var sub1_fmtty$prime = fmtty[0];
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub_fmtty[0])], /* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub1_fmtty$prime)])) {
              throw Type_mismatch;
            }
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub_fmtty[1])], /* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub2_fmtty$prime$1)])) {
              throw Type_mismatch;
            }
            var sub_fmtty$prime = trans(symm(sub1_fmtty$prime), sub2_fmtty$prime$1);
            var match$9 = fmtty_rel_det(sub_fmtty$prime);
            Curry._1(match$9[1], /* Refl */0);
            Curry._1(match$9[3], /* Refl */0);
            var match$10 = type_ignored_format_substitution(CamlinternalFormatBasics.erase_rel(sub_fmtty[2]), fmt, fmtty[2]);
            return /* Fmtty_fmt_EBB */[
                    /* Format_subst_ty */Block.__(9, [
                        sub1_fmtty$prime,
                        sub2_fmtty$prime$1,
                        symm(match$10[0])
                      ]),
                    match$10[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 10 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 10) {
            var match$11 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Alpha_ty */Block.__(10, [match$11[0]]),
                    match$11[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 11 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 11) {
            var match$12 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Theta_ty */Block.__(11, [match$12[0]]),
                    match$12[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 12 : 
          throw Type_mismatch;
      case 13 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 13) {
            var match$13 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Reader_ty */Block.__(13, [match$13[0]]),
                    match$13[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 14 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 14) {
            var match$14 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Ignored_reader_ty */Block.__(14, [match$14[0]]),
                    match$14[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      
    }
  }
}

function type_format(fmt, fmtty) {
  var match = type_format_gen(fmt, fmtty);
  if (typeof match[1] === "number") {
    return match[0];
  } else {
    throw Type_mismatch;
  }
}

function recast(fmt, fmtty) {
  return type_format(fmt, CamlinternalFormatBasics.erase_rel(symm(fmtty)));
}

function fix_padding(padty, width, str) {
  var len = str.length;
  var match_000 = Pervasives.abs(width);
  var match_001 = width < 0 ? /* Left */0 : padty;
  var width$1 = match_000;
  if (width$1 <= len) {
    return str;
  } else {
    var padty$1 = match_001;
    var res = Bytes.make(width$1, padty$1 === /* Zeros */2 ? /* "0" */48 : /* " " */32);
    switch (padty$1) {
      case 0 : 
          $$String.blit(str, 0, res, 0, len);
          break;
      case 1 : 
          $$String.blit(str, 0, res, width$1 - len | 0, len);
          break;
      case 2 : 
          if (len > 0 && (Caml_string.get(str, 0) === /* "+" */43 || Caml_string.get(str, 0) === /* "-" */45 || Caml_string.get(str, 0) === /* " " */32)) {
            res[0] = Caml_string.get(str, 0);
            $$String.blit(str, 1, res, (width$1 - len | 0) + 1 | 0, len - 1 | 0);
          } else if (len > 1 && Caml_string.get(str, 0) === /* "0" */48 && (Caml_string.get(str, 1) === /* "x" */120 || Caml_string.get(str, 1) === /* "X" */88)) {
            res[1] = Caml_string.get(str, 1);
            $$String.blit(str, 2, res, (width$1 - len | 0) + 2 | 0, len - 2 | 0);
          } else {
            $$String.blit(str, 0, res, width$1 - len | 0, len);
          }
          break;
      
    }
    return Caml_string.bytes_to_string(res);
  }
}

function fix_int_precision(prec, str) {
  var prec$1 = Pervasives.abs(prec);
  var len = str.length;
  var c = Caml_string.get(str, 0);
  var exit = 0;
  if (c >= 58) {
    if (c >= 71) {
      if (c > 102 || c < 97) {
        return str;
      } else {
        exit = 2;
      }
    } else if (c >= 65) {
      exit = 2;
    } else {
      return str;
    }
  } else if (c !== 32) {
    if (c >= 43) {
      switch (c - 43 | 0) {
        case 0 : 
        case 2 : 
            exit = 1;
            break;
        case 1 : 
        case 3 : 
        case 4 : 
            return str;
        case 5 : 
            if ((prec$1 + 2 | 0) > len && len > 1 && (Caml_string.get(str, 1) === /* "x" */120 || Caml_string.get(str, 1) === /* "X" */88)) {
              var res = Bytes.make(prec$1 + 2 | 0, /* "0" */48);
              res[1] = Caml_string.get(str, 1);
              $$String.blit(str, 2, res, (prec$1 - len | 0) + 4 | 0, len - 2 | 0);
              return Caml_string.bytes_to_string(res);
            } else {
              exit = 2;
            }
            break;
        case 6 : 
        case 7 : 
        case 8 : 
        case 9 : 
        case 10 : 
        case 11 : 
        case 12 : 
        case 13 : 
        case 14 : 
            exit = 2;
            break;
        
      }
    } else {
      return str;
    }
  } else {
    exit = 1;
  }
  switch (exit) {
    case 1 : 
        if ((prec$1 + 1 | 0) > len) {
          var res$1 = Bytes.make(prec$1 + 1 | 0, /* "0" */48);
          res$1[0] = c;
          $$String.blit(str, 1, res$1, (prec$1 - len | 0) + 2 | 0, len - 1 | 0);
          return Caml_string.bytes_to_string(res$1);
        } else {
          return str;
        }
        break;
    case 2 : 
        if (prec$1 > len) {
          var res$2 = Bytes.make(prec$1, /* "0" */48);
          $$String.blit(str, 0, res$2, prec$1 - len | 0, len);
          return Caml_string.bytes_to_string(res$2);
        } else {
          return str;
        }
        break;
    
  }
}

function string_to_caml_string(str) {
  return $$String.concat($$String.escaped(str), /* :: */[
              "\"",
              /* :: */[
                "\"",
                /* [] */0
              ]
            ]);
}

function format_of_iconv(iconv) {
  switch (iconv) {
    case 0 : 
        return "%d";
    case 1 : 
        return "%+d";
    case 2 : 
        return "% d";
    case 3 : 
        return "%i";
    case 4 : 
        return "%+i";
    case 5 : 
        return "% i";
    case 6 : 
        return "%x";
    case 7 : 
        return "%#x";
    case 8 : 
        return "%X";
    case 9 : 
        return "%#X";
    case 10 : 
        return "%o";
    case 11 : 
        return "%#o";
    case 12 : 
        return "%u";
    
  }
}

function format_of_aconv(iconv, c) {
  var seps;
  switch (iconv) {
    case 0 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 1 : 
        seps = /* :: */[
          "%+",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 2 : 
        seps = /* :: */[
          "% ",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 3 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 4 : 
        seps = /* :: */[
          "%+",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 5 : 
        seps = /* :: */[
          "% ",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 6 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "x",
            /* [] */0
          ]
        ];
        break;
    case 7 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "x",
            /* [] */0
          ]
        ];
        break;
    case 8 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "X",
            /* [] */0
          ]
        ];
        break;
    case 9 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "X",
            /* [] */0
          ]
        ];
        break;
    case 10 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "o",
            /* [] */0
          ]
        ];
        break;
    case 11 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "o",
            /* [] */0
          ]
        ];
        break;
    case 12 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "u",
            /* [] */0
          ]
        ];
        break;
    
  }
  return $$String.concat(Caml_string.bytes_to_string(Bytes.make(1, c)), seps);
}

function format_of_fconv(fconv, prec) {
  if (fconv === /* Float_F */15) {
    return "%.12g";
  } else {
    var prec$1 = Pervasives.abs(prec);
    var symb = char_of_fconv(fconv);
    var buf = /* record */[
      /* ind */0,
      /* bytes */new Array(16)
    ];
    buffer_add_char(buf, /* "%" */37);
    bprint_fconv_flag(buf, fconv);
    buffer_add_char(buf, /* "." */46);
    buffer_add_string(buf, "" + prec$1);
    buffer_add_char(buf, symb);
    return buffer_contents(buf);
  }
}

function convert_int(iconv, n) {
  return Caml_format.caml_format_int(format_of_iconv(iconv), n);
}

function convert_int32(iconv, n) {
  return Caml_format.caml_int32_format(format_of_aconv(iconv, /* "l" */108), n);
}

function convert_nativeint(iconv, n) {
  return Caml_format.caml_nativeint_format(format_of_aconv(iconv, /* "n" */110), n);
}

function convert_int64(iconv, n) {
  return Caml_format.caml_int64_format(format_of_aconv(iconv, /* "L" */76), n);
}

function convert_float(fconv, prec, x) {
  var prec$1 = Pervasives.abs(prec);
  var str = Caml_format.caml_format_float(format_of_fconv(fconv, prec$1), x);
  if (fconv !== /* Float_F */15) {
    return str;
  } else {
    var len = str.length;
    var is_valid = function (_i) {
      while(true) {
        var i = _i;
        if (i === len) {
          return /* false */0;
        } else {
          var match = Caml_string.get(str, i);
          var switcher = match - 46 | 0;
          if (switcher > 23 || switcher < 0) {
            if (switcher !== 55) {
              _i = i + 1 | 0;
              continue ;
              
            } else {
              return /* true */1;
            }
          } else if (switcher > 22 || switcher < 1) {
            return /* true */1;
          } else {
            _i = i + 1 | 0;
            continue ;
            
          }
        }
      };
    };
    var match = Caml_float.caml_classify_float(x);
    if (match !== 3) {
      if (match >= 4) {
        return "nan";
      } else if (is_valid(0)) {
        return str;
      } else {
        return str + ".";
      }
    } else if (x < 0.0) {
      return "neg_infinity";
    } else {
      return "infinity";
    }
  }
}

function format_caml_char(c) {
  return $$String.concat(Char.escaped(c), /* :: */[
              "'",
              /* :: */[
                "'",
                /* [] */0
              ]
            ]);
}

function string_of_fmtty(fmtty) {
  var buf = /* record */[
    /* ind */0,
    /* bytes */new Array(16)
  ];
  bprint_fmtty(buf, fmtty);
  return buffer_contents(buf);
}

function make_printf(_k, o, _acc, _fmt) {
  while(true) {
    var fmt = _fmt;
    var acc = _acc;
    var k = _k;
    if (typeof fmt === "number") {
      return Curry._2(k, o, acc);
    } else {
      switch (fmt.tag | 0) {
        case 0 : 
            var rest = fmt[0];
            return (function(k,acc,rest){
            return function (c) {
              var new_acc = /* Acc_data_char */Block.__(5, [
                  acc,
                  c
                ]);
              return make_printf(k, o, new_acc, rest);
            }
            }(k,acc,rest));
        case 1 : 
            var rest$1 = fmt[0];
            return (function(k,acc,rest$1){
            return function (c) {
              var new_acc_001 = format_caml_char(c);
              var new_acc = /* Acc_data_string */Block.__(4, [
                  acc,
                  new_acc_001
                ]);
              return make_printf(k, o, new_acc, rest$1);
            }
            }(k,acc,rest$1));
        case 2 : 
            return make_string_padding(k, o, acc, fmt[1], fmt[0], (function (str) {
                          return str;
                        }));
        case 3 : 
            return make_string_padding(k, o, acc, fmt[1], fmt[0], string_to_caml_string);
        case 4 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int, fmt[0]);
        case 5 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int32, fmt[0]);
        case 6 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_nativeint, fmt[0]);
        case 7 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int64, fmt[0]);
        case 8 : 
            var k$1 = k;
            var o$1 = o;
            var acc$1 = acc;
            var fmt$1 = fmt[3];
            var pad = fmt[1];
            var prec = fmt[2];
            var fconv = fmt[0];
            if (typeof pad === "number") {
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv){
                  return function (p, x) {
                    var str = convert_float(fconv, p, x);
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv){
                  return function (x) {
                    var str = convert_float(fconv, 6, x);
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv));
                }
              } else {
                var p = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,p){
                return function (x) {
                  var str = convert_float(fconv, p, x);
                  return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,p));
              }
            } else if (pad.tag) {
              var padty = pad[0];
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                  return function (w, p, x) {
                    var str = fix_padding(padty, w, convert_float(fconv, p, x));
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                  return function (w, x) {
                    var str = convert_float(fconv, 6, x);
                    var str$prime = fix_padding(padty, w, str);
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str$prime
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                }
              } else {
                var p$1 = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1){
                return function (w, x) {
                  var str = fix_padding(padty, w, convert_float(fconv, p$1, x));
                  return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1));
              }
            } else {
              var w = pad[1];
              var padty$1 = pad[0];
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                  return function (p, x) {
                    var str = fix_padding(padty$1, w, convert_float(fconv, p, x));
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                  return function (x) {
                    var str = convert_float(fconv, 6, x);
                    var str$prime = fix_padding(padty$1, w, str);
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str$prime
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                }
              } else {
                var p$2 = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2){
                return function (x) {
                  var str = fix_padding(padty$1, w, convert_float(fconv, p$2, x));
                  return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2));
              }
            }
        case 9 : 
            var rest$2 = fmt[0];
            return (function(k,acc,rest$2){
            return function (b) {
              return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                            acc,
                            b ? "true" : "false"
                          ]), rest$2);
            }
            }(k,acc,rest$2));
        case 10 : 
            _fmt = fmt[0];
            _acc = /* Acc_flush */Block.__(7, [acc]);
            continue ;
            case 11 : 
            _fmt = fmt[1];
            _acc = /* Acc_string_literal */Block.__(2, [
                acc,
                fmt[0]
              ]);
            continue ;
            case 12 : 
            _fmt = fmt[1];
            _acc = /* Acc_char_literal */Block.__(3, [
                acc,
                fmt[0]
              ]);
            continue ;
            case 13 : 
            var rest$3 = fmt[2];
            var ty = string_of_fmtty(fmt[1]);
            return (function(k,acc,rest$3,ty){
            return function () {
              return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                            acc,
                            ty
                          ]), rest$3);
            }
            }(k,acc,rest$3,ty));
        case 14 : 
            var rest$4 = fmt[2];
            var fmtty = fmt[1];
            return (function(k,acc,fmtty,rest$4){
            return function (param) {
              return make_printf(k, o, acc, CamlinternalFormatBasics.concat_fmt(recast(param[0], fmtty), rest$4));
            }
            }(k,acc,fmtty,rest$4));
        case 15 : 
            var rest$5 = fmt[0];
            return (function(k,acc,rest$5){
            return function (f, x) {
              return make_printf(k, o, /* Acc_delay */Block.__(6, [
                            acc,
                            (function (o) {
                                return Curry._2(f, o, x);
                              })
                          ]), rest$5);
            }
            }(k,acc,rest$5));
        case 16 : 
            var rest$6 = fmt[0];
            return (function(k,acc,rest$6){
            return function (f) {
              return make_printf(k, o, /* Acc_delay */Block.__(6, [
                            acc,
                            f
                          ]), rest$6);
            }
            }(k,acc,rest$6));
        case 17 : 
            _fmt = fmt[1];
            _acc = /* Acc_formatting_lit */Block.__(0, [
                acc,
                fmt[0]
              ]);
            continue ;
            case 18 : 
            var match = fmt[0];
            if (match.tag) {
              var rest$7 = fmt[1];
              var k$prime = (function(k,acc,rest$7){
              return function k$prime(koc, kacc) {
                return make_printf(k, koc, /* Acc_formatting_gen */Block.__(1, [
                              acc,
                              /* Acc_open_box */Block.__(1, [kacc])
                            ]), rest$7);
              }
              }(k,acc,rest$7));
              _fmt = match[0][0];
              _acc = /* End_of_acc */0;
              _k = k$prime;
              continue ;
              
            } else {
              var rest$8 = fmt[1];
              var k$prime$1 = (function(k,acc,rest$8){
              return function k$prime$1(koc, kacc) {
                return make_printf(k, koc, /* Acc_formatting_gen */Block.__(1, [
                              acc,
                              /* Acc_open_tag */Block.__(0, [kacc])
                            ]), rest$8);
              }
              }(k,acc,rest$8));
              _fmt = match[0][0];
              _acc = /* End_of_acc */0;
              _k = k$prime$1;
              continue ;
              
            }
            break;
        case 19 : 
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    1449,
                    4
                  ]
                ];
        case 20 : 
            var rest$9 = fmt[2];
            var new_acc = /* Acc_invalid_arg */Block.__(8, [
                acc,
                "Printf: bad conversion %["
              ]);
            return (function(k,rest$9,new_acc){
            return function () {
              return make_printf(k, o, new_acc, rest$9);
            }
            }(k,rest$9,new_acc));
        case 21 : 
            var rest$10 = fmt[1];
            return (function(k,acc,rest$10){
            return function (n) {
              var new_acc_001 = Caml_format.caml_format_int("%u", n);
              var new_acc = /* Acc_data_string */Block.__(4, [
                  acc,
                  new_acc_001
                ]);
              return make_printf(k, o, new_acc, rest$10);
            }
            }(k,acc,rest$10));
        case 22 : 
            var rest$11 = fmt[0];
            return (function(k,acc,rest$11){
            return function (c) {
              var new_acc = /* Acc_data_char */Block.__(5, [
                  acc,
                  c
                ]);
              return make_printf(k, o, new_acc, rest$11);
            }
            }(k,acc,rest$11));
        case 23 : 
            var k$2 = k;
            var o$2 = o;
            var acc$2 = acc;
            var ign = fmt[0];
            var fmt$2 = fmt[1];
            if (typeof ign === "number") {
              if (ign === 3) {
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        1517,
                        39
                      ]
                    ];
              } else {
                return make_invalid_arg(k$2, o$2, acc$2, fmt$2);
              }
            } else if (ign.tag === 8) {
              return make_from_fmtty(k$2, o$2, acc$2, ign[1], fmt$2);
            } else {
              return make_invalid_arg(k$2, o$2, acc$2, fmt$2);
            }
        case 24 : 
            return make_custom(k, o, acc, fmt[2], fmt[0], Curry._1(fmt[1], /* () */0));
        
      }
    }
  };
}

function make_from_fmtty(k, o, acc, fmtty, fmt) {
  if (typeof fmtty === "number") {
    return make_invalid_arg(k, o, acc, fmt);
  } else {
    switch (fmtty.tag | 0) {
      case 0 : 
          var rest = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest, fmt);
            });
      case 1 : 
          var rest$1 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$1, fmt);
            });
      case 2 : 
          var rest$2 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$2, fmt);
            });
      case 3 : 
          var rest$3 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$3, fmt);
            });
      case 4 : 
          var rest$4 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$4, fmt);
            });
      case 5 : 
          var rest$5 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$5, fmt);
            });
      case 6 : 
          var rest$6 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$6, fmt);
            });
      case 7 : 
          var rest$7 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$7, fmt);
            });
      case 8 : 
          var rest$8 = fmtty[1];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$8, fmt);
            });
      case 9 : 
          var rest$9 = fmtty[2];
          var ty = trans(symm(fmtty[0]), fmtty[1]);
          return (function () {
              return make_from_fmtty(k, o, acc, CamlinternalFormatBasics.concat_fmtty(ty, rest$9), fmt);
            });
      case 10 : 
          var rest$10 = fmtty[0];
          return (function (_, _$1) {
              return make_from_fmtty(k, o, acc, rest$10, fmt);
            });
      case 11 : 
          var rest$11 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$11, fmt);
            });
      case 12 : 
          var rest$12 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$12, fmt);
            });
      case 13 : 
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "camlinternalFormat.ml",
                  1540,
                  31
                ]
              ];
      case 14 : 
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "camlinternalFormat.ml",
                  1541,
                  31
                ]
              ];
      
    }
  }
}

function make_invalid_arg(k, o, acc, fmt) {
  return make_printf(k, o, /* Acc_invalid_arg */Block.__(8, [
                acc,
                "Printf: bad conversion %_"
              ]), fmt);
}

function make_string_padding(k, o, acc, fmt, pad, trans) {
  if (typeof pad === "number") {
    return (function (x) {
        var new_acc_001 = Curry._1(trans, x);
        var new_acc = /* Acc_data_string */Block.__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  } else if (pad.tag) {
    var padty = pad[0];
    return (function (w, x) {
        var new_acc_001 = fix_padding(padty, w, Curry._1(trans, x));
        var new_acc = /* Acc_data_string */Block.__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  } else {
    var width = pad[1];
    var padty$1 = pad[0];
    return (function (x) {
        var new_acc_001 = fix_padding(padty$1, width, Curry._1(trans, x));
        var new_acc = /* Acc_data_string */Block.__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  }
}

function make_int_padding_precision(k, o, acc, fmt, pad, prec, trans, iconv) {
  if (typeof pad === "number") {
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (p, x) {
            var str = fix_int_precision(p, Curry._2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (x) {
            var str = Curry._2(trans, iconv, x);
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p = prec[0];
      return (function (x) {
          var str = fix_int_precision(p, Curry._2(trans, iconv, x));
          return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  } else if (pad.tag) {
    var padty = pad[0];
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (w, p, x) {
            var str = fix_padding(padty, w, fix_int_precision(p, Curry._2(trans, iconv, x)));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (w, x) {
            var str = fix_padding(padty, w, Curry._2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p$1 = prec[0];
      return (function (w, x) {
          var str = fix_padding(padty, w, fix_int_precision(p$1, Curry._2(trans, iconv, x)));
          return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  } else {
    var w = pad[1];
    var padty$1 = pad[0];
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (p, x) {
            var str = fix_padding(padty$1, w, fix_int_precision(p, Curry._2(trans, iconv, x)));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (x) {
            var str = fix_padding(padty$1, w, Curry._2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p$2 = prec[0];
      return (function (x) {
          var str = fix_padding(padty$1, w, fix_int_precision(p$2, Curry._2(trans, iconv, x)));
          return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  }
}

function make_custom(k, o, acc, rest, arity, f) {
  if (arity) {
    var arity$1 = arity[0];
    return (function (x) {
        return make_custom(k, o, acc, rest, arity$1, Curry._1(f, x));
      });
  } else {
    return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                  acc,
                  f
                ]), rest);
  }
}

function output_acc(o, _acc) {
  while(true) {
    var acc = _acc;
    var exit = 0;
    if (typeof acc === "number") {
      return /* () */0;
    } else {
      switch (acc.tag | 0) {
        case 0 : 
            var s = string_of_formatting_lit(acc[1]);
            output_acc(o, acc[0]);
            return Pervasives.output_string(o, s);
        case 1 : 
            var match = acc[1];
            var p = acc[0];
            output_acc(o, p);
            if (match.tag) {
              Pervasives.output_string(o, "@[");
              _acc = match[0];
              continue ;
              
            } else {
              Pervasives.output_string(o, "@{");
              _acc = match[0];
              continue ;
              
            }
            break;
        case 2 : 
        case 4 : 
            exit = 1;
            break;
        case 3 : 
        case 5 : 
            exit = 2;
            break;
        case 6 : 
            output_acc(o, acc[0]);
            return Curry._1(acc[1], o);
        case 7 : 
            output_acc(o, acc[0]);
            return Caml_io.caml_ml_flush(o);
        case 8 : 
            output_acc(o, acc[0]);
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  acc[1]
                ];
        
      }
    }
    switch (exit) {
      case 1 : 
          output_acc(o, acc[0]);
          return Pervasives.output_string(o, acc[1]);
      case 2 : 
          output_acc(o, acc[0]);
          return Caml_io.caml_ml_output_char(o, acc[1]);
      
    }
  };
}

function bufput_acc(b, _acc) {
  while(true) {
    var acc = _acc;
    var exit = 0;
    if (typeof acc === "number") {
      return /* () */0;
    } else {
      switch (acc.tag | 0) {
        case 0 : 
            var s = string_of_formatting_lit(acc[1]);
            bufput_acc(b, acc[0]);
            return Buffer.add_string(b, s);
        case 1 : 
            var match = acc[1];
            var p = acc[0];
            bufput_acc(b, p);
            if (match.tag) {
              Buffer.add_string(b, "@[");
              _acc = match[0];
              continue ;
              
            } else {
              Buffer.add_string(b, "@{");
              _acc = match[0];
              continue ;
              
            }
            break;
        case 2 : 
        case 4 : 
            exit = 1;
            break;
        case 3 : 
        case 5 : 
            exit = 2;
            break;
        case 6 : 
            bufput_acc(b, acc[0]);
            return Curry._1(acc[1], b);
        case 7 : 
            _acc = acc[0];
            continue ;
            case 8 : 
            bufput_acc(b, acc[0]);
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  acc[1]
                ];
        
      }
    }
    switch (exit) {
      case 1 : 
          bufput_acc(b, acc[0]);
          return Buffer.add_string(b, acc[1]);
      case 2 : 
          bufput_acc(b, acc[0]);
          return Buffer.add_char(b, acc[1]);
      
    }
  };
}

function strput_acc(b, _acc) {
  while(true) {
    var acc = _acc;
    var exit = 0;
    if (typeof acc === "number") {
      return /* () */0;
    } else {
      switch (acc.tag | 0) {
        case 0 : 
            var s = string_of_formatting_lit(acc[1]);
            strput_acc(b, acc[0]);
            return Buffer.add_string(b, s);
        case 1 : 
            var match = acc[1];
            var p = acc[0];
            strput_acc(b, p);
            if (match.tag) {
              Buffer.add_string(b, "@[");
              _acc = match[0];
              continue ;
              
            } else {
              Buffer.add_string(b, "@{");
              _acc = match[0];
              continue ;
              
            }
            break;
        case 2 : 
        case 4 : 
            exit = 1;
            break;
        case 3 : 
        case 5 : 
            exit = 2;
            break;
        case 6 : 
            strput_acc(b, acc[0]);
            return Buffer.add_string(b, Curry._1(acc[1], /* () */0));
        case 7 : 
            _acc = acc[0];
            continue ;
            case 8 : 
            strput_acc(b, acc[0]);
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  acc[1]
                ];
        
      }
    }
    switch (exit) {
      case 1 : 
          strput_acc(b, acc[0]);
          return Buffer.add_string(b, acc[1]);
      case 2 : 
          strput_acc(b, acc[0]);
          return Buffer.add_char(b, acc[1]);
      
    }
  };
}

function failwith_message(param) {
  var buf = Buffer.create(256);
  var k = function (_, acc) {
    strput_acc(buf, acc);
    var s = Buffer.contents(buf);
    throw [
          Caml_builtin_exceptions.failure,
          s
        ];
  };
  return make_printf(k, /* () */0, /* End_of_acc */0, param[0]);
}

function open_box_of_string(str) {
  if (str === "") {
    return /* tuple */[
            0,
            /* Pp_box */4
          ];
  } else {
    var len = str.length;
    var invalid_box = function () {
      return Curry._1(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "invalid box description ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* End_of_format */0
                            ])
                        ]),
                      "invalid box description %S"
                    ]), str);
    };
    var parse_spaces = function (_i) {
      while(true) {
        var i = _i;
        if (i === len) {
          return i;
        } else {
          var match = Caml_string.get(str, i);
          if (match !== 9) {
            if (match !== 32) {
              return i;
            } else {
              _i = i + 1 | 0;
              continue ;
              
            }
          } else {
            _i = i + 1 | 0;
            continue ;
            
          }
        }
      };
    };
    var parse_lword = function (_, _j) {
      while(true) {
        var j = _j;
        if (j === len) {
          return j;
        } else {
          var match = Caml_string.get(str, j);
          if (match > 122 || match < 97) {
            return j;
          } else {
            _j = j + 1 | 0;
            continue ;
            
          }
        }
      };
    };
    var parse_int = function (_, _j) {
      while(true) {
        var j = _j;
        if (j === len) {
          return j;
        } else {
          var match = Caml_string.get(str, j);
          if (match >= 48) {
            if (match >= 58) {
              return j;
            } else {
              _j = j + 1 | 0;
              continue ;
              
            }
          } else if (match !== 45) {
            return j;
          } else {
            _j = j + 1 | 0;
            continue ;
            
          }
        }
      };
    };
    var wstart = parse_spaces(0);
    var wend = parse_lword(wstart, wstart);
    var box_name = $$String.sub(str, wstart, wend - wstart | 0);
    var nstart = parse_spaces(wend);
    var nend = parse_int(nstart, nstart);
    var indent;
    if (nstart === nend) {
      indent = 0;
    } else {
      try {
        indent = Caml_format.caml_int_of_string($$String.sub(str, nstart, nend - nstart | 0));
      }
      catch (raw_exn){
        var exn = Js_exn.internalToOCamlException(raw_exn);
        if (exn[0] === Caml_builtin_exceptions.failure) {
          indent = invalid_box(/* () */0);
        } else {
          throw exn;
        }
      }
    }
    var exp_end = parse_spaces(nend);
    if (exp_end !== len) {
      invalid_box(/* () */0);
    }
    var box_type;
    switch (box_name) {
      case "" : 
      case "b" : 
          box_type = /* Pp_box */4;
          break;
      case "h" : 
          box_type = /* Pp_hbox */0;
          break;
      case "hov" : 
          box_type = /* Pp_hovbox */3;
          break;
      case "hv" : 
          box_type = /* Pp_hvbox */2;
          break;
      case "v" : 
          box_type = /* Pp_vbox */1;
          break;
      default:
        box_type = invalid_box(/* () */0);
    }
    return /* tuple */[
            indent,
            box_type
          ];
  }
}

function make_padding_fmt_ebb(pad, fmt) {
  if (typeof pad === "number") {
    return /* Padding_fmt_EBB */[
            /* No_padding */0,
            fmt
          ];
  } else if (pad.tag) {
    return /* Padding_fmt_EBB */[
            /* Arg_padding */Block.__(1, [pad[0]]),
            fmt
          ];
  } else {
    return /* Padding_fmt_EBB */[
            /* Lit_padding */Block.__(0, [
                pad[0],
                pad[1]
              ]),
            fmt
          ];
  }
}

function make_precision_fmt_ebb(prec, fmt) {
  if (typeof prec === "number") {
    if (prec !== 0) {
      return /* Precision_fmt_EBB */[
              /* Arg_precision */1,
              fmt
            ];
    } else {
      return /* Precision_fmt_EBB */[
              /* No_precision */0,
              fmt
            ];
    }
  } else {
    return /* Precision_fmt_EBB */[
            /* Lit_precision */[prec[0]],
            fmt
          ];
  }
}

function make_padprec_fmt_ebb(pad, prec, fmt) {
  var match = make_precision_fmt_ebb(prec, fmt);
  var fmt$prime = match[1];
  var prec$1 = match[0];
  if (typeof pad === "number") {
    return /* Padprec_fmt_EBB */[
            /* No_padding */0,
            prec$1,
            fmt$prime
          ];
  } else if (pad.tag) {
    return /* Padprec_fmt_EBB */[
            /* Arg_padding */Block.__(1, [pad[0]]),
            prec$1,
            fmt$prime
          ];
  } else {
    return /* Padprec_fmt_EBB */[
            /* Lit_padding */Block.__(0, [
                pad[0],
                pad[1]
              ]),
            prec$1,
            fmt$prime
          ];
  }
}

function fmt_ebb_of_string(legacy_behavior, str) {
  var legacy_behavior$1 = legacy_behavior ? legacy_behavior[0] : /* true */1;
  var invalid_format_message = function (str_ind, msg) {
    return Curry._3(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", ",
                                        /* String */Block.__(2, [
                                            /* No_padding */0,
                                            /* End_of_format */0
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, %s"
                  ]), str, str_ind, msg);
  };
  var invalid_format_without = function (str_ind, c, s) {
    return Curry._4(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", '",
                                        /* Char */Block.__(0, [/* String_literal */Block.__(11, [
                                                "' without ",
                                                /* String */Block.__(2, [
                                                    /* No_padding */0,
                                                    /* End_of_format */0
                                                  ])
                                              ])])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, '%c' without %s"
                  ]), str, str_ind, c, s);
  };
  var expected_character = function (str_ind, expected, read) {
    return Curry._4(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", ",
                                        /* String */Block.__(2, [
                                            /* No_padding */0,
                                            /* String_literal */Block.__(11, [
                                                " expected, read ",
                                                /* Caml_char */Block.__(1, [/* End_of_format */0])
                                              ])
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, %s expected, read %C"
                  ]), str, str_ind, expected, read);
  };
  var compute_int_conv = function (pct_ind, str_ind, _plus, _sharp, _space, symb) {
    while(true) {
      var space = _space;
      var sharp = _sharp;
      var plus = _plus;
      var exit = 0;
      var exit$1 = 0;
      if (plus !== 0) {
        if (sharp !== 0) {
          exit$1 = 2;
        } else if (space !== 0) {
          exit = 1;
        } else if (symb !== 100) {
          if (symb !== 105) {
            exit = 1;
          } else {
            return /* Int_pi */4;
          }
        } else {
          return /* Int_pd */1;
        }
      } else if (sharp !== 0) {
        if (space !== 0) {
          exit$1 = 2;
        } else if (symb !== 88) {
          if (symb !== 111) {
            if (symb !== 120) {
              exit$1 = 2;
            } else {
              return /* Int_Cx */7;
            }
          } else {
            return /* Int_Co */11;
          }
        } else {
          return /* Int_CX */9;
        }
      } else if (space !== 0) {
        if (symb !== 100) {
          if (symb !== 105) {
            exit = 1;
          } else {
            return /* Int_si */5;
          }
        } else {
          return /* Int_sd */2;
        }
      } else {
        var switcher = symb - 88 | 0;
        if (switcher > 32 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 0 : 
                return /* Int_X */8;
            case 12 : 
                return /* Int_d */0;
            case 17 : 
                return /* Int_i */3;
            case 23 : 
                return /* Int_o */10;
            case 29 : 
                return /* Int_u */12;
            case 1 : 
            case 2 : 
            case 3 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 11 : 
            case 13 : 
            case 14 : 
            case 15 : 
            case 16 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 24 : 
            case 25 : 
            case 26 : 
            case 27 : 
            case 28 : 
            case 30 : 
            case 31 : 
                exit = 1;
                break;
            case 32 : 
                return /* Int_x */6;
            
          }
        }
      }
      if (exit$1 === 2) {
        var exit$2 = 0;
        var switcher$1 = symb - 88 | 0;
        if (switcher$1 > 32 || switcher$1 < 0) {
          exit = 1;
        } else {
          switch (switcher$1) {
            case 0 : 
                if (legacy_behavior$1) {
                  return /* Int_CX */9;
                } else {
                  exit = 1;
                }
                break;
            case 23 : 
                if (legacy_behavior$1) {
                  return /* Int_Co */11;
                } else {
                  exit = 1;
                }
                break;
            case 12 : 
            case 17 : 
            case 29 : 
                exit$2 = 3;
                break;
            case 1 : 
            case 2 : 
            case 3 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 11 : 
            case 13 : 
            case 14 : 
            case 15 : 
            case 16 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 24 : 
            case 25 : 
            case 26 : 
            case 27 : 
            case 28 : 
            case 30 : 
            case 31 : 
                exit = 1;
                break;
            case 32 : 
                if (legacy_behavior$1) {
                  return /* Int_Cx */7;
                } else {
                  exit = 1;
                }
                break;
            
          }
        }
        if (exit$2 === 3) {
          if (legacy_behavior$1) {
            _sharp = /* false */0;
            continue ;
            
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "'#'");
          }
        }
        
      }
      if (exit === 1) {
        if (plus !== 0) {
          if (space !== 0) {
            if (legacy_behavior$1) {
              _space = /* false */0;
              continue ;
              
            } else {
              return incompatible_flag(pct_ind, str_ind, /* " " */32, "'+'");
            }
          } else if (legacy_behavior$1) {
            _plus = /* false */0;
            continue ;
            
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "'+'");
          }
        } else if (space !== 0) {
          if (legacy_behavior$1) {
            _space = /* false */0;
            continue ;
            
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "' '");
          }
        } else {
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "camlinternalFormat.ml",
                  2719,
                  28
                ]
              ];
        }
      }
      
    };
  };
  var incompatible_flag = function (pct_ind, str_ind, symb, option) {
    var subfmt = $$String.sub(str, pct_ind, str_ind - pct_ind | 0);
    return Curry._5(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", ",
                                        /* String */Block.__(2, [
                                            /* No_padding */0,
                                            /* String_literal */Block.__(11, [
                                                " is incompatible with '",
                                                /* Char */Block.__(0, [/* String_literal */Block.__(11, [
                                                        "' in sub-format ",
                                                        /* Caml_string */Block.__(3, [
                                                            /* No_padding */0,
                                                            /* End_of_format */0
                                                          ])
                                                      ])])
                                              ])
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, %s is incompatible with '%c' in sub-format %S"
                  ]), str, pct_ind, option, symb, subfmt);
  };
  var parse_positive = function (_str_ind, end_ind, _acc) {
    while(true) {
      var acc = _acc;
      var str_ind = _str_ind;
      if (str_ind === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      var c = Caml_string.get(str, str_ind);
      if (c > 57 || c < 48) {
        return /* tuple */[
                str_ind,
                acc
              ];
      } else {
        var new_acc = Caml_int32.imul(acc, 10) + (c - /* "0" */48 | 0) | 0;
        _acc = new_acc;
        _str_ind = str_ind + 1 | 0;
        continue ;
        
      }
    };
  };
  var parse_after_precision = function (pct_ind, str_ind, end_ind, minus, plus, sharp, space, ign, pad, prec) {
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var parse_conv = function (padprec) {
      return parse_conversion(pct_ind, str_ind + 1 | 0, end_ind, plus, sharp, space, ign, pad, prec, padprec, Caml_string.get(str, str_ind));
    };
    if (typeof pad === "number") {
      var exit = 0;
      if (typeof prec === "number") {
        if (prec !== 0) {
          exit = 1;
        } else {
          return parse_conv(/* No_padding */0);
        }
      } else {
        exit = 1;
      }
      if (exit === 1) {
        if (minus !== 0) {
          if (typeof prec === "number") {
            return parse_conv(/* Arg_padding */Block.__(1, [/* Left */0]));
          } else {
            return parse_conv(/* Lit_padding */Block.__(0, [
                          /* Left */0,
                          prec[0]
                        ]));
          }
        } else if (typeof prec === "number") {
          return parse_conv(/* Arg_padding */Block.__(1, [/* Right */1]));
        } else {
          return parse_conv(/* Lit_padding */Block.__(0, [
                        /* Right */1,
                        prec[0]
                      ]));
        }
      }
      
    } else {
      return parse_conv(pad);
    }
  };
  var parse_after_padding = function (pct_ind, str_ind, end_ind, minus, plus, sharp, space, ign, pad) {
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var symb = Caml_string.get(str, str_ind);
    if (symb !== 46) {
      return parse_conversion(pct_ind, str_ind + 1 | 0, end_ind, plus, sharp, space, ign, pad, /* No_precision */0, pad, symb);
    } else {
      var pct_ind$1 = pct_ind;
      var str_ind$1 = str_ind + 1 | 0;
      var end_ind$1 = end_ind;
      var minus$1 = minus;
      var plus$1 = plus;
      var sharp$1 = sharp;
      var space$1 = space;
      var ign$1 = ign;
      var pad$1 = pad;
      if (str_ind$1 === end_ind$1) {
        invalid_format_message(end_ind$1, "unexpected end of format");
      }
      var parse_literal = function (minus, str_ind) {
        var match = parse_positive(str_ind, end_ind$1, 0);
        return parse_after_precision(pct_ind$1, match[0], end_ind$1, minus, plus$1, sharp$1, space$1, ign$1, pad$1, /* Lit_precision */[match[1]]);
      };
      var symb$1 = Caml_string.get(str, str_ind$1);
      var exit = 0;
      var exit$1 = 0;
      if (symb$1 >= 48) {
        if (symb$1 >= 58) {
          exit = 1;
        } else {
          return parse_literal(minus$1, str_ind$1);
        }
      } else if (symb$1 >= 42) {
        switch (symb$1 - 42 | 0) {
          case 0 : 
              return parse_after_precision(pct_ind$1, str_ind$1 + 1 | 0, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, pad$1, /* Arg_precision */1);
          case 1 : 
          case 3 : 
              exit$1 = 2;
              break;
          case 2 : 
          case 4 : 
          case 5 : 
              exit = 1;
              break;
          
        }
      } else {
        exit = 1;
      }
      if (exit$1 === 2) {
        if (legacy_behavior$1) {
          return parse_literal(minus$1 || +(symb$1 === /* "-" */45), str_ind$1 + 1 | 0);
        } else {
          exit = 1;
        }
      }
      if (exit === 1) {
        if (legacy_behavior$1) {
          return parse_after_precision(pct_ind$1, str_ind$1, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, pad$1, /* Lit_precision */[0]);
        } else {
          return invalid_format_without(str_ind$1 - 1 | 0, /* "." */46, "precision");
        }
      }
      
    }
  };
  var parse_literal = function (lit_start, _str_ind, end_ind) {
    while(true) {
      var str_ind = _str_ind;
      if (str_ind === end_ind) {
        return add_literal(lit_start, str_ind, /* End_of_format */0);
      } else {
        var match = Caml_string.get(str, str_ind);
        if (match !== 37) {
          if (match !== 64) {
            _str_ind = str_ind + 1 | 0;
            continue ;
            
          } else {
            var match$1 = parse_after_at(str_ind + 1 | 0, end_ind);
            return add_literal(lit_start, str_ind, match$1[0]);
          }
        } else {
          var match$2 = parse_format(str_ind, end_ind);
          return add_literal(lit_start, str_ind, match$2[0]);
        }
      }
    };
  };
  var parse_format = function (pct_ind, end_ind) {
    var pct_ind$1 = pct_ind;
    var str_ind = pct_ind + 1 | 0;
    var end_ind$1 = end_ind;
    if (str_ind === end_ind$1) {
      invalid_format_message(end_ind$1, "unexpected end of format");
    }
    var match = Caml_string.get(str, str_ind);
    if (match !== 95) {
      return parse_flags(pct_ind$1, str_ind, end_ind$1, /* false */0);
    } else {
      return parse_flags(pct_ind$1, str_ind + 1 | 0, end_ind$1, /* true */1);
    }
  };
  var parse_after_at = function (str_ind, end_ind) {
    if (str_ind === end_ind) {
      return /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                  /* "@" */64,
                  /* End_of_format */0
                ])];
    } else {
      var c = Caml_string.get(str, str_ind);
      var exit = 0;
      if (c >= 65) {
        if (c >= 94) {
          var switcher = c - 123 | 0;
          if (switcher > 2 || switcher < 0) {
            exit = 1;
          } else {
            switch (switcher) {
              case 0 : 
                  return parse_tag(/* true */1, str_ind + 1 | 0, end_ind);
              case 1 : 
                  exit = 1;
                  break;
              case 2 : 
                  var beg_ind = str_ind + 1 | 0;
                  var match = parse_literal(beg_ind, beg_ind, end_ind);
                  return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                              /* Close_tag */1,
                              match[0]
                            ])];
              
            }
          }
        } else if (c >= 91) {
          switch (c - 91 | 0) {
            case 0 : 
                return parse_tag(/* false */0, str_ind + 1 | 0, end_ind);
            case 1 : 
                exit = 1;
                break;
            case 2 : 
                var beg_ind$1 = str_ind + 1 | 0;
                var match$1 = parse_literal(beg_ind$1, beg_ind$1, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Close_box */0,
                            match$1[0]
                          ])];
            
          }
        } else {
          exit = 1;
        }
      } else if (c !== 10) {
        if (c >= 32) {
          switch (c - 32 | 0) {
            case 0 : 
                var beg_ind$2 = str_ind + 1 | 0;
                var match$2 = parse_literal(beg_ind$2, beg_ind$2, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Break */Block.__(0, [
                                "@ ",
                                1,
                                0
                              ]),
                            match$2[0]
                          ])];
            case 5 : 
                if ((str_ind + 1 | 0) < end_ind && Caml_string.get(str, str_ind + 1 | 0) === /* "%" */37) {
                  var beg_ind$3 = str_ind + 2 | 0;
                  var match$3 = parse_literal(beg_ind$3, beg_ind$3, end_ind);
                  return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                              /* Escaped_percent */6,
                              match$3[0]
                            ])];
                } else {
                  var match$4 = parse_literal(str_ind, str_ind, end_ind);
                  return /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                              /* "@" */64,
                              match$4[0]
                            ])];
                }
                break;
            case 12 : 
                var beg_ind$4 = str_ind + 1 | 0;
                var match$5 = parse_literal(beg_ind$4, beg_ind$4, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Break */Block.__(0, [
                                "@,",
                                0,
                                0
                              ]),
                            match$5[0]
                          ])];
            case 14 : 
                var beg_ind$5 = str_ind + 1 | 0;
                var match$6 = parse_literal(beg_ind$5, beg_ind$5, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Flush_newline */4,
                            match$6[0]
                          ])];
            case 27 : 
                var str_ind$1 = str_ind + 1 | 0;
                var end_ind$1 = end_ind;
                var match$7;
                try {
                  if (str_ind$1 === end_ind$1 || Caml_string.get(str, str_ind$1) !== /* "<" */60) {
                    throw Caml_builtin_exceptions.not_found;
                  }
                  var str_ind_1 = parse_spaces(str_ind$1 + 1 | 0, end_ind$1);
                  var match$8 = Caml_string.get(str, str_ind_1);
                  var exit$1 = 0;
                  if (match$8 >= 48) {
                    if (match$8 >= 58) {
                      throw Caml_builtin_exceptions.not_found;
                    } else {
                      exit$1 = 1;
                    }
                  } else if (match$8 !== 45) {
                    throw Caml_builtin_exceptions.not_found;
                  } else {
                    exit$1 = 1;
                  }
                  if (exit$1 === 1) {
                    var match$9 = parse_integer(str_ind_1, end_ind$1);
                    var width = match$9[1];
                    var str_ind_3 = parse_spaces(match$9[0], end_ind$1);
                    var match$10 = Caml_string.get(str, str_ind_3);
                    var switcher$1 = match$10 - 45 | 0;
                    if (switcher$1 > 12 || switcher$1 < 0) {
                      if (switcher$1 !== 17) {
                        throw Caml_builtin_exceptions.not_found;
                      } else {
                        var s = $$String.sub(str, str_ind$1 - 2 | 0, (str_ind_3 - str_ind$1 | 0) + 3 | 0);
                        match$7 = /* tuple */[
                          str_ind_3 + 1 | 0,
                          /* Break */Block.__(0, [
                              s,
                              width,
                              0
                            ])
                        ];
                      }
                    } else if (switcher$1 === 2 || switcher$1 === 1) {
                      throw Caml_builtin_exceptions.not_found;
                    } else {
                      var match$11 = parse_integer(str_ind_3, end_ind$1);
                      var str_ind_5 = parse_spaces(match$11[0], end_ind$1);
                      if (Caml_string.get(str, str_ind_5) !== /* ">" */62) {
                        throw Caml_builtin_exceptions.not_found;
                      }
                      var s$1 = $$String.sub(str, str_ind$1 - 2 | 0, (str_ind_5 - str_ind$1 | 0) + 3 | 0);
                      match$7 = /* tuple */[
                        str_ind_5 + 1 | 0,
                        /* Break */Block.__(0, [
                            s$1,
                            width,
                            match$11[1]
                          ])
                      ];
                    }
                  }
                  
                }
                catch (raw_exn){
                  var exn = Js_exn.internalToOCamlException(raw_exn);
                  if (exn === Caml_builtin_exceptions.not_found) {
                    match$7 = /* tuple */[
                      str_ind$1,
                      /* Break */Block.__(0, [
                          "@;",
                          1,
                          0
                        ])
                    ];
                  } else if (exn[0] === Caml_builtin_exceptions.failure) {
                    match$7 = /* tuple */[
                      str_ind$1,
                      /* Break */Block.__(0, [
                          "@;",
                          1,
                          0
                        ])
                    ];
                  } else {
                    throw exn;
                  }
                }
                var next_ind = match$7[0];
                var match$12 = parse_literal(next_ind, next_ind, end_ind$1);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            match$7[1],
                            match$12[0]
                          ])];
            case 28 : 
                var str_ind$2 = str_ind + 1 | 0;
                var end_ind$2 = end_ind;
                var match$13;
                try {
                  var str_ind_1$1 = parse_spaces(str_ind$2, end_ind$2);
                  var match$14 = Caml_string.get(str, str_ind_1$1);
                  var exit$2 = 0;
                  if (match$14 >= 48) {
                    if (match$14 >= 58) {
                      match$13 = /* None */0;
                    } else {
                      exit$2 = 1;
                    }
                  } else if (match$14 !== 45) {
                    match$13 = /* None */0;
                  } else {
                    exit$2 = 1;
                  }
                  if (exit$2 === 1) {
                    var match$15 = parse_integer(str_ind_1$1, end_ind$2);
                    var str_ind_3$1 = parse_spaces(match$15[0], end_ind$2);
                    if (Caml_string.get(str, str_ind_3$1) !== /* ">" */62) {
                      throw Caml_builtin_exceptions.not_found;
                    }
                    var s$2 = $$String.sub(str, str_ind$2 - 2 | 0, (str_ind_3$1 - str_ind$2 | 0) + 3 | 0);
                    match$13 = /* Some */[/* tuple */[
                        str_ind_3$1 + 1 | 0,
                        /* Magic_size */Block.__(1, [
                            s$2,
                            match$15[1]
                          ])
                      ]];
                  }
                  
                }
                catch (raw_exn$1){
                  var exn$1 = Js_exn.internalToOCamlException(raw_exn$1);
                  if (exn$1 === Caml_builtin_exceptions.not_found) {
                    match$13 = /* None */0;
                  } else if (exn$1[0] === Caml_builtin_exceptions.failure) {
                    match$13 = /* None */0;
                  } else {
                    throw exn$1;
                  }
                }
                if (match$13) {
                  var match$16 = match$13[0];
                  var next_ind$1 = match$16[0];
                  var match$17 = parse_literal(next_ind$1, next_ind$1, end_ind$2);
                  return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                              match$16[1],
                              match$17[0]
                            ])];
                } else {
                  var match$18 = parse_literal(str_ind$2, str_ind$2, end_ind$2);
                  return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                              /* Scan_indic */Block.__(2, [/* "<" */60]),
                              match$18[0]
                            ])];
                }
            case 1 : 
            case 2 : 
            case 3 : 
            case 4 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 11 : 
            case 13 : 
            case 15 : 
            case 16 : 
            case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
            case 26 : 
            case 29 : 
            case 30 : 
                exit = 1;
                break;
            case 31 : 
                var beg_ind$6 = str_ind + 1 | 0;
                var match$19 = parse_literal(beg_ind$6, beg_ind$6, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* FFlush */2,
                            match$19[0]
                          ])];
            case 32 : 
                var beg_ind$7 = str_ind + 1 | 0;
                var match$20 = parse_literal(beg_ind$7, beg_ind$7, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Escaped_at */5,
                            match$20[0]
                          ])];
            
          }
        } else {
          exit = 1;
        }
      } else {
        var beg_ind$8 = str_ind + 1 | 0;
        var match$21 = parse_literal(beg_ind$8, beg_ind$8, end_ind);
        return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                    /* Force_newline */3,
                    match$21[0]
                  ])];
      }
      if (exit === 1) {
        var beg_ind$9 = str_ind + 1 | 0;
        var match$22 = parse_literal(beg_ind$9, beg_ind$9, end_ind);
        return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                    /* Scan_indic */Block.__(2, [c]),
                    match$22[0]
                  ])];
      }
      
    }
  };
  var add_literal = function (lit_start, str_ind, fmt) {
    var size = str_ind - lit_start | 0;
    if (size !== 0) {
      if (size !== 1) {
        return /* Fmt_EBB */[/* String_literal */Block.__(11, [
                    $$String.sub(str, lit_start, size),
                    fmt
                  ])];
      } else {
        return /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                    Caml_string.get(str, lit_start),
                    fmt
                  ])];
      }
    } else {
      return /* Fmt_EBB */[fmt];
    }
  };
  var parse_spaces = function (_str_ind, end_ind) {
    while(true) {
      var str_ind = _str_ind;
      if (str_ind === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      if (Caml_string.get(str, str_ind) === /* " " */32) {
        _str_ind = str_ind + 1 | 0;
        continue ;
        
      } else {
        return str_ind;
      }
    };
  };
  var parse_integer = function (str_ind, end_ind) {
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var match = Caml_string.get(str, str_ind);
    if (match >= 48) {
      if (match >= 58) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                2624,
                11
              ]
            ];
      } else {
        return parse_positive(str_ind, end_ind, 0);
      }
    } else if (match !== 45) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "camlinternalFormat.ml",
              2624,
              11
            ]
          ];
    } else {
      if ((str_ind + 1 | 0) === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      var c = Caml_string.get(str, str_ind + 1 | 0);
      if (c > 57 || c < 48) {
        return expected_character(str_ind + 1 | 0, "digit", c);
      } else {
        var match$1 = parse_positive(str_ind + 1 | 0, end_ind, 0);
        return /* tuple */[
                match$1[0],
                -match$1[1] | 0
              ];
      }
    }
  };
  var compute_float_conv = function (pct_ind, str_ind, _plus, _space, symb) {
    while(true) {
      var space = _space;
      var plus = _plus;
      if (plus !== 0) {
        if (space !== 0) {
          if (legacy_behavior$1) {
            _space = /* false */0;
            continue ;
            
          } else {
            return incompatible_flag(pct_ind, str_ind, /* " " */32, "'+'");
          }
        } else {
          var exit = 0;
          if (symb >= 72) {
            var switcher = symb - 101 | 0;
            if (switcher > 2 || switcher < 0) {
              exit = 1;
            } else {
              switch (switcher) {
                case 0 : 
                    return /* Float_pe */4;
                case 1 : 
                    return /* Float_pf */1;
                case 2 : 
                    return /* Float_pg */10;
                
              }
            }
          } else if (symb >= 69) {
            switch (symb - 69 | 0) {
              case 0 : 
                  return /* Float_pE */7;
              case 1 : 
                  exit = 1;
                  break;
              case 2 : 
                  return /* Float_pG */13;
              
            }
          } else {
            exit = 1;
          }
          if (exit === 1) {
            if (legacy_behavior$1) {
              _plus = /* false */0;
              continue ;
              
            } else {
              return incompatible_flag(pct_ind, str_ind, symb, "'+'");
            }
          }
          
        }
      } else if (space !== 0) {
        var exit$1 = 0;
        if (symb >= 72) {
          var switcher$1 = symb - 101 | 0;
          if (switcher$1 > 2 || switcher$1 < 0) {
            exit$1 = 1;
          } else {
            switch (switcher$1) {
              case 0 : 
                  return /* Float_se */5;
              case 1 : 
                  return /* Float_sf */2;
              case 2 : 
                  return /* Float_sg */11;
              
            }
          }
        } else if (symb >= 69) {
          switch (symb - 69 | 0) {
            case 0 : 
                return /* Float_sE */8;
            case 1 : 
                exit$1 = 1;
                break;
            case 2 : 
                return /* Float_sG */14;
            
          }
        } else {
          exit$1 = 1;
        }
        if (exit$1 === 1) {
          if (legacy_behavior$1) {
            _space = /* false */0;
            continue ;
            
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "' '");
          }
        }
        
      } else if (symb >= 72) {
        var switcher$2 = symb - 101 | 0;
        if (switcher$2 > 2 || switcher$2 < 0) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "camlinternalFormat.ml",
                  2747,
                  25
                ]
              ];
        } else {
          switch (switcher$2) {
            case 0 : 
                return /* Float_e */3;
            case 1 : 
                return /* Float_f */0;
            case 2 : 
                return /* Float_g */9;
            
          }
        }
      } else if (symb >= 69) {
        switch (symb - 69 | 0) {
          case 0 : 
              return /* Float_E */6;
          case 1 : 
              return /* Float_F */15;
          case 2 : 
              return /* Float_G */12;
          
        }
      } else {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                2747,
                25
              ]
            ];
      }
    };
  };
  var search_subformat_end = function (_str_ind, end_ind, c) {
    while(true) {
      var str_ind = _str_ind;
      if (str_ind === end_ind) {
        Curry._3(failwith_message(/* Format */[
                  /* String_literal */Block.__(11, [
                      "invalid format ",
                      /* Caml_string */Block.__(3, [
                          /* No_padding */0,
                          /* String_literal */Block.__(11, [
                              ": unclosed sub-format, expected \"",
                              /* Char_literal */Block.__(12, [
                                  /* "%" */37,
                                  /* Char */Block.__(0, [/* String_literal */Block.__(11, [
                                          "\" at character number ",
                                          /* Int */Block.__(4, [
                                              /* Int_d */0,
                                              /* No_padding */0,
                                              /* No_precision */0,
                                              /* End_of_format */0
                                            ])
                                        ])])
                                ])
                            ])
                        ])
                    ]),
                  "invalid format %S: unclosed sub-format, expected \"%%%c\" at character number %d"
                ]), str, c, end_ind);
      }
      var match = Caml_string.get(str, str_ind);
      if (match !== 37) {
        _str_ind = str_ind + 1 | 0;
        continue ;
        
      } else {
        if ((str_ind + 1 | 0) === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        if (Caml_string.get(str, str_ind + 1 | 0) === c) {
          return str_ind;
        } else {
          var match$1 = Caml_string.get(str, str_ind + 1 | 0);
          var exit = 0;
          if (match$1 >= 95) {
            if (match$1 >= 123) {
              if (match$1 >= 126) {
                exit = 1;
              } else {
                switch (match$1 - 123 | 0) {
                  case 0 : 
                      var sub_end = search_subformat_end(str_ind + 2 | 0, end_ind, /* "}" */125);
                      _str_ind = sub_end + 2 | 0;
                      continue ;
                      case 1 : 
                      exit = 1;
                      break;
                  case 2 : 
                      return expected_character(str_ind + 1 | 0, "character ')'", /* "}" */125);
                  
                }
              }
            } else if (match$1 >= 96) {
              exit = 1;
            } else {
              if ((str_ind + 2 | 0) === end_ind) {
                invalid_format_message(end_ind, "unexpected end of format");
              }
              var match$2 = Caml_string.get(str, str_ind + 2 | 0);
              if (match$2 !== 40) {
                if (match$2 !== 123) {
                  _str_ind = str_ind + 3 | 0;
                  continue ;
                  
                } else {
                  var sub_end$1 = search_subformat_end(str_ind + 3 | 0, end_ind, /* "}" */125);
                  _str_ind = sub_end$1 + 2 | 0;
                  continue ;
                  
                }
              } else {
                var sub_end$2 = search_subformat_end(str_ind + 3 | 0, end_ind, /* ")" */41);
                _str_ind = sub_end$2 + 2 | 0;
                continue ;
                
              }
            }
          } else if (match$1 !== 40) {
            if (match$1 !== 41) {
              exit = 1;
            } else {
              return expected_character(str_ind + 1 | 0, "character '}'", /* ")" */41);
            }
          } else {
            var sub_end$3 = search_subformat_end(str_ind + 2 | 0, end_ind, /* ")" */41);
            _str_ind = sub_end$3 + 2 | 0;
            continue ;
            
          }
          if (exit === 1) {
            _str_ind = str_ind + 2 | 0;
            continue ;
            
          }
          
        }
      }
    };
  };
  var parse_conversion = function (pct_ind, str_ind, end_ind, plus, sharp, space, ign, pad, prec, padprec, symb) {
    var plus_used = /* false */0;
    var sharp_used = /* false */0;
    var space_used = /* false */0;
    var ign_used = [/* false */0];
    var pad_used = /* false */0;
    var prec_used = [/* false */0];
    var check_no_0 = function (symb, pad) {
      if (typeof pad === "number") {
        return pad;
      } else if (pad.tag) {
        if (pad[0] >= 2) {
          if (legacy_behavior$1) {
            return /* Arg_padding */Block.__(1, [/* Right */1]);
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "0");
          }
        } else {
          return pad;
        }
      } else if (pad[0] >= 2) {
        if (legacy_behavior$1) {
          return /* Lit_padding */Block.__(0, [
                    /* Right */1,
                    pad[1]
                  ]);
        } else {
          return incompatible_flag(pct_ind, str_ind, symb, "0");
        }
      } else {
        return pad;
      }
    };
    var opt_of_pad = function (c, pad) {
      if (typeof pad === "number") {
        return /* None */0;
      } else if (pad.tag) {
        return incompatible_flag(pct_ind, str_ind, c, "'*'");
      } else {
        switch (pad[0]) {
          case 0 : 
              if (legacy_behavior$1) {
                return /* Some */[pad[1]];
              } else {
                return incompatible_flag(pct_ind, str_ind, c, "'-'");
              }
          case 1 : 
              return /* Some */[pad[1]];
          case 2 : 
              if (legacy_behavior$1) {
                return /* Some */[pad[1]];
              } else {
                return incompatible_flag(pct_ind, str_ind, c, "'0'");
              }
          
        }
      }
    };
    var get_prec_opt = function () {
      prec_used[0] = /* true */1;
      if (typeof prec === "number") {
        if (prec !== 0) {
          return incompatible_flag(pct_ind, str_ind, /* "_" */95, "'*'");
        } else {
          return /* None */0;
        }
      } else {
        return /* Some */[prec[0]];
      }
    };
    var fmt_result;
    var exit = 0;
    var exit$1 = 0;
    var exit$2 = 0;
    if (symb >= 124) {
      exit$1 = 6;
    } else {
      switch (symb) {
        case 33 : 
            var match = parse_literal(str_ind, str_ind, end_ind);
            fmt_result = /* Fmt_EBB */[/* Flush */Block.__(10, [match[0]])];
            break;
        case 40 : 
            var sub_end = search_subformat_end(str_ind, end_ind, /* ")" */41);
            var beg_ind = sub_end + 2 | 0;
            var match$1 = parse_literal(beg_ind, beg_ind, end_ind);
            var fmt_rest = match$1[0];
            var match$2 = parse_literal(str_ind, str_ind, sub_end);
            var sub_fmtty = fmtty_of_fmt(match$2[0]);
            if (ign_used[0] = /* true */1, ign) {
              pad_used = /* true */1;
              var ignored_000 = opt_of_pad(/* "_" */95, pad);
              var ignored = /* Ignored_format_subst */Block.__(8, [
                  ignored_000,
                  sub_fmtty
                ]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored,
                    fmt_rest
                  ])];
            } else {
              pad_used = /* true */1;
              fmt_result = /* Fmt_EBB */[/* Format_subst */Block.__(14, [
                    opt_of_pad(/* "(" */40, pad),
                    sub_fmtty,
                    fmt_rest
                  ])];
            }
            break;
        case 44 : 
            fmt_result = parse_literal(str_ind, str_ind, end_ind);
            break;
        case 37 : 
        case 64 : 
            exit$1 = 4;
            break;
        case 67 : 
            var match$3 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$1 = match$3[0];
            fmt_result = (ign_used[0] = /* true */1, ign) ? /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    /* Ignored_caml_char */1,
                    fmt_rest$1
                  ])] : /* Fmt_EBB */[/* Caml_char */Block.__(1, [fmt_rest$1])];
            break;
        case 78 : 
            var match$4 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$2 = match$4[0];
            if (ign_used[0] = /* true */1, ign) {
              var ignored$1 = /* Ignored_scan_get_counter */Block.__(10, [/* Token_counter */2]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$1,
                    fmt_rest$2
                  ])];
            } else {
              fmt_result = /* Fmt_EBB */[/* Scan_get_counter */Block.__(21, [
                    /* Token_counter */2,
                    fmt_rest$2
                  ])];
            }
            break;
        case 83 : 
            pad_used = /* true */1;
            var pad$1 = check_no_0(symb, padprec);
            var match$5 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$3 = match$5[0];
            if (ign_used[0] = /* true */1, ign) {
              pad_used = /* true */1;
              var ignored$2 = /* Ignored_caml_string */Block.__(1, [opt_of_pad(/* "_" */95, padprec)]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$2,
                    fmt_rest$3
                  ])];
            } else {
              var match$6 = make_padding_fmt_ebb(pad$1, fmt_rest$3);
              fmt_result = /* Fmt_EBB */[/* Caml_string */Block.__(3, [
                    match$6[0],
                    match$6[1]
                  ])];
            }
            break;
        case 91 : 
            var match$7 = parse_char_set(str_ind, end_ind);
            var char_set = match$7[1];
            var next_ind = match$7[0];
            var match$8 = parse_literal(next_ind, next_ind, end_ind);
            var fmt_rest$4 = match$8[0];
            if (ign_used[0] = /* true */1, ign) {
              pad_used = /* true */1;
              var ignored_000$1 = opt_of_pad(/* "_" */95, pad);
              var ignored$3 = /* Ignored_scan_char_set */Block.__(9, [
                  ignored_000$1,
                  char_set
                ]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$3,
                    fmt_rest$4
                  ])];
            } else {
              pad_used = /* true */1;
              fmt_result = /* Fmt_EBB */[/* Scan_char_set */Block.__(20, [
                    opt_of_pad(/* "[" */91, pad),
                    char_set,
                    fmt_rest$4
                  ])];
            }
            break;
        case 32 : 
        case 35 : 
        case 43 : 
        case 45 : 
        case 95 : 
            exit$1 = 5;
            break;
        case 97 : 
            var match$9 = parse_literal(str_ind, str_ind, end_ind);
            fmt_result = /* Fmt_EBB */[/* Alpha */Block.__(15, [match$9[0]])];
            break;
        case 66 : 
        case 98 : 
            exit$1 = 3;
            break;
        case 99 : 
            var char_format = function (fmt_rest) {
              if (ign_used[0] = /* true */1, ign) {
                return /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                            /* Ignored_char */0,
                            fmt_rest
                          ])];
              } else {
                return /* Fmt_EBB */[/* Char */Block.__(0, [fmt_rest])];
              }
            };
            var scan_format = function (fmt_rest) {
              if (ign_used[0] = /* true */1, ign) {
                return /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                            /* Ignored_scan_next_char */4,
                            fmt_rest
                          ])];
              } else {
                return /* Fmt_EBB */[/* Scan_next_char */Block.__(22, [fmt_rest])];
              }
            };
            var match$10 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$5 = match$10[0];
            pad_used = /* true */1;
            var match$11 = opt_of_pad(/* "c" */99, pad);
            fmt_result = match$11 ? (
                match$11[0] !== 0 ? (
                    legacy_behavior$1 ? char_format(fmt_rest$5) : invalid_format_message(str_ind, "non-zero widths are unsupported for %c conversions")
                  ) : scan_format(fmt_rest$5)
              ) : char_format(fmt_rest$5);
            break;
        case 69 : 
        case 70 : 
        case 71 : 
        case 101 : 
        case 102 : 
        case 103 : 
            exit$1 = 2;
            break;
        case 76 : 
        case 108 : 
        case 110 : 
            exit$2 = 8;
            break;
        case 114 : 
            var match$12 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$6 = match$12[0];
            fmt_result = (ign_used[0] = /* true */1, ign) ? /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    /* Ignored_reader */3,
                    fmt_rest$6
                  ])] : /* Fmt_EBB */[/* Reader */Block.__(19, [fmt_rest$6])];
            break;
        case 115 : 
            pad_used = /* true */1;
            var pad$2 = check_no_0(symb, padprec);
            var match$13 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$7 = match$13[0];
            if (ign_used[0] = /* true */1, ign) {
              pad_used = /* true */1;
              var ignored$4 = /* Ignored_string */Block.__(0, [opt_of_pad(/* "_" */95, padprec)]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$4,
                    fmt_rest$7
                  ])];
            } else {
              var match$14 = make_padding_fmt_ebb(pad$2, fmt_rest$7);
              fmt_result = /* Fmt_EBB */[/* String */Block.__(2, [
                    match$14[0],
                    match$14[1]
                  ])];
            }
            break;
        case 116 : 
            var match$15 = parse_literal(str_ind, str_ind, end_ind);
            fmt_result = /* Fmt_EBB */[/* Theta */Block.__(16, [match$15[0]])];
            break;
        case 88 : 
        case 100 : 
        case 105 : 
        case 111 : 
        case 117 : 
        case 120 : 
            exit$2 = 7;
            break;
        case 0 : 
        case 1 : 
        case 2 : 
        case 3 : 
        case 4 : 
        case 5 : 
        case 6 : 
        case 7 : 
        case 8 : 
        case 9 : 
        case 10 : 
        case 11 : 
        case 12 : 
        case 13 : 
        case 14 : 
        case 15 : 
        case 16 : 
        case 17 : 
        case 18 : 
        case 19 : 
        case 20 : 
        case 21 : 
        case 22 : 
        case 23 : 
        case 24 : 
        case 25 : 
        case 26 : 
        case 27 : 
        case 28 : 
        case 29 : 
        case 30 : 
        case 31 : 
        case 34 : 
        case 36 : 
        case 38 : 
        case 39 : 
        case 41 : 
        case 42 : 
        case 46 : 
        case 47 : 
        case 48 : 
        case 49 : 
        case 50 : 
        case 51 : 
        case 52 : 
        case 53 : 
        case 54 : 
        case 55 : 
        case 56 : 
        case 57 : 
        case 58 : 
        case 59 : 
        case 60 : 
        case 61 : 
        case 62 : 
        case 63 : 
        case 65 : 
        case 68 : 
        case 72 : 
        case 73 : 
        case 74 : 
        case 75 : 
        case 77 : 
        case 79 : 
        case 80 : 
        case 81 : 
        case 82 : 
        case 84 : 
        case 85 : 
        case 86 : 
        case 87 : 
        case 89 : 
        case 90 : 
        case 92 : 
        case 93 : 
        case 94 : 
        case 96 : 
        case 104 : 
        case 106 : 
        case 107 : 
        case 109 : 
        case 112 : 
        case 113 : 
        case 118 : 
        case 119 : 
        case 121 : 
        case 122 : 
            exit$1 = 6;
            break;
        case 123 : 
            var sub_end$1 = search_subformat_end(str_ind, end_ind, /* "}" */125);
            var match$16 = parse_literal(str_ind, str_ind, sub_end$1);
            var beg_ind$1 = sub_end$1 + 2 | 0;
            var match$17 = parse_literal(beg_ind$1, beg_ind$1, end_ind);
            var fmt_rest$8 = match$17[0];
            var sub_fmtty$1 = fmtty_of_fmt(match$16[0]);
            if (ign_used[0] = /* true */1, ign) {
              pad_used = /* true */1;
              var ignored_000$2 = opt_of_pad(/* "_" */95, pad);
              var ignored$5 = /* Ignored_format_arg */Block.__(7, [
                  ignored_000$2,
                  sub_fmtty$1
                ]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$5,
                    fmt_rest$8
                  ])];
            } else {
              pad_used = /* true */1;
              fmt_result = /* Fmt_EBB */[/* Format_arg */Block.__(13, [
                    opt_of_pad(/* "{" */123, pad),
                    sub_fmtty$1,
                    fmt_rest$8
                  ])];
            }
            break;
        
      }
    }
    switch (exit$2) {
      case 7 : 
          plus_used = /* true */1;
          sharp_used = /* true */1;
          space_used = /* true */1;
          var iconv = compute_int_conv(pct_ind, str_ind, plus, sharp, space, symb);
          var match$18 = parse_literal(str_ind, str_ind, end_ind);
          var fmt_rest$9 = match$18[0];
          if (ign_used[0] = /* true */1, ign) {
            pad_used = /* true */1;
            var ignored_001 = opt_of_pad(/* "_" */95, pad);
            var ignored$6 = /* Ignored_int */Block.__(2, [
                iconv,
                ignored_001
              ]);
            fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                  ignored$6,
                  fmt_rest$9
                ])];
          } else {
            pad_used = /* true */1;
            prec_used[0] = /* true */1;
            var pad$3;
            var exit$3 = 0;
            if (typeof prec === "number" && prec === 0) {
              pad$3 = pad;
            } else {
              exit$3 = 9;
            }
            if (exit$3 === 9) {
              pad$3 = typeof pad === "number" ? /* No_padding */0 : (
                  pad.tag ? (
                      pad[0] >= 2 ? (
                          legacy_behavior$1 ? /* Arg_padding */Block.__(1, [/* Right */1]) : incompatible_flag(pct_ind, str_ind, /* "0" */48, "precision")
                        ) : pad
                    ) : (
                      pad[0] >= 2 ? (
                          legacy_behavior$1 ? /* Lit_padding */Block.__(0, [
                                /* Right */1,
                                pad[1]
                              ]) : incompatible_flag(pct_ind, str_ind, /* "0" */48, "precision")
                        ) : pad
                    )
                );
            }
            var match$19 = make_padprec_fmt_ebb(pad$3, (prec_used[0] = /* true */1, prec), fmt_rest$9);
            fmt_result = /* Fmt_EBB */[/* Int */Block.__(4, [
                  iconv,
                  match$19[0],
                  match$19[1],
                  match$19[2]
                ])];
          }
          break;
      case 8 : 
          if (str_ind === end_ind || !is_int_base(Caml_string.get(str, str_ind))) {
            var match$20 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$10 = match$20[0];
            var counter = counter_of_char(symb);
            if (ign_used[0] = /* true */1, ign) {
              var ignored$7 = /* Ignored_scan_get_counter */Block.__(10, [counter]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$7,
                    fmt_rest$10
                  ])];
            } else {
              fmt_result = /* Fmt_EBB */[/* Scan_get_counter */Block.__(21, [
                    counter,
                    fmt_rest$10
                  ])];
            }
          } else {
            exit$1 = 6;
          }
          break;
      
    }
    switch (exit$1) {
      case 2 : 
          plus_used = /* true */1;
          space_used = /* true */1;
          var fconv = compute_float_conv(pct_ind, str_ind, plus, space, symb);
          var match$21 = parse_literal(str_ind, str_ind, end_ind);
          var fmt_rest$11 = match$21[0];
          if (ign_used[0] = /* true */1, ign) {
            pad_used = /* true */1;
            var ignored_000$3 = opt_of_pad(/* "_" */95, pad);
            var ignored_001$1 = get_prec_opt(/* () */0);
            var ignored$8 = /* Ignored_float */Block.__(6, [
                ignored_000$3,
                ignored_001$1
              ]);
            fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                  ignored$8,
                  fmt_rest$11
                ])];
          } else {
            pad_used = /* true */1;
            var match$22 = make_padprec_fmt_ebb(pad, (prec_used[0] = /* true */1, prec), fmt_rest$11);
            fmt_result = /* Fmt_EBB */[/* Float */Block.__(8, [
                  fconv,
                  match$22[0],
                  match$22[1],
                  match$22[2]
                ])];
          }
          break;
      case 3 : 
          var match$23 = parse_literal(str_ind, str_ind, end_ind);
          var fmt_rest$12 = match$23[0];
          fmt_result = (ign_used[0] = /* true */1, ign) ? /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                  /* Ignored_bool */2,
                  fmt_rest$12
                ])] : /* Fmt_EBB */[/* Bool */Block.__(9, [fmt_rest$12])];
          break;
      case 4 : 
          var match$24 = parse_literal(str_ind, str_ind, end_ind);
          fmt_result = /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                symb,
                match$24[0]
              ])];
          break;
      case 5 : 
          fmt_result = Curry._3(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", flag ",
                                        /* Caml_char */Block.__(1, [/* String_literal */Block.__(11, [
                                                " is only allowed after the '",
                                                /* Char_literal */Block.__(12, [
                                                    /* "%" */37,
                                                    /* String_literal */Block.__(11, [
                                                        "', before padding and precision",
                                                        /* End_of_format */0
                                                      ])
                                                  ])
                                              ])])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, flag %C is only allowed after the '%%', before padding and precision"
                  ]), str, pct_ind, symb);
          break;
      case 6 : 
          if (symb >= 108) {
            if (symb >= 111) {
              exit = 1;
            } else {
              switch (symb - 108 | 0) {
                case 0 : 
                    plus_used = /* true */1;
                    sharp_used = /* true */1;
                    space_used = /* true */1;
                    var iconv$1 = compute_int_conv(pct_ind, str_ind + 1 | 0, plus, sharp, space, Caml_string.get(str, str_ind));
                    var beg_ind$2 = str_ind + 1 | 0;
                    var match$25 = parse_literal(beg_ind$2, beg_ind$2, end_ind);
                    var fmt_rest$13 = match$25[0];
                    if (ign_used[0] = /* true */1, ign) {
                      pad_used = /* true */1;
                      var ignored_001$2 = opt_of_pad(/* "_" */95, pad);
                      var ignored$9 = /* Ignored_int32 */Block.__(3, [
                          iconv$1,
                          ignored_001$2
                        ]);
                      fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                            ignored$9,
                            fmt_rest$13
                          ])];
                    } else {
                      pad_used = /* true */1;
                      var match$26 = make_padprec_fmt_ebb(pad, (prec_used[0] = /* true */1, prec), fmt_rest$13);
                      fmt_result = /* Fmt_EBB */[/* Int32 */Block.__(5, [
                            iconv$1,
                            match$26[0],
                            match$26[1],
                            match$26[2]
                          ])];
                    }
                    break;
                case 1 : 
                    exit = 1;
                    break;
                case 2 : 
                    plus_used = /* true */1;
                    sharp_used = /* true */1;
                    space_used = /* true */1;
                    var iconv$2 = compute_int_conv(pct_ind, str_ind + 1 | 0, plus, sharp, space, Caml_string.get(str, str_ind));
                    var beg_ind$3 = str_ind + 1 | 0;
                    var match$27 = parse_literal(beg_ind$3, beg_ind$3, end_ind);
                    var fmt_rest$14 = match$27[0];
                    if (ign_used[0] = /* true */1, ign) {
                      pad_used = /* true */1;
                      var ignored_001$3 = opt_of_pad(/* "_" */95, pad);
                      var ignored$10 = /* Ignored_nativeint */Block.__(4, [
                          iconv$2,
                          ignored_001$3
                        ]);
                      fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                            ignored$10,
                            fmt_rest$14
                          ])];
                    } else {
                      pad_used = /* true */1;
                      var match$28 = make_padprec_fmt_ebb(pad, (prec_used[0] = /* true */1, prec), fmt_rest$14);
                      fmt_result = /* Fmt_EBB */[/* Nativeint */Block.__(6, [
                            iconv$2,
                            match$28[0],
                            match$28[1],
                            match$28[2]
                          ])];
                    }
                    break;
                
              }
            }
          } else if (symb !== 76) {
            exit = 1;
          } else {
            plus_used = /* true */1;
            sharp_used = /* true */1;
            space_used = /* true */1;
            var iconv$3 = compute_int_conv(pct_ind, str_ind + 1 | 0, plus, sharp, space, Caml_string.get(str, str_ind));
            var beg_ind$4 = str_ind + 1 | 0;
            var match$29 = parse_literal(beg_ind$4, beg_ind$4, end_ind);
            var fmt_rest$15 = match$29[0];
            if (ign_used[0] = /* true */1, ign) {
              pad_used = /* true */1;
              var ignored_001$4 = opt_of_pad(/* "_" */95, pad);
              var ignored$11 = /* Ignored_int64 */Block.__(5, [
                  iconv$3,
                  ignored_001$4
                ]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$11,
                    fmt_rest$15
                  ])];
            } else {
              pad_used = /* true */1;
              var match$30 = make_padprec_fmt_ebb(pad, (prec_used[0] = /* true */1, prec), fmt_rest$15);
              fmt_result = /* Fmt_EBB */[/* Int64 */Block.__(7, [
                    iconv$3,
                    match$30[0],
                    match$30[1],
                    match$30[2]
                  ])];
            }
          }
          break;
      
    }
    if (exit === 1) {
      fmt_result = Curry._3(failwith_message(/* Format */[
                /* String_literal */Block.__(11, [
                    "invalid format ",
                    /* Caml_string */Block.__(3, [
                        /* No_padding */0,
                        /* String_literal */Block.__(11, [
                            ": at character number ",
                            /* Int */Block.__(4, [
                                /* Int_d */0,
                                /* No_padding */0,
                                /* No_precision */0,
                                /* String_literal */Block.__(11, [
                                    ", invalid conversion \"",
                                    /* Char_literal */Block.__(12, [
                                        /* "%" */37,
                                        /* Char */Block.__(0, [/* Char_literal */Block.__(12, [
                                                /* "\"" */34,
                                                /* End_of_format */0
                                              ])])
                                      ])
                                  ])
                              ])
                          ])
                      ])
                  ]),
                "invalid format %S: at character number %d, invalid conversion \"%%%c\""
              ]), str, str_ind - 1 | 0, symb);
    }
    if (!legacy_behavior$1) {
      if (!plus_used && plus) {
        incompatible_flag(pct_ind, str_ind, symb, "'+'");
      }
      if (!sharp_used && sharp) {
        incompatible_flag(pct_ind, str_ind, symb, "'#'");
      }
      if (!space_used && space) {
        incompatible_flag(pct_ind, str_ind, symb, "' '");
      }
      if (!pad_used && Caml_obj.caml_notequal(/* Padding_EBB */[pad], /* Padding_EBB */[/* No_padding */0])) {
        incompatible_flag(pct_ind, str_ind, symb, "`padding'");
      }
      if (!prec_used[0] && Caml_obj.caml_notequal(/* Precision_EBB */[prec], /* Precision_EBB */[/* No_precision */0])) {
        incompatible_flag(pct_ind, str_ind, ign ? /* "_" */95 : symb, "`precision'");
      }
      if (ign && plus) {
        incompatible_flag(pct_ind, str_ind, /* "_" */95, "'+'");
      }
      
    }
    if (!ign_used[0] && ign) {
      var exit$4 = 0;
      if (symb >= 38) {
        if (symb !== 44) {
          if (symb !== 64) {
            exit$4 = 1;
          } else if (!legacy_behavior$1) {
            exit$4 = 1;
          }
          
        } else if (!legacy_behavior$1) {
          exit$4 = 1;
        }
        
      } else if (symb !== 33) {
        if (symb >= 37) {
          if (!legacy_behavior$1) {
            exit$4 = 1;
          }
          
        } else {
          exit$4 = 1;
        }
      } else if (!legacy_behavior$1) {
        exit$4 = 1;
      }
      if (exit$4 === 1) {
        incompatible_flag(pct_ind, str_ind, symb, "'_'");
      }
      
    }
    return fmt_result;
  };
  var parse_flags = function (pct_ind, str_ind, end_ind, ign) {
    var zero = [/* false */0];
    var minus = [/* false */0];
    var plus = [/* false */0];
    var space = [/* false */0];
    var sharp = [/* false */0];
    var set_flag = function (str_ind, flag) {
      if (flag[0] && !legacy_behavior$1) {
        Curry._3(failwith_message(/* Format */[
                  /* String_literal */Block.__(11, [
                      "invalid format ",
                      /* Caml_string */Block.__(3, [
                          /* No_padding */0,
                          /* String_literal */Block.__(11, [
                              ": at character number ",
                              /* Int */Block.__(4, [
                                  /* Int_d */0,
                                  /* No_padding */0,
                                  /* No_precision */0,
                                  /* String_literal */Block.__(11, [
                                      ", duplicate flag ",
                                      /* Caml_char */Block.__(1, [/* End_of_format */0])
                                    ])
                                ])
                            ])
                        ])
                    ]),
                  "invalid format %S: at character number %d, duplicate flag %C"
                ]), str, str_ind, Caml_string.get(str, str_ind));
      }
      flag[0] = /* true */1;
      return /* () */0;
    };
    var _str_ind = str_ind;
    while(true) {
      var str_ind$1 = _str_ind;
      if (str_ind$1 === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      var match = Caml_string.get(str, str_ind$1);
      var exit = 0;
      var switcher = match - 32 | 0;
      if (switcher > 16 || switcher < 0) {
        exit = 1;
      } else {
        switch (switcher) {
          case 0 : 
              set_flag(str_ind$1, space);
              _str_ind = str_ind$1 + 1 | 0;
              continue ;
              case 3 : 
              set_flag(str_ind$1, sharp);
              _str_ind = str_ind$1 + 1 | 0;
              continue ;
              case 11 : 
              set_flag(str_ind$1, plus);
              _str_ind = str_ind$1 + 1 | 0;
              continue ;
              case 13 : 
              set_flag(str_ind$1, minus);
              _str_ind = str_ind$1 + 1 | 0;
              continue ;
              case 1 : 
          case 2 : 
          case 4 : 
          case 5 : 
          case 6 : 
          case 7 : 
          case 8 : 
          case 9 : 
          case 10 : 
          case 12 : 
          case 14 : 
          case 15 : 
              exit = 1;
              break;
          case 16 : 
              set_flag(str_ind$1, zero);
              _str_ind = str_ind$1 + 1 | 0;
              continue ;
              
        }
      }
      if (exit === 1) {
        var pct_ind$1 = pct_ind;
        var str_ind$2 = str_ind$1;
        var end_ind$1 = end_ind;
        var zero$1 = zero[0];
        var minus$1 = minus[0];
        var plus$1 = plus[0];
        var sharp$1 = sharp[0];
        var space$1 = space[0];
        var ign$1 = ign;
        if (str_ind$2 === end_ind$1) {
          invalid_format_message(end_ind$1, "unexpected end of format");
        }
        var padty = zero$1 !== 0 ? (
            minus$1 !== 0 ? (
                legacy_behavior$1 ? /* Left */0 : incompatible_flag(pct_ind$1, str_ind$2, /* "-" */45, "0")
              ) : /* Zeros */2
          ) : (
            minus$1 !== 0 ? /* Left */0 : /* Right */1
          );
        var match$1 = Caml_string.get(str, str_ind$2);
        var exit$1 = 0;
        if (match$1 >= 48) {
          if (match$1 >= 58) {
            exit$1 = 1;
          } else {
            var match$2 = parse_positive(str_ind$2, end_ind$1, 0);
            return parse_after_padding(pct_ind$1, match$2[0], end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* Lit_padding */Block.__(0, [
                          padty,
                          match$2[1]
                        ]));
          }
        } else if (match$1 !== 42) {
          exit$1 = 1;
        } else {
          return parse_after_padding(pct_ind$1, str_ind$2 + 1 | 0, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* Arg_padding */Block.__(1, [padty]));
        }
        if (exit$1 === 1) {
          switch (padty) {
            case 0 : 
                if (!legacy_behavior$1) {
                  invalid_format_without(str_ind$2 - 1 | 0, /* "-" */45, "padding");
                }
                return parse_after_padding(pct_ind$1, str_ind$2, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* No_padding */0);
            case 1 : 
                return parse_after_padding(pct_ind$1, str_ind$2, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* No_padding */0);
            case 2 : 
                return parse_after_padding(pct_ind$1, str_ind$2, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* Lit_padding */Block.__(0, [
                              /* Right */1,
                              0
                            ]));
            
          }
        }
        
      }
      
    };
  };
  var is_int_base = function (symb) {
    var switcher = symb - 88 | 0;
    if (switcher > 32 || switcher < 0) {
      return /* false */0;
    } else {
      switch (switcher) {
        case 1 : 
        case 2 : 
        case 3 : 
        case 4 : 
        case 5 : 
        case 6 : 
        case 7 : 
        case 8 : 
        case 9 : 
        case 10 : 
        case 11 : 
        case 13 : 
        case 14 : 
        case 15 : 
        case 16 : 
        case 18 : 
        case 19 : 
        case 20 : 
        case 21 : 
        case 22 : 
        case 24 : 
        case 25 : 
        case 26 : 
        case 27 : 
        case 28 : 
        case 30 : 
        case 31 : 
            return /* false */0;
        case 0 : 
        case 12 : 
        case 17 : 
        case 23 : 
        case 29 : 
        case 32 : 
            return /* true */1;
        
      }
    }
  };
  var counter_of_char = function (symb) {
    var exit = 0;
    if (symb >= 108) {
      if (symb >= 111) {
        exit = 1;
      } else {
        switch (symb - 108 | 0) {
          case 0 : 
              return /* Line_counter */0;
          case 1 : 
              exit = 1;
              break;
          case 2 : 
              return /* Char_counter */1;
          
        }
      }
    } else if (symb !== 76) {
      exit = 1;
    } else {
      return /* Token_counter */2;
    }
    if (exit === 1) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "camlinternalFormat.ml",
              2686,
              34
            ]
          ];
    }
    
  };
  var parse_char_set = function (str_ind, end_ind) {
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var char_set = Bytes.make(32, /* "\000" */0);
    var add_range = function (c, c$prime) {
      for(var i = c; i <= c$prime; ++i){
        add_in_char_set(char_set, Pervasives.char_of_int(i));
      }
      return /* () */0;
    };
    var fail_single_percent = function (str_ind) {
      return Curry._2(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "invalid format ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* String_literal */Block.__(11, [
                                  ": '",
                                  /* Char_literal */Block.__(12, [
                                      /* "%" */37,
                                      /* String_literal */Block.__(11, [
                                          "' alone is not accepted in character sets, use ",
                                          /* Char_literal */Block.__(12, [
                                              /* "%" */37,
                                              /* Char_literal */Block.__(12, [
                                                  /* "%" */37,
                                                  /* String_literal */Block.__(11, [
                                                      " instead at position ",
                                                      /* Int */Block.__(4, [
                                                          /* Int_d */0,
                                                          /* No_padding */0,
                                                          /* No_precision */0,
                                                          /* Char_literal */Block.__(12, [
                                                              /* "." */46,
                                                              /* End_of_format */0
                                                            ])
                                                        ])
                                                    ])
                                                ])
                                            ])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                      "invalid format %S: '%%' alone is not accepted in character sets, use %%%% instead at position %d."
                    ]), str, str_ind);
    };
    var parse_char_set_after_char = function (_str_ind, end_ind, _c) {
      while(true) {
        var c = _c;
        var str_ind = _str_ind;
        if (str_ind === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        var c$prime = Caml_string.get(str, str_ind);
        var exit = 0;
        var exit$1 = 0;
        if (c$prime >= 46) {
          if (c$prime !== 64) {
            if (c$prime !== 93) {
              exit = 1;
            } else {
              add_in_char_set(char_set, c);
              return str_ind + 1 | 0;
            }
          } else {
            exit$1 = 2;
          }
        } else if (c$prime !== 37) {
          if (c$prime >= 45) {
            var str_ind$1 = str_ind + 1 | 0;
            var end_ind$1 = end_ind;
            var c$1 = c;
            if (str_ind$1 === end_ind$1) {
              invalid_format_message(end_ind$1, "unexpected end of format");
            }
            var c$prime$1 = Caml_string.get(str, str_ind$1);
            if (c$prime$1 !== 37) {
              if (c$prime$1 !== 93) {
                add_range(c$1, c$prime$1);
                return parse_char_set_content(str_ind$1 + 1 | 0, end_ind$1);
              } else {
                add_in_char_set(char_set, c$1);
                add_in_char_set(char_set, /* "-" */45);
                return str_ind$1 + 1 | 0;
              }
            } else {
              if ((str_ind$1 + 1 | 0) === end_ind$1) {
                invalid_format_message(end_ind$1, "unexpected end of format");
              }
              var c$prime$2 = Caml_string.get(str, str_ind$1 + 1 | 0);
              var exit$2 = 0;
              if (c$prime$2 !== 37) {
                if (c$prime$2 !== 64) {
                  return fail_single_percent(str_ind$1);
                } else {
                  exit$2 = 1;
                }
              } else {
                exit$2 = 1;
              }
              if (exit$2 === 1) {
                add_range(c$1, c$prime$2);
                return parse_char_set_content(str_ind$1 + 2 | 0, end_ind$1);
              }
              
            }
          } else {
            exit = 1;
          }
        } else {
          exit$1 = 2;
        }
        if (exit$1 === 2) {
          if (c === /* "%" */37) {
            add_in_char_set(char_set, c$prime);
            return parse_char_set_content(str_ind + 1 | 0, end_ind);
          } else {
            exit = 1;
          }
        }
        if (exit === 1) {
          if (c === /* "%" */37) {
            fail_single_percent(str_ind);
          }
          add_in_char_set(char_set, c);
          _c = c$prime;
          _str_ind = str_ind + 1 | 0;
          continue ;
          
        }
        
      };
    };
    var parse_char_set_content = function (_str_ind, end_ind) {
      while(true) {
        var str_ind = _str_ind;
        if (str_ind === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        var c = Caml_string.get(str, str_ind);
        if (c !== 45) {
          if (c !== 93) {
            return parse_char_set_after_char(str_ind + 1 | 0, end_ind, c);
          } else {
            return str_ind + 1 | 0;
          }
        } else {
          add_in_char_set(char_set, /* "-" */45);
          _str_ind = str_ind + 1 | 0;
          continue ;
          
        }
      };
    };
    var parse_char_set_start = function (str_ind, end_ind) {
      if (str_ind === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      var c = Caml_string.get(str, str_ind);
      return parse_char_set_after_char(str_ind + 1 | 0, end_ind, c);
    };
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var match = Caml_string.get(str, str_ind);
    var match$1 = match !== 94 ? /* tuple */[
        str_ind,
        /* false */0
      ] : /* tuple */[
        str_ind + 1 | 0,
        /* true */1
      ];
    var next_ind = parse_char_set_start(match$1[0], end_ind);
    var char_set$1 = Bytes.to_string(char_set);
    return /* tuple */[
            next_ind,
            match$1[1] ? rev_char_set(char_set$1) : char_set$1
          ];
  };
  var check_open_box = function (fmt) {
    if (typeof fmt === "number") {
      return /* () */0;
    } else if (fmt.tag === 11) {
      if (typeof fmt[1] === "number") {
        try {
          open_box_of_string(fmt[0]);
          return /* () */0;
        }
        catch (raw_exn){
          var exn = Js_exn.internalToOCamlException(raw_exn);
          if (exn[0] === Caml_builtin_exceptions.failure) {
            return /* () */0;
          } else {
            throw exn;
          }
        }
      } else {
        return /* () */0;
      }
    } else {
      return /* () */0;
    }
  };
  var parse_tag = function (is_open_tag, str_ind, end_ind) {
    try {
      if (str_ind === end_ind) {
        throw Caml_builtin_exceptions.not_found;
      }
      var match = Caml_string.get(str, str_ind);
      if (match !== 60) {
        throw Caml_builtin_exceptions.not_found;
      } else {
        var ind = $$String.index_from(str, str_ind + 1 | 0, /* ">" */62);
        if (ind >= end_ind) {
          throw Caml_builtin_exceptions.not_found;
        }
        var sub_str = $$String.sub(str, str_ind, (ind - str_ind | 0) + 1 | 0);
        var beg_ind = ind + 1 | 0;
        var match$1 = parse_literal(beg_ind, beg_ind, end_ind);
        var match$2 = parse_literal(str_ind, str_ind, ind + 1 | 0);
        var sub_fmt = match$2[0];
        var sub_format = /* Format */[
          sub_fmt,
          sub_str
        ];
        var formatting = is_open_tag ? /* Open_tag */Block.__(0, [sub_format]) : (check_open_box(sub_fmt), /* Open_box */Block.__(1, [sub_format]));
        return /* Fmt_EBB */[/* Formatting_gen */Block.__(18, [
                    formatting,
                    match$1[0]
                  ])];
      }
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        var match$3 = parse_literal(str_ind, str_ind, end_ind);
        var sub_format$1 = /* Format */[
          /* End_of_format */0,
          ""
        ];
        var formatting$1 = is_open_tag ? /* Open_tag */Block.__(0, [sub_format$1]) : /* Open_box */Block.__(1, [sub_format$1]);
        return /* Fmt_EBB */[/* Formatting_gen */Block.__(18, [
                    formatting$1,
                    match$3[0]
                  ])];
      } else {
        throw exn;
      }
    }
  };
  return parse_literal(0, 0, str.length);
}

function format_of_string_fmtty(str, fmtty) {
  var match = fmt_ebb_of_string(/* None */0, str);
  try {
    return /* Format */[
            type_format(match[0], fmtty),
            str
          ];
  }
  catch (exn){
    if (exn === Type_mismatch) {
      return Curry._2(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "bad input: format type mismatch between ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* String_literal */Block.__(11, [
                                  " and ",
                                  /* Caml_string */Block.__(3, [
                                      /* No_padding */0,
                                      /* End_of_format */0
                                    ])
                                ])
                            ])
                        ]),
                      "bad input: format type mismatch between %S and %S"
                    ]), str, string_of_fmtty(fmtty));
    } else {
      throw exn;
    }
  }
}

function format_of_string_format(str, param) {
  var match = fmt_ebb_of_string(/* None */0, str);
  try {
    return /* Format */[
            type_format(match[0], fmtty_of_fmt(param[0])),
            str
          ];
  }
  catch (exn){
    if (exn === Type_mismatch) {
      return Curry._2(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "bad input: format type mismatch between ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* String_literal */Block.__(11, [
                                  " and ",
                                  /* Caml_string */Block.__(3, [
                                      /* No_padding */0,
                                      /* End_of_format */0
                                    ])
                                ])
                            ])
                        ]),
                      "bad input: format type mismatch between %S and %S"
                    ]), str, param[1]);
    } else {
      throw exn;
    }
  }
}

exports.is_in_char_set                 = is_in_char_set;
exports.rev_char_set                   = rev_char_set;
exports.create_char_set                = create_char_set;
exports.add_in_char_set                = add_in_char_set;
exports.freeze_char_set                = freeze_char_set;
exports.param_format_of_ignored_format = param_format_of_ignored_format;
exports.make_printf                    = make_printf;
exports.output_acc                     = output_acc;
exports.bufput_acc                     = bufput_acc;
exports.strput_acc                     = strput_acc;
exports.type_format                    = type_format;
exports.fmt_ebb_of_string              = fmt_ebb_of_string;
exports.format_of_string_fmtty         = format_of_string_fmtty;
exports.format_of_string_format        = format_of_string_format;
exports.char_of_iconv                  = char_of_iconv;
exports.string_of_formatting_lit       = string_of_formatting_lit;
exports.string_of_formatting_gen       = string_of_formatting_gen;
exports.string_of_fmtty                = string_of_fmtty;
exports.string_of_fmt                  = string_of_fmt;
exports.open_box_of_string             = open_box_of_string;
exports.symm                           = symm;
exports.trans                          = trans;
exports.recast                         = recast;
/* No side effect */


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s[i];
  }
}

exports.get = get;
/* No side effect */


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function caml_int32_float_of_bits(x) {
  var int32 = new Int32Array(/* array */[x]);
  var float32 = new Float32Array(int32.buffer);
  return float32[0];
}

function caml_int32_bits_of_float(x) {
  var float32 = new Float32Array(/* float array */[x]);
  return new Int32Array(float32.buffer)[0];
}

function caml_classify_float(x) {
  if (isFinite(x)) {
    if (Math.abs(x) >= 2.2250738585072014e-308) {
      return /* FP_normal */0;
    } else if (x !== 0) {
      return /* FP_subnormal */1;
    } else {
      return /* FP_zero */2;
    }
  } else if (isNaN(x)) {
    return /* FP_nan */4;
  } else {
    return /* FP_infinite */3;
  }
}

function caml_modf_float(x) {
  if (isFinite(x)) {
    var neg = +(1 / x < 0);
    var x$1 = Math.abs(x);
    var i = Math.floor(x$1);
    var f = x$1 - i;
    if (neg) {
      return /* tuple */[
              -f,
              -i
            ];
    } else {
      return /* tuple */[
              f,
              i
            ];
    }
  } else if (isNaN(x)) {
    return /* tuple */[
            NaN,
            NaN
          ];
  } else {
    return /* tuple */[
            1 / x,
            x
          ];
  }
}

function caml_ldexp_float(x, exp) {
  var match_000 = [x];
  var match_001 = [exp];
  var exp$prime = match_001;
  var x$prime = match_000;
  if (exp$prime[0] > 1023) {
    exp$prime[0] -= 1023;
    x$prime[0] = x$prime[0] * Math.pow(2, 1023);
    if (exp$prime[0] > 1023) {
      exp$prime[0] -= 1023;
      x$prime[0] = x$prime[0] * Math.pow(2, 1023);
    }
    
  } else if (exp$prime[0] < -1023) {
    exp$prime[0] += 1023;
    x$prime[0] = x$prime[0] * Math.pow(2, -1023);
  }
  return x$prime[0] * Math.pow(2, exp$prime[0]);
}

function caml_frexp_float(x) {
  if (x === 0 || !isFinite(x)) {
    return /* tuple */[
            x,
            0
          ];
  } else {
    var neg = +(x < 0);
    var x$prime = Math.abs(x);
    var exp = Math.floor(Math.LOG2E * Math.log(x$prime)) + 1;
    x$prime = x$prime * Math.pow(2, -exp);
    if (x$prime < 0.5) {
      x$prime = x$prime * 2;
      exp -= 1;
    }
    if (neg) {
      x$prime = -x$prime;
    }
    return /* tuple */[
            x$prime,
            exp | 0
          ];
  }
}

function caml_float_compare(x, y) {
  if (x === y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else if (x > y || x === x) {
    return 1;
  } else if (y === y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_copysign_float(x, y) {
  var x$1 = Math.abs(x);
  var y$1 = y === 0 ? 1 / y : y;
  if (y$1 < 0) {
    return -x$1;
  } else {
    return x$1;
  }
}

function caml_expm1_float(x) {
  var y = Math.exp(x);
  var z = y - 1;
  if (Math.abs(x) > 1) {
    return z;
  } else if (z === 0) {
    return x;
  } else {
    return x * z / Math.log(y);
  }
}

function caml_hypot_float(x, y) {
  var match_000 = Math.abs(x);
  var match_001 = Math.abs(y);
  var y0 = match_001;
  var x0 = match_000;
  var a = Math.max(x0, y0);
  var b = Math.min(x0, y0) / (
    a !== 0 ? a : 1
  );
  return a * Math.sqrt(1 + b * b);
}

function caml_log10_float(x) {
  return Math.LOG10E * Math.log(x);
}

exports.caml_int32_float_of_bits = caml_int32_float_of_bits;
exports.caml_int32_bits_of_float = caml_int32_bits_of_float;
exports.caml_classify_float      = caml_classify_float;
exports.caml_modf_float          = caml_modf_float;
exports.caml_ldexp_float         = caml_ldexp_float;
exports.caml_frexp_float         = caml_frexp_float;
exports.caml_float_compare       = caml_float_compare;
exports.caml_copysign_float      = caml_copysign_float;
exports.caml_expm1_float         = caml_expm1_float;
exports.caml_hypot_float         = caml_hypot_float;
exports.caml_log10_float         = caml_log10_float;
/* No side effect */


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_obj    = __webpack_require__(8);
var Caml_format = __webpack_require__(14);

function succ(n) {
  return n + 1 | 0;
}

function pred(n) {
  return n - 1 | 0;
}

function abs(n) {
  if (n >= 0) {
    return n;
  } else {
    return -n | 0;
  }
}

function lognot(n) {
  return n ^ -1;
}

function to_string(n) {
  return Caml_format.caml_int32_format("%d", n);
}

var compare = Caml_obj.caml_int32_compare;

var zero = 0;

var one = 1;

var minus_one = -1;

var max_int = 2147483647;

var min_int = -2147483648;

exports.zero      = zero;
exports.one       = one;
exports.minus_one = minus_one;
exports.succ      = succ;
exports.pred      = pred;
exports.abs       = abs;
exports.max_int   = max_int;
exports.min_int   = min_int;
exports.lognot    = lognot;
exports.to_string = to_string;
exports.compare   = compare;
/* No side effect */


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_int64  = __webpack_require__(25);
var Caml_format = __webpack_require__(14);

function succ(n) {
  return Caml_int64.add(n, /* int64 */[
              /* hi */0,
              /* lo */1
            ]);
}

function pred(n) {
  return Caml_int64.sub(n, /* int64 */[
              /* hi */0,
              /* lo */1
            ]);
}

function abs(n) {
  if (Caml_int64.ge(n, /* int64 */[
          /* hi */0,
          /* lo */0
        ])) {
    return n;
  } else {
    return Caml_int64.neg(n);
  }
}

function lognot(n) {
  return Caml_int64.xor(n, /* int64 */[
              /* hi */-1,
              /* lo */4294967295
            ]);
}

function to_string(n) {
  return Caml_format.caml_int64_format("%d", n);
}

var compare = Caml_int64.compare;

var zero = /* int64 */[
  /* hi */0,
  /* lo */0
];

var one = /* int64 */[
  /* hi */0,
  /* lo */1
];

var minus_one = /* int64 */[
  /* hi */-1,
  /* lo */4294967295
];

var max_int = /* int64 */[
  /* hi */2147483647,
  /* lo */4294967295
];

var min_int = /* int64 */[
  /* hi */-2147483648,
  /* lo */0
];

exports.zero      = zero;
exports.one       = one;
exports.minus_one = minus_one;
exports.succ      = succ;
exports.pred      = pred;
exports.abs       = abs;
exports.max_int   = max_int;
exports.min_int   = min_int;
exports.lognot    = lognot;
exports.to_string = to_string;
exports.compare   = compare;
/* No side effect */


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Char                    = __webpack_require__(27);
var $$String                = __webpack_require__(19);
var Caml_md5                = __webpack_require__(65);
var Pervasives              = __webpack_require__(2);
var Caml_string             = __webpack_require__(9);
var Caml_missing_polyfill   = __webpack_require__(34);
var Caml_builtin_exceptions = __webpack_require__(0);

function string(str) {
  return Caml_md5.caml_md5_string(str, 0, str.length);
}

function bytes(b) {
  return string(Caml_string.bytes_to_string(b));
}

function substring(str, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (str.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Digest.substring"
        ];
  } else {
    return Caml_md5.caml_md5_string(str, ofs, len);
  }
}

function subbytes(b, ofs, len) {
  return substring(Caml_string.bytes_to_string(b), ofs, len);
}

function file(filename) {
  Pervasives.open_in_bin(filename);
  var exit = 0;
  var d;
  try {
    d = Caml_missing_polyfill.not_implemented("caml_md5_chan not implemented by bucklescript yet\n");
    exit = 1;
  }
  catch (e){
    Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
    throw e;
  }
  if (exit === 1) {
    Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
    return d;
  }
  
}

var output = Pervasives.output_string;

function input(chan) {
  return Pervasives.really_input_string(chan, 16);
}

function char_hex(n) {
  return n + (
          n < 10 ? /* "0" */48 : 87
        ) | 0;
}

function to_hex(d) {
  var result = new Array(32);
  for(var i = 0; i <= 15; ++i){
    var x = Caml_string.get(d, i);
    result[(i << 1)] = char_hex((x >>> 4));
    result[(i << 1) + 1 | 0] = char_hex(x & 15);
  }
  return Caml_string.bytes_to_string(result);
}

function from_hex(s) {
  if (s.length !== 32) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Digest.from_hex"
        ];
  }
  var digit = function (c) {
    if (c >= 65) {
      if (c >= 97) {
        if (c >= 103) {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Digest.from_hex"
              ];
        } else {
          return (c - /* "a" */97 | 0) + 10 | 0;
        }
      } else if (c >= 71) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Digest.from_hex"
            ];
      } else {
        return (c - /* "A" */65 | 0) + 10 | 0;
      }
    } else if (c > 57 || c < 48) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Digest.from_hex"
          ];
    } else {
      return c - /* "0" */48 | 0;
    }
  };
  var $$byte = function (i) {
    return (digit(Caml_string.get(s, i)) << 4) + digit(Caml_string.get(s, i + 1 | 0)) | 0;
  };
  var result = new Array(16);
  for(var i = 0; i <= 15; ++i){
    result[i] = Char.chr($$byte((i << 1)));
  }
  return Caml_string.bytes_to_string(result);
}

var compare = $$String.compare;

exports.compare   = compare;
exports.string    = string;
exports.bytes     = bytes;
exports.substring = substring;
exports.subbytes  = subbytes;
exports.file      = file;
exports.output    = output;
exports.input     = input;
exports.to_hex    = to_hex;
exports.from_hex  = from_hex;
/* No side effect */


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function cmn(q, a, b, x, s, t) {
  var a$1 = ((a + q | 0) + x | 0) + t | 0;
  return ((a$1 << s) | (a$1 >>> (32 - s | 0)) | 0) + b | 0;
}

function f(a, b, c, d, x, s, t) {
  return cmn(b & c | (b ^ -1) & d, a, b, x, s, t);
}

function g(a, b, c, d, x, s, t) {
  return cmn(b & d | c & (d ^ -1), a, b, x, s, t);
}

function h(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}

function i(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | d ^ -1), a, b, x, s, t);
}

function cycle(x, k) {
  var a = x[0];
  var b = x[1];
  var c = x[2];
  var d = x[3];
  a = f(a, b, c, d, k[0], 7, -680876936);
  d = f(d, a, b, c, k[1], 12, -389564586);
  c = f(c, d, a, b, k[2], 17, 606105819);
  b = f(b, c, d, a, k[3], 22, -1044525330);
  a = f(a, b, c, d, k[4], 7, -176418897);
  d = f(d, a, b, c, k[5], 12, 1200080426);
  c = f(c, d, a, b, k[6], 17, -1473231341);
  b = f(b, c, d, a, k[7], 22, -45705983);
  a = f(a, b, c, d, k[8], 7, 1770035416);
  d = f(d, a, b, c, k[9], 12, -1958414417);
  c = f(c, d, a, b, k[10], 17, -42063);
  b = f(b, c, d, a, k[11], 22, -1990404162);
  a = f(a, b, c, d, k[12], 7, 1804603682);
  d = f(d, a, b, c, k[13], 12, -40341101);
  c = f(c, d, a, b, k[14], 17, -1502002290);
  b = f(b, c, d, a, k[15], 22, 1236535329);
  a = g(a, b, c, d, k[1], 5, -165796510);
  d = g(d, a, b, c, k[6], 9, -1069501632);
  c = g(c, d, a, b, k[11], 14, 643717713);
  b = g(b, c, d, a, k[0], 20, -373897302);
  a = g(a, b, c, d, k[5], 5, -701558691);
  d = g(d, a, b, c, k[10], 9, 38016083);
  c = g(c, d, a, b, k[15], 14, -660478335);
  b = g(b, c, d, a, k[4], 20, -405537848);
  a = g(a, b, c, d, k[9], 5, 568446438);
  d = g(d, a, b, c, k[14], 9, -1019803690);
  c = g(c, d, a, b, k[3], 14, -187363961);
  b = g(b, c, d, a, k[8], 20, 1163531501);
  a = g(a, b, c, d, k[13], 5, -1444681467);
  d = g(d, a, b, c, k[2], 9, -51403784);
  c = g(c, d, a, b, k[7], 14, 1735328473);
  b = g(b, c, d, a, k[12], 20, -1926607734);
  a = h(a, b, c, d, k[5], 4, -378558);
  d = h(d, a, b, c, k[8], 11, -2022574463);
  c = h(c, d, a, b, k[11], 16, 1839030562);
  b = h(b, c, d, a, k[14], 23, -35309556);
  a = h(a, b, c, d, k[1], 4, -1530992060);
  d = h(d, a, b, c, k[4], 11, 1272893353);
  c = h(c, d, a, b, k[7], 16, -155497632);
  b = h(b, c, d, a, k[10], 23, -1094730640);
  a = h(a, b, c, d, k[13], 4, 681279174);
  d = h(d, a, b, c, k[0], 11, -358537222);
  c = h(c, d, a, b, k[3], 16, -722521979);
  b = h(b, c, d, a, k[6], 23, 76029189);
  a = h(a, b, c, d, k[9], 4, -640364487);
  d = h(d, a, b, c, k[12], 11, -421815835);
  c = h(c, d, a, b, k[15], 16, 530742520);
  b = h(b, c, d, a, k[2], 23, -995338651);
  a = i(a, b, c, d, k[0], 6, -198630844);
  d = i(d, a, b, c, k[7], 10, 1126891415);
  c = i(c, d, a, b, k[14], 15, -1416354905);
  b = i(b, c, d, a, k[5], 21, -57434055);
  a = i(a, b, c, d, k[12], 6, 1700485571);
  d = i(d, a, b, c, k[3], 10, -1894986606);
  c = i(c, d, a, b, k[10], 15, -1051523);
  b = i(b, c, d, a, k[1], 21, -2054922799);
  a = i(a, b, c, d, k[8], 6, 1873313359);
  d = i(d, a, b, c, k[15], 10, -30611744);
  c = i(c, d, a, b, k[6], 15, -1560198380);
  b = i(b, c, d, a, k[13], 21, 1309151649);
  a = i(a, b, c, d, k[4], 6, -145523070);
  d = i(d, a, b, c, k[11], 10, -1120210379);
  c = i(c, d, a, b, k[2], 15, 718787259);
  b = i(b, c, d, a, k[9], 21, -343485551);
  x[0] = a + x[0] | 0;
  x[1] = b + x[1] | 0;
  x[2] = c + x[2] | 0;
  x[3] = d + x[3] | 0;
  return /* () */0;
}

var state = /* array */[
  1732584193,
  -271733879,
  -1732584194,
  271733878
];

var md5blk = /* array */[
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];

function caml_md5_string(s, start, len) {
  var s$1 = s.slice(start, len);
  var n = s$1.length;
  state[0] = 1732584193;
  state[1] = -271733879;
  state[2] = -1732584194;
  state[3] = 271733878;
  for(var i = 0; i <= 15; ++i){
    md5blk[i] = 0;
  }
  var i_end = n / 64 | 0;
  for(var i$1 = 1; i$1 <= i_end; ++i$1){
    for(var j = 0; j <= 15; ++j){
      var k = ((i$1 << 6) - 64 | 0) + (j << 2) | 0;
      md5blk[j] = ((s$1.charCodeAt(k) + (s$1.charCodeAt(k + 1 | 0) << 8) | 0) + (s$1.charCodeAt(k + 2 | 0) << 16) | 0) + (s$1.charCodeAt(k + 3 | 0) << 24) | 0;
    }
    cycle(state, md5blk);
  }
  var s_tail = s$1.slice((i_end << 6));
  for(var kk = 0; kk <= 15; ++kk){
    md5blk[kk] = 0;
  }
  var i_end$1 = s_tail.length - 1 | 0;
  for(var i$2 = 0; i$2 <= i_end$1; ++i$2){
    md5blk[i$2 / 4 | 0] = md5blk[i$2 / 4 | 0] | (s_tail.charCodeAt(i$2) << (i$2 % 4 << 3));
  }
  var i$3 = i_end$1 + 1 | 0;
  md5blk[i$3 / 4 | 0] = md5blk[i$3 / 4 | 0] | (128 << (i$3 % 4 << 3));
  if (i$3 > 55) {
    cycle(state, md5blk);
    for(var i$4 = 0; i$4 <= 15; ++i$4){
      md5blk[i$4] = 0;
    }
  }
  md5blk[14] = (n << 3);
  cycle(state, md5blk);
  return String.fromCharCode(state[0] & 255, (state[0] >> 8) & 255, (state[0] >> 16) & 255, (state[0] >> 24) & 255, state[1] & 255, (state[1] >> 8) & 255, (state[1] >> 16) & 255, (state[1] >> 24) & 255, state[2] & 255, (state[2] >> 8) & 255, (state[2] >> 16) & 255, (state[2] >> 24) & 255, state[3] & 255, (state[3] >> 8) & 255, (state[3] >> 16) & 255, (state[3] >> 24) & 255);
}

exports.caml_md5_string = caml_md5_string;
/* No side effect */


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_obj    = __webpack_require__(8);
var Caml_format = __webpack_require__(14);

function succ(n) {
  return n + 1;
}

function pred(n) {
  return n - 1;
}

function abs(n) {
  if (n >= 0) {
    return n;
  } else {
    return -n;
  }
}

var min_int = -9007199254740991;

var max_int = 9007199254740991;

function lognot(n) {
  return n ^ -1;
}

function to_string(n) {
  return Caml_format.caml_nativeint_format("%d", n);
}

var compare = Caml_obj.caml_nativeint_compare;

var zero = 0;

var one = 1;

var minus_one = -1;

var size = 54;

exports.zero      = zero;
exports.one       = one;
exports.minus_one = minus_one;
exports.succ      = succ;
exports.pred      = pred;
exports.abs       = abs;
exports.size      = size;
exports.max_int   = max_int;
exports.min_int   = min_int;
exports.lognot    = lognot;
exports.to_string = to_string;
exports.compare   = compare;
/* No side effect */


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry                   = __webpack_require__(1);
var Caml_builtin_exceptions = __webpack_require__(0);

function Make(funarg) {
  var height = function (param) {
    if (param) {
      return param[4];
    } else {
      return 0;
    }
  };
  var create = function (l, x, d, r) {
    var hl = height(l);
    var hr = height(r);
    return /* Node */[
            l,
            x,
            d,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  };
  var singleton = function (x, d) {
    return /* Node */[
            /* Empty */0,
            x,
            d,
            /* Empty */0,
            1
          ];
  };
  var bal = function (l, x, d, r) {
    var hl = l ? l[4] : 0;
    var hr = r ? r[4] : 0;
    if (hl > (hr + 2 | 0)) {
      if (l) {
        var lr = l[3];
        var ld = l[2];
        var lv = l[1];
        var ll = l[0];
        if (height(ll) >= height(lr)) {
          return create(ll, lv, ld, create(lr, x, d, r));
        } else if (lr) {
          return create(create(ll, lv, ld, lr[0]), lr[1], lr[2], create(lr[3], x, d, r));
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Map.bal"
              ];
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Map.bal"
            ];
      }
    } else if (hr > (hl + 2 | 0)) {
      if (r) {
        var rr = r[3];
        var rd = r[2];
        var rv = r[1];
        var rl = r[0];
        if (height(rr) >= height(rl)) {
          return create(create(l, x, d, rl), rv, rd, rr);
        } else if (rl) {
          return create(create(l, x, d, rl[0]), rl[1], rl[2], create(rl[3], rv, rd, rr));
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Map.bal"
              ];
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      return /* Node */[
              l,
              x,
              d,
              r,
              hl >= hr ? hl + 1 | 0 : hr + 1 | 0
            ];
    }
  };
  var is_empty = function (param) {
    if (param) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  };
  var add = function (x, data, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(add(x, data, l), v, d, r);
        } else {
          return bal(l, v, d, add(x, data, r));
        }
      } else {
        return /* Node */[
                l,
                x,
                data,
                r,
                param[4]
              ];
      }
    } else {
      return /* Node */[
              /* Empty */0,
              x,
              data,
              /* Empty */0,
              1
            ];
    }
  };
  var find = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = Curry._2(funarg[/* compare */0], x, param[1]);
        if (c) {
          _param = c < 0 ? param[0] : param[3];
          continue ;
          
        } else {
          return param[2];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var mem = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = Curry._2(funarg[/* compare */0], x, param[1]);
        if (c) {
          _param = c < 0 ? param[0] : param[3];
          continue ;
          
        } else {
          return /* true */1;
        }
      } else {
        return /* false */0;
      }
    };
  };
  var min_binding = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var l = param[0];
        if (l) {
          _param = l;
          continue ;
          
        } else {
          return /* tuple */[
                  param[1],
                  param[2]
                ];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var max_binding = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var r = param[3];
        if (r) {
          _param = r;
          continue ;
          
        } else {
          return /* tuple */[
                  param[1],
                  param[2]
                ];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var remove_min_binding = function (param) {
    if (param) {
      var l = param[0];
      if (l) {
        return bal(remove_min_binding(l), param[1], param[2], param[3]);
      } else {
        return param[3];
      }
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Map.remove_min_elt"
          ];
    }
  };
  var remove = function (x, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(remove(x, l), v, d, r);
        } else {
          return bal(l, v, d, remove(x, r));
        }
      } else {
        var t1 = l;
        var t2 = r;
        if (t1) {
          if (t2) {
            var match = min_binding(t2);
            return bal(t1, match[0], match[1], remove_min_binding(t2));
          } else {
            return t1;
          }
        } else {
          return t2;
        }
      }
    } else {
      return /* Empty */0;
    }
  };
  var iter = function (f, _param) {
    while(true) {
      var param = _param;
      if (param) {
        iter(f, param[0]);
        Curry._2(f, param[1], param[2]);
        _param = param[3];
        continue ;
        
      } else {
        return /* () */0;
      }
    };
  };
  var map = function (f, param) {
    if (param) {
      var l$prime = map(f, param[0]);
      var d$prime = Curry._1(f, param[2]);
      var r$prime = map(f, param[3]);
      return /* Node */[
              l$prime,
              param[1],
              d$prime,
              r$prime,
              param[4]
            ];
    } else {
      return /* Empty */0;
    }
  };
  var mapi = function (f, param) {
    if (param) {
      var v = param[1];
      var l$prime = mapi(f, param[0]);
      var d$prime = Curry._2(f, v, param[2]);
      var r$prime = mapi(f, param[3]);
      return /* Node */[
              l$prime,
              v,
              d$prime,
              r$prime,
              param[4]
            ];
    } else {
      return /* Empty */0;
    }
  };
  var fold = function (f, _m, _accu) {
    while(true) {
      var accu = _accu;
      var m = _m;
      if (m) {
        _accu = Curry._3(f, m[1], m[2], fold(f, m[0], accu));
        _m = m[3];
        continue ;
        
      } else {
        return accu;
      }
    };
  };
  var for_all = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (Curry._2(p, param[1], param[2])) {
          if (for_all(p, param[0])) {
            _param = param[3];
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    };
  };
  var exists = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (Curry._2(p, param[1], param[2])) {
          return /* true */1;
        } else if (exists(p, param[0])) {
          return /* true */1;
        } else {
          _param = param[3];
          continue ;
          
        }
      } else {
        return /* false */0;
      }
    };
  };
  var add_min_binding = function (k, v, param) {
    if (param) {
      return bal(add_min_binding(k, v, param[0]), param[1], param[2], param[3]);
    } else {
      return singleton(k, v);
    }
  };
  var add_max_binding = function (k, v, param) {
    if (param) {
      return bal(param[0], param[1], param[2], add_max_binding(k, v, param[3]));
    } else {
      return singleton(k, v);
    }
  };
  var join = function (l, v, d, r) {
    if (l) {
      if (r) {
        var rh = r[4];
        var lh = l[4];
        if (lh > (rh + 2 | 0)) {
          return bal(l[0], l[1], l[2], join(l[3], v, d, r));
        } else if (rh > (lh + 2 | 0)) {
          return bal(join(l, v, d, r[0]), r[1], r[2], r[3]);
        } else {
          return create(l, v, d, r);
        }
      } else {
        return add_max_binding(v, d, l);
      }
    } else {
      return add_min_binding(v, d, r);
    }
  };
  var concat = function (t1, t2) {
    if (t1) {
      if (t2) {
        var match = min_binding(t2);
        return join(t1, match[0], match[1], remove_min_binding(t2));
      } else {
        return t1;
      }
    } else {
      return t2;
    }
  };
  var concat_or_join = function (t1, v, d, t2) {
    if (d) {
      return join(t1, v, d[0], t2);
    } else {
      return concat(t1, t2);
    }
  };
  var split = function (x, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          var match = split(x, l);
          return /* tuple */[
                  match[0],
                  match[1],
                  join(match[2], v, d, r)
                ];
        } else {
          var match$1 = split(x, r);
          return /* tuple */[
                  join(l, v, d, match$1[0]),
                  match$1[1],
                  match$1[2]
                ];
        }
      } else {
        return /* tuple */[
                l,
                /* Some */[d],
                r
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* None */0,
              /* Empty */0
            ];
    }
  };
  var merge = function (f, s1, s2) {
    var exit = 0;
    if (s1) {
      var v1 = s1[1];
      if (s1[4] >= height(s2)) {
        var match = split(v1, s2);
        return concat_or_join(merge(f, s1[0], match[0]), v1, Curry._3(f, v1, /* Some */[s1[2]], match[1]), merge(f, s1[3], match[2]));
      } else {
        exit = 1;
      }
    } else if (s2) {
      exit = 1;
    } else {
      return /* Empty */0;
    }
    if (exit === 1) {
      if (s2) {
        var v2 = s2[1];
        var match$1 = split(v2, s1);
        return concat_or_join(merge(f, match$1[0], s2[0]), v2, Curry._3(f, v2, match$1[1], /* Some */[s2[2]]), merge(f, match$1[2], s2[3]));
      } else {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "map.ml",
                270,
                10
              ]
            ];
      }
    }
    
  };
  var filter = function (p, param) {
    if (param) {
      var d = param[2];
      var v = param[1];
      var l$prime = filter(p, param[0]);
      var pvd = Curry._2(p, v, d);
      var r$prime = filter(p, param[3]);
      if (pvd) {
        return join(l$prime, v, d, r$prime);
      } else {
        return concat(l$prime, r$prime);
      }
    } else {
      return /* Empty */0;
    }
  };
  var partition = function (p, param) {
    if (param) {
      var d = param[2];
      var v = param[1];
      var match = partition(p, param[0]);
      var lf = match[1];
      var lt = match[0];
      var pvd = Curry._2(p, v, d);
      var match$1 = partition(p, param[3]);
      var rf = match$1[1];
      var rt = match$1[0];
      if (pvd) {
        return /* tuple */[
                join(lt, v, d, rt),
                concat(lf, rf)
              ];
      } else {
        return /* tuple */[
                concat(lt, rt),
                join(lf, v, d, rf)
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* Empty */0
            ];
    }
  };
  var cons_enum = function (_m, _e) {
    while(true) {
      var e = _e;
      var m = _m;
      if (m) {
        _e = /* More */[
          m[1],
          m[2],
          m[3],
          e
        ];
        _m = m[0];
        continue ;
        
      } else {
        return e;
      }
    };
  };
  var compare = function (cmp, m1, m2) {
    var _e1 = cons_enum(m1, /* End */0);
    var _e2 = cons_enum(m2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2) {
          var c = Curry._2(funarg[/* compare */0], e1[0], e2[0]);
          if (c !== 0) {
            return c;
          } else {
            var c$1 = Curry._2(cmp, e1[1], e2[1]);
            if (c$1 !== 0) {
              return c$1;
            } else {
              _e2 = cons_enum(e2[2], e2[3]);
              _e1 = cons_enum(e1[2], e1[3]);
              continue ;
              
            }
          }
        } else {
          return 1;
        }
      } else if (e2) {
        return -1;
      } else {
        return 0;
      }
    };
  };
  var equal = function (cmp, m1, m2) {
    var _e1 = cons_enum(m1, /* End */0);
    var _e2 = cons_enum(m2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2) {
          if (Curry._2(funarg[/* compare */0], e1[0], e2[0])) {
            return /* false */0;
          } else if (Curry._2(cmp, e1[1], e2[1])) {
            _e2 = cons_enum(e2[2], e2[3]);
            _e1 = cons_enum(e1[2], e1[3]);
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else if (e2) {
        return /* false */0;
      } else {
        return /* true */1;
      }
    };
  };
  var cardinal = function (param) {
    if (param) {
      return (cardinal(param[0]) + 1 | 0) + cardinal(param[3]) | 0;
    } else {
      return 0;
    }
  };
  var bindings_aux = function (_accu, _param) {
    while(true) {
      var param = _param;
      var accu = _accu;
      if (param) {
        _param = param[0];
        _accu = /* :: */[
          /* tuple */[
            param[1],
            param[2]
          ],
          bindings_aux(accu, param[3])
        ];
        continue ;
        
      } else {
        return accu;
      }
    };
  };
  var bindings = function (s) {
    return bindings_aux(/* [] */0, s);
  };
  return [
          /* Empty */0,
          is_empty,
          mem,
          add,
          singleton,
          remove,
          merge,
          compare,
          equal,
          iter,
          fold,
          for_all,
          exists,
          filter,
          partition,
          cardinal,
          bindings,
          min_binding,
          max_binding,
          min_binding,
          split,
          find,
          map,
          mapi
        ];
}

exports.Make = Make;
/* No side effect */


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Reprocessing_Hotreload_Web = __webpack_require__(69);

var checkRebuild = Reprocessing_Hotreload_Web.checkRebuild;

exports.checkRebuild = checkRebuild;
/* No side effect */


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Pervasives = __webpack_require__(2);

function checkRebuild() {
  return Pervasives.failwith("Hotreload not supported for native and web, compile to bytecode.");
}

exports.checkRebuild = checkRebuild;
/* No side effect */


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Reasongl = __webpack_require__(15);

var init = Reasongl.Gl[/* Window */2][/* init */5];

exports.init = init;
/* Reasongl Not a pure module */


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var List                   = __webpack_require__(7);
var Block                  = __webpack_require__(5);
var Random                 = __webpack_require__(28);
var MyUtils                = __webpack_require__(13);
var Caml_int32             = __webpack_require__(3);
var GravShared             = __webpack_require__(16);
var Pervasives             = __webpack_require__(2);
var Reprocessing_Env       = __webpack_require__(4);
var Reprocessing_Constants = __webpack_require__(6);

var arrowAccs_000 = /* tuple */[
  /* Left */52,
  MyUtils.vecFromPos(/* tuple */[
        -0.3,
        0
      ])
];

var arrowAccs_001 = /* :: */[
  /* tuple */[
    /* Up */54,
    MyUtils.vecFromPos(/* tuple */[
          0,
          -0.3
        ])
  ],
  /* :: */[
    /* tuple */[
      /* Down */53,
      MyUtils.vecFromPos(/* tuple */[
            0,
            0.3
          ])
    ],
    /* :: */[
      /* tuple */[
        /* Right */51,
        MyUtils.vecFromPos(/* tuple */[
              0.3,
              0
            ])
      ],
      /* [] */0
    ]
  ]
];

var arrowAccs = /* :: */[
  arrowAccs_000,
  arrowAccs_001
];

function floatPos(param) {
  return /* tuple */[
          param[0],
          param[1]
        ];
}

function clampVec(vel, min, max, fade) {
  var match = +(vel[/* mag */0] > max);
  if (match !== 0) {
    return /* float array */[
            max,
            vel[/* theta */1]
          ];
  } else {
    var match$1 = +(vel[/* mag */0] < min);
    if (match$1 !== 0) {
      return /* float array */[
              0,
              vel[/* theta */1]
            ];
    } else {
      return /* float array */[
              vel[/* mag */0] * fade,
              vel[/* theta */1]
            ];
    }
  }
}

function springToward(p1, p2, scale) {
  var vec = MyUtils.vecToward(p1, p2);
  return /* float array */[
          vec[/* mag */0] * scale,
          vec[/* theta */1]
        ];
}

function randomTarget(w, h) {
  return /* tuple */[
          Random.$$float(w - 30 * 2) + 30,
          Random.$$float(h - 30 * 2) + 30
        ];
}

function stepMeMouse(state, env) {
  var me = state[/* me */4];
  if (Reprocessing_Env.mousePressed(env)) {
    var delta = Reprocessing_Env.deltaTime(env) * 1000 / 16;
    var mousePos = floatPos(Reprocessing_Env.mouse(env));
    var mousePos$1 = GravShared.isPhone !== 0 ? MyUtils.scalePos(mousePos, GravShared.phoneScale) : mousePos;
    var vel = springToward(me[/* pos */0], mousePos$1, 0.1);
    var vel$1 = clampVec(vel, 0.01, 7, 0.98);
    var pos = MyUtils.posAdd(me[/* pos */0], MyUtils.vecToPos(MyUtils.scaleVec(vel$1, delta)));
    var newrecord = state.slice();
    newrecord[/* me */4] = /* record */[
      /* pos */pos,
      /* color */me[/* color */1],
      /* health */me[/* health */2],
      /* lives */me[/* lives */3],
      /* vel */vel$1,
      /* acc */me[/* acc */5],
      /* size */me[/* size */6]
    ];
    return newrecord;
  } else {
    return state;
  }
}

function stepMeJoystick(state, env) {
  var me = state[/* me */4];
  if (Reprocessing_Env.mousePressed(env)) {
    var vel = springToward(GravShared.joystickPos(env), floatPos(Reprocessing_Env.mouse(env)), 0.1);
    var vel$1 = clampVec(vel, 1, 7, 0.98);
    var delta = Reprocessing_Env.deltaTime(env) * 1000 / 16;
    var pos = MyUtils.posAdd(me[/* pos */0], MyUtils.vecToPos(MyUtils.scaleVec(vel$1, delta)));
    var newrecord = state.slice();
    newrecord[/* me */4] = /* record */[
      /* pos */pos,
      /* color */me[/* color */1],
      /* health */me[/* health */2],
      /* lives */me[/* lives */3],
      /* vel */vel$1,
      /* acc */me[/* acc */5],
      /* size */me[/* size */6]
    ];
    return newrecord;
  } else {
    return state;
  }
}

function stepMeKeys(state, env) {
  var me = state[/* me */4];
  var vel = List.fold_left((function (acc, param) {
          var match = Reprocessing_Env.key(param[0], env);
          if (match !== 0) {
            return MyUtils.vecAdd(acc, param[1]);
          } else {
            return acc;
          }
        }), me[/* vel */4], arrowAccs);
  var vel$1 = clampVec(vel, 0.01, 7, 0.98);
  var delta = Reprocessing_Env.deltaTime(env) * 1000 / 16;
  var pos = MyUtils.posAdd(me[/* pos */0], MyUtils.vecToPos(MyUtils.scaleVec(vel$1, delta)));
  var newrecord = state.slice();
  newrecord[/* me */4] = /* record */[
    /* pos */pos,
    /* color */me[/* color */1],
    /* health */me[/* health */2],
    /* lives */me[/* lives */3],
    /* vel */vel$1,
    /* acc */me[/* acc */5],
    /* size */me[/* size */6]
  ];
  return newrecord;
}

function stepEnemy(env, state, enemy) {
  var match = MyUtils.stepTimer(enemy[/* warmup */3], env);
  var warmup = match[0];
  if (match[1]) {
    if (MyUtils.collides(enemy[/* pos */0], state[/* me */4][/* pos */0], enemy[/* size */2] + state[/* me */4][/* size */6])) {
      var newrecord = state.slice();
      newrecord[/* status */0] = /* Dead */[100];
      newrecord[/* explosions */7] = /* :: */[
        GravShared.playerExplosion(state[/* me */4]),
        /* :: */[
          GravShared.enemyExplosion(enemy),
          state[/* explosions */7]
        ]
      ];
      return newrecord;
    } else {
      var match$1 = enemy[/* movement */5];
      var enemy$1;
      if (typeof match$1 === "number") {
        enemy$1 = enemy;
      } else if (match$1.tag) {
        var target = match$1[0];
        var vel = MyUtils.vecAdd(match$1[1], /* float array */[
              0.01,
              MyUtils.thetaToward(enemy[/* pos */0], target)
            ]);
        var vel$1 = /* float array */[
          Pervasives.min(vel[/* mag */0], 4) * 0.98,
          vel[/* theta */1]
        ];
        var pos = MyUtils.posAdd(enemy[/* pos */0], MyUtils.vecToPos(vel$1));
        var match$2 = MyUtils.collides(enemy[/* pos */0], target, enemy[/* size */2] * 2);
        var target$1 = match$2 !== 0 ? randomTarget(Reprocessing_Env.width(env), Reprocessing_Env.height(env)) : target;
        enemy$1 = /* record */[
          /* pos */pos,
          /* color */enemy[/* color */1],
          /* size */enemy[/* size */2],
          /* warmup */enemy[/* warmup */3],
          /* health */enemy[/* health */4],
          /* movement : Wander */Block.__(1, [
              target$1,
              vel$1
            ]),
          /* behavior */enemy[/* behavior */6]
        ];
      } else {
        var target$2 = match$1[0];
        var vel$2 = MyUtils.vecAdd(match$1[1], /* float array */[
              0.01,
              MyUtils.thetaToward(enemy[/* pos */0], target$2)
            ]);
        var vel$3 = /* float array */[
          Pervasives.min(vel$2[/* mag */0], 2) * 0.98,
          vel$2[/* theta */1]
        ];
        var pos$1 = MyUtils.posAdd(enemy[/* pos */0], MyUtils.vecToPos(vel$3));
        enemy$1 = /* record */[
          /* pos */pos$1,
          /* color */enemy[/* color */1],
          /* size */enemy[/* size */2],
          /* warmup */enemy[/* warmup */3],
          /* health */enemy[/* health */4],
          /* movement : GoToPosition */Block.__(0, [
              target$2,
              vel$3
            ]),
          /* behavior */enemy[/* behavior */6]
        ];
      }
      var match$3 = enemy$1[/* behavior */6];
      switch (match$3.tag | 0) {
        case 0 : 
            var bulletConfig = match$3[1];
            var match$4 = MyUtils.loopTimer(match$3[0], env);
            var timer = match$4[0];
            if (match$4[1]) {
              var newrecord$1 = state.slice();
              newrecord$1[/* enemies */5] = /* :: */[
                /* record */[
                  /* pos */enemy$1[/* pos */0],
                  /* color */enemy$1[/* color */1],
                  /* size */enemy$1[/* size */2],
                  /* warmup */warmup,
                  /* health */enemy$1[/* health */4],
                  /* movement */enemy$1[/* movement */5],
                  /* behavior : SimpleShooter */Block.__(0, [
                      timer,
                      bulletConfig
                    ])
                ],
                state[/* enemies */5]
              ];
              newrecord$1[/* bullets */6] = /* :: */[
                GravShared.shoot(/* None */0, /* None */0, bulletConfig, env, enemy$1, state[/* me */4]),
                state[/* bullets */6]
              ];
              return newrecord$1;
            } else {
              var newrecord$2 = state.slice();
              newrecord$2[/* enemies */5] = /* :: */[
                /* record */[
                  /* pos */enemy$1[/* pos */0],
                  /* color */enemy$1[/* color */1],
                  /* size */enemy$1[/* size */2],
                  /* warmup */warmup,
                  /* health */enemy$1[/* health */4],
                  /* movement */enemy$1[/* movement */5],
                  /* behavior : SimpleShooter */Block.__(0, [
                      timer,
                      bulletConfig
                    ])
                ],
                state[/* enemies */5]
              ];
              return newrecord$2;
            }
            break;
        case 1 : 
            var bulletConfig$1 = match$3[1];
            var match$5 = MyUtils.loopTimer(match$3[0], env);
            var timer$1 = match$5[0];
            if (match$5[1]) {
              var newrecord$3 = state.slice();
              newrecord$3[/* enemies */5] = /* :: */[
                /* record */[
                  /* pos */enemy$1[/* pos */0],
                  /* color */enemy$1[/* color */1],
                  /* size */enemy$1[/* size */2],
                  /* warmup */warmup,
                  /* health */enemy$1[/* health */4],
                  /* movement */enemy$1[/* movement */5],
                  /* behavior : TripleShooter */Block.__(1, [
                      timer$1,
                      bulletConfig$1
                    ])
                ],
                state[/* enemies */5]
              ];
              newrecord$3[/* bullets */6] = /* :: */[
                GravShared.shoot(/* None */0, /* Some */[0.3], bulletConfig$1, env, enemy$1, state[/* me */4]),
                /* :: */[
                  GravShared.shoot(/* None */0, /* Some */[-0.3], bulletConfig$1, env, enemy$1, state[/* me */4]),
                  /* :: */[
                    GravShared.shoot(/* None */0, /* Some */[0], bulletConfig$1, env, enemy$1, state[/* me */4]),
                    state[/* bullets */6]
                  ]
                ]
              ];
              return newrecord$3;
            } else {
              var newrecord$4 = state.slice();
              newrecord$4[/* enemies */5] = /* :: */[
                /* record */[
                  /* pos */enemy$1[/* pos */0],
                  /* color */enemy$1[/* color */1],
                  /* size */enemy$1[/* size */2],
                  /* warmup */warmup,
                  /* health */enemy$1[/* health */4],
                  /* movement */enemy$1[/* movement */5],
                  /* behavior : TripleShooter */Block.__(1, [
                      timer$1,
                      bulletConfig$1
                    ])
                ],
                state[/* enemies */5]
              ];
              return newrecord$4;
            }
            break;
        case 2 : 
            var subConfig = match$3[3];
            var bulletConfig$2 = match$3[2];
            var count = match$3[1];
            var match$6 = MyUtils.loopTimer(match$3[0], env);
            var timer$2 = match$6[0];
            if (match$6[1]) {
              var newrecord$5 = state.slice();
              newrecord$5[/* enemies */5] = /* :: */[
                /* record */[
                  /* pos */enemy$1[/* pos */0],
                  /* color */enemy$1[/* color */1],
                  /* size */enemy$1[/* size */2],
                  /* warmup */warmup,
                  /* health */enemy$1[/* health */4],
                  /* movement */enemy$1[/* movement */5],
                  /* behavior : ScatterShot */Block.__(2, [
                      timer$2,
                      count,
                      bulletConfig$2,
                      subConfig
                    ])
                ],
                state[/* enemies */5]
              ];
              newrecord$5[/* bullets */6] = /* :: */[
                GravShared.shoot(/* Some */[/* Scatter */[
                        count,
                        /* tuple */[
                          0,
                          40
                        ],
                        subConfig
                      ]], /* None */0, bulletConfig$2, env, enemy$1, state[/* me */4]),
                state[/* bullets */6]
              ];
              return newrecord$5;
            } else {
              var newrecord$6 = state.slice();
              newrecord$6[/* enemies */5] = /* :: */[
                /* record */[
                  /* pos */enemy$1[/* pos */0],
                  /* color */enemy$1[/* color */1],
                  /* size */enemy$1[/* size */2],
                  /* warmup */warmup,
                  /* health */enemy$1[/* health */4],
                  /* movement */enemy$1[/* movement */5],
                  /* behavior : ScatterShot */Block.__(2, [
                      timer$2,
                      count,
                      bulletConfig$2,
                      subConfig
                    ])
                ],
                state[/* enemies */5]
              ];
              return newrecord$6;
            }
            break;
        case 3 : 
            var bulletConfig$3 = match$3[2];
            var match$7 = MyUtils.loopTimer(match$3[0], env);
            var timer$3 = match$7[0];
            var animate = match$3[1] + MyUtils.increment(env);
            if (match$7[1]) {
              var newrecord$7 = state.slice();
              newrecord$7[/* enemies */5] = /* :: */[
                /* record */[
                  /* pos */enemy$1[/* pos */0],
                  /* color */enemy$1[/* color */1],
                  /* size */enemy$1[/* size */2],
                  /* warmup */warmup,
                  /* health */enemy$1[/* health */4],
                  /* movement */enemy$1[/* movement */5],
                  /* behavior : Asteroid */Block.__(3, [
                      timer$3,
                      animate,
                      bulletConfig$3
                    ])
                ],
                state[/* enemies */5]
              ];
              newrecord$7[/* bullets */6] = /* :: */[
                GravShared.shoot(/* None */0, /* None */0, bulletConfig$3, env, enemy$1, state[/* me */4]),
                state[/* bullets */6]
              ];
              return newrecord$7;
            } else {
              var newrecord$8 = state.slice();
              newrecord$8[/* enemies */5] = /* :: */[
                /* record */[
                  /* pos */enemy$1[/* pos */0],
                  /* color */enemy$1[/* color */1],
                  /* size */enemy$1[/* size */2],
                  /* warmup */warmup,
                  /* health */enemy$1[/* health */4],
                  /* movement */enemy$1[/* movement */5],
                  /* behavior : Asteroid */Block.__(3, [
                      timer$3,
                      animate,
                      bulletConfig$3
                    ])
                ],
                state[/* enemies */5]
              ];
              return newrecord$8;
            }
            break;
        
      }
    }
  } else {
    var newrecord$9 = state.slice();
    var newrecord$10 = enemy.slice();
    newrecord$9[/* enemies */5] = /* :: */[
      (newrecord$10[/* warmup */3] = warmup, newrecord$10),
      state[/* enemies */5]
    ];
    return newrecord$9;
  }
}

function stepEnemies(state, env) {
  var newrecord = state.slice();
  return List.fold_left((function (param, param$1) {
                return stepEnemy(env, param, param$1);
              }), (newrecord[/* enemies */5] = /* [] */0, newrecord), state[/* enemies */5]);
}

function moveBullet(bullet, env) {
  var delta = Reprocessing_Env.deltaTime(env) * 1000 / 16;
  var newrecord = bullet.slice();
  newrecord[/* pos */7] = MyUtils.posAdd(bullet[/* pos */7], MyUtils.vecToPos(MyUtils.scaleVec(bullet[/* vel */5], delta)));
  return newrecord;
}

function bulletToBullet(bullet, bullets, explosions) {
  var match = List.fold_left((function (param, other) {
          var explosions = param[2];
          var bullets = param[1];
          if (param[0] !== 0) {
            return /* tuple */[
                    /* true */1,
                    /* :: */[
                      other,
                      bullets
                    ],
                    explosions
                  ];
          } else {
            var match = MyUtils.collides(bullet[/* pos */7], other[/* pos */7], bullet[/* size */4] + other[/* size */4]);
            if (match !== 0) {
              return /* tuple */[
                      /* true */1,
                      bullets,
                      /* :: */[
                        GravShared.bulletExplosion(bullet),
                        /* :: */[
                          GravShared.bulletExplosion(other),
                          explosions
                        ]
                      ]
                    ];
            } else {
              return /* tuple */[
                      /* false */0,
                      /* :: */[
                        other,
                        bullets
                      ],
                      explosions
                    ];
            }
          }
        }), /* tuple */[
        /* false */0,
        /* [] */0,
        explosions
      ], bullets);
  var explosions$1 = match[2];
  var bullets$1 = match[1];
  if (match[0]) {
    return /* tuple */[
            bullets$1,
            explosions$1
          ];
  } else {
    return /* tuple */[
            /* :: */[
              bullet,
              bullets$1
            ],
            explosions$1
          ];
  }
}

function asteroidSplitVel() {
  var theta = Random.$$float(Reprocessing_Constants.two_pi);
  return /* tuple */[
          /* float array */[
            1.5 + Random.$$float(1),
            theta
          ],
          /* float array */[
            1.5 + Random.$$float(1),
            theta - Reprocessing_Constants.pi + Random.$$float(Reprocessing_Constants.pi / 2)
          ]
        ];
}

function bulletToEnemiesAndBullets(bullet, state, env) {
  var match = List.fold_left((function (param, enemy) {
          var explosions = param[2];
          var enemies = param[1];
          var hit = param[0];
          if (hit !== 0) {
            return /* tuple */[
                    hit,
                    /* :: */[
                      enemy,
                      enemies
                    ],
                    explosions
                  ];
          } else if (MyUtils.collides(enemy[/* pos */0], bullet[/* pos */7], enemy[/* size */2] + bullet[/* size */4])) {
            var match = MyUtils.countDown(enemy[/* health */4]);
            var health = match[0];
            if (match[1]) {
              return /* tuple */[
                      /* true */1,
                      enemies,
                      /* :: */[
                        GravShared.enemyExplosion(enemy),
                        /* :: */[
                          GravShared.bulletExplosion(bullet),
                          explosions
                        ]
                      ]
                    ];
            } else {
              var match$1 = enemy[/* behavior */6];
              if (match$1.tag === 3) {
                var match$2 = match$1[2];
                var animate = match$1[1];
                var bulletTime = match$1[0][1];
                var w = Reprocessing_Env.width(env) * GravShared.phoneScale;
                var h = Reprocessing_Env.height(env) * GravShared.phoneScale;
                var current = health[0];
                var match$3 = asteroidSplitVel(/* () */0);
                var size = current * 5 + 10;
                var smallerBullets_000 = match$2[0];
                var smallerBullets_001 = 2 + (current << 1) | 0;
                var smallerBullets_002 = match$2[2];
                var smallerBullets_003 = 3 + Caml_int32.imul(current, 3) | 0;
                var smallerBullets = /* tuple */[
                  smallerBullets_000,
                  smallerBullets_001,
                  smallerBullets_002,
                  smallerBullets_003
                ];
                return /* tuple */[
                        /* true */1,
                        /* :: */[
                          /* record */[
                            /* pos */enemy[/* pos */0],
                            /* color */enemy[/* color */1],
                            /* size */size,
                            /* warmup */enemy[/* warmup */3],
                            /* health : tuple */[
                              current,
                              current
                            ],
                            /* movement : GoToPosition */Block.__(0, [
                                randomTarget(w, h),
                                match$3[0]
                              ]),
                            /* behavior : Asteroid */Block.__(3, [
                                /* tuple */[
                                  Random.$$float(bulletTime / 4),
                                  bulletTime
                                ],
                                animate,
                                smallerBullets
                              ])
                          ],
                          /* :: */[
                            /* record */[
                              /* pos */enemy[/* pos */0],
                              /* color */enemy[/* color */1],
                              /* size */size,
                              /* warmup */enemy[/* warmup */3],
                              /* health : tuple */[
                                current,
                                current
                              ],
                              /* movement : GoToPosition */Block.__(0, [
                                  randomTarget(w, h),
                                  match$3[1]
                                ]),
                              /* behavior : Asteroid */Block.__(3, [
                                  /* tuple */[
                                    0,
                                    bulletTime
                                  ],
                                  animate,
                                  smallerBullets
                                ])
                            ],
                            enemies
                          ]
                        ],
                        /* :: */[
                          GravShared.bulletExplosion(bullet),
                          explosions
                        ]
                      ];
              } else {
                var newrecord = enemy.slice();
                return /* tuple */[
                        /* true */1,
                        /* :: */[
                          (newrecord[/* health */4] = health, newrecord),
                          enemies
                        ],
                        /* :: */[
                          GravShared.bulletExplosion(bullet),
                          explosions
                        ]
                      ];
              }
            }
          } else {
            return /* tuple */[
                    /* false */0,
                    /* :: */[
                      enemy,
                      enemies
                    ],
                    explosions
                  ];
          }
        }), /* tuple */[
        /* false */0,
        /* [] */0,
        state[/* explosions */7]
      ], state[/* enemies */5]);
  if (match[0]) {
    var newrecord = state.slice();
    newrecord[/* enemies */5] = match[1];
    newrecord[/* explosions */7] = match[2];
    return newrecord;
  } else {
    var match$1 = bulletToBullet(bullet, state[/* bullets */6], state[/* explosions */7]);
    var newrecord$1 = state.slice();
    newrecord$1[/* bullets */6] = match$1[0];
    newrecord$1[/* explosions */7] = match$1[1];
    return newrecord$1;
  }
}

function makeScatterBullets(bullet, param, count) {
  var damage = param[3];
  var speed = param[2];
  var size = param[1];
  var color = param[0];
  var by = Reprocessing_Constants.two_pi / count;
  var loop = function (i) {
    var match = +(i > 0);
    if (match !== 0) {
      var theta = by * i;
      return /* :: */[
              /* record */[
                /* color */color,
                /* behavior : Normal */0,
                /* warmup : tuple */[
                  0,
                  20
                ],
                /* damage */damage,
                /* size */size,
                /* vel : float array */[
                  speed,
                  theta
                ],
                /* acc */MyUtils.v0,
                /* pos */bullet[/* pos */7]
              ],
              loop(i - 1 | 0)
            ];
    } else {
      return /* [] */0;
    }
  };
  return loop(count);
}

function stepBullets(state, env) {
  var player = state[/* me */4];
  var newrecord = state.slice();
  return List.fold_left((function (state, bullet) {
                var match = state[/* status */0];
                if (typeof match === "number") {
                  if (match !== 0) {
                    return bulletToEnemiesAndBullets(moveBullet(bullet, env), state, env);
                  } else {
                    var match$1 = MyUtils.vecToward(bullet[/* pos */7], player[/* pos */0]);
                    var mag = match$1[/* mag */0];
                    if (mag < bullet[/* size */4] + player[/* size */6]) {
                      if ((state[/* me */4][/* health */2] - bullet[/* damage */3] | 0) > 0) {
                        var newrecord = state.slice();
                        var newrecord$1 = state[/* me */4].slice();
                        newrecord$1[/* health */2] = state[/* me */4][/* health */2] - bullet[/* damage */3] | 0;
                        newrecord[/* me */4] = newrecord$1;
                        newrecord[/* explosions */7] = /* :: */[
                          GravShared.bulletExplosion(bullet),
                          state[/* explosions */7]
                        ];
                        return newrecord;
                      } else {
                        var newrecord$2 = state[/* me */4].slice();
                        return /* record */[
                                /* status : Dead */[100],
                                /* level */state[/* level */1],
                                /* font */state[/* font */2],
                                /* levels */state[/* levels */3],
                                /* me */(newrecord$2[/* health */2] = 0, newrecord$2),
                                /* enemies */state[/* enemies */5],
                                /* bullets */state[/* bullets */6],
                                /* explosions : :: */[
                                  GravShared.playerExplosion(player),
                                  /* :: */[
                                    GravShared.bulletExplosion(bullet),
                                    state[/* explosions */7]
                                  ]
                                ]
                              ];
                      }
                    } else {
                      var acc = /* float array */[
                        20 / mag,
                        match$1[/* theta */1]
                      ];
                      var vel = MyUtils.vecAdd(bullet[/* vel */5], acc);
                      var pos = MyUtils.posAdd(bullet[/* pos */7], MyUtils.vecToPos(vel));
                      var match$2 = MyUtils.stepTimer(bullet[/* warmup */2], env);
                      var warmup = match$2[0];
                      if (match$2[1]) {
                        var match$3 = bullet[/* behavior */1];
                        if (match$3) {
                          var bulletConfig = match$3[2];
                          var count = match$3[0];
                          var match$4 = MyUtils.stepTimer(match$3[1], env);
                          if (match$4[1]) {
                            var newrecord$3 = state.slice();
                            newrecord$3[/* bullets */6] = Pervasives.$at(makeScatterBullets(bullet, bulletConfig, count), state[/* bullets */6]);
                            return newrecord$3;
                          } else {
                            return bulletToEnemiesAndBullets(/* record */[
                                        /* color */bullet[/* color */0],
                                        /* behavior : Scatter */[
                                          count,
                                          match$4[0],
                                          bulletConfig
                                        ],
                                        /* warmup */warmup,
                                        /* damage */bullet[/* damage */3],
                                        /* size */bullet[/* size */4],
                                        /* vel */vel,
                                        /* acc */acc,
                                        /* pos */pos
                                      ], state, env);
                          }
                        } else {
                          return bulletToEnemiesAndBullets(/* record */[
                                      /* color */bullet[/* color */0],
                                      /* behavior */bullet[/* behavior */1],
                                      /* warmup */warmup,
                                      /* damage */bullet[/* damage */3],
                                      /* size */bullet[/* size */4],
                                      /* vel */vel,
                                      /* acc */acc,
                                      /* pos */pos
                                    ], state, env);
                        }
                      } else {
                        var newrecord$4 = state.slice();
                        newrecord$4[/* bullets */6] = /* :: */[
                          /* record */[
                            /* color */bullet[/* color */0],
                            /* behavior */bullet[/* behavior */1],
                            /* warmup */warmup,
                            /* damage */bullet[/* damage */3],
                            /* size */bullet[/* size */4],
                            /* vel */vel,
                            /* acc */acc,
                            /* pos */pos
                          ],
                          state[/* bullets */6]
                        ];
                        return newrecord$4;
                      }
                    }
                  }
                } else {
                  return bulletToEnemiesAndBullets(moveBullet(bullet, env), state, env);
                }
              }), (newrecord[/* bullets */6] = /* [] */0, newrecord), state[/* bullets */6]);
}

function stepExplosions(explosions, env) {
  return List.fold_left((function (explosions, explosion) {
                var match = MyUtils.stepTimer(explosion[/* timer */2], env);
                if (match[1] !== 0) {
                  return explosions;
                } else {
                  return /* :: */[
                          /* record */[
                            /* pos */explosion[/* pos */0],
                            /* color */explosion[/* color */1],
                            /* timer */match[0],
                            /* size */explosion[/* size */3]
                          ],
                          explosions
                        ];
                }
              }), /* [] */0, explosions);
}

exports.arrowAccs                 = arrowAccs;
exports.floatPos                  = floatPos;
exports.clampVec                  = clampVec;
exports.springToward              = springToward;
exports.randomTarget              = randomTarget;
exports.stepMeMouse               = stepMeMouse;
exports.stepMeJoystick            = stepMeJoystick;
exports.stepMeKeys                = stepMeKeys;
exports.stepEnemy                 = stepEnemy;
exports.stepEnemies               = stepEnemies;
exports.moveBullet                = moveBullet;
exports.bulletToBullet            = bulletToBullet;
exports.asteroidSplitVel          = asteroidSplitVel;
exports.bulletToEnemiesAndBullets = bulletToEnemiesAndBullets;
exports.makeScatterBullets        = makeScatterBullets;
exports.stepBullets               = stepBullets;
exports.stepExplosions            = stepExplosions;
/* arrowAccs Not a pure module */


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var Block                  = __webpack_require__(5);
var DrawUtils              = __webpack_require__(44);
var ScreenManager          = __webpack_require__(23);
var Reprocessing_Env       = __webpack_require__(4);
var Reprocessing_Draw      = __webpack_require__(11);
var Reprocessing_Constants = __webpack_require__(6);

function initialState(won) {
  return /* tuple */[
          won,
          0
        ];
}

function screen_000(ctx, param, env) {
  var animate = param[1];
  var won = param[0];
  Reprocessing_Draw.background(Reprocessing_Constants.black, env);
  var w = Reprocessing_Env.width(env) / 2 | 0;
  var h = (Reprocessing_Env.height(env) / 2 | 0) - 50 | 0;
  var percent = animate / 50;
  var y = (h - -50) * percent + -50 | 0;
  DrawUtils.centerText(/* tuple */[
        w,
        y
      ], ctx[/* titleFont */5], won !== 0 ? "You won!" : "You lost...", env);
  var delta = Reprocessing_Env.deltaTime(env) * 1000 / 16;
  if (animate + delta < 50) {
    return /* Same */Block.__(0, [
              ctx,
              /* tuple */[
                won,
                animate + delta
              ]
            ]);
  } else {
    return /* Same */Block.__(0, [
              ctx,
              /* tuple */[
                won,
                50
              ]
            ]);
  }
}

var screen_001 = /* keyPressed */ScreenManager.empty[/* keyPressed */1];

function screen_002(ctx, state, _) {
  if (state[1] === 50) {
    return /* Transition */Block.__(1, [
              ctx,
              /* Quit */904096751
            ]);
  } else {
    return /* Same */Block.__(0, [
              ctx,
              state
            ]);
  }
}

var screen = /* record */[
  screen_000,
  screen_001,
  screen_002
];

var max = 50;

exports.max          = max;
exports.initialState = initialState;
exports.screen       = screen;
/* DrawUtils Not a pure module */


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var List                   = __webpack_require__(7);
var Block                  = __webpack_require__(5);
var MyUtils                = __webpack_require__(13);
var Caml_array             = __webpack_require__(12);
var Caml_int32             = __webpack_require__(3);
var GravLevels             = __webpack_require__(43);
var GravShared             = __webpack_require__(16);
var Pervasives             = __webpack_require__(2);
var ScreenManager          = __webpack_require__(23);
var Reprocessing_Env       = __webpack_require__(4);
var Reprocessing_Draw      = __webpack_require__(11);
var Reprocessing_Utils     = __webpack_require__(30);
var Reprocessing_Constants = __webpack_require__(6);

function buttonsInPosition(ctx, env) {
  var buttons = /* [] */0;
  var w = Reprocessing_Env.width(env);
  var rowSize = (w - 10 | 0) / 110 | 0;
  var levels = GravLevels.getLevels(env);
  for(var i = 0 ,i_finish = levels.length - 1 | 0; i <= i_finish; ++i){
    var col = Caml_int32.mod_(i, rowSize);
    var row = Caml_int32.div(i, rowSize);
    var x = Caml_int32.imul(col, 110) + 10 | 0;
    var y = Caml_int32.imul(row, 110) + 10 | 0;
    var match = +((ctx[/* highestBeatenLevel */0] + 1 | 0) > i);
    var tmp;
    if (match !== 0) {
      tmp = /* Beaten */2;
    } else {
      var match$1 = +((ctx[/* highestBeatenLevel */0] + 1 | 0) === i);
      tmp = match$1 !== 0 ? /* Available */1 : /* Locked */0;
    }
    buttons = /* :: */[
      /* record */[
        /* text */Pervasives.string_of_int(i + 1 | 0),
        /* pos : tuple */[
          x,
          y
        ],
        /* width */100,
        /* height */100,
        /* i */i,
        /* status */tmp,
        /* enemies */Caml_array.caml_array_get(levels, i)
      ],
      buttons
    ];
  }
  return buttons;
}

function center(param, w, h) {
  return /* tuple */[
          param[0] + (w / 2 | 0) | 0,
          param[1] + (h / 2 | 0) | 0
        ];
}

function drawEnemySquare(env, enemies, param, w, h) {
  var fullW = Reprocessing_Env.width(env);
  var fullH = Reprocessing_Env.height(env);
  var scaleX = MyUtils.flDiv(w, fullW);
  var scaleY = MyUtils.flDiv(h, fullH);
  Reprocessing_Draw.pushMatrix(env);
  Reprocessing_Draw.translate(param[0], param[1], env);
  Reprocessing_Draw.scale(scaleX, scaleY, env);
  List.iter((function (enemy) {
          Reprocessing_Draw.noFill(env);
          Reprocessing_Draw.stroke(enemy[/* color */1], env);
          Reprocessing_Draw.strokeWeight(20, env);
          return GravShared.circle(enemy[/* pos */0], enemy[/* size */2] * 2)(env);
        }), enemies);
  return Reprocessing_Draw.popMatrix(env);
}

var screen = ScreenManager.stateless(/* Some */[(function (ctx, env) {
          Reprocessing_Draw.background(Reprocessing_Constants.black, env);
          List.iter((function (param) {
                  var status = param[/* status */5];
                  var height = param[/* height */3];
                  var width = param[/* width */2];
                  var pos = param[/* pos */1];
                  if (status === /* Beaten */2) {
                    drawEnemySquare(env, param[/* enemies */6], pos, width, height);
                  } else {
                    Reprocessing_Draw.fill(Reprocessing_Utils.color(50, 50, 50, 255), env);
                    Reprocessing_Draw.noStroke(env);
                    Reprocessing_Draw.rect(pos, width, height, env);
                  }
                  Reprocessing_Draw.noFill(env);
                  var tmp;
                  switch (status) {
                    case 0 : 
                        tmp = Reprocessing_Utils.color(100, 100, 100, 255);
                        break;
                    case 1 : 
                        tmp = Reprocessing_Constants.white;
                        break;
                    case 2 : 
                        tmp = Reprocessing_Constants.green;
                        break;
                    
                  }
                  Reprocessing_Draw.stroke(tmp, env);
                  Reprocessing_Draw.strokeWeight(1, env);
                  return Reprocessing_Draw.rect(pos, width, height, env);
                }), buttonsInPosition(ctx, env));
          return /* Stateless */Block.__(2, [ctx]);
        })], /* Some */[(function (ctx, env) {
          var res = List.fold_left((function (current, param) {
                  if (current) {
                    return current;
                  } else if (param[/* status */5] !== /* Locked */0 && MyUtils.rectCollide(Reprocessing_Env.mouse(env), /* tuple */[
                          param[/* pos */1],
                          /* tuple */[
                            param[/* width */2],
                            param[/* height */3]
                          ]
                        ])) {
                    return /* Some */[param[/* i */4]];
                  } else {
                    return /* None */0;
                  }
                }), /* None */0, buttonsInPosition(ctx, env));
          if (res) {
            return /* Transition */Block.__(1, [
                      ctx,
                      /* `StartFromLevel */[
                        -260283624,
                        res[0]
                      ]
                    ]);
          } else {
            return /* Stateless */Block.__(2, [ctx]);
          }
        })], /* Some */[(function (ctx, env) {
          var match = Reprocessing_Env.keyCode(env);
          if (match !== 3) {
            return /* Stateless */Block.__(2, [ctx]);
          } else {
            return /* Transition */Block.__(1, [
                      ctx,
                      /* Quit */904096751
                    ]);
          }
        })], /* () */0);

var initialState = /* () */0;

exports.initialState      = initialState;
exports.buttonsInPosition = buttonsInPosition;
exports.center            = center;
exports.drawEnemySquare   = drawEnemySquare;
exports.screen            = screen;
/* screen Not a pure module */


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.1, PLEASE EDIT WITH CARE


var $$Array                = __webpack_require__(29);
var Block                  = __webpack_require__(5);
var MyUtils                = __webpack_require__(13);
var DrawUtils              = __webpack_require__(44);
var Caml_int32             = __webpack_require__(3);
var Reprocessing_Env       = __webpack_require__(4);
var Reprocessing_Draw      = __webpack_require__(11);
var Reprocessing_Constants = __webpack_require__(6);

function initialState() {
  return /* () */0;
}

var buttons = /* array */[
  /* tuple */[
    "Start",
    /* Start */389604418
  ],
  /* tuple */[
    "Pick level",
    /* PickLevel */-1011962685
  ]
];

function buttonsWithPosition(env, buttons) {
  var w = Reprocessing_Env.width(env) / 2 | 0;
  var h = (Reprocessing_Env.height(env) / 2 | 0) - 150 | 0;
  var x = w - 75 | 0;
  var y0 = h + 90 | 0;
  return $$Array.mapi((function (i, button) {
                var y = y0 + Caml_int32.imul(i, 70) | 0;
                return /* tuple */[
                        /* tuple */[
                          x,
                          y
                        ],
                        button
                      ];
              }), buttons);
}

function run(ctx, env) {
  Reprocessing_Draw.background(Reprocessing_Constants.black, env);
  var w = Reprocessing_Env.width(env) / 2 | 0;
  var h = (Reprocessing_Env.height(env) / 2 | 0) - 150 | 0;
  DrawUtils.centerText(/* tuple */[
        w,
        h
      ], ctx[/* titleFont */5], "Gravitron", env);
  $$Array.iter((function (param) {
          var match = param[0];
          var y = match[1];
          var x = match[0];
          Reprocessing_Draw.stroke(Reprocessing_Constants.white, env);
          Reprocessing_Draw.strokeWeight(3, env);
          Reprocessing_Draw.noFill(env);
          Reprocessing_Draw.rect(/* tuple */[
                x,
                y
              ], 150, 50, env);
          return DrawUtils.centerText(/* tuple */[
                      x + 75 | 0,
                      y + 10 | 0
                    ], ctx[/* textFont */4], param[1][0], env);
        }), buttonsWithPosition(env, buttons));
  return /* () */0;
}

function screen_000(ctx, _, env) {
  return /* Same */Block.__(0, [
            ctx,
            run(ctx, env)
          ]);
}

function screen_001(ctx, _, _$1) {
  return /* Same */Block.__(0, [
            ctx,
            /* () */0
          ]);
}

function screen_002(ctx, _, env) {
  var dest = $$Array.fold_left((function (current, param) {
          if (current) {
            return current;
          } else if (MyUtils.rectCollide(Reprocessing_Env.mouse(env), /* tuple */[
                  param[0],
                  /* tuple */[
                    150,
                    50
                  ]
                ])) {
            return /* Some */[param[1][1]];
          } else {
            return /* None */0;
          }
        }), /* None */0, buttonsWithPosition(env, buttons));
  if (dest) {
    return /* Transition */Block.__(1, [
              ctx,
              dest[0]
            ]);
  } else {
    return /* Same */Block.__(0, [
              ctx,
              /* () */0
            ]);
  }
}

var screen = /* record */[
  screen_000,
  screen_001,
  screen_002
];

var buttonWidth = 150;

var buttonHeight = 50;

exports.initialState        = initialState;
exports.buttonWidth         = buttonWidth;
exports.buttonHeight        = buttonHeight;
exports.buttons             = buttons;
exports.buttonsWithPosition = buttonsWithPosition;
exports.run                 = run;
exports.screen              = screen;
/* MyUtils Not a pure module */


/***/ })
/******/ ]);