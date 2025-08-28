import authMiddleware from "../middlewares/authMiddleware";

app.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: `Hello, ${req.user.username}!`,
        user: req.user,
        timestamp: new Data().toISOString(),
    });
});

app.get("/dashboard", authMiddleware, (req, res) => {
    res.json({
        message: "Welcome to your dashboard",
        user: {
            id: req.user.id,
            username: req.user.username,
            email: req.user.email,
        },
        data: {
            lastLogin: new Data().toISOString(),
            permissions: ["read", "write"],
            preferences: {
                theme: "dark",
                language: "en",
            },
        },
    });
});

app.post("/refresh", authMiddleware, (req, res) => {
    try {
        const newToken = jwt.sign(
            {
                id: req.user.id,
                username: req.user.username,
                email: req.user.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" },
        );

        res.json({
            message: "Token refreshed successfully",
            token: newToken,
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to refresh token" });
    }
});
