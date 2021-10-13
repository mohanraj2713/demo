import react, { Component } from 'react'   

import { useForm } from "react-hook-form"; 


interface PropsInterface{

    moveToData:(value:string)=>void

 }

interface StateInterface {

    title:string
}

class MyQueries extends Component<PropsInterface, StateInterface>{


    constructor(props:PropsInterface){

        super(props)
        this.state={
            title:""
        }
    }


    onSubmit=(value:string)=>{
        
        this.props.moveToData(value)
    }

    onChange =(e:any)=>{


        this.setState({title:e.target.value})

    }

    render() {
        
        const {title} = this.state

        return (

            <>

                    <div className="card mx-4 mt-3">
                        <h3 className="justify-content-center d-flex align-items-center text-dark fw-bold">Queries </h3>

                        <div className="card-body">
                            <div className="mb-3">
                                
                                <textarea
                                    style={{height:100}}
                                    onChange={(e)=>this.onChange(e)}
                                    placeholder='type the queries'
                                    className='form-control'
                                    id='title'
                                />
                                
                            </div>
                           
                            <div className="text-center py-3">
                                <button
                                    className="btn btn-success btn-sm m-2 mb-0"
                                    type="submit"
                                    onClick={()=>this.onSubmit(title)}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>



                    </div>


            </>

        )
    }
}

export default MyQueries