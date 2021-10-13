import React, { Component } from 'react';


interface StateInerface {
  module: Module[];
  datalist: (value: string) => void;
}
interface Module {
  id: number;
  title: string;
  lesson: LessonInterface[];

}
interface LessonInterface {
  id: number;
  title: string;
  viewed: number;
  position: number;
  thumbnailImage: string;
  description: string;
  videoUrl: string;
  type: string;
  assessmentId: number;
  uploaded: number;
  gameId: number;
  completed: number;
  assignment: number;
}

class DetailsComponent extends Component<StateInerface, {}> {
  constructor(props: StateInerface) {

    super(props)


  }

  data = (value: string) => {
    this.props.datalist(value);
  }
  render() {

    const { module } = this.props

    console.log("props", module)

    return (
      <>

        <div className="p-2">
          <p className="font-600 mb-n1 color-highlight">Table of</p>
          <h1 className="mb-0">Contents</h1>
          <p>
            Here is what you can expect from our course. Be sure to view all
            of them, from start to finish to get your certificate.
          </p>
        </div>
        {module.map((item,index) => {
          return item.lesson.map((lesson,index1) => {
            return <div key={"lesson-details-" + lesson.id}>
            <div className="d-flex mb-2">
              <div className="align-self-center mt-1">
                <h1 className=" ml-3 font-50 opacity-40 color-highlight mb-0 icon-80">
                  {index + 1}
                </h1>
              </div>
              <div className="align-self-center">
                <h5 className="mb-0">{lesson.title}</h5>
              </div>
            </div>
            <div className="mb-4 ml-5">
              <p>{lesson.description}</p>
            </div>
            
            <button onClick={() => this.data(lesson.title)}>Submit</button>
          </div>
            // return <div><h2>{lesson.title}</h2>
          })
        })}
        {/* {
                    module.map((item, index) => {

                      item.lesson.map((lesson)=>{

                        console.log("DATA",lesson)
                        
                        return 
                          <div key={"lesson-details-" + lesson.id}>
                        <div className="d-flex mb-2">
                          <div className="align-self-center mt-1">
                            <h1 className=" ml-3 font-50 opacity-40 color-highlight mb-0 icon-80">
                              {index + 1}
                            </h1>
                          </div>
                          <div className="align-self-center">
                            <h5 className="mb-0">{lesson.title}</h5>
                          </div>
                        </div>
                        <div className="mb-4 ml-5">
                          <p>{lesson.description}</p>
                        </div>
                      </div>

                      })
                       



                    })
                } */}

      </>

    );
  }
}

export default DetailsComponent;