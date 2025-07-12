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
const excperinceBtn=document.querySelector('#excperince-btn')
const educationBtn=document.querySelector('#educaton-btn')
const skillsBtn=document.querySelector('#skills-btn')
const results = document.querySelector(".results")


const story=document.getElementById('story')
const experince=document.getElementById('excperince')
const education=document.getElementById('education')
const skills=document.getElementById('skills')
const hide=document.querySelectorAll('#para-area')

results.innerHTML ="<h1>Hello World!</h1>"

storyBtn.addEventListener('click', ()=>{
    results.innerHTML = "<h1>Hello World!</h1>"
})
excperinceBtn.addEventListener('click',()=>{
    results.innerHTML = "<h1>Experience</h1>"
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


const content = [
    
]


