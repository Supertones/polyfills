Object.prototype.fromEntries ||
    Object.defineProperty(Object.prototype, 'fromEntries', {
        configurable: !0,
        value: function r(iterable) {
            return [...iterable].reduce((obj, [key, val]) => {
                obj[key] = val;
                return obj;
            });
        },
        writable: !0,
    });
