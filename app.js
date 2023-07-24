const products = [];

exports.add_product = (req, res, next) => {
    res.render('add-prod', {
        Error: false,
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProd: true
    });
}

exports.post_add_product = (req, res, next) => {
    // console.log(req.body);
    products.push({
        title: req.body.title,
        image: req.body.image,
        price: req.body.price
    });
    // res.render('shop-prod', {
    //     Error: false,
    //     pageTitle: 'Shop',
    //     path: '/',
    //     prods: products,
    //     hasProducts: products.length > 0,
    //     activeShop: true,
    //     productCSS: true
    // });
    // res.redirect('/');
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'show-prod.html'));
    // res.sendFile(path.join(rootDir,"views","Html_template","show-prod.html"));

    // res.send('<h1>Hello from Express!</h1>');
    const prod = products;

    res.render('show-prod', {
        activeShop: true,
        productCSS: true,
        Error: false,
        prod: prod,
        pageTitle: 'Shop',
        path: '/'
    });
}
