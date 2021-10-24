const links = {
  github: 'nyoxon',
  youtube: 'UCHXFe2lWtIgU-sq7yj5OuEg',
  facebook: 'artur.deoliveira.7543',
  instagram: '_nyoxon',
  twitter: 'nyoxon'
}

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfo()
