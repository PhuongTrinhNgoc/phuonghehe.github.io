const avatarSrc = "path_to_avatar_image";
const avatar = new Image();
const newDiv = document.querySelector(".avatar_box");
newDiv.append(avatar);
avatar.classList.add(avatarSrc);
newDiv.style = "text-align:center";
avatar.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD96svMDOebTNcSrbR6Me_DdXAmE94zNHwxA&usqp=CAU";
avatar.title = "anh cute";
avatar.style = `width:300px;
height:300px;
margin-top:50px;
background: gray;`;
