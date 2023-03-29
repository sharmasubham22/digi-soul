const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const user_controller = require('../controller/user_details');
const { db } = require("../model/user_details");

var User = require('../model/user_details');

router.get("/", (req, res) => {
    res.send("hello world")
})


router.post("/adduser", async (req, res) => {
    const db_resp = await user_controller.addUser(req.body);
    console.log(db_resp);
    if (db_resp.success){
        res.status(200).json(db_resp);
    }
    else{
        res.status(400).json(db_resp);
    }
})

router.post("/getuser", async (req, res) => {
    const db_resp = await user_controller.getUser(req.body);
    console.log(req.body);
    if (db_resp.success){
        res.status(200).json(db_resp)
    }
    else{
        res.status(400).json(db_resp)
    }
})

module.exports = router;