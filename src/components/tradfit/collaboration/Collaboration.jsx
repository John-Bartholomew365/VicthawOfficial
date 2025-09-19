// import {
//   ExternalLink,
//   Instagram,
//   Twitter,
//   Facebook,
//   Globe,
// } from "lucide-react";
// import Link from "next/link";

// const collaborations = [
//   {
//     id: 1,
//     name: "FitzNArtz",
//     description: (
//       <table width="100%" cellpadding="0" cellspacing="0">
//         <tr>
//           <td style={{ padding: "10px 0" }}>
//             FitzNArtz is a platform which is a multipurpose space that offers both online and offline fitness coaching services as well as creative services.
//           </td>
//         </tr>
//         <tr>
//           <td style={{ padding: "10px 0" }}>
//             We pay attention to Arts, workouts, nutrition/meal plans as well as the psychological process in the clients' fitness and art journey.
//           </td>
//         </tr>
//         <tr>
//           <td style={{ padding: "10px 0" }}>
//             <strong>Our services include:</strong><br />
//             • Fitness Coaching<br />
//             • Writing<br />
//             • Mentorship<br />
//             • Arts Event And Event Planning<br />
//             • Editing<br />
//             • Fashion<br />
//             • Promotional Writings and Videos for Businesses
//           </td>
//         </tr>
//       </table>
//     ),
//     logo: "/fitz.jpeg",
//     website: "https://fitznartz.com",
//     social: {
//       instagram: "https://instagram.com/fitznartz",
//       twitter: "https://twitter.com/fitznartz",
//       facebook: "https://facebook.com/fitznartz",
//     },
//   },
//   // {
//   //   id: 2,
//   //   name: "Cultural Heritage Foundation",
//   //   description: (
//   //     <table width="100%" cellpadding="0" cellspacing="0">
//   //       <tr>
//   //         <td style={{ padding: "10px 0" }}>
//   //           Preserving and promoting African cultural traditions through dance, music, and community engagement initiatives.
//   //         </td>
//   //       </tr>
//   //       <tr>
//   //         <td style={{ padding: "10px 0" }}>
//   //           <strong>Key Focus Areas:</strong><br />
//   //           • Cultural preservation<br />
//   //           • Traditional dance and music<br />
//   //           • Community workshops<br />
//   //           • Educational programs
//   //         </td>
//   //       </tr>
//   //     </table>
//   //   ),
//   //   logo: "/placeholder-uxr45.png",
//   //   website: "https://culturalheritage.org.ng",
//   //   social: {
//   //     instagram: "https://instagram.com/culturalheritage",
//   //     twitter: "https://twitter.com/culturalheritage",
//   //     facebook: "https://facebook.com/culturalheritage",
//   //   },
//   // },
//   // {
//   //   id: 3,
//   //   name: "Rhythm & Beats Studio",
//   //   description: (
//   //     <table width="100%" cellpadding="0" cellspacing="0">
//   //       <tr>
//   //         <td style={{ padding: "10px 0" }}>
//   //           Professional music production and live performance services, bringing authentic African rhythms to our dance aerobics sessions.
//   //         </td>
//   //       </tr>
//   //       <tr>
//   //         <td style={{ padding: "10px 0" }}>
//   //           <strong>Services Provided:</strong><br />
//   //           • Music production<br />
//   //           • Live DJ services<br />
//   //           • Sound engineering<br />
//   //           • Custom beats for fitness
//   //         </td>
//   //       </tr>
//   //     </table>
//   //   ),
//   //   logo: "/placeholder-z9zui.png",
//   //   website: "https://rhythmbeats.ng",
//   //   social: {
//   //     instagram: "https://instagram.com/rhythmbeats",
//   //     twitter: "https://twitter.com/rhythmbeats",
//   //   },
//   // },
//   // {
//   //   id: 4,
//   //   name: "Wellness Plus Nutrition",
//   //   description: (
//   //     <table width="100%" cellpadding="0" cellspacing="0">
//   //       <tr>
//   //         <td style={{ padding: "10px 0" }}>
//   //           Providing healthy meal plans and nutritional guidance to complement our fitness programs and support participant wellness goals.
//   //         </td>
//   //       </tr>
//   //       <tr>
//   //         <td style={{ padding: "10px 0" }}>
//   //           <strong>Specialized Services:</strong><br />
//   //           • Personalized meal plans<br />
//   //           • Nutritional counseling<br />
//   //           • Supplement guidance<br />
//   //           • Post-workout nutrition
//   //         </td>
//   //       </tr>
//   //     </table>
//   //   ),
//   //   logo: "/wellness-plus-nutrition-healthy-food-logo.jpg",
//   //   website: "https://wellnessplus.com.ng",
//   //   social: {
//   //     instagram: "https://instagram.com/wellnessplus",
//   //     facebook: "https://facebook.com/wellnessplus",
//   //   },
//   // },
//   // {
//   //   id: 5,
//   //   name: "Lagos Sports Council",
//   //   description: (
//   //     <table width="100%" cellpadding="0" cellspacing="0">
//   //       <tr>
//   //         <td style={{ padding: "10px 0" }}>
//   //           Government partnership supporting community sports development and promoting healthy lifestyle initiatives across Lagos State.
//   //         </td>
//   //       </tr>
//   //       <tr>
//   //         <td style={{ padding: "10px 0" }}>
//   //           <strong>Initiatives Supported:</strong><br />
//   //           • Community sports programs<br />
//   //           • Health awareness campaigns<br />
//   //           • Youth sports development<br />
//   //           • Infrastructure support
//   //         </td>
//   //       </tr>
//   //     </table>
//   //   ),
//   //   logo: "/placeholder-49z81.png",
//   //   website: "https://lagossports.gov.ng",
//   //   social: {
//   //     twitter: "https://twitter.com/lagossports",
//   //     facebook: "https://facebook.com/lagossports",
//   //   },
//   // },
//   // {
//   //   id: 6,
//   //   name: "AfroFit Apparel",
//   //   description: (
//   //     <table width="100%" cellpadding="0" cellspacing="0">
//   //       <tr>
//   //         <td style={{ padding: "10px 0" }}>
//   //           Stylish and comfortable workout clothing inspired by African designs, perfect for our TRADFIT RHYTHMS participants.
//   //         </td>
//   //       </tr>
//   //       <tr>
//   //         <td style={{ padding: "10px 0" }}>
//   //           <strong>Product Range:</strong><br />
//   //           • Activewear collection<br />
//   //           • African print designs<br />
//   //           • Performance fabrics<br />
//   //           • Custom team apparel
//   //         </td>
//   //       </tr>
//   //     </table>
//   //   ),
//   //   logo: "/placeholder-nd0fz.png",
//   //   website: "https://afrofit.ng",
//   //   social: {
//   //     instagram: "https://instagram.com/afrofit",
//   //     twitter: "https://twitter.com/afrofit",
//   //     facebook: "https://facebook.com/afrofit",
//   //   },
//   // },
// ];

