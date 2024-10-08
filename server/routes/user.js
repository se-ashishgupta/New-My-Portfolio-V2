import express from "express";
import {
  getUserDetails,
  login,
  register,
  updateUserDetails,
} from "../controllers/user.js";
import configureMulterUpload from "../middleware/multer.js";
import { requireAuthentication } from "../middleware/authentication.js";
import countSiteVisit from "../middleware/countSiteVisit.js";
const router = express.Router();

router
  .route("/register")
  .post(configureMulterUpload("single", "file"), register);
router.route("/login").post(login);
router.route("/getuserdetails").get(countSiteVisit, getUserDetails);
router
  .route("/updateuserdetails")
  .post(
    requireAuthentication,
    configureMulterUpload("single", "file"),
    updateUserDetails
  );

export default router;
