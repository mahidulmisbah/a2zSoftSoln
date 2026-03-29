const container = document.getElementById("team-container");

teamMembers.forEach(member => {

container.innerHTML += `

<div class="col-md-3 col-sm-6">

<div class="team wow slideInLeft">

<div class="img-hexagon">

<img src="${member.image}" alt="">

<span class="img-top"></span>
<span class="img-bottom"></span>

</div>

<div class="team-content">

<h3>${member.name}</h3>

<p>${member.role}</p>

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