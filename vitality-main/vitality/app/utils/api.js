// Create
export async function addSymptoms(symptom){
    try{
        let response = await fetch("http://localhost:8000/registrar", 
        {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(symptom)
        })
        return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

// Read
export async function getSymptoms(){
    try{
        let response = await fetch("http://localhost:8000/registrar")
        let data = await response.json()
        return data
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

// Update
export async function updateSymptoms(symptom){
    try{
        let response = await fetch("http://localhost:8000/editar/" + symptom, 
        {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(symptom)
        })
        return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

// Delete
export async function deleteSymptoms(symptom){
    try{
        let response = await fetch("http://localhost:8000/editar/" + symptom, 
        {
            method: 'DELETE'
        })
        return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}
