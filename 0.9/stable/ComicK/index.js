"use strict";
var source = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/base64-js/index.js
  var require_base64_js = __commonJS({
    "node_modules/base64-js/index.js"(exports) {
      "use strict";
      init_buffer();
      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }
      var i;
      var len;
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1) validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i2;
        for (i2 = 0; i2 < len2; i2 += 4) {
          tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i2 = start; i2 < end; i2 += 3) {
          tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
          );
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
          );
        }
        return parts.join("");
      }
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/ieee754/index.js"(exports) {
      init_buffer();
      exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };
      exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
        }
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
        }
        buffer[offset + i - d] |= s * 128;
      };
    }
  });

  // node_modules/buffer/index.js
  var require_buffer = __commonJS({
    "node_modules/buffer/index.js"(exports) {
      "use strict";
      init_buffer();
      var base64 = require_base64_js();
      var ieee754 = require_ieee754();
      var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
      exports.Buffer = Buffer3;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 2147483647;
      exports.kMaxLength = K_MAX_LENGTH;
      Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
      }
      function typedArraySupport() {
        try {
          const arr = new Uint8Array(1);
          const proto = { foo: function() {
            return 42;
          } };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }
      Object.defineProperty(Buffer3.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (!Buffer3.isBuffer(this)) return void 0;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer3.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (!Buffer3.isBuffer(this)) return void 0;
          return this.byteOffset;
        }
      });
      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        }
        const buf = new Uint8Array(length);
        Object.setPrototypeOf(buf, Buffer3.prototype);
        return buf;
      }
      function Buffer3(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          if (typeof encodingOrOffset === "string") {
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          }
          return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
      }
      Buffer3.poolSize = 8192;
      function from(value, encodingOrOffset, length) {
        if (typeof value === "string") {
          return fromString(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }
        if (value == null) {
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
          );
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === "number") {
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
          return Buffer3.from(valueOf, encodingOrOffset, length);
        }
        const b = fromObject(value);
        if (b) return b;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
          return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
        }
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      Buffer3.from = function(value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      };
      Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer3, Uint8Array);
      function assertSize(size) {
        if (typeof size !== "number") {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }
      function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer(size);
        }
        if (fill !== void 0) {
          return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
      }
      Buffer3.alloc = function(size, fill, encoding) {
        return alloc(size, fill, encoding);
      };
      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }
      Buffer3.allocUnsafe = function(size) {
        return allocUnsafe(size);
      };
      Buffer3.allocUnsafeSlow = function(size) {
        return allocUnsafe(size);
      };
      function fromString(string, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
          encoding = "utf8";
        }
        if (!Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        const length = byteLength(string, encoding) | 0;
        let buf = createBuffer(length);
        const actual = buf.write(string, encoding);
        if (actual !== length) {
          buf = buf.slice(0, actual);
        }
        return buf;
      }
      function fromArrayLike(array) {
        const length = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf = createBuffer(length);
        for (let i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }
        return buf;
      }
      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          const copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
      }
      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }
        let buf;
        if (byteOffset === void 0 && length === void 0) {
          buf = new Uint8Array(array);
        } else if (length === void 0) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        }
        Object.setPrototypeOf(buf, Buffer3.prototype);
        return buf;
      }
      function fromObject(obj) {
        if (Buffer3.isBuffer(obj)) {
          const len = checked(obj.length) | 0;
          const buf = createBuffer(len);
          if (buf.length === 0) {
            return buf;
          }
          obj.copy(buf, 0, 0, len);
          return buf;
        }
        if (obj.length !== void 0) {
          if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }
          return fromArrayLike(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }
      function checked(length) {
        if (length >= K_MAX_LENGTH) {
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
        }
        return length | 0;
      }
      function SlowBuffer(length) {
        if (+length != length) {
          length = 0;
        }
        return Buffer3.alloc(+length);
      }
      Buffer3.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true && b !== Buffer3.prototype;
      };
      Buffer3.compare = function compare(a, b) {
        if (isInstance(a, Uint8Array)) a = Buffer3.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array)) b = Buffer3.from(b, b.offset, b.byteLength);
        if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        }
        if (a === b) return 0;
        let x = a.length;
        let y = b.length;
        for (let i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      Buffer3.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      Buffer3.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer3.alloc(0);
        }
        let i;
        if (length === void 0) {
          length = 0;
          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }
        const buffer = Buffer3.allocUnsafe(length);
        let pos = 0;
        for (i = 0; i < list.length; ++i) {
          let buf = list[i];
          if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
              if (!Buffer3.isBuffer(buf)) buf = Buffer3.from(buf);
              buf.copy(buffer, pos);
            } else {
              Uint8Array.prototype.set.call(
                buffer,
                buf,
                pos
              );
            }
          } else if (!Buffer3.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer3.isBuffer(string)) {
          return string.length;
        }
        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
          return string.byteLength;
        }
        if (typeof string !== "string") {
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
          );
        }
        const len = string.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0) return 0;
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
              return len;
            case "utf8":
            case "utf-8":
              return utf8ToBytes(string).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return len * 2;
            case "hex":
              return len >>> 1;
            case "base64":
              return base64ToBytes(string).length;
            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string).length;
              }
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer3.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        let loweredCase = false;
        if (start === void 0 || start < 0) {
          start = 0;
        }
        if (start > this.length) {
          return "";
        }
        if (end === void 0 || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
          return "";
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
          return "";
        }
        if (!encoding) encoding = "utf8";
        while (true) {
          switch (encoding) {
            case "hex":
              return hexSlice(this, start, end);
            case "utf8":
            case "utf-8":
              return utf8Slice(this, start, end);
            case "ascii":
              return asciiSlice(this, start, end);
            case "latin1":
            case "binary":
              return latin1Slice(this, start, end);
            case "base64":
              return base64Slice(this, start, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return utf16leSlice(this, start, end);
            default:
              if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
              encoding = (encoding + "").toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer3.prototype._isBuffer = true;
      function swap(b, n, m) {
        const i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer3.prototype.swap16 = function swap16() {
        const len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (let i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };
      Buffer3.prototype.swap32 = function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (let i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer3.prototype.swap64 = function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (let i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer3.prototype.toString = function toString() {
        const length = this.length;
        if (length === 0) return "";
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
      Buffer3.prototype.equals = function equals(b) {
        if (!Buffer3.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
        if (this === b) return true;
        return Buffer3.compare(this, b) === 0;
      };
      Buffer3.prototype.inspect = function inspect() {
        let str = "";
        const max = exports.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max) str += " ... ";
        return "<Buffer " + str + ">";
      };
      if (customInspectSymbol) {
        Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
      }
      Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer3.from(target, target.offset, target.byteLength);
        }
        if (!Buffer3.isBuffer(target)) {
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
          );
        }
        if (start === void 0) {
          start = 0;
        }
        if (end === void 0) {
          end = target ? target.length : 0;
        }
        if (thisStart === void 0) {
          thisStart = 0;
        }
        if (thisEnd === void 0) {
          thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        let x = thisEnd - thisStart;
        let y = end - start;
        const len = Math.min(x, y);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start, end);
        for (let i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (buffer.length === 0) return -1;
        if (typeof byteOffset === "string") {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 2147483647) {
          byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
          byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer.length - 1;
        }
        if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir) return -1;
          else byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir) byteOffset = 0;
          else return -1;
        }
        if (typeof val === "string") {
          val = Buffer3.from(val, encoding);
        }
        if (Buffer3.isBuffer(val)) {
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
          val = val & 255;
          if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== void 0) {
          encoding = String(encoding).toLowerCase();
          if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i2) {
          if (indexSize === 1) {
            return buf[i2];
          } else {
            return buf.readUInt16BE(i2 * indexSize);
          }
        }
        let i;
        if (dir) {
          let foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1) foundIndex = i;
              if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1) i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            let found = true;
            for (let j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }
            if (found) return i;
          }
        }
        return -1;
      }
      Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };
      Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        const remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }
        const strLen = string.length;
        if (length > strLen / 2) {
          length = strLen / 2;
        }
        let i;
        for (i = 0; i < length; ++i) {
          const parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer3.prototype.write = function write(string, offset, length, encoding) {
        if (offset === void 0) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (length === void 0 && typeof offset === "string") {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === void 0) encoding = "utf8";
          } else {
            encoding = length;
            length = void 0;
          }
        } else {
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        }
        const remaining = this.length - offset;
        if (length === void 0 || length > remaining) length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding) encoding = "utf8";
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "hex":
              return hexWrite(this, string, offset, length);
            case "utf8":
            case "utf-8":
              return utf8Write(this, string, offset, length);
            case "ascii":
            case "latin1":
            case "binary":
              return asciiWrite(this, string, offset, length);
            case "base64":
              return base64Write(this, string, offset, length);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ucs2Write(this, string, offset, length);
            default:
              if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };
      Buffer3.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        const res = [];
        let i = start;
        while (i < end) {
          const firstByte = buf[i];
          let codePoint = null;
          let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 128) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 192) === 128) {
                  tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                  if (tempCodePoint > 127) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                  if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                  if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        const len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
          );
        }
        return res;
      }
      function asciiSlice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 127);
        }
        return ret;
      }
      function latin1Slice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }
        return ret;
      }
      function hexSlice(buf, start, end) {
        const len = buf.length;
        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;
        let out = "";
        for (let i = start; i < end; ++i) {
          out += hexSliceLookupTable[buf[i]];
        }
        return out;
      }
      function utf16leSlice(buf, start, end) {
        const bytes = buf.slice(start, end);
        let res = "";
        for (let i = 0; i < bytes.length - 1; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }
      Buffer3.prototype.slice = function slice(start, end) {
        const len = this.length;
        start = ~~start;
        end = end === void 0 ? len : ~~end;
        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start) end = start;
        const newBuf = this.subarray(start, end);
        Object.setPrototypeOf(newBuf, Buffer3.prototype);
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        return val;
      };
      Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length);
        }
        let val = this[offset + --byteLength2];
        let mul = 1;
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul;
        }
        return val;
      };
      Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
      };
      Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
        const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
      });
      Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
      });
      Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let i = byteLength2;
        let mul = 1;
        let val = this[offset + --i];
        while (i > 0 && (mul *= 256)) {
          val += this[offset + --i] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128)) return this[offset];
        return (255 - this[offset] + 1) * -1;
      };
      Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
      });
      Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = (first << 24) + // Overflow
        this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
      });
      Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer3.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
      }
      Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let mul = 1;
        let i = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
      };
      Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
      }
      function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
      }
      Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
        if (value < 0) value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };
      Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0) value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer3.isBuffer(target)) throw new TypeError("argument should be a Buffer");
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start;
        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0;
        if (targetStart < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        if (end > this.length) end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }
        const len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
          this.copyWithin(targetStart, start, end);
        } else {
          Uint8Array.prototype.set.call(
            target,
            this.subarray(start, end),
            targetStart
          );
        }
        return len;
      };
      Buffer3.prototype.fill = function fill(val, start, end, encoding) {
        if (typeof val === "string") {
          if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
          }
          if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
          }
          if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") {
              val = code;
            }
          }
        } else if (typeof val === "number") {
          val = val & 255;
        } else if (typeof val === "boolean") {
          val = Number(val);
        }
        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError("Out of range index");
        }
        if (end <= start) {
          return this;
        }
        start = start >>> 0;
        end = end === void 0 ? this.length : end >>> 0;
        if (!val) val = 0;
        let i;
        if (typeof val === "number") {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
          const len = bytes.length;
          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }
        return this;
      };
      var errors = {};
      function E(sym, getMessage, Base) {
        errors[sym] = class NodeError extends Base {
          constructor() {
            super();
            Object.defineProperty(this, "message", {
              value: getMessage.apply(this, arguments),
              writable: true,
              configurable: true
            });
            this.name = `${this.name} [${sym}]`;
            this.stack;
            delete this.name;
          }
          get code() {
            return sym;
          }
          set code(value) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${sym}]: ${this.message}`;
          }
        };
      }
      E(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function(name) {
          if (name) {
            return `${name} is outside of buffer bounds`;
          }
          return "Attempt to access memory outside buffer bounds";
        },
        RangeError
      );
      E(
        "ERR_INVALID_ARG_TYPE",
        function(name, actual) {
          return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
        },
        TypeError
      );
      E(
        "ERR_OUT_OF_RANGE",
        function(str, range, input) {
          let msg = `The value of "${str}" is out of range.`;
          let received = input;
          if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input));
          } else if (typeof input === "bigint") {
            received = String(input);
            if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
              received = addNumericalSeparator(received);
            }
            received += "n";
          }
          msg += ` It must be ${range}. Received ${received}`;
          return msg;
        },
        RangeError
      );
      function addNumericalSeparator(val) {
        let res = "";
        let i = val.length;
        const start = val[0] === "-" ? 1 : 0;
        for (; i >= start + 4; i -= 3) {
          res = `_${val.slice(i - 3, i)}${res}`;
        }
        return `${val.slice(0, i)}${res}`;
      }
      function checkBounds(buf, offset, byteLength2) {
        validateNumber(offset, "offset");
        if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
          boundsError(offset, buf.length - (byteLength2 + 1));
        }
      }
      function checkIntBI(value, min, max, buf, offset, byteLength2) {
        if (value > max || value < min) {
          const n = typeof min === "bigint" ? "n" : "";
          let range;
          if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
              range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
            } else {
              range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
            }
          } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
          }
          throw new errors.ERR_OUT_OF_RANGE("value", range, value);
        }
        checkBounds(buf, offset, byteLength2);
      }
      function validateNumber(value, name) {
        if (typeof value !== "number") {
          throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
      }
      function boundsError(value, length, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
        }
        if (length < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(
          type || "offset",
          `>= ${type ? 1 : 0} and <= ${length}`,
          value
        );
      }
      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while (str.length % 4 !== 0) {
          str = str + "=";
        }
        return str;
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        let codePoint;
        const length = string.length;
        let leadSurrogate = null;
        const bytes = [];
        for (let i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                continue;
              } else if (i + 1 === length) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
          }
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(
              codePoint >> 6 | 192,
              codePoint & 63 | 128
            );
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(
              codePoint >> 12 | 224,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(
              codePoint >> 18 | 240,
              codePoint >> 12 & 63 | 128,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else {
            throw new Error("Invalid code point");
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          byteArray.push(str.charCodeAt(i) & 255);
        }
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        let c, hi, lo;
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        let i;
        for (i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }
      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }
      function numberIsNaN(obj) {
        return obj !== obj;
      }
      var hexSliceLookupTable = function() {
        const alphabet = "0123456789abcdef";
        const table = new Array(256);
        for (let i = 0; i < 16; ++i) {
          const i16 = i * 16;
          for (let j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet[i] + alphabet[j];
          }
        }
        return table;
      }();
      function defineBigIntMethod(fn) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
      }
      function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
      }
    }
  });

  // node_modules/@paperback/toolchain/dist/shims/buffer.js
  var Buffer2;
  var init_buffer = __esm({
    "node_modules/@paperback/toolchain/dist/shims/buffer.js"() {
      Buffer2 = require_buffer().Buffer;
    }
  });

  // node_modules/@paperback/types/lib/impl/SettingsUI/Form.js
  var require_Form = __commonJS({
    "node_modules/@paperback/types/lib/impl/SettingsUI/Form.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Form = void 0;
      var Form3 = class {
        reloadForm() {
          const formId = this["__underlying_formId"];
          if (!formId)
            return;
          Application.formDidChange(formId);
        }
        // If this returns true, the app will display `Submit` and `Cancel` buttons
        // and call the relevant methods when they are pressed
        get requiresExplicitSubmission() {
          return false;
        }
      };
      exports.Form = Form3;
    }
  });

  // node_modules/@paperback/types/lib/impl/SettingsUI/FormItemElement.js
  var require_FormItemElement = __commonJS({
    "node_modules/@paperback/types/lib/impl/SettingsUI/FormItemElement.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LabelRow = LabelRow;
      exports.InputRow = InputRow2;
      exports.StepperRow = StepperRow;
      exports.ToggleRow = ToggleRow2;
      exports.SelectRow = SelectRow2;
      exports.ButtonRow = ButtonRow2;
      exports.WebViewRow = WebViewRow;
      exports.NavigationRow = NavigationRow2;
      exports.OAuthButtonRow = OAuthButtonRow;
      exports.DeferredItem = DeferredItem;
      function LabelRow(id, props) {
        return { ...props, id, type: "labelRow", isHidden: props.isHidden ?? false };
      }
      function InputRow2(id, props) {
        return { ...props, id, type: "inputRow", isHidden: props.isHidden ?? false };
      }
      function StepperRow(id, props) {
        return {
          ...props,
          id,
          type: "stepperRow",
          isHidden: props.isHidden ?? false
        };
      }
      function ToggleRow2(id, props) {
        return { ...props, id, type: "toggleRow", isHidden: props.isHidden ?? false };
      }
      function SelectRow2(id, props) {
        return { ...props, id, type: "selectRow", isHidden: props.isHidden ?? false };
      }
      function ButtonRow2(id, props) {
        return { ...props, id, type: "buttonRow", isHidden: props.isHidden ?? false };
      }
      function WebViewRow(id, props) {
        return {
          ...props,
          id,
          type: "webViewRow",
          isHidden: props.isHidden ?? false
        };
      }
      function NavigationRow2(id, props) {
        return {
          ...props,
          id,
          type: "navigationRow",
          isHidden: props.isHidden ?? false
        };
      }
      function OAuthButtonRow(id, props) {
        return {
          ...props,
          id,
          type: "oauthButtonRow",
          isHidden: props.isHidden ?? false
        };
      }
      function DeferredItem(work) {
        return work();
      }
    }
  });

  // node_modules/@paperback/types/lib/impl/SettingsUI/FormSection.js
  var require_FormSection = __commonJS({
    "node_modules/@paperback/types/lib/impl/SettingsUI/FormSection.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Section = Section2;
      function Section2(params, items) {
        let info;
        if (typeof params === "string") {
          info = { id: params };
        } else {
          info = params;
        }
        return {
          ...info,
          items: items.filter((x) => x)
        };
      }
    }
  });

  // node_modules/@paperback/types/lib/impl/SettingsUI/index.js
  var require_SettingsUI = __commonJS({
    "node_modules/@paperback/types/lib/impl/SettingsUI/index.js"(exports) {
      "use strict";
      init_buffer();
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_Form(), exports);
      __exportStar(require_FormItemElement(), exports);
      __exportStar(require_FormSection(), exports);
    }
  });

  // node_modules/@paperback/types/lib/impl/interfaces/ChapterProviding.js
  var require_ChapterProviding = __commonJS({
    "node_modules/@paperback/types/lib/impl/interfaces/ChapterProviding.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/impl/interfaces/CloudflareBypassRequestProviding.js
  var require_CloudflareBypassRequestProviding = __commonJS({
    "node_modules/@paperback/types/lib/impl/interfaces/CloudflareBypassRequestProviding.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/impl/interfaces/DiscoverSectionProviding.js
  var require_DiscoverSectionProviding = __commonJS({
    "node_modules/@paperback/types/lib/impl/interfaces/DiscoverSectionProviding.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/impl/interfaces/ManagedCollectionProviding.js
  var require_ManagedCollectionProviding = __commonJS({
    "node_modules/@paperback/types/lib/impl/interfaces/ManagedCollectionProviding.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/impl/interfaces/MangaProgressProviding.js
  var require_MangaProgressProviding = __commonJS({
    "node_modules/@paperback/types/lib/impl/interfaces/MangaProgressProviding.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/impl/interfaces/MangaProviding.js
  var require_MangaProviding = __commonJS({
    "node_modules/@paperback/types/lib/impl/interfaces/MangaProviding.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/impl/interfaces/SearchResultsProviding.js
  var require_SearchResultsProviding = __commonJS({
    "node_modules/@paperback/types/lib/impl/interfaces/SearchResultsProviding.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/impl/interfaces/SettingsFormProviding.js
  var require_SettingsFormProviding = __commonJS({
    "node_modules/@paperback/types/lib/impl/interfaces/SettingsFormProviding.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/impl/interfaces/index.js
  var require_interfaces = __commonJS({
    "node_modules/@paperback/types/lib/impl/interfaces/index.js"(exports) {
      "use strict";
      init_buffer();
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_ChapterProviding(), exports);
      __exportStar(require_CloudflareBypassRequestProviding(), exports);
      __exportStar(require_DiscoverSectionProviding(), exports);
      __exportStar(require_ManagedCollectionProviding(), exports);
      __exportStar(require_MangaProgressProviding(), exports);
      __exportStar(require_MangaProviding(), exports);
      __exportStar(require_SearchResultsProviding(), exports);
      __exportStar(require_SettingsFormProviding(), exports);
    }
  });

  // node_modules/@paperback/types/lib/impl/Application.js
  var require_Application = __commonJS({
    "node_modules/@paperback/types/lib/impl/Application.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/impl/PaperbackInterceptor.js
  var require_PaperbackInterceptor = __commonJS({
    "node_modules/@paperback/types/lib/impl/PaperbackInterceptor.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.PaperbackInterceptor = void 0;
      var PaperbackInterceptor2 = class {
        id;
        constructor(id) {
          this.id = id;
        }
        registerInterceptor() {
          Application.registerInterceptor(this.id, Application.Selector(this, "interceptRequest"), Application.Selector(this, "interceptResponse"));
        }
        unregisterInterceptor() {
          Application.unregisterInterceptor(this.id);
        }
      };
      exports.PaperbackInterceptor = PaperbackInterceptor2;
    }
  });

  // node_modules/@paperback/types/lib/impl/Selector.js
  var require_Selector = __commonJS({
    "node_modules/@paperback/types/lib/impl/Selector.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/impl/Extension.js
  var require_Extension = __commonJS({
    "node_modules/@paperback/types/lib/impl/Extension.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/impl/Lock.js
  var require_Lock = __commonJS({
    "node_modules/@paperback/types/lib/impl/Lock.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.unlock = exports.lock = void 0;
      var promises = {};
      var resolvers = {};
      var lock = async (uid) => {
        if (promises[uid]) {
          await promises[uid];
          await (0, exports.lock)(uid);
          return;
        }
        promises[uid] = new Promise((resolve) => resolvers[uid] = () => {
          delete promises[uid];
          resolve();
        });
      };
      exports.lock = lock;
      var unlock = (uid) => {
        if (resolvers[uid]) {
          resolvers[uid]();
        }
      };
      exports.unlock = unlock;
    }
  });

  // node_modules/@paperback/types/lib/impl/BasicRateLimiter.js
  var require_BasicRateLimiter = __commonJS({
    "node_modules/@paperback/types/lib/impl/BasicRateLimiter.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BasicRateLimiter = void 0;
      var Lock_1 = require_Lock();
      var PaperbackInterceptor_1 = require_PaperbackInterceptor();
      var BasicRateLimiter2 = class extends PaperbackInterceptor_1.PaperbackInterceptor {
        options;
        promise;
        currentRequestsMade = 0;
        lastReset = Date.now();
        imageRegex = new RegExp(/\.(png|gif|jpeg|jpg|webp)(\?|$)/i);
        constructor(id, options) {
          super(id);
          this.options = options;
        }
        async interceptRequest(request) {
          if (this.options.ignoreImages && this.imageRegex.test(request.url)) {
            return request;
          }
          await (0, Lock_1.lock)(this.id);
          await this.incrementRequestCount();
          (0, Lock_1.unlock)(this.id);
          return request;
        }
        async interceptResponse(request, response, data) {
          return data;
        }
        async incrementRequestCount() {
          await this.promise;
          const secondsSinceLastReset = (Date.now() - this.lastReset) / 1e3;
          if (secondsSinceLastReset > this.options.bufferInterval) {
            this.currentRequestsMade = 0;
            this.lastReset = Date.now();
          }
          this.currentRequestsMade += 1;
          if (this.currentRequestsMade >= this.options.numberOfRequests) {
            const secondsSinceLastReset2 = (Date.now() - this.lastReset) / 1e3;
            if (secondsSinceLastReset2 <= this.options.bufferInterval) {
              const sleepTime = this.options.bufferInterval - secondsSinceLastReset2;
              console.log(`[BasicRateLimiter] rate limit hit, sleeping for ${sleepTime}`);
              this.promise = Application.sleep(sleepTime);
            }
          }
        }
      };
      exports.BasicRateLimiter = BasicRateLimiter2;
    }
  });

  // node_modules/@paperback/types/lib/impl/CloudflareError.js
  var require_CloudflareError = __commonJS({
    "node_modules/@paperback/types/lib/impl/CloudflareError.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CloudflareError = void 0;
      var CloudflareError = class extends Error {
        resolutionRequest;
        type = "cloudflareError";
        constructor(resolutionRequest, message = "Cloudflare bypass is required") {
          super(message);
          this.resolutionRequest = resolutionRequest;
        }
      };
      exports.CloudflareError = CloudflareError;
    }
  });

  // node_modules/@paperback/types/lib/impl/URL.js
  var require_URL = __commonJS({
    "node_modules/@paperback/types/lib/impl/URL.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.URL = void 0;
      exports.parseURL = parseURL;
      function parseURL(url) {
        const components = {};
        const regex = /^(?:([a-zA-Z][a-zA-Z\d+\-.]*):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/;
        const match = url.match(regex);
        if (!match) {
          throw new Error("Invalid URL string provided.");
        }
        if (match[1] !== void 0 && match[1] !== "") {
          components.protocol = match[1];
        }
        if (match[2] !== void 0 && match[2] !== "") {
          let authority = match[2];
          let userInfo = "";
          let hostPort = "";
          const atIndex = authority.indexOf("@");
          if (atIndex !== -1) {
            userInfo = authority.substring(0, atIndex);
            hostPort = authority.substring(atIndex + 1);
            if (userInfo !== "") {
              const colonIndex = userInfo.indexOf(":");
              if (colonIndex !== -1) {
                components.username = userInfo.substring(0, colonIndex);
                components.password = userInfo.substring(colonIndex + 1);
              } else {
                components.username = userInfo;
                components.password = "";
              }
            }
          } else {
            hostPort = authority;
          }
          if (hostPort !== "") {
            if (hostPort.startsWith("[")) {
              const closingBracketIndex = hostPort.indexOf("]");
              if (closingBracketIndex === -1) {
                throw new Error("Invalid IPv6 address in URL update.");
              }
              components.hostname = hostPort.substring(0, closingBracketIndex + 1);
              const portPart = hostPort.substring(closingBracketIndex + 1);
              if (portPart.startsWith(":")) {
                components.port = portPart.substring(1);
              }
            } else {
              const colonIndex = hostPort.lastIndexOf(":");
              if (colonIndex !== -1 && hostPort.indexOf(":") === colonIndex) {
                components.hostname = hostPort.substring(0, colonIndex);
                components.port = hostPort.substring(colonIndex + 1);
              } else {
                components.hostname = hostPort;
                components.port = "";
              }
            }
          }
        }
        if (match[3] !== void 0 && match[3] !== "") {
          components.path = match[3].startsWith("/") ? match[3] : `/${match[3]}`;
        }
        if (match[4] !== void 0) {
          const query = {};
          const pairs = match[4].split("&");
          for (const pair of pairs) {
            if (!pair)
              continue;
            const [rawKey, rawValue = ""] = pair.split("=");
            const key = decodeURIComponent(rawKey);
            const value = decodeURIComponent(rawValue);
            if (key in query) {
              const existing = query[key];
              if (Array.isArray(existing)) {
                existing.push(value);
              } else {
                query[key] = [existing, value];
              }
            } else {
              query[key] = value;
            }
          }
          components.queryItems = query;
        }
        if (match[5] !== void 0) {
          components.fragment = match[5];
        }
        return components;
      }
      var URL = class {
        protocol;
        hostname;
        path;
        username;
        password;
        port;
        queryItems = {};
        fragment;
        /**
         * Creates a new SimpleURL instance.
         * @param url - (Optional) A URL string to initialize the instance.
         */
        constructor(url) {
          const components = parseURL(url);
          if (!components.hostname || !components.protocol) {
            throw new Error("URL Hostname and Protocol are required");
          }
          this.hostname = components.hostname;
          this.protocol = components.protocol;
          this.path = components.path ?? "";
          this.username = components.username;
          this.password = components.password;
          this.port = components.port;
          this.queryItems = components.queryItems;
          this.fragment = components.fragment;
        }
        /**
         * Returns the full URL string built from the current components.
         */
        toString() {
          let url = `${this.protocol}://`;
          if (this.username !== void 0 && this.username !== "") {
            url += this.username;
            if (this.password !== void 0 && this.password !== "") {
              url += `:${this.password}`;
            }
            url += "@";
          }
          url += this.hostname;
          if (this.port !== void 0 && this.port !== "") {
            url += `:${this.port}`;
          }
          if (this.path !== "") {
            url += this.path.startsWith("/") ? this.path : `/${this.path}`;
          }
          if (this.queryItems !== void 0) {
            const queryKeys = Object.keys(this.queryItems);
            const params = [];
            if (queryKeys.length > 0) {
              for (const key of queryKeys) {
                const value = this.queryItems[key];
                if (Array.isArray(value)) {
                  for (const v of value) {
                    params.push(`${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
                  }
                } else {
                  params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
                }
              }
            }
            url += `?${params.join("&")}`;
          }
          if (this.fragment !== void 0) {
            url += `#${this.fragment}`;
          }
          return url;
        }
        /**
         * Convenience method to update the protocol.
         */
        setProtocol(newProtocol) {
          if (newProtocol === "")
            throw new Error("Protocol is required");
          this.protocol = newProtocol;
          return this;
        }
        /**
         * Convenience method to update the username.
         */
        setUsername(newUsername) {
          if (newUsername === "")
            this.username = void 0;
          else
            this.username = newUsername;
          return this;
        }
        /**
         * Convenience method to update the password.
         */
        setPassword(newPassword) {
          if (newPassword === "")
            this.password = void 0;
          else
            this.password = newPassword;
          return this;
        }
        /**
         * Convenience method to update the hostname.
         */
        setHostname(newHostname) {
          if (newHostname === "")
            throw new Error("Hostname is required");
          this.hostname = newHostname;
          return this;
        }
        /**
         * Convenience method to update the port.
         */
        setPort(newPort) {
          if (newPort === "")
            this.port = void 0;
          else
            this.port = newPort;
          return this;
        }
        /**
         * Convenience method to update the pathname.
         */
        setPath(newPathname) {
          this.path = newPathname.startsWith("/") ? newPathname : `/${newPathname}`;
          return this;
        }
        addPathComponent(component) {
          this.path = (this.path ?? "") + (component.startsWith("/") ? component : `/${component}`);
          return this;
        }
        /**
         * Replace the entire query object.
         */
        setQueryItems(newQuery) {
          this.queryItems = newQuery;
          return this;
        }
        /**
         * Update or add a single query parameter.
         */
        setQueryItem(key, value) {
          if (this.queryItems === void 0)
            this.queryItems = {};
          this.queryItems[key] = value;
          return this;
        }
        /**
         * Remove a query parameter.
         */
        removeQueryItem(key) {
          delete this.queryItems?.[key];
          return this;
        }
        /**
         * Convenience method to update the hash (fragment).
         */
        setFragment(newHash) {
          this.fragment = newHash;
          return this;
        }
        /**
         * Update the current URL components.
         *
         * Accepts either:
         * - A URL string, which may be a full URL (e.g., "https://example.com/path?foo=bar")
         *   or a partial URL (e.g., "/new/path?foo=bar#section"). In this case, only the components
         *   present in the string will be updated.
         * - A partial UrlComponents object.
         *
         * @param input - A URL string or a partial UrlComponents object.
         */
        update(input) {
          let components;
          if (typeof input === "string") {
            components = parseURL(input);
          } else {
            components = input;
          }
          if (components.protocol !== void 0)
            this.setProtocol(components.protocol);
          if (components.username !== void 0)
            this.setUsername(components.username);
          if (components.password !== void 0)
            this.setPassword(components.password);
          if (components.hostname !== void 0)
            this.setHostname(components.hostname);
          if (components.port !== void 0)
            this.setPort(components.port);
          if (components.path !== void 0)
            this.setPath(components.path);
          if (components.queryItems !== void 0)
            this.setQueryItems(components.queryItems);
          if (components.fragment !== void 0)
            this.setFragment(components.fragment);
          return this;
        }
      };
      exports.URL = URL;
    }
  });

  // node_modules/@paperback/types/lib/impl/CookieStorageInterceptor.js
  var require_CookieStorageInterceptor = __commonJS({
    "node_modules/@paperback/types/lib/impl/CookieStorageInterceptor.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CookieStorageInterceptor = void 0;
      var PaperbackInterceptor_1 = require_PaperbackInterceptor();
      var URL_1 = require_URL();
      var cookieStateKey = "cookie_store_cookies";
      var CookieStorageInterceptor = class extends PaperbackInterceptor_1.PaperbackInterceptor {
        options;
        _cookies = {};
        get cookies() {
          return Object.freeze(Object.values(this._cookies));
        }
        set cookies(newValue) {
          const cookies = {};
          for (const cookie of newValue) {
            if (this.isCookieExpired(cookie)) {
              continue;
            }
            cookies[this.cookieIdentifier(cookie)] = cookie;
          }
          this._cookies = cookies;
          this.saveCookiesToStorage();
        }
        constructor(options) {
          super("cookie_store");
          this.options = options;
          this.loadCookiesFromStorage();
        }
        async interceptRequest(request) {
          request.cookies = {
            // Already set cookies
            ...request.cookies ?? {},
            // Inject all the cookies as { name: value }
            ...this.cookiesForUrl(request.url).reduce((v, c) => {
              v[c.name] = c.value;
              return v;
            }, {})
          };
          return request;
        }
        async interceptResponse(request, response, data) {
          const cookies = this._cookies;
          for (const cookie of response.cookies) {
            const identifier = this.cookieIdentifier(cookie);
            if (this.isCookieExpired(cookie)) {
              delete cookies[identifier];
              continue;
            }
            cookies[identifier] = cookie;
          }
          this._cookies = cookies;
          this.saveCookiesToStorage();
          return data;
        }
        setCookie(cookie) {
          if (this.isCookieExpired(cookie)) {
            return;
          }
          this._cookies[this.cookieIdentifier(cookie)] = cookie;
          this.saveCookiesToStorage();
        }
        deleteCookie(cookie) {
          delete this._cookies[this.cookieIdentifier(cookie)];
        }
        cookiesForUrl(urlString) {
          console.log("[COMPAT] COOKIES FOR URL");
          const url = new URL_1.URL(urlString);
          const hostname = url.hostname;
          if (!hostname) {
            return [];
          }
          const matchedCookies = {};
          const pathname = url.path.startsWith("/") ? url.path : `/${url.path}`;
          const splitHostname = hostname.split(".");
          const splitUrlPath = pathname.split("/");
          splitUrlPath.shift();
          const cookies = this.cookies;
          for (const cookie of cookies) {
            if (this.isCookieExpired(cookie)) {
              delete this._cookies[this.cookieIdentifier(cookie)];
              continue;
            }
            const cookieDomain = this.cookieSanitizedDomain(cookie);
            const splitCookieDomain = cookieDomain.split(".");
            if (splitHostname.length < splitCookieDomain.length || splitCookieDomain.length == 0) {
              continue;
            }
            let cookieDomainMatches = true;
            for (let i = 0; i < splitCookieDomain.length; i++) {
              let splitCookieIndex = splitCookieDomain.length - 1 - i;
              let splitHostnameIndex = splitHostname.length - 1 - i;
              if (splitCookieDomain[splitCookieIndex] != splitHostname[splitHostnameIndex]) {
                cookieDomainMatches = false;
                break;
              }
            }
            if (!cookieDomainMatches) {
              continue;
            }
            const cookiePath = this.cookieSanitizedPath(cookie);
            const splitCookiePath = cookiePath.split("/");
            splitCookiePath.shift();
            let pathMatches = 0;
            if (pathname === cookiePath) {
              pathMatches = Number.MAX_SAFE_INTEGER;
            } else if (splitCookiePath.length === 0 || cookiePath === "/") {
              pathMatches = 1;
            } else if (pathname.startsWith(cookiePath) && splitUrlPath.length >= splitCookiePath.length) {
              for (let i = 0; i < splitCookiePath.length; i++) {
                if (splitCookiePath[i] === splitUrlPath[i]) {
                  pathMatches += 1;
                } else {
                  break;
                }
              }
            }
            if (pathMatches <= 0) {
              continue;
            }
            if ((matchedCookies[cookie.name]?.pathMatches ?? 0) < pathMatches) {
              matchedCookies[cookie.name] = { cookie, pathMatches };
            }
          }
          return Object.values(matchedCookies).map((x) => x.cookie);
        }
        cookieIdentifier(cookie) {
          return `${cookie.name}-${this.cookieSanitizedDomain(cookie)}-${this.cookieSanitizedPath(cookie)}`;
        }
        cookieSanitizedPath(cookie) {
          return cookie.path?.startsWith("/") ? cookie.path : "/" + (cookie.path ?? "");
        }
        cookieSanitizedDomain(cookie) {
          return cookie.domain.replace(/^(www)?\.?/gi, "").toLowerCase();
        }
        isCookieExpired(cookie) {
          if (cookie.expires && cookie.expires.getTime() <= Date.now()) {
            return true;
          } else {
            return false;
          }
        }
        loadCookiesFromStorage() {
          if (this.options.storage == "memory")
            return;
          const cookieData = Application.getState(cookieStateKey);
          if (!cookieData) {
            this._cookies = {};
            return;
          }
          const cookies = {};
          for (const cookie of cookieData) {
            if (!cookie.expires || this.isCookieExpired(cookie))
              continue;
            cookies[this.cookieIdentifier(cookie)] = cookie;
          }
          this._cookies = cookies;
        }
        saveCookiesToStorage() {
          if (this.options.storage == "memory")
            return;
          Application.setState(this.cookies.filter((x) => x.expires), cookieStateKey);
        }
      };
      exports.CookieStorageInterceptor = CookieStorageInterceptor;
    }
  });

  // node_modules/@paperback/types/lib/impl/FormState.js
  var require_FormState = __commonJS({
    "node_modules/@paperback/types/lib/impl/FormState.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createFormState = createFormState2;
      var FormState = class {
        form;
        _value;
        _selector;
        /**
         * Creates a new FormState instance.
         * @param {Form} form - The parent form instance
         * @param {T} initialValue - The initial value of the form field
         */
        constructor(form, initialValue) {
          this.form = form;
          this._value = initialValue;
          this._selector = Application.Selector(this, "updateValue");
        }
        /**
         * Gets the current value of the form field.
         * @returns {T} The current value
         */
        get value() {
          return this._value;
        }
        /**
         * Gets the selector ID for the update function.
         * @returns {SelectorID<(value: T) => Promise<void>>} The selector ID
         */
        get selector() {
          return this._selector;
        }
        /**
         * Updates the form field value and triggers a form reload.
         * @param {T} value - The new value to set
         * @returns {Promise<void>} A promise that resolves when the update is complete
         */
        async updateValue(value) {
          this._value = value;
          this.form.reloadForm();
        }
      };
      function createFormState2(form, initialValue) {
        const state = new FormState(form, initialValue);
        return [() => state.value, state.updateValue.bind(state), state.selector];
      }
    }
  });

  // node_modules/@paperback/types/lib/impl/index.js
  var require_impl = __commonJS({
    "node_modules/@paperback/types/lib/impl/index.js"(exports) {
      "use strict";
      init_buffer();
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_SettingsUI(), exports);
      __exportStar(require_interfaces(), exports);
      __exportStar(require_Application(), exports);
      __exportStar(require_PaperbackInterceptor(), exports);
      __exportStar(require_Selector(), exports);
      __exportStar(require_Extension(), exports);
      __exportStar(require_BasicRateLimiter(), exports);
      __exportStar(require_CloudflareError(), exports);
      __exportStar(require_CookieStorageInterceptor(), exports);
      __exportStar(require_FormState(), exports);
      __exportStar(require_URL(), exports);
    }
  });

  // node_modules/@paperback/types/lib/Chapter.js
  var require_Chapter = __commonJS({
    "node_modules/@paperback/types/lib/Chapter.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/ChapterDetails.js
  var require_ChapterDetails = __commonJS({
    "node_modules/@paperback/types/lib/ChapterDetails.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/Cookie.js
  var require_Cookie = __commonJS({
    "node_modules/@paperback/types/lib/Cookie.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/DiscoverSectionItem.js
  var require_DiscoverSectionItem = __commonJS({
    "node_modules/@paperback/types/lib/DiscoverSectionItem.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/DiscoverSectionType.js
  var require_DiscoverSectionType = __commonJS({
    "node_modules/@paperback/types/lib/DiscoverSectionType.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DiscoverSectionType = void 0;
      var DiscoverSectionType3;
      (function(DiscoverSectionType4) {
        DiscoverSectionType4[DiscoverSectionType4["featured"] = 0] = "featured";
        DiscoverSectionType4[DiscoverSectionType4["simpleCarousel"] = 1] = "simpleCarousel";
        DiscoverSectionType4[DiscoverSectionType4["prominentCarousel"] = 2] = "prominentCarousel";
        DiscoverSectionType4[DiscoverSectionType4["chapterUpdates"] = 3] = "chapterUpdates";
        DiscoverSectionType4[DiscoverSectionType4["genres"] = 4] = "genres";
      })(DiscoverSectionType3 || (exports.DiscoverSectionType = DiscoverSectionType3 = {}));
    }
  });

  // node_modules/@paperback/types/lib/HomeSection.js
  var require_HomeSection = __commonJS({
    "node_modules/@paperback/types/lib/HomeSection.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/MangaInfo.js
  var require_MangaInfo = __commonJS({
    "node_modules/@paperback/types/lib/MangaInfo.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/MangaProgress.js
  var require_MangaProgress = __commonJS({
    "node_modules/@paperback/types/lib/MangaProgress.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/PagedResults.js
  var require_PagedResults = __commonJS({
    "node_modules/@paperback/types/lib/PagedResults.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.EndOfPageResults = void 0;
      exports.EndOfPageResults = Object.freeze({
        items: [],
        metadata: void 0
      });
    }
  });

  // node_modules/@paperback/types/lib/PBCanvas.js
  var require_PBCanvas = __commonJS({
    "node_modules/@paperback/types/lib/PBCanvas.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/PBImage.js
  var require_PBImage = __commonJS({
    "node_modules/@paperback/types/lib/PBImage.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/Request.js
  var require_Request = __commonJS({
    "node_modules/@paperback/types/lib/Request.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/Response.js
  var require_Response = __commonJS({
    "node_modules/@paperback/types/lib/Response.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/SearchFilter.js
  var require_SearchFilter = __commonJS({
    "node_modules/@paperback/types/lib/SearchFilter.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/SearchQuery.js
  var require_SearchQuery = __commonJS({
    "node_modules/@paperback/types/lib/SearchQuery.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/SearchResultItem.js
  var require_SearchResultItem = __commonJS({
    "node_modules/@paperback/types/lib/SearchResultItem.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/SourceInfo.js
  var require_SourceInfo = __commonJS({
    "node_modules/@paperback/types/lib/SourceInfo.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ContentRating = exports.SourceIntents = void 0;
      var SourceIntents;
      (function(SourceIntents2) {
        SourceIntents2[SourceIntents2["MANGA_CHAPTERS"] = 1] = "MANGA_CHAPTERS";
        SourceIntents2[SourceIntents2["MANGA_TRACKING"] = 2] = "MANGA_TRACKING";
        SourceIntents2[SourceIntents2["MANGA_PROGRESS"] = 2] = "MANGA_PROGRESS";
        SourceIntents2[SourceIntents2["HOMEPAGE_SECTIONS"] = 4] = "HOMEPAGE_SECTIONS";
        SourceIntents2[SourceIntents2["DISCOVER_SECIONS"] = 4] = "DISCOVER_SECIONS";
        SourceIntents2[SourceIntents2["COLLECTION_MANAGEMENT"] = 8] = "COLLECTION_MANAGEMENT";
        SourceIntents2[SourceIntents2["CLOUDFLARE_BYPASS_REQUIRED"] = 16] = "CLOUDFLARE_BYPASS_REQUIRED";
        SourceIntents2[SourceIntents2["SETTINGS_UI"] = 32] = "SETTINGS_UI";
        SourceIntents2[SourceIntents2["MANGA_SEARCH"] = 64] = "MANGA_SEARCH";
      })(SourceIntents || (exports.SourceIntents = SourceIntents = {}));
      var ContentRating2;
      (function(ContentRating3) {
        ContentRating3["EVERYONE"] = "SAFE";
        ContentRating3["MATURE"] = "MATURE";
        ContentRating3["ADULT"] = "ADULT";
      })(ContentRating2 || (exports.ContentRating = ContentRating2 = {}));
    }
  });

  // node_modules/@paperback/types/lib/SourceManga.js
  var require_SourceManga = __commonJS({
    "node_modules/@paperback/types/lib/SourceManga.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/Tag.js
  var require_Tag = __commonJS({
    "node_modules/@paperback/types/lib/Tag.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/TagSection.js
  var require_TagSection = __commonJS({
    "node_modules/@paperback/types/lib/TagSection.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/TrackedMangaChapterReadAction.js
  var require_TrackedMangaChapterReadAction = __commonJS({
    "node_modules/@paperback/types/lib/TrackedMangaChapterReadAction.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/SortingOption.js
  var require_SortingOption = __commonJS({
    "node_modules/@paperback/types/lib/SortingOption.js"(exports) {
      "use strict";
      init_buffer();
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@paperback/types/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@paperback/types/lib/index.js"(exports) {
      "use strict";
      init_buffer();
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_impl(), exports);
      __exportStar(require_Chapter(), exports);
      __exportStar(require_ChapterDetails(), exports);
      __exportStar(require_Cookie(), exports);
      __exportStar(require_DiscoverSectionItem(), exports);
      __exportStar(require_DiscoverSectionType(), exports);
      __exportStar(require_HomeSection(), exports);
      __exportStar(require_lib(), exports);
      __exportStar(require_MangaInfo(), exports);
      __exportStar(require_MangaProgress(), exports);
      __exportStar(require_PagedResults(), exports);
      __exportStar(require_PBCanvas(), exports);
      __exportStar(require_PBImage(), exports);
      __exportStar(require_Request(), exports);
      __exportStar(require_Response(), exports);
      __exportStar(require_SearchFilter(), exports);
      __exportStar(require_SearchQuery(), exports);
      __exportStar(require_SearchResultItem(), exports);
      __exportStar(require_SourceInfo(), exports);
      __exportStar(require_SourceManga(), exports);
      __exportStar(require_Tag(), exports);
      __exportStar(require_TagSection(), exports);
      __exportStar(require_TrackedMangaChapterReadAction(), exports);
      __exportStar(require_SortingOption(), exports);
    }
  });

  // src/ComicK/main.ts
  var main_exports = {};
  __export(main_exports, {
    ComicK: () => ComicK,
    ComicKExtension: () => ComicKExtension
  });
  init_buffer();
  var import_types3 = __toESM(require_lib(), 1);

  // src/utils/url-builder/array-query-variant.ts
  init_buffer();

  // src/utils/url-builder/base.ts
  init_buffer();
  var URLBuilder = class {
    baseUrl;
    queryParams = {};
    pathSegments = [];
    constructor(baseUrl) {
      this.baseUrl = baseUrl.replace(/\/+$/, "");
    }
    formatArrayQuery(key, value) {
      return value.length > 0 ? value.map((v) => `${key}[]=${v}`) : [];
    }
    formatObjectQuery(key, value) {
      return Object.entries(value).map(
        ([objKey, objValue]) => objValue !== void 0 ? `${key}[${objKey}]=${objValue}` : void 0
      ).filter((x) => x !== void 0);
    }
    formatQuery(queryParams) {
      return Object.entries(queryParams).flatMap(([key, value]) => {
        if (Array.isArray(value)) {
          return this.formatArrayQuery(key, value);
        }
        if (typeof value === "object") {
          return this.formatObjectQuery(key, value);
        }
        return value === "" ? [] : [`${key}=${value}`];
      }).join("&");
    }
    build() {
      const fullPath = this.pathSegments.length > 0 ? `/${this.pathSegments.join("/")}` : "";
      const queryString = this.formatQuery(this.queryParams);
      if (queryString.length > 0)
        return `${this.baseUrl}${fullPath}?${queryString}`;
      return `${this.baseUrl}${fullPath}`;
    }
    addPath(segment) {
      this.pathSegments.push(segment.replace(/^\/+|\/+$/g, ""));
      return this;
    }
    addQuery(key, value) {
      this.queryParams[key] = value;
      return this;
    }
    reset() {
      this.queryParams = {};
      this.pathSegments = [];
      return this;
    }
  };

  // src/utils/url-builder/array-query-variant.ts
  var URLBuilder2 = class extends URLBuilder {
    formatArrayQuery(key, value) {
      return value.length > 0 ? value.map((v) => `${key}=${v}`) : [];
    }
  };

  // src/ComicK/ComicKParser.ts
  init_buffer();
  var import_types = __toESM(require_lib(), 1);

  // src/ComicK/utils/language.ts
  init_buffer();
  var languages = [
    { code: "all", name: "All Languages" },
    { code: "en", name: "English" },
    { code: "pt-br", name: "Portugu\xEAs do Brasil" },
    { code: "es-419", name: "Espa\xF1ol (Latinoam\xE9rica)" },
    { code: "ru", name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" },
    { code: "fr", name: "Fran\xE7ais" },
    { code: "pl", name: "Polski" },
    { code: "vi", name: "Ti\u1EBFng Vi\u1EC7t" },
    { code: "tr", name: "T\xFCrk\xE7e" },
    { code: "id", name: "Bahasa Indonesia" },
    { code: "it", name: "Italiano" },
    { code: "es", name: "Espa\xF1ol" },
    { code: "ar", name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" },
    { code: "zh-hk", name: "\u7E41\u9AD4\u4E2D\u6587 (\u9999\u6E2F)" },
    { code: "uk", name: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430" },
    { code: "hu", name: "Magyar" },
    { code: "de", name: "Deutsch" },
    { code: "zh", name: "\u4E2D\u6587" },
    { code: "ko", name: "\uD55C\uAD6D\uC5B4" },
    { code: "th", name: "\u0E44\u0E17\u0E22" },
    { code: "bg", name: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438" },
    { code: "ca", name: "Catal\xE0" },
    { code: "fa", name: "\u0641\u0627\u0631\u0633\u06CC" },
    { code: "ro", name: "Rom\xE2n\u0103" },
    { code: "cs", name: "\u010Ce\u0161tina" },
    { code: "mn", name: "\u041C\u043E\u043D\u0433\u043E\u043B" },
    { code: "pt", name: "Portugu\xEAs" },
    { code: "he", name: "\u05E2\u05D1\u05E8\u05D9\u05EA" },
    { code: "hi", name: "\u0939\u093F\u0928\u094D\u0926\u0940" },
    { code: "tl", name: "Tagalog" },
    { code: "ms", name: "Bahasa Melayu" },
    { code: "eu", name: "Euskara" },
    { code: "kk", name: "\u049A\u0430\u0437\u0430\u049B" },
    { code: "sr", name: "\u0421\u0440\u043F\u0441\u043A\u0438" },
    { code: "my", name: "\u1019\u103C\u1014\u103A\u1019\u102C\u1005\u102C" },
    { code: "el", name: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC" },
    { code: "nl", name: "Nederlands" },
    { code: "ja", name: "\u65E5\u672C\u8A9E" },
    { code: "eo", name: "Esperanto" },
    { code: "fi", name: "Suomi" },
    { code: "ka", name: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8" },
    { code: "lt", name: "Lietuvi\u0173" },
    { code: "ta", name: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD" },
    { code: "bn", name: "\u09AC\u09BE\u0982\u09B2\u09BE" },
    { code: "sv", name: "Svenska" },
    { code: "hr", name: "Hrvatski" },
    { code: "la", name: "Latina" },
    { code: "ne", name: "\u0928\u0947\u092A\u093E\u0932\u0940" },
    { code: "cv", name: "\u0427\u04D1\u0432\u0430\u0448" },
    { code: "ur", name: "\u0627\u0631\u062F\u0648" },
    { code: "be", name: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F" },
    { code: "no", name: "Norsk" },
    { code: "sq", name: "Shqip" },
    { code: "te", name: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41" },
    { code: "da", name: "Dansk" },
    { code: "et", name: "Eesti" },
    { code: "ga", name: "Gaeilge" },
    { code: "az", name: "Az\u0259rbaycan" },
    { code: "sk", name: "Sloven\u010Dina" },
    { code: "jv", name: "Basa Jawa" },
    { code: "af", name: "Afrikaans" },
    { code: "sl", name: "Sloven\u0161\u010Dina" },
    { code: "uz", name: "\u040E\u0437\u0431\u0435\u043A" }
  ];
  function getLanguageOptions() {
    return languages.map((lang) => ({
      id: lang.code,
      title: lang.name
    }));
  }
  function getLanguageName(code) {
    return languages.find((language) => language.code == code)?.name ?? "Unknown";
  }

  // src/ComicK/ComicKParser.ts
  var parseMangaDetails = (data, mangaId, apiUrl) => {
    const { comic, authors, artists } = data;
    const titles = [
      comic.title,
      ...comic.md_titles.map((titleObj) => titleObj.title)
    ];
    const tagSections = [];
    const countryTitle = parseComicType(comic.country);
    if (countryTitle) {
      tagSections.push(
        ...parseTags(
          [{ slug: comic.country, name: countryTitle }],
          "type",
          "Type"
        )
      );
    }
    tagSections.push(
      ...parseTags(
        comic.md_comic_md_genres.map((item) => item.md_genres),
        "genres",
        "Genres"
      )
    );
    const mangaInfo = {
      thumbnailUrl: comic.cover_url,
      synopsis: comic.desc ? Application.decodeHTMLEntities(comic.desc) : "",
      primaryTitle: titles[0],
      secondaryTitles: titles,
      contentRating: parseContentRating(comic.content_rating),
      status: parseComicStatus(comic.status),
      author: authors.map((author) => author.name).join(","),
      artist: artists.map((artists2) => artists2.name).join(","),
      tagGroups: tagSections,
      shareUrl: new URLBuilder2(apiUrl).addPath("comic").addPath(mangaId).addQuery("tachiyomi", true).build()
    };
    return {
      mangaId,
      mangaInfo
    };
  };
  function parseChapters(data, sourceManga, filter) {
    const chaptersData = filterChapters(data.chapters, filter);
    let sortingIndex = chaptersData.length;
    return chaptersData.map((chapter) => {
      const chapNum = Number(chapter.chap);
      const volume = Number(chapter.vol);
      const groups = chapter.group_name ?? [];
      return {
        chapterId: chapter.hid,
        sourceManga,
        title: formatChapterTitle(chapter, filter.showTitle),
        chapNum: !isNaN(chapNum) ? chapNum : 0,
        sortingIndex: sortingIndex--,
        volume: filter.showVol && !isNaN(volume) ? volume : void 0,
        publishDate: new Date(chapter.created_at),
        version: groups.join(","),
        langCode: getLanguageName(chapter.lang)
      };
    });
  }
  function parseChapterSinceDate(chapters, sinceDate) {
    if (sinceDate && chapters.length > 0) {
      const firstChapter = chapters[0];
      if (firstChapter?.publishDate && firstChapter.publishDate <= sinceDate) {
        return {
          hasNewChapters: false,
          parsedChapters: chapters.filter(
            (c) => c.publishDate && c.publishDate > sinceDate
          )
        };
      }
    }
    return { hasNewChapters: true, parsedChapters: chapters };
  }
  var parseChapterDetails = (data, chapter) => ({
    id: chapter.chapterId,
    mangaId: chapter.sourceManga.mangaId,
    pages: data.chapter.images.filter((image) => image.url).map((image) => image.url)
  });
  function parseTags(data, sectionId, sectionTitle) {
    const tags = data.filter((tag) => tag.slug && tag.name).map((tag) => ({
      id: tag.slug,
      title: tag.name
    }));
    return [
      {
        id: sectionId,
        title: sectionTitle,
        tags
      }
    ];
  }
  function parseSearch(data) {
    return data.filter((comic) => comic.hid).map((comic) => ({
      imageUrl: comic.cover_url,
      title: Application.decodeHTMLEntities(comic.title),
      mangaId: comic.hid,
      subtitle: Application.decodeHTMLEntities(
        comic.last_chapter ? `Chapter ${comic.last_chapter}` : comic.title
      ),
      contentRating: parseContentRating(comic.content_rating)
    }));
  }
  function parseDiscoverSection(data, type) {
    return data.filter((comic) => comic.hid).map((comic) => {
      const baseItem = {
        imageUrl: comic.cover_url,
        title: Application.decodeHTMLEntities(comic.title),
        mangaId: comic.hid,
        contentRating: parseContentRating(comic.content_rating)
      };
      switch (type) {
        case import_types.DiscoverSectionType.featured:
          return { ...baseItem, type: "featuredCarouselItem" };
        case import_types.DiscoverSectionType.prominentCarousel:
          return { ...baseItem, type: "prominentCarouselItem" };
        case import_types.DiscoverSectionType.simpleCarousel:
          return {
            ...baseItem,
            subtitle: Application.decodeHTMLEntities(
              comic.last_chapter ? `Chapter ${comic.last_chapter}` : comic.title
            ),
            type: "simpleCarouselItem"
          };
        default:
          throw new Error(`Unknown discover section type: ${type}`);
      }
    });
  }
  function parseSortFilter() {
    return [
      { id: "follow", value: "Most follows" },
      { id: "view", value: "Most views" },
      { id: "rating", value: "High rating" },
      { id: "uploaded", value: "Last updated" }
    ];
  }
  function parseDemographicFilters() {
    return [
      { id: "1", value: "Shonen" },
      { id: "2", value: "Shoujo" },
      { id: "3", value: "Seinen" },
      { id: "4", value: "Josei" }
    ];
  }
  function parseTypeFilters() {
    return [
      { id: "user", value: "User" },
      { id: "author", value: "Author" },
      { id: "group", value: "Group" },
      { id: "comic", value: "Comic" }
    ];
  }
  function parseCreatedAtFilters() {
    return [
      { id: "30", value: "30 days" },
      { id: "90", value: "3 months" },
      { id: "180", value: "6 months" },
      { id: "365", value: "1 year" }
    ];
  }
  function parseComicTypeFilters() {
    return [
      { id: "kr", value: "Manhwa" },
      { id: "jp", value: "Manga" },
      { id: "cn", value: "Manhua" }
    ];
  }
  function parseContentRating(contentRating) {
    if (contentRating === "erotica") {
      return import_types.ContentRating.ADULT;
    }
    if (contentRating === "suggestive") {
      return import_types.ContentRating.MATURE;
    }
    return import_types.ContentRating.EVERYONE;
  }
  function parseComicType(country) {
    const comicTypeFilters = parseComicTypeFilters();
    return comicTypeFilters.find((filter) => filter.id === country)?.value;
  }
  function parseComicStatus(status) {
    const comicStatusMap = {
      1: "ONGOING",
      2: "COMPLETED",
      3: "CANCELLED",
      4: "ON HIATUS"
    };
    return comicStatusMap[status] || "UNKNOWN";
  }
  function filterChapters(chapters, filter) {
    if (filter.hideUnreleasedChapters) {
      const currentDate = /* @__PURE__ */ new Date();
      chapters = chapters.filter(
        (chapter) => new Date(chapter.publish_at) <= currentDate
      );
    }
    if (filter.chapterScoreFiltering) {
      return filterByScore(chapters);
    }
    if (filter.uploadersToggled && filter.uploaders.length) {
      return filterByUploaders(chapters, filter);
    }
    return chapters;
  }
  function filterByScore(chapters) {
    const chapterMap = /* @__PURE__ */ new Map();
    chapters.forEach((chapter) => {
      const chapNum = Number(chapter.chap);
      const score = chapter.up_count - chapter.down_count;
      const existing = chapterMap.get(chapNum);
      if (!existing || score > existing.score) {
        chapterMap.set(chapNum, { score, chapter });
      }
    });
    return Array.from(chapterMap.values()).map((v) => v.chapter);
  }
  function filterByUploaders(chapters, filter) {
    const {
      uploaders,
      uploadersWhitelisted,
      aggressiveUploadersFilter,
      strictNameMatching
    } = filter;
    return chapters.filter((chapter) => {
      const groups = chapter.group_name ?? [];
      const matchesUploader = (group, uploader) => strictNameMatching ? uploader === group : group.toLowerCase().includes(uploader.toLowerCase());
      const hasMatchingUploader = groups.some(
        (group) => uploaders.some((uploader) => matchesUploader(group, uploader))
      );
      const hasAllUploaders = groups.every(
        (group) => uploaders.some((uploader) => matchesUploader(group, uploader))
      );
      if (aggressiveUploadersFilter) {
        return uploadersWhitelisted ? hasAllUploaders : !hasMatchingUploader;
      }
      return uploadersWhitelisted ? hasMatchingUploader : !hasAllUploaders;
    });
  }
  function formatChapterTitle(chapter, showTitle) {
    return showTitle && chapter.title ? `${chapter.title}` : "";
  }

  // src/ComicK/ComicKSettings.ts
  init_buffer();
  var import_types2 = __toESM(require_lib(), 1);

  // src/utils/state.ts
  init_buffer();
  function getState(key, defaultValue) {
    return Application.getState(key) ?? defaultValue;
  }

  // src/ComicK/ComicKSettings.ts
  function getLanguages() {
    return getState("languages", ["all"]);
  }
  function getLanguageHomeFilter() {
    return getState("language_home_filter", false);
  }
  function getUploaders() {
    return getState("uploaders", []);
  }
  function getUploadersWhitelisted() {
    return getState("uploaders_whitelisted", false);
  }
  function getSelectedUploaders() {
    return getState("uploaders_selected", []);
  }
  function getUploadersFiltering() {
    return getState("uploaders_toggled", false);
  }
  function getAggresiveUploadersFiltering() {
    return getState("aggressive_uploaders_filtering", false);
  }
  function getStrictNameMatching() {
    return getState("strict_name_matching", false);
  }
  function getShowTitle() {
    return getState("show_title", false);
  }
  function getShowVolumeNumber() {
    return getState("show_volume_number", false);
  }
  function getChapterScoreFiltering() {
    return getState("chapter_score_filtering", false);
  }
  function getHideUnreleasedChapters() {
    return getState("hide_unreleased_chapters", true);
  }
  var ComicKSettingsForm = class extends import_types2.Form {
    getSections() {
      return [
        (0, import_types2.Section)("languageForm", [
          (0, import_types2.NavigationRow)("languageFprm", {
            title: "Language Settings",
            form: new LanguageForm()
          })
        ]),
        (0, import_types2.Section)("chapterForm", [
          (0, import_types2.NavigationRow)("chapterForm", {
            title: "Chapter Settings",
            form: new ChapterForm()
          })
        ]),
        (0, import_types2.Section)("uploaderForm", [
          (0, import_types2.NavigationRow)("uploaderForm", {
            title: "Uploader Settings",
            form: new UploaderForm()
          })
        ])
      ];
    }
  };
  var ChapterForm = class extends import_types2.Form {
    getSections() {
      const hideUnreleasedChapters = getHideUnreleasedChapters();
      const showVolumeNumber = getShowVolumeNumber();
      const showTitle = getShowTitle();
      return [
        (0, import_types2.Section)(
          {
            id: "chapterUnreleased",
            footer: "Hide chapters that are not yet released."
          },
          [
            (0, import_types2.ToggleRow)("hide_unreleased_chapters", {
              title: "Hide Unreleased Chapters",
              value: hideUnreleasedChapters,
              onValueChange: Application.Selector(
                this,
                "onHideUnreleasedChapters"
              )
            })
          ]
        ),
        (0, import_types2.Section)(
          {
            id: "chapterContent",
            footer: "Chapter list formatting."
          },
          [
            (0, import_types2.ToggleRow)("show_volume_number", {
              title: "Show Chapter Volume",
              value: showVolumeNumber,
              onValueChange: Application.Selector(
                this,
                "onShowVolumeNumber"
              )
            }),
            (0, import_types2.ToggleRow)("show_title", {
              title: "Show Chapter Title",
              value: showTitle,
              onValueChange: Application.Selector(
                this,
                "onShowTitle"
              )
            })
          ]
        )
      ];
    }
    async onHideUnreleasedChapters(value) {
      Application.setState(value, "hide_unreleased_chapters");
    }
    async onShowVolumeNumber(value) {
      Application.setState(value, "show_volume_number");
    }
    async onShowTitle(value) {
      Application.setState(value, "show_title");
    }
  };
  var LanguageForm = class extends import_types2.Form {
    getSections() {
      const language = getLanguages();
      const languageHomeFilter = getLanguageHomeFilter();
      return [
        (0, import_types2.Section)(
          {
            id: "languageContent",
            footer: "When enabled, it will filter New & Hot based on which languages that were chosen."
          },
          [
            (0, import_types2.SelectRow)("languages", {
              title: "Languages",
              options: getLanguageOptions(),
              value: language,
              minItemCount: 1,
              maxItemCount: 45,
              onValueChange: Application.Selector(
                this,
                "onSetLanguage"
              )
            }),
            (0, import_types2.ToggleRow)("language_home_filter", {
              title: "Filter Homepage Language",
              value: languageHomeFilter,
              onValueChange: Application.Selector(
                this,
                "onLanguageHomeFilter"
              )
            })
          ]
        )
      ];
    }
    async onSetLanguage(value) {
      Application.setState(value, "languages");
    }
    async onLanguageHomeFilter(value) {
      Application.setState(value, "language_home_filter");
    }
  };
  var UploaderForm = class extends import_types2.Form {
    uploaderState = (0, import_types2.createFormState)(this, "");
    getSections() {
      const chapterScoreEnabled = getChapterScoreFiltering();
      const [uploader, , selectorUploader] = this.uploaderState;
      const chapterScoreFilteringSection = (0, import_types2.Section)(
        {
          id: "chapter_score_filtering",
          footer: chapterScoreEnabled ? "Show only the uploader with the most upvotes for each chapter. Disable to manually manage uploader filtering" : "Show only the uploader with the most upvotes for each chapter."
        },
        [
          (0, import_types2.ToggleRow)("toggle_chapter_score_filtering", {
            title: "Enable Chapter Score Filtering",
            value: chapterScoreEnabled,
            onValueChange: Application.Selector(
              this,
              "onChapterScoreFiltering"
            )
          })
        ]
      );
      if (chapterScoreEnabled) {
        return [chapterScoreFilteringSection];
      }
      return [
        chapterScoreFilteringSection,
        (0, import_types2.Section)("modify_uploaders", [
          (0, import_types2.SelectRow)("uploaders", {
            title: "Select Uploaders",
            value: getSelectedUploaders(),
            options: getUploaders().map((uploader2) => ({
              id: uploader2,
              title: uploader2
            })),
            minItemCount: 0,
            // @ts-expect-error We do not know the max number of uploaders that can be selected
            maxItemCount: void 0,
            onValueChange: Application.Selector(
              this,
              "onSelectedUploaders"
            )
          }),
          (0, import_types2.InputRow)("uploader", {
            title: "Uploader Name",
            value: uploader(),
            onValueChange: selectorUploader
          }),
          (0, import_types2.ButtonRow)("add_uploader", {
            title: "Add Uploader",
            onSelect: Application.Selector(
              this,
              "onAddUploader"
            )
          }),
          (0, import_types2.ButtonRow)("remove_uploader", {
            title: "Remove Uploader",
            onSelect: Application.Selector(
              this,
              "onRemoveUploader"
            )
          })
        ]),
        (0, import_types2.Section)("select_uploaders", [
          (0, import_types2.ToggleRow)("toggle_uploaders_filtering", {
            title: "Enable Uploader filtering",
            value: getUploadersFiltering(),
            onValueChange: Application.Selector(
              this,
              "onUploadersFiltering"
            )
          }),
          (0, import_types2.ToggleRow)("uploaders_switch", {
            title: "Enable whitelist mode",
            value: getUploadersWhitelisted(),
            onValueChange: Application.Selector(
              this,
              "onUploadersWhitelisted"
            )
          }),
          (0, import_types2.ToggleRow)("toggle_uploaders_filtering_aggressiveness", {
            title: "Toggle aggressive filtering",
            value: getAggresiveUploadersFiltering(),
            onValueChange: Application.Selector(
              this,
              "onAggressiveFiltering"
            )
          }),
          (0, import_types2.ToggleRow)("strict_name_matching", {
            title: "Strict uploader name matching",
            value: getStrictNameMatching(),
            onValueChange: Application.Selector(
              this,
              "onStrictNameMatching"
            )
          })
        ])
      ];
    }
    async onAddUploader() {
      const [uploader, setUploader] = this.uploaderState;
      const uploaders = getUploaders();
      if (uploader() in uploaders) {
        throw new Error(`Uploader ${uploader()} already exists.`);
      }
      Application.setState([...uploaders, uploader()], "uploaders");
      await setUploader("");
    }
    async onRemoveUploader() {
      const [uploader, setUploader] = this.uploaderState;
      const uploaders = getUploaders();
      if (!(uploader() in uploaders)) {
        throw new Error(`Uploader ${uploader()} does not exists.`);
      }
      Application.setState(
        uploaders.filter((i) => i !== uploader()),
        "uploaders"
      );
      await setUploader("");
    }
    async onChapterScoreFiltering(value) {
      Application.setState(value, "chapter_score_filtering");
      this.reloadForm();
    }
    async onSelectedUploaders(value) {
      Application.setState(value, "uploaders_selected");
    }
    async onUploadersFiltering(value) {
      Application.setState(value, "uploaders_toggled");
    }
    async onUploadersWhitelisted(value) {
      Application.setState(value, "uploaders_whitelisted");
    }
    async onAggressiveFiltering(value) {
      Application.setState(value, "aggressive_uploaders_filtering");
    }
    async onStrictNameMatching(value) {
      Application.setState(value, "strict_name_matching");
    }
  };

  // src/ComicK/main.ts
  var COMICK_DOMAIN = "https://comick.io";
  var COMICK_API = "https://api.comick.fun";
  var LIMIT = 60;
  var ComicKInterceptor = class extends import_types3.PaperbackInterceptor {
    async interceptRequest(request) {
      request.headers = {
        ...request.headers ?? {},
        ...{
          referer: COMICK_DOMAIN,
          "user-agent": await Application.getDefaultUserAgent()
        }
      };
      return request;
    }
    async interceptResponse(request, response, data) {
      return data;
    }
  };
  var ComicKExtension = class {
    globalRateLimiter = new import_types3.BasicRateLimiter("rateLimiter", {
      numberOfRequests: 4,
      bufferInterval: 1,
      ignoreImages: true
    });
    mainRequestInterceptor = new ComicKInterceptor("main");
    async initialise() {
      this.globalRateLimiter.registerInterceptor();
      this.mainRequestInterceptor.registerInterceptor();
    }
    async getSettingsForm() {
      return new ComicKSettingsForm();
    }
    async getDiscoverSections() {
      return [
        {
          id: "most_viewed",
          title: "Most Viewed",
          type: import_types3.DiscoverSectionType.prominentCarousel
        },
        {
          id: "most_followed",
          title: "Most Followed",
          type: import_types3.DiscoverSectionType.simpleCarousel
        },
        {
          id: "latest_uploads",
          title: "Latest Uploads",
          type: import_types3.DiscoverSectionType.simpleCarousel
        },
        {
          id: "genres",
          title: "Genres",
          type: import_types3.DiscoverSectionType.genres
        }
      ];
    }
    async getDiscoverSectionItems(section, metadata) {
      switch (section.id) {
        case "most_viewed":
          return this.getDiscoverSectionItemsWrapper(
            section,
            metadata,
            "view",
            20
          );
        case "most_followed":
          return this.getDiscoverSectionItemsWrapper(
            section,
            metadata,
            "follow",
            20
          );
        case "latest_uploads":
          return this.getDiscoverSectionItemsWrapper(
            section,
            metadata,
            "uploaded",
            20
          );
        case "genres":
          return this.getDiscoverSectionGenres();
        default:
          return this.getDiscoverSectionItemsWrapper(
            section,
            metadata,
            "",
            20
          );
      }
    }
    async getMangaDetails(mangaId) {
      const request = {
        url: new URLBuilder2(COMICK_API).addPath("comic").addPath(mangaId).addQuery("tachiyomi", "true").build(),
        method: "GET"
      };
      const parsedData = await this.fetchApi(request);
      return parseMangaDetails(parsedData, mangaId, COMICK_API);
    }
    async getChapters(sourceManga, sinceDate) {
      const chapterFilter = this.getChapterFilter();
      const chapters = [];
      let limit = 1e5;
      if (sinceDate) {
        limit = LIMIT;
      }
      let page = 1;
      let data = await this.createChapterRequest(
        sourceManga.mangaId,
        page++,
        limit
      );
      const { hasNewChapters, parsedChapters } = parseChapterSinceDate(
        parseChapters(data, sourceManga, chapterFilter),
        sinceDate
      );
      parsedChapters.forEach((chapter) => chapters.push(chapter));
      if (hasNewChapters) {
        while (data.chapters.length === limit) {
          data = await this.createChapterRequest(
            sourceManga.mangaId,
            page++,
            limit
          );
          const { hasNewChapters: hasNewChapters2, parsedChapters: parsedChapters2 } = parseChapterSinceDate(
            parseChapters(data, sourceManga, chapterFilter),
            sinceDate
          );
          parsedChapters2.forEach((chapter) => chapters.push(chapter));
          if (!hasNewChapters2) {
            break;
          }
        }
      }
      return chapters;
    }
    async createChapterRequest(mangaId, page, limit = 1e5) {
      const builder = new URLBuilder2(COMICK_API).addPath("comic").addPath(mangaId).addPath("chapters").addQuery("page", page.toString()).addQuery("limit", limit.toString()).addQuery("tachiyomi", "true");
      const languages2 = getLanguages();
      if (languages2[0] != "all") {
        builder.addQuery("lang", languages2.join(","));
      }
      const request = {
        url: builder.build(),
        method: "GET"
      };
      const parsedData = await this.fetchApi(request);
      return parsedData;
    }
    async getChapterDetails(chapter) {
      const request = {
        url: new URLBuilder2(COMICK_API).addPath("chapter").addPath(chapter.chapterId).addQuery("tachiyomi", "true").build(),
        method: "GET"
      };
      const parsedData = await this.fetchApi(request);
      return parseChapterDetails(parsedData, chapter);
    }
    async getSearchFilters() {
      const filters = [];
      const sortFilters = parseSortFilter();
      filters.push({
        id: "sort",
        type: "dropdown",
        options: sortFilters,
        value: "",
        title: "Sort"
      });
      const demographicFilters = parseDemographicFilters();
      filters.push({
        type: "multiselect",
        options: demographicFilters,
        id: "demographic",
        allowExclusion: false,
        title: "Demographic",
        value: {},
        allowEmptySelection: true,
        maximum: demographicFilters.length
      });
      const typeFilters = parseTypeFilters();
      filters.push({
        id: "type",
        type: "dropdown",
        options: typeFilters,
        value: "",
        title: "Type"
      });
      const createdAtFilters = parseCreatedAtFilters();
      filters.push({
        id: "created-at",
        type: "dropdown",
        options: createdAtFilters,
        value: "",
        title: "Created At"
      });
      const comicTypeFilters = parseComicTypeFilters();
      filters.push({
        type: "multiselect",
        options: comicTypeFilters,
        id: "comic-type",
        allowExclusion: false,
        title: "Comic Type",
        value: {},
        allowEmptySelection: true,
        maximum: comicTypeFilters.length
      });
      const genres = await this.getGenres();
      const searchTagSections = parseTags(genres, "genres", "Genres");
      for (const tagSection of searchTagSections) {
        filters.push({
          type: "multiselect",
          options: tagSection.tags.map((x) => ({
            id: x.id,
            value: x.title
          })),
          id: tagSection.id,
          allowExclusion: true,
          title: tagSection.title,
          value: {},
          allowEmptySelection: false,
          maximum: void 0
        });
      }
      return filters;
    }
    async getSearchResults(query, metadata) {
      if (metadata?.completed) return import_types3.EndOfPageResults;
      const page = metadata?.page ?? 1;
      const builder = new URLBuilder2(COMICK_API).addPath("v1.0").addPath("search").addQuery("page", page).addQuery("limit", LIMIT).addQuery("tachiyomi", "true");
      const getFilterValue = (id) => query.filters.find((filter) => filter.id == id)?.value;
      const genres = getFilterValue("genres");
      if (genres && typeof genres === "object") {
        const excludes = [];
        const includes = [];
        for (const tag of Object.entries(genres)) {
          switch (tag[1]) {
            case "excluded":
              excludes.push(tag[0]);
              break;
            case "included":
              includes.push(tag[0]);
              break;
          }
        }
        builder.addQuery("excludes", excludes);
        builder.addQuery("genres", includes);
      }
      const sort = getFilterValue("sort");
      if (sort && typeof sort === "string") {
        builder.addQuery("sort", sort);
      }
      const createdAt = getFilterValue("created-at");
      if (createdAt && typeof createdAt === "string") {
        builder.addQuery("time", createdAt);
      }
      const mangaType = getFilterValue("type");
      if (mangaType && typeof mangaType === "string") {
        builder.addQuery("type", mangaType);
      }
      const demographic = getFilterValue("demographic");
      if (demographic && typeof demographic === "object") {
        builder.addQuery("demographic", Object.keys(demographic));
      }
      const comicType = getFilterValue("comic-type");
      if (comicType && typeof comicType === "object") {
        builder.addQuery("country", Object.keys(comicType));
      }
      builder.addQuery("q", query.title.replace(/ /g, "%20"));
      const request = {
        url: builder.build(),
        method: "GET"
      };
      const parsedData = await this.fetchApi(request);
      const manga = parseSearch(parsedData);
      metadata = parsedData.length === LIMIT ? { page: page + 1, completed: false } : { completed: true };
      const pagedResults = {
        items: manga,
        metadata
      };
      return pagedResults;
    }
    async getGenres() {
      const request = {
        url: new URLBuilder2(COMICK_API).addPath("genre").addQuery("tachiyomi", "true").build(),
        method: "GET"
      };
      return await this.fetchApi(request);
    }
    async getDiscoverSectionGenres() {
      const genres = await this.getGenres();
      return {
        items: genres.map((genre) => ({
          type: "genresCarouselItem",
          searchQuery: {
            title: "",
            filters: [
              { id: "genres", value: { [genre.slug]: "included" } }
            ]
          },
          name: genre.name,
          metadata: void 0
        })),
        metadata: void 0
      };
    }
    async getDiscoverSectionItemsWrapper(section, metadata, sort, limit) {
      if (sort.length == 0) {
        return {
          items: [],
          metadata: void 0
        };
      }
      if (metadata?.completed) return import_types3.EndOfPageResults;
      const page = metadata?.page ?? 1;
      const request = {
        url: new URLBuilder2(COMICK_API).addPath("v1.0").addPath("search").addQuery("sort", sort).addQuery("limit", limit).addQuery("page", page).addQuery("tachiyomi", "true").build(),
        method: "GET"
      };
      const parsedData = await this.fetchApi(request);
      const manga = parseDiscoverSection(parsedData, section.type);
      metadata = parsedData.length === limit ? { page: page + 1, completed: false } : { completed: true };
      const pagedResults = {
        items: manga,
        metadata
      };
      return pagedResults;
    }
    getChapterFilter() {
      return {
        showTitle: getShowTitle(),
        showVol: getShowVolumeNumber(),
        chapterScoreFiltering: getChapterScoreFiltering(),
        uploadersToggled: getUploadersFiltering(),
        uploadersWhitelisted: getUploadersWhitelisted(),
        aggressiveUploadersFilter: getAggresiveUploadersFiltering(),
        strictNameMatching: getStrictNameMatching(),
        uploaders: getUploaders(),
        hideUnreleasedChapters: getHideUnreleasedChapters()
      };
    }
    async fetchApi(request) {
      try {
        const [, data] = await Application.scheduleRequest(request);
        return JSON.parse(Application.arrayBufferToUTF8String(data));
      } catch {
        throw new Error(`Failed to fetch data from ${request.url}`);
      }
    }
  };
  var ComicK = new ComicKExtension();
  return __toCommonJS(main_exports);
})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
