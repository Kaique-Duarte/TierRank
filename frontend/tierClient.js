export const postData = async (endpoint, data) => {
    const response = await fetch(`http://localhost:3001${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return response.json()
}

export const postFile = async (endpoint, formData) => {
    try{

        const response = await fetch(`http://localhost:3001${endpoint}`, {
            method: 'POST',
            body: formData
        })
        return response.json()
    }catch(error){
        console.error('Error uploading file:', error);
    }
    
        
    
}
