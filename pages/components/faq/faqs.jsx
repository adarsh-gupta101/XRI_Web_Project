import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Faq from "react-faq-component";
import Head from "next/head";
import Banner from "./Banner";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Do you conduct Qualitative Research? ",
      content: `Absolutely.  Around 50% of our projects are qualitative.  We regularly undertake qualitative projects, principally involving  focus groups and IDIs (in-depth interviews) across the Zimbabwe and Africa.  We can provide full service from research design, screener/topic guide design through to reporting, or maybe you only want help with recruitment and/or moderation:  we offer high quality recruitment and extremely experienced in-house moderators. `,
    },
    {
      title: "Do you conduct Quantitative Research?",
      content:
        "Absolutely.  Around 50% of our projects are quantitative.  We regularly undertake quantitative projects across the Zimbabwe and Africa : face-to-face PAPI/CAPI, CATI/telephone, online (including set-up and hosting) and postal.  We have a nationwide network of interviewers for face-to-face surveys, including in-home, doorstep, street and CLTs (central location/hall tests).  We can provide full service from research design, sampling, questionnaire design, through to logistics and reporting, or maybe you only want help with  fieldwork and/or data entry/analysis – this is managed entirely in-house i.e. we do not sub-contract…this aids project management and gives added value to clients",
    },
    {
      title: "Do you conduct International Research?",
      content: `Yes.  We regularly undertake single and multi-country studies.  Besides the Zimbabwe, these projects are typically focused on Southern Africa Region… we also coordinate projects worldwide.  The real benefit of commissioning us to manage a multi-country study on your behalf is not just the consistency of approach and therefore deliverables, but above all, we are able to significantly reduce the project management hours you need to commit to the project `,
    },
    {
      title:
        "Are you a member of/listed by any research associations/societies?",
      content:
        "We are a Company Partner of the MRAZ and we abide by their Code of Conduct and thereby commit to the highest research standards.",
    },
    {
      title: "What quality control procedures do you have in place?",
      content: `<div><p>Our quality control checks are: 100% of our qualitative recruits are rescreened from our office; 10% of all quantitative respondents (face-to-face or telephone) are re-contacted for quality control purposes;  100% of our data entry is verified (double-entered) to ensure accuracy.</p>
    <p>
    We do not sub-contract any element of our Zimbabwean research, meaning our project managers are ‘hands-on’ and close to all elements of the research, ensuring excellent communication, flexibility to change, and quality control throughout.  
    </p><p>We abide by the MRAZ Code of Conduct at all times.  Our interviewers carry an official ID Card for all face-to-face research.  Our telephone interviewers supply</p> the office number at the conclusion of all telephone interviews.  </div>`,
    },
    {
      title:
        "What if we only want to access part of your service offering i.e. not full service?",
      content:
        "No problem.  Whilst we are a full service agency, we have many clients who ‘pic’n’mix’ from our services.  You may wish to design your own study, have us undertake the fieldwork and data entry, and write your own report from the data file and/or tabulations provided.  You may be undertaking a large-scale qualitative study and want to bring on board additional experienced moderators from our staff to work alongside your  moderators – we can undertake depths/groups and provide feedback (audio/video, debrief/report as required).  Let us know where you need help, and we are sure to be able to provide a competitive price for you to access just the services you need.",
    },
    {
      title:
        "Have you worked in my industry before?",
      content:
        `<div><p>
        Most likely!  With 40+ years experience and having completed more than 2000 successful projects, it highly likely we have the experience you are looking for. Here's just a taste:
        <p><p>Advertising, Arts, Automotive, Banks & Building Societies, Beauty - Cosmetics and Toiletries, Building & Construction, Charity & Not-for-profit, Design & Manufacture, Durables/White Goods/Electrical Goods, Entertainment, Energy/Utilities, Environment, Events & Conferences, Equipment, Finance & Investment, Food & Drinks, FMCG, Gambling, Heathcare, Home & Garden, HR/Employee, Insurance, International, Internet & Social Media, IT & Technology, Logistics, Media - Print & Broadcast, Membership Organisations, PR, Public Sector/Local Government, Retail, Sport/Fitness & Leisure, Telecomms, Tobacco & E-Cigarettes, Tools & Trades, Travel & Tourism</p></div>`,
    }, {
      title:
        "Do you work in my region?",
      content:
        "<p>We have more than 20 Area Supervisors nationwide, managing our local interviewer teams covering major cities and towns as well as suburban or more rural location. Just some of the locations we work in are listed below. . . our interviewers will also travel to new locations where projects demand.<p><p>In the past, upon request, we have also worked with clients to deliver training to local people so that they might become interviewers for a specific project (usually local authority or charitable), providing a legacy of employment for those that pass the practicacilties of field research. Also see question 09.</p>",
    },
    {
      title:"Can you reach minority communities?",
      content:"<p className='text-2xl'>The simple answer is yes, given sufficient time to engage with the community concerned.</p>"
    }
  ],
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "#ff00bb",
  rowTitleColor: "blue",
  rowContentTextSize: '18px',
  rowContentColor: 'pink',

  // rowContentPaddingTop	: "10px",
  // rowContentPaddingBottom	:"100px",
  rowContentColor: "grey",
  // arrowColor: "red",
};
function faqs() {
  return (
    <div>

      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      {/* <Header /> */}
      <Header />
      <Banner/>

      <div className='m-2 md:m-16'>
        {" "}
        <Faq data={data} styles={styles} config={config} />
      </div>

      <Footer />
    </div>
  );
}

export default faqs;
