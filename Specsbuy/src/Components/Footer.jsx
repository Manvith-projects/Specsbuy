import React from 'react';

// A reusable component for each link list to keep the code clean
const FooterLinkColumn = ({ title, links }) => (
    <div>
        <h3 className="font-bold text-[#FF0000] mb-4">{title}</h3>
        <ul className="space-y-3">
            {links.map((link, index) => (
                <li key={index}>
                    <a href="#" className="text-gray-600 hover:underline text-sm">{link}</a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    // Data for the link columns to make the JSX cleaner
    const sections = {
        faq: { title: 'Frequently Asked Questions', links: ['Virtual Try-On', 'Lenses', 'Shipping', 'Prescriptions', 'Sunglasses', 'More'] },
        shopAll: { title: 'Shop All', links: ["All Glasses", "Women's Glasses", "Men's Glasses", "Kid's Glasses", "Sunglasses", "Non-Prescription Sunglasses", "Women's Sunglasses", "Men's Sunglasses", "Kid's Sunglasses", "New Arrivals"] },
        rushDelivery: { title: 'Express Delivery', links: ["Sports Glasses", "Computer Glasses", "Reading Glasses", "Blue Light Glasses"] },
        shopCategories: { title: 'Shop By Categories', links: ["Progressive Glasses", "Men's Progressives", "Women's Progressives", "Progressive Sunglasses", "Polarized Sunglasses", "Bifocals", "Photochromic Glasses", "Clip-on Sets", "Goggles", "Transitions® Lenses", "Accessories", "Gift Cards"] },
        shopBrands: { title: 'Shop Brands', links: ['All Brands', 'Ray-Ban', 'Oakley', 'Vogue', 'Titan', 'Fastrack', 'Vincent Chase', 'John Jacobs'] },
        shopStyle: { title: 'Shop By Style', links: ['View All', 'Rectangle', 'Square', 'Cat Eye', 'Browline', 'Round', 'Aviator', 'Oval', 'Rimless', 'Half-Rim', 'Geometric', 'Wayfarer'] },
        protectiveEyewear: { title: 'Protective Eyewear', links: ['Safety Glasses', 'Protective Glasses', 'Sports Goggles', 'Non-Prescription Goggles'] },
        greatDeals: { title: 'Great Deals', links: ['Offers & Promotions', 'Glasses Under ₹499', 'Glasses Under ₹999', 'Glasses Under ₹1499', 'Glasses Sale'] },
        infographics: { title: 'Guides & Tips', links: ['View All', 'How to Measure Your PD', 'How to Choose Frames', 'Face Shape Guide', 'Frame Size Guide', 'Adjusting Your Glasses', 'Lens Types Explained'] },
        learn: { title: 'Learn', links: ['How to Order', 'Fit & Comfort Guide', 'How to Read Prescription', 'Lens Index & Material Guide', 'About Sunglasses', 'Blue Light Lenses', 'About Progressives', 'Photochromic Lenses'] },
        howToVideos: { title: 'How To Videos', links: ['View All', 'Order Glasses Online', 'Measure Your PD', 'Choose Frames for Face Shape', 'Adapt to Progressives', 'Replace Lenses', 'Choose Tints', 'Use Gift Card'] },
        about: { title: 'About SpecsBuy', links: ['About Us', 'Site Map', 'SpecsBuy Blog', 'Press Room', 'CSR Initiatives', 'Careers', 'Our Story', 'Privacy Policy'] },
        programs: { title: 'Programs', links: ['Contact Lens Store', 'Loyalty Program', 'Corporate Orders', 'Affiliate Program', 'Refer a Friend', 'FSA/HSA', 'Download Our App'] },
    };

    return (
        <footer className="bg-white ">
            <hr className='border-gray-300' />
            <div className="container mx-auto px-4 py-8">
                
                {/* Top Section: Newsletter & Social */}
                <div className="border-t border-b border-gray-200 py-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold">Get 10% off your first order</h2>
                        <p className="text-gray-600 mt-2">Sign up now for exclusive news and savings from SpecsBuy.</p>
                        <div className="mt-4 flex max-w-md mx-auto border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-black">
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-2 outline-none" />
                            <button className="bg-black text-white px-8 py-2 font-semibold hover:bg-[#FF0000] transition-colors">SignUp</button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">10% off applies to full price items only. SpecsBuy reserves the right to modify or cancel at any time.</p>
                    </div>
                    
                    <div className="flex justify-center items-center gap-4 flex-wrap">
                        <img src="/logo.png" alt="SpecsBuy Logo" className="h-12" />
                        <span className="font-bold">Connect with us</span>
                        {/* Social Icons */}
                        <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-black"><svg className="w-6 h-6" fill="#FF0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path></svg></a>
                        <a href="#" aria-label="Pinterest" className="text-gray-600 hover:text-black"><svg className="w-6 h-6" fill="#FF0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.104 3.167 9.423 7.545 11.177.015-.42-.042-1.63 0-2.348.035-.588.42-1.772.42-1.772.105-.42.63-1.89.63-1.89.175-.42.105-1.05-.21-1.47-.315-.42-.525-1.05-.525-2.1 0-1.89 1.365-3.57 3.045-3.57 1.47 0 2.415.84 2.415 2.31 0 .945-.315 2.1-.735 3.15-.315.945-.945 2.1-2.1 2.1-.63 0-1.26-.63-1.05-1.47.105-.525.315-1.05.42-1.47.105-.42.21-.84.21-1.26 0-.63-.21-1.05-.63-1.05-.42 0-.84.42-1.05.84-.21.42-.315 1.05-.315 1.47 0 .42.028.69.105.945l-.42 1.68c-.21.84-.84 2.1-1.26 2.94-.105.21-.21.42-.42.63-.42.84-.63 1.89-.63 2.94 0 1.47.84 2.73 2.52 2.73 3.36 0 5.88-2.52 5.88-6.09 0-3.15-2.1-5.25-5.04-5.25-3.57 0-5.67 2.73-5.67 5.46 0 .84.21 1.68.63 2.31.21.42.21.84.0 1.26-.21.63-.42 1.26-.63 1.89-.105.42-.42 1.05-.42 1.47 0 .42.105.84.21 1.26.21.84 1.47 3.57 1.68 3.78.42.84 1.05 1.47 1.89 1.89 1.05.42 2.1.21 2.94-.21C20.428 20.732 24 16.73 24 12 24 5.373 18.627 0 12 0z"></path></svg></a>
                        <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-black"><svg className="w-6 h-6" fill="#FF0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path></svg></a>
                        <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black"><svg className="w-6 h-6" fill="#FF0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.634 4.208 3.801 4.649-.623.169-1.282.23-1.963.184.606 1.921 2.362 3.255 4.448 3.293-1.776 1.391-3.991 2.16-6.42 2.062 2.261 1.453 4.949 2.308 7.823 2.308 9.261 0 14.328-7.765 14.048-14.656.97-.699 1.8-1.574 2.45-2.549z"></path></svg></a>
                        <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-black"><svg className="w-6 h-6" fill="#FF0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg></a>
                    </div>
                </div>

                {/* Main Footer Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-8">
                    {/* Column 1 */}
                    <div className="space-y-8">
                        <FooterLinkColumn {...sections.faq} />
                        <FooterLinkColumn {...sections.shopAll} />
                        <FooterLinkColumn {...sections.rushDelivery} />
                    </div>
                    {/* Column 2 */}
                    <div className="space-y-8">
                        <FooterLinkColumn {...sections.shopBrands} />
                        <FooterLinkColumn {...sections.shopStyle} />
                        <FooterLinkColumn {...sections.protectiveEyewear} />
                    </div>
                    {/* Column 3 */}
                    <div className="space-y-8">
                        <FooterLinkColumn {...sections.greatDeals} />
                        <FooterLinkColumn {...sections.infographics} />
                        <FooterLinkColumn {...sections.learn} />
                    </div>
                    {/* Column 4 */}
                    <div className="space-y-8">
                        <FooterLinkColumn {...sections.howToVideos} />
                        <FooterLinkColumn {...sections.about} />
                        <FooterLinkColumn {...sections.programs} />
                    </div>
                    {/* Column 5 - Customer Service */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-bold text-[#FF0000] mb-4">Customer Service</h3>
                             <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm text-gray-600 hover:underline"><a href="#">Track My Order</a></li>
                                <li className="flex items-center gap-2 text-sm text-gray-600 hover:underline"><a href="#">Return Information</a></li>
                                <li className="flex items-center gap-2 text-sm text-gray-600 hover:underline"><a href="#">Gift Card Balance</a></li>
                                <li className="flex items-center gap-2 text-sm text-gray-600 hover:underline"><a href="#">SpecsBuy Warranty</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#FF0000] mb-4">Customer Service Hours <a href="#" className="text-red-600 text-xs font-normal underline">(View our detailed business hours here)</a></h3>
                            <div className="text-sm text-gray-600 space-y-3">
                                <p>Connect with us over Chat and Email 24/7</p>
                                <a href="#" className="flex items-center gap-2 hover:underline">
                                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                   <span>Chat</span>
                                </a>
                                 <a href="#" className="flex items-center gap-2 hover:underline">
                                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                   <span>Email</span>
                                </a>
                                <p>Call us: 86880 04422 (9am - 9pm IST, Mon-Sat)</p>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    <span>WhatsApp: +91-86880 04422</span>
                                </div>
                                <p>Visit our <a href="#" className="underline hover:text-black">Help Center</a> for more information!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
