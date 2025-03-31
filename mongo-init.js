db.createUser(
    {
        user: "tolik",
        pwd: "tolikPass",
        roles: [
            {
                role: "readWrite",
                db: "nodejs-express-db"
            }
        ]
    }
)