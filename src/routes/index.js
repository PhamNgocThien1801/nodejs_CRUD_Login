import router from './courses.js'; 
import routerSite from './site.js'
import meRouter from './me.js'; 
const route = (app) => {
    app.use('/', routerSite);

    app.use('/courses', router);

    app.use('/me', meRouter);
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
    
    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    // });
}

export default route;