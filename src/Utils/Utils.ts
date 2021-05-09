async function getShader(es: ShaderConstant): Promise<string> {
    const url = DEBUG ? `resource/shader/${es}` : es.replace('.',"_");
    var e = DEBUG ? await RES.getResByUrl(url) : RES.getRes(url);
    for (var a = e, i = new DataView(a), n = "", s = 0; s < i.byteLength; s++) n += String.fromCharCode(i.getUint8(s));
    // 防止缓存
    DEBUG && RES.destroyRes(url);
    return n;
}