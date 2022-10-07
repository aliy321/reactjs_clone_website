export default {
    name: 'recognized_content',
    type: 'document',
    title: 'Recognized Content',
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
            name: 'image',
            type: 'image',
        },
        {
            name: 'link',
            type: 'url',
        }
    ]
}