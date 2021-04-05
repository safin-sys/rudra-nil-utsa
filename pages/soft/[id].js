export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/softs.json')
    const data = await res.json()

    const paths = data.map(soft => {
        return {
            params: {
                id: soft.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('')
} 
 
const SoftPage = () => {
    return (
        <div>
            <h1 style={{color: 'white'}}>What?</h1>
        </div>
    )
}

export default SoftPage
