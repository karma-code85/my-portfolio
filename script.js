const hambarger=document.getElementById('hambrgar')
const feature=document.getElementById('nav-featuer')
const cross=document.getElementById('close')
// console.log('close')
hambarger.addEventListener('click' ,()=>{
    
        feature.style.display='flex'
    
})

cross.addEventListener('click', ()=>{
    feature.style.display='none'
})




const storyBtn=document.querySelector('#story-btn')
const excperinceBtn=document.querySelector('#excperince-btn')
const educationBtn=document.querySelector('#education-btn')
const skillsBtn=document.querySelector('#skills-btn')
const results = document.querySelector(".results")


// const story=document.getElementById('story')
// const experince=document.getElementById('excperince')
// const education=document.getElementById('education')
// const skills=document.getElementById('skills')
const storyVal=document.querySelector('.para-area-one')
const experinceVal=document.querySelector('.space-experince')
const educationVal=document.querySelector('.space-education')
const skillsVal=document.querySelector('.space-skills')


results.innerHTML =storyVal.innerHTML

storyBtn.addEventListener('click', ()=>{
    results.innerHTML = storyVal.innerHTML
})
excperinceBtn.addEventListener('click',()=>{
    results.innerHTML =experinceVal.innerHTML
})
educationBtn.addEventListener('click', ()=>{
    results.innerHTML =educationVal.innerHTML
    
})
skillsBtn.addEventListener('click',()=>{
    results.innerHTML =skillsVal.innerHTML
   
})
// function showSection(sectionToShow){
//     const allSection=[story, experince, education, skills]
//     allSection.forEach(section =>{
//         if(section===sectionToShow){
//             section.display='block'
//         }else{
//             section.display='none'
//         }
//     })
// }





