import React, { Component } from 'react';
import DetailsComponent from './Component/DetailsComponent';
import Home from './Component/Home';
import MyQueries from './Component/MyQuries'
import ModalOpen from './TestComponent/ModalOpen'

interface StateObjectInterface {

  data:StateModalInterface
  
}

interface StateModalInterface {

  firstName: string,
  lastName: string,
  age: number
}

interface StateInerface {
  module: Module[];
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

class TabSwitch extends Component<{}, StateInerface> {
  constructor(props: {}) {

    super(props)

    this.state = {
      module: [
        {
          id: 1,
          title: "Lord Ganesa",
          lesson: [
            {
              id: 1,
              title: "Lord Ganesa",
              viewed: 10,
              position: 1,
              thumbnailImage: "",
              description: "awesome songs",
              videoUrl: "",
              type: "",
              assessmentId: 1,
              uploaded: 0,
              gameId: 12,
              completed: 0,
              assignment: 2
            },
          ]

        },
        {
          id: 2,
          title: "Lord Muruga",
          lesson: [
            {
              id: 1,
              title: "Lord Muruga",
              viewed: 10,
              position: 2,
              thumbnailImage: "",
              description: "awesome songs",
              videoUrl: "",
              type: "",
              assessmentId: 1,
              uploaded: 0,
              gameId: 12,
              completed: 0,
              assignment: 2
            },
          ]

        },
        {
          id: 3,
          title: "Goddes Saraswathi",
          lesson: [
            {
              id: 1,
              title: "Goddes Saraswathi",
              viewed: 10,
              position: 1,
              thumbnailImage: "",
              description: "awesome songs",
              videoUrl: "",
              type: "",
              assessmentId: 1,
              uploaded: 0,
              gameId: 12,
              completed: 0,
              assignment: 2
            },
          ]

        },
        {
          id: 4,
          title: "Lord Shiva",
          lesson: [
            {
              id: 1,
              title: "Lord Shiva",
              viewed: 10,
              position: 1,
              thumbnailImage: "",
              description: "awesome songs",
              videoUrl: "",
              type: "",
              assessmentId: 1,
              uploaded: 0,
              gameId: 12,
              completed: 0,
              assignment: 2
            },
          ]

        },
        {
          id: 5,
          title: "Goddess Mahalaksmi",
          lesson: [
            {
              id: 1,
              title: "Goddess Mahalaksmi",
              viewed: 10,
              position: 1,
              thumbnailImage: "",
              description: "awesome songs",
              videoUrl: "",
              type: "",
              assessmentId: 1,
              uploaded: 0,
              gameId: 12,
              completed: 0,
              assignment: 2
            },
          ]

        },
        {
          id: 6,
          title: "Lord Rama",
          lesson: [
            {
              id: 1,
              title: "Lord Rama",
              viewed: 10,
              position: 1,
              thumbnailImage: "",
              description: "awesome songs",
              videoUrl: "",
              type: "",
              assessmentId: 1,
              uploaded: 0,
              gameId: 12,
              completed: 0,
              assignment: 2
            },
          ]

        },
      ]

    }
  }

  
  Queries=(value:string)=>{

    console.log("Queries",value)

  }

  ModalData=(value:StateObjectInterface)=>{

    console.log("ModalData",value)
  }
  
  detailsData=(value:string)=>{

    const l_variable= {
      id: 7,
      title: "Lord Ganesa",
      lesson: [
        {
          id: 1,
          title: "Lord Ganesa",
          viewed: 10,
          position: 1,
          thumbnailImage: "",
          description: "awesome songs",
          videoUrl: "",
          type: "",
          assessmentId: 1,
          uploaded: 0,
          gameId: 12,
          completed: 0,
          assignment: 2
        },
      ]

    }

    let temp_variable = [...this.state.module]

    temp_variable.push(l_variable)  
    this.setState({module:temp_variable},()=>console.log("module",this.state.module))

  }

  render() {

    const { module } = this.state

    console.log("module", module)
    return (
      <div>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-lesson" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Lesson</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-details" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Details</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">My Queries</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-modal-tab" data-bs-toggle="pill" data-bs-target="#pills-modal" type="button" role="tab" aria-controls="pills-modal" aria-selected="false">Modal</button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-lesson" role="tabpanel" aria-labelledby="pills-home-tab">
            <Home module={module} />
          </div>
          <div className="tab-pane fade" id="pills-details" role="tabpanel" aria-labelledby="pills-profile-tab">

            <DetailsComponent module={module} datalist={(value: string)=> this.detailsData(value)}/>

          </div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

            <MyQueries moveToData={(value:string)=>this.Queries(value)}/>
          </div>
          <div className="tab-pane fade" id="pills-modal" role="tabpanel" aria-labelledby="pills-modal-tab">

            <ModalOpen modalSubmitData={(value:StateObjectInterface)=>this.ModalData(value)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TabSwitch;