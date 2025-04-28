var post = {id: 4, title:'first posts'};

var comments = [
    {postId: 4, content:'like'},
    {postId: 3, content:'good'},
    {postId: 4, content:'understand'}
];

function commentsForPost(post, comments){
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    });
}

var result = commentsForPost(post, comments);
console.log(result);
