import React from "react";
import '../../style.scss';

function Other(){
    return(
        <>

        <h2>Additional Experience</h2>
        <h3>Blackout Games:</h3>
        <ul className="left-align">
            <li>General bug fixes for Rugby / Football</li>
            <li>Update and maintain in-game content for Rugby / Football</li>
            <li>Assist with monetisation and game design</li>
            <li>Discord / Community Manager for Rugby / Football</li>
            <li>Monitor discord for user reported bugs and apply fixes</li>
            <li>Data Analytics: Created measurements to monitor user premium currency expenses and income</li>
        </ul>

        <h3 className="no-gap-after">General:</h3>
        <ul className="left-align">
            <h4 className="no-gap-after">AWS:</h4>
            <li>Cognito</li>
            <li>API Gateway</li>
            <li>IAM (Identity and Access Management)</li>
            <li>S3</li>
            <li>DynamoDB</li>
            <li>SQS (Simple Queue Service)</li>
            <li>SNS (Simple Notification Service) and integration with sending mobile notifications to users from firebase</li>
            <li>Lambda and integration with S3, DynamoDB, SQS and SNS</li>
            <li>CloudWatch</li>
            <h4 className="no-gap-after">Firebase:</h4>
            <li>Authentication</li>
            <li>Mobile Notifications</li>
            <h4 className="no-gap-after">Mobile App Development:</h4>
            <li>Mobile native development using flutter for both iOS and Android</li>
        </ul>

        </>
    );

}
export default Other;