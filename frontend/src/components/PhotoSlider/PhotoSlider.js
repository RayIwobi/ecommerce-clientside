import Carousel from "./Carousel"
import sushi from './sushi.mp4'

const slides = [
"https://searchengineland.com/wp-content/seloads/2014/08/photos-images-pictures-ss-1920-1536x864.jpg",
"https://plus.unsplash.com/premium_photo-1682097066897-209d0d9e9ae5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
"https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
]

export default function PhotoSlider(){
    return(
        <div >
        <main >
            <div className="max-w-lg">

                <Carousel autoSlide={true}>
                    {[
                        ...slides.map((s,index) => 
                        <div key={index}>
                            <img src={s} alt="imageele" style={{width:"500px", height:"450px"}} />
                        </div>),
                        <video src={sushi} autoPlay muted loop style={{width:"500px", height:"450px"}}/>
                    ]}
                    
                </Carousel>
            </div>
        </main>
        </div>
    )
}