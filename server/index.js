require("./DB/connection");
// require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");
const HouseMemberModel = require("./DB/models/houseMembers");
const TaskModel = require("./DB/models/tasksModel");
const port = process.env.PORT || 666;

const initHouseMembers = async () => {
  const member1 = new HouseMemberModel({
    name: "Chin",
    nick: "Chief of Hell",
    desc: "Big Brother",
    color: "#5D0505"
  });
  const member2 = new HouseMemberModel({
    name: "Wei",
    nick: "Admiral of the Mountains",
    desc: "2nd Brother",
    color: "#0B624D"
  });
  const member3 = new HouseMemberModel({
    name: "Jiahao",
    nick: "Emperor of Men",
    desc: "Father",
    color: "#62460B"
  });
  const member4 = new HouseMemberModel({
    name: "Zhi",
    nick: "Priestess of Devotion",
    desc: "Mother",
    color: "#2A0B62"
  });
  const member5 = new HouseMemberModel({
    name: "Dong",
    nick: "Abbot of Death",
    desc: "Grandfather",
    color: "#034F08"
  });

  Promise.all([
    member1.save(),
    member2.save(),
    member3.save(),
    member4.save(),
    member5.save(),
  ]);
};

// initHouseMembers()

// ooo        ooooo ooooo oooooooooo.   oooooooooo.   ooooo        oooooooooooo oooooo   oooooo     oooo       .o.       ooooooooo.   oooooooooooo
// `88.       .888' `888' `888'   `Y8b  `888'   `Y8b  `888'        `888'     `8  `888.    `888.     .8'       .888.      `888   `Y88. `888'     `8
//  888b     d'888   888   888      888  888      888  888          888           `888.   .8888.   .8'       .8"888.      888   .d88'  888
//  8 Y88. .P  888   888   888      888  888      888  888          888oooo8       `888  .8'`888. .8'       .8' `888.     888ooo88P'   888oooo8
//  8  `888'   888   888   888      888  888      888  888          888    "        `888.8'  `888.8'       .88ooo8888.    888`88b.     888    "
//  8    Y     888   888   888     d88'  888     d88'  888       o  888       o      `888'    `888'       .8'     `888.   888  `88b.   888       o
// o8o        o888o o888o o888bood8P'   o888bood8P'   o888ooooood8 o888ooooood8       `8'      `8'       o88o     o8888o o888o  o888o o888ooooood8
app.use(cors());
app.use(express.json());

// ooooooooo.     .oooooo.   ooooo     ooo ooooooooooooo oooooooooooo  .oooooo..o
// `888   `Y88.  d8P'  `Y8b  `888'     `8' 8'   888   `8 `888'     `8 d8P'    `Y8
//  888   .d88' 888      888  888       8       888       888         Y88bo.
//  888ooo88P'  888      888  888       8       888       888oooo8     `"Y8888o.
//  888`88b.    888      888  888       8       888       888    "         `"Y88b
//  888  `88b.  `88b    d88'  `88.    .8'       888       888       o oo     .d8P
// o888o  o888o  `Y8bood8P'     `YbodP'        o888o     o888ooooood8 8""88888P'
app.get("/houseMembers", async function (req, res) {
  // res.send('Hello World')
  try {
    const familyMembers = await HouseMemberModel.find({});
    return res
      .status(200)
      .send({ ok: "alright here's the house members list", familyMembers });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

app.get("/tasks", async function (req, res) {
  // res.send('Hello World')
  try {
    const allTasks = await TaskModel.find({}).populate("worker");
    return res
      .status(200)
      .send({ ok: "alright here's the todo list", allTasks });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

app.post("/tasks", async function (req, res) {
  const { desc, workerId } = req.body;
  if (!desc || !workerId) {
    return res.status(400).send({ fail: "Missing desc || workerId" });
  }
  try {
    const newTask = new TaskModel({
      desc,
      worker: workerId,
    });
    await newTask.save();
    return res.status(200).send({ ok: "successfully added task" });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);

  }
});

app.delete("/tasks/:taskId", async function (req, res) {
  const { taskId } = req.params;
  try {
    console.log(taskId)
    
    const task = await TaskModel.findByIdAndDelete(taskId)
    if(!task){
      return res.status(400).send({fail:"no such task"})
    }
    return res.status(200).send({ ok: "successfully deleted task" });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);

  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on ${port}`);
});
