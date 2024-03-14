

function redirectSingleBlog(id) {
  window.location.href = `pages/moreblogs.html?blogId=${id}`;
}

const apiUrl = "https://brand-backend-v2xk.onrender.com/brand/blog/gets";

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
        <div class="bdisc">
          <h3>${blog.title}</h3>
          <p>${blog.description.slice(0,100)}...</p>
        </div>
        <input type="button" value="READ MORE" id="submit" class="sending" onclick="redirectSingleBlog('${blog._id}')">
        <span id="success"></span>
      </div>
    `;
  });
};
