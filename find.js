var posts = [
    {id:1, title:'oldposts'},
    {id:2, title:'newposts'}
];

var comment = { postId:2, content:'good'}

function postForComment(post, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}

// postForComment(posts, comment);
var result = postForComment(posts, comment);
console.log(result);