import BoldButton from "../cms/components/BoldButton";
import CenterButton from "../cms/components/CenterButton";
import CharcoalButton from "../cms/components/CharcoalButton";
import DavysgrayButton from "../cms/components/DavysgrayButton";
import DimgrayButton from "../cms/components/DimgrayButton";
import EmboyButton from "../cms/components/EmboyButton";
import GreenButton from "../cms/components/GreenButton";
import HfiveButton from "../cms/components/HfiveButton";
import HfourButton from "../cms/components/HfourButton";
import HoneButton from "../cms/components/HoneButton";
import HsixButton from "../cms/components/HsixButton";
import HthreeButton from "../cms/components/HthreeButton";
import HtwoButton from "../cms/components/HtwoButton";
import LeftButton from "../cms/components/LeftButton";
import OnyxButton from "../cms/components/OnyxButton";
import RedButton from "../cms/components/RedButton";
import RightButton from "../cms/components/RightButton";
import SavoyblueButton from "../cms/components/SavoyblueButton";
import WhitesmokeButton from "../cms/components/WhitesmokeButton";


const Certifications={
  slug: 'Certifications', 
  imageAltText: 'Certifications',
  fields:[
    {
      name: 'Certificat',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'portfoliosphoto',
          label: 'Certificat Image',
        },
 
      ],
    }
  ]

}

const Ceomessage = {
  slug: 'Ceomessage', 
  imageAltText: 'CEO Message Section',
  fields: [ 
    {
      name: 'image',
      type: 'upload',
      relationTo: 'personphoto',
      label: 'CEO Image',
    },
    {
      name: 'title',
      type: 'text',
     
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'name',
      type: 'text',
    },

    
  ]
};

const Factsandfigure = {
  slug: 'Factsandfigure',
  imageAltText: 'Facts & Figure',
  fields:[
    {
      name: 'canda',
      type: 'text',
      label: 'Number Of Commercial And Resindential',
    },
    {
      name: 'lpg',
      type: 'text',
      label: 'Number Of LPG Plant',
    },
    {
      name: 'power',
      type: 'text',
      label: 'Number Of Power Plant',
    },
    {
      name: 'country',
      type: 'text',
      label: 'Number Of Country',
    },
    {
      name: 'points',
      type: 'array',
      label: 'More Points',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
        },

      ]
    }
  ]
}


const Jobsection = {
  slug: 'Jobsection', 
  imageAltText: 'Job Section',
  fields: [ 
    {
      name: 'image',
      type: 'upload',
      relationTo: 'portfoliosphoto',
      label: 'JOb Image',
    },
    {
      name: 'title',
      type: 'text',
     
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'offers',
      type: 'textarea',
    },
    {
      name: 'tem',
      type: 'textarea',
    },
    

    
  ]
};



const Whoweare = {
  slug: 'Whoweare', 
  imageAltText: 'Who we are Section',
  fields: [
    {
      name: 'title',
      type: 'text',
     
    },
    {
      name: 'description',
      type: 'textarea',
     
    },
    {
      name: 'who',
      type: 'textarea',
     
    },
    {
      name: 'mission',
      type: 'textarea',
     
    },
    {
      name: 'vision',
      type: 'textarea',
     
    },
    
    {
      name: 'points',
      type: 'array',
      fields: [

        {
          name: 'title',
          type: 'text',
         
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    }
  ]
};


const Experience = {
  slug: 'Experience', 
  imageAltText: 'Who we are Section',
  fields: [ 
    {
      name: 'title',
      type: 'text',
     
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'news',
      type: 'array',
      fields: [

        {
          name: 'title',
          type: 'text',
         
        },
        {
          name: 'link',
          type: 'text',
         
        },
      ],
    },
    {
      name: 'experience',
      type: 'array',
      fields: [

        {
          name: 'title',
          type: 'text',
         
        },
        {
          name: 'description',
          type: 'text',
         
        },
      ],
    }
  ]
};



const Services = {
  slug: 'Services', 
  imageAltText: 'Services Section',
  fields: [ 
    {
      name: 'title',
      type: 'text',
     
    },
    {
      name: 'description',
      type: 'textarea',
    },

    {
      name: 'links',
      type: 'array',
      fields: [

        {
          name: 'link',
          type: 'text',
         
        },
        {
          name: 'title',
          type: 'text',
         
        },
        
      ],
    }
  ]
};



const Ourway = {
  slug: 'Ourway', 
  imageAltText: 'Ourway multi Section',
  fields: [ 
    {
      name: 'posts',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'portfoliosphoto',
          label: 'Image',
        },

        {
          name: "content",
          type: "richText",
          label: "Post Content",
          admin:{
              elements:[
                  "h1",
                  "h2",
                  "h3",
                  "h4",
                  "h5",
                  "h6",
                  "link",
                  "ol",
                  "ul",
                  "relationship",
                  "upload",
              ],

              leaves:[
                  "bold",
                  "code",
                  "italic",
                  "strikethrough",
                  "underline",
                  LeftButton,
                  CenterButton,
                  RightButton,
                  HoneButton,
                  HtwoButton,
                  HthreeButton,
                  HfourButton,
                  HfiveButton,
                  HsixButton,
                  GreenButton,
                  RedButton,
                  DimgrayButton,
                  EmboyButton,
                  DavysgrayButton,
                  CharcoalButton,
                  OnyxButton,
                  WhitesmokeButton,
                  SavoyblueButton,
                  
              ]
          }
          
      },
      ],
    },

  ]
};





