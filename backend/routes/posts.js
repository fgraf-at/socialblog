const express = require("express");
const multer = require("multer");
const Post = require("../model/post");
const router = express.Router();

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  },
});

router.post(
  "",
  multer({ storage: storage }).single("image"),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    console.log("hier: " + req.body.currentDate);
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      imagePath: url + "/images/" + req.file.filename,
      currentDate: req.body.currentDate,
    });
    console.log(post);
    post.save().then((createdPost) => {
      res.status(201).json({
        message: "Post added successfully",
        post: {
          ...createdPost,
          id: createdPost._id,
        },
      });
    });
  }
);
router.get("", (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const postQuery = Post.find();
  let fetchedDocuments;
  if (pageSize && currentPage + 1) {
    postQuery.skip(pageSize * currentPage).limit(pageSize);
  }
  postQuery
    .then((documents) => {
      fetchedDocuments = documents;
      return Post.countDocuments();
    })
    .then((count) => {
      fetchedDocuments = fetchedDocuments.map((x) => {
        return {
          id: x._id,
          title: x.title,
          content: x.content,
          imagePath: x.imagePath,
          currentDate: x.currentDate,
        };
      });
      res.status(200).json({
        posts: fetchedDocuments,
        maxPosts: count,
      });
    });
});
router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then((post) => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  });
});
router.put(
  "/:id",
  multer({ storage: storage }).single("image"),
  (req, res, next) => {
    imagePath = req.body.imagePath;
    if (req.file) {
      const url = req.protocol + "://" + req.get("host");
      imagePath = url + "/images/" + req.file.filename;
    }
    post = new Post({
      _id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      imagePath: imagePath,
    });
    Post.updateOne({ _id: req.params.id }, post)
      .then((result) => {
        res.status(200).json({
          message: "update successful",
        });
      })
      .catch(() => console.error("an error occured!"));
  }
);

router.delete("/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({
        message: "Post has been deleted",
      });
    })
    .catch((error) => {
      console.log(
        "An error occured,  the id could not be found in the database"
      );
    });
});
module.exports = router;
