const parse = url => {
  let a = document.createElement("a");
  a.href = url;

  return {
    source: url,
    protocol: a.protocol.replace(":", ""),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: function() {
      let ret = {},
        seg = a.search.replace(/^\?/, "").split("&"),
        len = seg.length,
        i = 0,
        s;
      for (; i < len; i++) {
        if (!seg[i]) {
          continue;
        }
        s = seg[i].split(" = ");
        ret[s[0]] = s[1];
      }
      return ret;
    }
  };
};
