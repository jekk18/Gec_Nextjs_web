import Puzzle from './Puzzle'
import SectionTitle from '../SectionTitle'  

const PuzzleSection = () => {
  return (
    <div className='puzzleSection'> 
        <div className="container">
            <div className="row">
                <div className="col-xxl-5 col-lg-6 col-md-6 col-sm-12">
                    <div className="puzzle-left-text">
                        <SectionTitle titleText='how we start cooperation with you' titleColor="#EF5324" />
                        <div className="text">
                            Before the project start, we, togather with you, will discuss your needs and expectations. 
                            It will allow us to accurately estimate the scope of the work, all necessary resources, 
                            and the level of your engagment in the various stages of the projec. 
                            Your level of engagement may vary from the case when the main work is implemented by your team with our support 
                            to the case when we lead the entire process, and your role is limited only to providing information 
                            and validating the results.
                        </div>
                    </div>
                </div>
                <div className="col-xxl-7 col-lg-6 col-md-6">
                    <div className="puzzle" >
                        <Puzzle /> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PuzzleSection