export default {
    name: 'resources',
    type: 'document',
    title: 'Resources',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'heading',
            type: 'string',
        },
        {
            name: 'text',
            type: 'string',
        },
        {
            name: 'content',
            type: 'array',
            of: [
                // add reference to article - reference picker will only show articles
                {
                    type: 'reference',
                    name: 'resources_content',
                    to: [{ type: 'resources_content' }],
                },
            ],
        },
        {
            name: 'digitalMarketing',
            type: 'string',
        },
        {
            name: 'digitalMarketingContent',
            type: 'text'
        },
        {
            name: 'digitalMarketingImage',
            type: 'image'
        },
        {
            name: 'digitalMarketingLink',
            type: 'string'
        },
        {
            name: 'digitalMarketingLinkText',
            type: 'string'
        },
    ]
}