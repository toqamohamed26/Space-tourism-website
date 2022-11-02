let plant = document.getElementById("plants-content");
let plantImage = document.getElementById("img");

function mars() {
    plantImage.src = "./images/image-mars.png";

    plant.innerHTML = `<div >
    <h1 class="plant-title"> Mars</h1> <br>
    <p style="font-size: 15px ; opacity: .5;"> Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons,
        the tallest planetary mountain in our solar system. It’s two and a half times
        the size of Everest!</p>
        <br> <br> 
        <div class="footer-content" id="footer">
            <div class="dist">
                <p class="mini-title">Avg. distance</p>
                <h4>225 mil. km</h4>
            </div>
            <div class="time">
                <p class="mini-title">Est. travel time</p>
                <h4>9 months</h4>
            </div>
        </div>
</div>`;
    let border1 = document.getElementById('mars').classList;
    let border2 = document.getElementById('moon').classList;
    let border3 = document.getElementById('europa').classList;
    let border4 = document.getElementById('titan').classList;
        
    border1.add('open')
    border2.remove('open')
    border3.remove('open')
    border4.remove('open')

}

function moon() {
    plantImage.src = "./images/image-moon.png";

    plant.innerHTML = `<div>
        <h1 class="plant-title"> Moon</h1> <br>
        <p style="font-size: 15px ; opacity: .5;">  See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history 
        by visiting the Luna 2 and Apollo 11 landing sites. 
        </p><br> <br> 
        <div class="footer-content" id="footer">
            <div class="dist">
                <p class="mini-title">Avg. distance</p>
                <h4>384,400 km</h4>
            </div>
            <div class="time">
                <p class="mini-title">Est. travel time</p>
                <h4>3 days</h4>
            </div>
        </div>
    </div>`;
    let border1 = document.getElementById('mars').classList;
    let border2 = document.getElementById('moon').classList;
    let border3 = document.getElementById('europa').classList;
    let border4 = document.getElementById('titan').classList;
    border2.add('open')
    border1.remove('open')
    border3.remove('open')
    border4.remove('open')


}
function titan() {
    plantImage.src = "./images/image-titan.png";
    plant.innerHTML = `<div>
        <h1 class="plant-title"> titan</h1> <br>
        <p style="font-size: 15px ; opacity: .5;"> The only moon known to have a dense atmosphere other than Earth, Titan 
        is a home away from home (just a few hundred degrees colder!). As a 
        bonus, you get striking views of the Rings of Saturn.
        </p><br> <br> 
        <div class="footer-content" id="footer">
            <div class="dist">
                <p class="mini-title">Avg. distance</p>
                <h4>1.6 bil. km</h4>
            </div>
            <div class="time">
                <p class="mini-title">Est. travel time</p>
                <h4>7 years</h4>
            </div>
        </div>
    </div>`;
    let border1 = document.getElementById('mars').classList;
    let border2 = document.getElementById('moon').classList;
    let border3 = document.getElementById('europa').classList;
    let border4 = document.getElementById('titan').classList;
    border4.add('open')
    border1.remove('open')
    border2.remove('open')
    border3.remove('open')
}

function europa() {
    plantImage.src = "./images/image-europa.png";
    plant.innerHTML = `<div>
        <h1 class="plant-title"> europa</h1> <br>
        <p style="font-size: 15px ; opacity: .5;"> The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
        winter lover’s dream. With an icy surface, it’s perfect for a bit of 
        ice skating, curling, hockey, or simple relaxation in your snug 
        wintery cabin.
        </p><br> <br> 
        <div class="footer-content" id="footer">
            <div class="dist">
                <p class="mini-title">Avg. distance</p>
                <h4>628 mil. km</h4>
            </div>
            <div class="time">
                <p class="mini-title">Est. travel time</p>
                <h4>3 years</h4>
            </div>
        </div>
    </div>`
    let border1 = document.getElementById('mars').classList;
    let border2 = document.getElementById('moon').classList;
    let border3 = document.getElementById('europa').classList;
    let border4 = document.getElementById('titan').classList;
    border3.add('open')
    border1.remove('open')
    border4.remove('open')
    border2.remove('open')
}



let imageCrew = document.getElementById("crew-img");
let imageTechnology = document.getElementById("tech-img");
let Content = document.getElementById('crewContent');
let circle1 = document.getElementById('cir1').classList;
let circle2 = document.getElementById('cir2').classList;
let circle3 = document.getElementById('cir3').classList;
let circle4 = document.getElementById('cir4').classList;


