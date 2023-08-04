import express from "express";
import sql from "./utils/sequelize.js";
import { DataTypes, Model, Op } from "sequelize";
const PORT = 3002;

// data
const Animals = sql.define(
    "animal",
    {
        name: { type: DataTypes.STRING(25), allowNull: false },
        age: { type: DataTypes.INTEGER, autoIncrement: false, allowNull: false },
    },
    {
        createdAt: false,
        updatedAt: "updated_at",
    }
    );
    
    
    await Animals.sync();
    
    
    
    const app = express();
    
    
    app.get("/", (req, res) => {});
    
    app.listen(PORT, console.log("Server listening on port " + PORT));
    