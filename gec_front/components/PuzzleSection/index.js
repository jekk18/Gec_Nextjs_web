import Puzzle from "./Puzzle";
import SectionTitle from "../SectionTitle";

const PuzzleSection = (props) => {
  return (
    <div className="puzzleSection">
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-lg-6 col-md-6 col-sm-12">
            <div className="puzzle-left-text">
              <SectionTitle
                titleText={props.sectionTitle}
                titleColor="#EF5324"
              />
              <div className="text">{props.dataPuzzle.text}</div>
            </div>
          </div>
          <div className="col-xxl-7 col-lg-6 col-md-6">
            <div className="puzzle">
              <Puzzle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzleSection;