// export default function CollaborationPage() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="pt-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto">
//             <h1 className="text-[34px] lg:text-5xl font-bold text-[#C90A1D] mb-6 text-balance leading-tight">
//               Our Valued Collaborations
//             </h1>
//             <p className="text-red-800 text-pretty leading-tight">
//               Building stronger communities through strategic partnerships. <br className="lg:block hidden" /> Meet
//               the amazing organizations that help us bring <br className="lg:block hidden" /> TRADFIT RHYTHMS and
//               community sports to life.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Collaborations Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Partnership Network
//             </h2>
//             <p className="text-gray-600 lg:w-[500px] w-auto mx-auto">
//               Together, we're creating impactful experiences that celebrate
//               culture, promote fitness, and unite communities across Nigeria.
//             </p>
//           </div>

//           <div className="grid gap-8 max-w-4xl mx-auto">
//             {collaborations.map((collaboration) => (
//               <div
//                 key={collaboration.id}
//                 className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white"
//               >
//                 <div className="p-0">
//                   <div className="flex flex-col md:flex-row">
//                     {/* Logo Section - Left Side */}
//                     <div className="md:w-2/3 bg-gray-50 flex items-center justify-center p-3 lg:p-4">
//                       <img
//                         src={collaboration.logo || "/placeholder.svg"}
//                         alt={`${collaboration.name} logo`}
//                         className="max-w-full max-h-64 lg:max-h-96 object-contain w-auto h-auto"
//                       />
//                     </div>

