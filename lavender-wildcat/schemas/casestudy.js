export default {
    name: 'casestudy',
    type: 'document',
    title: 'Case Study',
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
            type: 'text',
        },
        {
            name: 'content',
            type: 'array',
            of: [
                // add reference to article - reference picker will only show articles
                {
                    type: 'reference',
                    name: 'article',
                    to: [{ type: 'casestudy_content' }],
                },
            ],
        },
    ]
}