import Head from "next/head"

const Meta = (props) => {
  return (
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={props.description} />
    <meta name="keywords" content={props.keywords} />
    <link rel="icon" href="/favicon.ico" /> 
    <meta charSet="utf-8"/>
    <title>{props.title}</title>
  </Head>
  )
}

Meta.defaultProps = {
    title: 'Next',
    keywords: 'programming, web development',
    description: 'Next project'
}

export default Meta