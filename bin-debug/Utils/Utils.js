function getShader(es) {
    var e = RES.getRes(es);
    for (var a = e, i = new DataView(a), n = "", s = 0; s < i.byteLength; s++)
        n += String.fromCharCode(i.getUint8(s));
    return n;
}
