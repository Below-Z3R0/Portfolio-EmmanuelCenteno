import { getProjetData } from './projects/projet.service'

export const getProjectsData = async() =>{
    const [  centenoadvisory, centenoadvisorydb, centenoadvisoryfeatures, portfolio, nincy ] = await Promise.all([
        getProjetData("Centeno Advisory"),
        getProjetData("Centeno Advisory (DB)"),
        getProjetData("Centeno Advisory (Features)"),
        getProjetData("Portfolio"),
        getProjetData("NINCY")
        
    ])
    return [  centenoadvisory, centenoadvisorydb, centenoadvisoryfeatures, portfolio, nincy ]
}