import { useEffect } from 'react'
const crypto = () => {
    useEffect(() => {
        const getPrice = async () => {
            const priceFromAPI = await fetchPrice()
        }
        getPrice()
    }, [])

    const fetchPrice = async () => {
        // const res = await fetch(`http://localhost:5000/tasks/${id}`)
        // const data = await res.json()
        // return data
    }
    return (
        <>   
        </>
    )
}

export default crypto
