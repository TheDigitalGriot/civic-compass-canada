export const snapshot={id:'springdale-2026-10-11-v2',date:'2026-10-11',election:'2026-10-26',status:'Initial research • coverage incomplete'};
export const topics=[
{id:'housing',name:'Housing & development',short:'Housing',icon:'house',description:'Homes, growth, and the neighbourhood we live in.',prompt:'How can growth support housing stability, aging in place, and access to everyday services?',questions:['What housing or development change is proposed?','What infrastructure and affordability mechanism supports it?','What is the cost, authority, and delivery timeline?']},
{id:'taxes',name:'Taxes & city spending',short:'Taxes & spending',icon:'coins',description:'The cost of living here, and what we get in return.',prompt:'What would make household costs more predictable while protecting useful services?',questions:['What changes to taxes or services are proposed?','What pays for the commitment?','Which part of the tax bill is affected?']},
{id:'safety',name:'Public safety',short:'Public safety',icon:'shield',description:'Safer streets, public spaces, and communities.',prompt:'What evidence would show a safety proposal is working?',questions:['What intervention is proposed and by which body?','How will effectiveness be measured?','What are the cost and community impacts?']},
{id:'transit',name:'Transit & congestion',short:'Transit',icon:'bus',description:'Less time getting there. More ways to get around.',prompt:'Which trips would benefit most from reliable transit and safer streets?',questions:['Which routes, roads, or service levels would change?','What is funded versus still proposed?','Who controls delivery and when?']},
{id:'health',name:'Healthcare & amenities',short:'Care & amenities',icon:'heart',description:'Care, recreation, learning, and places to belong.',prompt:'What access to care and community spaces matters as needs change over time?',questions:['Which facility or service is proposed?','Who funds and operates it?','How is accessible, ongoing service ensured?']},
{id:'transparency',name:'Transparency',short:'Transparency',icon:'eye',description:'Clear answers. Decisions we can examine.',prompt:'How should residents be able to check decisions, spending, and progress?',questions:['What disclosure or consultation practice is proposed?','How would residents verify it?','What records show current practice?']}
];
const roster='https://www.brampton.ca/EN/City-Hall/Election/Candidates/Pages/candidateListing.aspx';
export const contests=[
{id:'city',name:'City Councillor',district:'Wards 9 & 10',locator:'Councillor, City - Wards 9, 10',names:['Janice Gordon-Daniels','Azad Goyat','Jagdish Singh Grewal','Kamran Hassan','Sandeep Kumar','Baljinder Singh Nehal','Cheryl Rodricks','Harkirat Singh']},
{id:'regional',name:'Regional Councillor',district:'Wards 9 & 10',locator:'Councillor, Regional - Wards 9, 10',names:['Michael Dancy','Prabhjot Singh Dhaliwal','Gurpreet K. Dhillon','Gurpreet Singh Dhillon','Satpaul Singh Johal','Nirmala Devi Madhu','Gregory Miller','Sukhman Sangha','Harsimran Singh']},
{id:'mayor',name:'Mayor',district:'City-wide',locator:'Mayor',names:['Jagruti Bhatt','Patrick Brown','Gurdeep Singh Dhothar','Vidya Sagar Gautam','Prabh Gill','Wesley Jackson','Najma Khurram','Nathaniel Peart','Prabhjot Kaur Sidhu','Sandeep Somal','Paul Tarriwal','Gaurav Walia']},
{id:'public',name:'English Public Trustee',district:'Wards 9 & 10 · PDSB',locator:'English Public Trustee, Peel District School Board - Wards 9, 10',names:['Daljit Singh','Denise Dani','Parneet Dhothar','Dharmavir Gohil','Therese Guidolin','Muhammad Misbahul Haque','Harsimran Singh','Pankaj Joshi','Mily Michael Macwan','Khushpal Singh Pawar','Gurinder Sehgal','Gagandeep Sharma']},
{id:'catholic',name:'English Separate Trustee',district:'Wards 7, 8, 9 & 10 · DPCDSB',locator:'English Separate Trustee, Dufferin-Peel Catholic District School Board - Wards 7, 8, 9, 10',names:['Andrea Baranowski','Karen Dancy','Shawn Xaviour']},
{id:'french-public',name:'French Public Trustee',district:'Conseil scolaire Viamonde',locator:'French Public Trustee, Conseil scolaire Viamonde',names:['Mahmad Neezam Chutoo','Pierre Gregory']},
{id:'french-catholic',name:'French Separate Trustee',district:'Conseil scolaire catholique MonAvenir',locator:'French Separate Trustee, Conseil scolaire catholique MonAvenir',acclaimed:true,names:['Genevieve Grenier']}
];
export const candidates=contests.flatMap(c=>c.names.map((name,i)=>({id:`${c.id}-${i}`,name,contest:c.id,roster:'roster',rosterLocator:c.locator,history:name==='Patrick Brown'?'Re-elected mayor in 2022. His official biography documents leadership of the Ontario PC Party beginning in 2015. This is historical affiliation, not a municipal ballot label.':'Political history and incumbency not yet verified in this snapshot.',historySource:name==='Patrick Brown'?'brown-bio':null})));
export const sources=[
{id:'roster',title:'Certified candidates · Brampton 2026',publisher:'City of Brampton',type:'Official electoral record',url:roster,date:'2026-08-25',locator:'Office headings and candidate entries',summary:'Official certified roster. Included contests are exploratory; household district and school-board eligibility still need confirmation.',limit:'This source establishes candidacy, not policy positions or current party membership.'},
{id:'election',title:'2026 municipal election',publisher:'City of Brampton',type:'Official election information',url:'https://www.brampton.ca/EN/City-Hall/Election',date:null,locator:'Page Content · election date and offices',summary:'Voting Day is October 26, 2026. Offices include mayor, city and regional councillors, and school-board trustee.',limit:'Use the official voter lookup to confirm your district, eligibility, and voting location.'},
{id:'janice',title:'Priorities · Janice Gordon-Daniels',publisher:'Janice Gordon-Daniels campaign',type:'Campaign statement',url:'https://www.janicegordon.ca/priorities/',date:null,locator:'Six commitments · Priorities 01–06',summary:'Published priorities address accountability, spending, road safety, support for vulnerable residents, wellness, and listening.',limit:'Evidence of stated priorities. Costs, measurable targets, and delivery dates are not specified on this page. Not an implementation record.'},
{id:'harkirat',title:'Projects · Harkirat Singh',publisher:'Harkirat Singh website',type:'Candidate self-reported record',url:'https://harkiratsingh.ca/economic-development-projects/',date:null,locator:'Other Projects · Traffic & Safety, Public Transit, Healthcare',summary:'The website describes traffic calming, transit funding, and hospital advocacy as achievements.',limit:'Self-reported attribution. Original funding documents, decisions, recorded votes, and completed outcomes have not been corroborated here.'},
{id:'brown',title:'Campaign launch · Patrick Brown',publisher:'Patrick Brown campaign',type:'Campaign statement',url:'https://votepatrickbrown.com/media/campaign-launch/',date:null,locator:'Keep Building Brampton’s Future · project sections',summary:'The campaign emphasizes continuing infrastructure projects across transit, healthcare, recreation, and safety.',limit:'Campaign account. Project costs and progress require separate checks against funding and delivery records.'},
{id:'brown-bio',title:'Mayor’s biography',publisher:'City of Brampton',type:'Official biography',url:'https://www.brampton.ca/en/city-hall/mayor-office/pages/biography.aspx',date:null,locator:'Biography · 2022 re-election and May 2015 party leadership',summary:'Documents mayoral re-election in 2022 and previous Ontario PC Party leadership.',limit:'Historical roles do not establish current membership or municipal ballot affiliation.'},
{id:'city-budget',title:'Adopted 2026 City budget',publisher:'City of Brampton',type:'Official budget announcement',url:'https://www.brampton.ca/EN/City-Hall/News/Pages/News-Release.aspx/1631',date:'2026-02-06',locator:'Opening paragraphs · Understanding your property tax bill',summary:'The City reports a 0% increase to its portion, plus a 1% hospital levy. The City portion is only part of the total property tax bill.',limit:'City-level budget context, not an individual recorded vote, household tax estimate, or proof of candidate performance.'},
{id:'peel-budget',title:'Approved 2026 Peel budget',publisher:'Peel Region',type:'Official budget announcement',url:'https://peelregion.ca/press-releases/peel-regions-2026-budget-approved-council',date:'2025-12-11',locator:'Property tax impact · service investment list',summary:'Peel reports a 3.36% average property tax impact for regional services, police, and other agencies, with investments in housing, paramedics, and seniors services.',limit:'Regional budget context. Do not directly add these percentages to the City figures or infer an individual councillor’s vote.'}
];
export const records=[
{id:'j-tax',candidate:'city-0',topic:'taxes',source:'janice',kind:'Stated priority',text:'Calls for responsible spending and measurable results.',gap:'No costed tax proposal or delivery target on the cited page.'},
{id:'j-safe',candidate:'city-0',topic:'safety',source:'janice',kind:'Stated priority',text:'Prioritizes road and school-zone safety and parking concerns.',gap:'Specific interventions, costs, and effectiveness targets need clarification.'},
{id:'j-health',candidate:'city-0',topic:'health',source:'janice',kind:'Stated priority',text:'Supports responsive services for seniors and vulnerable residents, plus wellness programs.',gap:'Service scope, funding, and operating responsibilities are unspecified.'},
{id:'j-open',candidate:'city-0',topic:'transparency',source:'janice',kind:'Stated priority',text:'Emphasizes clear communication, accountability, and resident engagement.',gap:'No concrete disclosure mechanism or reporting schedule on the cited page.'},
{id:'h-safe',candidate:'city-7',topic:'safety',source:'harkirat',kind:'Self-reported record',text:'Reports traffic-calming work in Wards 9 and 10.',gap:'Individual decisions and measured safety outcomes still require corroboration.'},
{id:'h-transit',candidate:'city-7',topic:'transit',source:'harkirat',kind:'Self-reported record',text:'Highlights federal funding for Queen Street bus rapid transit.',gap:'Funding attribution, delivery status, and individual votes remain unchecked.'},
{id:'h-health',candidate:'city-7',topic:'health',source:'harkirat',kind:'Self-reported record',text:'Describes advocacy for a second hospital and emergency department.',gap:'Separate advocacy from provincial funding, construction, and service outcomes.'},
{id:'b-transit',candidate:'mayor-1',topic:'transit',source:'brown',kind:'Campaign commitment',text:'Emphasizes advancing the LRT extension and downtown infrastructure.',gap:'Delivery dates, funding conditions, and completed outcomes need independent checks.'},
{id:'b-health',candidate:'mayor-1',topic:'health',source:'brown',kind:'Campaign commitment',text:'Emphasizes hospital and recreation projects in the next term.',gap:'Verify project status and ongoing service costs against original records.'}
];
export const contextual=[{topic:'taxes',source:'city-budget'},{topic:'health',source:'city-budget'},{topic:'housing',source:'peel-budget'},{topic:'taxes',source:'peel-budget'},{topic:'safety',source:'peel-budget'},{topic:'health',source:'peel-budget'}];

