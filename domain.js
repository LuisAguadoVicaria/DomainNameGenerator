var pronoun = ['the','our', 'pu', 'on', 'by'];
var adj = ['great', 'big', 'ed', 'amfi', 'biggest', 'tiny'];
var noun = ['jogger','racoon', 'es', 'frorg', 'dog', 'cat'];

var domains = ['.com', '.net', '.us', '.io', '.org', '.es', '.ar', '.ru'];

var hacklist=[]

const mapEachpro = word => { let out=[]
for(let items of adj){
	for(let nouns of noun){
		out.push(word+items+nouns)
	}
} return out }

const genList = pronoun.map(mapEachpro).flat()

const checkdmhk = (word, domain)=> word.slice(word.length - domain.length + 1, word.length).search(domain.slice(1, domain.length)) != -1 ? word.slice(0 , word.length - domain.length + 1)+domain : false

const mapDomains = (domain) => { let out=[]
	genList.forEach(word => {
	out.push(word+domain)
	let hack= checkdmhk(word,domain)
	if(hack!=false)hacklist.push(hack)})
return out }

const finalList = domains.map(mapDomains)[0]

console.log('Generated Domains: ', finalList)
console.log('Found Domain Hacks:', hacklist)