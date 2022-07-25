import { RepoInput, VulnerabilityDisplay, Bar, Footer } from "../components"

export const Home = () => {
    return(
        <div>
            <Bar/>
            <RepoInput/>
            <VulnerabilityDisplay/>
            <Footer/>
        </div>
    )
}