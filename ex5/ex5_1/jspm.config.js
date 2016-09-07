SystemJS.config({
    browserConfig: {
        "paths": {
            "npm:": "/jspm_packages/npm/",
            "github:": "/jspm_packages/github/",
            "dag/": "/src/"
        }
    },
    nodeConfig: {
        "paths": {
            "npm:": "jspm_packages/npm/",
            "github:": "jspm_packages/github/",
            "dag/": "src/"
        }
    },
    devConfig: {
        "map": {
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.13"
        }
    },
    transpiler: "plugin-babel",
    packages: {
        "dag": {
            "main": "dag.js",
            "format": "esm",
            "meta": {
                "*.js": {
                    "loader": "plugin-babel"
                }
            }
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
        "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
        "d3": "npm:d3@4.2.2",
        "events": "github:jspm/nodelibs-events@0.2.0-alpha",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "http": "github:jspm/nodelibs-http@0.2.0-alpha",
        "https": "github:jspm/nodelibs-https@0.2.0-alpha",
        "os": "github:jspm/nodelibs-os@0.2.0-alpha",
        "path": "github:jspm/nodelibs-path@0.2.0-alpha",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
        "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
        "url": "github:jspm/nodelibs-url@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
    },
    packages: {
        "npm:d3@4.2.2": {
            "map": {
                "d3-dispatch": "npm:d3-dispatch@1.0.1",
                "d3-format": "npm:d3-format@1.0.2",
                "d3-request": "npm:d3-request@1.0.2",
                "d3-brush": "npm:d3-brush@1.0.2",
                "d3-chord": "npm:d3-chord@1.0.2",
                "d3-collection": "npm:d3-collection@1.0.1",
                "d3-polygon": "npm:d3-polygon@1.0.1",
                "d3-geo": "npm:d3-geo@1.2.3",
                "d3-time": "npm:d3-time@1.0.2",
                "d3-voronoi": "npm:d3-voronoi@1.0.2",
                "d3-quadtree": "npm:d3-quadtree@1.0.1",
                "d3-axis": "npm:d3-axis@1.0.3",
                "d3-dsv": "npm:d3-dsv@1.0.1",
                "d3-color": "npm:d3-color@1.0.1",
                "d3-ease": "npm:d3-ease@1.0.1",
                "d3-zoom": "npm:d3-zoom@1.0.3",
                "d3-path": "npm:d3-path@1.0.1",
                "d3-time-format": "npm:d3-time-format@2.0.2",
                "d3-drag": "npm:d3-drag@1.0.1",
                "d3-queue": "npm:d3-queue@3.0.2",
                "d3-random": "npm:d3-random@1.0.1",
                "d3-selection": "npm:d3-selection@1.0.2",
                "d3-timer": "npm:d3-timer@1.0.2",
                "d3-shape": "npm:d3-shape@1.0.2",
                "d3-hierarchy": "npm:d3-hierarchy@1.0.2",
                "d3-interpolate": "npm:d3-interpolate@1.1.1",
                "d3-array": "npm:d3-array@1.0.1",
                "d3-transition": "npm:d3-transition@1.0.1",
                "d3-force": "npm:d3-force@1.0.2",
                "d3-scale": "npm:d3-scale@1.0.3"
            }
        },
        "npm:d3-request@1.0.2": {
            "map": {
                "d3-dispatch": "npm:d3-dispatch@1.0.1",
                "d3-collection": "npm:d3-collection@1.0.1",
                "d3-dsv": "npm:d3-dsv@1.0.1",
                "xmlhttprequest": "npm:xmlhttprequest@1.8.0"
            }
        },
        "npm:d3-brush@1.0.2": {
            "map": {
                "d3-dispatch": "npm:d3-dispatch@1.0.1",
                "d3-drag": "npm:d3-drag@1.0.1",
                "d3-selection": "npm:d3-selection@1.0.2",
                "d3-interpolate": "npm:d3-interpolate@1.1.1",
                "d3-transition": "npm:d3-transition@1.0.2"
            }
        },
        "npm:d3-chord@1.0.2": {
            "map": {
                "d3-path": "npm:d3-path@1.0.1",
                "d3-array": "npm:d3-array@1.0.1"
            }
        },
        "npm:d3-geo@1.2.3": {
            "map": {
                "d3-array": "npm:d3-array@1.0.1"
            }
        },
        "npm:d3-zoom@1.0.3": {
            "map": {
                "d3-transition": "npm:d3-transition@1.0.2",
                "d3-dispatch": "npm:d3-dispatch@1.0.1",
                "d3-drag": "npm:d3-drag@1.0.1",
                "d3-interpolate": "npm:d3-interpolate@1.1.1",
                "d3-selection": "npm:d3-selection@1.0.2"
            }
        },
        "npm:d3-time-format@2.0.2": {
            "map": {
                "d3-time": "npm:d3-time@1.0.2"
            }
        },
        "npm:d3-drag@1.0.1": {
            "map": {
                "d3-dispatch": "npm:d3-dispatch@1.0.1",
                "d3-selection": "npm:d3-selection@1.0.2"
            }
        },
        "npm:d3-interpolate@1.1.1": {
            "map": {
                "d3-color": "npm:d3-color@1.0.1"
            }
        },
        "npm:d3-shape@1.0.2": {
            "map": {
                "d3-path": "npm:d3-path@1.0.1"
            }
        },
        "npm:d3-transition@1.0.1": {
            "map": {
                "d3-color": "npm:d3-color@1.0.1",
                "d3-dispatch": "npm:d3-dispatch@1.0.1",
                "d3-ease": "npm:d3-ease@1.0.1",
                "d3-interpolate": "npm:d3-interpolate@1.1.1",
                "d3-selection": "npm:d3-selection@1.0.2",
                "d3-timer": "npm:d3-timer@1.0.3"
            }
        },
        "npm:d3-transition@1.0.2": {
            "map": {
                "d3-color": "npm:d3-color@1.0.1",
                "d3-dispatch": "npm:d3-dispatch@1.0.1",
                "d3-ease": "npm:d3-ease@1.0.1",
                "d3-interpolate": "npm:d3-interpolate@1.1.1",
                "d3-selection": "npm:d3-selection@1.0.2",
                "d3-timer": "npm:d3-timer@1.0.3"
            }
        },
        "npm:d3-force@1.0.2": {
            "map": {
                "d3-collection": "npm:d3-collection@1.0.1",
                "d3-dispatch": "npm:d3-dispatch@1.0.1",
                "d3-quadtree": "npm:d3-quadtree@1.0.1",
                "d3-timer": "npm:d3-timer@1.0.3"
            }
        },
        "npm:d3-dsv@1.0.1": {
            "map": {
                "rw": "npm:rw@1.3.2"
            }
        },
        "npm:d3-scale@1.0.3": {
            "map": {
                "d3-collection": "npm:d3-collection@1.0.1",
                "d3-color": "npm:d3-color@1.0.1",
                "d3-format": "npm:d3-format@1.0.2",
                "d3-interpolate": "npm:d3-interpolate@1.1.1",
                "d3-time": "npm:d3-time@1.0.2",
                "d3-time-format": "npm:d3-time-format@2.0.2",
                "d3-array": "npm:d3-array@1.0.1"
            }
        },
        "github:jspm/nodelibs-url@0.2.0-alpha": {
            "map": {
                "url-browserify": "npm:url@0.11.0"
            }
        },
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.9.1"
            }
        },
        "github:jspm/nodelibs-http@0.2.0-alpha": {
            "map": {
                "http-browserify": "npm:stream-http@2.3.1"
            }
        },
        "npm:url@0.11.0": {
            "map": {
                "punycode": "npm:punycode@1.3.2",
                "querystring": "npm:querystring@0.2.0"
            }
        },
        "npm:buffer@4.9.1": {
            "map": {
                "base64-js": "npm:base64-js@1.1.2",
                "isarray": "npm:isarray@1.0.0",
                "ieee754": "npm:ieee754@1.1.6"
            }
        },
        "npm:stream-http@2.3.1": {
            "map": {
                "readable-stream": "npm:readable-stream@2.1.5",
                "inherits": "npm:inherits@2.0.1",
                "xtend": "npm:xtend@4.0.1",
                "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                "builtin-status-codes": "npm:builtin-status-codes@2.0.0"
            }
        },
        "npm:readable-stream@2.1.5": {
            "map": {
                "isarray": "npm:isarray@1.0.0",
                "inherits": "npm:inherits@2.0.1",
                "util-deprecate": "npm:util-deprecate@1.0.2",
                "core-util-is": "npm:core-util-is@1.0.2",
                "buffer-shims": "npm:buffer-shims@1.0.0",
                "process-nextick-args": "npm:process-nextick-args@1.0.7",
                "string_decoder": "npm:string_decoder@0.10.31"
            }
        },
        "github:jspm/nodelibs-os@0.2.0-alpha": {
            "map": {
                "os-browserify": "npm:os-browserify@0.2.1"
            }
        },
        "github:jspm/nodelibs-crypto@0.2.0-alpha": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "npm:crypto-browserify@3.11.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "browserify-sign": "npm:browserify-sign@4.0.0",
                "diffie-hellman": "npm:diffie-hellman@5.0.2",
                "public-encrypt": "npm:public-encrypt@4.0.0",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "browserify-cipher": "npm:browserify-cipher@1.0.0",
                "create-ecdh": "npm:create-ecdh@4.0.0",
                "randombytes": "npm:randombytes@2.0.3",
                "pbkdf2": "npm:pbkdf2@3.0.4"
            }
        },
        "npm:browserify-sign@4.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "bn.js": "npm:bn.js@4.11.6",
                "parse-asn1": "npm:parse-asn1@5.0.0",
                "elliptic": "npm:elliptic@6.3.1"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "randombytes": "npm:randombytes@2.0.3",
                "bn.js": "npm:bn.js@4.11.6",
                "miller-rabin": "npm:miller-rabin@4.0.0"
            }
        },
        "npm:create-hmac@1.1.4": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "randombytes": "npm:randombytes@2.0.3",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "bn.js": "npm:bn.js@4.11.6",
                "parse-asn1": "npm:parse-asn1@5.0.0"
            }
        },
        "npm:create-hash@1.1.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "ripemd160": "npm:ripemd160@1.0.1",
                "sha.js": "npm:sha.js@2.4.5",
                "cipher-base": "npm:cipher-base@1.0.2"
            }
        },
        "npm:pbkdf2@3.0.4": {
            "map": {
                "create-hmac": "npm:create-hmac@1.1.4"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "randombytes": "npm:randombytes@2.0.3",
                "bn.js": "npm:bn.js@4.11.6"
            }
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "elliptic": "npm:elliptic@6.3.1"
            }
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "brorand": "npm:brorand@1.0.5"
            }
        },
        "npm:browserify-cipher@1.0.0": {
            "map": {
                "browserify-des": "npm:browserify-des@1.0.0",
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
            }
        },
        "npm:parse-asn1@5.0.0": {
            "map": {
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "create-hash": "npm:create-hash@1.1.2",
                "pbkdf2": "npm:pbkdf2@3.0.4",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "asn1.js": "npm:asn1.js@4.8.0"
            }
        },
        "npm:elliptic@6.3.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "inherits": "npm:inherits@2.0.1",
                "brorand": "npm:brorand@1.0.5",
                "hash.js": "npm:hash.js@1.0.3"
            }
        },
        "npm:browserify-des@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "cipher-base": "npm:cipher-base@1.0.2",
                "des.js": "npm:des.js@1.0.0"
            }
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "inherits": "npm:inherits@2.0.1",
                "cipher-base": "npm:cipher-base@1.0.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "buffer-xor": "npm:buffer-xor@1.0.3"
            }
        },
        "npm:sha.js@2.4.5": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:cipher-base@1.0.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:asn1.js@4.8.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:hash.js@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "github:jspm/nodelibs-stream@0.2.0-alpha": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.1.5"
            }
        },
        "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
            "map": {
                "string_decoder-browserify": "npm:string_decoder@0.10.31"
            }
        }
    }
});