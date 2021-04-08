import client from './sanity'

const FooterData = async () => await client.fetch('*[_type == "footer"][0]')

export default FooterData