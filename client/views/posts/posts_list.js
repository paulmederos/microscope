var postsData = function(){
  return Posts.find();
}

Template.postsList.helpers({
  posts: postsData
});