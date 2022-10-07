export default {
    name: 'partners',
    type: 'document',
    title: 'Partners',
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
            name: 'content',
            type: 'array',
            of: [
                // add reference to article - reference picker will only show articles
                {
                    type: 'reference',
                    name: 'partners_content',
                    to: [{ type: 'partners_content' }],
                },
            ],
        },
    ]
}