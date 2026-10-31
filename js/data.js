const ST=['Suspended','Cancelled','Active','Rejected'],SC=['#c0392b','#d68910','#1e8449','#7f8c8d'];
const LOC=[
{n:'Masjid Bunder',x:330,y:430,c:[386,410,548,76],top:'Mobile'},{n:'Bhendi Bazaar',x:370,y:340,c:[342,380,520,68],top:'Mobile'},
{n:'Byculla',x:450,y:200,c:[298,350,690,60],top:'Address'},{n:'Dongri',x:470,y:410,c:[271,330,610,58],top:'PAN'},
{n:'Nagpada',x:410,y:270,c:[228,290,580,50],top:'Mobile'},{n:'Parel',x:380,y:90,c:[194,260,900,46],top:'Address'},
{n:'Lower Parel',x:260,y:140,c:[150,300,1100,60],top:'Email'},{n:'Mazgaon',x:540,y:320,c:[120,250,700,40],top:'PAN'},
{n:'Fort',x:240,y:510,c:[95,200,620,36],top:'Address'},{n:'Kalbadevi',x:250,y:370,c:[100,256,474,40],top:'Mobile'}];
LOC.forEach(l=>{l.t=l.c.reduce((a,b)=>a+b);l.mob=Math.round(l.c[0]/30);l.pan=Math.round(l.c[0]/38);l.addr=Math.round(l.c[0]/45);l.cl=Math.round(l.c[0]/70)});
const TOT=ST.map((_,i)=>LOC.reduce((a,l)=>a+l.c[i],0)),N=TOT.reduce((a,b)=>a+b);
if(N!==12486||TOT.join()!=='2184,3026,6742,534')console.error('Totals do not reconcile',TOT,N);
const PARAM={Mobile:[1426,[612,401,356,57]],PAN:[1198,[498,362,288,50]],Address:[1064,[391,301,322,50]],Email:[748,[281,204,233,30]]};
const PW={Mobile:.32,PAN:.27,Address:.24,Email:.17};
const COMBO=[['Mobile + PAN',412,61],['Mobile + Address',368,54],['PAN + Email',244,43],['Address + Email',196,38],['Mobile + PAN + Address',128,72]];
const TREND=[['Nov',96],['Dec',104],['Jan',118],['Feb',99],['Mar',131],['Apr',112],['May',125],['Jun',108],['Jul',121],['Aug',117],['Sep',129],['Oct',94]];
const APPS=[
{g:'27AABCU4821F1Z6',n:'Urban Connect Trading',s:91,l:7,f:'Mobile + PAN + Address',p:'P1 - Immediate',k:'Partnership firm',d:'28 October 2026'},
{g:'27AAECR1934P1Z2',n:'Rapid Edge Traders',s:86,l:5,f:'Repeated mobile',p:'P1 - Immediate',k:'Proprietorship',d:'27 October 2026'},
{g:'27AAHCM3305K1Z4',n:'Metro Cargo Solutions',s:74,l:4,f:'PAN + Email',p:'P2 - This week',k:'Company',d:'27 October 2026'},
{g:'27AAGFS6712D1Z8',n:'Sai Ganesh Fabrics',s:68,l:3,f:'Address similarity',p:'P2 - This week',k:'Proprietorship',d:'26 October 2026'},
{g:'27AAKPN9018L1Z9',n:'Noor Mercantile',s:52,l:2,f:'Email repeat',p:'P3 - Routine',k:'Proprietorship',d:'25 October 2026'}];
const cat=s=>s>=80?'HIGH':s>=60?'MEDIUM':'LOW',catc=s=>s>=80?'#c0392b':s>=60?'#d68910':'#1e8449';
const HIST=[
{id:'H1',g:'27AAFCM7731B1Z8',n:'Crescent Global Traders',s:0,d:'12 Apr 2023',src:'Historical GST master, batch 14',m:1,p:1,a:1},
{id:'H2',g:'27AAACM5521K1Z3',n:'Mehta Brothers Enterprises',s:0,d:'03 Aug 2023',src:'Historical GST master, batch 14',m:1,p:1,a:1},
{id:'H3',g:'27AADCU2288Q1Z5',n:'Urban Link Enterprises',s:0,d:'19 Jan 2024',src:'Historical GST master, batch 17',m:1,e:1,a:1},
{id:'H4',g:'27AAGPN4410M1Z7',n:'Nexus Trade Hub',s:1,d:'07 Jun 2022',src:'Historical GST master, batch 11',m:1,a:1},
{id:'H5',g:'27AAJFR6102H1Z9',n:'Royal Impex Co',s:1,d:'22 Nov 2022',src:'Historical GST master, batch 12',a:1},
{id:'H6',g:'27AABCS9987D1Z2',n:'Silverline Distributors',s:2,d:'15 Feb 2024',src:'Historical GST master, batch 17',a:1},
{id:'H7',g:'27AAHCT3340J1Z6',n:'Taj Wholesale Mart',s:3,d:'09 Sep 2025',src:'Rejected ARN register, batch 21',a:1}];
const HOP2=[{id:'H8',g:'27AAKCV1190P1Z4',n:'Vision Textiles',s:2,par:'H4',t:'e'},{id:'H9',g:'27AALCP8821R1Z0',n:'Prime Cargo Links',s:0,par:'H6',t:'m'},{id:'H10',g:'27AAMCD5543T1Z7',n:'Delta Fabrics',s:1,par:'H3',t:'p'}];
const PT={m:'Mobile',p:'PAN',e:'Email',a:'Address'},PCOL={m:'#2e6bd1',p:'#7d3c98',e:'#138d75',a:'#af601a'};
const EVID={m:['98XXXXXX42','Exact match','Mobile number'],p:['AABCU****F','Exact match','PAN'],e:['ur****@mailbox.in','Exact match','Email address'],a:['Shop 14, Mod***, Masjid Bunder','Locality-level similarity','Address (locality + building)']};
const WATCH=[['98XXXXXX42','Mobile',9,[5,2,1,1],'Masjid Bunder'],['91XXXXXX07','Mobile',8,[3,3,2,0],'Bhendi Bazaar'],['AAACU****F','PAN',7,[3,2,2,0],'Dongri'],['AABCU****F','PAN',5,[2,1,2,0],'Masjid Bunder'],
['info****@mail.in','Email',6,[2,1,3,0],'Byculla'],['sa****@mailbox.in','Email',4,[1,1,2,0],'Nagpada'],['Masjid Bunder locality group','Address',11,[4,3,3,1],'Masjid Bunder'],['Bhendi Bazaar lane group','Address',8,[3,2,2,1],'Bhendi Bazaar']];
