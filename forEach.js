var colors = [`red`, 'blue', 'green'];

for(var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(function(color) {
    console.log(color);
});

// ------------

function handlepost(){
    var posts = [
      {id: 1, title:'jsニュース'},
      {id: 2, title:'リファクター・シティ'},
      {id: 3, title:'Rubyの良いところ'}
    ];
    posts.forEach(post =>savePost(posts))
  }

  // ------------

  