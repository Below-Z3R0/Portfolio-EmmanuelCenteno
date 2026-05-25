import { getProjetData } from './projects/projet.service'

export const getProjectsData = async() =>{
    const [ nincy, portfolio ] = await Promise.all([
        getProjetData("NINCY"),
        getProjetData("Portfolio"),
    ])
    return [ nincy, portfolio ]
}