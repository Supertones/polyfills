Array.prototype.flat ||
    Object.defineProperty(Array.prototype, 'flat', {
        configurable: !0,
        value: function r() {
            var t = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
            return t
                ? Array.prototype.reduce.call(
                      this,
                      function (a, e) {
                          return Array.isArray(e) ? a.push.apply(a, r.call(e, t - 1)) : a.push(e), a;
                      },
                      []
                  )
                : Array.prototype.slice.call(this);
        },
        writable: !0,
    }),
    Array.prototype.flatMap ||
        Object.defineProperty(Array.prototype, 'flatMap', {
            configurable: !0,
            value: function (r) {
                return Array.prototype.map.apply(this, arguments).flat();
            },
            writable: !0,
        });