// Additive research revision. Candidate IDs and session snapshot remain stable.
export const raceMeta={
mayor:{color:'#d3ac64',code:'M',group:'city',role:'City-wide leadership',scope:'Mayor · whole city'},
city:{color:'#62c8b3',code:'C',group:'city',role:'Local representation',scope:'City council · Wards 9 & 10'},
regional:{color:'#77aaf0',code:'R',group:'region',role:'Regional representation',scope:'Peel & city council · Wards 9 & 10'},
public:{color:'#c5a5ed',code:'EP',group:'boards',role:'English public education',scope:'PDSB · Wards 9 & 10'},
catholic:{color:'#eb9e80',code:'ES',group:'boards',role:'English separate education',scope:'DPCDSB · Wards 7–10'},
'french-public':{color:'#a7c56c',code:'FP',group:'boards',role:'French public education',scope:'Conseil scolaire Viamonde'},
'french-catholic':{color:'#e6a6ce',code:'FS',group:'boards',role:'French separate education',scope:'Conseil scolaire catholique MonAvenir'}
};
const moreSources=[
['sangha','Meet Sukhman & priorities','Sukhman Sangha campaign','https://sukhmansangha.com/','Meet Sukhman; priorities 01–08','Describes previous advisory work and priorities for safety, affordability, rental licensing, recreation and transparency.'],
['madhu','Biography & priorities','Nirmala Devi Madhu campaign','https://votenirmala.com/','Meet Madhu; Solutions That Matter','Lists infrastructure, housing, safety, spending and monthly town halls as priorities.'],
['gill','Brampton First plan','Prabh Gill campaign','https://prabhsgill.ca/','Plan 01–06; first 100 days','Outlines spending control, transport, safety and a public progress report in the first 100 days.'],
['tarriwal','Better Brampton priorities','Paul Tarriwal campaign','https://betterbrampton.ca/','The Plan; priority details','Lists safety, hospital capacity, taxes, transit and downtown priorities. Some detail sections remain in development.'],
['jackson','Mission statement','Wesley Jackson campaign','https://www.wesleyjackson.ca/mission','Mission Statement','A published campaign platform; full topic-by-topic extraction remains pending.'],
['dhillon','Record & priorities','Gurpreet Singh Dhillon campaign','https://gurpreetsinghdhillon.com/','Biography; Results Delivered; priorities','Reports council service during 2014–2022 and claims transit, housing, affordability and safety achievements.'],
['council','2022–2026 council membership','City of Brampton','https://www.brampton.ca/en/City-Hall/Council-Office/','Member entries: Brown, Singh','Lists Patrick Brown as mayor and Harkirat Singh as City Councillor for Wards 9 & 10 and Deputy Mayor.'],
['ward-profile','Ward 9 candidate research','The Local','https://thelocal.to/brampton-ward-9/','City councillor: Gordon-Daniels and Singh','Reports Gordon-Daniels ran in 2022; Singh served as a trustee before joining city council in 2018.']
];
sources.push(...moreSources.map(([id,title,publisher,url,locator,summary])=>({id,title,publisher,url,locator,summary,date:null,type:id==='council'?'Official membership record':id==='ward-profile'?'Independent reporting':'Campaign statement',limit:id==='council'?'Membership does not establish individual votes or policy outcomes.':id==='ward-profile'?'Secondary account; historical entries are attributed.':'Published candidate account. Costs, votes, attribution and measured delivery require independent evidence.'})));
const add=(id,candidate,topic,source,text,gap='Funding, legal authority, measurable targets and delivery remain unverified.',kind='Campaign commitment')=>records.push({id,candidate,topic,source,text,gap,kind});
add('s-safe','regional-7','safety','sangha','Proposes enforcement, prevention and accountability against crime and extortion.');
add('s-tax','regional-7','taxes','sangha','Advocates affordable taxes and fees with responsible spending.');
add('s-home','regional-7','housing','sangha','Proposes rental-licensing reform and responsible growth protecting green space.');
add('s-care','regional-7','health','sangha','Supports affordable family recreation.');
add('s-open','regional-7','transparency','sangha','Calls for accessible, accountable leadership.');
add('m-home','regional-5','housing','madhu','Proposes affordable housing through growth supported by infrastructure.');
add('m-move','regional-5','transit','madhu','Proposes better traffic flow and less construction disruption.');
add('m-tax','regional-5','taxes','madhu','Calls for transparent spending and taxpayer value.');
add('m-safe','regional-5','safety','madhu','Supports safer streets and stronger neighbourhoods.');
add('m-open','regional-5','transparency','madhu','Commits to monthly town halls and easier access to City Hall.');
add('g-tax','mayor-4','taxes','gill','Proposes spending controls and growth in the commercial tax base.');
add('g-transit','mayor-4','transit','gill','Supports Highway 410 advocacy, transit and transport planning.');
add('g-safe','mayor-4','safety','gill','Proposes practical neighbourhood safety measures.');
add('g-home','mayor-4','housing','gill','Calls for infrastructure and services supporting growing communities.');
add('g-open','mayor-4','transparency','gill','Proposes named responsibility for resident issues and public progress reporting by day 100.','This is a future reporting commitment; no delivered outcome is established.');
add('p-safe','mayor-10','safety','tarriwal','Names business-owner safety as a priority.','Detailed commitments are still being developed on the cited page.');
add('p-health','mayor-10','health','tarriwal','Prioritizes hospital capacity.','City authority, funding and first-100-days details require confirmation.');
add('p-tax','mayor-10','taxes','tarriwal','Prioritizes clearer communication of the total tax bill.');
add('p-transit','mayor-10','transit','tarriwal','Names dependable transit as a priority.','Specific service levels, costs and dates require confirmation.');
add('d-transit','regional-3','transit','dhillon','Claims involvement in free seniors transit and airport bus service.','Individual motions, attribution and measured outcomes have not been independently checked.','Self-reported record');
add('d-home','regional-3','housing','dhillon','Claims council approval of affordable housing units.','Approval, construction, occupancy and attribution remain to be checked.','Self-reported record');
add('d-safe','regional-3','safety','dhillon','Claims advocacy for a police satellite station and officer hiring.','Original votes, commissioning and effects remain unchecked.','Self-reported record');
export const historyEvents=[
{candidate:'mayor-1',year:2015,label:'Ontario PC leadership',source:'brown-bio',type:'Official biography'},
{candidate:'mayor-1',year:2018,label:'Elected mayor',source:'brown-bio',type:'Official biography'},
{candidate:'mayor-1',year:2022,label:'Re-elected mayor',source:'brown-bio',type:'Official biography'},
{candidate:'city-7',year:2014,label:'School-board trustee',source:'ward-profile',type:'Independent reporting'},
{candidate:'city-7',year:2018,label:'Joined city council',source:'ward-profile',type:'Independent reporting'},
{candidate:'city-7',year:2022,label:'2022–2026 city council',source:'council',type:'Official membership record'},
{candidate:'city-0',year:2022,label:'Previous candidacy',source:'ward-profile',type:'Independent reporting'},
{candidate:'regional-3',year:2014,label:'Council service began',source:'dhillon',type:'Candidate self-report'},
{candidate:'regional-3',year:2022,label:'Council service ended',source:'dhillon',type:'Candidate self-report'}
];
export const affiliations=[
{candidate:'mayor-1',label:'Ontario PC Party',detail:'Historical party leadership · 2015',source:'brown-bio',category:'Historical party role'},
{candidate:'regional-7',label:'Ontario government',detail:'Previous advisor to Prabmeet Sarkaria · date unspecified',source:'sangha',category:'Professional connection'}
];
const photoSources={'city-0':'https://www.janicegordon.ca/about/','city-7':'https://harkiratsingh.ca/','mayor-1':'https://votepatrickbrown.com/','regional-3':'https://gurpreetsinghdhillon.com/','regional-7':'https://sukhmansangha.com/','mayor-5':'https://www.wesleyjackson.ca/','mayor-10':'https://betterbrampton.ca/'};
for(const c of candidates){if(photoSources[c.id])c.portrait={path:`assets/${c.id}.webp`,url:photoSources[c.id],credit:'Portrait supplied on the candidate’s website',checked:'2026-10-11'};c.acclaimed=!!contests.find(x=>x.id===c.contest).acclaimed;}
Object.assign(candidates.find(c=>c.id==='city-7'),{history:'City Councillor for Wards 9 & 10 and Deputy Mayor in the 2022–2026 term.',historySource:'council'});
Object.assign(candidates.find(c=>c.id==='regional-3'),{history:'Campaign reports council service from 2014 to 2022. Individual achievement claims remain uncorroborated.',historySource:'dhillon'});
Object.assign(candidates.find(c=>c.id==='regional-7'),{history:'Campaign reports previous advisory work for Prabmeet Sarkaria and Ontario ministries. Employment does not establish party membership.',historySource:'sangha'});
