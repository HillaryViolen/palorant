import { agentsData } from "./agentsData.js";

const agentName = document.querySelector('.agent-name');
const videoContainer = document.querySelector(".video__frame video");
const abilities = document.querySelectorAll(".ability");
const skillName = document.querySelector(".skill_name");
const skillDesc = document.querySelector(".skill_desc");


const getAgent = agentsData.find((agentData) =>{
    return agentData.name.toLowerCase() === agentName.textContent.toLowerCase();
})


abilities.forEach((ability)=>{
    const agentSkill = ability.id.toLowerCase();
    ability.addEventListener("click", (e)=>{
        videoContainer.src = `../../../../assets/video/agents/${agentName.textContent.toLowerCase()}/${agentSkill}.mp4`

        
        const getAbility = getAgent.abilities.find((abil) =>{
            return abil.id === ability.id;
        })
        
        skillName.innerHTML = getAbility.name;
        skillDesc.innerHTML = getAbility.description;

        abilities.forEach((abil) => abil.classList.remove("active"));

        ability.classList.add("active");
        });
});
// });

