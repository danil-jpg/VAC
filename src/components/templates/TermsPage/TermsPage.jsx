import React from "react";
import PageTitle from "../../molecules/pageTitle/PageTitle";
import DropText from "../../molecules/dropText/DropText";
import s from "./terms.module.scss";

const TermsPage = () => {
  return (
    <div>
      <PageTitle text={"Terms & Conditions"} />
      <div className={`container ${s.termsWr}`}>
        <DropText
          arr={[
            {
              title:
                "Please read these terms and conditions of use carefully before using this web site",
            },
            { title: "Modifications of the terms and conditions" },
            { title: "How we work" },
            { title: "Authorization" },
            { title: "Links" },
            { title: "Minors" },
            { title: "Restricted access" },
            { title: "Governing law" },
            { title: "Privacy policy" },
            { title: "Personal information" },
            { title: "Collecting personal information" },
            { title: "Using and sharing personal information" },
            { title: "Sharing your personal information" },
            { title: "Retaining your personal information" },
            { title: "Contacting you" },
            { title: "Accessing your personal information stored by us" },
            { title: "Responding to privacy concerns or complaints" },
          ]}
        />
      </div>
    </div>
  );
};

export default TermsPage;
