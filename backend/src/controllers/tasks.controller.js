const { db } = require('../config/firebase.js');
const { addDoc, collection, doc, deleteDoc, getDocs, updateDoc } = require('firebase/firestore');

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
  createTask: async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'tasks'), data);
      res.status(200).json({ status: 200, message: 'Task created successfully' });
    } catch (error) {
      next(error);
    }
  },
  updateTask: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const task = doc(db, 'tasks', id);
      await updateDoc(task, data);
      res.status(200).json({ status: 200, message: 'Task updated successfully' });
    } catch (error) {
      next(error);
    }
  },
  deleteTask: async (req, res, next) => {
    try {
      const id = req.params.id;
      await deleteDoc(doc(db, 'tasks', id));
      res.status(200).json({ status: 200, message: 'Task deleted successfully' });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = endpoints;
