import express from "express";
import {
  activateUser,
  getUserInfo,
  loginUser,
  logoutUser,
  registrationUser,
  socialAuth,
  updatePassword,
  updateProfilePicture,
  updateToken,
  updateUserInfo,
} from "../controllers/user.controller";
import { isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/", registrationUser);

userRouter.post("/activate", activateUser);

userRouter.post("/login", loginUser);

userRouter.get("/logout",isAuthenticated, logoutUser);

userRouter.get("/refresh", updateToken);

userRouter.get("/", isAuthenticated,getUserInfo);

userRouter.post("/social-auth", socialAuth);

userRouter.put("/",isAuthenticated, updateUserInfo);

userRouter.put("/update-password",isAuthenticated, updatePassword);

userRouter.put("/update-avatar",isAuthenticated, updateProfilePicture);


export default userRouter;
