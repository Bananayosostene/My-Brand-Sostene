

        function getBlogs() {
          const blogsString = localStorage.getItem("blogs");
          return blogsString ? JSON.parse(blogsString) : [];
        }



document.addEventListener("DOMContentLoaded", function () {
  
  var moreBlogs = getBlogs();
  moreBlogs.map((blog, index) => {
    const allblog = document.getElementById("allblog");
    allblog.innerHTML += `

            <div class="blog1">
                <div><img class="portfolio-imgs" src="${blog.blogImg}"/></div>
                <div class="sdisc">
                    <h3>${blog.title}</h3>
                    <p>${blog.blogDisc}</p>
                </div>
                <input type="button" value="READ MORE" id="submit" class="sending"> <span id="success"></span>
            </div>
          
        `;
  });
  
})