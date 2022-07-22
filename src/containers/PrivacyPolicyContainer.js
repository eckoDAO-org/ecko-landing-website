import React from 'react';
import styled from 'styled-components';
import { KaddexLogo } from '../assets';
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
      <KaddexLogo style={{ marginBottom: 32, height: 70, width: 300 }} />
      <Intro gap={40}>
        <Label fontSize={48}>KADDEX PRIVACY POLICY</Label>
        <Label fontSize={22} fontFamily="medium">
          Last Updated: June 01, 2022
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Introduction
        </Label>
        <Label fontSize={20} fontFamily="medium">
          Kaddex US Holdings Inc., a Delaware corporation, Kaddex DAO, and their affiliates (collectively, “Kaddex” or “We”), respect your privacy and
          are committed to protecting it through our compliance with this policy (“Privacy Policy”).
          <br />
          <br />
          This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit the websites
          www.xwallet.kaddex.com or www.kaddex.com (collectively, the “Websites”), the X-Wallet application, or any content, functionality, and
          services offered on or through the Websites or such application (collectively, the “Kaddex Services”), and our practices for collecting,
          using, maintaining, protecting, and disclosing that information.
          <br />
          <br />
          This Privacy Policy applies to information we collect:
          <br />
          <br />
          ● Through the Kaddex Services.
          <br />
          ● In email, text, and other electronic messages between you and the Kaddex Services or you and Kaddex in relation to the Kaddex Services.
          <br />
          ● Through mobile and desktop applications you download from the Websites, which provide dedicated non-browser-based interaction between you
          and the Websites.
          <br />
          ● When you interact with our advertising and applications on third-party websites and services, if those applications or advertising include
          links to this Privacy Policy.
          <br />
          <br />
          It does not apply to information collected by:
          <br />
          <br />
          ● Us offline or through any other means, including on any other website or application operated by any third party; or <br />
          ● Any third party, including through any application or content (including advertising) that may link to or be accessible from or through
          the Kaddex Services, except to the extent we collect information from a third party.
          <br />
          <br />
          Please read this Privacy Policy carefully to understand our policies and practices regarding your information and how we will treat it. If
          you do not agree with our policies and practices, your choice is not to use the Kaddex Services. By accessing or using the Kaddex Services,
          you agree to this Privacy Policy. This Privacy Policy may change from time to time (see Changes to Our Privacy Policy). Your continued use
          of the Kaddex Services after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for
          updates.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Persons Under the Age of 18
        </Label>
        <Label fontSize={20} fontFamily="medium">
          <p>
            The Kaddex Services are not intended for persons under 18 years of age. No one under age 18 should provide any information to or through
            the Kaddex Services. We do not knowingly collect personal information from persons under 18. If you are under 18, do not use or provide
            any information on the Websites or through any of the Websites’ or the Kaddex Services’ features, register on the Websites or otherwise
            through the Kaddex Services, make any purchases through the Kaddex Services, use any interactive or public comment features of the Kaddex
            Services, or provide any information about yourself to us, including your name, address, telephone number, email address, or any screen
            name or user name you may use. If you believe we might have any information from or about a person under 18, please contact us at
            [info@kaddex.com] .<br />
            <br />
            California residents may have additional rights regarding the collection and sale of their personal information under the California
            Consumer Privacy Act of 2018, as amended. Please see Your California Privacy Rights for more information.
          </p>
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Information We Collect About You and How We Collect It
        </Label>
        <Label fontSize={20} fontFamily="medium">
          <p>
            We collect several types of information from and about users of the Kaddex Services, including information:
            <br />
            <br />● By which you may be personally identified, such as name, postal address, e-mail address, telephone number, social security number
            or any other identifier by which you may be contacted online or offline (“<strong>Personal Information</strong>”);
            <br />
            ● That is about you but individually does not identify you; and/or
            <br />● About your internet connection, the equipment you use to access the Kaddex Services, and usage details.
            <br />
            <br />
            We collect this information:
            <br />
            <br />
            ● Directly from you when you provide it to us.
            <br />
            ● Automatically as you navigate through the Kaddex Services. Information collected automatically may include usage details, IP addresses,
            and information collected through cookies, web beacons, and other tracking technologies.
            <br />
            <br />
            Information You Provide to Us <br />
            <br />
            The information we collect through the Kaddex Services may include:
            <br />
            <br />● Information that you provide by filling in forms on our Websites and other features of the Kaddex Services. This includes
            information provided at the time of registering to use the Kaddex Services, subscribing to our services, posting material (including User
            Contributions), or requesting further services. We may also ask you for information when you report a problem with the Kaddex Services.
            <br />
            <br />
            Information We Collect Through Automatic Data Collection Technologies <br />
            <br />
            As you navigate through and interact with the Kaddex Services, we may use automatic data collection technologies to collect certain
            information about your equipment, browsing actions, and patterns, including:
            <br />
            <br />
            ● Details of your visits to our Websites and other features of the Kaddex Services, including traffic data, location data, logs, and other
            communication data and the resources that you access and use through the Kaddex Services.
            <br />
            ● Information about your computer or device and internet connection, including your IP address, operating system, and browser type.
            <br />
            ● Metadata and other information associated with other files stored on your device.
            <br />
            ● Real-time information about the location of your device.
            <br />
            <br />
            {/* [Click here [INCLUDE LINK TO DO NOT TRACK DISCLOSURES] for
            information on how you can opt out of location tracking on or
            through the Kaddex Services and how we respond to web browser
            signals and other mechanisms that enable consumers to exercise
            choice about such tracking.]
            <br />
            <br /> */}
            The information we collect automatically is only statistical data and does not include Personal Information other than your location, but
            we may maintain it or associate it with Personal Information we collect in other ways, receive from third parties, or that is public on
            the blockchain. It helps us to improve the Kaddex Services and to deliver a better and more personalized service, including by enabling us
            to:
            <br />
            <br />
            ● Estimate our audience size and usage patterns.
            <br />
            ● Store information about your preferences, allowing us to customize the Kaddex Services according to your individual interests.
            <br />
            ● Speed up your searches.
            <br />
            ● Recognize you when you return to the Kaddex Services.
            <br />
            <br />
            The technologies we use for this automatic data collection may include:
            <br />
            <br />● <strong>Cookies (or browser cookies).</strong> A cookie is a small file placed on the hard drive of your computer. You may refuse
            to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to
            access certain parts of the Kaddex Services. Unless you have adjusted your browser setting so that it will refuse cookies, our system will
            issue cookies when you direct your browser to the Websites. <br />● <strong>Flash Cookies.</strong> Certain features of the Kaddex
            Services may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from,
            and on the Websites. Flash cookies are not managed by the same browser settings as are used for browser cookies. For information about
            managing your privacy and security settings for Flash cookies, see Tracking Technologies and Advertising.
            <br />● <strong>Web Beacons.</strong> Pages of the Websites and our e-mails may contain small electronic files known as web beacons (also
            referred to as clear gifs, pixel tags, and single-pixel gifs) that permit Kaddex, for example, to count users who have visited those pages
            or opened an email and for other related website statistics (for example, recording the popularity of certain website content and
            verifying system and server integrity). <br />
            <br />
            We do not collect Personal Information automatically, but we may tie this information to Personal Information about you that we collect
            from other sources or you provide to us.
          </p>
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Third-Party Use of Cookies and Other Tracking Technologies
        </Label>
        <Label fontSize={20} fontFamily="medium">
          Some content or applications, including advertisements and decentralized applications, on the Kaddex Services are served by third-parties,
          including advertisers, ad networks and servers, content providers, and application providers. These third parties may use cookies alone or
          in conjunction with web beacons or other tracking technologies to collect information about you when you use the Kaddex Services. The
          information they collect may be associated with your Personal Information or they may collect information, including Personal Information,
          about your online activities over time and across different websites and other online services. They may use this information to provide you
          with interest-based (behavioral) advertising or other targeted content. <br />
          <br />
          We do not control these third parties’ tracking technologies or how they may be used. If you have any questions about an advertisement or
          other targeted content, you should contact the responsible provider directly. For information about how you can opt out of receiving
          targeted advertising from many providers, see Tracking Technologies and Advertising.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          How We Use Your Information
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We use information that we collect about you or that you provide to us, including any Personal Information:
          <br />
          <br />
          ● To present the Kaddex Services and its contents, including customer support, to you.
          <br />
          ● To provide you with information, products, or services that you request from us.
          <br />
          ● To resolve disputes and troubleshoot problems.
          <br />
          ● Customize, measure, and improve the Kaddex Services, including content and layout.
          <br />
          ● To prevent and investigate potentially prohibited or illegal activities, and/or violations of our terms of use.
          <br />
          ● To fulfill any other purpose for which you provide it.
          <br />
          ● To provide you with notices about your account.
          <br />
          ● To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.
          <br />
          ● To notify you about changes to the Kaddex Services or any products or services we offer or provide though it.
          <br />
          ● To allow you to participate in interactive features of the Kaddex Services.
          <br />
          ● In any other way we may describe when you provide the information.
          <br />
          ● For any other purpose with your consent, including as provided in our terms of use.
          <br />
          <br />
          We may use the information we have collected from you to enable us to display advertisements to our advertisers’ target audiences. Even
          though we do not disclose your Personal Information for these purposes without your consent, if you click on or otherwise interact with an
          advertisement, the advertiser may assume that you meet its target criteria.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Disclosure of Your Information
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. <br />
          <br />
          We may disclose Personal Information that we collect or you provide as described in this Privacy Policy:
          <br />
          <br />
          ● To our subsidiaries and affiliates.
          <br />
          ● To contractors, service providers, and other third parties we use to support our business.
          <br />
          ● To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer
          of some or all of Kaddex’s assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which
          Personal Information held by Kaddex about the Kaddex Services’ users is among the assets transferred.
          <br />
          ● To fulfill the purpose for which you provide it.
          <br />
          ● For any other purpose disclosed by us when you provide the information.
          <br />
          ● With your consent, including as provided in our terms of use.
          <br />
          <br />
          We may also disclose your Personal Information:
          <br />
          <br />
          ● To comply with any court order, law, or legal process, including to respond to any government or regulatory request.
          <br />
          ● To enforce or apply our terms of use ([https://kaddex.com/terms-of-use]) and other agreements.
          <br />● If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Kaddex, our customers, or others.
          This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Tracking Technologies and Advertising
        </Label>
        <Label fontSize={20} fontFamily="medium">
          You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. To learn how you can manage
          your Flash cookie settings, visit the Flash player settings page on Adobe’s website. If you disable or refuse cookies, please note that some
          parts of the Kaddex Services may then be inaccessible or not function properly.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Accessing and Correcting Your Information
        </Label>
        <Label fontSize={20} fontFamily="medium">
          <p>
            You can review and change your Personal Information by logging into your account.
            <br />
            <br /> You may also send us an email at [info@kaddex.com] to request access to, correct, or delete any Personal Information that you have
            provided to us. We cannot delete your Personal Information except by also deleting your account. We may not accommodate a request to
            change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.
            <br />
            <br />
            If you delete your User Contributions, copies of your User Contributions may remain viewable in cached and archived pages, or might have
            been copied or stored by others. Proper access and use of information provided through the Kaddex Services, including User Contributions,
            is governed by our terms of use ([https://kaddex.com/terms-of-use]).
            <br />
            <br />
            California residents may have additional personal information rights and choices. Please see Your California Privacy Rights for more
            information.
          </p>
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Your California Privacy Rights
        </Label>
        <Label fontSize={20} fontFamily="medium">
          If you are a California resident, California law may provide you with additional rights regarding our use of your personal information. To
          learn more about your California privacy rights, see the California Policy Notice.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Data Security
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We have implemented measures designed to secure your Personal Information from accidental loss and from unauthorized access, use,
          alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
          <br />
          <br />
          The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to
          certain parts of the Kaddex Services, you are responsible for keeping this password confidential. We ask you not to share your password with
          anyone. We urge you to be careful about giving out information in public areas of the Kaddex Services like message boards. The information
          you share in public areas may be viewed by any user of the Kaddex Services.
          <br />
          <br />
          Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your Personal
          Information, we cannot guarantee the security of your Personal Information transmitted through the Kaddex Services. Any transmission of
          Personal Information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on
          the Kaddex Services.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Changes to Our Privacy Policy
        </Label>
        <Label fontSize={20} fontFamily="medium">
          It is our policy to post any changes we make to our Privacy Policy on this page with a notice that the Privacy Policy has been updated on
          the Websites’ home pages. If we make material changes to how we treat our users’ Personal Information, we will notify you by email to the
          primary email address specified in your account and/or through a notice on the Websites’ home pages. The date the Privacy Policy was last
          revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address
          for you, and for periodically visiting this Privacy Policy to check for any changes.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Contact Information
        </Label>
        <Label fontSize={20} fontFamily="medium">
          <p>
            To ask questions or comment about this Privacy Policy and our privacy practices, or to register a complaint or concern, contact us at:
            [info@kaddex.com]
          </p>
        </Label>
        <Label fontSize={40}>CALIFORNIA POLICY NOTICE</Label>
        <Label fontSize={20} fontFamily="medium">
          <p>
            The following provisions supplement the information contained in this Privacy Policy and apply solely to all visitors, users, and others
            who reside in the State of California. We adopt these provisions to comply with the California Consumer Privacy Act of 2018 (“
            <strong>CCPA</strong>”), and any terms defined in the CCPA have the same meaning when used in this notice. The CCPA provides consumers
            (California residents) with specific rights regarding their personal information. This section describes your CCPA rights and explains how
            to exercise those rights. We are collecting your personal information and sensitive personal information to support our business
            operations, including for the business purposes{' '}
            {/* listed
            below and  */}
            in the Privacy Policy. We will not sell the personal information we collect. We also will not share it with third parties for
            cross-context behavioral advertising. We will not sell the sensitive personal information we collect. We also will not share it with third
            parties for cross-context behavioral advertising.{' '}
            {/* We may
            collect the personal information and sensitive personal information
            categories listed in the table below. The table also lists, for each
            category, our expected retention period and use purposes.
             <table>
              <tr>
                <th>
                  Information Category
                </th>
                <th>Examples</th>
                <th>Retention Period</th>
                <th>Business Purpose</th>
              </tr>

              <tr>
                <td>Identifiers and complete account access credentials</td>
                <td>
                  A real name, alias, postal address, unique personal
                  identifier, online identifier, Internet Protocol address,
                  email address, account or user name, account number, required
                  access security code or password, Social Security number,
                  driver’s license number, passport number, or other similar
                  identifiers.
                </td>
                <td>[RETENTION PERIOD]</td>
                <td>[USE PURPOSES]</td>
              </tr>
              <tr>
                <td>Internet or other similar network activity</td>
                <td>
                  Browsing history, search history, information on a consumer’s
                  interaction with a website, application, or advertisement.
                </td>
                <td>[RETENTION PERIOD]</td>
                <td>[USE PURPOSES]</td>
              </tr>
              <tr>
                <td>Geolocation data</td>
                <td>Physical location or movements; precise geolocation.</td>
                <td>[RETENTION PERIOD]</td>
                <td>[USE PURPOSES]</td>
              </tr>
            </table> */}
          </p>
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Non-Discrimination
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:
          <br />
          <br />
          ● Deny you services.
          <br />
          ● Charge you different prices or rates for services, including through granting discounts or other benefits, or imposing penalties.
          <br />
          ● Provide you a different level or quality of services.
          <br />● Suggest that you may receive a different price or rate for services or a different level or quality of services.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Access to Specific Information and Data Portability Rights
        </Label>
        <Label fontSize={20} fontFamily="medium">
          <p>
            You have the right to request that we disclose certain information to you about our collection and use of your personal information over
            the past 12 months. Once we receive and confirm your verifiable consumer request (via email to [info@kaddex.com]), we will disclose to
            you:
            <br />
            <br />
            ● The categories of personal information we collected about you.
            <br />
            ● The categories of sources for the personal information we collected about you.
            <br />
            ● Our business or commercial purpose for collecting or selling that personal information.
            <br />
            ● The categories of third parties with whom we share that personal information.
            <br />
            ● The specific pieces of personal information we collected about you (also called a data portability request).
            <br />
            ● If we sold or disclosed your personal information for a business purpose, two separate lists disclosing:
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- sales, identifying the personal information categories that each category of recipient purchased; and
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- disclosures for a business purpose, identifying the personal information categories that each category of
            recipient obtained.
          </p>
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Deletion Request Rights
        </Label>
        <Label fontSize={20} fontFamily="medium">
          You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain
          exceptions, as described in this Privacy Policy. Once we receive and confirm your verifiable consumer request (see Accessing and Correcting
          Your Information), we will delete (and direct our service providers to delete) your personal information from our records, unless an
          exception applies.
          <br />
          <br />
          We may deny your deletion request if retaining the information is necessary for us or our service provider(s) to:
          <br />
          <br />
          ● Complete the transaction for which we collected the personal information, provide a service that you requested, take actions reasonably
          anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you.
          <br />
          ● Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such
          activities.
          <br />
          ● Debug products to identify and repair errors that impair existing intended functionality.
          <br />
          ● Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by
          law.
          <br />
          ● Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.).
          <br />
          ● Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other
          applicable ethics and privacy laws, when the information’s deletion may likely render impossible or seriously impair the research’s
          achievement, if you previously provided informed consent.
          <br />
          ● Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.
          <br />
          ● Comply with a legal obligation.
          <br />
          ● Make other internal and lawful uses of that information that are compatible with the context in which you provided it.
          <br />
          <br />
          Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information.
          <br />
          <br />
          The verifiable consumer request must:
          <br />
          <br />
          ● Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an
          authorized representative.
          <br />
          ● Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.
          <br />
          <br />
          We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the
          request and confirm the personal information relates to you.
          <br />
          <br />
          Making a verifiable consumer request does not require you to create an account with us.
          <br />
          <br />
          We will only use personal information provided in a verifiable consumer request to verify the requestor’s identity or authority to make the
          request.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Response Timing and Format
        </Label>
        <Label fontSize={20} fontFamily="medium">
          <p>
            We endeavor to respond to a verifiable consumer request within forty-five (45) days of its receipt. If we require more time (up to 90
            days), we will inform you of the reason and extension period in writing.
            <br />
            <br />
            If you have an account with us, we will deliver our written response to that account. If you do not have an account with us, we will
            deliver our written response by mail or electronically, at your option.
            <br />
            <br />
            Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request’s receipt. The response we
            provide will also explain the reasons we cannot comply with a request, if applicable. For data portability requests, we will select a
            format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to
            another entity without hindrance.
            <br />
            <br />
            We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly
            unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost
            estimate before completing your request.
            <br />
            <br />
            If you have any questions about this notice or need to access it in an alternative format due to having a disability, please contact
            [info@kaddex.com].
            <br />
            <br />
            June 29, 2022
          </p>
        </Label>
      </Intro>
    </OuterContainer>
  );
};

export default PrivacyPolicyContainer;
