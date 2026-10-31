const sl=(id,l,o)=>`<label>${l}<select id=${id}>${o.map(x=>`<option>${x}</option>`).join('')}</select></label>`;
$('#app').innerHTML=`<h1>Historical Analytics</h1><div class=bar>${sl('ap','Parameter',['All',...Object.keys(PARAM)])}${sl('ac','Parameter combination',['All',...COMBO.map(c=>c[0])])}${sl('as','Historical status',['All',...ST])}${sl('al','Locality',['All',...LOC.map(l=>l.n)])}</div>
<div class="g g5" id=pm></div>
<div class="g g2"><div class=card><h3>What happened historically to registrations sharing this parameter?</h3><div class=ch><canvas id=oc></canvas></div><div class=note id=on></div></div>
<div class=card><h3>Parameter combination analysis</h3><div class=ch style="height:150px"><canvas id=cc></canvas></div><table id=ct><thead><tr><th>Combination<th class=n>Historical records<th class=n>Suspended share</tr></thead><tbody></tbody></table><p class=note>Illustrative values, not predictive probabilities. Sample size is shown with each percentage.</p></div></div>
<div class=card><h3>Repeated identifier watchlist (masked)</h3><table id=wt><thead><tr><th>Identifier<th>Type<th class=n>Linked registrations<th>Status distribution (S / C / A / R)<th>Most common locality<th></tr></thead><tbody></tbody></table></div>`;
const M={Mobile:'Repeated mobile identifiers',PAN:'Repeated PAN identifiers',Email:'Repeated email identifiers',Address:'Address similarity groups'};let oc,cc;
function draw(){const p=ap.value,s=ST.indexOf(as.value),L=al.value;
pm.innerHTML=Object.keys(PARAM).map(k=>`<div class=card style="${p===k?'border-color:#1f5fbf':''}"><div class=note>${M[k]}</div><b style="font-size:22px">${fmt(PARAM[k][0])}</b><div class=note>records with match</div></div>`).join('')+`<div class=card><div class=note>Registrations (all)</div><b style="font-size:22px">${fmt(N)}</b><div class=note>parameter counts overlap</div></div>`;
const keys=p==='All'?Object.keys(PARAM):[p];oc&&oc.destroy();
oc=new Chart(document.getElementById('oc'),{type:'bar',data:{labels:keys.map(k=>`${k} (n=${fmt(PARAM[k][0])})`),datasets:ST.map((x,i)=>({label:x,data:keys.map(k=>+(PARAM[k][1][i]/PARAM[k][0]*100).toFixed(1)),backgroundColor:SC[i],borderWidth:s===i?3:0,borderColor:'#1f5fbf'}))},options:{maintainAspectRatio:false,scales:{x:{stacked:true},y:{stacked:true,max:100,title:{display:true,text:'% of records'}}},plugins:{legend:{position:'bottom'}}}});
on.textContent='Outcome percentages are computed from illustrative aggregate counts that overlap across parameters.';
const co=COMBO.filter(c=>ac.value==='All'||c[0]===ac.value);cc&&cc.destroy();
cc=new Chart(document.getElementById('cc'),{type:'bar',data:{labels:co.map(c=>c[0]),datasets:[{label:'Suspended share %',data:co.map(c=>c[2]),backgroundColor:SC[0]}]},options:{indexAxis:'y',maintainAspectRatio:false,plugins:{legend:{display:false}}}});
ct.tBodies[0].innerHTML=co.map(c=>`<tr><td>${c[0]}<td class=n>${c[1]}<td class=n>${c[2]}% (n=${c[1]})</tr>`).join('');
const w=WATCH.filter(r=>(p==='All'||r[1]===p)&&(L==='All'||r[4]===L)&&(s<0||r[3][s]>0)&&(ac.value==='All'||ac.value.includes(r[1])));
wt.tBodies[0].innerHTML=w.map(r=>`<tr><td>${r[0]}<td>${r[1]}<td class=n>${r[2]}<td>${r[3].map((v,i)=>`<span style="color:${SC[i]};font-weight:600">${v}</span>`).join(' / ')}<td>${r[4]}<td><a class=l href="network.html">View connections</a></tr>`).join('')||'<tr><td colspan=6>No identifiers match these filters. Reset a filter to widen the view.</tr>'}
if(qs('p'))ap.value=qs('p');if(qs('loc'))al.value=qs('loc');if(qs('combo'))ac.value=qs('combo');
[ap,ac,as,al].forEach(e=>e.onchange=draw);sortable(wt);draw();
