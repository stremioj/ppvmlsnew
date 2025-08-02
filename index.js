const manifest = {
    id: "ppvmls.addon",
    version: "1.0.0",
    name: "PPVMLS Stream",
    description: "Live stream for San Diego FC vs Tigres UANL",
    resources: ["stream"],
    types: ["movie"],
    catalogs: []
};

module.exports = (req, res) => {
    const url = new URL(req.url, `https://${req.headers.host}`);
    if (url.pathname === "/manifest.json") {
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(manifest));
    }
    if (url.pathname.startsWith("/stream/")) {
        const stream = {
            streams: [{
                title: "Live Stream",
                url: "https://5nhp186eg31fofnc.chinese-restaurant-api.site/v3/variant/VE1AO1NTbu8mbv12LxEWM21ycrNWYyR3LhhTZ1UzMmlzN3gTMtEGOihTL3EGN00yY4UWYtIjY5YjN2YTZ/master.m3u8",
                behaviorHints: {
                    proxyHeaders: {
                        request: {
                            "Referer": "https://ppv.to",
                            "User-Agent": "Mozilla/5.0"
                        }
                    }
                }
            }]
        };
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(stream));
    }
    res.statusCode = 404;
    res.end("Not Found");
};
