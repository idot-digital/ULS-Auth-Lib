"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.checkAuth = function (key, token) {
    return new Promise(function (resolve, reject) {
        jsonwebtoken_1.default.verify(token, key, function (err, decoded) {
            if (err) {
                reject(err);
            }
            else {
                resolve(decoded);
            }
        });
    });
};
