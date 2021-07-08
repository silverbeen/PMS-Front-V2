import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  FamilyLetter,
  Notice,
  MyPage,
  FamilyLetterWritten,
  NoticeWritten,
  MainPage,
  Login,
  SignUp,
  Calendar,
  CreatorsInfo,
  ClubInfo,
  CompanyInfo,
  PhotoAlbum,
} from "../components/index";

function UserRouter() {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/Notice" component={Notice} exact />
      <Route path="/MyPage" component={MyPage} exact />
      <Route
        path="/FamilyLetterWritten"
        component={FamilyLetterWritten}
        exact
      />
      <Route path="/NoticeWritten" component={NoticeWritten} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/sign-up" component={SignUp} exact />
      <Route path="/calender" component={Calendar} exact />
      <Route path="/creators-info" component={CreatorsInfo} exact />
      <Route path="/club-info" component={ClubInfo} exact />
      <Route path="/company-info" component={CompanyInfo} exact />
      <Route path="/MyPage" component={MyPage} exact />
      <Route path="/FamilyLetter" component={FamilyLetter} exact />
      <Route
        path="/FamilyLetterWritten"
        component={FamilyLetterWritten}
        exact
      />
      <Route path="/NoticeWritten" component={NoticeWritten} exact />
      <Route path="/Notice" component={Notice} exact />
      <Route path="/photo-album" component={PhotoAlbum} exact />
    </Switch>
  );
}

export default UserRouter;
