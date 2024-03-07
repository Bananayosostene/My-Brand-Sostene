


function getBlogs() {
  const blogsString = localStorage.getItem("blogs");
  
  return blogsString ? JSON.parse(blogsString) : [];
}

let moreblogs = getBlogs()
console.log("moreblogs", moreblogs)

function redirectSingleBlog(id) {
  // console.log(id);
  window.location.href = `pages/moreblogs.html?blogId=${blog._id}`;
  console.log(id);
}

const fillBlogs = (blogs) => {
  const slicedBlogs = blogs.slice(0, 3);
  
     slicedBlogs.map((blog, index) => {
       const allblog = document.getElementById("allblog");
       allblog.innerHTML += `

            <div >
                <div><img class="portfolio-imgs" src="${blog.image}"/></div>
                <div class="sdisc">
                    <h3>${blog.title}</h3>
                    <p>${blog.description}</p>
                </div>
                <input type="button" value="READ MORE" id="submit" class="sending" onclick="redirectSingleBlog(${blog.id})"> <span id="success"></span>
            </div>
          
        `;
     });
  }




const apiUrl = "http://localhost:5000/brand/blog/gets";

// Make a GET request using the Fetch API
fetch(apiUrl, {
  method: "GET",

})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    // Process the retrieved user data
    console.log('User Data:', userData.data);
    fillBlogs(userData.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
console.log("fetch here")

// fillBlogs(moreblogs);