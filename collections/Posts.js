const Posts = {
    slug: "posts",
    access: {
        read: () => true,
    },
    admin: {
        group: 'Posts',
    },
    fields: [
        {
            name: 'image',
            type: 'upload',
            relationTo: 'images',
            label: 'Upload your art',
            
        }, 

        {
            name: 'price',
            type: 'number',
            label: 'Post Pricing',
        },

        {
            name: 'owner',
            type: 'relationship',
            relationTo: 'customers',
            hasMany: false,
            defaultValue: ({ user, locale }) => {
                
                return (`${user.id}`)
            },
            validate: (val, {user,args}) => {
                if(user.collection === 'users'){
                    return true
                }

                if(val === user.id){
                    return true
                }

                
                return "Your cand create order as provided User"
            },

            // admin:{
            //     readOnly: true,
            // }
        },
        
        
        

       
    ]


}

export default Posts;