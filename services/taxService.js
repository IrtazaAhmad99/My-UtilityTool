export  async function calculateTax(salary){
const response = await fetch("/api/tax",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({salary})
})
const data = await response.json()

if(!response.ok){
    throw new Error(data.error || "Something went wrong")
}
return data;

}