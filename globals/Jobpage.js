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

const Body = {
    slug: 'Body', 
    imageAltText: 'Body Section',
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
        name: 'video',
        type: 'upload',
        relationTo: 'videos',
        label: 'Featured Videos',
      },


      {
        name: 'posts',
        type: 'array',
        fields: [
  
          // {
          //   name: 'title',
          //   type: 'text',
           
          // },
          // {
          //   name: 'description',
          //   type: 'textarea',
          // },
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
      }
    ]
};
  

const Jobpage = {
    access: {
      read: () => true,
    },
    slug:"Jobpage",
    admin: {
      group: 'Pages',
    },
    access: { 
        read: () => true,
    },

    fields:[
        
        {
          name: 'layout', 
          type: 'blocks', 
          minRows: 1,
          maxRows: 8,
          
          blocks: [ 
            Body,
          ]
        },
    
        
    ],
    
    
  
    
}

export default Jobpage;