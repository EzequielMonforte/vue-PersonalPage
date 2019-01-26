
function getGithubprofile(vari){

return fetch(vari.toString())
 .then(value=> value.json())
}

export default getGithubprofile
