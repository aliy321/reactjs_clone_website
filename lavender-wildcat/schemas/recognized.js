export default {
    name: 'recognized',
    type: 'document',
    title: 'Recognized',
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
                    name: 'article',
                    to: [{ type: 'recognized_content' }],
                },
            ],
        },
    ]
}