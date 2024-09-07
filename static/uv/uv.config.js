self.__uv$config = {
    prefix: '/static/tiw/',
    bare: ['https://uv.radon.games/bare1/', 'https://uv.radon.games/bare2/', 'https://uv.radon.games/bare3/', 'https://uv.radon.games/bare4/'],
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};
