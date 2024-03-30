import React, { useRef, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { useLocation } from 'react-router-dom'

import './termsofservice.scss'

const TermsOfService = () => {



    const scrolledRef = useRef(false);
    const { hash } = useLocation();
    const hashRef = useRef('');


    useEffect(() => {
        if (hash) {
            console.log('hash =>', hash)
            // // We want to reset if the hash has changed
            // if (hashRef.current === hash) {
            //     hashRef.current = hash;
            scrolledRef.current = false;
            //     console.log('hash =>', hash)
            console.log('scrolledRef.current =>', scrolledRef.current)
            // } 

            // only attempt to scroll if we haven't yet (this could have just reset above if hash changed)
            // if (!scrolledRef.current) {
            const id = hash.replace('#', '');
            console.log('id =>', id)
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                scrolledRef.current = true;
            }
            // }
        }
    });

    return (
        <div className='termsofservice pt-4'>
            <Container>
                <div className='termsofservice-header heading'>
                    <h2><strong>Terms Of Service</strong></h2>
                </div>
                <div className='termsofservice-content pt-4'>
                    <div className='termsofservice-ol justify-content-start'>
                        <p>
                            <ol>
                                <li>
                                    <strong>INTRODUCTION</strong>
                                    <ol>
                                        <li>
                                            Please read these Terms of Service carefully. By using the Service (as defined), you agree that you have read and understood the terms in these Terms of Services which are applicable to you. These Terms of Service and the HEROES Policies (as defined) constitute a legally binding agreement (“Agreement”) between you and HEROES (as defined). The Agreement applies to your use of the Service (as defined) provided by HEROES. If you do not agree to the Terms of Service, please do not use or continue using the Application or the Service.
                                        </li>
                                        <li>
                                            HEROES may amend the terms in the Agreement at any time. Such amendments shall be effective once they are posted on <a href="http://www.heroes.my">http://www.heroes.my</a> or the Application. It is your responsibility to review the Terms of Service regularly. Your continued use of the Service after any such amendments, whether or not reviewed by you, shall constitute your agreement to be bound by such amendments.
                                        </li>
                                        <li>
                                            HEROES is a technology company which provides a platform for End Users to obtain services provided by Merchants or us. Where the services are provided by Merchants, Heroes’s role is merely to link the End User with the Merchants. HEROES is not responsible for the acts and/or omissions of any Merchants. Merchants shall bear all liability in relation to such goods and services. Merchants are not, and shall not hold themselves to be, an agent, employee or staff of HEROES and the solutions provided by Merchants shall not be deemed to be provided by HEROES.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>DEFINITIONS</strong>
                                    <div className='pt-4'>
                                        In these Terms of Service, the following words shall have the meanings ascribed below:
                                    </div>
                                    <ol>
                                        <li>
                                            <strong>“HEROES Website”</strong> means a web application that functions as an app based scheduling tool that matches an End User’s request for journey, lessons or other services to merchant who is available to provide the service to End User;
                                        </li>
                                        <li>
                                            <strong>“End User”</strong> means any person or entity that has made a request for journey or educational classes or other services through Heroes Journey;
                                        </li>
                                        <li>
                                            <strong>“User Charges”</strong> means charges incurred by End Users for journey, lessons or other services obtained through HEROES Website, including any fees or charges that may be due for a particular use of the services;
                                        </li>
                                        <li>
                                            <strong>“HEROES Policies”</strong> means the following:
                                            <ol>
                                                <li>
                                                    the Privacy Policy
                                                </li>
                                                <li>
                                                    the Merchant’s Code of Conduct or the HEROES Consumer Code of Conduct may be applicable; and
                                                </li>
                                                <li>
                                                    all other forms, policies, notices, guidelines, frequently asked questions (FAQs), or agreements provided to or entered into by you from time to time;
                                                </li>
                                            </ol>
                                            <div>
                                                <p>
                                                    <strong>“Merchant”</strong> means a party that carries out business of providing physical spaces for the purpose of facilitating visits, lessons, and/or a party that provides a service or products to End Users;
                                                </p>
                                                <p>
                                                    <strong>"Personal Data"</strong> is any information which can be used to identify you or from which you are identifiable. This includes but is not limited to your name, nationality, telephone number, bank and credit card details, personal interests, email address, your image, government-issued identification numbers, biometric data, race, date of birth, marital status, religion, health information, vehicle and insurance information;
                                                </p>
                                                <p>
                                                    <strong>"Platform"</strong> means the HEROES Website, application, platform and/or portal which HEROES owns, operates or otherwise makes available to Consumers and/or Partners for the purposes of or in connection with the Service and/or Solutions;
                                                </p>
                                                <p>
                                                    <strong>"Privacy Policy"</strong> means our privacy policy accessible at: https://www.heroes.my/ privacy/ as amended from time to time;
                                                </p>
                                                <p>
                                                    <strong>"Service"</strong> means the linking of End Users to Merchants through the HEROES Website, application, platform and/or portal;
                                                </p>
                                                <p>
                                                    <strong>"Software"</strong> means any software associated with the HEROES Website which is supplied made available for download and installation by HEROES;
                                                </p>
                                            </div>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>REPRESENTATIONS, WARRANTIES AND UNDERTAKINGS</strong>
                                    <ol>
                                        <li>
                                            By using the Service and/or Platform, you represent, warrant and undertake that:
                                            <ol>
                                                <li>
                                                    You have legal capacity to enter into the Agreement and that you are at least eighteen (18) years old. You cannot enter into the Agreement if you are below eighteen (18) years old;
                                                </li>
                                                <li>
                                                    You will provide true, accurate, not misleading, current and complete information as required for the Service and undertake the responsibility to maintain and update your information in a timely manner to keep it true, accurate, not misleading, current and complete at all times during the term of the Agreement. You agree that HEROES may rely on your information as true, accurate, not misleading, current and complete. You acknowledge that if your information is untrue, inaccurate, misleading, not current or incomplete in any respect, HEROES has the right but not the obligation to terminate this Agreement and your use of the Service at any time with or without notice;
                                                </li>
                                                <li>
                                                    You will provide us with whatever proof of identity or any other documents, permits, licenses or approvals which we may reasonably request or require;
                                                </li>
                                                <li>
                                                    You acknowledge and agree that only one (1) account will be registered as otherwise permitted by HEROES;
                                                </li>
                                                <li>
                                                    You will only use the HEROES Website, applications and or any other platform, portal which HEROES owns and operates for their intended and lawful purposes;
                                                </li>
                                                <li>
                                                    You will keep your account password or any identification we provide you which allows access to the Service secure and confidential;
                                                </li>
                                                <li>
                                                    You will not authorize others to use your identity or user status, and you may not assign or otherwise transfer your user account to any other person or entity;
                                                </li>
                                                <li>
                                                    When using the Service/Platform, you agree to comply with all laws applicable to you and/or your use of the Service/Platform;
                                                </li>
                                                <li>
                                                    You agree to notify us immediately of any unauthorized use of your account or any other breach of security;
                                                </li>
                                                <li>
                                                    You will not try to interrupt, impair or harm the Service and/or Platform in any way, and shall refrain from: (a) sending spam or otherwise duplicative or unsolicited messages; (b) sending or storing infringing, obscene, threatening, libelous, or otherwise unlawful or tortious material, including but not limited to materials harmful to children or violative of third party privacy rights; (c) sending material containing software viruses, worms, trojan horses or other harmful computer code, files, scripts, agents or programs; (d) interfering with or disrupt the integrity or performance of the Platform or the data contained therein; (e) attempting to gain unauthorized access to the Platform or its related software, systems or networks; (f) impersonating any person or entity or otherwise misrepresent your affiliation with a person or entity; (g) engaging in any conduct that could possibly damage our reputation or amount to being disreputable; (h) circumventing the proper operation of the Platform and network which the Service operates on; and (i) using any manual or automated program or script, including but not limited to web spiders, web crawlers, web robots, web ants, web indexers, bots, viruses or worms, or any program which may make multiple server requests per second, to unduly burden or hinder the operation and/or performance of the Platform, or to circumvent the navigational structure or presentation of the Platform or its content;
                                                </li>
                                                <li>
                                                    You will not attempt to commercially exploit any part of the Application without our permission. For the avoidance of doubt, you are not permitted to modify or make derivative works based on the Platform, its content or any part thereof in any way, or copy, reproduce, publicly display, distribute or otherwise use or communicate them for any public or commercial purpose save where specifically permitted in writing by HEROES. This includes without limitation not to:
                                                    <ol className='ol-custom'>
                                                        <li>
                                                            create or compile, directly or indirectly, any collection, compilation or other directory from any content displayed on the Platform except for your personal, non-commercial use;
                                                        </li>
                                                        <li>
                                                            copy any content displayed through the Platform or “mirror” the Platform or any parts thereof on any other server or wireless or internet- based device, including reproducing any third party product content and reviews, for republication in any format or media; or navigational structure or presentation of the Platform or its content elsewhere;
                                                        </li>
                                                        <li>
                                                            conduct data mining or scraping activities; and
                                                        </li>
                                                        <li>
                                                            disassemble, decompile, reverse engineer, decrypt or attempt to derive and code or extract software from, the Platform or any software or services made available on or through the Platform;
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    You will not utilise modified devices or applications with the intent of evading detections or facilitating any activities intended to defraud HEROES or to disrupt the natural functions of the Application;
                                                </li>
                                                <li>
                                                    You will not use HEROES Website, applications and or any other platform, portal which HEROES owns and operates for sending or storing any unlawful material or for fraudulent purposes;
                                                </li>
                                                <li>
                                                    You will not use the HEROES Website, applications and or any other platform, portal which HEROES owns and operates to cause nuisance or behave in an inappropriate or disrespectful manner towards HEROES or any third party;
                                                </li>
                                                <li>
                                                    You will only use an access point or data account which you are authorized to use;
                                                </li>
                                                <li>
                                                    You agree that the Service is provided on a reasonable effort basis;
                                                </li>
                                                <li>
                                                    You agree that your use of the Service will be subject to HEROES’s Privacy Policy;
                                                </li>
                                                <li>
                                                    You agree to assist HEROES with any internal or external investigations as may be required by HEROES in complying with any prevailing laws or regulations in place;
                                                </li>
                                                <li>
                                                    You agree to assume full responsibility and liability for all loss or damage suffered by yourself, HEROES or any other party as a result of your breach of this Agreement;
                                                </li>
                                                <li>
                                                    You provide us the phone numbers of HEROES users and other contacts in your mobile phone address book on a regular basis. You confirm that you are authorised to provide us with such numbers to enhance your use of the Service.
                                                </li>
                                                <li>
                                                    You are aware that when using the Service or accessing the Platform, standard telecommunication charges will apply;
                                                </li>
                                                <li>
                                                    You agree that HEROES may, based on its sole discretion, consider an account to be dormant if there has been no transaction made by you on your user account for a period of twelve (12) months from the last date of transaction and deactivate or restrict access to your user account; and
                                                </li>
                                                <li>
                                                    You agree to assume full responsibility and liability for all loss or damage suffered by yourself, HEROES or any other party as a result of your breach of this Agreement.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <strong>If you are a Merchant</strong>, you further represent, warrant and undertake that:
                                            <ol>
                                                <li>
                                                    If applicable, you own, or have the legal right and authority to operate the premises or any other matter or thing which is involved or used in the course of your provision of the Service(s);
                                                </li>
                                                <li>
                                                    If applicable, you have a valid policy/ies of liability insurance (in industry- standard coverage amounts in connection with your provision of the Service(s));
                                                </li>
                                                <li>
                                                    You shall be solely responsible for any and all claims, judgments and liabilities resulting from any accident, loss or damage including, but not limited to, personal injuries, death, total loss and property damage which is due to or is alleged to be a result of the Service(s) provided by you;
                                                </li>
                                                <li>
                                                    You shall obey all local laws related to your provision of the Service(s) and will be solely responsible for any violations of such local laws and you acknowledge that HEROES has the right to carry out background search on you from time to time, to ensure that you are not directly or indirectly involved in a criminal action or being investigated for a criminal allegation or implicated in a criminal proceeding;
                                                </li>
                                                <li>
                                                    You shall not contact End Users for purposes other than in connection with the Service(s);
                                                </li>
                                                <li>
                                                    You shall not reverse look-up, trace or seek to trace any information on any other user of or visitor to the HEROES Platform, or any End Users, including without limitation any user account not owned by you, to its source, or exploit the HEROES Platform or information made available or offered by or through the HEROES Platform, in any way where the purpose is to reveal any information, including but shall not be limited to personal identification information, other than your own information, as provided for by HEROES;
                                                </li>
                                                <li>
                                                    You are aware that when responding to End Users, standard telecommunication charges may apply which shall be solely borne by you;
                                                </li>
                                                <li>
                                                    If you are required to and do sign up for an account on behalf of your employer, your employer shall be the owner of the account, and you represent and warrant that you have the authority to bind your employer to the Agreement;
                                                </li>
                                                <li>
                                                    <strong>You are strictly forbidden to use the Service for other purposes such as but not limited to data mining of HEROES’s information or information related to HEROES Platform</strong>. A breach hereof constitutes a grave offence and may be treated as <strong>industrial espionage or sabotage</strong>, and HEROES reserves the right to take such action as may be appropriate or permitted under the law against you, and/or any person, whether natural or artificial, directing or instructing you, in the event you use the Service other than for the purpose for which it is intended to be used; and
                                                </li>
                                                <li>
                                                    Without prejudice to any other provisions, information which you have submitted to us for your registration as a Merchant on the Platform, which may include your personal data as described in the Privacy Policy, may be linked to the account on the Platform or otherwise be temporarily displayed in the course of the Services on the Platform. You hereby give your consent to such use of information for the purposes of the Services, and to facilitate your use of the Platform. Your use of the Platform or any part thereof may be monitored by us or a third party service provider to provide you with information on your business and account as well as better services. You further agree that any personal data you receive via the Platform or otherwise in connection with the Services shall only be used for the direct and specific purpose for which you are originally provided the personal data, and such personal data shall be deleted or anonymized once the personal data is no longer required to be retained for the said purpose. For the avoidance of doubt, when you are provided with personal data of a End User via the Platform for the purposes of obtaining prior confirmation to amend an order placed, you shall only use the personal data provided for that sole purpose and remove it as soon as you no longer need the data for that purpose.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <strong>If you are an End User</strong>, you further represent, warrant and undertake that:
                                            <ol>
                                                <li>
                                                    Your use of the Service is for your own sole, personal use or, where permitted, for the use of another person who is at least twelve (12) years old (“Unaccompanied Minor”), in which case you shall assume primary responsibility of the Unaccompanied Minor;
                                                </li>
                                                <li>
                                                    You will not use the HEROES Platform to cause nuisance, annoyance, inconvenience or make fake bookings;
                                                </li>
                                                <li>
                                                    Where applicable, you agree to indicate the accurate number of service end user(s) when requesting for the Service. You further acknowledge and agree that if the information on the number of end users is untrue or inaccurate, the Merchant is entitled to cancel your booking and you may be charged a Cancellation Fee, as per the Cancellation Policy;
                                                </li>
                                                <li>
                                                    You shall not contact the Merchant for purposes other than the Service;
                                                </li>
                                                <li>
                                                    You shall not intentionally or unintentionally cause or attempt to cause damage to the Merchant or any property of the Merchant.
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>COMPATIBILITY</strong>
                                    <ol>
                                        <li>
                                            Different models or versions of routers, browsers and devices may have firmware or settings that are not compatible with HEROES Platform. While we continuously develop HEROES Platform in order to, as far as possible, support all commonly used devices and models in markets and all browsers where HEROES Platform is likely to be accessed from, we do not warrant compatibility of the HEROES Platform with specific mobile devices or other hardware.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>LICENSE GRANT AND RESTRICTIONS</strong>
                                    <ol>
                                        <li>
                                            HEROES and its licensors, where applicable, grant you a revocable, non- exclusive, non-transferable, limited license to use and access the HEROES Platform to use the Service, subject to the terms and conditions of this Agreement. All rights not expressly granted to you are reserved by HEROES and its licensors.
                                        </li>
                                        <li>
                                            You shall not:
                                            <ol>
                                                <li>
                                                    post, distribute or reproduce in any way any copyrighted material, trademarks, or other proprietary information without obtaining the prior consent of the owner of such proprietary rights; or
                                                </li>
                                                <li>
                                                    remove any copyright, trademark or other proprietary rights notices contained on the HEROES Platform.
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>PAYMENTS</strong>
                                    <ol>
                                        <li>
                                            Payment Terms for End Users:
                                            <ol>
                                                <li>
                                                    End Users are required to make full payment of the End User Charges for all services offered in the Platform by the online automated payment method selected at the time of booking available to you on the Platform. Any payment pursuant to such selection is non- refundable and irrevocable.
                                                </li>
                                                <li>
                                                    Automated payment may be made by credit card and or debit card, by HEROES, alternative e-Wallets or where available by such other methods as are made available in the Platform.
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>CANCELLATION</strong>
                                    <ol>
                                        <li>
                                            For Merchants:
                                            <ol>
                                                <li>
                                                    End Users rely on you for provision of Services. You agree that frequent cancellation of the End Users’ bookings will impair the End Users’ experience and negatively impact the reputation and branding of HEROES.
                                                </li>
                                                <li>
                                                    While you may cancel a booking, the cancellation shall be based on acceptable cancellation reasons as shown in the Platform. HEROES reserves the right to amend the acceptable cancellation reasons from time to time. A cancellation that is not based on one of the acceptable reasons or ignoring a booking may be counted in determining if your access to the Service(s) will be temporarily restricted.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            For End Users:
                                            <ol>
                                                <li>
                                                    No cancellation is allowed after booking & payment are made; however, we offer a flexible amendment policy; you can amend the booking 24 hours prior to the booked date & time.
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li id='refund'>
                                    <strong>REFUNDS</strong>
                                    <div className='pt-4'>
                                        All completed transactions/confirmed payments are non-refundable. Should you need to make amendment to the booking date/time, it is allowed if it is done 24 hours prior to the booked date & time.
                                    </div>
                                </li>
                                <li>
                                    <strong>RESCHEDULING & AMENDMENTS</strong>
                                    <ol>
                                        <li>
                                            For End Users:
                                            <ol>
                                                <li>
                                                    Rescheduling/amendments must be made 24 hours prior to the booked date & time. Multiple rescheduling/amendments are allowed.
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>HEROES MEMBERSHIP PROGRAMME AND PROMOTIONS FOR END USERS</strong>
                                    <ol>
                                        <li>
                                            If you are an End User who has signed up and paid for the annual membership fee, you will be a member of the loyalty program named “HEROES Membership Program” operated by HEROES and/or its affiliate companies.
                                        </li>
                                        <li>
                                            From time to time, HEROES may run marketing and promotional campaigns which offer discount or voucher codes, subscription plans, or other promotional offers to be used on the Platforms. Discount or Voucher codes are subject to validity periods, redemption periods, limits and/or availability. Discounts may not be valid when used in conjunction with other promotions, discounts or other vouchers. Additional terms and conditions may apply to Discounts. Unless otherwise stated, Discounts can only be used on our Platforms. Discounts are non-transferable, non-exchangeable and non-refundable and cannot be exchanged for cash. HEROES reserves the right to withdraw, amend and/or alter any part of the terms and conditions of the promotions and subscriptions at any time without any prior notice. HEROES reserves the right to void, discontinue or disqualify you from any promotion or subscription plan without prior notice to you, in the event you breach any part of these Terms of Service.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>RATINGS</strong>
                                    <ol>
                                        <li>
                                            End Users may be allowed to rate each other in respect of Services provided.
                                        </li>
                                        <li>
                                            Every rating will be automatically logged onto HEROES’s system and HEROES may analyse all ratings received. HEROES may take all appropriate actions including suspending your use of the Service without any notice or compensation to you.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>COMPLAINTS</strong>
                                    <ol>
                                        <li>
                                            In any event of dissatisfaction with the Service provided by a Merchant, customers need to inform HEROES Customer Success team within 24 hours of the completion of the booked Service(s). HEROES Customer Success team will then share the complaints/feedback with the Merchant. Both parties will work together for improvement.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>REPAIR AND CLEANING FEES FOR END USERS</strong>
                                    <ol>
                                        <li>
                                            Where applicable, you shall be responsible for the cost of repairing any damage to or necessary cleaning of the Merchant’s property as a result of your misuse of the Service or breach of the Terms of Service herein. HEROES may facilitate payment for reasonable cost of such repair or cleaning on behalf of the Merchant via your designated payment method or demand from you in cash, in the event a request for repair or cleaning request by the Merchant has been verified by HEROES.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>INTELLECTUAL PROPERTY OWNERSHIP</strong>
                                    <ol>
                                        <li>
                                            HEROES and its licensors, where applicable, shall own all right, title and interest, including all related intellectual property rights, in and to the Software and/or the Application and by extension, the Service and any suggestions, ideas, enhancement requests, feedback, recommendations or other information provided by you or any other party relating to the Service. The Terms of Service do not constitute a sale agreement and do not convey to you any rights of ownership in or related to the Service and/or the Platform, or any intellectual property rights owned by HEROES and/or its licensors. HEROES’s name, HEROES’s logo, the Service and/or the Platform and the product names associated with the Platform are trademarks of HEROES or third parties, and no right or license is granted to use them. For the avoidance of doubt, the term the Platform herein shall include its respective components, processes and design in its entirety.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>TAXES</strong>
                                    <ol>
                                        <li>
                                            You agree that this Agreement is subject to all prevailing statutory taxes, duties, fees, charges and/or costs, however denominated, as may be applicable from time to time. You shall comply with all applicable laws and take all steps required to enable, assist and/or defend HEROES to claim or verify any input tax credit, set off, rebate or refund in respect of any taxes paid or payable in connection with the Service.
                                        </li>
                                        <li>
                                            If you are a Merchant, you are accountable for paying any tax and statutory contributions due in respect of sums payable to you under or in connection with this Agreement.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>CONFIDENTIALITY</strong>
                                    <ol>
                                        <li>
                                            You shall maintain in confidence all information and data relating to HEROES, its services, products, business affairs, marketing and promotion plans or other operations and its associated companies which are disclosed to you by or on behalf of HEROES (whether orally or in writing and whether before, on or after the date of this Agreement) or which are otherwise directly or indirectly acquired by you from HEROES, or any of its affiliate companies, or created in the course of this Agreement. You shall further ensure that you only use such confidential information in order to use the Service, and shall not without HEROES’s prior written consent, disclose such information to any third party nor use it for any other purpose.
                                        </li>
                                        <li>
                                            The above obligations of confidentiality shall not apply to the extent that you can show that the relevant information:
                                            <ol>
                                                <li>
                                                    was at the time of receipt already in your possession;
                                                </li>
                                                <li>
                                                    is, or becomes in the future, public knowledge through no fault or omission on your part;
                                                </li>
                                                <li>
                                                    was received from a third party having the right to disclose it; orv
                                                </li>
                                                <li>
                                                    is required to be disclosed by law.
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>DATA PRIVACY AND PERSONAL DATA PROTECTION POLICY</strong>
                                    <ol>
                                        <li>
                                            HEROES collects and processes your Personal Data in accordance with its Privacy Policy. The Privacy Policy applies to all of HEROES’s Services and its terms are made a part of this Agreement by this reference.
                                        </li>
                                        <li>
                                            Where applicable, you agree and consent to HEROES, its subsidiaries and any of its affiliate companies collecting, using, processing and disclosing Personal Data as further described in our Privacy Policy.
                                        </li>
                                        <li>
                                            You acknowledge that HEROES may disclose Personal Data of other individuals to you in the course of your use of HEROES’s Services. You represent and warrant that you will only use such Personal Data for the purpose for which it was disclosed to you by HEROES, and not for any other unauthorized purposes.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>THIRD PARTY INTERACTIONS</strong>
                                    <ol>
                                        <li>
                                            During use of the Service, you may enter into correspondence or transactions with third parties who display or offer their goods and/or service through the Platform. Any such communication or agreement is strictly between you and the applicable third party and HEROES and its licensors shall have no liability or obligation for any such communication or agreement. Neither HEROES nor any of its affiliate companies endorses any applications or sites on the Internet that are linked through the Platform, and in no event shall HEROES, its licensors or its affiliate companies be responsible for any content, products, services or other materials on or available from such sites or Merchants. Certain Merchants of transportation, goods and/or services may require your agreement to additional or different Terms of Service and privacy policies prior to your use of or access to such goods or services, and HEROES is not a party to and disclaims any and all responsibility and/or liability arising from such agreements between you and the Merchants. You acknowledge that such additional or different terms of use and privacy policies may apply to your use of such third party services. HEROES is not liable for any information that you provide to or authorise us to provide to a third party, or for such third party’s collection, use and disclosure of such information.
                                        </li>
                                        <li>
                                            HEROES may rely on third party advertising and marketing supplied through the Service and other mechanisms to subsidize the Service and/or to earn additional revenue. You agree to receive such advertising and marketing. If you do not want to receive such advertising and marketing, please refer to our Privacy Policy for instructions to unsubscribe or update your privacy settings.. You agree and allow HEROES to compile and release information regarding you and your use of the Service on an anonymous basis as part of a consumer profile or similar report or analysis. You agree that it is your responsibility to take all precautions in all actions and interactions with any third party you interact with through the Service and/or advertising or marketing material supplied by third parties through the Service.
                                        </li>
                                        <li>
                                            We may include hyperlinks to other websites or content on the Internet that are owned or operated by third parties (“Third Party Links“). Such Third Party Links are not under our control and we are not liable for any errors, omissions, delays, defamation, libel, slander, falsehood, obscenity, pornography, profanity, inaccuracy or any other objectionable material contained in the content, or the consequences of accessing, any linked website. Any hyperlinks to any other websites or content are not an endorsement or verification of such websites or content and you agree that your access to or use of such linked websites or content is entirely at your own risk.
                                        </li>
                                        <li>
                                            You acknowledge that in addition to utilising data from the Data Sources listed in Section B the Application utilises and modifies search results from Google Maps services and content, and that by using the Application, you agree to comply with (1) the Google Maps/ Google Earth Additional Terms of Services at https://maps.google.com/help/terms_maps.html; (2) the Google Privacy Policy at https://www.google.com/policies/privacy/; and (3) the Google Acceptable Use Policy at <a href='https://cloud.google.com/maps-platform/terms/aup/'>https://cloud.google.com/maps-platform/terms/aup/</a>. You further agree that when using the Application you shall not:
                                            <ol className='ol-custom'>
                                                <li>
                                                    copy, modify, create a derivative work of, reverse engineer, decompile, translate, disassemble or otherwise attempt to extract any of the source code of Google Maps;
                                                </li>
                                                <li>
                                                    sublicense, transfer or distribute Google Maps;
                                                </li>
                                                <li>
                                                    sell, resell or otherwise make Google Map available to a third party as part of a commercial offering that does not have material value independent of Google Maps; or
                                                </li>
                                                <li>
                                                    access or use Google Maps in a manner that is illegal or which is likely to result in a circumvention of any fees payable to Google.
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>INDEMNIFICATION</strong>
                                    <ol>
                                        <li>
                                            By agreeing to the Terms of Service upon using the Service, you agree that you shall indemnify and hold HEROES, its licensors and each such party’s affiliates, officers, directors, members, employees, attorneys and agents harmless from and against any and all claims, costs, damages, losses, liabilities and expenses (including attorneys’ fees and costs and/or regulatory action) arising out of or in connection with: (a) your use of HEROES Website and/or the Platform in your dealings with Merchants or End Users (as the case may be), third party merchants, providers, partners, advertisers and/or sponsors, or (b) your violation or breach of any of the Terms of Service, any third party terms and conditions or any applicable law or regulation, whether or not referenced herein, or (c) your violation of any rights of any third party, including Merchants or End Users arranged via HEROES Website and/or the Platform, or (d) your use or misuse of HEROES Website and /or the Platform; and (e) where applicable your ownership, use or operation of any property, including your provision of Services to End Users via the Platform
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>DISCLAIMER OF WARRANTIES</strong>
                                    <ol>
                                        <li>
                                            The Platform, its content and any related service(s) is provided to you on an “as is” basis. HEROES makes no representations or warranties of any kind, express or implied, in connection with HEROES Website and/or the Platform, these Terms of Service, the content or any related service(s). Although we make reasonable efforts to keep HEROES Website and/or the Platform up-to-date, we make no representations, warranties or guarantees, whether express or implied, that such information is accurate, complete or up to date. We shall not be liable for any direct, indirect or consequent loss arising from the modifications or amendments to the HEROES Website and/or the Platform, or Terms of Service.
                                        </li>
                                        <li>
                                            HEROES makes no representation or warranty of any kind whatsoever, express or implied, in respect of Services provided by Partners or any Services procured through the use of the HEROES Website and/or Platform. You agree that you shall bear all risk arising out of your use of any Service provided by Merchants and shall have no recourse to HEROES in respect of the same.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>INTERNET DELAYS</strong>
                                    <ol>
                                        <li>
                                            HEROES Website and/or the Platform may be subject to limitations, delays, and other problems inherent in the use of the internet and electronic communications including the divide used by you or the Merchants being faulty, not connected, out of range, switched off or not functioning. HEROES is not responsible for any delays, delivery failures, damages or losses resulting from such problems.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>LIMITATIONS OF LIABILITY</strong>
                                    <ol>
                                        <li>
                                            Unless otherwise stated, and to the fullest extent allowed by law, any claims against HEROES by you shall be limited to the aggregate amount of all amounts actually paid by and/or due from you in utilizing the service during the event giving rise to such claims. HEROES and/or its licensors shall not be liable for any loss, damage or injury which may be incurred by or caused to you or to any person for whom you have booked Services, including but not limited to:
                                            <ol>
                                                <li>
                                                    Loss, damage or injury arising out of, or in any way connected with HEROES Website and/or the Platform.
                                                </li>
                                                <li>
                                                    The use or inability to use HEROES Website and/or the Platform.
                                                </li>
                                                <li>
                                                    Any reliance placed by you in the completeness, accuracy or existence of any advertising; or
                                                </li>
                                                <li>
                                                    As a result of any relationship or transaction between you and any End User, Merchant, Advertiser or Sponsor whose advertising appears on the HEROES Website or is referred to by HEROES Website and/or the Platform Even if HEROES and/or its licensors have been previously advised of the possibility of such damages.
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            HEROES does not warrant and represent that it assesses or monitors the suitability, legality, ability, movement or location of any End Users or Merchants, Advertisers and/or Sponsors and you expressly waive and release HEROES from any and all liability, claims or damages arising from or in any way related to the End Users or Merchants including Third Party service providers, Merchants, Advertisers and/or Sponsors.
                                        </li>
                                        <li>
                                            HEROES will not be a party to disputes, or negotiations of disputes between you and End Users and/or Merchants and/or Advertisers and/or Sponsors. Responsibility for the decisions you make regarding Services offered via HEROES Website and/or the Platform rests solely with and on you. You expressly waive and release HEROES from any and all liability, claims, causes of action, or damages arising from your use of HEROES Website and/or the Platform, or in any way related to third parties including Merchants, Advertisers and/or Sponsors introduced to you by HEROES Website and/or the Platform.
                                        </li>
                                        <li>
                                            The quality of the Services scheduled through the use of HEROES Website and/ or the Platform is entirely the responsibility of the Merchants who ultimately provides such Service(s) to End Users. You understand, therefore, that by using HEROES Website and/or the Platform, you may be exposed to service(s) that may be potentially offensive, harmful or otherwise objectionable, and that you use the service(s) at your own risk.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>NOTICE</strong>
                                    <ol>
                                        <li>
                                            HEROES may give notice through HEROES Website and/or the Platform, electronic mail to your email address in the records of HEROES, or by written communication sent by registered mail or pre-paid post to your address in the records of HEROES. Such notice shall be deemed to have been given upon the expiration of 48 hours after mailing or posting (if sent by registered mail or pre- paid post) or 1 hour after sending (if sent by email). You may give notice to HEROES (such notice shall be deemed given when received by HEROES) by letter sent by courier or registered mail to HEROES using the contact details as provided in the HEROES Website and/or the Platform.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>ASSIGNMENT</strong>
                                    <ol>
                                        <li>
                                            This Terms of Service as modified from time to time may not be assigned by you without the prior written approval of HEROES but may be assigned without your consent by HEROES. Any purported assignment by you in violation of this section shall be void.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>DISPUTE RESOLUTION</strong>
                                    <ol>
                                        <li>
                                            This Terms of Service shall be governed by Malaysian law, without regard to the choice or conflicts of law provisions of any jurisdiction, and any disputes, actions, claims or causes of action arising out of or in connection with this Terms of Service or the Service shall be referred to the Asian International Arbitration Centre (“AIAC”), in accordance with the Rules of the AIAC as modified or amended from time to time (the “Rules”) by a sole arbitrator appointed by the mutual agreement of you and HEROES (the “Arbitrator”). If you and HEROES are unable to agree on an arbitrator, the Arbitrator shall be appointed by the President of AIAC in accordance with the Rules. The seat and venue of the arbitration shall be Kuala Lumpur, in the English language and the fees of the Arbitrator shall be borne equally by you and HEROES, provided that the Arbitrator may require that such fees be borne in such other manner as the Arbitrator determines is required in order for this arbitration clause to be enforceable under applicable law.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>RELATIONSHIP</strong>
                                    <ol>
                                        <li>
                                            Nothing contained in these Terms of Service shall be construed as creating any agency, partnership, or other form of joint enterprise with HEROES.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>SEVERABILITY</strong>
                                    <ol>
                                        <li>
                                            If any provision of the Terms of Service is held to be invalid or unenforceable, the legality, validity and enforceability of the remaining provisions shall not be affected or impaired.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>NO WAIVER</strong>
                                    <ol>
                                        <li>
                                            The failure of HEROES to enforce any right or provision in the Terms of Service shall not constitute a waiver of such right or provision.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>ENTIRE AGREEMENT</strong>
                                    <ol>
                                        <li>
                                            This Agreement comprises the entire agreement between you and HEROES and supersedes any prior or contemporaneous negotiations or discussions.
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>SUSPENSION AND TERMINATION</strong>
                                    <ol>
                                        <li>
                                            You agree that we may do any of the following, at any time, without notice: (i) to modify, suspend or terminate operation of or access to HEROES Website and/or the Platform (including access to your Account and/or the availability of any products or services), for any reason; (ii) to modify or change any applicable policies or terms; and (ii) to interrupt the operation of HEROES Website and/or the Platform or any portion of HEROES Website and/or the Platform (including access to your Account and/or the availability of any products or services), as necessary to perform routine or non-routine maintenance, error correction, or other changes. We shall not be required to compensate you for any suspension or termination.
                                        </li>
                                    </ol>
                                </li>
                                <li className='li-font'>
                                    <strong>NO THIRD PARTY RIGHTS OR ASSIGNMENT</strong>
                                    <ol>
                                        <li>
                                            This agreement does not give rights to any third parties who are not party to this Agreement.
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </p>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TermsOfService