import React from "react";
import { useHistory } from "react-router";
import * as S from "../style/schoolInfoStyle";
import { Company } from "../../../assets";
import { Link } from "react-router-dom";

const CompanyInfo = () => {
  const history = useHistory();

  const CompanyClickHandler = () => {
    history.push("company-info");
  };

  return (
    <>
      <S.CompanyInfo onClick={CompanyClickHandler}>
        <Link to="/company-info">
          <div className="container club">
            <S.Title>취업처 소개</S.Title>
            <div className="club-info">
              <S.Font14>대덕소프트웨어마이스터고등학교</S.Font14>
              <S.Font14>학생들의 취업처를 소개합니다</S.Font14>
            </div>
          </div>
          <img src={Company} alt="취업처 소개 사진"></img>
        </Link>
      </S.CompanyInfo>
    </>
  );
};

export default CompanyInfo;
