export default {
    name: 'services',
    type: 'document',
    title: 'Services',
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
                    name: 'article',
                    to: [{ type: 'services_content' }],
                },
            ],
        },
    ]
}