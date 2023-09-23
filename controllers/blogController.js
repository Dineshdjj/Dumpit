const Blog = require('../models/blogs1');

const home = (req,res)=>{
    res.render('./home1');
}
const drink = (req,res)=>{
    res.render('Drinking');
}
const drugs = (req,res)=>{
    res.render('Drugs');
}
const game = (req,res)=>{
    res.render('Gaming');
}
const smoke = (req,res)=>{
    res.render('Smoking');
}
const about = (req,res)=>{
    res.render('about1');
}
const ignite = (req,res)=>{
    res.render('Ignite');
}
const contact = (req,res)=>{
    res.render('contactus1');
}
const mood = (req,res)=>{
    res.render('mood');
}
const index = (req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('blog-cat2',{title:'all blogs',blogi:result});
    })
    .catch((err)=>{
        console.log(err);
    })
}

const create = (req,res)=>{
    res.render('blog-cat1');
}

const create_post = (req,res)=>{
    const blogi = new Blog(req.body);
    blogi.save()
        .then((result)=>{
            res.redirect('/create');
        })
        .catch((err)=>{
            console.log(err);
        })
}

const details = (req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
        .then((result)=>{
            res.render('blog-details',{blog:result,title:'Blog details'})
        })
        .catch((err)=>{
            res.status(404).render('404',{title:'error'});
        })
}

const _delete = (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect:'allBlog'});
        })
        .catch((err)=>{
            console.log(err);
        })
}

module.exports = {
    home,
    drink,
    drugs,
    game,
    smoke,
    about,
    ignite,
    contact,
    mood,
    index,
    create,
    create_post,
    details,
    _delete,
}