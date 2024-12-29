// Node.js ES Module Syntax
import axios from 'axios'; // npm install axios
import CryptoJS from 'crypto-js'; // npm install crypto-js
import { v1 as uuid } from 'uuid'; // npm install uuid
import moment from 'moment'; // npm install moment
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/payment', async (req, res) => {
    // APP INFO
    const config = {
        appid: "554",
        key1: "8NdU5pG5R2spGHGhyO99HN1OhD8IQJBn",
        key2: "uUfsWgfLkRLzq6W2uNXTCxrfxs51auny",
        endpoint: "https://sandbox.zalopay.com.vn/v001/tpe/createorder"
    };

    const embeddata = {
        merchantinfo: "embeddata123",
        redirecturl: "https://localhost:4000/home",
    };

    const items = [{
        itemid: "knb",
        itemname: "kim nguyen bao",
        itemprice: 198400,
        itemquantity: 1
    }];

    const order = {
        appid: config.appid,
        apptransid: `${moment().format('YYMMDD')}_${uuid()}`, // mã giao dịch có định dạng yyMMdd_xxxx
        appuser: "demo",
        apptime: Date.now(), // miliseconds
        item: JSON.stringify(items),
        embeddata: JSON.stringify(embeddata),
        amount: 150000,
        description: "ZaloPay Integration Demo",
        bankcode: "",
    };

    // appid|apptransid|appuser|amount|apptime|embeddata|item
    const data = config.appid + "|" + order.apptransid + "|" + order.appuser + "|" + order.amount + "|" + order.apptime + "|" + order.embeddata + "|" + order.item;
    order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

    try {
        const result = await axios.post(config.endpoint, null, { params: order });
        console.log(result.data);
        res.status(200).send(result.data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Something went wrong" });
    }
});

app.listen(6000, () => {
    console.log('Server is running on port 6000');
});