const Sectors = {
  slug: 'Sectors', 
  imageAltText: 'Sectors Section',
  fields: [ 
    {
      name: 'Sectortitle',
      type: 'text',
    },
    {
      name: 'allservices',
      type: 'array',
      label: 'All Services',
      fields: [
        {
          name: 'servicename',
          type: 'text',
          label: 'Service Name',
          
        },
        {
          name: 'servicedescription',
          type: 'textarea',
          label: 'Service Description',

        },
        {
          name: 'serviceicon',
          type: 'text',
          label: 'Font awesome Icon',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Service Link',
        }
      ]
    }
    
  ]
};

const Clients={
  slug: 'Clients',
  imageAltText: 'Client Section',
  fields: [
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'allclients',
      type: 'array',
      label: 'All Clients',
      fields: [
        {
          name: 'clientimage',
          type: 'upload',
          relationTo: 'clientsphoto',
          label: 'Client Image', 
          admin: {
            description: 'Plese try to upload image of 300x70',
          },
        },
      ]
    }]


}



const Portfolio={
  slug: 'Portfolio',
  imageAltText: 'Portfolio Section',
  fields: [
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'allportfolios',
      type: 'array',
      label: 'All Portfolios',
      fields: [
        {
          name: 'portfolioimage',
          type: 'upload',
          relationTo: 'portfoliosphoto',
          label: 'Portfolio Image',
          admin: {
            description: 'Plese try to upload image of 800x600',
          },
        },
        {
          name: 'portfoliotitle',
          type: 'text',
          label: 'Portfolio Title',
        },]
      }]
}

const Contact={
  slug: 'Contact',
  imageAltText: 'Contact Section',
  fields: [
    {
          name: 'htite',
          type: 'text',
          label: 'Heading title',

    },
    {
      name: 'hdescription',
      type: 'textarea',
      label: 'Heading Description',

    },
    {
      name: 'contacts',
      type: 'array',
      label: 'All Contacts',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
        },
        {
          name: 'designation',
          type: 'text',
          label: 'Designation',
        },
        {
          name: 'about',
          type: 'textarea',
          label: 'About person',
        },
        {
          name: 'depertment',
          type: 'text',
          label: 'Depertment',
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone',
        },
        {
          name: 'portfolioimage',
          type: 'upload',
          relationTo: 'personphoto',
          label: 'Contact Person Image',
          
        }
        
      ]
    },


    
    
  ]

}


const Testimonial={
  slug: 'Testimonial',
  imageAltText: 'Testimonial Section',
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: 'Testimonial Description',

    },
    {
      name: 'alltestimonials',
      type: 'array',
      label: 'All Testimonials',
      fields: [
        {
          name: 'personimage',
          type: 'upload',
          relationTo: 'personphoto',
          label: 'Person Image',
          admin: {
            description: 'Plese try to upload image of 400x400',
          },
        },
        {
          name: 'name',
          type: 'text',
          label: 'Person Name',
        },
        {
          name: 'profession',
          type: 'text',
          label: 'Person Profession',
        },
        {
          name: 'quotes',
          type: 'textarea',
          label: 'Person Quotes',
        },
      ]
    }   

  ]
}

const Calltoaction ={
  slug: 'Calltoaction',
  imageAltText: 'Call to Action Section',
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: 'Call to Action Description',
    },
    {
      name: 'url',
      type: 'text',
      label: 'Call to Action Button URL',
    },
  
  ]
  
}



const Footer ={
  slug: 'Footer',
  imageAltText: 'Footer Section',
  fields: [
    {
      name: 'links',
      type: 'array',
      label: 'Links',
      maxRows: 4,
      fields: [
        {
          name:'name',
          label: 'Link Header',
          type:'text',
        },
        {
          name:'alllink',
          type: 'array',
          maxRows: 5,
          fields:[
            {
              name:'link',
              label: 'Link Header',
              type:'text'
            },
            {
              name:'name',
              label: 'Name',
              type:'text'
            },


          ]


        }
      ]
    },
    
  
  ]
  
}