//                     {/* Content Section - Right Side */}
//                     <div className="md:w-2/3 p-6 md:p-8">
//                       <h3 className="text-xl font-bold text-gray-900 mb-3">
//                         {collaboration.name}
//                       </h3>
//                       <div className="text-gray-600 mb-4 leading-tight text-[14px]">
//                         {collaboration.description}
//                       </div>

//                       {/* Social Links */}
//                       <div className="flex items-center gap-4">
//                         <div className="flex gap-2">
//                           {collaboration.social.instagram && (
//                             <button
//                               className="p-2 text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md transition-colors"
//                               title="Instagram"
//                             >
//                               <Link
//                                 href={collaboration.social.instagram}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 <Instagram className="w-5 h-5" />
//                                 <span className="sr-only">Instagram</span>
//                               </Link>
//                             </button>
//                           )}
//                           {collaboration.social.twitter && (
//                             <button
//                               className="p-2 text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md transition-colors"
//                               title="Twitter"
//                             >
//                               <Link
//                                 href={collaboration.social.twitter}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 <Twitter className="w-5 h-5" />
//                                 <span className="sr-only">Twitter</span>
//                               </Link>
//                             </button>
//                           )}
//                           {collaboration.social.facebook && (
//                             <button
//                               className="p-2 text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md transition-colors"
//                               title="Facebook"
//                             >
//                               <Link
//                                 href={collaboration.social.facebook}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 <Facebook className="w-5 h-5" />
//                                 <span className="sr-only">Facebook</span>
//                               </Link>
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="text-black py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-5">
//             Interested in Collaborating?
//           </h2>
//           <p className="text-gray-600 mb-8 lg:w-[490px] w-auto leading-tight mx-auto">
//             Join our growing network of partners and help us create meaningful
//             community experiences through sports, fitness, and cultural
//             celebration.
//           </p>
//           <Link href="/contact" className="inline-block mb-4">
//             <button className="px-8 py-3 bg-[#C90A1D] text-white rounded-md font-medium text-sm transition-colors">
//               Get in Touch
//             </button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }





