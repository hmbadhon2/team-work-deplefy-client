import React from 'react';

const HostingFaq = () => {
    return (
        <div className='md:max-w-[1140px] md:mx-auto my-12'>

            <h1 className='text-center faq text-4xl font-bold dark:text-lime-700'>Web Hosting FAQs</h1>
            <p className='text-center textColor mt-4 '>Find answers to frequently asked questions about website hosting services.</p>



            <div className=' mx-auto my-20 p-8 '>




                <div tabIndex={0} className="collapse mb-5 collapse-arrow borderColor py-6 ">
                    <div className="collapse-title text-2xl font-medium faq dark:text-lime-700">
                        What Is Web Hosting?
                    </div>



                    <div className="collapse-content font-serif textColor ">
                        <p>Web hosting is a service that makes your website available on the internet. When you get a hosting plan, you rent an online space from a web host like hostinger.com to store all of your website files. This will allow people to access your site using a web browser.</p>

                        <p className='mt-6'>There are many types of hosting services available, such as shared hosting, WordPress hosting, and cloud hosting. The more popular a website is, the more resources it will need to function effectively.</p>


                        <p className='mt-6'>The simplest way to start is to choose a shared plan and gradually upgrade to cloud hosting plans or even VPS when you need more power. The most common types of hosting include:</p>


                        <p className='mt-6'> <span className='font-bold'>Shared hosting.</span> Multiple websites are hosted on the shared server, and each user is allocated a certain amount of storage space and resources. Often, this is the most affordable option available, so it is an excellent option for beginners, hobbyists and bloggers.</p>


                        <p className='mt-6'><span className='font-bold'>VPS hosting.</span> A virtual private server (VPS) setup generally uses more powerful hardware, making it possible for the web host to create a virtual partition for each user. It’s an excellent option for users with more advanced technical knowledge. </p>

                        <p className='mt-6'><span className='font-bold'>Cloud hosting.</span>In this setup, websites run on multiple virtual servers – not just one physical server – reducing possible downtime and hardware failure. If you need access to more server power, this type of hosting service can be right for you. </p>


                        <p className='mt-6'><span className='font-bold'>Dedicated hosting.</span> When you have a dedicated hosting plan, the server is dedicated to your website only – you don’t share storage space or resources with others. A dedicated server is usually recommended for professional web admins and developers.</p>

                        <p className='mt-5'>Here at Hostinger, we aim to provide fast hosting with nearly 100% uptime at a truly unbeatable price.</p>

                    </div>
                </div>










                <div tabIndex={0} className="collapse mb-5 collapse-arrow borderColor py-6  ">
                    <div className="collapse-title text-2xl font-medium faq dark:text-lime-700">
                        How Do Website Hosting Services Work?
                    </div>



                    <div className="collapse-content font-serif textColor">
                        <p>Your website is a collection of files and (in most cases) databases shown to your visitors as they browse your site. Hostinger, like most web hosting providers, allocates storage space for your website’s files and databases on a server.</p>

                        <p className='mt-6'>When you sign up for Hostinger's hosting services, you'll receive login details to access your hosting account's admin panel – the hPanel. In hPanel, you can manage everything related to your website, from hosting to domains, databases, files, etc.</p>
                    </div>
                </div>










                <div tabIndex={0} className="collapse mb-5 collapse-arrow borderColor py-6  ">
                    <div className="collapse-title text-2xl font-medium faq dark:text-lime-700">
                        Why Do I Need Web Hosting?
                    </div>



                    <div className="collapse-content font-serif textColor">
                        <p>You need a hosting plan to get your website up and running.</p>

                        <p className='mt-6'>While publishing a website without external hosting is possible, it's not the best option for beginners because you need to know how to set up your computer to work as a web server. You'll save time and money by opting for Hostinger's website hosting services.</p>
                    </div>
                </div>








                <div tabIndex={0} className="collapse mb-5 collapse-arrow borderColor py-6 ">
                    <div className="collapse-title text-2xl font-medium faq dark:text-lime-700">
                        What Kind of Support Will I Get?
                    </div>

                    <div className="collapse-content font-serif textColor">
                        <p>Here at Hostinger, we call our support team the Customer Success team. Hostinger’s Customer Success team is top-rated within the industry – we respond quickly and thoroughly and don’t give up until we’ve found a solution.</p>

                        <p className='mt-6'>We go the extra mile to ensure that our customers are successful with their online ventures. So, if you encounter a problem, don’t hesitate to reach out. We’ll do our best to fix any issues and point you in the right direction.</p>
                    </div>
                </div>





                <div tabIndex={0} className="collapse mb-5 collapse-arrow borderColor py-6 ">
                    <div className="collapse-title text-2xl font-medium faq dark:text-lime-700">
                        What Are the Differences Between Website Hosting and Domain?
                    </div>

                    <div className="collapse-content font-serif textColor">
                        <p>Web hosting and domain are essential elements for building a functional website. A domain name is essentially a website’s address, such as hostinger.com; hosting is a service that stores site files and makes them available on the internet.</p>

                        <p className='mt-6'>Without domains, people would have to memorize IP addresses to visit websites. Then, without website hosting plans, you would have to set up your computer to act as a server.</p>
                    </div>
                </div>






                <div tabIndex={0} className="collapse mb-5 collapse-arrow borderColor py-6 ">
                    <div className="collapse-title text-2xl font-medium faq dark:text-lime-700">
                        Can I Buy Hosting Without a Domain Name?
                    </div>

                    <div className="collapse-content font-serif textColor">
                        <p>Yes, you can. If you want to, you can purchase domain names from other domain or hosting companies and point them to your web host. If you want to keep both your domain and hosting under a single provider – which we recommend for convenience and easier troubleshooting – you can transfer your domain name over to Hostinger.</p>


                    </div>
                </div>



                <div tabIndex={0} className="collapse mb-5 collapse-arrow borderColor py-6 ">
                    <div className="collapse-title text-2xl font-medium faq dark:text-lime-700">
                        How Can I Upgrade My Account if I Need To?
                    </div>

                    <div className="collapse-content font-serif textColor">
                        <p>Upgrading your web hosting service is easy with Hostinger. We pride ourselves on having no downtime during the upgrade, so your website will be up and running the whole time. You won’t have to worry about a bad browsing experience or losing revenue.</p>


                    </div>
                </div>






                <div tabIndex={0} className="collapse mb-5 collapse-arrow borderColor py-6 ">
                    <div className="collapse-title text-2xl font-medium faq dark:text-lime-700">
                        How to Connect My Domain Name and Web Hosting?
                    </div>

                    <div className="collapse-content font-serif textColor">
                        <p>The most common way of connecting your domain name to your <span className='font-bold'>hosting is pointing</span> it to Hostinger's nameservers. You’ll need to replace your domain’s name server info. Like most tasks, it is easy to do through your domain management area.</p>


                    </div>
                </div>






                <div tabIndex={0} className="collapse mb-5 collapse-arrow borderColor py-6 ">
                    <div className="collapse-title text-2xl font-medium faq dark:text-lime-700">
                        Do I Need Technical Knowledge to Use Hostinger?
                    </div>

                    <div className="collapse-content font-serif textColor">
                        <p>No. Hostinger makes it as easy as possible for beginners to create and manage their websites. Many simple tasks, like setting up an email address, installing a content management system, and using our website builder, can be done with just a few clicks and without prior technical knowledge.</p>

                        <p className='mt-6'>Our web hosting services are also suitable for experienced web developers. We believe that there’s no reason why something can’t be both user-friendly and powerful.</p>

                        <p className='mt-6'>If you face any issues, we offer 24/7 support and a variety of online guides to walk you through all sorts of tasks.</p>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default HostingFaq;