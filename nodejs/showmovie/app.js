var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser());
app.listen(port);

console.log('showmovie started on port ' + port);

app.get('/', function(req, res) {
    res.render('index', {
        title: 'showmovie 首页',
        movies: [{
            title: '',
            _id: 1,
            poster: '/poster.jpg'
        },{
            title: '',
            _id: 2,
            poster: '/poster.jpg'
        },{
            title: '',
            _id: 3,
            poster: '/poster.jpg'
        },{
            title: '',
            _id: 4,
            poster: '/poster.jpg'
        },{
            title: '',
            _id: 5,
            poster: '/poster.jpg'
        },{
            title: '',
            _id: 6,
            poster: '/poster.jpg'
        },{
            title: '',
            _id: 7,
            poster: '/poster.jpg'
        },{
            title: '',
            _id: 8,
            poster: '/poster.jpg'
        },{
            title: '',
            _id: 9,
            poster: '/poster.jpg'
        },]
    });
});

app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: 'showmovie 详情页',
        movie: {
            doctor: '何塞.帕蒂利亚',
            country: '美国',
            title: '机械战警',
            year: 2014,
            poster: '/poster.jpg',
            language: '英语',
            flash: '/aaa.mp4',
            summary: '暂无介绍'
        }
    });
});

app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: 'showmovie 后台录入页',
        movie: {
            title: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
    });
});

app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: 'showmovie 列表页',
        movies: [{
            title: '机械战警',
            _id: 1,
            doctor: '何塞.帕蒂利亚',
            country: '美国',
            year: 2014,
            poster: '/poster.jpg',
            language: '英语',
            flash: '/aaa.mp4',
            summary: '介绍省略'
        }]
    });
});