import { getProjetData } from './projects/projet.service'

export const getProjectsData = async() =>{
    const [  centenoadvisory, portfolio, nincy ] = await Promise.all([
        getProjetData("Centeno Advisory"),
        getProjetData("Portfolio"),
        getProjetData("NINCY")
        
    ])
    return [  centenoadvisory, portfolio,  nincy ]
}