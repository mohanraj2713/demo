import React, { Component } from 'react';


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

class Home extends Component<StateInerface, {}> {
    constructor(props: StateInerface) {

        super(props)


    }
    render() {

        const { module } = this.props

        console.log("props", module)
        return (
            <div>
                Lesson content
                {
                    module.map((item, index) => {

                        return item.lesson.map((lesson, index1) => {

                            return <div className="d-flex" key={index1}>

                                <div className="d-flex mb-1" role="button">
                                    <div className="align-self-center">

                                        <h1 className="font-40 color-white mb-n1 icon-80 ml-3">
                                            {index + 1}
                                        </h1>


                                    </div>
                                    <div className="align-self-center">

                                        <h5 className="mb-0 color-white">
                                            {lesson.title}{" "}
                                            {lesson.completed === 1 ? (
                                                <span className="badge bg-transparent border border-green-dark color-green-dark ml-2">
                                                    Completed
                                                </span>
                                            ) : lesson.viewed === 1 ? (
                                                <span className="badge bg-transparent border border-orange-dark color-orange-dark ml-2">
                                                    InProgress
                                                </span>
                                            ) : (
                                                <span className="badge bg-transparent border border-gray-dark color-gray-dark ml-2">
                                                    Yet To Start
                                                </span>
                                            )}
                                        </h5>


                                    </div>
                                    <div className="align-self-center ml-auto " slot="end">

                                        <h1 className="font-30 mr-3">
                                            <i className="fa fa-play-circle color-white"></i>
                                        </h1>


                                    </div>
                                </div>

                            </div>
                        })



                    })
                }
            </div>
        );
    }
}

export default Home;