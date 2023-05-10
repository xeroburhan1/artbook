import { buildConfig } from 'payload/config';
import Users from './collections/Users';
import s3Upload from 'payload-s3-upload';
import AdminLogo from './collections/UI/AdminLogo'
import Icon from './collections/UI/Icon';
import BeforenavLink from './collections/UI/Nav/BeforenavLink';
import Images from './collections/Images';
import Posts from './collections/Posts';
import Customers from './collections/Customers';

export default buildConfig({
  
  serverURL: process.env.SITE_URI,

  admin: {
    user: Users.slug,
    components:{
      
      beforeNavLinks: [BeforenavLink,],
      graphics: {
        Logo: AdminLogo,
        Icon:Icon,
      },
    }
  },
  globals:[
   
  ],
  collections: [
    Users,
    Images,
    Posts,
    Customers,
    
  ],
  
  plugins:[
    s3Upload({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,

        
      },
    }),

  ]
  
  

});
