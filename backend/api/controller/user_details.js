const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');


var User = require('../model/user_details');


const addUser = async (data) => {
    if (data?.email && data?.password){
        let resp;
        await User.collection.findOne({'email': data.email}).then((_data) => {
            console.log(_data)
            if (_data == null){
                let _user = new User(data);
                User.collection.insertOne(_user);
                resp = {'success': true, 'message': 'user added'};
            }
            else{
                resp = {'success': false, 'message': 'email already exists'};
            }
        });
        return resp;
    }
    else {
        return {'success': false, 'message': 'user not added'};
    }
}

const modifyUser = async (data) => {
    // TODO: Modify user in DB
}

const getUser = async (data) => {
    if (data?.email && data?.password){
        let user;
        await User.collection.findOne({'email': data.email}).then((_user) => {
            user = _user;
        })

        if (user != null &&  data.password === user.password) {
            return {'success': true, 'message': 'Login successful'}
        }
        else {
            return {'success': false, 'message': "Incorrect email or password"}
        }
    }
    else{
        return {'success': false, 'message': 'Login failed. Missing params'};
    }
}

module.exports = {addUser, getUser};