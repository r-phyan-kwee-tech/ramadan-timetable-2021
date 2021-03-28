export const getCountry = (limit: number, page: number) => {
  return `{  countries(limit: ${limit}, page: ${page}) {    data {      id      objectId      name      createdDate      
updatedDate    }  }}`
}

export const getStates = (limit: number, page: number, countryId: string) => {
  return `{  states(limit:  ${limit} , page:  ${page}, countryId:  "${countryId}") {    data {      id      objectId      nameMmUni      nameMmZawgyi
    countryId      createdDate      updatedDate    }  }}`
}
