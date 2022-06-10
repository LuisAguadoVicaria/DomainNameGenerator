let data = {}
data.pronouns = ['the','our', 'your', 'tu', 'my']
data.adjs = ['great', 'big', 'tiny', 'small']
data.nouns = ['jogger','racoon', 'puedes', 'turtle', 'bear', 'wolf']
data.domains = ['com', 'es', 'net', 'ru', 'ar']
data.genDomains = []
data.genHacks = []

for(let pronoun of data.pronouns){
	for(let adj of data.adjs){
		for(let noun of data.nouns){
			for(let domain of data.domains){
				let word = pronoun+adj+noun
				data.genDomains.push(word+'.'+domain)
				word = word.split("")
				let shortw = word.splice(0, word.length-domain.length).join("")
				if(word.join("")===domain)data.genHacks.push(shortw+'.'+domain)
			}
		}
	}
}

console.log('Domains:', data.genDomains)
console.log('Domain Hacks:', data.genHacks)
