import { getNincyData } from './projects/nincy.service'
import { getPortfolioData } from './projects/portfolio.service'

export const getProjectsData = async() =>{
    const [ nincy, portfolio ] = await Promise.all([
        getPortfolioData(),
        getNincyData()
    ])
    return [ nincy, portfolio ]
}