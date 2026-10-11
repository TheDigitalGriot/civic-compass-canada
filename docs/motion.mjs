import {animate,stagger} from './assets/anime.esm.min.js';
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
let animations=[];
export function settle(root,changedView=true){animations.forEach(a=>a.revert());animations=[];if(reduce.matches)return;
const targets=root.querySelectorAll(changedView?'.map-root,.map-branch,.viz-intro,.person-card,.candidate-pick,.matrix-entry,.promise-candidate':'.viz-intro,.history-lane,.affiliation-details article,.promise-candidate');
if(targets.length)animations.push(animate(targets,{opacity:[0,1],translateY:[changedView?12:6,0],duration:460,delay:(_,i)=>Math.min(i,11)*28,ease:'out(3)'}));
const curves=root.querySelectorAll('.connection-path');if(curves.length)animations.push(animate(curves,{strokeDashoffset:[1,0],duration:850,delay:stagger(70),ease:'inOut(3)'}));
}
reduce.addEventListener('change',()=>{animations.forEach(a=>a.revert());animations=[]});