function Anousheh() {
    Content.innerHTML = `<div class="crew-content" id="crewContent" >
    <h3> Flight Engineer </h3>
    <h2 class="crew-name">Anousheh Ansari</h2>
    <p class="crow-paragraph">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
        fly to the ISS, and the first Iranian in space.</p>
  </div>`
    imageCrew.src = "./images/image-anousheh-ansari.png";

    circle1.add("cir");
    circle2.remove("cir");
    circle3.remove("cir");
    circle4.remove("cir");
    


}
function mark() {
    Content.innerHTML = `<div class="crew-content" id="crewContent" >
    <h3>Mission Specialist</h3>
    <h2 class="crew-name">Mark Shuttleworth</h2>
    <p class="crow-paragraph">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
    the Linux-based Ubuntu operating system. Shuttleworth became the first South 
    African to travel to space as a space tourist.</p>
  </div>`
    imageCrew.src = "./images/image-mark-shuttleworth.png";

    circle2.add("cir");
    circle1.remove("cir");
    circle3.remove("cir");
    circle4.remove("cir");
    circle1.remove("cire")
}

function victor() {
    Content.innerHTML = `<div class="crew-content" id="crewContent" >
    <h3>Pilot</h3>
    <h2 class="crew-name">Victor Glover</h2>
    <p class="crow-paragraph">Pilot on the first operational flight of the SpaceX Crew Dragon to the 
    International Space Station. Glover is a commander in the U.S. Navy where 
    he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
    station systems flight engineer.</p>
  </div>`
    imageCrew.src = "./images/image-victor-glover.png";

    circle3.add("cir");
    circle1.remove("cir");
    circle2.remove("cir");
    circle4.remove("cir");
    circle1.remove("cire")

}

function douglas() {
    Content.innerHTML = `<div class="crew-content" id="crewContent" >
    <h3>Commander</h3>
    <h2 class="crew-name">Douglas Hurley</h2>
    <p class="crow-paragraph">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
    and former NASA astronaut. He launched into space for the third time as 
    commander of Crew Dragon Demo-2.</p>
  </div>`
    imageCrew.src = "./images/image-douglas-hurley.png";

    circle4.add("cir");
    circle1.remove("cir");
    circle2.remove("cir");
    circle3.remove("cir");
    circle1.remove("cire")

}
function vehicle() {

    let technology = document.getElementById('technology-content');
    let bigcircle1 = document.getElementById('vehicle').classList;
    let bigcircle2 = document.getElementById('spaceport').classList;
    let bigcircle3 = document.getElementById('capsule').classList;
    technology.innerHTML = `<div >
        <h5 class="tech">The terminology...</h5>
        <h2 class="tech-name">Launch vehicle</h2>
        <p class="technology-pharagraph">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. <br> Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!
        </p>
      </div>`
    imageTechnology.src = "./images/image-launch-vehicle-portrait.jpg";
    bigcircle1.add("white")
    bigcircle2.remove("white")
    bigcircle3.remove("white")
    

};
function spaceport() {

    let technology = document.getElementById('technology-content');
    let bigcircle1 = document.getElementById('vehicle').classList;
    let bigcircle2 = document.getElementById('spaceport').classList;
    let bigcircle3 = document.getElementById('capsule').classList;
    let imageTechnology = document.getElementById("tech-img");

    technology.innerHTML = `<div >
    <h5 class="tech">The terminology...</h5>
    <h2 class="tech-name">Spaceport</h2>
    <p class="technology-pharagraph">
    A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
    by analogy to the seaport for ships or airport for aircraft. Based in the 
    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
    of the Earth’s rotation for launch.
    </p>
  </div>`
    imageTechnology.src = "./images/image-spaceport-portrait.jpg";
    bigcircle2.add("white")
    bigcircle1.remove("white")
    bigcircle3.remove("white")
    bigcircle1.add("big-circle2")

};



function capsule() {

    let technology = document.getElementById('technology-content');
    let bigcircle1 = document.getElementById('vehicle').classList;
    let bigcircle2 = document.getElementById('spaceport').classList;
    let bigcircle3 = document.getElementById('capsule').classList;
    technology.innerHTML = `<div >
                <h5 class="tech">The terminology...</h5>
                <h2 class="tech-name">Space capsule</h2>
                <p class="technology-pharagraph">
                A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                you'll spend your time during the flight. It includes a space gym, cinema, 
                and plenty of other activities to keep you entertained.
                </p>
              </div>`
    imageTechnology.src = "./images/image-space-capsule-portrait.jpg";
    bigcircle3.add("white")
    bigcircle2.remove("white")
    bigcircle1.remove("white")
    bigcircle1.add("big-circle2")

};


