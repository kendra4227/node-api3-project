function validateUserId(req, res, next) {
  db.getById(req.params.id)
      .then(users => {
          if (users) {
          req.user = users;
          next();
          }
          else {
          res.status(500).json({ message: "No user with this ID exists" })
          }
      })
      .catch(error => {
          res.status(500).json({ message: "need to give an ID"})
      })
};

function validateUser(req, res, next) {
  if (req.body) {
      if (req.body.name) {
          next();
      }
      else {
          res.status(400).json({ message: "Missing name" })
      }
  } else {
      res.status(400).json({ message: "Missing user data" })
  }
}

function validatePost(req, res, next) {
  if (req.body) {
      if (req.body.text) {
          next();
      } else {
          res.status(400).json({ message: "Missing required text field" });
      }
  } else {
      res.status(400).json({ message: "Missing post data" });
  }
};

module.exports = { validatePost, validateUser, validateUserId}  

function validateUser(req, res, next) {
  if (req.body) {
    if (req.body.name) {
        next();
    }
    else {
        res.status(400).json({ message: "Missing name" })
    }
} else {
    res.status(400).json({ message: "Missing user data" })
}
}


function validatePost(req, res, next) {
  if (req.body) {
    if (req.body.text) {
        next();
    } else {
        res.status(400).json({ message: "Missing required text field" });
    }
} else {
    res.status(400).json({ message: "Missing post data" });
}
};
// STRETCH GOAL
function validatePostId(req, res, next) {
  
  let id = req.params.id;

  POST.getById(id)
    .then(post => {
      req.post = post;

      next();
    })
    .catch(err => {
      res.status(400).json({ message: "Invalid user ID." });
    })
  };

module.exports={validatePost,validateUser,validateUserId,router}