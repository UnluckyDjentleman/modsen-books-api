export default function Error({error}:{error:string}){
    return (
        <p style={{color: 'red'}}>{error}</p>
    )
}