const { db } = require('../config/firebase.js');
const { collection, getDocs } = require('firebase/firestore');

endpoints = {
  getTasks: async (_, res, next) => {
    try {
      const tasks = await getDocs(collection(db, 'tasks'));
      const tasksArray = [];

      if (tasks.empty) {
        res.status(400).send('No tasks found');
      } else {
        tasks.forEach(doc => {
          const task = {
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            completed: doc.data().completed,
            createdAt: doc.data().createdAt,
          };
          tasksArray.push(task);
        });
      }

      res.status(200).json({ status: 200, values: tasksArray });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = endpoints;
