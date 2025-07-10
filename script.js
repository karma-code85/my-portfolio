const hambarger=document.getElementById('hambrgar')
const feature=document.getElementById('nav-featuer')
const cross=document.getElementById('close')
console.log('close')
hambarger.addEventListener('click' ,()=>{
    if(feature.style.display=='flex'){
        feature.style.display='flex'
    }else{
        feature.style.display='flex'
    }
})

cross.addEventListener('click', ()=>{
    feature.style.display='none'
})



const storyBtn=document.querySelector('#story-btn')
const excperinceBtn=document.querySelector('#experince-btn')
const educationBtn=document.querySelector('#educaton-btn')
const skillsBtn=document.querySelector('#skills-btn')


const story=document.getElementById('story')
const experince=document.getElementById('excperince')
const education=document.getElementById('education')
const skills=document.getElementById('skills')
const hide=document.querySelectorAll('#para-area')
storyBtn.addEventListener('click', ()=>{
    showSection(story)
})
excperinceBtn.addEventListener('click',()=>{
    showSection(experince)
})
educationBtn.addEventListener('click', ()=>{
    showSection(education)
})
skillsBtn.addEventListener('click',()=>{
    showSection(skills)
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


