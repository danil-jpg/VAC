import React from "react";
import PageTitle from "../../molecules/pageTitle/PageTitle";
import DropText from "../../molecules/dropText/DropText";
import s from "./policyPage.module.scss";

const PolicyPage = () => {
  return (
    <div>
      <PageTitle text={"Privacy Policy"} />
      <div className={`container ${s.termsWr}`}>
        <DropText
          arr={[
            {
              title: "Terms",
            },
            { title: "Authorization" },
            { title: "Links" },
            { title: "Site terms of use modifications" },
            { title: "Governing law" },
            { title: "How we treat your personal information" },
            { title: "Cookies" },
          ]}
        />
      </div>
    </div>
  );
};

export default PolicyPage;
