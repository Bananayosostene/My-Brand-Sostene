function redirectSingleBlog(id) {
  window.location.href = `pages/moreblogs.html?blogId=${id}`;
  console.log(id);
}

const apiUrl = "https://brand-backend-v2xk.onrender.com/brand/blog/gets";

// Make a GET request using the Fetch API
fetch(apiUrl, {
  method: "GET",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((userData) => {
    // Process the retrieved user data
    console.log("User Data:", userData.data);
    fillBlogs(userData.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
console.log("fetch here");

const fillBlogs = (blogs) => {
  const slicedBlogs = blogs.slice(0, 3);

  slicedBlogs.map((blog) => {
    const allblog = document.getElementById("allblog");
    allblog.innerHTML += `
      <div>
        <div><img class="portfolio-imgs" src="${blog.image}"/></div>
        <div class="sdisc">
          <h3>${blog.title}</h3>
          <p>${blog.description}</p>
        </div>
        <input type="button" value="READ MORE" id="submit" class="sending" onclick="redirectSingleBlog('${blog._id}')">
        <span id="success"></span>
      </div>
    `;
  });
};
