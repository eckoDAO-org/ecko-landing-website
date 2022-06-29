import React from 'react';
import styled from 'styled-components';
import { KaddexLogo } from '../assets';

import { STYColumnContainer } from '../components/layout/Containers';
import Label from '../shared/Label';

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
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 16px;
  }
`;

const Intro = styled(STYColumnContainer)`
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 72px;

  hr.solid {
    border-top: 1px solid #fff;
    width: 100%;
  }
  p {
    margin: 0px;
  }
`;

const TermsOfUseContainer = () => {
  return (
    <OuterContainer id='proof_of_dex'>
      <KaddexLogo style={{ marginBottom: 32, height: 70, width: 300 }} />
      <Intro gap={40}>
        <Label fontSize={48}>KADDEX TERMS OF USE</Label>
        <Label fontSize={22} fontFamily='medium'>
          Last Modified: June 01, 2022
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Acceptance of the Terms of Use
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          <p>
            These terms of use are entered into by and between you and Kaddex US
            Holdings Inc., a Delaware corporation, Kaddex DAO, and their
            affiliates (collectively, “<strong>Kaddex</strong>,” “
            <strong>we</strong>,” or “<strong>us</strong>”). The following terms
            and conditions, together with any documents they expressly
            incorporate by reference (collectively, “
            <strong>Terms of Use</strong>”), govern your access to and use of
            www.kaddex.com and www.xwallet.kaddex.com (collectively, “
            <strong>Websites”</strong>), the X-Wallet application, and any
            content, functionality, and services offered on or through the
            Websites or such application (collectively, “
            <strong>Kaddex Services</strong>”).
            <br />
            <br />
            Please read the Terms of Use carefully before you start to use the
            Kaddex Services.
            <strong>
              By using the Kaddex Services or by clicking to accept or agree to
              the Terms of Use when this option is made available to you, you
              accept and agree to be bound and abide by these Terms of Use,
              including our Privacy Policy, found at
              [https://kaddex.com/privacy-policy], incorporated herein by
              reference and as amended from time to time (“Privacy Policy”).
            </strong>
            If you do not want to agree to these Terms of Use (including the
            Privacy Policy), you must not access or otherwise use the Kaddex
            Services. <br />
            <br />
            The Kaddex Services are offered and available to users who are at
            least 18 years of age. By using the Kaddex Services, you represent
            and warrant that you meet the foregoing eligibility requirement. If
            you do not meet this requirement, you must not access or otherwise
            use the Kaddex Services.
          </p>
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Changes to the Terms of Use
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          We may revise and update these Terms of Use from time to time in our
          sole discretion. All changes are effective immediately when we post
          them, and apply to all access to and use of the Kaddex Services
          thereafter. However, any changes to the dispute resolution provisions
          set out in Governing Law and Jurisdiction will not apply to any
          disputes for which the parties have actual notice on or before the
          date the change is posted on the Websites. <br />
          <br />
          Your continued use of the Kaddex Services following the posting of
          revised Terms of Use means that you accept and agree to the changes.
          You are expected to check the Websites from time to time so you are
          aware of any changes, as they are binding on you. We reserve the right
          to adjust our pricing and fees at any time.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Accessing the Kaddex Services and Account Security
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          We reserve the right to withdraw or amend the Kaddex Services, and any
          service or material we provide through the Kaddex Services, in our
          sole discretion without notice. We will not be liable if for any
          reason all or any part of the Kaddex Services is unavailable at any
          time or for any period. From time to time, we may restrict access to
          some parts of the Kaddex Services, or the entirety of the Kaddex
          Services, to users, including registered users.
          <br />
          <br />
          You are responsible for both:
          <br />
          <br />
          ● Making all arrangements necessary for you to have access to the
          Kaddex Services.
          <br />
          ● Ensuring that all persons who access the Kaddex Services through
          your internet connection are aware of these Terms of Use and comply
          with them.
          <br />
          <br />
          To access the Kaddex Services or some of the resources they offer, you
          may be asked to provide certain registration details or other
          information. At any time deemed necessary by Kaddex, you agree to (i)
          provide us with the information we request for the purposes of
          identity verification, providing services to you, and the detection of
          money laundering, terrorist financing, fraud, or any other financial
          crimes, and (ii) permit us to keep a record of such information. It is
          a condition of your use of the Kaddex Services that all the
          information you provide through the Kaddex Services is correct,
          current, and complete. You agree to keep us updated if any of the
          information you provide changes. You agree that all information you
          provide to register with the Kaddex Services or otherwise, including,
          but not limited to, through the use of any interactive features of the
          Kaddex Services, is governed by our Privacy Policy, and you consent to
          all actions we take with respect to your information consistent with
          our Privacy Policy. This consent is not related to, and does not
          affect, any rights or obligations we or you have in accordance with
          data protection laws, privacy laws, and regulations. You can withdraw
          your consent at any time by closing all accounts you have with us and
          discontinuing your use of the Kaddex Services. However, we may retain
          and continue to process your personal information if we reasonably
          believe it is necessary in order to comply with laws or regulations.
          You authorize us to make inquiries, whether directly or through third
          parties, that we consider necessary to verify your identity or protect
          you and/or us against fraud or other financial crime, and to take
          action we reasonably deem necessary based on the results of such
          inquiries. When we carry out these inquiries, you acknowledge and
          agree that your personal information may be disclosed to credit
          reference and fraud prevention or financial crime agencies and that
          these agencies may respond to our inquiries in full. This is an
          identity check only and should have no adverse effect on your credit
          rating. We reserve the right at all times to monitor, review, retain
          and/or disclose any information as necessary to satisfy any applicable
          law, regulation, sanctions programs, legal process, or governmental
          request.
          <br />
          <br />
          If you choose, or are provided with, a user name, password, or any
          other piece of information as part of our security procedures, you
          must treat such information as confidential, and you must not disclose
          it to any other person or entity. You also acknowledge that your
          account is personal to you and agree not to provide any other person
          with access to the Kaddex Services or portions of it using your user
          name, password, or other security information. You agree to notify us
          immediately of any unauthorized access to or use of your user name or
          password or any other breach of security. You also agree to ensure
          that you exit from your account at the end of each session. You should
          use particular caution when accessing your account from a public or
          shared computer so that others are not able to view or record your
          password or other personal information. We assume no responsibility
          for any loss that you may sustain due to compromise of any login
          credentials you have in connection with the Kaddex Services due to no
          fault of Kaddex.
          <br />
          <br />
          We have the right to disable any user name, password, or other
          identifier, whether chosen by you or provided by us, at any time in
          our sole discretion for any or no reason, including if, in our
          opinion, you have violated any provision of these Terms of Use or
          applicable law.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          X-Wallet Use
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          <p>
            The digital asset wallet(s) we provide to you through the Kaddex
            Services (“<strong>Wallet”</strong>) allow(s) you to manage your
            balances of digital assets. The particular services with respect to
            any such wallet and supported assets may vary by jurisdiction.
            <br />
            <br /> Under no circumstances should you attempt to use a Wallet to
            store, send, request, or receive any assets other than assets that
            the Kaddex Services system supports. We assume no responsibility in
            connection with any attempt to use a Wallet with digital assets that
            we do not support. When you or a third party sends digital assets to
            your Wallet from an external wallet, you attest that you are
            transacting in a supported asset that conforms to the particular
            Wallet address to which funds are directed. You acknowledge and
            agree that we are not liable for any unsupported digital asset that
            is sent to a Wallet associated with you. We may, in our sole
            discretion, terminate support for any particular digital asset.
            <br />
            <br /> For purposes of these Terms of Use, supported assets exclude
            all other protocols and/or functionality which supplement or
            interact with supported assets, unless stated otherwise with respect
            to a particular supported asset. This exclusion includes but is not
            limited to: metacoins, colored coins, side chains, or other
            derivative, enhanced, or forked protocols, tokens, or coins or other
            functionality, such as staking, protocol governance, and/or any
            smart contract functionality, which may supplement or interact with
            a supported asset. You acknowledge and agree that we have no
            liability for any losses related to supplemental protocols and/or
            functionalities. You acknowledge and accept the risks of operating
            changes to digital asset protocols and agree that we are not
            responsible for such operating changes and not liable for any loss
            of value you may experience as a result of such changes in operating
            rules. You acknowledge and accept that we have sole discretion to
            determine our response to any such operating changes and that we
            have no responsibility to assist you with unsupported currencies or
            protocols. You further acknowledge and accept that we have no
            responsibility to support new digital asset forks or operating
            changes for supported assets.
          </p>
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Custody and Ownership of Digital Assets
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          Custody and title to the digital assets held in your Wallet shall at
          all times remain with you and shall not transfer to Kaddex. As the
          owner of such digital assets, you shall bear all risk of loss of such
          digital assets. We shall have no liability for fluctuations or loss in
          such digital assets. You retain sole responsibility for any loss of
          private keys associated with your Wallet.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Intellectual Property Rights
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          The Kaddex Services and their entire contents, features, and
          functionality (including but not limited to all information, software,
          text, displays, images, video, and audio, and the design, selection,
          and arrangement thereof) are owned by Kaddex, its licensors, or other
          providers of such material and are protected by United States and
          international copyright, trademark, patent, trade secret, and other
          intellectual property or proprietary rights laws.
          <br />
          <br />
          These Terms of Use permit you to use the Kaddex Services for your
          lawful use only. You must not copy, reproduce, distribute, modify,
          create derivative works of, publicly display, publicly perform,
          republish, download, store, or transmit any of the material of the
          Kaddex Services, except that your computer may temporarily store
          copies of such materials in RAM incidental to your accessing and
          viewing those materials.
          <br />
          <br />
          If you print, copy, modify, download, or otherwise use or provide any
          other person with access to any part of the Kaddex Services in breach
          of the Terms of Use, your right to use the Kaddex Services will stop
          immediately and you must, at our option, return or destroy any copies
          of the materials you have made. No right, title, or interest in or to
          the Kaddex Services or any content of the Kaddex Services is
          transferred to you, and all rights not expressly granted are reserved
          by Kaddex. Any use of the Kaddex Services not expressly permitted by
          these Terms of Use is a breach of these Terms of Use and may violate
          copyright, trademark, and other laws.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Trademarks
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          The Kaddex name, the Kaddex logo, and all related names, logos,
          product and service names, designs, and slogans are trademarks of
          Kaddex or its affiliates or licensors. You must not use such marks
          without the prior written permission of Kaddex. All other names,
          logos, product and service names, designs, and slogans on the Websites
          or otherwise displayed through the Kaddex Services are the trademarks
          of their respective owners.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Prohibited Uses
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          You may use the Kaddex Services only for lawful purposes and in
          accordance with these Terms of Use. You agree not to use the Kaddex
          Services:
          <br />
          <br />
          ● In any way that violates any applicable federal, state, local, or
          international law or regulation (including, without limitation, any
          laws regarding the export of data or software to and from the US or
          other countries). <br />
          ● In any way that violates these Terms of Use.
          <br />
          ● For the purpose of exploiting, harming, or attempting to exploit or
          harm minors in any way by exposing them to inappropriate content,
          asking for personally identifiable information, or otherwise.
          <br />
          ● To transmit, or procure the sending of, any advertising or
          promotional material, including any “junk mail,” “chain letter,”
          “spam,” or any other similar solicitation.
          <br />
          ● To impersonate or attempt to impersonate Kaddex, a Kaddex employee,
          another user, or any other person or entity (including, without
          limitation, by using email addresses or user names associated with any
          of the foregoing).
          <br />
          ● To engage in any other conduct that restricts or inhibits anyone’s
          use or enjoyment of the Kaddex Services, or which, as determined by
          us, may harm Kaddex or users of the Kaddex Services, or expose them to
          liability.
          <br />
          <br />
          Additionally, you agree not to:
          <br />
          <br />
          ● Use the Kaddex Services in any manner that could disable,
          overburden, damage, or impair it or interfere with any other party’s
          use of the Kaddex Services, including their ability to engage in real
          time activities through the Kaddex Services.
          <br />
          ● Use any robot, spider, or other automatic device, process, or means
          to access the Kaddex Services for any purpose, including monitoring or
          copying any of the material of the Kaddex Services.
          <br />
          ● Use any manual process to monitor or copy any of the material of the
          Kaddex Services, or for any other purpose not expressly authorized in
          these Terms of Use, without our prior written consent.
          <br />
          ● Use any device, software, or routine that interferes with the proper
          working of the Kaddex Services.
          <br />
          ● Introduce any viruses, Trojan horses, worms, logic bombs, or other
          material that is malicious or technologically harmful.
          <br />
          ● Attempt to gain unauthorized access to, interfere with, damage, or
          disrupt any parts of the Kaddex Services, the server on which the
          Kaddex Services are stored, or any server, computer, or database
          connected to the Kaddex Services. <br />
          ● Attack the Kaddex Services via a denial-of-service attack or a
          distributed denial-of- service attack.
          <br />● Otherwise attempt to interfere with the proper working of the
          Kaddex Services.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          User Contributions
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          <p>
            The Kaddex Services may contain message boards, chat rooms, personal
            web pages or profiles, forums, bulletin boards, and other
            interactive features (collectively, “
            <strong>Interactive Services</strong>”) that allow users to post,
            submit, publish, display, or transmit to other users or other
            persons (hereinafter, “<strong>post”</strong>) content or materials
            (collectively, “<strong>User Contributions</strong>”) on or through
            the Kaddex Services.
            <br />
            <br />
            Any User Contribution you post to the Kaddex Services will be
            considered non- confidential and non-proprietary. By providing any
            User Contribution to the Kaddex Services, you grant us and our
            affiliates and service providers, and each of their and our
            respective licensees, successors, and assigns the right to use,
            reproduce, modify, perform, display, distribute, and otherwise
            disclose to third parties any such material. <br />
            <br />
            You represent and warrant that: <br />
            <br />
            ● You own or control all rights in and to the User Contributions and
            have the right to grant the license granted above to us and our
            affiliates and service providers, and each of their and our
            respective licensees, successors, and assigns.
            <br />
            ● All of your User Contributions do and will comply with these Terms
            of Use. <br />
            <br />
            You understand and acknowledge that you are responsible for any User
            Contributions you submit or contribute, and you, not Kaddex, have
            full responsibility for such content, including its legality,
            reliability, accuracy, and appropriateness.
            <br />
            <br />
            We are not responsible or liable to any third party for the content
            or accuracy of any User Contributions posted by you or any other
            user of the Kaddex Services.
          </p>
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Monitoring and Enforcement; Termination
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          We have the right to:
          <br />
          <br />
          ● Remove or refuse to post any User Contributions for any or no reason
          in our sole discretion.
          <br />
          ● Take any action with respect to any User Contribution that we deem
          necessary or appropriate in our sole discretion, including if we
          believe that such User Contribution violates the Terms of Use,
          infringes any intellectual property right or other right of any person
          or entity, threatens the personal safety of users of the Kaddex
          Services or the public, or could create liability for Kaddex.
          <br />
          ● Disclose your identity or other information about you to any third
          party who claims that material posted by you violates their rights,
          including their intellectual property rights or their right to
          privacy.
          <br />
          ● Take appropriate legal action, including without limitation,
          referral to law enforcement, for any illegal or unauthorized use of
          the Kaddex Services.
          <br />
          ● Terminate or suspend your access to all or part of the Kaddex
          Services for any or no reason, including without limitation, any
          violation of these Terms of Use. In the event of termination, you will
          be permitted to transfer digital assets associated with your Wallet
          within the 45-day period from the date of termination unless such
          transfer is otherwise prohibited (i) under applicable law, including
          but not limited to applicable sanctions programs; or (ii) by a
          facially valid subpoena or court order. We are not responsible for any
          loss you may incur as a result of our suspension of your access to the
          Kaddex Services.
          <br />
          <br />
          Without limiting the foregoing, we have the right to cooperate fully
          with any law enforcement authorities or court order requesting or
          directing us to disclose the identity or other information of anyone
          posting any materials on or through the Kaddex Services. YOU WAIVE AND
          HOLD HARMLESS KADDEX AND ITS AFFILIATES, LICENSEES, AND SERVICE
          PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF
          THE FOREGOING PARTIES DURING, OR TAKEN AS A CONSEQUENCE OF,
          INVESTIGATIONS BY EITHER SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Reliance on Information Posted
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          The information presented on or through the Kaddex Services is made
          available solely for general information purposes. We do not warrant
          the accuracy, completeness, or usefulness of this information. Any
          reliance you place on such information is strictly at your own risk.
          We disclaim all liability and responsibility arising from any reliance
          placed on such materials by you or any other visitor to the Kaddex
          Services, or by anyone who may be informed of any of its contents.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Changes to the Kaddex Services
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          We may update the Kaddex Services from time to time, but its content
          is not necessarily complete or up-to-date. Any of the material of the
          Kaddex Services may be out of date at any given time, and we are under
          no obligation to update such material.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Fees
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          You agree to pay all fees associated with your use of the Kaddex
          Services. We reserve the right to adjust our pricing and fees at any
          time.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Information About You and Your Visits to the Kaddex Services
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          All information we collect through the Kaddex Services is subject to
          our Privacy Policy. By using the Kaddex Services, you consent to all
          actions taken by us with respect to your information in compliance
          with the Privacy Policy.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Linking to the Websites and Social Media Features
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          You may link to our homepage, provided you do so in a way that is fair
          and legal and does not damage our reputation or take advantage of it,
          but you must not establish a link in such a way as to suggest any form
          of association, approval, or endorsement on our part without our
          express written consent. <br />
          <br />
          The Websites may provide certain social media features that enable you
          to:
          <br />
          <br />
          ● Link from your own or certain third-party websites to certain
          content on the Websites.
          <br />
          ● Send emails or other communications with certain content, or links
          to certain content, on the Websites.
          <br />
          ● Cause limited portions of content on the Websites to be displayed or
          appear to be displayed on your own or certain third-party websites.
          <br />
          <br />
          You may use these features solely as they are provided by us, solely
          with respect to the content they are displayed with, and otherwise in
          accordance with any additional terms and conditions we provide with
          respect to such features. Subject to the foregoing, you must not:
          <br />
          <br />
          ● Establish a link from any website that is not owned by you.
          <br />
          ● Cause the Websites or portions of them to be displayed on, or appear
          to be displayed by, any other site, for example, framing, deep
          linking, or in-line linking.
          <br />
          ● Link to any part of the Websites other than the homepages.
          <br />
          ● Otherwise take any action with respect to the materials on the
          Websites that is inconsistent with any other provision of these Terms
          of Use.
          <br />
          <br />
          You agree to cooperate with us in causing any unauthorized framing or
          linking immediately to stop. We reserve the right to withdraw linking
          permission without notice.
          <br />
          <br />
          We may disable all or any social media features and any links at any
          time without notice in our discretion.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Links from the Kaddex Services; Information Provided by Third Parties
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          If the Kaddex Services contain links to other sites and resources
          provided by third parties, these links are provided for your
          convenience only. This includes links contained in advertisements,
          including banner advertisements and sponsored links. If you decide to
          access any of the third-party websites or resources linked to the
          Kaddex Services, you do so entirely at your own risk and subject to
          the terms and conditions of use for such websites or resources.
          <br />
          <br />
          The Kaddex Services may include content provided by third parties,
          including decentralized applications, materials provided by other
          users, bloggers, and third-party licensors, syndicators, aggregators,
          and/or reporting services. All statements and/or opinions expressed in
          these materials, and all articles and responses to questions and other
          content, other than the content provided by Kaddex, are solely the
          opinions and the responsibility of the person or entity providing
          those materials. These materials do not necessarily reflect the
          opinion of Kaddex. We are not responsible, or liable to you or any
          third party, for the content or accuracy of any materials provided by
          any third party.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Compliance with Applicable Laws
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          Access to the Kaddex Services may not be legal by certain persons or
          in certain countries. If you access the Kaddex Services, you do so on
          your own initiative and are responsible for compliance with applicable
          laws.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Disclaimer of Warranties
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          You understand that we cannot and do not guarantee or warrant that
          files available for downloading from the internet or through the
          Kaddex Services will be free of viruses or other destructive code. You
          are responsible for implementing sufficient procedures and checkpoints
          to satisfy your particular requirements for anti-virus protection and
          accuracy of data input and output, and for maintaining a means
          external to our site and/or application for any reconstruction of any
          lost data. WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A
          DISTRIBUTED DENIAL-OF-SERVICE ATTACK, HACKS, VIRUSES, OR OTHER
          TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER
          EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE
          TO YOUR USE OF THE KADDEX SERVICES OR ANY SERVICES OR ITEMS OBTAINED
          THROUGH THE KADDEX SERVICES OR TO YOUR DOWNLOADING OF ANY MATERIAL
          POSTED ON IT, OR ON ANY WEBSITE OR APPLICATION LINKED TO IT.
          <br />
          <br />
          YOUR USE OF THE KADDEX SERVICES, ITS CONTENT, AND ANY SERVICES OR
          ITEMS OBTAINED THROUGH THE KADDEX SERVICES IS AT YOUR OWN RISK. THE
          KADDEX SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED
          THROUGH THE KADDEX SERVICES ARE PROVIDED ON AN “AS IS” AND “AS
          AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS
          OR IMPLIED. NEITHER KADDEX NOR ANY PERSON ASSOCIATED WITH KADDEX MAKES
          ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS,
          SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE
          KADDEX SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER KADDEX NOR
          ANYONE ASSOCIATED WITH KADDEX REPRESENTS OR WARRANTS THAT THE KADDEX
          SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
          KADDEX SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR
          UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE KADDEX
          SERVICES OR ANY SERVERS THAT MAKE THEM AVAILABLE ARE OR WILL BE FREE
          OF VIRUSES, HACK, OR OTHER HARMFUL COMPONENTS OR CYBER-SECURITY
          ATTACKS, OR THAT THE KADDEX SERVICES OR ANY SERVICES OR ITEMS OBTAINED
          THROUGH THE KADDEX SERVICES WILL OTHERWISE MEET YOUR NEEDS OR
          EXPECTATIONS. NEITHER KADDEX NOR ANY PERSON ASSOCIATED WITH KADDEX
          MAKES ANY GUARANTEE THAT TRANSFER OF DIGITAL ASSETS WILL BE CONFIRMED
          BY THE RELEVANT NETWORK.
          <br />
          <br />
          KADDEX HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
          IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY
          WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR
          PARTICULAR PURPOSE.
          <br />
          <br />
          THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED
          OR LIMITED UNDER APPLICABLE LAW.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Limitation on Liability
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          IN NO EVENT WILL KADDEX, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE
          PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, DIRECTORS, OR OTHER
          REPRESENTATIVES BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL
          THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO
          USE, THE KADDEX SERVICES, ANY WEBSITES OR APPLICATIONS LINKED TO THEM,
          ANY CONTENT ON THE KADDEX SERVICES OR SUCH OTHER WEBSITES OR
          APPLICATIONS, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO,
          PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF
          REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS,
          LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY
          TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF
          FORESEEABLE. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, SUCH
          PARTIES SHALL NOT BE LIABLE FOR ANY ALLEGED LOSS THAT YOU SUFFER FROM
          A DROP IN DIGITAL ASSET PRICES OR ANY LOSS YOU SUFFER AS A RESULT OF
          ANY VIRUSES, HACK, OR OTHER HARMFUL COMPONENTS OR CYBER- SECURITY
          ATTACKS WITH RESPECT TO THE KADDEX SERVICES, AND IN NO EVENT SHALL
          SUCH PARTIES’ LIABILITY EXCEED THE TOTAL AMOUNT OF FEES PAID TO KADDEX
          BY YOU IN CONNECTION WITH YOUR USE OF THE KADDEX SERVICES IN THE
          TWELVE-MONTH PERIOD PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
          <br />
          <br />
          IF YOU GRANT PERMISSION TO A THIRD PARTY TO TAKE SPECIFIC ACTIONS ON
          YOUR BEHALF, THAT DOES NOT RELIEVE YOU OF ANY OF YOUR RESPONSIBILITIES
          UNDER THESE TERMS OF USE. YOU ARE FULLY RESPONSIBLE FOR ALL ACTS OR
          OMISSIONS OF ANY THIRD PARTY WITH ACCESS TO YOUR WALLET AND ANY
          ASSOCIATED ACCOUNT. <br />
          <br />
          THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR
          LIMITED UNDER APPLICABLE LAW.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Indemnification
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          You agree to defend, indemnify, and hold harmless Kaddex, its
          affiliates, licensors, and service providers, and its and their
          respective officers, directors, employees, contractors, agents,
          licensors, suppliers, successors, and assigns from and against, and
          pay for, any claims, liabilities, damages, judgments, awards, losses,
          costs, expenses, or fees (including reasonable attorneys’ fees)
          arising out of or relating to your violation of these Terms of Use or
          your use of the Kaddex Services, including, but not limited to, your
          User Contributions (including with respect to any infringement of
          intellectual property rights of third parties), any use of the Kaddex
          Services’ content, services, and products other than as expressly
          authorized in these Terms of Use, or your use of any information
          obtained from the Kaddex Services.
          <br />
          <br />
          Further, you acknowledge and agree that you will not hold Kaddex or
          any of its affiliates responsible for, and will indemnify such parties
          from, and pay for, any liability arising out of or related to any act
          or omission of any third party with access to your Wallet or
          associated account.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Governing Law and Jurisdiction
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          All matters relating to the Kaddex Services and these Terms of Use,
          and any dispute or claim arising therefrom or related thereto (in each
          case, whether in contract, tort, or otherwise), shall be governed by
          and construed in accordance with the internal laws of the State of New
          York without giving effect to any choice or conflict of law provision
          or rule (whether of the State of New York or any other jurisdiction).
          <br />
          <br />
          Any legal suit, action, or proceeding arising out of, or related to,
          these Terms of Use or the Kaddex Services shall be instituted
          exclusively in the United States District Court for the Southern
          District of New York or in a New York state court sitting in New York
          County, although we retain the right to bring any suit, action, or
          proceeding against you for breach of these Terms of Use in your
          country of residence or any other relevant country. You waive any and
          all objections to the exercise of jurisdiction over you by such courts
          and to venue (including any claims of inconvenient forum) in such
          courts. YOU IRREVOCABLY AND UNCONDITIONALLY WAIVE ANY RIGHT YOU MAY
          HAVE TO A TRIAL BY JURY IN RESPECT OF ANY LEGAL SUIT, ACTION, OR
          PROCEEDING ARISING OUT OF, OR RELATED TO, THESE TERMS OF USE OR THE
          KADDEX SERVICES, TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Arbitration
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          Notwithstanding anything to the contrary in these Terms of Use, at
          Kaddex’s sole discretion, it may require you to submit any disputes
          arising from these Terms of Use or use of the Kaddex Services,
          including disputes arising from or concerning their interpretation,
          violation, invalidity, non-performance, or termination, to final and
          binding arbitration under the applicable rules of the American
          Arbitration Association applying New York law.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Limitation on Time to File Claims
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING
          TO THESE TERMS OF USE OR THE KADDEX SERVICES MUST BE COMMENCED WITHIN
          ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES; OTHERWISE, SUCH CAUSE
          OF ACTION OR CLAIM IS PERMANENTLY BARRED.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Waiver and Severability
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          No waiver by Kaddex of any term or condition set out in these Terms of
          Use shall be deemed a further or continuing waiver of such term or
          condition or a waiver of any other term or condition, and any failure
          of Kaddex to assert a right or provision under these Terms of Use
          shall not constitute a waiver of such right or provision. <br />
          <br />
          If any provision of these Terms of Use is held by a court or other
          tribunal of competent jurisdiction to be invalid, illegal, or
          unenforceable for any reason, such provision shall be eliminated or
          modified to the minimum extent such that the remaining provisions of
          the Terms of Use (and, to the extent feasible, such provision) will
          continue in full force and effect.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Assignment
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          We reserve the right to assign our rights and obligations without
          restriction, including without limitation to any affiliates or
          subsidiaries of Kaddex, or to any successor in interest of any
          business associated with the Kaddex Services. In the event that Kaddex
          is acquired by or merged with another entity, we reserve the right, in
          any of these circumstances, to transfer or assign the information we
          have collected from you as part of such merger, acquisition, sale, or
          other change of control. You may not assign any rights and/or licenses
          granted under these Terms of Use or otherwise associated with your use
          of the Kaddex Services. Any attempted transfer or assignment by you in
          violation hereof shall be null and void. Subject to the foregoing,
          these Terms of Use will bind and inure to the benefit of the parties,
          their successors and permitted assigns.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Force Majeure
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          Without limiting any other provision of these Terms of Use, we shall
          not be liable for delays, failure in performance, or interruption of
          service which result directly or indirectly from any cause or
          condition beyond our reasonable control, including but not limited to
          significant market volatility, act of God, act of civil or military
          authorities, act of terrorists, civil disturbance, war, strike or
          other labor dispute, fire, interruption in telecommunications or
          Internet services or network provider services, failure of equipment
          and/or software, pandemic, other catastrophe, or any other occurrence
          which is beyond our reasonable control.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Relationship of the PARTIES
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          Kaddex is an independent contractor for all purposes. Nothing in these
          Terms of Use is intended to or shall operate to create a partnership
          or joint venture between you and Kaddex or authorize you to act as
          agent of Kaddex.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Entire Agreement
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          The Terms of Use (for the avoidance of doubt, including all documents
          incorporated by reference herein) constitute the sole and entire
          agreement between you and Kaddex regarding the Kaddex Services and
          supersede all prior and contemporaneous understandings, agreements,
          representations, and warranties, both written and oral, regarding the
          Kaddex Services.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Your Comments and Concerns
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          All feedback, comments, requests for technical support, and other
          communications relating to the Kaddex Services should be directed to:
          info@kaddex.com.
        </Label>
      </Intro>
    </OuterContainer>
  );
};

export default TermsOfUseContainer;
