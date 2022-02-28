const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middlware

app.use(cors());
app.use (express.json()); //req.body

//routes//

//create a order

app.post("/orders", async(req, res) => {
  try {
    const { order_status } = req.body;
    const { first_name } = req.body;
    const { last_name } = req.body;
    const { phone } = req.body;
    const { order_address } = req.body;
    const newOrder = await pool.query(
      "INSERT INTO orders (order_status, first_name, last_name, phone, order_address) VALUES($1, $2, $3, $4, $5) RETURNING *", 
      [order_status, first_name, last_name, phone, order_address]
    );

    res.json(newOrder.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all orders

app.get("/orders", async(req, res) => {
  try  {
    const allOrders = await pool.query ("SELECT * FROM orders");
    res.json(allOrders.rows);
  }
  catch (err) {
    console.error(err.message);
  }
});

//get order statistics
//status: new, confirmed, canceled, deferred

app.get("/orders/statistic", async (req, res) => {
  try {
    const orderStatusNew = "new";
    const orderStatusConfirmed = "confirmed";
    const orderStatusCanceled = "canceled";
    const orderStatusDeferred = "deferred";
    const statisticOrder = await pool.query("SELECT count(*) FROM orders WHERE order_status = $1",[orderStatusConfirmed]);
    
    res.json(statisticOrder.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a order

app.put("/orders/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const { order_status } = req.body;
    const { first_name } = req.body;
    const { last_name } = req.body;
    const { phone } = req.body;
    const { order_address } = req.body;
    const updateOrder = await pool.query("UPDATE orders SET order_status = $1, first_name = $2, last_name = $3, phone = $4, order_address = $5 WHERE order_id = $6",[order_status, first_name, last_name, phone, order_address, id]);

    res.json("Order was updated!")
  } catch (err) {
    console.error(err.message);
  }

});


app.listen(4000, () => {
  console.log("Server has started on port 4000")
});