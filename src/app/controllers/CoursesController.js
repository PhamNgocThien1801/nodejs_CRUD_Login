import { mongooseToObject } from "../../util/mongoose.js";
import Course from "../models/Course.js";

class CoursesController {
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
        .then(courses => {
            res.render('courses/detail', {
                courses: mongooseToObject(courses)
            });
        })
        .catch(next);
    }
    courses(req, res, next) {
        res.render('courses')
    }
    create(req, res, next) {
        res.render('courses/create')
    }
    store(req, res, next) {
        const data = req.body;
        const course = new Course(data);
        course.save()
        .then(() => res.redirect('/'))
        .catch(error => {
            
        })
    }
    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => {
            res.render('courses/edit', {
                course: mongooseToObject(course)
            })
        })
    }
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored'))
        .catch(next)
    }
}
export default new CoursesController();