const blogs = [
  { title: "title 1", author: "author 1" },
  { title: "title 2", author: "author 2" },
  { title: "title 3", author: "author 3" },
  { title: "title 4", author: "author 4" },
];

const listBlogs = (blogArr) => {
  return new Promise((resolve, reject) => {
    if (blogArr) {
      blogArr.map((blog) => console.log(blog));
      resolve("Blogs are listed!");
    }
    reject("Could not list blogs, please try again later");
  });
};

const addBlog = (blog, target) => {
  return new Promise((resolve, reject) => {
    if (blog && target) {
      target.push(blog);
      console.log(blog);
      resolve("Blog added!");
    }
    reject("Could not add the blog, please try again later");
  });
};

async function process() {
  try {
    const blogList1 = await listBlogs(blogs)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    const newBlog = {
      title: "Title 99",
      author: "Author 99",
    };

    const addBlog1 = await addBlog(newBlog, blogs)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    let blogList2 = await listBlogs(blog)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch {
    console.log("ERROR");
  }
}

console.log(listBlogs(blogs));
console.log(addBlog({ title: "Title 123", author: "Author 123" }, blogs));
console.log(listBlogs(blogs));
