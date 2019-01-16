
function getGithubprofile(vari){

return fetch(vari.toString().replace('www.', 'https://api.'))
 .then(value=> value.json())


}

export default getGithubprofile
