let pronouns = ['the','our', 'your', 'tu', 'my'];
let adjs = ['great', 'big', 'tiny', 'small'];
let nouns = ['jogger','racoon', 'puedes', 'turtle', 'bear', 'wolf'];

let domains = ['com', 'es', 'net', 'ru', 'ar']

let genWords = []
for(let pronoun of pronouns){
	for(let adj of adjs){
		for(let noun of nouns){
			genWords.push(pronoun+adj+noun)
		}
	}
}

let domainHacks = []
const checkHack= (word, domain) => 
domain == word.slice(word.length-domain.length, word.length+domain.length)
? true : false

const resultingDomains = genWords.map( (word) => { let out=[]
  		domains.forEach( (domain) => {
			out.push(word+'.'+domain)
			if(checkHack(word, domain))domainHacks.push(word.slice(0, word.length-domain.length)+'.'+domain)
  		} )
  return out } ).flat()
  
console.log('Domains:',resultingDomains)
console.log('Domain Hacks:',domainHacks)
