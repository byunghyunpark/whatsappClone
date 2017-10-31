const mockMessages = [
    { 
        incoming: true,
        message: 'Hi Vladimir'
    },
    {
        incoming: true,
        message: 'Hi John'
    },
    // rest of messages in the same format.
]

export const getMockData = () => (
    new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000))
)