
/*
 * GET home page.
 */
var User = require('../models/user.js');

module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index', {
      title: '首页'
    });
  });

  app.get('/reg', checkNotLogin);
  app.get('/reg', function(req, res){
    res.render('reg', {
      title: '用户注册'
    });
  });

  app.post('/reg', checkNotLogin);
  app.post('/reg', function(req, res){
    var newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    User.get(newUser.email, function(err, user) {
      if(user){
        err = '该邮箱已经注册过！';
      }
      if(err){
        req.flash('error', err);
        return res.redirect('/reg');
      }

      newUser.save(function(err){
        if(err){
          req.flash('error', err);
          return res.redirect('/reg');
        }
        req.session.user = newUser;
        req.flash('success', '注册成功!');
        res.redirect('/');
      });
    });
  });

  app.get('/login', checkNotLogin);
  app.get('/login', function(req, res) {
    res.render('login', {
      title: '用户登录'
    });
  });

  app.post('/login', checkNotLogin);
  app.post('/login', function(req, res) {
    User.get(req.body.email, function(err, user){
      if(!user){
        req.flash('error', '用户不存在！');
        return res.redirect('/');
      }
      if(user.password != req.body.password) {
        req.flash('error', '用户密码错误！');
        return res.redirect('/login');
      }
      req.session.user = user;
      req.flash('success', '登录成功！');
      res.redirect('/');
    });
  });

  app.get('/logout', checkLogin);
  app.get('/logout', function (req, res) {
    req.session.user = null;
    req.flash('success', '登出成功！');
    res.redirect('/');
  });

};

function checkLogin(req, res, next) {
  if(!req.session.user){
    req.flash('error', '未登录！');
    return res.redirect('/login');
  }
  next();
}

function checkNotLogin(req, res, next){
  if(req.session.user){
    req.flash('error', '已登录！');
    return res.redirect('/');
  }
  next();
}
