import '../CSS/index.css'
import venue_3 from '../../images/venue_3.jpg'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.jpg'
import Mother from '../../images/Mother.jpg'
import orga from '../../images/orga.jpg'
import venue_2 from '../../images/venue_2.jpg'
import Navigationbar from '../../Components/Naviagationbar'
import { useNavigate } from 'react-router'

const Home = () =>{
    const { id, firstName, lastName, roleId, addressId, loginstatus} =sessionStorage 
    
    return (
          
        <div>
          
            {/* Navigation bar */}
            <Navigationbar />

        {/* First carousal */}
        <div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div class="carousel-inner" >
                        <div class="carousel-item active"> 
                            <div class="bg-image">
                                <img
                                    src={img1}
                                    class="d-block w-100 h-400"
                                    alt="Sample"
                                />
                                <div class="mask mask-custom">
                                    <div class={"d-flex justify-content-center align-items-center h-100"}>
                                        <h2 class="text-white mb-0">Be a Reason, so one can smile.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item "> 
                            <div class="bg-image">
                                <img
                                    src={img2}
                                    class="d-block w-100 h-400"
                                    alt="Sample"
                                />
                                <div class="mask mask-custom">
                                    <div class="d-flex justify-content-center align-items-center h-100">
                                    <h2 class="text-white mb-0">Because Education is their fundamental Right too.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item "> 
                            <div class="bg-image">
                                <img
                                    src={img3}
                                    class="d-block w-100 h-400"
                                    alt="Sample"
                                />
                                <div class="mask mask-custom">
                                    <div class="d-flex justify-content-center align-items-center h-100">
                                    <h2 class="text-white mb-0">Because they also deserve all facilities.</h2>
                                    
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center h-100">
                                        <h2 class="text-white mb-0">Because they also deserve all facilities.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <br />
            <br />
  
       
        {/* Card-1 */}
        <div>
                <div className="row">
                    <div className="col">
                    <h2>Our Organisation</h2>
                        <p>
                        In the heart of every child is a hunger for home. Not just for food and a place to sleep, but for safety and community. Most importantly: for love. At the Good Shepherd Agricultural Mission, 350kms east of Delhi in the town of Banbasa, we are much more than a home for children from difficult and desperate circumstances.

                        We are a family, where love guides us all as we grow and expand year after year. 
                        Not just a regular children’s home, we are a nearly self-sustaining organization; a working farm, 
                        a vibrant school, receiving no government assistance of any kind. 
                        Take a look around and if you have any questions just get in contact with us via the menu above!
                        </p>
                    </div>
                    <div className="col">
                        <div class="card">
                            <div class="bg-image hover-overlay ripple w-50" data-mdb-ripple-color="light">
                                <img src={orga}/>
                                <a href="#!">
                                <div class="mask"></div>
                                </a>
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Our Organisation</h5>
                                <p class="card-text">Help Us to make these kids lives special.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

        {/* Card-2 */}
            <div>
                <div className="row">
                    <div className="col">
                    <h2>Our Five Pillars</h2>
                        <p>
                        The majority of our work can be divided up into what we call our 5 Pillars. Each one a separate field that supports or 
                        lifts up our organization as a whole. At the very core of what we do is our children, 
                        everything centers around them and is designed in one way or another to support and lift them up.
                        </p>
                    </div>
                    <div className="col">
                        <div class="card">
                            <div class="bg-image hover-overlay ripple w-50" data-mdb-ripple-color="light">
                                <img src={venue_2}/>
                                <a href="#!">
                                <div class="mask"></div>
                                </a>
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Our Infrastructure</h5>
                                <p class="card-text">Our volunteer program is closed for the indefinite future, as is our school -though our 
                                children continue to study at home. We put this video together just to share what a week looks 
                                like here on the Mission; we hope it brings a giant smile to your face.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

        {/* Card-3 */}
            <div>
                <div className="row">
                    <div className="col">
                    <h2>Our Children</h2>
                        <p>
                        Please take some time to sit and browse through the rest of our website, we do our best to update it regularly. 
                        There is plenty of information to see that we hope will bring you closer to understanding us, our children, our goals and our dreams. 
                        If you are looking for volunteering information or volunteer work with our kids please take a look at our visitors information section.</p>
                    </div>
                    <div className="col">
                        <div class="card">
                            <div class="bg-image hover-overlay ripple w-50  " data-mdb-ripple-color="light">
                                <img src={venue_3} class="img-fluid w-20"/>
                                <a href="#!">
                                <div class="mask"></div>
                                </a>
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Welcome To the family</h5>
                                <p class="card-text"> So take a look around our website; meet the team, see what we do.Welcome to the family!
                        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

        {/* Jumbotron  */}
            <div class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-darkgrey" id ="homedata">
                <h1 class="mb-3 h2">Help needy...</h1>
                <p>
                So take a look around our website; meet the team, see what we do.Welcome to the family!
                </p>
            </div>
        </div>
    )
}

export default Home
