module.exports = (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const manifest = {
        id: "ppvmls.addon",
        version: "1.0.0",
        name: "PPVMLS Stream",
        description: "Live stream for San Diego FC vs Tigres UANL",
        resources: ["stream"],
        types: ["movie"],
        catalogs: []
    };

    if (req.url === "/manifest.json") {
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(manifest));
    }

    if (req.url.startsWith("/stream/")) {
        const stream = {
            streams: [{
                title: "Live Stream",
                url: "https://5nhp186eg31fofnc.chinese-restaurant-api.site/v3/variant/VE1AO1NTbu8mbv12LxEWM21ycrNWYyR3LhhTZ1UzMmlzN3gTMtEGOihTL3EGN00yY4UWYtIjY5YjN2YTZ/master.m3u8"
            }]
        };
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(stream));
    }

    res.statusCode = 404;
    res.end("Not Found");
};
