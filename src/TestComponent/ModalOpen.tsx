import React, { Component } from "react";


// interface PropsInterface={

//     moveToData
// }

    interface PropsModalInterface{

        modalSubmitData:(value : StateObjectInterface) => void

    }

    interface StateObjectInterface {

        data:StateInterface
        
    }

    interface StateInterface {

        firstName: string,
        lastName: string,
        age: number
    }

class ModalPage extends Component<PropsModalInterface, StateObjectInterface>{

    constructor(props: PropsModalInterface) {

        super(props)
        this.state = {
            data:{
                firstName: "",
                lastName: "",
                age: 0,
            }
           


        }
    }

    onSubmit=(value:StateObjectInterface)=>{

        this.props.modalSubmitData(value)

    }

    onChange = (e: any,key:string) => {

        if(key === "firstName"){

            let tempData ={...this.state.data}
            tempData.firstName=e.target.value
            this.setState({data:tempData})


        }else if(key === "lastName"){

            let tempData ={...this.state.data}
            tempData.lastName=e.target.value
            this.setState({data:tempData})
            
        }
        else{
            let tempData ={...this.state.data}
            tempData.age=parseInt(e.target.value)
            this.setState({data:tempData})
        }
    }

    

    render() {

        console.log("state",this.state)
       
        return <>

            <button type="button" className="btn btn-primary" style={{ float: "right" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Student Add
            </button>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Student Add</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="mb-3">

                                <input
                                    type="text"
                                    onChange={(e) => this.onChange(e,"firstName")}
                                    placeholder='Firstname'
                                    className='form-control mb-2'
                                    id='firstName'
                                />
                                <input
                                    type="text"
                                    onChange={(e) => this.onChange(e,"lastName")}
                                    placeholder='Lastname'
                                    className='form-control mb-2'
                                    id='lastName'
                                />
                                <input
                                    type="number"
                                    onChange={(e) => this.onChange(e,"age")}
                                    placeholder='Age'
                                    className='form-control mb-2'
                                    id='age'
                                />


                            </div>

                            {/* <div className="text-center py-3">
                                <button
                                    className="btn btn-success btn-sm m-2 mb-0"
                                    type="submit"

                                >
                                    Submit
                                </button>
                            </div> */}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                            onClick={() => this.onSubmit(this.state)}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    }
}

export default ModalPage