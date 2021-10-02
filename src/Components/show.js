
const show =()=>{
    document.querySelectorAll(".titleShow").forEach(item=>{
        item.addEventListener("click",function(){
            console.log(item)
            item.nextElementSibling.classList.toggle("d-none")
            item.nextElementSibling.classList.toggle("d-block")
        })
    })
}
export default show;