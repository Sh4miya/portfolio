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
          <strong>Overview:</strong> InvitesOnly is a private social product for
          real-world events, built to support trusted profiles, discovery, and a
          smooth mobile experience.
          <br />
          <br />
          <strong>My Role:</strong> I designed and built the product
          independently, handling the app experience, backend services, and
          release preparation end to end.
        </p>
        <p className="left-align">
          The app is built with Flutter and AWS-backed services. The source code
          is private, but the product direction, implementation decisions, and
          shipped work are all my own.
          <br />
          <br />
          Tentative release date: <i>July 2026</i>
        </p>
        <ul className="left-align">
          <li>
            Built the product solo across the full stack, from feature
            implementation through release workflows
          </li>
          <li>
            Designed the mobile UX and implemented the app in Flutter with
            reusable, production-focused components
          </li>
          <li>
            Managed build pipelines and release preparation for both Google Play
            and the Apple App Store
          </li>
          <li>
            Implemented backend infrastructure on AWS using Cognito, API
            Gateway, Lambda, S3, SQS, SNS, IAM, CloudWatch, and push
            notification integrations
          </li>
          <li>
            Integrated supporting services including Firebase, AWS Rekognition,
            and Azure Facial Recognition
          </li>
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
