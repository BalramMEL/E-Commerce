export const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR', // TODO: fix this type error
    }).format(amount)
}