$("document").ready(function() {
    loadPosts();

    var postsClassId = "#posts"

    function createPost(title, date, filename){
        const template = `<div id="blogItem"> 
            <p id="blogDate"> 
                ${date} 
            </p> \
            <h3 id="blogTitle"> 
                <a href="${filename}">${title}</a> 
            </h3> 
        </div>`
        return template;
    }

    function getPostsMeta(){
        posts = data
        return posts;
    }

    function createPostFromMeta(post){
        return createPost(post.title, post.date, post.filename)
    }

    function writePostToView(post, tag){
        $("#posts").append(post);
    }

    function loadPosts(){
        var postsMeta = getPostsMeta();
        for (const postKey in postsMeta) {
            postMeta = postsMeta[postKey];
            post = createPostFromMeta(postMeta);
            writePostToView(post, postsClassId)
        }
    }
});

