const $=s=>document.querySelector(s),fmt=n=>n.toLocaleString('en-IN'),pc=(a,b)=>(a/b*100).toFixed(1)+'%',qs=k=>new URLSearchParams(location.search).get(k);
const PAGES=[['dashboard','Executive Dashboard'],['geo','Geographic Intelligence'],['application','Application Intelligence'],['network','Network Intelligence'],['analytics','Historical Analytics']];
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.append(t);setTimeout(()=>t.remove(),2600)}
const badge=i=>`<span class=bd style="--c:${SC[i]}">${ST[i]}</span>`;
const pg=document.body.dataset.page,curPg=PAGES.find(p=>p[0]===pg);
document.body.insertAdjacentHTML('afterbegin',`<aside class=side><div class=brand>PHOENIX<small>GST Registration Intelligence</small></div><nav style="margin-top:10px">${PAGES.map(p=>`<a href="${p[0]}.html" class="${p[0]===pg?'on':''}">${p[1]}</a>`).join('')}</nav><div class=who><b>Demo Officer</b><br>Asst. Commissioner (Demo)<br>Central Mumbai Zone</div></aside>
<div class=main><div class=demo>DEMO ENVIRONMENT — ALL DATA IS SYNTHETIC AND FOR PRESENTATION PURPOSES ONLY.</div>
<header class=top><b>PHOENIX</b><span>GST Intelligence</span><span>Central Mumbai Zone</span><span class=sp></span><span>Period: Nov 2025 – 31 Oct 2026</span><span>Demo Officer</span><button class="btn o" onclick="print()">Export / Print snapshot</button></header>
<div class=crumb><a href="dashboard.html">Phoenix</a> / ${curPg[1]}</div><main id=app></main></div>`);
if(window.Chart){Chart.defaults.font.family='"Segoe UI",Arial';Chart.defaults.font.size=11.5}
function demo(m){toast('Demo action only: '+m+'. No record was changed.')}
function sortable(t){t.querySelectorAll('th').forEach((h,i)=>h.onclick=()=>{const b=t.tBodies[0],r=[...b.rows],d=h.dir=-(h.dir||-1);r.sort((x,y)=>{const a=x.cells[i].dataset.v??x.cells[i].textContent,c=y.cells[i].dataset.v??y.cells[i].textContent,na=parseFloat(a),nc=parseFloat(c);return(isNaN(na)||isNaN(nc)?a.localeCompare(c):na-nc)*d});r.forEach(x=>b.append(x))})}
/* expose element ids as globals explicitly (does not rely on browser named-access) */
(()=>{const d=Object.getOwnPropertyDescriptor(Element.prototype,'innerHTML');Object.defineProperty($('#app'),'innerHTML',{get(){return d.get.call(this)},set(v){d.set.call(this,v);this.querySelectorAll('[id]').forEach(e=>{try{window[e.id]=e}catch(x){}})}})})();