const Teams={
  slug: 'Teams',
  imageAltText: 'Team Section',
  fields: [
    {
      name: 'allteammembers',
      type: 'array',
      label: 'All Team Members',
      fields: [
        {
          name: 'personimage',
          type: 'upload',
          relationTo: 'personphoto',
          label: 'Person Image',
          admin: {
            description: 'Plese try to upload image of 400x400',
          },
        },
        {
          name: 'name',
          type: 'text',
          label: 'Person Name',
        },
        {
          name: 'profession',
          type: 'text',
          label: 'Person Profession',
        },
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook URL',
        },
        {
          name: 'twitter',
          type: 'text',
          label: 'Twitter URL',  
        },
        {
          name: 'linkedin',
          type: 'text',
          label: 'Linkedin URL',
        },
        {
          name: 'google',
          type: 'text',
          label: 'Google URL',
        }
      ]
    }   

  ]
}





const Site = {
    access: {
      read: () => true,
    },
    slug:"Site",
    admin: {
      group: 'Pages',
    },
    access: { 
        read: () => true,
    },

    fields:[
        {
            name: 'name',
            label: 'Site Name',
            type: 'text',
            admin: {
              position: 'sidebar',
            },
            
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'logo',
          required: true,
          admin: {
            description: 'upload a logo',
          },
        },
        {
          name: 'favicon',
          type: 'upload',
          relationTo: 'favicon',
          required: true,
          admin: {
            description: 'favicon upload',
            position: 'sidebar',
          },
        },
        {
          name: 'logowedth',
          label: 'Logo Wedth',
          type: 'number',
          admin: {
            step: 2,
          }
          
        },
        {
          name: 'slogan',
          label: 'Site slogan',
          type: 'text',
          
        },
        
        {
            name: 'images', 
            type: 'array', 
            label: 'Slider Images',
            minRows: 2,
            maxRows: 10,
            labels: {
              singular: 'slider image',
              plural: 'Slides',
            },
            fields: [ 
              {
                name: 'image',
                type: 'upload',
                relationTo: 'slider',
                required: true,
                admin: {
                  description: 'Plese try to upload image of 1920x900',
                },
              }
            ]
        },
        {
          name: 'layout', 
          type: 'blocks', 
          minRows: 1,
          maxRows: 10,
          
          blocks: [ 
            Whoweare,
            Sectors,
            Ourway,
            Services,
            Ceomessage,
            Experience,
            Jobsection,
            Certifications,
            Contact,
            Footer,
            Factsandfigure,
          ]
        },
        {
          name: 'postsectiontitle',
          label: 'Post Section Title',
          type: 'text',
          
        },
        {
          name: 'postsectdescription',
          label: 'Post Secton Description',
          type: 'text',
          
        },
        {
          name: "photobandw",
          label: "Photo Black and White",
          type: "select",
          hasMany: false,
          
          options: [
            {
              label: 'Black && white',
              value: 'blackandwhite',
            },
            {
              label: 'Noramal',
              value: 'boramal',
            },
          ],
          admin:{
            position:"sidebar"
          }

        },
        {
          name: "font",
          label: "Web Site Font",
          type: "select",
          hasMany: false,
          
          options: [
            {
              label: 'Titillium',
              value: '__className_76edea',
            },
            {
              label: 'Raleway',
              value: '__className_f8c7b3',
            },
            {
              label: 'Helvetica',
              value: '__className_e5ecb5',
            },
            {
              label: 'Roboto_serif',
              value: '__className_53f782',
            },
            {
              label: 'Roboto_slab',
              value: '__className_b5cbe6',
            },
          ],
          admin:{
            position:"sidebar"
          }

        },
        {
          name: 'primerycolor',
          label: 'Primery Color',
          type: 'text',
          defaultValue: ({ user, locale }) => ('#1A1A1A'),
          admin: {
            position: 'sidebar',
          },
          
        },
        {
          name: 'secoundarycolor',
          label: 'Secoundary Color',
          type: 'text',
          defaultValue: ({ user, locale }) => ('#81CC6C'),
          admin: {
            position: 'sidebar',
          },
        },


        {
          name: 'copyright',
          label: 'Site Copyright',
          type: 'text',
          admin: {
            position: 'sidebar',
          },
          
        },
        {
          name: 'address',
          label: 'Company Address',
          type: 'textarea',
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'contact',
          label: 'Contact Number',
          type: 'text',
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'email',
          label: 'Contact Email',
          type: 'text',
          admin: {
            position: 'sidebar',
          },
        },
        

        
        
    ],
    
    
  
    
}

export default Site;