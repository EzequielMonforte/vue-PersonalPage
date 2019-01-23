
function getGithubprofile(vari){

return fetch(vari.toString().replace('www.', 'api.'))
 .then(value=> value.json())


}

export default getGithubprofile