import {
  ExternalLink,
  Instagram,
  Twitter,
  Facebook,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const collaborations = [
  {
    id: 1,
    name: "FitzNArtz",
    description: (
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style={{ padding: "10px 0" }}>
            FitzNArtz is a platform which is a multipurpose space that offers both online and offline fitness coaching services as well as creative services.
          </td>
        </tr>
        <tr>
          <td style={{ padding: "10px 0" }}>
            We pay attention to Arts, workouts, nutrition/meal plans as well as the psychological process in the clients' fitness and art journey.
          </td>
        </tr>
        <tr>
          <td style={{ padding: "10px 0" }}>
            <strong>Our services include:</strong><br />
            • Fitness Coaching<br />
            • Writing<br />
            • Mentorship<br />
            • Arts Event And Event Planning<br />
            • Editing<br />
            • Fashion<br />
            • Promotional Writings and Videos for Businesses
          </td>
        </tr>
      </table>
    ),
    logo: "/fitz.jpeg",
    website: "https://fitznartz.com",
    social: {
      instagram: "https://instagram.com/fitznartz",
      twitter: "https://twitter.com/fitznartz",
      facebook: "https://facebook.com/fitznartz",
    },
  },
  // {
  //   id: 2,
  //   name: "Cultural Heritage Foundation",
  //   description: (
  //     <table width="100%" cellpadding="0" cellspacing="0">
  //       <tr>
  //         <td style={{ padding: "10px 0" }}>
  //           Preserving and promoting African cultural traditions through dance, music, and community engagement initiatives.
  //         </td>
  //       </tr>
  //       <tr>
  //         <td style={{ padding: "10px 0" }}>
  //           <strong>Key Focus Areas:</strong><br />
  //           • Cultural preservation<br />
  //           • Traditional dance and music<br />
  //           • Community workshops<br />
  //           • Educational programs
  //         </td>
  //       </tr>
  //     </table>
  //   ),
  //   logo: "/placeholder-uxr45.png",
  //   website: "https://culturalheritage.org.ng",
  //   social: {
  //     instagram: "https://instagram.com/culturalheritage",
  //     twitter: "https://twitter.com/culturalheritage",
  //     facebook: "https://facebook.com/culturalheritage",
  //   },
  // },
  // {
  //   id: 3,
  //   name: "Rhythm & Beats Studio",
  //   description: (
  //     <table width="100%" cellpadding="0" cellspacing="0">
  //       <tr>
  //         <td style={{ padding: "10px 0" }}>
  //           Professional music production and live performance services, bringing authentic African rhythms to our dance aerobics sessions.
  //         </td>
  //       </tr>
  //       <tr>
  //         <td style={{ padding: "10px 0" }}>
  //           <strong>Services Provided:</strong><br />
  //           • Music production<br />
  //           • Live DJ services<br />
  //           • Sound engineering<br />
  //           • Custom beats for fitness
  //         </td>
  //       </tr>
  //     </table>
  //   ),
  //   logo: "/placeholder-z9zui.png",
  //   website: "https://rhythmbeats.ng",
  //   social: {
  //     instagram: "https://instagram.com/rhythmbeats",
  //     twitter: "https://twitter.com/rhythmbeats",
  //   },
  // },
  // {
  //   id: 4,
  //   name: "Wellness Plus Nutrition",
  //   description: (
  //     <table width="100%" cellpadding="0" cellspacing="0">
  //       <tr>
  //         <td style={{ padding: "10px 0" }}>
  //           Providing healthy meal plans and nutritional guidance to complement our fitness programs and support participant wellness goals.
  //         </td>
  //       </tr>
  //       <tr>
  //         <td style={{ padding: "10px 0" }}>
  //           <strong>Specialized Services:</strong><br />
  //           • Personalized meal plans<br />
  //           • Nutritional counseling<br />
  //           • Supplement guidance<br />
  //           • Post-workout nutrition
  //         </td>
  //       </tr>
  //     </table>
  //   ),
  //   logo: "/wellness-plus-nutrition-healthy-food-logo.jpg",
  //   website: "https://wellnessplus.com.ng",
  //   social: {
  //     instagram: "https://instagram.com/wellnessplus",
  //     facebook: "https://facebook.com/wellnessplus",
  //   },
  // },
  // {
  //   id: 5,
  //   name: "Lagos Sports Council",
  //   description: (
  //     <table width="100%" cellpadding="0" cellspacing="0">
  //       <tr>
  //         <td style={{ padding: "10px 0" }}>
  //           Government partnership supporting community sports development and promoting healthy lifestyle initiatives across Lagos State.
  //         </td>
  //       </tr>
  //       <tr>
  //         <td style={{ padding: "10px 0" }}>
  //           <strong>Initiatives Supported:</strong><br />
  //           • Community sports programs<br />
  //           • Health awareness campaigns<br />
  //           • Youth sports development<br />
  //           • Infrastructure support
  //         </td>
  //       </tr>
  //     </table>
  //   ),
  //   logo: "/placeholder-49z81.png",
  //   website: "https://lagossports.gov.ng",
  //   social: {
  //     twitter: "https://twitter.com/lagossports",
  //     facebook: "https://facebook.com/lagossports",
  //   },
  // },
  // {
  //   id: 6,
  //   name: "AfroFit Apparel",
  //   description: (
  //     <table width="100%" cellpadding="0" cellspacing="0">
  //       <tr>
  //         <td style={{ padding: "10px 0" }}>
  //           Stylish and comfortable workout clothing inspired by African designs, perfect for our TRADFIT RHYTHMS participants.
  //         </td>
  //       </tr>
  //       <tr>
  //         <td style={{ padding: "10px 0" }}>
  //           <strong>Product Range:</strong><br />
  //           • Activewear collection<br />
  //           • African print designs<br />
  //           • Performance fabrics<br />
  //           • Custom team apparel
  //         </td>
  //       </tr>
  //     </table>
  //   ),
  //   logo: "/placeholder-nd0fz.png",
  //   website: "https://afrofit.ng",
  //   social: {
  //     instagram: "https://instagram.com/afrofit",
  //     twitter: "https://twitter.com/afrofit",
  //     facebook: "https://facebook.com/afrofit",
  //   },
  // },
];

export default function CollaborationPage() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 1000); // Start animation 1 second after component mounts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[34px] lg:text-5xl font-bold text-[#C90A1D] mb-6 text-balance leading-tight">
              Our Valued Collaborations
            </h1>
            <p className="text-red-800 text-pretty leading-tight">
              Building stronger communities through strategic partnerships. <br className="lg:block hidden" /> Meet
              the amazing organizations that help us bring <br className="lg:block hidden" /> TRADFIT RHYTHMS and
              community sports to life.
            </p>
          </div>
        </div>
      </section>

      {/* Collaborations Grid */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Partnership Network
            </h2>
            <p className="text-gray-600 lg:w-[500px] w-auto mx-auto">
              Together, we're creating impactful experiences that celebrate
              culture, promote fitness, and unite communities across Nigeria.
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {collaborations.map((collaboration) => (
              <div
                key={collaboration.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white"
              >
                <div className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Logo Section - Left Side */}
                    <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-3 lg:p-4">
                      <img
                        src={collaboration.logo || "/placeholder.svg"}
                        alt={`${collaboration.name} logo`}
                        className="max-w-full max-h-64 lg:max-h-96 object-contain w-auto h-auto"
                      />
                    </div>

                    {/* Content Section - Right Side */}
                    <div className="md:w-2/3 p-6 md:p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {collaboration.name}
                      </h3>
                      <div className="text-gray-600 mb-4 leading-tight text-[14px]">
                        {collaboration.description}
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                          {collaboration.social.instagram && (
                            <button
                              className="p-2 text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md transition-colors"
                              title="Instagram"
                            >
                              <Link
                                href={collaboration.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Instagram className="w-5 h-5" />
                                <span className="sr-only">Instagram</span>
                              </Link>
                            </button>
                          )}
                          {collaboration.social.twitter && (
                            <button
                              className="p-2 text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md transition-colors"
                              title="Twitter"
                            >
                              <Link
                                href={collaboration.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Twitter className="w-5 h-5" />
                                <span className="sr-only">Twitter</span>
                              </Link>
                            </button>
                          )}
                          {collaboration.social.facebook && (
                            <button
                              className="p-2 text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md transition-colors"
                              title="Facebook"
                            >
                              <Link
                                href={collaboration.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Facebook className="w-5 h-5" />
                                <span className="sr-only">Facebook</span>
                              </Link>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Partners Teaser - Simple & Animated */}
          <div className="text-center pt-12">
            <p 
              className={`text-lg text-gray-500 font-medium transition-all duration-700 ease-out ${
                isAnimated 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              More exciting partners coming soon...
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-black pb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-5">
            Interested in Collaborating?
          </h2>
          <p className="text-gray-600 mb-8 lg:w-[490px] w-auto leading-tight mx-auto">
            Join our growing network of partners and help us create meaningful
            community experiences through sports, fitness, and cultural
            celebration.
          </p>
          <Link href="/contact" className="inline-block mb-4">
            <button className="px-8 py-3 bg-[#C90A1D] text-white rounded-md font-medium text-sm transition-colors">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}