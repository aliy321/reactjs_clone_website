export default {
    name: 'resources_content',
    type: 'document',
    title: 'Resources Content',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'shortDescription',
            type: 'string',
        },
        {
            name: 'description',
            type: 'string',
        },
        {
            name: 'image',
            type: 'image',
        },
    ]
}