var blog_posts=[];//deals with all gthe blog posts
// var hello ='hello';
module.exports.create=function(req,res){
// console.log(req.body);
// res.json(req.body);
blog_posts.push(req.body);
res.redirect('/article');
}
module.exports.index=function(req,res){

    res.json(blog_posts);
}

module.exports.new=function(req,res){
    //res.render concatenated with a template(html file) is a way cleaner approach bt for understanding we followed this untidy approach
    res.send("<form method='post' action='/article'>\
    <input type='text' name='title' placeholder='Enter Title'/>\
    <br>\
    <textarea name='body' placeholder='enter description'></textarea>\
    <br>\
    <input name='author' placeholder='Enter author_name' type='text'/>\
    <br>\
    <button type='submit'>POST</post>\
    </form>")
}