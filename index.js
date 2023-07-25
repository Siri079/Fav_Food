const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./db');
const app = express();
app.use(express.json());
app.use(cors());
const productRouter = require('./routes/productRouter');
const userRouter=require('./routes/userRouter');

const Order=require('./models/orderModel');
const env = require('dotenv').config({ path: '../.env' });


const Stripe=require('stripe')
const stripe=new Stripe('sk_test_51NTRksSEo2C4UedvwMQCRNepQ0Q95Z8TfqcAB2hgiFOeotFcEohDLBcu9IpkKCPytnlJFKXJFnK75OIF4FWogcNr001nKuATtL');



// var corsOptions = {
//     origin: "http://localhost:3000"
// }
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "https://localhost:8000/api/products");
//     next();
//   });
const calculateOrderAmount = (orderItems) => {
    const initialValue = 0;
    const itemsPrice = orderItems.reduce(
        (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.amount, initialValue
    );
    return itemsPrice*100 ;
}

//app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors(corsOptions));
app.use(
    express.json({
        verify:function(req,res,buf){
            if(req.originalUrl.startsWith('/webhook')){
                req.rawbody=buf.toString();
            }
        },
    })
);

app.post('/webhook',async(req,res)=>{
    let data,eventType;

    if(process.env.STRIPE_WEBHOOK_SECRET){
        let event;
        let signature=req.headers['stripe-signature'];
        try{
            event=stripe.webhooks.constructEvent(
                req.rawBody,
                signature,
                process.env.STRIPE_WEBHOOK_SECRET
            );
        }catch(err){
            console.log(`⚠️ webhook signature verification failed.`);
            return res.sendStatus(400);
        }
        data=event.data;
        eventType=event.type;
    }else{
        // If no secret is configured in the environment variables,
        // we'll just log and ignore any events that are received from Stripe.
        data=req.body.data;
        eventType=req.body.type;
    }

    if(eventType==='payment_intent.succeeded'){
        console.log('💰 payment captured');
    }else if(eventType==='payment_intent.payment_failed'){
        console.log('❌ payment failed.')
    }
    res.sendStatus(200);
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get("/", cors(), (req, res) => {
    res.json({ message: "Welcome to food odering" });
});



const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
    console.log(`Server is running on port ${PORT}`)
});

app.use('/api/', productRouter);
app.use('/api/', userRouter);

app.post('/create-payment-intent',async(req,res)=>{
    try {
        const { orderItems, shippingAddress, userId } = req.body;
        
        const totalPrice = calculateOrderAmount(orderItems);
    
     
        const taxPrice = 0;
        const shippingPrice = 0;

        const order = new Order({
            orderItems,
            shippingAddress,
            paymentMethod: 'stripe',
            totalPrice,
            taxPrice,
            shippingPrice,
            user: ''
        })

        // await order.save();
        //const totalPrice=100;
        const paymentIntent=await stripe.paymentIntents.create({
            amount: totalPrice,
            currency: 'inr'
        })

        res.send({
            clientSecret: paymentIntent.client_secret
        })
    } catch(e) {
        res.status(400).json({
            error: {
                message: e.message
            }
        })
    }
})
