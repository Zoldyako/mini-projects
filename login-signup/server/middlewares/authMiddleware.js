import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.autorization;

        if (!authHeader) {
            return res.status(401).json({
                error: "Access denied. No token provided.",
            });
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                error: "Invalid access. Invalid token format",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                error: "Token expired. Please login again",
            });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(403).json({
                error: "Invalid token",
            });
        }

        console.error("Auth middleware error: ", error);
        res.status(500).json({
            error: "Internal server error",
        });
    }
}
