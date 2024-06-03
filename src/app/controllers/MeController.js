import Course from "../models/Course.js";
import { mutiMongooseToObject } from "../../util/mongoose.js";

class meController {
    stored(req, res, next) {
        Course.find({})
        .then(course => {
            res.render('me/stored', {
                course: mutiMongooseToObject(course)
            })
        })
        .catch(error => next(error));
    }
}
export default new meController();