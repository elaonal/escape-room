'use strict';
// The Linktree QR is embedded so the game works offline. Instagram is available separately.
const CONFIG = { seconds:240, rewardCodes:['ZERO TRUST','PATCH FIRST','CYBER READY','PHISH PROOF','TRUST BUT VERIFY'], instagramUrl:'https://www.instagram.com/ussu.wicys/', joinUrl:'https://linktr.ee/ussu.wicys', qrImage:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMyAzMyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0id2hpdGUiLz48cGF0aCBmaWxsPSJibGFjayIgZD0iTTQsNGgxdjFoLTF6TTUsNGgxdjFoLTF6TTYsNGgxdjFoLTF6TTcsNGgxdjFoLTF6TTgsNGgxdjFoLTF6TTksNGgxdjFoLTF6TTEwLDRoMXYxaC0xek0xMyw0aDF2MWgtMXpNMTcsNGgxdjFoLTF6TTIyLDRoMXYxaC0xek0yMyw0aDF2MWgtMXpNMjQsNGgxdjFoLTF6TTI1LDRoMXYxaC0xek0yNiw0aDF2MWgtMXpNMjcsNGgxdjFoLTF6TTI4LDRoMXYxaC0xek00LDVoMXYxaC0xek0xMCw1aDF2MWgtMXpNMTIsNWgxdjFoLTF6TTEzLDVoMXYxaC0xek0xNSw1aDF2MWgtMXpNMTYsNWgxdjFoLTF6TTE3LDVoMXYxaC0xek0xOCw1aDF2MWgtMXpNMTksNWgxdjFoLTF6TTIwLDVoMXYxaC0xek0yMiw1aDF2MWgtMXpNMjgsNWgxdjFoLTF6TTQsNmgxdjFoLTF6TTYsNmgxdjFoLTF6TTcsNmgxdjFoLTF6TTgsNmgxdjFoLTF6TTEwLDZoMXYxaC0xek0xMyw2aDF2MWgtMXpNMTQsNmgxdjFoLTF6TTE1LDZoMXYxaC0xek0xOCw2aDF2MWgtMXpNMTksNmgxdjFoLTF6TTIwLDZoMXYxaC0xek0yMiw2aDF2MWgtMXpNMjQsNmgxdjFoLTF6TTI1LDZoMXYxaC0xek0yNiw2aDF2MWgtMXpNMjgsNmgxdjFoLTF6TTQsN2gxdjFoLTF6TTYsN2gxdjFoLTF6TTcsN2gxdjFoLTF6TTgsN2gxdjFoLTF6TTEwLDdoMXYxaC0xek0xMiw3aDF2MWgtMXpNMTMsN2gxdjFoLTF6TTE1LDdoMXYxaC0xek0xNiw3aDF2MWgtMXpNMTcsN2gxdjFoLTF6TTE4LDdoMXYxaC0xek0xOSw3aDF2MWgtMXpNMjIsN2gxdjFoLTF6TTI0LDdoMXYxaC0xek0yNSw3aDF2MWgtMXpNMjYsN2gxdjFoLTF6TTI4LDdoMXYxaC0xek00LDhoMXYxaC0xek02LDhoMXYxaC0xek03LDhoMXYxaC0xek04LDhoMXYxaC0xek0xMCw4aDF2MWgtMXpNMTQsOGgxdjFoLTF6TTE2LDhoMXYxaC0xek0xOCw4aDF2MWgtMXpNMjAsOGgxdjFoLTF6TTIyLDhoMXYxaC0xek0yNCw4aDF2MWgtMXpNMjUsOGgxdjFoLTF6TTI2LDhoMXYxaC0xek0yOCw4aDF2MWgtMXpNNCw5aDF2MWgtMXpNMTAsOWgxdjFoLTF6TTEyLDloMXYxaC0xek0xNCw5aDF2MWgtMXpNMTgsOWgxdjFoLTF6TTE5LDloMXYxaC0xek0yMCw5aDF2MWgtMXpNMjIsOWgxdjFoLTF6TTI4LDloMXYxaC0xek00LDEwaDF2MWgtMXpNNSwxMGgxdjFoLTF6TTYsMTBoMXYxaC0xek03LDEwaDF2MWgtMXpNOCwxMGgxdjFoLTF6TTksMTBoMXYxaC0xek0xMCwxMGgxdjFoLTF6TTEyLDEwaDF2MWgtMXpNMTQsMTBoMXYxaC0xek0xNiwxMGgxdjFoLTF6TTE4LDEwaDF2MWgtMXpNMjAsMTBoMXYxaC0xek0yMiwxMGgxdjFoLTF6TTIzLDEwaDF2MWgtMXpNMjQsMTBoMXYxaC0xek0yNSwxMGgxdjFoLTF6TTI2LDEwaDF2MWgtMXpNMjcsMTBoMXYxaC0xek0yOCwxMGgxdjFoLTF6TTE1LDExaDF2MWgtMXpNMTYsMTFoMXYxaC0xek0xOCwxMWgxdjFoLTF6TTE5LDExaDF2MWgtMXpNMjAsMTFoMXYxaC0xek00LDEyaDF2MWgtMXpNNSwxMmgxdjFoLTF6TTYsMTJoMXYxaC0xek03LDEyaDF2MWgtMXpNOCwxMmgxdjFoLTF6TTEwLDEyaDF2MWgtMXpNMTEsMTJoMXYxaC0xek0xMiwxMmgxdjFoLTF6TTEzLDEyaDF2MWgtMXpNMTQsMTJoMXYxaC0xek0xNywxMmgxdjFoLTF6TTE4LDEyaDF2MWgtMXpNMTksMTJoMXYxaC0xek0yMSwxMmgxdjFoLTF6TTIzLDEyaDF2MWgtMXpNMjUsMTJoMXYxaC0xek0yNywxMmgxdjFoLTF6TTUsMTNoMXYxaC0xek02LDEzaDF2MWgtMXpNOSwxM2gxdjFoLTF6TTEyLDEzaDF2MWgtMXpNMTMsMTNoMXYxaC0xek0xNSwxM2gxdjFoLTF6TTE4LDEzaDF2MWgtMXpNMjAsMTNoMXYxaC0xek0yMywxM2gxdjFoLTF6TTI3LDEzaDF2MWgtMXpNNywxNGgxdjFoLTF6TTEwLDE0aDF2MWgtMXpNMTMsMTRoMXYxaC0xek0xNywxNGgxdjFoLTF6TTE5LDE0aDF2MWgtMXpNMjUsMTRoMXYxaC0xek0yNywxNGgxdjFoLTF6TTI4LDE0aDF2MWgtMXpNNiwxNWgxdjFoLTF6TTgsMTVoMXYxaC0xek05LDE1aDF2MWgtMXpNMTEsMTVoMXYxaC0xek0xMywxNWgxdjFoLTF6TTE0LDE1aDF2MWgtMXpNMTYsMTVoMXYxaC0xek0xOCwxNWgxdjFoLTF6TTIwLDE1aDF2MWgtMXpNMjEsMTVoMXYxaC0xek0yMiwxNWgxdjFoLTF6TTIzLDE1aDF2MWgtMXpNMjQsMTVoMXYxaC0xek0yOCwxNWgxdjFoLTF6TTQsMTZoMXYxaC0xek03LDE2aDF2MWgtMXpNMTAsMTZoMXYxaC0xek0xMywxNmgxdjFoLTF6TTE1LDE2aDF2MWgtMXpNMTcsMTZoMXYxaC0xek0xOCwxNmgxdjFoLTF6TTIxLDE2aDF2MWgtMXpNMjIsMTZoMXYxaC0xek0yNCwxNmgxdjFoLTF6TTI2LDE2aDF2MWgtMXpNMjcsMTZoMXYxaC0xek0yOCwxNmgxdjFoLTF6TTQsMTdoMXYxaC0xek01LDE3aDF2MWgtMXpNOCwxN2gxdjFoLTF6TTksMTdoMXYxaC0xek0xMiwxN2gxdjFoLTF6TTEzLDE3aDF2MWgtMXpNMTQsMTdoMXYxaC0xek0xNSwxN2gxdjFoLTF6TTE4LDE3aDF2MWgtMXpNMjMsMTdoMXYxaC0xek0yNSwxN2gxdjFoLTF6TTI3LDE3aDF2MWgtMXpNNCwxOGgxdjFoLTF6TTcsMThoMXYxaC0xek04LDE4aDF2MWgtMXpNMTAsMThoMXYxaC0xek0xMSwxOGgxdjFoLTF6TTE0LDE4aDF2MWgtMXpNMTcsMThoMXYxaC0xek0xOSwxOGgxdjFoLTF6TTIxLDE4aDF2MWgtMXpNMjMsMThoMXYxaC0xek0yNCwxOGgxdjFoLTF6TTI1LDE4aDF2MWgtMXpNMjcsMThoMXYxaC0xek0yOCwxOGgxdjFoLTF6TTQsMTloMXYxaC0xek04LDE5aDF2MWgtMXpNOSwxOWgxdjFoLTF6TTExLDE5aDF2MWgtMXpNMTMsMTloMXYxaC0xek0xNSwxOWgxdjFoLTF6TTE2LDE5aDF2MWgtMXpNMTgsMTloMXYxaC0xek0yMywxOWgxdjFoLTF6TTI0LDE5aDF2MWgtMXpNMjgsMTloMXYxaC0xek00LDIwaDF2MWgtMXpNMTAsMjBoMXYxaC0xek0xMSwyMGgxdjFoLTF6TTEyLDIwaDF2MWgtMXpNMTMsMjBoMXYxaC0xek0xNiwyMGgxdjFoLTF6TTE3LDIwaDF2MWgtMXpNMTgsMjBoMXYxaC0xek0xOSwyMGgxdjFoLTF6TTIwLDIwaDF2MWgtMXpNMjEsMjBoMXYxaC0xek0yMiwyMGgxdjFoLTF6TTIzLDIwaDF2MWgtMXpNMjQsMjBoMXYxaC0xek0yNiwyMGgxdjFoLTF6TTEyLDIxaDF2MWgtMXpNMTQsMjFoMXYxaC0xek0xNSwyMWgxdjFoLTF6TTE4LDIxaDF2MWgtMXpNMjAsMjFoMXYxaC0xek0yNCwyMWgxdjFoLTF6TTI1LDIxaDF2MWgtMXpNNCwyMmgxdjFoLTF6TTUsMjJoMXYxaC0xek02LDIyaDF2MWgtMXpNNywyMmgxdjFoLTF6TTgsMjJoMXYxaC0xek05LDIyaDF2MWgtMXpNMTAsMjJoMXYxaC0xek0xMiwyMmgxdjFoLTF6TTE4LDIyaDF2MWgtMXpNMjAsMjJoMXYxaC0xek0yMiwyMmgxdjFoLTF6TTI0LDIyaDF2MWgtMXpNMjYsMjJoMXYxaC0xek0yNywyMmgxdjFoLTF6TTI4LDIyaDF2MWgtMXpNNCwyM2gxdjFoLTF6TTEwLDIzaDF2MWgtMXpNMTMsMjNoMXYxaC0xek0xNCwyM2gxdjFoLTF6TTE2LDIzaDF2MWgtMXpNMTgsMjNoMXYxaC0xek0yMCwyM2gxdjFoLTF6TTI0LDIzaDF2MWgtMXpNMjUsMjNoMXYxaC0xek0yOCwyM2gxdjFoLTF6TTQsMjRoMXYxaC0xek02LDI0aDF2MWgtMXpNNywyNGgxdjFoLTF6TTgsMjRoMXYxaC0xek0xMCwyNGgxdjFoLTF6TTEyLDI0aDF2MWgtMXpNMTQsMjRoMXYxaC0xek0xNSwyNGgxdjFoLTF6TTE2LDI0aDF2MWgtMXpNMTcsMjRoMXYxaC0xek0xOSwyNGgxdjFoLTF6TTIwLDI0aDF2MWgtMXpNMjEsMjRoMXYxaC0xek0yMiwyNGgxdjFoLTF6TTIzLDI0aDF2MWgtMXpNMjQsMjRoMXYxaC0xek0yNiwyNGgxdjFoLTF6TTI3LDI0aDF2MWgtMXpNNCwyNWgxdjFoLTF6TTYsMjVoMXYxaC0xek03LDI1aDF2MWgtMXpNOCwyNWgxdjFoLTF6TTEwLDI1aDF2MWgtMXpNMTIsMjVoMXYxaC0xek0xMywyNWgxdjFoLTF6TTE1LDI1aDF2MWgtMXpNMTcsMjVoMXYxaC0xek0xOSwyNWgxdjFoLTF6TTIxLDI1aDF2MWgtMXpNMjIsMjVoMXYxaC0xek0yNCwyNWgxdjFoLTF6TTI1LDI1aDF2MWgtMXpNMjYsMjVoMXYxaC0xek0yNywyNWgxdjFoLTF6TTI4LDI1aDF2MWgtMXpNNCwyNmgxdjFoLTF6TTYsMjZoMXYxaC0xek03LDI2aDF2MWgtMXpNOCwyNmgxdjFoLTF6TTEwLDI2aDF2MWgtMXpNMTIsMjZoMXYxaC0xek0xMywyNmgxdjFoLTF6TTE3LDI2aDF2MWgtMXpNMTgsMjZoMXYxaC0xek0yNSwyNmgxdjFoLTF6TTI2LDI2aDF2MWgtMXpNMjgsMjZoMXYxaC0xek00LDI3aDF2MWgtMXpNMTAsMjdoMXYxaC0xek0xMiwyN2gxdjFoLTF6TTEzLDI3aDF2MWgtMXpNMTUsMjdoMXYxaC0xek0yMCwyN2gxdjFoLTF6TTIzLDI3aDF2MWgtMXpNMjQsMjdoMXYxaC0xek0yNSwyN2gxdjFoLTF6TTI4LDI3aDF2MWgtMXpNNCwyOGgxdjFoLTF6TTUsMjhoMXYxaC0xek02LDI4aDF2MWgtMXpNNywyOGgxdjFoLTF6TTgsMjhoMXYxaC0xek05LDI4aDF2MWgtMXpNMTAsMjhoMXYxaC0xek0xMiwyOGgxdjFoLTF6TTEzLDI4aDF2MWgtMXpNMTQsMjhoMXYxaC0xek0xNywyOGgxdjFoLTF6TTE4LDI4aDF2MWgtMXpNMjEsMjhoMXYxaC0xek0yMywyOGgxdjFoLTF6TTI0LDI4aDF2MWgtMXpNMjUsMjhoMXYxaC0xek0yNiwyOGgxdjFoLTF6TTI3LDI4aDF2MWgtMXpNMjgsMjhoMXYxaC0xeiIvPjwvc3ZnPg==' };
const app=document.querySelector('#app');
let state, interval, recoveryTimer;
let previousReward = null;
const titles=['Spot the phishing','Secure the account','Decode the message','Recover the system'];
const hints = [
  ["Don’t trust the display name. Look for something that identifies where the message really came from.", "Compare the sender’s domain and the login destination with surrey.ac.uk. Is the message pushing you to act immediately?"],
  ["Think about length, unpredictability and obvious personal or context clues.", "The strongest option uses several unrelated words rather than a predictable name or common password."],
  ["This is a Caesar cipher. Every letter has moved by the same amount.", "Move each letter 3 places backwards. For example, F → C. The alphabet strip below can help."],
  ["You already collected everything you need. Check your mission notebook.", "Use the digits in module order: phishing → password → cipher."]
];
const lessons = [
  'The sender and login destination both impersonate Surrey. Official university domains use surrey.ac.uk. Urgency is another warning: verify requests through a trusted channel.',
  'The long passphrase wins: assume its unrelated words were randomly chosen. Surrey2026! uses a predictable name and year; P@ssw0rd123! uses common substitutions. Use unique passwords, a password manager and MFA. Never reuse these public examples.',
  'You decoded CYBER! This simple substitution is a puzzle, not secure encryption.'
];
function time(s){s=Math.max(0,Math.ceil(s));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function focusTitle(){app.querySelector('h1,h2')?.focus()}
function reset(){
  clearInterval(interval);
  clearTimeout(recoveryTimer);
  state={screen:'landing',step:0,solved:false,hints:[0,0,0,0],flags:new Set(),clues:[],start:0,practice:false,elapsed:0,reward:null};
  landing(); focusTitle();
}
function hintCount(){return state.hints.reduce((total,n)=>total+n,0)}
function pickReward(){
  const options=CONFIG.rewardCodes.filter(code=>code!==previousReward);
  const code=options[Math.floor(Math.random()*options.length)];
  previousReward=code;
  return code;
}
function network(secured){
  return `<section class="network" aria-label="Network recovery"><div class="network-label">SYSTEM INTEGRITY <strong id="integrity">${secured*25}%</strong></div><div class="scan">${['INBOX','ACCOUNT','CIPHER','VAULT'].map((label,i)=>`<div class="node ${i<secured?'secured':''}">${i<secured?'✓':'○'} ${label}<small>${i<secured?'SECURED':'LOCKED'}</small></div>`).join('')}</div></section>`;
}
function updateNetwork(){
  const count=state.screen==='recovering'||state.screen==='complete'?4:state.clues.length;
  document.querySelector('#network').innerHTML=network(count);
}
function hintMarkup(){
  return hints[state.step].slice(0,state.hints[state.step]).map((hint,i)=>`<div><strong>Hint ${i+1} / 2</strong><br>${hint}</div>`).join('');
}
function revealHint(){
  if(!checkTime()||state.solved||state.hints[state.step]>=2)return;
  state.hints[state.step]++;
  const box=document.querySelector('#hint');box.hidden=false;box.innerHTML=hintMarkup();
  const button=document.querySelector('#hint-button');
  button.textContent=state.hints[state.step]===2?'Both hints revealed':'Reveal hint 2 / 2';
  button.disabled=state.hints[state.step]===2;
  document.querySelector('#hint-count').textContent=hintCount();
  if(state.step===2&&state.hints[2]===2)document.querySelector('#alphabet-tool').hidden=false;
}

function landing(){app.innerHTML=`<section class="hero"><div><div class="eyebrow">Operation: Fresh Start / 001</div><h1 tabindex="-1">Could you<br>outsmart a<br><em>hacker?</em></h1><p class="lead">Our system is compromised. Four challenges. Four minutes. You’re the one who can bring it back.</p><button class="primary" data-action="brief">Accept mission ↗</button><div class="meta"><span>◷ 3–5 MINUTES</span><span>◎ NO EXPERIENCE NEEDED</span></div></div><div class="terminal"><div class="windowbar"><span class="dots">●●●</span><span>WICYS / INCIDENT CONSOLE</span></div><div class="terminal-body"><div class="line">&gt; initialising campus network…</div><div class="line green">[OK] connection established</div><div class="line red">[!] SECURITY BREACH DETECTED</div><div class="line">&gt; four recovery modules locked</div><div class="line green">&gt; awaiting your response_</div><div class="scan"><div class="node">INBOX</div><div class="node">ACCOUNT</div><div class="node">CIPHER</div><div class="node">VAULT</div></div><div class="terminal-caption">SYSTEM STATUS: RECOVERY REQUIRED</div></div></div></section><div class="strip"><span>01 / SPOT THE PHISH</span><span>02 / LOCK IT DOWN</span><span>03 / CRACK THE CODE</span><span>04 / RESTORE ACCESS</span></div>`}
function briefing(){state.screen='brief';app.innerHTML=`<section class="brief panel"><div class="eyebrow">Your mission briefing</div><h2 tabindex="-1">Small clues. Big save.</h2><p>An attacker has locked the fictional WiCyS network. Investigate a suspicious email, choose a strong password and decode a message. Each success saves a digit in your clue notebook. Combine them to restore access.</p><div class="route"><div>01 · Investigate<small>Find the impostor</small></div><div>02 · Protect<small>Choose a password</small></div><div>03 · Decode<small>Shift the letters</small></div><div>04 · Recover<small>Use your three digits</small></div></div><p>Your <strong>4-minute timer</strong> starts when you enter the system. You get two progressive hints per challenge, with no time penalty, unlimited retries and all clues on screen. If time runs out, you can keep learning in practice mode.</p><p class="small">Play solo or with a friend. No personal details or real passwords needed.</p><div class="actions"><button class="primary" data-action="start">Enter the system →</button><button data-action="reset">Back</button></div></section>`;focusTitle()}
function start(){state.screen='game';state.start=Date.now();state.reward=pickReward();renderGame();clearInterval(interval);interval=setInterval(tick,250);tick()}
function tick(){if(state.screen!=='game')return;const remaining=CONFIG.seconds-(Date.now()-state.start)/1000;if(!state.practice&&remaining<=0){timeout();return}const el=document.querySelector('#timer');if(el){el.textContent=state.practice?'PRACTICE':time(remaining);el.classList.toggle('urgent',!state.practice&&remaining<=30)}}
function checkTime(){tick();return state.screen==='game'}
function timeout(){state.screen='timeout';clearInterval(interval);app.innerHTML=`<section class="brief panel"><div class="eyebrow">Timer ended · No worries</div><h2 tabindex="-1">The mission isn’t over.</h2><p>You secured ${state.clues.length} of 4 modules. Keep your clues and finish in practice mode, or start a fresh four-minute mission.</p><div class="actions"><button class="primary" data-action="practice">Continue in practice mode</button><button data-action="reset">Start over</button></div></section>`;focusTitle()}
function challenge(){
  switch(state.step){
    case 0:return `<p>This email claims to come from Surrey IT. <strong>Find two red flags.</strong> Click the evidence you would investigate before trusting it.</p>
      <div class="mail"><div class="mail-top">INBOX / 1 UNREAD</div><div class="mail-content"><strong>Subject: Your student account will close today</strong>
      <button data-answer="sender" aria-pressed="${state.flags.has('sender')}" ${state.flags.has('sender')?'disabled class="found"':''}>${state.flags.has('sender')?'✓ ':''}From: Surrey IT &lt;help@surrey-support.example&gt;</button>
      <p>To: new.student@surrey.ac.uk</p><p>Hello student,<br>Confirm your account immediately to avoid losing access.</p>
      <button data-answer="link" aria-pressed="${state.flags.has('link')}" ${state.flags.has('link')?'disabled class="found"':''}>${state.flags.has('link')?'✓ ':''}Confirm account now →<small>Destination: https://surrey-login.example/verify</small></button>
      <button data-answer="signature">University IT Support</button></div></div>
      <p id="flag-count" class="small" role="status">${state.flags.size} / 2 red flags found · All items are safe simulations.</p>`;
    case 1:return `<p>Choose the <strong>strongest option here</strong> to secure our fictional account.</p><div class="choices">
      <button data-answer="weak">Surrey2026!</button>
      <button data-answer="strong">Otter-Cactus-Planet-Velvet-83!</button>
      <button data-answer="common">P@ssw0rd123!</button></div><p class="small">These are public game examples. Don’t use them for your own accounts.</p>`;
    case 2:return `<p>Our log says the attacker shifted every letter <strong>3 places forward</strong>. Reverse the shift to recover the five-letter message.</p>
      <div class="cipher-console"><div class="eyebrow">Encrypted message</div><div class="cipher">FBEHU</div><div class="small">CIPHER LAB / RECOVERY CHANNEL 03</div></div>
      <div id="alphabet-tool" class="alphabet" ${state.hints[2]===2?'':'hidden'}><strong>DECODE STRIP · SHIFT −3</strong><br>Find an encrypted letter on top; read its decoded partner below.<div class="alphabet-grid">${Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ',(letter,i)=>`<span>${letter}<b>↓</b>${'XYZABCDEFGHIJKLMNOPQRSTUVW'[i]}</span>`).join('')}</div></div>
      <form id="answer-form"><label for="answer">Decoded word</label><input id="answer" autocomplete="off" spellcheck="false" maxlength="30" placeholder="Type the five-letter word"><div class="actions"><button class="primary" type="submit">Check message →</button></div></form>`;
    case 3:return `<p>Three modules are secure. Use your collected recovery digits to open the vault and bring the network back online.</p>
      <div class="vault"><div class="eyebrow">System recovery vault</div><form id="answer-form"><label for="answer">Three-digit recovery code</label>
      <input id="answer" class="vault-code" inputmode="numeric" pattern="[0-9]{3}" autocomplete="off" maxlength="3" placeholder="_ _ _" aria-describedby="keypad-help">
      <div class="keypad">${[1,2,3,4,5,6,7,8,9].map(n=>`<button type="button" data-digit="${n}">${n}</button>`).join('')}<button type="button" data-action="clear-code">Clear</button><button type="button" data-digit="0">0</button><button type="button" data-action="backspace" aria-label="Delete last digit">⌫</button></div>
      <button class="primary unlock" type="submit">Enter · Unlock vault →</button><p class="small" id="keypad-help">Use the keypad or your keyboard. Enter to unlock; Backspace to edit.</p></form></div>`;
  }
}

function renderGame(){app.innerHTML=`<div class="hud"><div><div class="eyebrow">Recovery in progress</div><span class="small">Challenge ${state.step+1} of 4 · ${state.clues.length} secured</span></div><div><div class="clock" id="timer" role="timer" aria-label="Time remaining">${state.practice?'PRACTICE':time(CONFIG.seconds-(Date.now()-state.start)/1000)}</div><span class="small">${state.practice?'No time limit':'Time remaining'}</span></div></div><progress aria-label="Modules secured" max="4" value="${state.clues.length}"></progress><div id="network">${network(state.clues.length)}</div><div class="game-grid"><section class="panel"><div class="eyebrow">Module 0${state.step+1}</div><h2 tabindex="-1">${titles[state.step]}</h2><div id="challenge">${challenge()}</div><div id="feedback" role="status" aria-live="polite"></div><div class="hint" id="hint" role="status" ${state.hints[state.step]?'':'hidden'}>${hintMarkup()}</div><div class="actions"><button data-action="hint" id="hint-button" ${state.hints[state.step]>=2?'disabled':''}>${state.hints[state.step]>=2?'Both hints revealed':state.hints[state.step]?'Reveal hint 2 / 2':'Reveal hint 1 / 2'}</button><button class="primary" data-action="next" id="next" hidden>Next module →</button></div></section><aside class="panel"><h3>Mission notebook</h3><ol class="steps">${titles.map((t,i)=>`<li class="${i<state.clues.length?'done':i===state.step?'current':''}">${i<state.clues.length?'✓':'0'+(i+1)} ${t}</li>`).join('')}</ol><p class="small" style="margin-top:24px;margin-bottom:0">RECOVERY DIGITS</p><div class="clues">${[0,1,2].map(i=>`<span class="clue">${state.clues[i]||'–'}</span>`).join('')}</div><div class="small">Hints used: <span id="hint-count">${hintCount()}</span> / 8<br>Your clues stay here. No memorising needed.</div><div class="actions"><button data-action="restart">Restart mission</button></div><div id="restart-confirm" hidden><p class="small">Clear this mission and all collected clues?</p><button data-action="reset">Yes, reset</button> <button data-action="cancel-reset">Keep playing</button></div></aside></div>`;if(state.solved)showSolved();focusTitle()}
function feedback(message,good){const el=document.querySelector('#feedback');el.className='feedback '+(good?'good':'bad');el.textContent=message}
function answer(value){
  if(state.screen!=='game'||!checkTime()||state.solved)return;
  if(state.step===0){
    if(!['sender','link'].includes(value)){
      feedback('KEEP INVESTIGATING · A signature can be copied, but it doesn’t prove this is phishing. Look for evidence elsewhere in the message.',false);return;
    }
    if(state.flags.has(value))return;
    state.flags.add(value);
    const button=document.querySelector(`[data-answer="${value}"]`);
    button.disabled=true;button.classList.add('found');button.setAttribute('aria-pressed','true');button.prepend('✓ ');
    document.querySelector('#flag-count').textContent=`${state.flags.size} / 2 red flags found`;
    if(state.flags.size<2){
      feedback('RED FLAG FOUND · '+(value==='sender'?'The sender uses a lookalike domain.':'The urgent login request points to a lookalike domain.')+' Find one more.',true);return;
    }
  }else{
    const correct=state.step===1?value==='strong':state.step===2?value.trim().toUpperCase()==='CYBER':value===state.clues.join('');
    if(!correct){
      const detail=state.step===1?(value==='weak'?'A university name plus a year is easy to predict.':'Common substitutions don’t make a common password unpredictable.'):'Try again. Your progress is safe; use a hint if you need one.';
      feedback('ACCESS DENIED · '+detail,false);return;
    }
  }
  state.solved=true;
  if(state.step===3){beginRecovery();return}
  state.clues.push(['7','4','2'][state.step]);showSolved();updateNetwork();
  document.querySelector('progress').value=state.clues.length;
  document.querySelectorAll('.clue')[state.step].textContent=state.clues[state.step];
  document.querySelectorAll('.steps li')[state.step].className='done';
  document.querySelector('.hud .small').textContent=`Challenge ${state.step+1} of 4 · ${state.clues.length} secured`;
}
function beginRecovery(){
  // Freeze the result at the accepted code; the celebration never costs timer seconds.
  clearInterval(interval);clearTimeout(recoveryTimer);
  state.elapsed=Math.floor((Date.now()-state.start)/1000);state.screen='recovering';
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const messages=['VERIFYING…','DECRYPTING RECOVERY KEY…','RESTORING SERVICES…','✓ SYSTEM SECURED'];
  app.innerHTML=`<section class="brief panel"><div class="eyebrow">Recovery authorised</div><h2 tabindex="-1">Bringing your network back.</h2><div id="network">${network(4)}</div><div class="terminal"><div class="terminal-body"><div id="recovery-status" role="status" aria-live="polite"></div><div id="recovery-log"></div></div></div></section>`;
  focusTitle();
  let phase=0;
  const advance=()=>{
    if(state.screen!=='recovering')return;
    document.querySelector('#recovery-status').textContent=messages[phase];
    if(phase===2)document.querySelector('#recovery-log').innerHTML='&gt; inbox secured.............. OK<br>&gt; account secured............ OK<br>&gt; cipher module restored..... OK<br>&gt; recovery vault unlocked.... OK';
    if(phase===3)document.querySelector('#recovery-log').innerHTML+=' <br><span class="green">SYSTEM STATUS: SECURE</span>';
    phase++;
    recoveryTimer=setTimeout(phase<messages.length?advance:finish,reduced?0:500);
  };
  advance();
}

function showSolved(){feedback('ACCESS GRANTED · '+lessons[state.step]+' Recovery digit: '+state.clues[state.step]+'.',true);document.querySelectorAll('#challenge button,#challenge input').forEach(el=>el.disabled=true);document.querySelector('#hint-button').disabled=true;document.querySelector('#next').hidden=false;document.querySelector('#next').focus()}
function safeUrl(value){try{const u=new URL(value);return u.protocol==='https:'?u.href:''}catch{return ''}}
function joinSection(){return `<section class="panel join"><div><div class="eyebrow">Your next mission starts here</div><h2>Find your people in cyber.</h2><p>Join WiCyS Surrey. No experience needed, and every subject is welcome.</p><p class="small">CTFs · Workshops · Careers · Hackathons · Socials</p><div id="join-links"></div><p id="join-fallback" class="small">Ask the WiCyS team at the stall for our Instagram and membership QR code.</p></div><div><div id="qr-slot"></div><div class="small">Scan to join WiCyS / All our links</div></div></section>`}
function finish(){clearInterval(interval);state.screen='complete';app.innerHTML=`<section class="finish"><div class="eyebrow">Access granted / All 4 modules secured</div><h1 tabindex="-1">Mission <em>complete.</em></h1><p>You spotted the impostor, protected an account and recovered the system. Cyber Investigator looks good on you.</p><div class="stats"><div><strong>${time(state.elapsed)}</strong><span class="small">${state.practice?'Practice completion time':'Completion time'}</span></div><div><strong>${hintCount()} / 8</strong><span class="small">Hints used</span></div></div><div id="network">${network(4)}</div><div class="reward"><div class="eyebrow">Your secret reward code</div><strong id="reward-code"></strong><div class="small">Tell the WiCyS team this phrase to claim a sweet, while supplies last.</div></div>${joinSection()}<div class="actions"><button class="primary" data-action="reset">Play again / Next investigator →</button></div></section>`;document.querySelector('#reward-code').textContent=state.reward;const links=document.querySelector('#join-links');for(const [label,value] of [['Join WiCyS Surrey / Find all our links',CONFIG.joinUrl],['@ussu.wicys ↗',CONFIG.instagramUrl]]){const url=safeUrl(value);if(url){const a=document.createElement('a');a.className='button';a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=label;links.append(a)}}if(links.children.length)document.querySelector('#join-fallback').hidden=true;if(CONFIG.qrImage&&safeUrl(CONFIG.joinUrl||CONFIG.instagramUrl)){const img=document.createElement('img');img.src=CONFIG.qrImage;img.alt='Scan to join WiCyS Surrey and find all our links';document.querySelector('#qr-slot').append(img)}focusTitle()}
app.addEventListener('click',e=>{
  const button=e.target.closest('button');
  if(!button||button.disabled)return;
  if(button.dataset.answer){answer(button.dataset.answer);return}
  if(button.dataset.digit!==undefined){
    if(!checkTime()||state.step!==3||state.solved)return;
    const input=document.querySelector('#answer');
    if(input.value.length<3)input.value+=button.dataset.digit;
    return;
  }
  switch(button.dataset.action){
    case 'brief':briefing();break;
    case 'start':start();break;
    case 'reset':reset();break;
    case 'hint':revealHint();break;
    case 'next':if(!checkTime()||!state.solved)return;state.step++;state.solved=false;renderGame();break;
    case 'practice':state.practice=true;state.screen='game';renderGame();interval=setInterval(tick,250);break;
    case 'clear-code':case 'backspace':
      if(!checkTime()||state.step!==3)return;
      const input=document.querySelector('#answer');
      input.value=button.dataset.action==='clear-code'?'':input.value.slice(0,-1);input.focus();break;
    case 'restart':document.querySelector('#restart-confirm').hidden=false;break;
    case 'cancel-reset':document.querySelector('#restart-confirm').hidden=true;break;
  }
});
app.addEventListener('input',e=>{
  if(state.step===3&&e.target.id==='answer')e.target.value=e.target.value.replace(/[^0-9]/g,'').slice(0,3);
});
app.addEventListener('submit',e=>{
  if(e.target.id==='answer-form'){e.preventDefault();answer(document.querySelector('#answer').value)}
});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)tick()});
reset();
