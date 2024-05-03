const mongoose = require("mongoose");
const connection = require("../../config/connections/db");
const users = mongoose.Schema(
    {
        ISIN: {
            type: String,
            trim: true,
        },
        symbol: {
            type: String,
            trim: true,
        },
        FinInstrmId: {
            type: Number,
            trim: true,
        },
        FinInstrmNm: {
            type: String,
            trim: true,
        },
        SctySrs: {
            type: String,
            trim: true,
        },
        open: {
            type: Number,
            trim: true,
        },
        high: {
            type: Number,
            trim: true,
        },
        low: {
            type: Number,
            trim: true,
        },
        close: {
            type: Number,
            trim: true,
        },
        last: {
            type: Number,
            trim: true,
        },
        prevclose: {
            type: Number,
            trim: true,
        },
        totalTradeQty: {
            type: Number,
            trim: true,
        },
        totalTradeval: {
            type: Number,
            trim: true,
        },
        TimeStamp: {
            type: String,
            trim: true,
        },
        totalTrade: {
            type: Number,
            trim: true,
        },
        FinInstrmTp: {
            type: String,
            trim: true,
        },
        SttlmPrice: {
            type: Number,
            trim: true,
        },
    },
    { timestamps: true }
);
module.exports = connection.connect_compliance.model("bhavcopybse", users);
