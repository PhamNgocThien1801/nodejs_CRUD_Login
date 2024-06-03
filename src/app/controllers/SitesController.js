import Course from "../models/Course.js";
import { mutiMongooseToObject } from "../../util/mongoose.js";
class SitesController {
    home(req, res, next) {
        Course.find({})
        .then(course => {
            res.render('home', {
                course: mutiMongooseToObject(course)
            })
        })
        .catch(error => next(error));
    }
    search(req, res) {
        res.render('search');
    }
    create(req, res, next) {
        res.render('create')
    }
}
export default new SitesController();