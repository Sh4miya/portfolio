import React from "react";
import ImageModal from "../ImageModal";
import invitesOnly1 from "../../images/invites-only-1.jpg";
import invitesOnly2 from "../../images/invites-only-2.jpg";

function InvitesOnly() {
  return (
    <>
      <div>
        <h2 className="project-name">InvitesOnly</h2>
        <p className="left-align">
          InvitesOnly is a social event and connection app built with Flutter, designed to help people meet,
          connect, and spend time together.
          <br />
          <br />
          Tentative release date: <i>July 2026</i>
        </p>
        <ul className="left-align">
          <li>Built the app across the full stack, from product implementation through to mobile release workflows</li>
          <li>Managed app builds and release preparation for both Google Play and the Apple App Store</li>
          <li>Implemented backend infrastructure on AWS using Cognito, API Gateway, Lambda, S3, SQS, SNS, IAM, CloudWatch, and push notification integrations</li>
          <li>Worked with Firebase services as part of the mobile app stack</li>
          <li>Integrated image and recognition services including AWS Rekognition and Azure Facial Recognition</li>
        </ul>
        <div className="project-thumbnails">
          <ImageModal src={invitesOnly2} alt="InvitesOnly app screenshot">
            <img src={invitesOnly2} alt="InvitesOnly app screenshot" />
          </ImageModal>
          <ImageModal src={invitesOnly1} alt="InvitesOnly app screenshot">
            <img src={invitesOnly1} alt="InvitesOnly app screenshot" />
          </ImageModal>
        </div>
      </div>
    </>
  );
}

export default InvitesOnly;
