const listContainer = document.getElementById("team-list-container");

teamListMembers.forEach((member, index) => {

const animationClass =
index % 2 === 0 ? "slideInLeft" : "slideInRight";

listContainer.innerHTML += `

<div class="col-md-6 col-sm-6">

<div class="team team-list-square wow ${animationClass}">

<div class="img-square">
<img src="${member.image}" alt="">
</div>

<div class="team-content">

<h3>${member.name}</h3>

<p>${member.role}</p>

<p class="desc">${member.description}</p>

<div class="team-social">

<a class="fb" href="${member.facebook}">
<i class="fa fa-facebook"></i>
</a>

<a class="twt" href="${member.twitter}">
<i class="fa fa-twitter"></i>
</a>

<a class="linkdin" href="${member.linkedin}">
<i class="fa fa-linkedin"></i>
</a>

</div>

</div>

</div>

</div>

`;

});