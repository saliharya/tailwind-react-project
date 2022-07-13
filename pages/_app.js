import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
