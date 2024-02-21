

        function getBlogs() {
          const blogsString = localStorage.getItem("blogs");
          return blogsString ? JSON.parse(blogsString) : [];
        }
         

              function redirectSingleBlog(id) {
                // console.log(id);
                window.location.href = `pages/moreblogs.html?blogId=${id}`;
                console.log(id);
              }


document.addEventListener("DOMContentLoaded", function () {
  
  var moreBlogs = getBlogs();
  moreBlogs.map((blog, index) => {
    const allblog = document.getElementById("allblog");
    allblog.innerHTML += `

            <div >
                <div><img class="portfolio-imgs" src="${blog.blogImg}"/></div>
                <div class="sdisc">
                    <h3>${blog.title}</h3>
                    <p>${blog.blogDisc.slice(0, 150)} .........</p>
                </div>
                <input type="button" value="READ MORE" id="submit" class="sending" onclick="redirectSingleBlog(${blog.id})"> <span id="success"></span>
            </div>
          
        `;
  });
  
})