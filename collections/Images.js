
const Images = {
    slug: 'images',
    admin: {
      group: 'Uploads',
    },
    access: {
      read: () => true,
    },
    upload: {
      staticURL: '/media',
      staticDir: 'media',
      adminThumbnail: 'thumbnail',
      mimeTypes: ['image/*'],
    },
    
  };
  
  
  export default Images