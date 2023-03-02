import React from 'react';
import styled from 'styled-components';
import { EckoDEXLogo } from '../assets';
import Label from '../components/shared/Label';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 64px 180px;
  padding-bottom: 0;
  & > *:not(:last-child) {
    padding-bottom: 16px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 16px;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 72px;
  & > *:not(:last-child) {
    padding-bottom: 40px;
  }

  hr.solid {
    border-top: 1px solid #fff;
    width: 100%;
  }

  table,
  th,
  td {
    border: 1px solid grey;
  }
  td {
    padding: 10px;
    width: 25%;
  }
  table {
    margin-top: 40px;
    width: 100%;
  }
  p {
    margin: 0px;
  }
`;

const PrivacyPolicyContainer = () => {
  return (
    <OuterContainer id="proof_of_dex">
      <EckoDEXLogo style={{ marginBottom: 32, height: 70, width: 300 }} />
      <Intro gap={40}>
        <Label fontSize={48}>eckoDEX PRIVACY POLICY</Label>
        <Label fontSize={22} fontFamily="medium">
          Last Updated: February 21, 2023
        </Label>
        <Label fontSize={20} fontFamily="medium">
          This Privacy Policy (the “Policy”) explains how eckoDEX (“the Company”, “we”, “us” or “our”) collects, uses, and shares data in connection
          with our decentralized exchange platform (the “Services”). Your use of the Services is subject to this Policy and by using the Services you
          hereby agree to the terms of this Policy.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Data We Collect
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We collect non-identifiable data, including the number of users, session statistics, and approximate geolocation, through the use of Google
          Analytics. We do not store IP addresses in a way that can be correlated to a user.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          How We Use Data
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We use the data we collect to help improve and customize the Services and to protect against, investigate and stop fraudulent, unauthorized,
          or illegal activity.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          How We Share Data
        </Label>
        <Label fontSize={20} fontFamily="medium">
          As necessary, we may share the data we collect with our service providers and vendors to provide, deliver, and improve the Services. We may
          also share data to comply with our legal obligations, to protect against fraudulent or illegal activity, or in the event of a business
          transaction. We do not share data with third parties for marketing purposes.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          How We Store Data
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We will retain the data we collect only for as long as is necessary for the purposes set out in this Policy. We will retain and use this
          data to the extent necessary to comply with our legal obligations (for example, if we are required to retain this data to comply with
          applicable laws), resolve disputes, and enforce our legal agreements and policies.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Additional Notice to Certain U.S. State Residents
        </Label>
        <Label fontSize={20} fontFamily="medium">
          <p>
            Under some U.S. state laws, including the California Consumer Privacy Act of 2018 (CCPA) and the California Privacy Rights Act (CPRA),
            residents may have certain rights with respect to data collected relating to such residents:
            <br />
            <br />
            ● Right to Know: The right to request the Personal Data that we collect, use or disclose and information about our data practices;
            <br />
            ● Right to Request Deletion: The right to request that we delete the Personal Data we have collected about you;
            <br />
            ● Right to Opt-Out of Data Sales: The right to restrict the sale of your Personal Data we have collected to third parties;
            <br />
            ● Right to Non-Discrimination: The right to not be discriminated against for exercising any of these rights;
            <br />
            ● Right to Correct Information: The right to update or correct the Personal Data that we collect;
            <br />
            ● Right to Limit Use or Disclosure of Sensitive Personal Information: The right to limit the use and disclosure of Sensitive Personal
            Information (as defined under the CPRA);
            <br />
            ● Right to Access Information Related to Automated Decision Making: The right to inquire about our logic involved in automated
            decision-making applied to Personal Data we collect; and
            <br />● Right to Opt-Out of Automated Decision-Making Technology: The right to request your removal from having automated decision-making
            applied to your Personal Data that we collect.
            <br />
            <br />
            We do not “sell” personal information as defined under the CCPA or CPRA. Please review the sections above for further details about the
            categories of parties with whom we share information.
            <br />
            <br />
            Please note, due to the nature of the blockchain, we cannot edit or delete information that is stored on a particular blockchain.
            Information such as your transaction data, blockchain wallet address, and assets held by your address that may be related to the data we
            collect is beyond our control.
          </p>
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Submitting a Request
        </Label>
        <Label fontSize={20} fontFamily="medium">
          You can submit a request for information, access, or deletion to contact@ecko.finance.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Identity Verification
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We are required by applicable laws to collect and verify the identity of any individual submitting a request to access or delete personal
          information before providing a substantive response.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Authorized Agents
        </Label>
        <Label fontSize={20} fontFamily="medium">
          California residents can designate an “authorized agent” to submit requests on their behalf. We will require the authorized agent to have a
          written authorization confirming their authority.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Disclosures for European Union Data Subjects
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We process the data we collect (described above), for the purposes described in the section titled “How We Use Data”. If any such data
          constitutes personal data, as defined in the General Data Protection Regulations, (“GDPR”), the rights and obligations in this section will
          apply. Our bases for processing this data include: (i) you have given consent to the process to us or our service provides for one or more
          specific purposes; (ii) processing is necessary for the performance of a contract with you; (iii) processing is necessary for compliance
          with a legal obligation; and/or (iv) processing is necessary for the purposes of the legitimate interested pursued by us or a third party,
          and your interests and fundamental rights and freedoms do not override those interests.
          <br />
          <br />
          Your rights under the GDPR include the right to (i) request access and obtain a copy of your personal data, (ii) request rectification or
          erasure of your personal data, (iii) object to or restrict the processing of your personal data; and (iv) request portability of your
          personal data. Additionally, you may withdraw your consent to our collection at any time. Nevertheless, we cannot edit or delete information
          that is stored on a particular blockchain. Information such as your transaction data, blockchain wallet address, and assets held by your
          address that may be related to the data we collect is beyond our control.
          <br />
          <br />
          To exercise any of your rights under the GDPR, please contact us at contact@ecko.finance. We may require additional information from you to
          process your request. Please note that we may retain information as necessary to fulfill the purpose for which it was collected and may
          continue to do so even after a data subject request in accordance with our legitimate interests, including to comply with our legal
          obligations, resolves disputes, prevent fraud, and enforce our agreements.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Changes to Privacy Policy
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We may update this Policy from time to time to reflect changes in our data collection, use, and sharing practices. We encourage you to
          review this Policy periodically for any updates.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Contact Us
        </Label>
        <Label fontSize={20} fontFamily="medium">
          If you have any questions or concerns about our data collection, use, and sharing practices, please contact us at contact@ecko.finance.
        </Label>
      </Intro>
    </OuterContainer>
  );
};

export default PrivacyPolicyContainer;
