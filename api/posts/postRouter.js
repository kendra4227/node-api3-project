const express = require('express');

const POST = require('./postDb');

const router = express.Router();

POST.get()
.then(posts => {
  res.status(200).json(posts);
})
.catch(err => {
  res.status(500).json({ error: "The posts could not be retrieved." });
});

router.get('/:id', validatePostId, (req, res) => {
    let id = req.params.id;
  
    POST.getById(id)
      .then(post => {
        res.status(200).json(post);
      })
      .catch(err => {
        res.status(500).json({ error: "The post could not be retrieved. "});
      })
    });

    router.put('/:id', validatePostId, (req, res) => {
        let id = req.params.id;
        let post = req.body;
      
        POST.update(id, post)
          .then(upPost => {
            console.log('Update success.');
            res.status(200).json(upPost);
          })
          .catch(err => {
            res.status(500).json({ error: "The user information could not be updated." });
          })
      });

      module.exports = router